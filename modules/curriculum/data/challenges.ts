export type Challenge = {
  id: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Pro Max" | "Enterprise";
  lesson: number;
  goal: string;
  hint: string;
  explanation: string;
  correct: string[];
  /** Deterministic starting order (indices into `correct`) so server and client render the same. */
  initial: number[];
};

export const CHALLENGES: Challenge[] = [
  {
    id: "ship-feature",
    lesson: 6,
    title: "Ship a feature as a pull request",
    level: "Intermediate",
    goal: "Start from an up-to-date main and end with an open pull request.",
    hint: "Update main first. Branch. Commit. Push. Then open the PR.",
    explanation:
      "Branching from a stale main causes avoidable conflicts. Push before opening the PR so GitHub has the branch.",
    correct: [
      "git switch main",
      "git pull",
      "git switch -c feature/task-filter",
      "git add -p",
      'git commit -m "feat: add task filter"',
      "git push -u origin HEAD",
      "gh pr create --fill",
    ],
    initial: [4, 6, 1, 3, 0, 5, 2],
  },
  {
    id: "undo-local-commit",
    lesson: 8,
    title: "Undo a local commit and redo it properly",
    level: "Intermediate",
    goal: "You committed too much and have not pushed. Split it into a better commit.",
    hint: "Look first, undo softly, review what is staged, then commit again.",
    explanation: "reset --soft keeps your changes staged. Because nothing was pushed, rewriting history is safe.",
    correct: [
      "git log --oneline",
      "git reset HEAD~1",
      "git status",
      "git add -p",
      'git commit -m "fix: correct validation"',
    ],
    initial: [3, 0, 4, 2, 1],
  },
  {
    id: "resolve-conflict",
    lesson: 7,
    title: "Resolve a merge conflict",
    level: "Intermediate",
    goal: "Merge a branch that conflicts and finish with a clean commit.",
    hint: "Merge, inspect, edit the file, stage it, commit.",
    explanation:
      "Git stops at the conflict. You edit the markers away, git add the file to mark it resolved, then commit.",
    correct: [
      "git merge other-branch",
      "git status",
      "# edit the file and remove the conflict markers",
      "git add app/page.tsx",
      "git commit",
    ],
    initial: [2, 4, 0, 3, 1],
  },
  {
    id: "release",
    lesson: 11,
    title: "Publish release v1.0.0",
    level: "Advanced",
    goal: "Tag the current main and publish release notes on GitHub.",
    hint: "Be on a fresh main. Tag. Push the tag. Create the release.",
    explanation:
      "Tags are not pushed by a normal push. gh release create can generate notes from merged pull requests.",
    correct: [
      "git switch main",
      "git pull",
      'git tag -a v1.0.0 -m "Release 1.0.0"',
      "git push origin v1.0.0",
      "gh release create v1.0.0 --generate-notes",
    ],
    initial: [3, 1, 4, 0, 2],
  },
  {
    id: "sync-fork",
    lesson: 15,
    title: "Sync your fork with upstream",
    level: "Pro Max",
    goal: "Bring the original repository's changes into your fork's main.",
    hint: "Add upstream once. Fetch. Be on main. Fast-forward merge. Push.",
    explanation: "--ff-only refuses to create a merge commit, keeping your fork's main identical to upstream.",
    correct: [
      "git remote add upstream https://github.com/OWNER/REPO.git",
      "git fetch upstream",
      "git switch main",
      "git merge --ff-only upstream/main",
      "git push origin main",
    ],
    initial: [4, 2, 0, 3, 1],
  },
  {
    id: "audit-branch-protection",
    lesson: 19,
    title: "Check which rules protect main",
    level: "Enterprise",
    goal: "Find out which rulesets apply to main before you change anything.",
    hint: "List the rulesets, open one, then check the rules for the branch.",
    explanation:
      "Read the current policy first. `gh ruleset check` shows what really applies to a branch, including inherited organization rules.",
    correct: ["gh ruleset list", "gh ruleset view", "gh ruleset check main"],
    initial: [2, 0, 1],
  },
  {
    id: "run-deploy-workflow",
    lesson: 20,
    title: "Trigger a deployment workflow",
    level: "Enterprise",
    goal: "Run a workflow manually and watch the result.",
    hint: "List workflows, inspect one, run it, then view the run.",
    explanation:
      "Manual runs need a `workflow_dispatch` trigger in the file. Inspecting the workflow first avoids running the wrong one.",
    correct: [
      "gh workflow list",
      "gh workflow view deploy.yml",
      "gh workflow run deploy.yml",
      "gh run list --workflow deploy.yml",
    ],
    initial: [3, 1, 0, 2],
  },
  {
    id: "verify-artifact",
    lesson: 21,
    title: "Verify a release artifact",
    level: "Enterprise",
    goal: "Download a release asset and prove it was built by your repository.",
    hint: "Download first, then verify the attestation of the file.",
    explanation:
      "An attestation ties the file to the workflow that built it. Verify before you deploy or share the artifact.",
    correct: ["gh release download v1.0.0 --repo OWNER/REPO", "gh attestation verify app.tar.gz --repo OWNER/REPO"],
    initial: [1, 0],
  },
  {
    id: "export-audit-log",
    lesson: 22,
    title: "Collect audit evidence",
    level: "Enterprise",
    goal: "Pull the organization audit log and save it as evidence.",
    hint: "Save the full log to a file, then fingerprint it.",
    explanation:
      "Audit evidence must be complete, so use --paginate. A checksum proves the saved file was not changed later.",
    correct: ["gh api orgs/ORG/audit-log --paginate > audit-log.json", "shasum -a 256 audit-log.json"],
    initial: [1, 0],
  },
  {
    id: "mirror-backup",
    lesson: 24,
    title: "Back up a repository as a mirror",
    level: "Enterprise",
    goal: "Create a full mirror and keep it up to date.",
    hint: "Clone with --mirror, then fetch updates later.",
    explanation:
      "A mirror clone copies every ref, not only branches. `git remote update` refreshes it without a working tree.",
    correct: ["git clone --mirror https://github.com/OWNER/REPO.git", "cd REPO.git", "git remote update"],
    initial: [2, 0, 1],
  },
  {
    id: "set-up-identity",
    lesson: 1,
    title: "Set up your identity and sign in",
    level: "Beginner",
    goal: "Tell Git who you are, create a key and connect to GitHub.",
    hint: "Name and email first. Then the key, then sign in, then test.",
    explanation:
      "Commits carry your name and email. The SSH key proves who you are to GitHub, and ssh -T confirms the connection works.",
    correct: [
      'git config --global user.name "Your Name"',
      'git config --global user.email "you@example.com"',
      'ssh-keygen -t ed25519 -C "you@example.com"',
      "gh auth login",
      "ssh -T git@github.com",
    ],
    initial: [3, 0, 4, 2, 1],
  },
  {
    id: "inspect-repository",
    lesson: 2,
    title: "Look around a repository",
    level: "Beginner",
    goal: "See what changed, then read the history and the latest commit.",
    hint: "Status first. Then the graph. Last, open the newest commit object.",
    explanation:
      "git status shows the present, git log shows the past, and git cat-file -p HEAD shows what one commit really stores.",
    correct: ["git status", "git log --oneline --graph --all", "git cat-file -p HEAD"],
    initial: [2, 0, 1],
  },
  {
    id: "first-commit",
    lesson: 3,
    title: "Make your first commit",
    level: "Beginner",
    goal: "Turn an empty folder into a repository with one commit.",
    hint: "Create the repository, stage the file, commit, then check the log.",
    explanation:
      "git init makes the repository. Files must be staged before a commit can include them. git log proves the commit exists.",
    correct: ["git init", "git add README.md", 'git commit -m "docs: add readme"', "git log --oneline"],
    initial: [3, 1, 0, 2],
  },
  {
    id: "review-before-commit",
    lesson: 3,
    title: "Review your changes before committing",
    level: "Beginner",
    goal: "Commit only what you meant to, with a clear message.",
    hint: "Look, pick the pieces, check what is staged, then commit.",
    explanation: "git add -p lets you choose hunks. git diff --staged shows exactly what the commit will contain.",
    correct: [
      "git status",
      "git diff",
      "git add -p",
      "git diff --staged",
      'git commit -m "fix: correct typo in title"',
    ],
    initial: [4, 2, 0, 3, 1],
  },
  {
    id: "merge-a-branch",
    lesson: 4,
    title: "Build on a branch and merge it",
    level: "Beginner",
    goal: "Make a change on its own branch and bring it into main.",
    hint: "Branch, commit, return to main, merge, clean up.",
    explanation: "Working on a branch keeps main safe. After merging, delete the branch so the list stays short.",
    correct: [
      "git switch -c feature/greeting",
      "git add .",
      'git commit -m "feat: add greeting"',
      "git switch main",
      "git merge feature/greeting",
      "git branch -d feature/greeting",
    ],
    initial: [5, 3, 1, 0, 4, 2],
  },
  {
    id: "stash-and-return",
    lesson: 9,
    title: "Shelve work to fix something else",
    level: "Advanced",
    goal: "Pause half-done work, fix a branch, then continue.",
    hint: "Stash, switch, do the fix, switch back, restore.",
    explanation:
      "Stash saves unfinished work without a commit. git switch - jumps back to the previous branch; pop restores the work.",
    correct: ['git stash push -m "wip: filter"', "git switch hotfix/login", "git switch -", "git stash pop"],
    initial: [3, 0, 2, 1],
  },
  {
    id: "clean-before-pr",
    lesson: 9,
    title: "Tidy a branch before the pull request",
    level: "Advanced",
    goal: "Squash noisy commits and update the remote branch safely.",
    hint: "Fetch, rebase interactively, then force-push the safe way.",
    explanation:
      "Rebasing rewrites history, so the push must be a force push. --force-with-lease refuses if someone else pushed meanwhile.",
    correct: ["git fetch origin", "git rebase -i origin/main", "git push --force-with-lease"],
    initial: [2, 0, 1],
  },
  {
    id: "find-bad-commit",
    lesson: 14,
    title: "Find the commit that broke the build",
    level: "Pro Max",
    goal: "Use bisect to find the first bad commit automatically.",
    hint: "Start, mark bad and good, let a script decide, then reset.",
    explanation:
      "bisect does a binary search through history. With bisect run it needs no manual testing. Always finish with bisect reset.",
    correct: [
      "git bisect start",
      "git bisect bad",
      "git bisect good v1.0.0",
      "git bisect run pnpm test",
      "git bisect reset",
    ],
    initial: [4, 2, 0, 3, 1],
  },
];
