// Level quizzes: short multiple-choice checks. Answers are index numbers into `options`.
export type QuizQuestion = { question: string; options: readonly string[]; answer: number; why: string };

export const QUIZZES: Record<string, readonly QuizQuestion[]> = {
  beginner: [
    {
      question: "Which command turns a folder into a Git repository?",
      options: ["git init", "git start", "git new", "git create"],
      answer: 0,
      why: "git init creates the hidden .git folder that stores history.",
    },
    {
      question: "What does git add do?",
      options: [
        "Saves the commit to GitHub",
        "Stages changes for the next commit",
        "Creates a branch",
        "Deletes untracked files",
      ],
      answer: 1,
      why: "Staging chooses what goes into the next commit.",
    },
    {
      question: "Which command shows exactly what is staged for the next commit?",
      options: ["git status -s", "git log", "git diff --staged", "git branch"],
      answer: 2,
      why: "git diff --staged compares the index with the last commit.",
    },
    {
      question: "Which command creates a branch and switches to it?",
      options: ["git branch -d x", "git switch -c x", "git merge x", "git checkout x"],
      answer: 1,
      why: "git switch -c creates a branch and moves HEAD onto it.",
    },
    {
      question: "What is HEAD?",
      options: [
        "The first commit ever made",
        "The remote repository",
        "A pointer to what you currently have checked out",
        "The staging area",
      ],
      answer: 2,
      why: "HEAD marks your current position, usually a branch tip.",
    },
    {
      question: "Which commit message follows Conventional Commits for a bug fix?",
      options: ["fixed stuff", "fix: handle empty title", "Fix.", "bugfix - title"],
      answer: 1,
      why: "Conventional Commits use a type prefix such as fix: or feat:.",
    },
    {
      question: "What is .gitignore for?",
      options: [
        "Hiding a repository on GitHub",
        "Listing files Git should not track",
        "Encrypting files",
        "Deleting old commits",
      ],
      answer: 1,
      why: "Patterns in .gitignore keep untracked files like node_modules out of Git.",
    },
    {
      question: "What is a fast-forward merge?",
      options: [
        "A merge that always has conflicts",
        "A merge that moves the branch pointer without a new merge commit",
        "A merge that deletes the branch",
        "A merge done on GitHub only",
      ],
      answer: 1,
      why: "If main has not moved, Git simply moves its pointer forward.",
    },
  ],
  intermediate: [
    {
      question: "What is the difference between git fetch and git pull?",
      options: [
        "No difference",
        "fetch downloads without merging; pull fetches then merges",
        "pull only works on main",
        "fetch pushes changes",
      ],
      answer: 1,
      why: "fetch is safe: it updates remote-tracking branches only.",
    },
    {
      question: "What does git push -u origin HEAD do?",
      options: ["Pushes and sets the upstream branch", "Deletes the remote branch", "Forces the push", "Pulls first"],
      answer: 0,
      why: "-u remembers the upstream so later git push and git pull need no arguments.",
    },
    {
      question: "What do <<<<<<< and >>>>>>> mean in a file?",
      options: ["A syntax error", "Conflict markers around competing changes", "A comment style", "Staged lines"],
      answer: 1,
      why: "Edit the file to the final result, remove the markers, then add and continue.",
    },
    {
      question: "How do you unstage a file but keep your edits?",
      options: ["git restore --staged file", "git reset --hard", "git rm file", "git clean -f"],
      answer: 0,
      why: "git restore --staged only changes the index.",
    },
    {
      question: "When is git revert the right undo?",
      options: [
        "Never",
        "For commits already shared, because it adds a new undoing commit",
        "Only for the first commit",
        "To delete a branch",
      ],
      answer: 1,
      why: "revert does not rewrite history, so it is safe on shared branches.",
    },
    {
      question: "What is dangerous about git reset --hard?",
      options: ["It is slow", "It discards uncommitted changes", "It deletes the remote", "It changes your name"],
      answer: 1,
      why: "Uncommitted work cannot be recovered after a hard reset.",
    },
    {
      question: "What makes a good pull request?",
      options: [
        "As many changes as possible",
        "Small and focused on one purpose",
        "No description",
        "Directly on main",
      ],
      answer: 1,
      why: "Small PRs are reviewed faster and are easier to revert.",
    },
    {
      question: "What does gh pr create --fill do?",
      options: ["Merges the PR", "Fills the title and body from your commits", "Approves the PR", "Closes the PR"],
      answer: 1,
      why: "--fill uses commit information so you can open a PR quickly.",
    },
  ],
  advanced: [
    {
      question: "What does rebase do to commits?",
      options: ["Moves nothing", "Replays them as new commits on a new base", "Deletes them", "Pushes them"],
      answer: 1,
      why: "The new commits have different hashes, so history is rewritten.",
    },
    {
      question: "Which branches should you not rebase?",
      options: [
        "Local private branches",
        "Shared branches others have pulled",
        "Feature branches nobody else uses",
        "Branches without commits",
      ],
      answer: 1,
      why: "Rewriting shared history forces everyone else to repair their copy.",
    },
    {
      question: "What does git cherry-pick <commit> do?",
      options: [
        "Deletes a commit",
        "Applies one commit onto the current branch",
        "Merges a whole branch",
        "Tags a commit",
      ],
      answer: 1,
      why: "It copies the change of a single commit.",
    },
    {
      question: "What does git stash pop do?",
      options: [
        "Lists stashes",
        "Reapplies the latest stash and removes it",
        "Deletes all stashes",
        "Commits the stash",
      ],
      answer: 1,
      why: "pop = apply + drop. Use apply to keep the stash.",
    },
    {
      question: "Why prefer --force-with-lease over --force?",
      options: [
        "It is faster",
        "It refuses to overwrite commits you have not seen",
        "It skips hooks",
        "It works offline",
      ],
      answer: 1,
      why: "It protects a teammate's newer push from being lost.",
    },
    {
      question: "Under SemVer, which change bumps the MAJOR version?",
      options: ["A bug fix", "A new backward-compatible feature", "A breaking change", "A typo in docs"],
      answer: 2,
      why: "MAJOR.MINOR.PATCH: breaking changes bump MAJOR.",
    },
    {
      question: "Which command creates an annotated tag?",
      options: ["git tag v1.0.0", 'git tag -a v1.0.0 -m "Release"', "git branch v1.0.0", "git release v1.0.0"],
      answer: 1,
      why: "Annotated tags store tagger, date and message.",
    },
    {
      question: "What do required status checks do?",
      options: [
        "Speed up CI",
        "Block merging until the checks pass",
        "Delete failing branches",
        "Approve PRs automatically",
      ],
      answer: 1,
      why: "They turn CI into a gate on the protected branch.",
    },
  ],
  "pro-max": [
    {
      question: "What does git bisect do?",
      options: [
        "Splits a repository in two",
        "Binary-searches history for the commit that introduced a bug",
        "Merges two branches",
        "Shows blame",
      ],
      answer: 1,
      why: "Mark good and bad commits and Git narrows down the culprit.",
    },
    {
      question: "What is git reflog for?",
      options: [
        "Listing remotes",
        "Recovering where HEAD has been, including lost commits",
        "Cleaning branches",
        "Formatting logs",
      ],
      answer: 1,
      why: "The reflog is a local safety net for resets and rebases.",
    },
    {
      question: "What does git worktree add do?",
      options: [
        "Creates another working directory for the same repository",
        "Clones a new repository",
        "Adds a remote",
        "Stages a folder",
      ],
      answer: 0,
      why: "One repository, several checked-out branches at once.",
    },
    {
      question: "What does git blame show?",
      options: ["Who is at fault in the team", "Who last changed each line", "Deleted files", "Remote URLs"],
      answer: 1,
      why: "It annotates every line with the last commit that touched it.",
    },
    {
      question: 'What does git log -S "text" find?',
      options: [
        "Commits whose message contains text",
        "Commits that added or removed occurrences of text",
        "Stashes",
        "Signed commits",
      ],
      answer: 1,
      why: "The pickaxe search finds when a string appeared or disappeared.",
    },
    {
      question: "Why sign commits?",
      options: ["To make them smaller", "To let others verify who made them", "To skip review", "To speed up push"],
      answer: 1,
      why: "Signatures (GPG or SSH) bind a commit to a key.",
    },
    {
      question: "When does a pre-commit hook run?",
      options: ["After push", "Before the commit is created, and it can stop it", "Only on GitHub", "When cloning"],
      answer: 1,
      why: "A non-zero exit from pre-commit aborts the commit.",
    },
    {
      question: "How do you keep a fork in sync without a merge commit?",
      options: [
        "git merge upstream/main",
        "git fetch upstream then git merge --ff-only upstream/main",
        "Delete and re-fork always",
        "git push --force upstream",
      ],
      answer: 1,
      why: "--ff-only refuses anything but a clean fast-forward.",
    },
  ],
  enterprise: [
    {
      question: "If several rulesets target the same branch, what happens?",
      options: ["Only the oldest applies", "Their rules layer together", "Only the newest applies", "None apply"],
      answer: 1,
      why: "Rules from all matching rulesets are combined; use gh ruleset check to see them.",
    },
    {
      question: "What does SCIM automate?",
      options: [
        "Code review",
        "Creating and removing user accounts from your identity provider",
        "Cloning",
        "Releases",
      ],
      answer: 1,
      why: "SCIM provisions and deprovisions users so access follows employment.",
    },
    {
      question: "What does SAML SSO do for an organization?",
      options: [
        "Encrypts commits",
        "Makes members sign in through your identity provider",
        "Speeds up CI",
        "Hides repositories",
      ],
      answer: 1,
      why: "Access to organization resources requires an IdP session.",
    },
    {
      question: "Why use OIDC from GitHub Actions to a cloud?",
      options: [
        "It is required for forks",
        "It gives short-lived tokens instead of stored long-lived secrets",
        "It makes builds faster",
        "It removes the need for workflows",
      ],
      answer: 1,
      why: "No long-lived cloud keys are kept in repository secrets.",
    },
    {
      question: "How should third-party actions be pinned?",
      options: ["To a tag like @v4 only", "To a full commit SHA", "Not pinned", "To @main"],
      answer: 1,
      why: "A commit SHA is immutable; tags can be moved.",
    },
    {
      question: "What does an artifact attestation prove?",
      options: [
        "The code has no bugs",
        "How and where the artifact was built",
        "Who reviewed it",
        "That it is open source",
      ],
      answer: 1,
      why: "Provenance links the file to the workflow that built it.",
    },
    {
      question: "What is the organization audit log for?",
      options: [
        "Recording who did what, for review and evidence",
        "Counting stars",
        "Running tests",
        "Formatting code",
      ],
      answer: 0,
      why: "It supports investigations and compliance evidence.",
    },
    {
      question: "What does git clone --mirror copy?",
      options: ["Only the default branch", "All refs, suitable for a backup", "Only tags", "Only the working tree"],
      answer: 1,
      why: "A mirror copies every ref; git remote update refreshes it.",
    },
  ],
};

export const QUIZ_COPY = {
  check: "Check answer",
  correct: "Correct.",
  wrong: "Not quite.",
  score: (right: number, total: number) => `Score: ${right} / ${total}`,
  reset: "Start again",
} as const;
