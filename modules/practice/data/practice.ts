import { Swords } from "lucide-react";

import type { HeroCopy } from "@/shared/types/content";

export const PRACTICE_HERO: HeroCopy = {
  badge: "Interactive challenges",
  icon: Swords,
  title: { top: "Put the commands", accent: "in order." },
  description:
    "Drag the steps into the correct sequence. Real workflows, rehearsed safely. Solved challenges count towards your progress.",
  primary: { label: "Start practising", href: "#challenges" },
  secondary: { label: "Read the 150-step guide", href: "/guide" },
};

export const PRACTICE_UI = {
  eyebrow: "Challenges",
  title: "Choose a workflow",
  description: "Each challenge is a real Git/GitHub sequence.",
  goal: "Goal",
  hint: "Hint",
  check: "Check order",
  reset: "Reset",
  showHint: "Show hint",
  hideHint: "Hide hint",
  correct: "Correct. That is the right order.",
  incorrect: "Not quite. Check the hint and try again.",
  solved: "Solved",
  why: "Why this order",
  relatedLesson: "Related lesson",
  dragLabel: "Drag to reorder",
  listLabel: "Command sequence",
  solvedCount: (n: number, total: number) => `${n} of ${total} solved`,
} as const;

export const PRACTICE_FILTERS = {
  level: "Level",
  unsolved: "Unsolved only",
  empty: "No challenge matches. Try fewer filters.",
  open: "Open the challenge",
  back: "All challenges",
} as const;
