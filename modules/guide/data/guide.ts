import { ListChecks, Terminal } from "lucide-react";

import type { HeroCopy } from "@/shared/types/content";

export const GUIDE_HERO: HeroCopy = {
  badge: "100 steps · 10 chapters",
  icon: ListChecks,
  title: { top: "Every command,", bottom: "step by", accent: "step." },
  description:
    "From git --version to syncing a fork. Each step explains what the command does, when to use it and what can go wrong. Type them yourself.",
  primary: { label: "Start with chapter 1", href: "/guide/setup", icon: Terminal },
  secondary: { label: "Back to the roadmap", href: "/roadmap" },
};

export const GUIDE_INDEX = {
  numeral: "I",
  eyebrow: "Chapters",
  title: "Ten chapters, one hundred steps",
  description: "Follow them in order, or search below for a specific command.",
  searchEyebrow: "Find a command",
  searchTitle: "Search all 100 steps",
  searchDescription: "Filter by text. The filter is stored in the URL so you can share it.",
  searchNumeral: "II",
} as const;

export const GUIDE_CHAPTER = {
  stepsLabel: "steps",
  startHere: "Start here",
  warning: "Danger",
} as const;
