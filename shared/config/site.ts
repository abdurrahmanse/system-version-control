import {
  BookMarked,
  BookOpen,
  Bot,
  Building2,
  CircleCheck,
  CircleHelp,
  Compass,
  Flag,
  Gauge,
  GraduationCap,
  Info,
  Library,
  ListChecks,
  type LucideIcon,
  Mail,
  Package,
  Route,
  ScrollText,
  Swords,
  Terminal,
  TriangleAlert,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

export const SITE = {
  name: "System Version Control",
  shortName: "System Version Control",
  tagline: "Version control, from zero to Pro Max",
  description:
    "A zero-to-enterprise field guide to version control with Git and GitHub: roadmap, 150-step command guide, concepts, practice and an AI mentor with rules.",
  ogEyebrow: "Vol. I",
  keywords: ["git", "github", "version control", "learn git", "git tutorial", "pull request", "rebase"],
  locale: "en",
} as const;

export type NavItem = {
  href: string;
  label: string;
  description: string;
  icon: LucideIcon;
  /** Heading shown above this item (and the items after it) inside a mega panel. */
  section?: string;
  /** Active only on this exact path, not on its sub-pages. */
  exact?: boolean;
};
export type NavGroup = { label: string; icon: LucideIcon; items: NavItem[] };

// One entry per learning level. Slugs must match TRACKS in modules/tracks (a unit test checks it).
export const LEVEL_LINKS = [
  { slug: "beginner", label: "Beginner", icon: Compass },
  { slug: "intermediate", label: "Intermediate", icon: Users },
  { slug: "advanced", label: "Advanced", icon: Zap },
  { slug: "pro-max", label: "Pro Max", icon: Flag },
  { slug: "enterprise", label: "Enterprise", icon: Building2 },
] as const;

// Separate pages every level has. `path` is empty for the level's roadmap page.
export const LEVEL_PAGES = [
  { path: "", slug: "roadmap", label: "Roadmap", description: "Every step, in order.", icon: Route },
  {
    path: "commands",
    slug: "commands",
    label: "Commands",
    description: "The cheat sheet to copy from.",
    icon: Terminal,
  },
  { path: "tasks", slug: "tasks", label: "Tasks", description: "What to build and do.", icon: ListChecks },
  { path: "checklist", slug: "checklist", label: "Checklist", description: "Know you are done.", icon: CircleCheck },
  { path: "mistakes", slug: "mistakes", label: "Mistakes", description: "Traps to avoid.", icon: TriangleAlert },
  { path: "terms", slug: "terms", label: "Terms", description: "Words used in this level.", icon: BookOpen },
  { path: "practice", slug: "practice", label: "Practice", description: "Order the commands.", icon: Swords },
] as const;

const LEVEL_NAV_ITEMS: NavItem[] = LEVEL_LINKS.flatMap((level) =>
  LEVEL_PAGES.map((page) => ({
    href: `/tracks/${level.slug}${page.path ? `/${page.path}` : ""}`,
    label: page.label,
    description: `${level.label}: ${page.description}`,
    icon: page.icon,
    section: level.label,
    exact: true,
  })),
);

// Grouped navigation: powers the mega menu, the mobile menu, the footer and the search index.
export const NAV_GROUPS: NavGroup[] = [
  {
    label: "Learn",
    icon: GraduationCap,
    items: [
      { href: "/tracks", label: "Tracks", description: "Separate learning paths for every skill level.", icon: Route },
      { href: "/roadmap", label: "Roadmap", description: "Twenty-five lessons from zero to Enterprise.", icon: Route },
      { href: "/guide", label: "Guide", description: "All 150 commands, step by step.", icon: Terminal },
      { href: "/practice", label: "Practice", description: "Put commands in the right order.", icon: Swords },
      { href: "/progress", label: "Progress", description: "Charts, table and study goal.", icon: Gauge },
    ],
  },
  { label: "Levels", icon: Compass, items: LEVEL_NAV_ITEMS },
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
