import {
  BookOpen,
  CircleCheck,
  Compass,
  Eye,
  Flag,
  GitPullRequest,
  Repeat,
  Rocket,
  Route,
  Swords,
  Terminal,
  Users,
  Zap,
} from "lucide-react";

import type { FlowNodeData, HeroCopy, SectionCopy } from "@/shared/types/content";

export const PATH_HERO: HeroCopy = {
  badge: "Step by step",
  icon: Route,
  title: { top: "One lesson after another,", accent: "in the right order." },
  description:
    "Follow the line from top to bottom. Each lesson tells you what to read, which commands to run, what to practise and when you are done.",
  primary: { label: "Start at lesson 1", href: "/roadmap/setup" },
  secondary: { label: "See how lessons connect", href: "/roadmap" },
};

export const PATH_NEXT: SectionCopy = {
  numeral: "I",
  icon: Rocket,
  eyebrow: "Your next step",
  title: "Where to go now",
  description: "Based on what you have completed. Your progress is stored only in this browser.",
};

export const PATH_UI = {
  nextLabel: "Next up",
  startLabel: "Start here",
  allDone: "You finished every lesson.",
  allDoneText: "Keep the skills sharp: rehearse the workflows, then contribute to an open-source project.",
  allDoneCta: "Open practice",
  openLesson: "Open the lesson",
  openGuide: "Run the commands",
  stepsLabel: "Four steps",
  stepRead: "Read",
  stepRun: "Run",
  stepPractise: "Practise",
  stepFinish: "Finish",
  commands: (n: number) => `${n} commands`,
  pathLabel: "Learning path",
  doneBadge: "Done",
  nextBadge: "Next",
  icons: { read: BookOpen, run: Terminal, practise: Swords, finish: CircleCheck },
} as const;

export const PATH_NAV = { label: "Path sections", overview: "Overview" } as const;

export const PATH_METHOD: SectionCopy & { label: string; nodes: FlowNodeData[] } = {
  numeral: "II",
  icon: Repeat,
  eyebrow: "How each lesson works",
  title: "The same four steps every time",
  description: "Read the idea, type the commands, ship a pull request, verify the result.",
  label: "The four-step learning loop",
  nodes: [
    {
      title: "Read",
      text: "One short lesson: the idea first, the commands second.",
      icon: BookOpen,
      href: "/concepts",
    },
    { title: "Type", text: "You run every command yourself. The AI only explains.", icon: Terminal, href: "/guide" },
    {
      title: "Ship",
      text: "Each lesson becomes a branch, a pull request and a merge.",
      icon: GitPullRequest,
      href: "/workflows/pull-requests",
    },
    {
      title: "Verify",
      text: "Check the result with --help and the official docs.",
      icon: Eye,
      href: "/mentor",
      tone: "signal",
    },
  ],
};

export const PATH_LEVELS_SECTION: SectionCopy = {
  numeral: "III",
  icon: Route,
  eyebrow: "Choose a level",
  title: "Four levels, four short pages",
  description: "Each level page lists only its own lessons, so you never scroll through all fifteen.",
};
export const PATH_LEVEL_ICONS = { Beginner: Compass, Intermediate: Users, Advanced: Zap, "Pro Max": Flag } as const;
export const PATH_LEVEL_UI = { lessons: (n: number) => `${n} lessons`, back: "All levels" } as const;
