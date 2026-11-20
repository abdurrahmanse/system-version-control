# Lesson 18: Repository governance

## Goal
Create consistent repositories with clear ownership and a standard lifecycle.

## Baseline
- Repository template
- README and security policy
- CODEOWNERS
- Dependabot configuration
- Required labels and issue templates
- Custom properties for owner, tier and lifecycle
- Archive and deletion rules

## Commands
```bash
gh repo view OWNER/REPO
gh api repos/OWNER/REPO/collaborators
gh api repos/OWNER/REPO/contents/.github/CODEOWNERS
```
