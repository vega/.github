# Project Status Definitions

This document defines public metadata values used by [`project-inventory.yml`](./project-inventory.yml).

Field usage:

- `support_level` is optional; default inference is `active -> full`, `experimental -> best_effort`, `maintenance -> best_effort`, `deprecated -> none`, `archived -> none`.
- `replacement` is optional and should be included when a clear migration target exists.
- `notes` is optional and should be used sparingly for exceptions that are not captured by enum fields.
- `uncategorized_repos` is a holding list for known public repos that are intentionally not fully classified yet (often lightly maintained, historical, or low-signal repos).
- `core_maintainers` is optional and should be used when a repository has clear, consistent maintainer leadership.
- `research_prototypes` groups research repositories that share common lifecycle/support/ownership defaults to reduce repetitive metadata.
- `archived_repos` is a flat list of historical repositories; entries implicitly map to `lifecycle_status: archived`, `project_role: historical`, `owner_model: unowned`, and `support_level: none`.

## `lifecycle_status`

| Value | Meaning |
| --- | --- |
| `active` | Normal development. Issues, pull requests, and releases are expected. |
| `experimental` | Exploratory work. APIs, scope, or long-term maintenance may change. |
| `maintenance` | Kept working, but limited new feature development. |
| `deprecated` | Users should migrate elsewhere. A replacement should be listed where possible. |
| `archived` | Historical or read-only project. No support is expected. |

## `support_level`

| Value | Meaning |
| --- | --- |
| `full` | Maintainers expect to review issues/security reports and publish releases as appropriate. |
| `best_effort` | Maintained when time allows; no strong response commitment. |
| `none` | Historical or unsupported; no maintainer response should be expected. |

## `project_role`

| Value | Meaning |
| --- | --- |
| `primary` | Main Vega/Altair library, runtime, grammar, service, schema, editor, or public-facing site. |
| `ecosystem` | Important package, helper, extension, dataset, or ecosystem utility. |
| `integration` | Framework, platform, package-manager, documentation, or external-system integration. |
| `example` | Tutorial, demo, sample, benchmark, or teaching material. |
| `research` | Research prototype, exploratory system, proposal, or academic project. |
| `infrastructure` | Build, deployment, governance, CI, org metadata, or operational tooling. |
| `historical` | Superseded, archived, version-specific, or retained for historical reference. |

## `owner_model`

| Value | Meaning |
| --- | --- |
| `org_shared` | The Vega maintainer group collectively owns the repository. |
| `named_lead` | We have a primary maintainer for triage, release, or review leadership |
| `unowned` | No active maintainer ownership; generally reserved for archived or unsupported repositories. |
