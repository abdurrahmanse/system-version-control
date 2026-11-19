import { BookOpen, Code, Compass, ShieldCheck, Users } from "lucide-react";

import type { HeroCopy, SectionCopy } from "@/shared/types/content";

export const ABOUT_HERO: HeroCopy = {
  badge: "About",
  icon: Compass,
  title: { top: "A field guide built", accent: "to be checked." },
  description:
    "This project teaches Git and GitHub step by step, and it is itself a real repository you can branch, break and fix.",
  primary: { label: "Start the roadmap", href: "/roadmap" },
  secondary: { label: "Read the FAQ", href: "/faq" },
};

export const ABOUT_SECTIONS: { copy: SectionCopy; items: { icon: typeof Users; title: string; text: string }[] }[] = [
  {
    copy: { numeral: "I", icon: Users, eyebrow: "Audience", title: "Who it is for" },
    items: [
      { icon: Users, title: "Developers new to Git", text: "Start at lesson 1 and follow the path in order." },
      {
        icon: Code,
        title: "Developers who never managed GitHub properly",
        text: "Jump to pull requests, protection rules, CI and releases.",
      },
      { icon: BookOpen, title: "Teams onboarding people", text: "Use the roadmap as a shared reference." },
    ],
  },
  {
    copy: { numeral: "II", icon: ShieldCheck, eyebrow: "Principles", title: "How the content is written" },
    items: [
      {
        icon: ShieldCheck,
        title: "Verified commands",
        text: "Commands are checked against the tool's own help before they are published.",
      },
      {
        icon: Compass,
        title: "Trade-offs, not dogma",
        text: "Where several approaches are valid, the options and their costs are shown.",
      },
      {
        icon: BookOpen,
        title: "Official sources",
        text: "Lessons link to git-scm.com and docs.github.com rather than blog posts.",
      },
    ],
  },
];

export const ABOUT_STACK = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind CSS 4",
  "shadcn/ui and Radix UI",
  "TanStack Query and Table",
  "Zustand",
  "Zod",
  "Vitest and Playwright",
] as const;
export const ABOUT_STACK_SECTION: SectionCopy = {
  numeral: "III",
  icon: Code,
  eyebrow: "Under the hood",
  title: "Built with a modern stack",
};
