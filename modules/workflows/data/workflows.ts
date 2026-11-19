import {
  CloudUpload,
  GitBranch,
  GitCommitHorizontal,
  GitMerge,
  GitPullRequest,
  Rocket,
  Scale,
  ScrollText,
  ShieldCheck,
  Tag,
  Undo2,
  Workflow,
} from "lucide-react";

import type { CtaCopy, Decision, FlowNodeData, HeroCopy, SectionCopy } from "@/shared/types/content";

export const WORKFLOWS_HERO: HeroCopy = {
  badge: "Team workflows",
  icon: Workflow,
  title: { top: "How teams actually", accent: "ship code." },
  description:
    "Branching strategies, merge types, the pull request lifecycle, undo decisions and a release flow, drawn as diagrams you can click through.",
  primary: { label: "Practice the flow", href: "/practice", icon: GitPullRequest },
  secondary: { label: "See the 100-step guide", href: "/guide" },
};

export const WF_STRATEGIES: SectionCopy = {
  numeral: "I",
  icon: Scale,
  eyebrow: "Branching",
  title: "Three strategies, no single winner",
  description: "The right answer depends on team size, release style and test maturity.",
};
export const WF_LANES: SectionCopy = {
  numeral: "II",
  icon: GitBranch,
  eyebrow: "GitHub Flow",
  title: "GitHub Flow, drawn",
  description:
    "main stays deployable. Work happens on a short branch, lands through a pull request and is tagged when released.",
};
export const WF_MERGES: SectionCopy = {
  numeral: "III",
  icon: GitMerge,
  eyebrow: "Merging",
  title: "Three ways to merge a pull request",
  description: "All are valid. Your team convention decides.",
};
export const WF_REBASE: SectionCopy = {
  numeral: "IV",
  icon: GitMerge,
  eyebrow: "History shape",
  title: "Merge versus rebase, drawn",
  description: "Same work, two different histories.",
};
export const WF_LIFECYCLE: SectionCopy = {
  numeral: "V",
  icon: GitPullRequest,
  eyebrow: "Pull request lifecycle",
  title: "From branch to merged",
  description: "The same seven steps for every change. Click a step for its lesson.",
};
export const WF_UNDO: SectionCopy = {
  numeral: "VI",
  icon: Undo2,
  eyebrow: "When things go wrong",
  title: "Which undo command do I need?",
  description:
    "Answer the questions from the top. Untracked or unsaved file edits are a different problem: see git restore in the guide.",
};
export const WF_RELEASE: SectionCopy = {
  numeral: "VII",
  icon: Tag,
  eyebrow: "Releasing",
  title: "Four steps to a release",
  description: "Version, tag, push, publish.",
};

export const WF_TABLE_HEADS = {
  strategy: ["Strategy", "How it works", "Best for", "Watch out"],
  merge: ["Type", "Result", "Good when", "Trade-off"],
} as const;

export const WF_LANE_LABELS = {
  main: "main",
  feature: "feature/task-filter",
  pr: "Pull request",
  merge: "squash merge",
  tag: "v1.0.0",
  alt: "GitHub Flow: a feature branch leaves main, a pull request merges it back, and main is tagged v1.0.0",
} as const;

export const WF_REBASE_PANELS = [
  { title: "Before", caption: "main moved on (E) while your branch added C and D." },
  { title: "After merge", caption: "A merge commit M joins both histories. Nothing is rewritten." },
  { title: "After rebase", caption: "C and D are replayed after E as new commits C′ and D′." },
] as const;
export const WF_REBASE_ALT = "Before, after merge and after rebase history graphs";

export const WF_LIFECYCLE_LABEL = "Pull request lifecycle";
export const WF_LIFECYCLE_NODES: FlowNodeData[] = [
  {
    title: "Branch",
    text: "Start from an up-to-date main.",
    command: "git switch -c feature/x",
    icon: GitBranch,
    href: "/guide/branching",
  },
  {
    title: "Commit",
    text: "Small, meaningful commits.",
    command: 'git commit -m "feat: ..."',
    icon: GitCommitHorizontal,
    href: "/roadmap/first-commits",
  },
  {
    title: "Push",
    text: "Publish the branch to GitHub.",
    command: "git push -u origin HEAD",
    icon: CloudUpload,
    href: "/roadmap/github-remote",
  },
  {
    title: "Open PR",
    text: "Describe what, why and how you tested.",
    command: "gh pr create --fill",
    icon: GitPullRequest,
    href: "/roadmap/pull-requests",
  },
  {
    title: "Review and CI",
    text: "Address feedback; checks must pass.",
    command: "gh pr checks",
    icon: ShieldCheck,
    href: "/roadmap/protection-ci",
  },
  {
    title: "Merge",
    text: "Squash, merge or rebase, then delete the branch.",
    command: "gh pr merge --squash --delete-branch",
    icon: GitMerge,
    href: "/guide/pull-requests",
    tone: "signal",
  },
  {
    title: "Sync",
    text: "Update your local main.",
    command: "git switch main && git pull",
    icon: GitBranch,
    href: "/guide/pull-requests",
  },
];

export const WF_UNDO_LABELS = { yes: "Yes", no: "No", group: "Decision tree: which undo command" } as const;
export const WF_UNDO_TREE: Decision = {
  question: "Is the commit already pushed?",
  yes: {
    answer: "Use git revert",
    text: "Creates a new commit that reverses the old one. Safe for shared history.",
    command: "git revert <commit>",
    href: "/roadmap/undo",
  },
  no: {
    question: "Do you want to keep the changes?",
    yes: {
      question: "Keep them staged?",
      yes: {
        answer: "git reset --soft",
        text: "Commit undone, changes stay staged.",
        command: "git reset --soft HEAD~1",
        href: "/guide/conflicts-and-undo",
      },
      no: {
        answer: "git reset (mixed)",
        text: "Commit undone, changes stay in your files, unstaged.",
        command: "git reset HEAD~1",
        href: "/guide/conflicts-and-undo",
      },
    },
    no: {
      answer: "git reset --hard",
      text: "Discards the commit and the changes. Practise in a sandbox first.",
      command: "git reset --hard HEAD~1",
      href: "/roadmap/undo",
      danger: true,
    },
  },
};

export const WF_RELEASE_LABEL = "Release flow";
export const WF_RELEASE_NODES: FlowNodeData[] = [
  {
    title: "Choose the version",
    text: "MAJOR for breaking, MINOR for features, PATCH for fixes.",
    icon: ScrollText,
    href: "/roadmap/tags-releases",
  },
  {
    title: "Tag the commit",
    text: "Mark exactly what you ship.",
    command: 'git tag -a v1.0.0 -m "Release 1.0.0"',
    icon: Tag,
    href: "/guide/releases-ci-security",
  },
  {
    title: "Push the tag",
    text: "Tags are not pushed by a normal push.",
    command: "git push origin v1.0.0",
    icon: CloudUpload,
    href: "/guide/releases-ci-security",
  },
  {
    title: "Publish notes",
    text: "Generate notes from merged pull requests.",
    command: "gh release create v1.0.0 --generate-notes",
    icon: Rocket,
    href: "/roadmap/tags-releases",
    tone: "signal",
  },
];

export const WORKFLOWS_CTA: CtaCopy = {
  icon: GitPullRequest,
  title: "Try it on a real repository",
  description: "Practice challenges let you rehearse each workflow safely.",
  href: "/practice",
  label: "Open practice",
};
