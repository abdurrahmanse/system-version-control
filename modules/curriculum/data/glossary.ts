export type Term = { term: string; definition: string; see?: string };

// Definitions are deliberately short and standard. Verify details in the official docs.
export const TERMS: Term[] = [
  {
    term: "Branch",
    definition: "A movable pointer to a commit. Creating one is cheap; it lets you work on a change in isolation.",
  },
  {
    term: "Clone",
    definition: "A full copy of a remote repository, including history, with origin configured.",
    see: "git clone",
  },
  {
    term: "Commit",
    definition: "A snapshot of the project with an author, message and a link to its parent commit(s).",
  },
  { term: "Conflict", definition: "Two changes touch the same lines, so Git asks you to decide the final result." },
  {
    term: "Conventional Commits",
    definition: "A message convention: type(scope): description, such as feat: add dialog.",
  },
  {
    term: "Detached HEAD",
    definition:
      "HEAD points directly at a commit instead of a branch. New commits can be lost unless you create a branch.",
  },
  {
    term: "Fast-forward",
    definition: "A merge where the branch pointer simply moves ahead because there is no divergent history.",
  },
  {
    term: "Fetch",
    definition: "Downloads new commits and updates remote-tracking branches without changing your own branches.",
    see: "git fetch",
  },
  {
    term: "Fork",
    definition: "Your own copy of someone else's GitHub repository, used to propose changes via pull request.",
  },
  { term: "HEAD", definition: "A pointer to where you are now: usually the tip of the current branch." },
  { term: "Hook", definition: "A script Git runs at a specific moment, such as before a commit." },
  { term: "Index (staging area)", definition: "The draft of your next commit. Files are added here with git add." },
  { term: "Merge", definition: "Combines two lines of history. May fast-forward or create a merge commit." },
  { term: "Merge commit", definition: "A commit with two parents that joins two branches." },
  { term: "Origin", definition: "The default name for the remote you cloned from or first added." },
  { term: "Pull", definition: "Fetch followed by integrating the changes into your current branch.", see: "git pull" },
  {
    term: "Pull request",
    definition: "A GitHub feature to propose merging a branch, with review, discussion and checks.",
  },
  { term: "Push", definition: "Uploads your commits to a remote branch.", see: "git push" },
  {
    term: "Rebase",
    definition: "Replays commits on top of another base, rewriting them as new commits.",
    see: "git rebase",
  },
  {
    term: "Reflog",
    definition: "A local log of where HEAD and branches have pointed. The safety net for lost commits.",
    see: "git reflog",
  },
  { term: "Remote", definition: "A repository hosted elsewhere, such as on GitHub." },
  { term: "Repository", definition: "The project's files plus its complete history stored in the .git directory." },
  {
    term: "Revert",
    definition: "Creates a new commit that reverses an earlier commit. Safe for shared history.",
    see: "git revert",
  },
  { term: "Semantic Versioning", definition: "MAJOR.MINOR.PATCH numbering that signals the impact of a release." },
  { term: "Squash", definition: "Combine several commits into one, during a rebase or a squash merge." },
  { term: "Stash", definition: "A shelf for uncommitted changes you want to set aside temporarily.", see: "git stash" },
  { term: "Tag", definition: "A fixed label on a commit, typically used to mark releases." },
  {
    term: "Upstream",
    definition: "The remote branch your local branch tracks. For forks, also the original repository.",
  },
  { term: "Working tree", definition: "The files on disk that you edit." },
  {
    term: "Worktree",
    definition: "An additional working folder linked to the same repository, for another branch.",
    see: "git worktree",
  },
  {
    term: "Ruleset",
    definition: "An organization or repository policy that restricts branch, tag or pull request actions.",
  },
  {
    term: "CODEOWNERS",
    definition: "Repository ownership rules that request or require review from named teams or users.",
  },
  { term: "SCIM", definition: "Identity provisioning protocol used to create, update and remove managed user access." },
  {
    term: "OIDC",
    definition: "Federated identity exchange that lets GitHub Actions request short-lived cloud credentials.",
  },
  {
    term: "Attestation",
    definition: "Signed evidence binding a software artifact to its source, build or provenance.",
  },
  { term: "SBOM", definition: "A software bill of materials listing components and dependencies in a release." },
  {
    term: "Audit log",
    definition: "A record of administrative and security-relevant GitHub organization or enterprise events.",
  },
  {
    term: "Recovery objective",
    definition: "A target for maximum data loss (RPO) or restoration time (RTO) after an incident.",
  },
  {
    term: "Supply chain",
    definition: "The people, systems, dependencies and artifacts that create and deliver software.",
  },
  {
    term: "Migration",
    definition: "A controlled move of repository history and platform settings from one source to a destination.",
  },
];
