# Lesson 22: Security and compliance operations

## Goal
Turn findings and audit events into remediation, evidence and accountable decisions.

## Controls
- Revoke leaked secrets before cleaning history.
- Assign owner, severity and remediation SLA to findings.
- Preserve audit evidence with restricted access.
- Separate tool findings from formal compliance claims.
- Track recurring exceptions and expiry dates.

## Commands
```bash
gh api orgs/ORG/audit-log --paginate
gh api orgs/ORG/secret-scanning/alerts
gh api repos/OWNER/REPO/code-scanning/alerts
```
