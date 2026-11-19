import { CircleHelp } from "lucide-react";

import type { HeroCopy } from "@/shared/types/content";

export const FAQ_HERO: HeroCopy = {
  badge: "FAQ",
  icon: CircleHelp,
  title: { top: "Questions,", accent: "answered." },
  description: "Short answers about how this guide works, your data and the AI mentor.",
  primary: { label: "Open the roadmap", href: "/roadmap" },
  secondary: { label: "Contact", href: "/contact" },
};

export const FAQS = [
  {
    q: "Do I need to know Git already?",
    a: "No. Lesson 1 starts with installing and configuring Git, and each lesson builds on the previous one.",
    href: "/roadmap/setup",
  },
  {
    q: "Is my progress saved?",
    a: "Yes, in your browser's local storage on this device. It is not uploaded anywhere. Clearing site data removes it.",
    href: "/progress",
  },
  {
    q: "Does the site collect my data?",
    a: "No accounts, no analytics and no tracking cookies. See the privacy page for exactly what is stored locally.",
    href: "/privacy",
  },
  {
    q: "Why does the AI mentor not run commands for me?",
    a: "Because the goal is learning. The mentor explains and verifies; you type the commands.",
    href: "/mentor",
  },
  {
    q: "How do I know a command is correct?",
    a: "Check it with git help <command> or gh <command> --help, then with the official docs. docs/ai/VERIFY.md describes a five-minute routine.",
    href: "/mentor",
  },
  {
    q: "Is this affiliated with Git or GitHub?",
    a: "No. Git and GitHub are trademarks of their respective owners. This is an independent learning project.",
    href: "/terms",
  },
  {
    q: "Can I practise destructive commands safely?",
    a: "Yes. Lesson 8 shows how to create a sandbox repository so you can break things without risk.",
    href: "/roadmap/undo",
  },
  {
    q: "Why pnpm instead of npm?",
    a: "The project pins pnpm in package.json so everyone gets the same dependency tree.",
    href: "/packages",
  },
  {
    q: "How do I report a wrong step?",
    a: "Use the contact page or open an issue in the repository.",
    href: "/contact",
  },
] as const;

export const FAQ_LINK_LABEL = "Learn more →";
