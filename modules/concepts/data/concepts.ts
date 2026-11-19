import {
  Archive,
  Camera,
  Cloud,
  FolderOpen,
  GitBranch,
  GitCommitHorizontal,
  GitMerge,
  Library,
  Pointer,
  Rocket,
  ScrollText,
  Tag,
  Terminal,
  Undo2,
  Users,
  Workflow,
} from "lucide-react";

import type { CtaCopy, HeroCopy, SectionCopy } from "@/shared/types/content";

export const CONCEPTS_HERO: HeroCopy = {
  badge: "Mental models",
  icon: ScrollText,
  title: { top: "Understand it once,", accent: "type it forever." },
  description:
    "Version control is four ideas: snapshots, pointers, areas and remotes. Learn the pictures and the commands stop feeling like magic.",
  primary: { label: "Follow the roadmap", href: "/roadmap", icon: Workflow },
};

export const CONCEPTS_VS: SectionCopy = {
  numeral: "I",
  icon: Library,
  eyebrow: "Git vs GitHub",
  title: "Two different things",
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

export const CONCEPTS_AREAS: SectionCopy = {
  numeral: "II",
  icon: Archive,
  eyebrow: "The four places",
  title: "Where your work lives",
  description: "Every Git command moves changes from one place to another.",
};
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

export const CONCEPTS_GRAPH: SectionCopy = {
  numeral: "III",
  icon: GitMerge,
  eyebrow: "History is a graph",
  title: "Commits, branches and merges",
  description: "Each commit points to its parent. A branch is just a label. Merging joins two lines.",
};
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

export const CONCEPTS_COMMANDS: SectionCopy = {
  numeral: "IV",
  icon: Terminal,
  eyebrow: "First commands",
  title: "The handful you use every day",
  description: "You type them yourself. The AI mentor explains each one.",
};
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

export const CONCEPTS_CTA: CtaCopy = {
  icon: Rocket,
  title: "Ready to practice?",
  description: "The roadmap turns these ideas into fifteen hands-on lessons.",
  href: "/roadmap",
  label: "Open the roadmap",
};

export const CONCEPTS_RESET: SectionCopy = {
  numeral: "V",
  icon: Undo2,
  eyebrow: "Undoing commits",
  title: "The three reset modes",
  description: "Same command, three depths. Pick by what you want to keep.",
};
export const RESET_HEADS = ["Mode", "Moves the branch", "Resets staging", "Resets your files", "Use it to"] as const;
export const RESET_MODES = [
  {
    mode: "git reset --soft",
    moves: true,
    staging: false,
    files: false,
    use: "Undo a commit but keep everything staged.",
    href: "/guide/conflicts-and-undo#step-76",
  },
  {
    mode: "git reset (mixed)",
    moves: true,
    staging: true,
    files: false,
    use: "Undo a commit and keep the changes unstaged.",
    href: "/guide/conflicts-and-undo#step-77",
  },
  {
    mode: "git reset --hard",
    moves: true,
    staging: true,
    files: true,
    use: "Throw the commit and the changes away. Dangerous.",
    href: "/guide/conflicts-and-undo#step-80",
  },
] as const;
export const RESET_YES_NO = { yes: "Yes", no: "No" } as const;
