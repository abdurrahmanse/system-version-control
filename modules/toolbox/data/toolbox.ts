import { BarChart3, FlaskConical, House, Package, Sparkles } from "lucide-react";

import type { CtaCopy, HeroCopy, SectionCopy } from "@/shared/types/content";

export const PACKAGES_HERO: HeroCopy = {
  badge: "Configured and in use",
  icon: Package,
  title: { top: "The enterprise", accent: "toolbox." },
  description:
    "Every package in this project has one clear job and one place where it is used. Read the code to learn how real teams wire them together.",
  primary: { label: "Open the roadmap", href: "/roadmap", icon: FlaskConical },
  secondary: { label: "Back home", href: "/", icon: House },
};

export const PACKAGES_CATALOG: SectionCopy = {
  numeral: "II",
  icon: BarChart3,
  eyebrow: "Catalog",
  title: "Packages by job",
  description: "Where each package is used is listed so you can read the real code.",
};
export const PACKAGES_WORKFLOW: SectionCopy = {
  numeral: "III",
  icon: Sparkles,
  eyebrow: "Workflow",
  title: "One change, one pull request",
  description: "Whenever you touch a package, use the same Git workflow.",
};
export const PACKAGES_STEPS = [
  "Create a branch such as feature/zod-validation",
  "Make the change and add or update a test",
  "Run pnpm verify (lint, typecheck, test, build)",
  "Open a pull request and merge it",
] as const;
export const PACKAGES_CTA: CtaCopy = {
  icon: Package,
  title: "Questions?",
  description: "Ask the AI mentor, or open an issue in the repository.",
  href: "/mentor",
  label: "Ask the AI mentor",
};
export const PACKAGES_UI = { usedIn: "Used in", purpose: "Purpose" } as const;

export const PACKAGES_CHART = {
  numeral: "I",
  icon: BarChart3,
  eyebrow: "At a glance",
  title: "Packages per category",
  description: "How the toolbox is balanced.",
  series: "Packages",
} as const;
export const PACKAGES_NPM = { label: "View on npm", base: "https://www.npmjs.com/package/" } as const;
