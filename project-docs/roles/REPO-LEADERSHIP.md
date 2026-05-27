# Lead and Deputy Maintainers for Vega

## Motivation

As the Vega ecosystem has grown across multiple (100+) repositories, it became harder to tell where maintenance capacity exists, which work is blocked, and who is coordinating review, triage, and release readiness for each repo. There was also not a clear path for sponsors or new contributors to identify who within the current volunteer team is both available and equipped to provide this kind of support.

This document creates a lightweight Lead Maintainer role for repositories. The goal is to make coordination responsibility visible, reduce ambiguity, and improve contributor understanding of the level of support available for each Vega repository.

This proposal does not change existing admin or Steering Committee roles. It aims to address a gap in responsibilities for the existing Maintainer role.

## Staffing requirement and lifecycle status

A repository is considered **active** only when it has a named Lead Maintainer. A named Deputy Maintainer is strongly recommended to ensure continuity when the Lead is unavailable and to avoid PR freezes.

A repository that cannot sustain a named Lead — drawing instead from the shared maintainer pool — should be marked **maintenance** rather than active. This is not a judgment on the project's value; it is an honest signal about the level of dedicated coordination currently available.

If an active repository loses its Lead with no replacement identified, it should be moved to maintenance status until a new Lead is selected.

## Role

A Lead Maintainer is an active maintainer who coordinates the health of a repository. The Lead helps ensure that issues and PRs are triaged, review needs are visible, release blockers are tracked, and cross-project or unresolved decisions are escalated.

A Deputy Lead Maintainer shares these responsibilities and acts when the Lead is unavailable.

## Responsibilities

The Lead Maintainer is responsible for activities such as:

- being a point of contact for new contributors
- ensuring issues and PRs are labeled and routed on a regular basis
- ensuring contributors (of code or issues) are able to receive quality feedback
- identifying blocked or stale PRs
- making release blockers and release-readiness tasks visible
- routing contributor questions to the right place
- documenting major decisions publicly
- keeping the repo health status current
- escalating cross-repo/spec/API issues
- making the repo's need for additional maintainer, reviewer, docs, or triage capacity visible to the Steering Committee

## Non-responsibilities

The Lead Maintainer is not expected to:

- personally fix each bug
- personally review each PR
- guarantee response times
- carry the repository alone
- accept new features without a maintenance path
- make unilateral breaking changes
- override maintainer consensus

## Authority

The Lead Maintainer works through the normal public contribution, review, and consensus processes.

The Lead may organize labels, milestones, and project boards; summarize apparent consensus; request review; close clearly duplicate or out-of-scope issues according to documented policy; identify release blockers; and escalate unresolved or cross-project decisions.

The Lead does not own the repository and does not have authority to override project governance.

## Selection criteria

Lead Maintainers should have a track record of consistent, high-quality contributions to the repository, and be comfortable proposing a level of involvement that fits their circumstances.

Lead and Deputy Maintainers may be nominated by current maintainers or may self-nominate. Selection should be by lazy consensus of active maintainers for that repository, with Steering Committee awareness or ratification for critical repositories.

Lead and Deputy roles should be reviewed at least annually, or when a repository's health status changes.

## Status and transition

| Repo status | What it means |
| --- | --- |
| Active | Has a named Lead Maintainer; Deputy is strongly recommended. |
| Maintenance | No named Lead; draws from the shared maintainer pool. |
| Archive candidate | No active maintainer coverage; Steering Committee should evaluate archiving. |

Lead Maintainer suggested term length is 1 year; terms can be renewed. If a critical repository has no Lead, it becomes a top priority for the Steering Committee to recruit or develop one.

If a Lead or Deputy needs to step back temporarily, they should communicate this to maintainers and may move to **On Leave** status, with the Deputy (if present) assuming coordination responsibilities in the interim. If no Deputy exists, the Steering Committee should be notified.

## Emeritus and stepping down

The intent of this section is planning accuracy for a volunteer team, not removal from the community.

### Voluntary transition

A Lead or Deputy who is no longer able to serve in the role should let the maintainer group know, ideally with some notice to allow for a handoff. There is no minimum tenure required before stepping down.

### Inactivity-based transition

A Lead or Deputy with no qualifying activity in the relevant repository for the previous 6 months may be nominated for emeritus transition by any maintainer. Qualifying activity includes commits, pull request authorship or review, and substantive issue participation in that repository.

Before opening an emeritus PR, the nominating maintainer should:

1. Make a best-effort attempt to contact the person via Slack, email, or another preferred channel.
2. Wait at least 30 days after first outreach before proceeding. If there is no response after 60 days, they may proceed.
3. Include a brief activity summary and a note of outreach attempts in the PR description.

The transition PR should update any relevant role records (e.g. `project-inventory.yml` or equivalent) to reflect the new Lead/Deputy assignment or the repo's downgrade to maintenance status.

### After transition

Emeritus Leads and Deputies retain community membership and remain welcome participants. They may return to a Lead or Deputy role through the normal nomination and approval process.

This per-repo emeritus process is separate from, and in addition to, the org-wide Maintainer emeritus process described in [GOVERNANCE.md](../GOVERNANCE.md).
