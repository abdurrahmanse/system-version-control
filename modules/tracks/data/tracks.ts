import { Building2, Compass, Flag, GraduationCap, Users, Zap } from "lucide-react";

import type { Level } from "@/modules/curriculum";
import { LEVEL_PAGES } from "@/shared/config/site";
import type { HeroCopy } from "@/shared/types/content";

export type Track = {
  level: Level;
  slug: string;
  numeral: string;
  title: string;
  audience: string;
  outcome: string;
  icon: typeof Compass;
};

export const TRACKS: readonly Track[] = [
  {
    level: "Beginner",
    slug: "beginner",
    numeral: "I",
    title: "Beginner",
    audience: "New to Git and GitHub",
    outcome: "Understand repositories, commits, branches and safe first merges.",
    icon: Compass,
  },
  {
    level: "Intermediate",
    slug: "intermediate",
    numeral: "II",
    title: "Intermediate",
    audience: "Comfortable with local Git and ready for team collaboration",
    outcome: "Ship reviewed pull requests, resolve conflicts and recover mistakes.",
    icon: Users,
  },
  {
    level: "Advanced",
    slug: "advanced",
    numeral: "III",
    title: "Advanced",
    audience: "Developers operating professional team workflows",
    outcome: "Rebase safely, manage releases, projects and CI protection.",
    icon: Zap,
  },
  {
    level: "Pro Max",
    slug: "pro-max",
    numeral: "IV",
    title: "Pro Max",
    audience: "Experienced engineers responsible for quality and history",
    outcome: "Use hooks, forensics, security controls and open-source workflows.",
    icon: Flag,
  },
  {
    level: "Enterprise",
    slug: "enterprise",
    numeral: "V",
    title: "Enterprise",
    audience: "Platform, DevOps, security and engineering leaders",
    outcome: "Operate GitHub identity, policy, CI/CD, supply chain and recovery at scale.",
    icon: Building2,
  },
] as const;

export const TRACK_HERO: HeroCopy = {
  badge: "Choose your learning track",
  icon: GraduationCap,
  title: { top: "Learn GitHub", accent: "at your level." },
  description:
    "Start with fundamentals or enter directly at intermediate, advanced, Pro Max or enterprise level. Every track has its own roadmap, lessons, commands and checkpoints.",
  primary: { label: "Start beginner", href: "/tracks/beginner" },
  secondary: { label: "View enterprise track", href: "/tracks/enterprise" },
};

export const TRACK_NAV = { label: "Learning tracks", overview: "Overview" } as const;

export type TrackSection = "commands" | "tasks" | "checklist" | "mistakes" | "terms" | "practice";

// Sub-pages of every level (the roadmap itself is the level page). Labels come from the shared nav config.
export const TRACK_SECTIONS = LEVEL_PAGES.filter((page) => page.path !== "").map((page) => ({
  slug: page.slug as TrackSection,
  label: page.label,
  description: page.description,
}));

export const TRACK_SECTION_COPY = {
  lessonsLabel: "Roadmap",
  stepLabel: (n: number) => `Step ${n}`,
  openLesson: "Lesson details",
  intro: (title: string, description: string) => `${title}: ${description}`,
  emptyPractice: "No practice challenges for this level yet. Use the checklist instead.",
  noTerms: "No new terms in this level.",
} as const;
