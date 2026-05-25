#!/usr/bin/env node

const fs = require('node:fs/promises');
const path = require('node:path');
const process = require('node:process');
const YAML = require('yaml');
const Ajv2020 = require('ajv/dist/2020');
const { Octokit } = require('@octokit/rest');

const ROOT = process.cwd();
const INVENTORY_PATH = path.join(ROOT, 'project-inventory.yml');
const SCHEMA_PATH = path.join(ROOT, 'project-inventory.schema.yml');
const SUPPORT_DEFAULTS = {
  active: 'full',
  experimental: 'best_effort',
  maintenance: 'best_effort',
  deprecated: 'none',
  archived: 'none',
};

function formatAjvErrors(errors = []) {
  return errors.map((err) => {
    const loc = err.instancePath || '/';
    return `- ${loc} ${err.message}`;
  });
}

async function readYaml(filePath) {
  const raw = await fs.readFile(filePath, 'utf8');
  return YAML.parse(raw);
}

function warn(msg) {
  console.warn(`[warn] ${msg}`);
}

function fail(msg) {
  console.error(`[error] ${msg}`);
}

function supportLevelFor(entry) {
  return entry.support_level || SUPPORT_DEFAULTS[entry.lifecycle_status];
}

async function fetchPublicRepos(org, token) {
  const octokit = new Octokit({ auth: token });
  const repos = await octokit.paginate(octokit.repos.listForOrg, {
    org,
    type: 'public',
    per_page: 100,
  });
  return repos;
}

async function main() {
  const inventory = await readYaml(INVENTORY_PATH);
  const schema = await readYaml(SCHEMA_PATH);

  const ajv = new Ajv2020({ allErrors: true, strict: false });
  const validate = ajv.compile(schema);
  const valid = validate(inventory);

  if (!valid) {
    fail('Inventory failed schema validation.');
    for (const err of formatAjvErrors(validate.errors)) {
      fail(err);
    }
    process.exit(1);
  }

  const repoEntries = inventory.repos || [];
  const researchDefaults = inventory.research_prototypes?.defaults || null;
  const researchEntriesRaw = inventory.research_prototypes?.repos || [];
  const researchEntries = researchEntriesRaw.map((entry) => {
    if (typeof entry === 'string') {
      return { ...(researchDefaults || {}), name: entry };
    }
    return { ...(researchDefaults || {}), ...entry };
  });
  const archivedEntriesRaw = inventory.archived_repos || [];
  const archivedEntries = archivedEntriesRaw.map((name) => ({
    name,
    lifecycle_status: 'archived',
    project_role: 'historical',
    owner_model: 'unowned',
    support_level: 'none',
  }));
  const allEntries = [...repoEntries, ...researchEntries, ...archivedEntries];
  const uncategorized = new Set(inventory.uncategorized_repos || []);
  const inventoryByName = new Map();
  let hasErrors = false;

  for (const entry of allEntries) {
    if (inventoryByName.has(entry.name)) {
      fail(`Duplicate inventory entry for repository '${entry.name}'.`);
      hasErrors = true;
      continue;
    }
    inventoryByName.set(entry.name, entry);

    const effectiveSupportLevel = supportLevelFor(entry);

    if (entry.lifecycle_status === 'archived' && effectiveSupportLevel !== 'none') {
      fail(`'${entry.name}' is archived but support_level is not 'none'.`);
      hasErrors = true;
    }

    if (entry.owner_model === 'named_lead' && !entry.repo_lead) {
      fail(`'${entry.name}' uses owner_model 'named_lead' but repo_lead is missing.`);
      hasErrors = true;
    }

    if (entry.owner_model === 'unowned') {
      const hasSupportNone = effectiveSupportLevel === 'none';
      const hasClarifyingNote = typeof entry.notes === 'string' && entry.notes.trim().length > 0;
      if (!hasSupportNone && !hasClarifyingNote) {
        warn(`'${entry.name}' is 'unowned' but neither support_level:none nor clarifying notes were provided.`);
      }
    }

    if (
      (entry.lifecycle_status === 'deprecated' || entry.lifecycle_status === 'archived') &&
      !entry.replacement
    ) {
      warn(`'${entry.name}' is ${entry.lifecycle_status} and has no replacement set. Verify this is intentional.`);
    }
  }

  const token = process.env.GITHUB_TOKEN;
  const org = process.env.GITHUB_ORG || 'vega';

  if (!token) {
    warn('GITHUB_TOKEN is not set; skipping GitHub org drift checks.');
    process.exit(hasErrors ? 1 : 0);
  }

  const orgRepos = await fetchPublicRepos(org, token);
  const orgRepoNames = new Set(orgRepos.map((repo) => repo.name));

  for (const repoName of orgRepoNames) {
    if (!inventoryByName.has(repoName) && !uncategorized.has(repoName)) {
      fail(`Public repository '${repoName}' is missing from project-inventory.yml.`);
      hasErrors = true;
    }
  }

  for (const [repoName, entry] of inventoryByName.entries()) {
    if (!orgRepoNames.has(repoName)) {
      fail(`Inventory entry '${repoName}' does not match an existing public repository in ${org}.`);
      hasErrors = true;
      continue;
    }

    const repo = orgRepos.find((r) => r.name === repoName);
    if (repo && repo.archived && entry.lifecycle_status !== 'archived') {
      const hasExplicitReason = typeof entry.notes === 'string' && entry.notes.trim().length > 0;
      if (!hasExplicitReason) {
        fail(`'${repoName}' is archived on GitHub but lifecycle_status is '${entry.lifecycle_status}' with no explicit note.`);
        hasErrors = true;
      } else {
        warn(`'${repoName}' is archived on GitHub but inventory lifecycle_status is '${entry.lifecycle_status}'. Notes provided; confirm intent.`);
      }
    }
  }

  if (hasErrors) {
    process.exit(1);
  }

  console.log('Project inventory checks passed.');
}

main().catch((err) => {
  fail(err.stack || String(err));
  process.exit(1);
});
