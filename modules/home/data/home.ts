import { GitCommitHorizontal, Network, Rocket, Route, Terminal } from "lucide-react";

import type { HeroCopy, SectionCopy } from "@/shared/types/content";

export const HOME_HERO: HeroCopy = {
  badge: "Git & GitHub · end to end",
  icon: GitCommitHorizontal,
  title: { top: "Learn version control,", bottom: "from zero to", accent: "Pro Max." },
  description:
    "A field guide with a real repository to practice on. Fifteen lessons and a 100-step command guide take you from your first commit to bisect, rebase, CI and open-source pull requests.",
  primary: { label: "Start the roadmap", href: "/roadmap", icon: Route },
  secondary: { label: "Open the 100-step guide", href: "/guide", icon: Terminal },
  command: "git init",
};

export const HOME_CTA = {
  icon: Rocket,
  title: "Make your first commit today",
  description: "Open lesson 01, set up Git and the GitHub CLI, and start your learning branch.",
  href: "/roadmap",
  label: "Open the roadmap",
} as const;

export const HOME_NEXT: SectionCopy = {
  numeral: "I",
  icon: Rocket,
  eyebrow: "Start here",
  title: "Your next step",
  description: "The guide remembers what you finished, in this browser only, and points to the right lesson.",
};

export const HOME_MAP = {
  numeral: "II",
  icon: Network,
  eyebrow: "The site map",
  title: "How the pages connect",
  description: "Every page leads somewhere useful. Hover a card to see its connections, click to go there.",
  label: "Map of how the pages of this guide connect",
} as const;
