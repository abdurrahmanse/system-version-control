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

export const GUIDE_PATH = {
  numeral: "I",
  eyebrow: "The route",
  title: "Ten chapters, one route",
  description:
    "Follow the line from chapter 1 to 10. A ticked chapter has all of its steps done. Click a chapter to open it.",
  label: "Route through the ten guide chapters",
  stepsLabel: (n: number) => `${n} steps`,
} as const;

export const GUIDE_FILTERS = {
  chapter: "Chapter",
  chapterAll: "All chapters",
  level: "Level",
  warningsOnly: "Warnings only",
  hideDone: "Hide completed",
  empty: "No step matches. Try fewer filters.",
} as const;

export const GUIDE_STEP = {
  dangerLabel: "Has a warning",
  allInChapter: "All steps in this chapter",
  relatedLesson: "Learn this in",
  nextStep: "Next step",
  previousStep: "Previous step",
} as const;
