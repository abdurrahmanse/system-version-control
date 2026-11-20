# Lesson 16: GitHub organization architecture

## Goal
Design the enterprise account, organization, team and repository boundaries before granting access or applying policy.

## Operating model
1. Assign organization owners and repository owners.
2. Separate stable delivery teams from temporary projects.
3. Map repositories to owner teams, service tiers and support status.
4. Keep privileged organization roles limited and reviewed.

## Commands
```bash
gh api user/orgs
gh api orgs/ORG
gh repo list ORG --limit 100
gh api orgs/ORG/teams
```

## Practice
Create an architecture diagram with enterprise, organizations, teams and repositories. Add owner and escalation fields to every repository entry.
