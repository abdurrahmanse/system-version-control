import {
  BadgeCheck,
  BookCheck,
  Bot,
  CheckCheck,
  CircleHelp,
  FileText,
  Hand,
  Hourglass,
  MessageCircleQuestion,
  Scale,
  Search,
  ShieldAlert,
  ShieldCheck,
  Siren,
  Tag,
  Terminal,
  Workflow,
} from "lucide-react";

import type { CtaCopy, HeroCopy, SectionCopy } from "@/shared/types/content";

export const MENTOR_HERO: HeroCopy = {
  badge: "Verified · unbiased · read-only",
  icon: ShieldCheck,
  title: { top: "An AI mentor that", accent: "shows its sources." },
  description:
    "The project ships a written constitution for AI agents. It exists to stop hallucinations, one-sided advice and unsafe shortcuts while you learn.",
  primary: { label: "See the rules", href: "#rules", icon: FileText },
  secondary: { label: "Back to the roadmap", href: "/roadmap", icon: Bot },
};

export const MENTOR_RULES_SECTION: SectionCopy = {
  numeral: "I",
  icon: BookCheck,
  eyebrow: "The constitution",
  title: "Six rules every answer must follow",
};
export const MENTOR_RULES = [
  {
    icon: Search,
    title: "Truth over fluency",
    text: "No invented commands, flags or URLs. If unsure, it says so.",
    href: "/faq",
  },
  {
    icon: BadgeCheck,
    title: "Verify before claiming",
    text: "Checks git help, installed package docs and official sources first.",
    href: "/guide",
  },
  {
    icon: Hourglass,
    title: "Version aware",
    text: "This repo uses new major versions. APIs are read, not remembered.",
    href: "/packages",
  },
  {
    icon: Scale,
    title: "No bias",
    text: "Merge vs rebase vs squash: trade-offs shown, opinions labelled as opinions.",
    href: "/workflows",
  },
  {
    icon: Hand,
    title: "Teaching mode",
    text: "You type the Git commands. The mentor explains and never commits for you.",
    href: "/practice",
  },
  {
    icon: ShieldAlert,
    title: "Safety first",
    text: "Risk explained and consent asked before reset --hard, force push or clean.",
    href: "/guide/conflicts-and-undo",
  },
] as const;

export const MENTOR_SOURCES_SECTION: SectionCopy = {
  numeral: "II",
  icon: Search,
  eyebrow: "Evidence ranking",
  title: "Where facts come from",
  description: "Higher on the list wins when sources disagree.",
};
export const MENTOR_SOURCES = [
  { text: "The tool itself: git help, --help, command output", links: [] },
  { text: "Installed files: node_modules README and types", links: [] },
  {
    text: "Official documentation",
    links: [
      { label: "git-scm.com/docs", href: "https://git-scm.com/docs" },
      { label: "docs.github.com", href: "https://docs.github.com" },
    ],
  },
  { text: "Blogs and forums: never sufficient alone", links: [] },
] as const;

export const MENTOR_EXAMPLE_SECTION: SectionCopy = {
  numeral: "IV",
  icon: CircleHelp,
  eyebrow: "In practice",
  title: "What an honest answer looks like",
  description: "Every claim carries a label so you know how much to trust it.",
};
export const MENTOR_EXAMPLE = {
  question: "Q: Why not just use git push --force?",
  verified: {
    label: "Verified",
    before: "",
    code1: "--force-with-lease",
    mid: " refuses to overwrite the remote if someone else pushed commits you have not seen. Plain ",
    code2: "--force",
    after: " overwrites regardless.",
  },
  docs: { label: "Docs", text: "See git-scm.com/docs/git-push" },
  unverified: { label: "Unverified", text: "GitHub settings paths can change. Confirm them in the GitHub docs." },
} as const;

export const MENTOR_GUARDRAILS_SECTION: SectionCopy = {
  numeral: "V",
  icon: Siren,
  eyebrow: "Guardrails",
  title: "Commands that always ask first",
  description: "Configured in .claude/settings.json so risky actions need your permission.",
};
export const MENTOR_GUARDED = [
  { cmd: "git push", href: "/guide/github-remote#step-54" },
  { cmd: "git reset", href: "/guide/conflicts-and-undo#step-76" },
  { cmd: "git clean", href: "/guide/daily-loop#step-29" },
  { cmd: "git rebase", href: "/guide/advanced-history#step-84" },
  { cmd: "git branch -D", href: "/guide/branching#step-49" },
  { cmd: "git commit", href: "/guide/first-repository#step-16" },
  { cmd: "git merge", href: "/guide/branching#step-47" },
  { cmd: "gh pr merge", href: "/guide/pull-requests#step-70" },
] as const;

export const MENTOR_CTA: CtaCopy = {
  icon: ShieldCheck,
  title: "Learn with a mentor you can check",
  description: "Verify any answer in five minutes with docs/ai/VERIFY.md.",
  href: "/roadmap",
  label: "Start the roadmap",
};

export const MENTOR_FLOW = {
  numeral: "III",
  icon: Workflow,
  eyebrow: "How it answers",
  title: "From your question to a labelled answer",
  description: "Every answer goes through the same checks. Click a step to see where you can run it yourself.",
  label: "How the AI mentor produces an answer",
  nodes: [
    {
      title: "Your question",
      text: "You ask about a command or a concept.",
      icon: MessageCircleQuestion,
      href: "/faq",
    },
    {
      title: "Ask the tool",
      text: "The mentor runs the tool's own help.",
      command: "git help <command>",
      icon: Terminal,
      href: "/guide/setup",
    },
    {
      title: "Read the docs",
      text: "Installed package docs, then the official site.",
      icon: FileText,
      href: "/packages",
    },
    { title: "Label the claim", text: "Verified, documented or unverified.", icon: Tag },
    {
      title: "You verify",
      text: "Compare with the docs before you run it.",
      icon: CheckCheck,
      href: "/roadmap/undo",
      tone: "signal",
    },
  ],
} as const;
