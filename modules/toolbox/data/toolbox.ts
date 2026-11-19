import { BarChart3, FlaskConical, House, Network, Package } from "lucide-react";

import type { HeroCopy, SectionCopy } from "@/shared/types/content";

export const PACKAGES_HERO: HeroCopy = {
  badge: "Under the hood",
  icon: Package,
  title: { top: "What this site", accent: "is made of." },
  description:
    "A look at the packages behind the guide, for developers who want to read the code. Not needed to learn Git.",
  primary: { label: "Open the roadmap", href: "/roadmap", icon: FlaskConical },
  secondary: { label: "Back home", href: "/", icon: House },
};

export const PACKAGES_CATALOG: SectionCopy = {
  numeral: "III",
  icon: BarChart3,
  eyebrow: "Catalog",
  title: "Packages by job",
  description: "Where each package is used is listed so you can read the real code.",
};
export const PACKAGES_UI = { usedIn: "Used in", purpose: "Purpose" } as const;

export const PACKAGES_CHART = {
  numeral: "II",
  icon: BarChart3,
  eyebrow: "At a glance",
  title: "Packages per category",
  description: "How the toolbox is balanced.",
  series: "Packages",
} as const;
export const PACKAGES_NPM = { label: "View on npm", base: "https://www.npmjs.com/package/" } as const;

export const PACKAGES_GRAPH = {
  numeral: "I",
  icon: Network,
  eyebrow: "Connections",
  title: "Which packages power which parts",
  description:
    "Left: package categories. Right: the folders that use them. Hover a card to see its links, click a category to open its page.",
  label: "Package categories linked to the parts of the project that use them",
} as const;
export const PACKAGES_NAV = { label: "Under the hood sections", overview: "Overview" } as const;
export const PACKAGES_GROUP_UI = { count: (n: number) => `${n} packages` } as const;
