import {
  BookMarked,
  BookOpen,
  Bot,
  CircleHelp,
  Gauge,
  GraduationCap,
  Info,
  Library,
  type LucideIcon,
  Mail,
  Package,
  Route,
  ScrollText,
  Swords,
  Terminal,
  Users,
  Workflow,
} from "lucide-react";

export const SITE = {
  name: "System Version Control",
  shortName: "System Version Control",
  tagline: "Version control, from zero to Pro Max",
  description:
    "A zero-to-advanced field guide to version control with Git and GitHub: roadmap, 100-step command guide, concepts, practice and an AI mentor with rules.",
  ogEyebrow: "Vol. I",
  keywords: ["git", "github", "version control", "learn git", "git tutorial", "pull request", "rebase"],
  locale: "en",
} as const;

export type NavItem = { href: string; label: string; description: string; icon: LucideIcon };
export type NavGroup = { label: string; icon: LucideIcon; items: NavItem[] };

// Grouped navigation: powers the mega menu, the mobile menu, the footer and the search index.
export const NAV_GROUPS: NavGroup[] = [
  {
    label: "Learn",
    icon: GraduationCap,
    items: [
      { href: "/path", label: "Path", description: "Your step-by-step route, lesson after lesson.", icon: Route },
      { href: "/roadmap", label: "Roadmap", description: "Fifteen lessons from zero to Pro Max.", icon: Route },
      { href: "/guide", label: "Guide", description: "All 100 commands, step by step.", icon: Terminal },
      { href: "/practice", label: "Practice", description: "Put commands in the right order.", icon: Swords },
      { href: "/progress", label: "Progress", description: "Charts, table and study goal.", icon: Gauge },
    ],
  },
  {
    label: "Reference",
    icon: BookMarked,
    items: [
      { href: "/concepts", label: "Concepts", description: "The mental models behind Git.", icon: ScrollText },
      { href: "/workflows", label: "Workflows", description: "Branching, merging, releasing.", icon: Workflow },
      { href: "/glossary", label: "Glossary", description: "Every term, A to Z.", icon: BookOpen },
    ],
  },
  {
    label: "Project",
    icon: Users,
    items: [
      { href: "/mentor", label: "AI Mentor", description: "The rules that keep the AI honest.", icon: Bot },
      { href: "/packages", label: "Under the hood", description: "What this site is made of.", icon: Package },
      { href: "/about", label: "About", description: "Who this guide is for.", icon: Info },
      { href: "/faq", label: "FAQ", description: "Progress, privacy and more.", icon: CircleHelp },
      { href: "/changelog", label: "Changelog", description: "What changed and when.", icon: ScrollText },
      { href: "/contact", label: "Contact", description: "Report a mistake.", icon: Mail },
    ],
  },
];

export const HOME_NAV: NavItem = { href: "/", label: "Home", description: "Back to the start.", icon: Library };
export const ALL_NAV: NavItem[] = [HOME_NAV, ...NAV_GROUPS.flatMap((g) => g.items)];
export const FOOTER_LINKS = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/contact", label: "Contact" },
] as const;

export const HEADER = {
  stripLeft: "Vol. I · Learn Git and GitHub, step by step",
  stripRight: "Zero → Pro Max",
  menuTitle: "Menu",
  menuAria: "Main",
  searchLabel: "Search",
  searchShortcut: "K",
  themeLabel: "Change theme",
} as const;

export const FOOTER = {
  copyright: "System Version Control · Built for learning Git and GitHub",
  linksLabel: "Footer",
} as const;
