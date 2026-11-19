# Changesets

Every user-facing change gets a changeset: run `pnpm changeset`, pick the bump (patch, minor, major) and
describe the change. When releasing, `pnpm version-packages` consumes the files, bumps `package.json` and
writes `CHANGELOG.md`. See docs/lessons/11-tags-releases.md.
