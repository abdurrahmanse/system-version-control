# Lesson 17: Identity, SSO, SCIM and access

## Goal
Operate least-privilege access through the full identity lifecycle.

## Controls
- Require SSO where managed identities are the source of truth.
- Provision and deprovision users through SCIM.
- Grant repository access through teams, not individuals.
- Review outside collaborators and organization owners regularly.

## Commands
```bash
gh api orgs/ORG/members
gh api orgs/ORG/outside_collaborators
gh api orgs/ORG/teams/TEAM_SLUG/members
gh api orgs/ORG/audit-log --paginate
```
