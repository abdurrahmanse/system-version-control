export type Challenge = {
  id: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Pro Max";
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
];
