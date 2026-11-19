import { Compass, FileText, Flag, GraduationCap, Map, Rocket, Route, Users, Zap } from "lucide-react";

import type { Level } from "@/modules/curriculum";
import type { CtaCopy, HeroCopy } from "@/shared/types/content";

export const ROADMAP_HERO: HeroCopy = {
  badge: "15 lessons · 4 levels",
  icon: GraduationCap,
  title: { top: "The complete path,", accent: "zero to Pro Max." },
  description:
    "Every lesson is a commit on your learning branch. Work in order. Each has commands, a project task and a checkpoint. Open any lesson for the full step-by-step.",
  primary: { label: "Read the concepts first", href: "/concepts", icon: FileText },
  secondary: { label: "Meet the AI mentor", href: "/mentor", icon: Route },
};

export const LEVEL_ICONS: Record<Level, typeof Compass> = {
  Beginner: Compass,
  Intermediate: Users,
  Advanced: Zap,
  "Pro Max": Flag,
};

export const ROADMAP_CTA: CtaCopy = {
  icon: Rocket,
  title: "Finished? Go further",
  description: "Capstone: ship v1.0.0 and send one pull request to an open-source project.",
  href: "/practice",
  label: "Practice with challenges",
};

export const LESSON_PAGE = {
  eyebrow: "Lesson",
  overview: "Overview",
  guideLink: "Open the full 100-step guide",
  projectIntro: "Do this in the practice repository, on its own branch, then open a pull request.",
} as const;

export const ROADMAP_MAP = {
  numeral: "0",
  icon: Map,
  eyebrow: "The map",
  title: "All fifteen lessons at a glance",
  description: "Four levels, one line. Every stop is a lesson: click it to open the step-by-step page.",
  label: "Learning path map",
} as const;

export const LESSON_PATH = { label: "Lesson path", current: "Current lesson" } as const;
