import type { ExampleSlug } from "@/modules/example/data/example";

export type ExampleStep = { title: string; command: string; effect: string };

// Short on purpose: what to type and what changes in the system. OWNER, REPO and ORG are placeholders.
export const EXAMPLE_STEPS: Record<ExampleSlug, readonly ExampleStep[]> = {
  architecture: [
    { title: "Make the root", command: "mkdir agro-farm && cd agro-farm", effect: "One folder will hold every part." },
    {
      title: "Create the six parts",
      command: "mkdir -p apps/web apps/api apps/worker packages/db packages/ui infra .github/workflows",
      effect: "Each part has its own folder; they share one history.",
    },
    {
      title: "Declare the workspace",
      command: 'printf \'packages:\\n  - "apps/*"\\n  - "packages/*"\\n\' > pnpm-workspace.yaml',
      effect: "pnpm links the parts so web can import ui.",
    },
  ],
  repository: [
    {
      title: "Start Git on main",
      command: "git init -b main",
      effect: "An empty repository with main as the default branch.",
    },
    {
      title: "Ignore what must not be saved",
      command: "printf 'node_modules\\n.env*\\n!.env.example\\n.next\\ndist\\n' > .gitignore",
      effect: "Secrets and build output stay out of history.",
    },
    { title: "Stage everything", command: "git add .", effect: "The skeleton is ready for the first commit." },
    {
      title: "First commit",
      command: 'git commit -m "chore: initial monorepo skeleton"',
      effect: "History starts. This is the root of every branch.",
    },
    {
      title: "Create the GitHub repository",
      command: "gh repo create agro-farm --private --source . --push",
      effect: "The remote exists and main is uploaded.",
    },
    {
      title: "Set merge rules",
      command: "gh repo edit --enable-squash-merge --enable-auto-merge --delete-branch-on-merge",
      effect: "One clean commit per pull request; merged branches disappear.",
    },
    {
      title: "Add labels",
      command: 'gh label create "type: feature" --color 0E8A16',
      effect: "Issues and pull requests can be sorted.",
    },
  ],
  branches: [
    {
      title: "Start a feature",
      command: "git switch -c feature/crop-planner main",
      effect: "A short-lived branch off main (see the graph).",
    },
    {
      title: "Open a release branch",
      command: "git switch -c release/1.2 main",
      effect: "Only fixes enter this branch while the release is tested.",
    },
    {
      title: "Start a hotfix from the tag",
      command: "git switch -c hotfix/login-fix v1.2.0",
      effect: "You fix exactly what production runs.",
    },
    { title: "See what is merged", command: "git branch --merged main", effect: "Branches that are safe to delete." },
    {
      title: "Delete a merged branch",
      command: "git branch -d feature/crop-planner",
      effect: "Keeps the branch list short.",
    },
    {
      title: "Forget deleted remote branches",
      command: "git fetch --prune",
      effect: "Your remote-tracking list matches GitHub.",
    },
  ],
  "feature-flow": [
    {
      title: "Create the issue",
      command: 'gh issue create --title "Add crop planner" --label "type: feature"',
      effect: "The work has a number, for example #12.",
    },
    {
      title: "Branch from main",
      command: "git switch -c feature/crop-planner main",
      effect: "Your changes are isolated.",
    },
    { title: "Choose what to stage", command: "git add -p", effect: "Only intended changes are in the commit." },
    {
      title: "Commit",
      command: 'git commit -m "feat(web): add crop planner form"',
      effect: "A small, labelled snapshot (Conventional Commits).",
    },
    { title: "Publish the branch", command: "git push -u origin HEAD", effect: "GitHub has the branch; CI can start." },
    {
      title: "Open the pull request",
      command: 'gh pr create --fill --base main --body "Closes #12"',
      effect: "Review begins and issue #12 will close on merge.",
    },
    {
      title: "Watch the checks",
      command: "gh pr checks --watch",
      effect: "You see lint, tests and build results live.",
    },
    {
      title: "Merge when green",
      command: "gh pr merge --squash --auto --delete-branch",
      effect: "GitHub merges as soon as rules pass, then removes the branch.",
    },
    {
      title: "Update your local main",
      command: "git switch main && git pull --ff-only",
      effect: "Your copy matches production-bound code.",
    },
  ],
  "ci-cd": [
    { title: "List the workflows", command: "gh workflow list", effect: "Shows ci.yml, deploy.yml and others." },
    { title: "See recent runs", command: "gh run list --workflow ci.yml", effect: "Green or red, per commit." },
    { title: "Follow one run", command: "gh run watch", effect: "Live progress of the pipeline." },
    { title: "Read a failure", command: "gh run view --log-failed", effect: "Only the failing steps are printed." },
    {
      title: "Create the production environment",
      command: "gh api --method PUT repos/OWNER/REPO/environments/production",
      effect: "Deploys to production can require approval.",
    },
    {
      title: "Store a secret per environment",
      command: "gh secret set DATABASE_URL --env production",
      effect: "Only production jobs can read it.",
    },
    {
      title: "Store a non-secret setting",
      command: "gh variable set API_URL --env staging --body https://staging.example.com",
      effect: "Staging and production use different URLs.",
    },
    {
      title: "Deploy by hand when needed",
      command: "gh workflow run deploy.yml --ref main -f environment=staging",
      effect: "Starts the deploy workflow on demand.",
    },
  ],
  releases: [
    {
      title: "Find the last version",
      command: "git describe --tags --abbrev=0",
      effect: "Prints the latest tag, e.g. v1.1.0.",
    },
    {
      title: "Freeze a release branch",
      command: "git switch -c release/1.2 main",
      effect: "main keeps moving; the release does not.",
    },
    {
      title: "Tag the version",
      command: 'git tag -a v1.2.0 -m "Release 1.2.0"',
      effect: "A permanent name for exactly this commit.",
    },
    {
      title: "Publish the tag",
      command: "git push origin v1.2.0",
      effect: "The deploy workflow can start on the tag.",
    },
    {
      title: "Publish the notes",
      command: "gh release create v1.2.0 --generate-notes --verify-tag",
      effect: "A GitHub Release with the list of merged pull requests.",
    },
    { title: "Check the result", command: "gh release view v1.2.0", effect: "Confirms title, notes and assets." },
  ],
  protection: [
    {
      title: "Describe the rules in a file",
      command: 'printf \'{"name":"protect-main"}\' > ruleset.json',
      effect: "Start from a small JSON file, then add rules (pull request, checks, no force push).",
    },
    {
      title: "Create the ruleset",
      command: "gh api --method POST repos/OWNER/REPO/rulesets --input ruleset.json",
      effect: "Rules apply to everyone, including admins unless bypass is allowed.",
    },
    { title: "List the rulesets", command: "gh ruleset list", effect: "See what is active." },
    { title: "Test a branch", command: "gh ruleset check main", effect: "Shows every rule that applies to main." },
    {
      title: "Assign owners",
      command: "printf '/apps/api/ @ORG/backend\\n/infra/ @ORG/platform\\n' > .github/CODEOWNERS",
      effect: "Changes to those paths need that team's review.",
    },
  ],
  security: [
    {
      title: "Update dependencies automatically",
      command: "gh api repos/OWNER/REPO/vulnerability-alerts --method PUT",
      effect: "GitHub alerts you about vulnerable packages.",
    },
    {
      title: "Add Dependabot updates",
      command: "mkdir -p .github && touch .github/dependabot.yml",
      effect: "Then list npm and github-actions ecosystems inside it.",
    },
    {
      title: "Check secret scanning alerts",
      command: "gh api repos/OWNER/REPO/secret-scanning/alerts",
      effect: "Leaked keys appear here.",
    },
    {
      title: "Check code scanning alerts",
      command: "gh api repos/OWNER/REPO/code-scanning/alerts",
      effect: "Code problems found by CodeQL.",
    },
    {
      title: "Sign your commits",
      command: "git config --global commit.gpgsign true",
      effect: "Every commit gets a signature.",
    },
    {
      title: "Verify an artifact",
      command: "gh attestation verify app.tar.gz --repo OWNER/REPO",
      effect: "Proves where the file was built.",
    },
  ],
  database: [
    {
      title: "Branch for the schema change",
      command: "git switch -c feature/add-field-area main",
      effect: "Schema and code change together in one pull request.",
    },
    {
      title: "Generate a migration file",
      command: "pnpm --filter db exec prisma migrate dev --name add_field_area",
      effect: "A new SQL file lands in packages/db/migrations.",
    },
    {
      title: "Commit code and migration together",
      command: "git add packages/db apps/api",
      effect: "Reviewers see both sides.",
    },
    {
      title: "Check the migration in CI",
      command: "gh pr checks --watch",
      effect: "CI applies it to a throwaway database.",
    },
    {
      title: "Apply in production on release",
      command: "gh workflow run migrate.yml --ref v1.2.0 -f environment=production",
      effect: "The schema changes before the new code is switched on.",
    },
  ],
  incidents: [
    {
      title: "Find the bad change",
      command: "git log --oneline -10",
      effect: "The suspect is usually one of the last merges.",
    },
    {
      title: "Undo a merged pull request",
      command: "git revert -m 1 MERGE_COMMIT",
      effect: "A new commit reverses it; history stays intact.",
    },
    {
      title: "Ship the revert",
      command: "gh pr create --fill --base main",
      effect: "The usual checks and deploy run.",
    },
    {
      title: "Or hotfix from the live tag",
      command: "git switch -c hotfix/login-fix v1.2.0",
      effect: "A small fix on exactly what is running.",
    },
    { title: "Tag the fix", command: 'git tag -a v1.2.1 -m "Hotfix 1.2.1"', effect: "A new version for the deploy." },
    {
      title: "Redeploy the previous release",
      command: "gh workflow run deploy.yml --ref v1.1.0 -f environment=production",
      effect: "Fastest rollback: run the last good version.",
    },
  ],
};
