import { BookOpen } from "lucide-react";

import type { HeroCopy } from "@/shared/types/content";

export const GLOSSARY_HERO: HeroCopy = {
  badge: "A to Z",
  icon: BookOpen,
  title: { top: "The vocabulary of", accent: "version control." },
  description: "Short, standard definitions for every term you will meet. Search, or jump by letter.",
  primary: { label: "Read the concepts", href: "/concepts" },
};

export const GLOSSARY_UI = {
  searchLabel: "Search terms",
  searchPlaceholder: "Search terms…",
  empty: "No matching terms.",
  see: "Related command:",
} as const;
