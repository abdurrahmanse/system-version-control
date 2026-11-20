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

import type { Decision, FlowNodeData, HeroCopy } from "@/shared/types/content";

export const WORKFLOWS_HERO: HeroCopy = {
  badge: "Team workflows",
  icon: Workflow,
  title: { top: "How teams actually", accent: "ship code." },
  description:
    "Branching strategies, merging, pull requests, undoing mistakes and releasing: one short page each, drawn as diagrams you can click through.",
  primary: { label: "Practice the flow", href: "/practice", icon: GitPullRequest },
  secondary: { label: "See the 150-step guide", href: "/guide" },
};

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

// Sub-pages of /workflows: one workflow idea per page.
export const WF_TOPICS = [
  {
    slug: "strategies",
    title: "Branching strategies",
    text: "GitHub Flow, trunk-based or Git Flow: which fits?",
    icon: Scale,
  },
  {
    slug: "github-flow",
    title: "GitHub Flow, drawn",
    text: "main, a short branch, a pull request and a tag.",
    icon: GitBranch,
  },
  {
    slug: "merging",
    title: "Merging",
    text: "Merge commit, squash or rebase, and what each leaves behind.",
    icon: GitMerge,
  },
  {
    slug: "pull-requests",
    title: "Pull request lifecycle",
    text: "Seven steps from branch to merged.",
    icon: GitPullRequest,
  },
  { slug: "undo", title: "Undoing mistakes", text: "A decision tree: which undo command do I need?", icon: Undo2 },
  { slug: "releasing", title: "Releasing", text: "Version, tag, push, publish.", icon: Tag },
] as const;
export type WorkflowTopicSlug = (typeof WF_TOPICS)[number]["slug"];

export const WF_NAV = { label: "Workflow sections", overview: "Overview" } as const;
export const WF_HUB = {
  numeral: "I",
  icon: Workflow,
  eyebrow: "Explore",
  title: "Pick a workflow topic",
  description: "Each card is one short page.",
} as const;

export const WF_TOPIC_INTROS: Record<WorkflowTopicSlug, HeroCopy> = {
  strategies: {
    badge: "Workflows",
    icon: Scale,
    title: { top: "Three strategies,", accent: "no single winner." },
    description: "The right answer depends on team size, release style and test maturity. Pick one tab and compare.",
    primary: { label: "Next: GitHub Flow, drawn", href: "/workflows/github-flow" },
  },
  "github-flow": {
    badge: "Workflows",
    icon: GitBranch,
    title: { top: "GitHub Flow,", accent: "drawn." },
    description:
      "main stays deployable. Work happens on a short branch, lands through a pull request and is tagged when released.",
    primary: { label: "Next: merging", href: "/workflows/merging" },
  },
  merging: {
    badge: "Workflows",
    icon: GitMerge,
    title: { top: "Three ways to merge,", accent: "compared." },
    description: "All are valid. Your team convention decides. Then see merge and rebase drawn side by side.",
    primary: { label: "Next: the pull request lifecycle", href: "/workflows/pull-requests" },
  },
  "pull-requests": {
    badge: "Workflows",
    icon: GitPullRequest,
    title: { top: "From branch", accent: "to merged." },
    description: "The same seven steps for every change. Click a step for its lesson.",
    primary: { label: "Next: undoing mistakes", href: "/workflows/undo" },
  },
  undo: {
    badge: "Workflows",
    icon: Undo2,
    title: { top: "Which undo command", accent: "do I need?" },
    description:
      "Answer the questions from the top. Unsaved file edits are a different problem: see git restore in the guide.",
    primary: { label: "Next: releasing", href: "/workflows/releasing" },
  },
  releasing: {
    badge: "Workflows",
    icon: Tag,
    title: { top: "Four steps", accent: "to a release." },
    description: "Version, tag, push, publish.",
    primary: { label: "Practise the flow", href: "/practice" },
  },
};

// How well each strategy suits a situation (1 = low, 3 = high).
export const WF_FIT = {
  "GitHub Flow": { team: 2, cadence: 3, testing: 2 },
  "Trunk-based": { team: 3, cadence: 3, testing: 3 },
  "Git Flow": { team: 3, cadence: 1, testing: 1 },
} as const;
export const WF_FIT_LABELS = {
  team: "Team size it handles",
  cadence: "Release speed",
  testing: "Test automation needed",
  levels: ["Low", "Medium", "High"],
} as const;
export const WF_STRATEGY_LABELS = {
  how: "How it works",
  bestFor: "Best for",
  watchOut: "Watch out",
  pickLabel: "Choose a strategy",
} as const;
export const WF_MERGE_LABELS = { result: "Result", goodWhen: "Good when", tradeOff: "Trade-off" } as const;
