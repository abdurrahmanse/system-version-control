# Lesson 19: Rulesets and branch protection

## Goal
Apply enforceable branch policy centrally and keep bypass authority auditable.

## Required controls
1. No direct push to production branches.
2. Required pull request review.
3. Required code-owner review where risk requires it.
4. Required CI and security checks.
5. No deletion or force push.
6. Limited, justified and logged bypass.

## Commands
```bash
gh api repos/OWNER/REPO/rulesets
gh api repos/OWNER/REPO/rules/branches/main
gh api repos/OWNER/REPO/branches/main/protection
```
