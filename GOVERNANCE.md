# Vega Project Governance

## Scope and Goals

This governance document describes the governance model for [Vega](https://github.com/vega/vega), [Vega-Lite](https://github.com/vega/vega-lite), [Vega-Embed](https://github.com/vega/vega-embed), [Vega-Datsets](https://github.com/vega/vega-datasets), [Vega-Themes](https://github.com/vega/vega-themes), and [Vega-Tooltips](https://github.com/vega/vega-tooltip). These projects are collectively referred to as the "Vega projects" in this document. The Vega projects are in the [vega](https://github.com/vega) GitHub organizations.

The [Vega-Altair](https://github.com/altair-viz/altair) project's governance model is documented at [altair-viz/altair/governance](https://github.com/altair-viz/altair/blob/main/governance/project-docs/GOVERNANCE.md).

Our goal is to encourage a diverse community of contributors and users to participate in the development of the Vega projects.

## Roles

We define three levels of roles in the Vega projects: Contributors, Maintainers, and Admins. We expect everyone to adhere to our [Code of Conduct](CODE_OF_CONDUCT.md).

### Contributors

Contributors are anyone who makes a contribution to a Vega project via GitHub. This includes filing issues, sending pull requests, and participating in discussions. There are no requirements to participate and we encourage everyone to contribute. You do not have to be a Maintainer to send a pull request.

### Maintainers

Maintainers belong to all or some subset of Vega projects. Maintainers are responsible for organizing activities around developing, maintaining, and updating the project. Maintainers have write access and can push directly to branches on GitHub. Maintainers also have access to specific developer channels on Slack.

To become a Maintainer, a contributor must be nominated by an existing Maintainer and approved by a majority of Maintainers via Slack reactions within 7 days (simple majority of responses). A new Maintainer should be added to 1) the GitHub team, 2) the Slack channel, and 3) the [maintainers.md file](MAINTAINERS.md). We want more people to become Maintainers and lower the barrier the enter. If you are interested in becoming a Maintainer, please reach out to an existing Maintainer.

Maintainers who are inactive for more than six months may be removed from the maintainer list.

### Admins

Admins are maintainers who can make and are responsible for releases. Admins are [owners of the GitHub organization](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#organization-owners).

To become an Admin, a Maintainer must be nominated and approved by the existing Admins using the same process as for Maintainers. Admins are listed in the [admins.md file](ADMINS.md).

Admins who are inactive for a year may be removed from the Admin list.

## Project-specific development guidelines

Each Vega project may have its own development guidelines in a `CONTRIBUTING.md` file. For example, [Vega-Lite's contributing guide](https://github.com/vega/vega-lite/blob/main/CONTRIBUTING.md) describes design and development principles.

## Decision-making process

Major technical decisions should be made in public using GitHub discussions or GitHub issues. While we use [Slack](https://bit.ly/join-vega-slack-2022) for more direct discussions, any results should be documented on GitHub where they are accessible to everyone. Note that we don't pay for Slack and so any discussions disappear after 90 days.
