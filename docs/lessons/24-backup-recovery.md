# Lesson 24: Backup and recovery

## Goal
Recover critical GitHub repositories and platform configuration after deletion or account compromise.

## Baseline
- Define RPO and RTO.
- Identify critical repositories and organization configuration.
- Decide where mirrors or exports are stored.
- Encrypt backups and separate administrative access.
- Test restoration regularly.

## Commands
```bash
git clone --mirror git@github.com:OWNER/REPO.git
git --git-dir=backup/REPO.git for-each-ref refs/heads refs/tags
gh api orgs/ORG/audit-log --paginate
```
