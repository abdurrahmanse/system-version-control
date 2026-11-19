import {
  Archive,
  Camera,
  Cloud,
  CloudUpload,
  FilePen,
  FolderOpen,
  GitBranch,
  GitCommitHorizontal,
  GitMerge,
  GitPullRequest,
  Library,
  Network,
  Pointer,
  ScrollText,
  ShieldCheck,
  Tag,
  Terminal,
  Undo2,
  Users,
  Workflow,
} from "lucide-react";

import type { HeroCopy } from "@/shared/types/content";
import type { GraphEdgeData, GraphNodeData } from "@/shared/types/graph";

export const CONCEPTS_HERO: HeroCopy = {
  badge: "Mental models",
  icon: ScrollText,
  title: { top: "Understand it once,", accent: "type it forever." },
  description:
    "Version control is four ideas: snapshots, pointers, areas and remotes. Learn the pictures and the commands stop feeling like magic.",
  primary: { label: "Follow the roadmap", href: "/roadmap", icon: Workflow },
};

export const CONCEPTS_VS_CARDS = [
  {
    icon: GitBranch,
    title: "Git",
    text: "A version-control tool on your computer. It stores history, branches and merges. Works offline.",
    href: "/roadmap/mental-model",
  },
  {
    icon: Cloud,
    title: "GitHub",
    text: "A hosting service for Git repositories, adding pull requests, issues, Actions and collaboration.",
    href: "/roadmap/github-remote",
  },
] as const;

export const AREAS = [
  { icon: FolderOpen, name: "Working directory", text: "Your files as you edit them.", href: "/roadmap/mental-model" },
  { icon: Archive, name: "Staging area", text: "What goes into the next commit.", href: "/roadmap/first-commits" },
  {
    icon: GitCommitHorizontal,
    name: "Local repository",
    text: "Saved history in .git.",
    href: "/guide/first-repository",
  },
  { icon: Cloud, name: "Remote (GitHub)", text: "Shared copy for the team.", href: "/roadmap/github-remote" },
] as const;
export const AREA_ARROWS = ["git add", "git commit", "git push"] as const;

export const GRAPH_LABELS = {
  main: "main",
  feature: "feature/add-dialog",
  merge: "merge commit",
  head: "HEAD",
  alt: "main branch with a feature branch merged back",
} as const;
export const VOCAB = [
  {
    icon: Camera,
    title: "Commit",
    text: "A snapshot of the whole project plus author, message and a link to its parent.",
    href: "/glossary?q=Commit",
  },
  {
    icon: GitBranch,
    title: "Branch",
    text: "A movable pointer to a commit. Cheap to create, safe to delete.",
    href: "/glossary?q=Branch",
  },
  {
    icon: Pointer,
    title: "HEAD",
    text: "Where you are now: usually the tip of your current branch.",
    href: "/glossary?q=HEAD",
  },
  { icon: GitMerge, title: "Merge", text: "Join two lines of history into one.", href: "/glossary?q=Merge" },
  { icon: Tag, title: "Tag", text: "A fixed label on a commit, used for releases.", href: "/glossary?q=Tag" },
  {
    icon: Users,
    title: "Pull request",
    text: "A GitHub feature: ask to merge your branch, with review and checks.",
    href: "/roadmap/pull-requests",
  },
] as const;

export const COMMAND_TABS = [
  {
    value: "daily",
    label: "Daily",
    icon: GitCommitHorizontal,
    lines: ["git status -sb", "git add -p", 'git commit -m "feat: add dialog"', "git log --oneline --graph --all"],
  },
  {
    value: "undo",
    label: "Undo",
    icon: Undo2,
    lines: ["git restore <file>", "git restore --staged <file>", "git revert <commit>", "git reflog"],
  },
  {
    value: "collaborate",
    label: "Collaborate",
    icon: Users,
    lines: ["git fetch", "git pull", "git push -u origin HEAD", "gh pr create"],
  },
] as const;

export const CONCEPTS_MAP = {
  numeral: "II",
  icon: Network,
  eyebrow: "Concept map",
  title: "How the ideas connect",
  description:
    "A change travels from your files to a release. Each card is one idea; hover to see the command that links it to the next.",
  label: "Concept map: from working directory to release",
} as const;
export const CONCEPT_NODES: GraphNodeData[] = [
  {
    id: "wd",
    title: "Working directory",
    text: "Where you edit files.",
    href: "/roadmap/mental-model",
    icon: FolderOpen,
    col: 0,
    row: 0,
  },
  {
    id: "stage",
    title: "Staging area",
    text: "The draft of your next commit.",
    href: "/roadmap/first-commits",
    icon: Archive,
    col: 1,
    row: 0,
  },
  {
    id: "commit",
    title: "Commit",
    text: "A saved snapshot.",
    href: "/glossary?q=Commit",
    icon: Camera,
    col: 2,
    row: 0,
    tone: "signal",
  },
  {
    id: "branch",
    title: "Branch",
    text: "A line of commits.",
    href: "/roadmap/branches-merge",
    icon: GitBranch,
    col: 3,
    row: 0,
  },
  {
    id: "release",
    title: "Release",
    text: "A tagged version.",
    href: "/roadmap/tags-releases",
    icon: Tag,
    col: 0,
    row: 1,
  },
  {
    id: "merge",
    title: "Merge",
    text: "Join the work back into main.",
    href: "/glossary?q=Merge",
    icon: GitMerge,
    col: 1,
    row: 1,
  },
  {
    id: "pr",
    title: "Pull request",
    text: "Review and checks.",
    href: "/roadmap/pull-requests",
    icon: Users,
    col: 2,
    row: 1,
  },
  {
    id: "remote",
    title: "Remote (GitHub)",
    text: "The shared copy.",
    href: "/roadmap/github-remote",
    icon: Cloud,
    col: 3,
    row: 1,
  },
];
export const CONCEPT_EDGES: GraphEdgeData[] = [
  { from: "wd", to: "stage", label: "git add" },
  { from: "stage", to: "commit", label: "git commit" },
  { from: "commit", to: "branch", label: "git switch -c" },
  { from: "branch", to: "remote", label: "git push" },
  { from: "remote", to: "pr", label: "gh pr create" },
  { from: "pr", to: "merge", label: "gh pr merge" },
  { from: "merge", to: "release", label: "git tag" },
];

export const RESET_LAYER_NAMES = ["Branch pointer", "Staging area", "Your files"] as const;
export const RESET_YES_NO = { yes: "Changed", no: "Untouched" } as const;
export const RESET_MODES = [
  {
    mode: "git reset --soft",
    layers: [true, false, false],
    use: "Undo a commit but keep everything staged.",
    href: "/guide/conflicts-and-undo/76",
    danger: false,
  },
  {
    mode: "git reset (mixed)",
    layers: [true, true, false],
    use: "Undo a commit and keep the changes unstaged.",
    href: "/guide/conflicts-and-undo/77",
    danger: false,
  },
  {
    mode: "git reset --hard",
    layers: [true, true, true],
    use: "Throw the commit and the changes away. Dangerous.",
    href: "/guide/conflicts-and-undo/80",
    danger: true,
  },
] as const;

// Sub-pages of /concepts. One idea per page so nothing needs long scrolling.
export const CONCEPT_TOPICS = [
  { slug: "git-vs-github", title: "Git vs GitHub", text: "Two different things that work together.", icon: Library },
  {
    slug: "four-places",
    title: "The four places",
    text: "Where your work lives and which command moves it.",
    icon: Archive,
  },
  {
    slug: "history",
    title: "History is a graph",
    text: "Commits, branches, merges and the words around them.",
    icon: GitMerge,
  },
  { slug: "commands", title: "First commands", text: "The handful you use every day.", icon: Terminal },
  { slug: "reset", title: "The three reset modes", text: "How deep an undo goes.", icon: Undo2 },
  {
    slug: "one-change",
    title: "One change, start to finish",
    text: "How a change travels from an edit to a merged pull request.",
    icon: GitPullRequest,
  },
  {
    slug: "mistakes",
    title: "Mistakes everyone makes",
    text: "Five common mistakes and the lesson that fixes each.",
    icon: ShieldCheck,
  },
] as const;
export type ConceptTopicSlug = (typeof CONCEPT_TOPICS)[number]["slug"];

export const CONCEPTS_NAV = { label: "Concepts sections", overview: "Overview" } as const;
export const CONCEPTS_HUB = {
  numeral: "II",
  icon: ScrollText,
  eyebrow: "Explore",
  title: "Pick an idea",
  description: "Each card is one short page.",
} as const;

export const CONCEPT_TOPIC_INTROS: Record<ConceptTopicSlug, HeroCopy> = {
  "git-vs-github": {
    badge: "Concepts",
    icon: Library,
    title: { top: "Git and GitHub:", accent: "two different things." },
    description: "A tool on your computer, and a service built around it.",
    primary: { label: "Next: the four places", href: "/concepts/four-places" },
  },
  "four-places": {
    badge: "Concepts",
    icon: Archive,
    title: { top: "Where your work", accent: "lives." },
    description: "Every Git command moves changes from one place to another.",
    primary: { label: "Next: history is a graph", href: "/concepts/history" },
  },
  history: {
    badge: "Concepts",
    icon: GitMerge,
    title: { top: "History is", accent: "a graph." },
    description: "Each commit points to its parent. A branch is just a label. Merging joins two lines.",
    primary: { label: "Next: first commands", href: "/concepts/commands" },
  },
  commands: {
    badge: "Concepts",
    icon: Terminal,
    title: { top: "The handful you use", accent: "every day." },
    description: "You type them yourself. The AI mentor explains each one.",
    primary: { label: "Next: the reset modes", href: "/concepts/reset" },
  },
  reset: {
    badge: "Concepts",
    icon: Undo2,
    title: { top: "Three depths", accent: "of undo." },
    description: "Same command, three depths. Each card shows which layers it changes.",
    primary: { label: "Next: one change, start to finish", href: "/concepts/one-change" },
  },
  "one-change": {
    badge: "Concepts",
    icon: GitPullRequest,
    title: { top: "One change,", accent: "start to finish." },
    description: "Every change you make follows the same route. Click a step to learn it.",
    primary: { label: "Next: common mistakes", href: "/concepts/mistakes" },
  },
  mistakes: {
    badge: "Concepts",
    icon: ShieldCheck,
    title: { top: "Mistakes everyone", accent: "makes once." },
    description: "Skim these before you start. Each one has a fix in the roadmap.",
    primary: { label: "Start the roadmap", href: "/roadmap" },
  },
};

export const ONE_CHANGE = {
  label: "From editing a file to a merged pull request",
  nodes: [
    { title: "Edit", text: "Change files in your working directory.", icon: FilePen, href: "/roadmap/mental-model" },
    {
      title: "Stage",
      text: "Choose what goes into the next commit.",
      command: "git add -p",
      icon: Archive,
      href: "/guide/daily-loop",
    },
    {
      title: "Commit",
      text: "Save a snapshot with a clear message.",
      command: "git commit",
      icon: GitCommitHorizontal,
      href: "/roadmap/first-commits",
    },
    {
      title: "Push",
      text: "Publish your branch to GitHub.",
      command: "git push -u origin HEAD",
      icon: CloudUpload,
      href: "/roadmap/github-remote",
    },
    {
      title: "Pull request",
      text: "Ask for review and let CI check it.",
      command: "gh pr create --fill",
      icon: GitPullRequest,
      href: "/roadmap/pull-requests",
    },
    {
      title: "Merge",
      text: "Squash, merge or rebase into main.",
      command: "gh pr merge --squash",
      icon: GitMerge,
      href: "/workflows",
      tone: "signal",
    },
  ],
} as const;

export const MISTAKES = {
  numeral: "VI",
  icon: ShieldCheck,
  eyebrow: "Learn from others",
  title: "Mistakes everyone makes once",
  description: "Skim these before you start. Each one has a fix in the roadmap.",
  items: [
    {
      title: "Committing secrets",
      text: "Rotate the secret first, then clean history. Untracking a file does not erase it from old commits.",
      lesson: 15,
    },
    {
      title: "Force pushing to main",
      text: "Use --force-with-lease on your own branches and protect main so it cannot happen.",
      lesson: 12,
    },
    { title: "Blind git add .", text: "Run git status and git diff --staged before every commit.", lesson: 3 },
    { title: "Rebasing shared work", text: "Rebase rewrites commits. Only rebase commits nobody else has.", lesson: 9 },
    {
      title: "reset --hard in a hurry",
      text: "Know the three reset modes and your safety net, git reflog.",
      lesson: 8,
    },
  ],
} as const;
