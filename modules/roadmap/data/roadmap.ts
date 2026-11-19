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
  title: "How the lessons connect",
  description:
    "Each link goes from a lesson to the lesson that builds on it. Hover a card to light up its connections, click to open it.",
  label: "Learning path map",
} as const;

export const LESSON_PATH = { label: "Lesson path", current: "Current lesson" } as const;

export const ROADMAP_FILTERS = {
  sectionNumeral: "I",
  eyebrow: "Lessons",
  title: "Browse and filter the lessons",
  description:
    "Search by topic or command, pick a level, or hide what you have already finished. The filters are saved in the URL.",
  search: "Search lessons",
  searchPlaceholder: "Search topics or commands…",
  level: "Level",
  hideDone: "Hide completed",
  noResults: "No lesson matches. Try fewer filters.",
} as const;

export const LESSON_CONNECTIONS = {
  title: "Connected topics",
  label: "Topics connected to this lesson",
  buildsOn: "builds on",
  unlocks: "unlocks",
  runCommands: "run the commands",
  practise: "practise",
  vocabulary: "vocabulary",
  chapterPrefix: "Guide chapter",
  challengePrefix: "Practice",
  termsTitle: "Key terms",
} as const;

export const LESSON_TABS = {
  label: "Lesson sections",
  overview: "Overview",
  commands: "Commands",
  checkpoints: "Checkpoints",
} as const;
export type LessonTab = "overview" | "commands" | "checkpoints";
