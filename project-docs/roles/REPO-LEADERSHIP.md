# Lead and Deputy Maintainers for Vega Projects

This document outlines the roles for per-repository leadership, and the relationship between these roles and project lifecycle status.

## Staffing requirement and repository lifecycle status

### Roles: Lead and Deputy

A Lead Maintainer is an active maintainer who assumes responsibility for keeping an individual repository healthy and capable of supporting contributions and usage. The Lead helps ensure issues and PRs are triaged, review needs are visible, release blockers are tracked, and cross-project or unresolved decisions are escalated. If a Lead wishes to recognize other maintainers as Co-Leads, they may do so if approved by Steering Comittee vote.

A Deputy Lead Maintainer shares these responsibilities and acts when the Lead is unavailable. A `Deputy Maintainer` is strongly recommended to reduce the risk of burnout, but is not required for a repo to be marked a repo to be`active`.

Lead Maintainer suggested term length is 1 year; terms can be renewed. If a critical repository (vega, vega-lite, altair) does not have a `Lead`, the Steering Committee will discuss how to recruit or develop one.

If a Lead or Deputy needs to step back temporarily, they should communicate this to maintainers in the Vega Slack, and may move to `On Leave` status, with the Deputy assuming coordination responsibilities in the interim. If no Deputy exists, the Steering Committee should be notified instead and the repository will move to `maintenance`

### Responsibilities

The Lead Maintainer for a repository is responsible for

- defining a frequency of involvement with the project they anticipate realistically commit to, and sharing this level of involvement with the Steering Committee
- assisting contributors in understanding levels of priority and complexity for contributions
- regularly acknowledging the volume and quality of contributions to the repo, including issues, pull requests, and security advisories, and informing the Steering Committee when the current maintainer pool is unable to support the current volume
- planning the contents of new releases and coordinating with an ADMIN to issue the release
- keeping the repo `lifecyle_status` status current
- sharing issues relating to the repo's community health (including but not limited to developer experience, code review, architectural quality, triage, securite) visible to the Steering Committee 

Note the Lead Maintainer is NOT expected to personally respond to every contribution, as that can lead to burnout.

These responsibilities are defined to ensure every `active` repository has a person thinking about the big picture for that project that is equipped with enough project context to do so effectively. In addition to being equipped with project context, this person is also empowered with the authority to let parties with vested interested in sustaining Vega's health (including the Steering Committee and Resaerch/commercial users of Vega) to understand where support will be most impactful.

### Authority

The Lead Maintainer works through the normal public contribution, review, and consensus processes associated with regular maintainers, with one exception: A lead maintainer can merge a PR without a review from another maintainer, as long as they describe why this is necessary on the PR It is expected that a maintainer makes a best effort to find a reviewer before doing this. Since using this power goes against the usual expetation that every PR is reviewed by that repoository's CODEOWNERS, it is granted with the expectation that the lead maintainer has the technical and orgnizational context to judge when the loss of benefits from code review are outweighed by the benefits to Vega's users.

### Selection criteria

Lead Maintainers should have a track record of consistent, high-quality contributions to the repository, and be comfortable proposing and holding themselves accountable to a level of involvement that fits their circumstances.

Lead and Deputy Maintainers may be nominated by current maintainers or may self-nominate. Selection should be by [consensus](https://github.com/vega/.github/blob/main/project-docs/GOVERNANCE.md#consensus-based-decision-making) of active maintainers for that repository held in the Vega slack, with ratification by Steering Committee for critical repositories (vega, vega-lite, altair).

Lead and Deputy roles should be reviewed at annually, or when a repository's health status changes.

## Repository status and transition

### `lifecycle_status`

Any `active`repository's `lifecyle_status` should be clearly marked near the top of the project's `README.md`

| Value | Meaning |
| --- | --- |
| `active` | Normal development. Issues are triaged, pull requests are reviewed, and releases are expected. Requires a named Lead Maintainer. |
| `maintenance` | Limited development activity, as coordination capacity is limited compared to `active` projects  |
| `experimental` | Exploratory work / research projects. APIs and scope may change without notice. |
| `deprecated` | Not maintained, there's a replacement you should use instead |
| `archived` | Historical or read-only project. No support  expected. Status is marked by Github's "archived" feature |

The difference between `active` and `maintenance` is coordination capacity rather than activity level. A repository in `maintenance` can have high levels of issues and PRs than an `active` repository, but if there isn't a lead, it still should not be marked `active`.

A repository that does not have a named Lead will be supported collectively by the shared pool of Maintainers (as described in MAINTAINERS.md) will be marked `maintenance` . This is recommended so consumers of `maintenance` repos can have realistic expectations about the level of support available.


## Emeritus and stepping down

### Voluntary transition

A Lead or Deputy who is no longer able to serve in the role should let the maintainer group know in Slack and Github, ideally with advance notice to allow for a handoff.

### Inactivity-based transition

A Lead or Deputy with no qualifying activity in the relevant repository for the previous 6 months may be nominated for emeritus transition by any maintainer. Qualifying activity includes commits, pull request authorship or review, and substantive issue participation in that repository.

Before opening an emeritus PR, the nominating maintainer should:

1. Make a best-effort attempt to contact the person via Slack, email, or another preferred channel.
2. Wait at least 30 days after first outreach before proceeding. If there is no response after 60 days, they may proceed.
3. Include a brief activity summary and a note of outreach attempts in the PR description.

The transition PR should update any relevant role records (e.g. `project-inventory.yml` or equivalent) to reflect the new Lead/Deputy assignment or the repo's downgrade to maintenance status.

### After transition

Emeritus Leads and Deputies may return to the role at any time through the normal nomination and approval process.
