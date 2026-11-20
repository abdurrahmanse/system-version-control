# Lesson 20: Enterprise CI/CD

## Goal
Design a governed promotion path from pull request preview through production.

## Controls
- Pin reusable workflows and actions.
- Grant only required workflow permissions.
- Use OIDC for cloud credentials.
- Require environment approvals for production.
- Pin runners or use isolated ephemeral runners for sensitive work.

## Commands
```bash
gh workflow list
gh run watch
gh api repos/OWNER/REPO/environments
gh api orgs/ORG/actions/permissions
```
