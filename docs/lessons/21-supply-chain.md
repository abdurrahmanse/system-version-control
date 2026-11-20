# Lesson 21: Supply-chain security

## Goal
Make the origin and integrity of source, dependencies and released artifacts auditable.

## Controls
- Pin third-party actions to immutable commits.
- Track direct and transitive dependencies.
- Generate and retain SBOM evidence.
- Sign or attest release artifacts.
- Verify that production matches the reviewed commit and artifact.

## Commands
```bash
gh api repos/OWNER/REPO/dependency-graph/sbom
gh api repos/OWNER/REPO/dependabot/alerts
gh attestation verify OWNER/REPO --owner OWNER
```
