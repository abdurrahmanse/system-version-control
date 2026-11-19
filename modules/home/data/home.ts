import {
  Archive,
  BookOpen,
  Bot,
  CloudUpload,
  Eye,
  FilePen,
  GitCommitHorizontal,
  GitMerge,
  GitPullRequest,
  Layers,
  Library,
  Package,
  Repeat,
  Rocket,
  Route,
  ShieldCheck,
  Terminal,
} from "lucide-react";

import type { HeroCopy } from "@/shared/types/content";

export const HOME_HERO: HeroCopy = {
  badge: "Git & GitHub · end to end",
  icon: GitCommitHorizontal,
  title: { top: "Learn version control,", bottom: "from zero to", accent: "Pro Max." },
  description:
    "A field guide with a real repository to practice on. Fifteen lessons and a 100-step command guide take you from your first commit to bisect, rebase, CI and open-source pull requests.",
  primary: { label: "Start the roadmap", href: "/roadmap", icon: Route },
  secondary: { label: "Open the 100-step guide", href: "/guide", icon: Terminal },
  command: "git init",
};

export const HOME_STATS = {
  numeral: "I",
  icon: Library,
  eyebrow: "At a glance",
  title: "Everything in one repository",
  items: [
    { icon: BookOpen, key: "lessons", label: "Lessons", href: "/roadmap" },
    { icon: Terminal, key: "steps", label: "Guided commands", href: "/guide" },
    { icon: Layers, key: "levels", label: "Levels", href: "/roadmap" },
    { icon: Package, key: "packages", label: "Packages in the toolbox", href: "/packages" },
  ],
} as const;

export const HOME_PATH = {
  numeral: "II",
  icon: Route,
  eyebrow: "The path",
  title: "Four levels, fifteen lessons",
  description: "Finish each level before the next. Every lesson ends with a checkpoint you can verify yourself.",
  link: { label: "See the full roadmap →", href: "/roadmap" },
} as const;

export const HOME_METHOD = {
  numeral: "IV",
  icon: Repeat,
  eyebrow: "Method",
  title: "One loop, repeated fifteen times",
  description: "Learning Git means doing Git. Each lesson follows the same four steps.",
  steps: [
    {
      icon: BookOpen,
      title: "Read",
      text: "One short lesson: the idea first, the commands second.",
      href: "/concepts",
    },
    { icon: Terminal, title: "Type", text: "You run every command yourself. The AI only explains.", href: "/guide" },
    {
      icon: GitPullRequest,
      title: "Ship",
      text: "Each lesson becomes a branch, a pull request and a merge.",
      href: "/workflows",
    },
    { icon: Eye, title: "Verify", text: "Check the result with --help and the official docs.", href: "/mentor" },
  ],
} as const;

export const HOME_MISTAKES = {
  numeral: "V",
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

export const HOME_TRUST = {
  numeral: "VI",
  icon: Bot,
  eyebrow: "Trust",
  title: "An AI mentor that must show its sources",
  description:
    "A written constitution forbids invented commands and one-sided advice. Every claim is labelled verified, documented or unverified.",
  cardTitle: "Read the rules",
  cardText: "See how the mentor verifies commands, stays unbiased and never runs destructive Git operations for you.",
  link: { label: "Meet the mentor →", href: "/mentor" },
} as const;

export const HOME_CTA = {
  icon: Rocket,
  title: "Make your first commit today",
  description: "Open lesson 01, set up Git and the GitHub CLI, and start your learning branch.",
  href: "/roadmap",
  label: "Open the roadmap",
} as const;

export const HOME_FLOW = {
  numeral: "III",
  icon: GitMerge,
  eyebrow: "The workflow",
  title: "How one change travels",
  description: "Every change you make in this guide follows the same route. Click a step to learn it.",
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
