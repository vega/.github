# Project Status Definitions

This document defines the lifecycle and ownership metadata used to describe the health and staffing of Vega project repositories.

## `lifecycle_status`

| Value | Meaning |
| --- | --- |
| `active` | Normal development. Issues, pull requests, and releases are expected. Requires a named Lead Maintainer; a Deputy is strongly recommended. See [project-docs/roles/REPO-LEADERSHIP.md](project-docs/roles/REPO-LEADERSHIP.md). |
| `experimental` | Exploratory work. APIs, scope, or long-term maintenance may change. |
| `maintenance` | Kept working, but limited new feature development. No named Lead; draws from the shared maintainer pool. |
| `deprecated` | Users should migrate elsewhere. A replacement should be listed where possible. |
| `archived` | Historical or read-only project. No support is expected. |

The distinction between `active` and `maintenance` is primarily about dedicated coordination capacity, not activity level. A busy repository without a named Lead is in `maintenance`, not `active`.

## `owner_model`

| Value | Meaning |
| --- | --- |
| `named_lead` | Has a named Lead Maintainer responsible for coordination. Required for `active` lifecycle status. |
| `org_shared` | The Vega maintainer group collectively owns the repository. Typical for `maintenance` status. |
| `unowned` | No active maintainer ownership; generally reserved for `deprecated` or `archived` repositories. |
