// Single source of truth for the learning path.
// Keep in sync with docs/ROADMAP.md and docs/PROGRESS.md.

export type Level = "Beginner" | "Intermediate" | "Advanced" | "Pro Max" | "Enterprise";

export type Lesson = {
  n: number;
  title: string;
  level: Level;
  summary: string;
  learn: string[];
  commands: string[];
  task: string;
  doc: string;
};

export const LEVELS: { name: Level; numeral: string; tagline: string }[] = [
  { name: "Beginner", numeral: "I", tagline: "Understand Git and make your first commits." },
  { name: "Intermediate", numeral: "II", tagline: "Work with GitHub, pull requests and mistakes." },
  { name: "Advanced", numeral: "III", tagline: "Professional workflow: rebase, releases, CI." },
  { name: "Pro Max", numeral: "IV", tagline: "Automation, forensics, security and open source." },
  { name: "Enterprise", numeral: "V", tagline: "Governance, scale, security and platform operations." },
];

export const LESSONS: Lesson[] = [
  {
    n: 1,
    title: "Setup",
    level: "Beginner",
    summary: "Teach Git who you are and connect to GitHub safely with SSH and the GitHub CLI.",
    learn: ["git config scopes", "SSH keys (ed25519)", "gh authentication"],
    commands: ["git config --global user.name", "ssh-keygen -t ed25519", "gh auth login"],
    task: "Configure identity, SSH and verify with ssh -T git@github.com.",
    doc: "docs/lessons/01-setup.md",
  },
  {
    n: 2,
    title: "The mental model",
    level: "Beginner",
    summary: "Three areas, commits as snapshots, branches as pointers. Understand before you type.",
    learn: ["Working tree, index, repository", "Commit = snapshot + parent", "Branch, HEAD, tag"],
    commands: ["git log --oneline --graph --all", "git cat-file -p HEAD", "git status"],
    task: "Inspect your own repository and explain parent links.",
    doc: "docs/lessons/02-mental-model.md",
  },
  {
    n: 3,
    title: "First commits",
    level: "Beginner",
    summary: "See changes, stage precisely and write commits other people can read.",
    learn: ["add, diff, commit, log", "Conventional Commits", ".gitignore"],
    commands: ["git add -p", "git diff --staged", 'git commit -m "feat: ..."'],
    task: "Split the shadcn setup into three meaningful commits.",
    doc: "docs/lessons/03-first-commits.md",
  },
  {
    n: 4,
    title: "Branches & merge",
    level: "Beginner",
    summary: "Isolate every change on a branch and merge it back. Fast-forward vs merge commit.",
    learn: ["switch -c", "Fast-forward and three-way merge", "Branch naming"],
    commands: ["git switch -c feature/x", "git merge feature/x", "git branch -d feature/x"],
    task: "Build the add-task Dialog on a feature branch.",
    doc: "docs/lessons/04-branches-merge.md",
  },
  {
    n: 5,
    title: "GitHub remotes",
    level: "Intermediate",
    summary: "Sync with GitHub. Fetch before you pull. Read ahead and behind.",
    learn: ["origin and upstream", "fetch vs pull", "Tracking branches"],
    commands: ["git fetch", "git pull", "git push -u origin HEAD"],
    task: "Simulate two clones and sync a commit between them.",
    doc: "docs/lessons/05-github-remote.md",
  },
  {
    n: 6,
    title: "Pull requests",
    level: "Intermediate",
    summary: "Ship every change through a reviewed pull request, even when working alone.",
    learn: ["PR anatomy", "Merge, squash, rebase merge", "Review habits"],
    commands: ["gh pr create", "gh pr checks", "gh pr view --web"],
    task: "Add a Select filter through a full PR cycle.",
    doc: "docs/lessons/06-pull-requests.md",
  },
  {
    n: 7,
    title: "Resolving conflicts",
    level: "Intermediate",
    summary: "Read conflict markers calmly and decide what the final code should be.",
    learn: ["Conflict markers", "merge --abort", "rerere"],
    commands: ["git merge --abort", "git diff --name-only --diff-filter=U", "git add <file>"],
    task: "Create and resolve an intentional conflict.",
    doc: "docs/lessons/07-conflicts.md",
  },
  {
    n: 8,
    title: "Undo anything",
    level: "Intermediate",
    summary: "restore, amend, reset, revert, reflog. Pick the right undo for each situation.",
    learn: ["Three reset modes", "revert for shared history", "reflog safety net"],
    commands: ["git restore <file>", "git reset --soft HEAD~1", "git revert <commit>", "git reflog"],
    task: "Break and rescue a sandbox repository.",
    doc: "docs/lessons/08-undo.md",
  },
  {
    n: 9,
    title: "Stash, rebase, cherry-pick",
    level: "Advanced",
    summary: "Keep history clean: shelve work, replay commits, squash noise.",
    learn: ["stash push/pop", "rebase and interactive rebase", "cherry-pick"],
    commands: ["git stash push -m", "git rebase -i main", "git cherry-pick <commit>"],
    task: "Squash three wip commits into one clean feature commit.",
    doc: "docs/lessons/09-stash-rebase-cherry-pick.md",
  },
  {
    n: 10,
    title: "Issues & project boards",
    level: "Advanced",
    summary: "Track work with Issues, templates, CODEOWNERS and Projects.",
    learn: ["Closes #n linking", "Issue forms, PR template", "CODEOWNERS"],
    commands: ["gh issue create", "gh issue list", "gh issue view"],
    task: "Run one full cycle: issue, branch, PR, merge, auto-close.",
    doc: "docs/lessons/10-issues-projects-templates.md",
  },
  {
    n: 11,
    title: "Tags & releases",
    level: "Advanced",
    summary: "Version your software with SemVer, tags, GitHub Releases and Changesets.",
    learn: ["SemVer", "Annotated tags", "Release notes"],
    commands: ['git tag -a v0.1.0 -m "..."', "gh release create v0.1.0", "pnpm exec changeset"],
    task: "Publish v0.1.0 and a changeset-driven v0.2.0.",
    doc: "docs/lessons/11-tags-releases.md",
  },
  {
    n: 12,
    title: "Protection & CI",
    level: "Advanced",
    summary: "Make main safe: GitHub Actions on every PR, protected branches, Dependabot.",
    learn: ["Workflow YAML", "Required status checks", "Least-privilege secrets"],
    commands: ["gh pr checks", "gh run list", "gh run view --log-failed"],
    task: "Add a lint and build workflow and protect main.",
    doc: "docs/lessons/12-protection-ci.md",
  },
  {
    n: 13,
    title: "Hooks & quality gates",
    level: "Pro Max",
    summary: "Stop bad commits before they exist with husky, lint-staged and commitlint.",
    learn: ["Git hooks", "Staged-file linting", "Enforced commit messages"],
    commands: ["pnpm exec husky init", "pnpm exec lint-staged", "pnpm exec commitlint"],
    task: "Reject a bad commit message automatically.",
    doc: "docs/lessons/13-hooks-quality.md",
  },
  {
    n: 14,
    title: "History forensics",
    level: "Pro Max",
    summary: "Find the commit that broke things. Parallel branches. Repair history carefully.",
    learn: ["bisect", "worktree", "log -S, blame", "Signed commits"],
    commands: ["git bisect start", "git worktree add", 'git log -S"text"'],
    task: "Locate a planted bug with git bisect.",
    doc: "docs/lessons/14-advanced-history.md",
  },
  {
    n: 15,
    title: "Security & workflows",
    level: "Pro Max",
    summary: "Leaked secrets, forks, upstream sync, branching strategies, monorepos.",
    learn: ["Secret leak protocol", "Fork workflow", "GitHub Flow vs trunk vs Git Flow"],
    commands: ["gh repo fork", "git remote add upstream", "git fetch upstream"],
    task: "Capstone: ship v1.0.0 and send one open-source PR.",
    doc: "docs/lessons/15-security-and-workflows.md",
  },
  {
    n: 16,
    title: "GitHub organization architecture",
    level: "Enterprise",
    summary: "Design enterprise accounts, organizations, teams, owners and repository boundaries.",
    learn: ["Enterprise account hierarchy", "Organization ownership", "Team and repository topology"],
    commands: ["gh api user/orgs", "gh api orgs/ORG/teams", "gh api orgs/ORG/repos"],
    task: "Draw and document the organization, team, repository and permission model.",
    doc: "docs/lessons/16-organization-architecture.md",
  },
  {
    n: 17,
    title: "Identity, provisioning and access",
    level: "Enterprise",
    summary: "Control identity with SSO, SCIM, managed users and least-privilege roles.",
    learn: ["SAML and SSO", "SCIM lifecycle", "Repository roles and custom roles"],
    commands: ["gh api enterprise-installation", "gh api orgs/ORG/members", "gh api orgs/ORG/teams"],
    task: "Create an access matrix for joiners, movers and leavers.",
    doc: "docs/lessons/17-identity-access.md",
  },
  {
    n: 18,
    title: "Repository governance",
    level: "Enterprise",
    summary: "Standardize repository settings, visibility, templates and ownership at scale.",
    learn: ["Repository templates", "Custom properties", "Policy and ownership"],
    commands: ["gh repo edit", "gh api orgs/ORG/repos", "gh api repos/OWNER/REPO/rules/branches"],
    task: "Write a repository creation standard and CODEOWNERS baseline.",
    doc: "docs/lessons/18-repository-governance.md",
  },
  {
    n: 19,
    title: "Rulesets and branch protection",
    level: "Enterprise",
    summary: "Enforce pull requests, reviews, checks and history rules across repositories.",
    learn: ["Rulesets", "Required checks", "Push restrictions and bypass policy"],
    commands: ["gh api --method POST repos/OWNER/REPO/rulesets", "gh api repos/OWNER/REPO/rules/branches"],
    task: "Create a default ruleset for all production repositories.",
    doc: "docs/lessons/19-rulesets.md",
  },
  {
    n: 20,
    title: "Enterprise CI/CD",
    level: "Enterprise",
    summary: "Build reusable workflows, environments, approvals and secure deployments.",
    learn: ["Reusable workflows", "OIDC federation", "Deployment environments"],
    commands: ["gh workflow list", "gh workflow run", "gh environment list"],
    task: "Design a promotion flow from pull request preview to production.",
    doc: "docs/lessons/20-enterprise-cicd.md",
  },
  {
    n: 21,
    title: "Supply-chain security",
    level: "Enterprise",
    summary: "Protect the software lifecycle with signatures, provenance, SBOM and pinned actions.",
    learn: ["Pinned actions", "Artifact attestations", "Dependency and release security"],
    commands: [
      "gh attestation verify",
      "gh api repos/OWNER/REPO/dependency-graph/sbom",
      "gh api repos/OWNER/REPO/code-scanning/alerts",
    ],
    task: "Create a supply-chain security baseline and exception process.",
    doc: "docs/lessons/21-supply-chain.md",
  },
  {
    n: 22,
    title: "Security and compliance operations",
    level: "Enterprise",
    summary: "Operate secret scanning, code scanning, audit logs and compliance evidence.",
    learn: ["Security overview", "Secret and code scanning", "Audit and evidence"],
    commands: [
      "gh api orgs/ORG/audit-log",
      "gh api orgs/ORG/secret-scanning/alerts",
      "gh api repos/OWNER/REPO/code-scanning/alerts",
    ],
    task: "Write a remediation SLA and compliance evidence checklist.",
    doc: "docs/lessons/22-security-compliance.md",
  },
  {
    n: 23,
    title: "Migration and platform engineering",
    level: "Enterprise",
    summary: "Migrate repositories safely while preserving history, teams and policies.",
    learn: ["Migration planning", "History and metadata", "Cutover and rollback"],
    commands: ["gh repo view OWNER/REPO", "gh api orgs/ORG/migrations", "gh repo list"],
    task: "Build a migration wave plan with owners and rollback criteria.",
    doc: "docs/lessons/23-migration-platform.md",
  },
  {
    n: 24,
    title: "Backup, recovery and audit",
    level: "Enterprise",
    summary: "Prepare for accidental deletion, account compromise and regional incidents.",
    learn: ["Recovery objectives", "Backup boundaries", "Restoration drills"],
    commands: ["gh api orgs/ORG/audit-log", "gh api repos/OWNER/REPO", "git clone --mirror"],
    task: "Run a tabletop incident and restore exercise.",
    doc: "docs/lessons/24-backup-recovery.md",
  },
  {
    n: 25,
    title: "Enterprise capstone",
    level: "Enterprise",
    summary: "Operate a complete governed GitHub program from identity through recovery.",
    learn: ["Policy as code", "Metrics", "Operating model"],
    commands: ["gh api orgs/ORG", "gh api orgs/ORG/actions/permissions", "gh api orgs/ORG/audit-log"],
    task: "Deliver an enterprise operating blueprint and 90-day adoption plan.",
    doc: "docs/lessons/25-enterprise-capstone.md",
  },
];

// ---------------------------------------------------------------------------
// Detail layer used by /roadmap/[slug]. Sources are official documentation only.
// ---------------------------------------------------------------------------

export type LessonDetail = {
  slug: string;
  checkpoints: string[];
  pitfalls: string[];
  sources: { label: string; href: string }[];
};

const GIT = (cmd: string) => ({ label: `git ${cmd} (official docs)`, href: `https://git-scm.com/docs/git-${cmd}` });

export const LESSON_DETAILS: Record<number, LessonDetail> = {
  1: {
    slug: "setup",
    checkpoints: [
      "git config --global user.name and user.email print your values",
      "gh auth status shows you are logged in",
      "ssh -T git@github.com succeeds (if you chose SSH)",
      "Two-factor authentication is enabled on GitHub",
    ],
    pitfalls: [
      "Pasting your private SSH key anywhere",
      "Using a different email than the one on your GitHub account",
      "Forgetting that --global affects every repository",
    ],
    sources: [
      GIT("config"),
      {
        label: "GitHub: connecting with SSH",
        href: "https://docs.github.com/authentication/connecting-to-github-with-ssh",
      },
    ],
  },
  2: {
    slug: "mental-model",
    checkpoints: [
      "Explain why the staging area exists",
      "Explain why deleting a branch does not instantly delete commits",
      "Explain the difference between main and origin/main",
      "Find the parent line in git cat-file -p HEAD",
    ],
    pitfalls: [
      "Thinking a commit stores a diff (it stores a snapshot)",
      "Confusing Git (the tool) with GitHub (the service)",
    ],
    sources: [{ label: "Pro Git book", href: "https://git-scm.com/book" }],
  },
  3: {
    slug: "first-commits",
    checkpoints: [
      "git log --oneline shows three meaningful commits",
      "git status is clean",
      "You used git add -p at least once",
      "Your messages follow Conventional Commits",
    ],
    pitfalls: [
      "git add . without reading git status",
      "Messages like update, fix or asdf",
      "One huge commit containing unrelated changes",
    ],
    sources: [
      GIT("add"),
      GIT("commit"),
      { label: "Conventional Commits", href: "https://www.conventionalcommits.org/" },
    ],
  },
  4: {
    slug: "branches-merge",
    checkpoints: [
      "You can explain fast-forward vs merge commit",
      "git log --graph shows a merge commit you created",
      "You know the difference between -d and -D",
    ],
    pitfalls: [
      "Committing on main by accident",
      "Deleting an unmerged branch with -D",
      "Long-lived branches that drift from main",
    ],
    sources: [GIT("switch"), GIT("merge")],
  },
  5: {
    slug: "github-remote",
    checkpoints: [
      "You can explain fetch vs pull",
      "You can read ahead and behind in git status -sb",
      "A commit from a second clone arrived in your repo",
    ],
    pitfalls: [
      "Fixing a rejected push with --force",
      "Pulling without looking at what changed",
      "Pushing to the wrong remote",
    ],
    sources: [GIT("fetch"), GIT("pull"), GIT("push")],
  },
  6: {
    slug: "pull-requests",
    checkpoints: [
      "You opened and merged a pull request",
      "You can explain merge, squash and rebase merge trade-offs",
      "Local main is updated and the old branch is deleted",
    ],
    pitfalls: ["Huge PRs nobody can review", "Empty PR descriptions", "Forgetting to update local main after merging"],
    sources: [
      { label: "GitHub: pull requests", href: "https://docs.github.com/pull-requests" },
      { label: "gh pr create", href: "https://cli.github.com/manual/gh_pr_create" },
    ],
  },
  7: {
    slug: "conflicts",
    checkpoints: [
      "You resolved a conflict yourself",
      "You used git merge --abort at least once",
      "You know ours/theirs swap meaning during a rebase",
    ],
    pitfalls: [
      "Accepting one side blindly",
      "Leaving conflict markers in the file",
      "Not running the build after resolving",
    ],
    sources: [GIT("merge")],
  },
  8: {
    slug: "undo",
    checkpoints: [
      "You recovered a commit with git reflog after a hard reset",
      "You can choose between reset and revert",
      "You can recite the three reset modes",
    ],
    pitfalls: [
      "reset --hard on uncommitted work",
      "Rewriting history that is already pushed",
      "Practising destructive commands outside a sandbox",
    ],
    sources: [GIT("reset"), GIT("revert"), GIT("reflog"), GIT("restore")],
  },
  9: {
    slug: "stash-rebase-cherry-pick",
    checkpoints: [
      "You squashed noisy commits with rebase -i",
      "You can explain the golden rule of rebase",
      "You used stash push and pop",
    ],
    pitfalls: [
      "Rebasing a shared branch",
      "Using --force instead of --force-with-lease",
      "Overusing cherry-pick and creating duplicate commits",
    ],
    sources: [GIT("rebase"), GIT("stash"), GIT("cherry-pick")],
  },
  10: {
    slug: "issues-projects-templates",
    checkpoints: [
      "Issue, branch, PR, merge and auto-close worked end to end",
      "The PR template appears on new pull requests",
      "A CODEOWNERS file exists",
    ],
    pitfalls: ["Forgetting Closes #n in the PR", "Vague issue titles", "Skipping templates"],
    sources: [{ label: "GitHub: issues", href: "https://docs.github.com/issues" }],
  },
  11: {
    slug: "tags-releases",
    checkpoints: [
      "An annotated tag is pushed and visible on GitHub",
      "You can state what bumps MAJOR, MINOR and PATCH",
      "A GitHub Release exists",
    ],
    pitfalls: ["Forgetting to push tags", "Deleting published tags", "Breaking changes in a minor release"],
    sources: [GIT("tag"), { label: "Semantic Versioning", href: "https://semver.org" }],
  },
  12: {
    slug: "protection-ci",
    checkpoints: [
      "CI runs on every pull request",
      "Direct pushes to main are blocked",
      "You read a failing run with gh run view --log-failed",
    ],
    pitfalls: [
      "Giving workflows more permissions than needed",
      "Skipping required status checks",
      "Pinning to outdated action versions",
    ],
    sources: [{ label: "GitHub Actions", href: "https://docs.github.com/actions" }],
  },
  13: {
    slug: "hooks-quality",
    checkpoints: [
      "A bad commit message is rejected",
      "A lint error blocks the commit",
      "The prepare script exists so hooks install after clone",
    ],
    pitfalls: ["Bypassing hooks with --no-verify", "Slow hooks that people disable", "Running husky with --help"],
    sources: [{ label: "Git hooks (official docs)", href: "https://git-scm.com/docs/githooks" }],
  },
  14: {
    slug: "advanced-history",
    checkpoints: [
      "You found a planted bug with git bisect",
      "You created and removed a worktree",
      "You can explain the risk of history rewriting",
    ],
    pitfalls: ["Forgetting git bisect reset", "Rewriting shared history", "Treating blame as an accusation"],
    sources: [GIT("bisect"), GIT("worktree"), GIT("blame")],
  },
  15: {
    slug: "security-and-workflows",
    checkpoints: [
      "You know the order: rotate the secret first, clean history second",
      "A fork synced with upstream",
      "You can compare GitHub Flow, trunk-based and Git Flow",
    ],
    pitfalls: [
      "Cleaning history before revoking a leaked secret",
      "Putting secrets in NEXT_PUBLIC_ variables",
      "Skipping SECURITY.md",
    ],
    sources: [{ label: "GitHub: secret scanning", href: "https://docs.github.com/code-security/secret-scanning" }],
  },
  16: {
    slug: "organization-architecture",
    checkpoints: [
      "The enterprise, organization, team and repository boundaries are documented",
      "Each repository has one owner and one operational escalation path",
      "The permission model follows least privilege",
    ],
    pitfalls: [
      "Using personal accounts as business owners",
      "Giving every user organization-owner access",
      "No map of repository ownership",
    ],
    sources: [{ label: "GitHub: organizations", href: "https://docs.github.com/organizations" }],
  },
  17: {
    slug: "identity-access",
    checkpoints: [
      "Joiner, mover and leaver flows are documented",
      "SSO and SCIM provisioning have named owners",
      "A role matrix covers repositories, teams and organization settings",
    ],
    pitfalls: [
      "Sharing service accounts",
      "Keeping former employees as outside collaborators",
      "Using admin roles for routine work",
    ],
    sources: [
      {
        label: "GitHub: enterprise identity",
        href: "https://docs.github.com/enterprise-cloud@latest/admin/managing-iam",
      },
    ],
  },
  18: {
    slug: "repository-governance",
    checkpoints: [
      "A repository creation standard exists",
      "Every repository has a CODEOWNERS policy",
      "Repository custom properties support inventory and policy",
    ],
    pitfalls: [
      "Unlimited public/private repository creation",
      "No owner for inherited settings",
      "Policies stored only in tickets",
    ],
    sources: [{ label: "GitHub: repository management", href: "https://docs.github.com/repositories" }],
  },
  19: {
    slug: "rulesets",
    checkpoints: [
      "An organization or enterprise ruleset protects production branches",
      "Required checks are explicit and maintained",
      "Bypass permissions have approvers and an audit trail",
    ],
    pitfalls: [
      "A ruleset can be bypassed without review",
      "Required checks are stale",
      "Rulesets are copied instead of maintained centrally",
    ],
    sources: [
      {
        label: "GitHub: rulesets",
        href: "https://docs.github.com/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets",
      },
    ],
  },
  20: {
    slug: "enterprise-cicd",
    checkpoints: [
      "Reusable workflows are pinned and versioned",
      "Cloud deployments use OIDC rather than long-lived secrets",
      "Production requires an approval environment",
    ],
    pitfalls: [
      "Copying untrusted workflows",
      "Self-hosted runners in untrusted code",
      "Deploy credentials stored as broad repository secrets",
    ],
    sources: [
      {
        label: "GitHub: Actions deployment security",
        href: "https://docs.github.com/actions/security-for-github-actions",
      },
    ],
  },
  21: {
    slug: "supply-chain",
    checkpoints: [
      "Third-party actions are pinned to immutable commits",
      "Dependency updates and exceptions have owners",
      "Release artifacts have provenance or attestations",
    ],
    pitfalls: [
      "Pinning only to mutable tags",
      "Ignoring transitive dependencies",
      "Publishing artifacts without traceable source",
    ],
    sources: [
      {
        label: "GitHub: securing the supply chain",
        href: "https://docs.github.com/code-security/supply-chain-security",
      },
    ],
  },
  22: {
    slug: "security-compliance",
    checkpoints: [
      "Secret and code scanning alerts have assigned severity and SLA",
      "Audit log access is restricted and reviewed",
      "A compliance evidence bundle can be exported on demand",
    ],
    pitfalls: [
      "Closing alerts without remediation",
      "Collectors with no retention policy",
      "Treating a tool finding as formal compliance",
    ],
    sources: [{ label: "GitHub: security overview", href: "https://docs.github.com/code-security" }],
  },
  23: {
    slug: "migration-platform",
    checkpoints: [
      "Repository inventory and dependency mapping are complete",
      "History, labels, teams and branch rules are verified after migration",
      "Rollback criteria are defined before cutover",
    ],
    pitfalls: [
      "Migrating names without ownership",
      "Forgetting CI secrets and runners",
      "Cutting over before DNS or remote checks",
    ],
    sources: [{ label: "GitHub: migration tooling", href: "https://docs.github.com/migrations" }],
  },
  24: {
    slug: "backup-recovery",
    checkpoints: [
      "Recovery objectives are defined",
      "Critical repository and organization configuration is restorable",
      "The restore process has a recent successful drill",
    ],
    pitfalls: [
      "Assuming GitHub replaces your backup policy",
      "Backups owned by one person",
      "No tested restore procedure",
    ],
    sources: [
      {
        label: "GitHub: audit log",
        href: "https://docs.github.com/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise",
      },
    ],
  },
  25: {
    slug: "enterprise-capstone",
    checkpoints: [
      "A 90-day GitHub operating plan is deliverable",
      "Ownership, policy, security and recovery metrics are assigned",
      "Every critical decision has an exception and rollback path",
    ],
    pitfalls: ["Policy without adoption", "Metrics with no accountable owner", "A diagram that is not executable"],
    sources: [
      { label: "GitHub: enterprise administration", href: "https://docs.github.com/admin" },
      { label: "GitHub: Actions", href: "https://docs.github.com/actions" },
    ],
  },
};
