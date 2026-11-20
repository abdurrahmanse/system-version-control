import { ScrollText } from "lucide-react";

import type { HeroCopy } from "@/shared/types/content";

export const CHANGELOG_HERO: HeroCopy = {
  badge: "Changelog",
  icon: ScrollText,
  title: { top: "What changed,", accent: "and when." },
  description: "Release notes in reverse chronological order. Versions follow Semantic Versioning.",
  primary: { label: "Open the roadmap", href: "/roadmap" },
};

export const RELEASES = [
  {
    version: "1.0.0",
    date: "2026-11-19",
    notes: [
      "Initial release: roadmap with 25 lessons and detailed lesson pages.",
      "150-step command guide in 15 chapters with copy buttons.",
      "Concepts, workflows, glossary and interactive practice challenges.",
      "Progress tracking with chart, sortable table and study goal.",
      "Command palette, light and dark themes, page transitions.",
      "AI mentor constitution and verification guide.",
    ],
  },
] as const;
