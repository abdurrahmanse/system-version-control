// Single source of truth for the learning path.
// Keep in sync with docs/ROADMAP.md and docs/PROGRESS.md.

export type Level = "Beginner" | "Intermediate" | "Advanced" | "Pro Max";

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
};
