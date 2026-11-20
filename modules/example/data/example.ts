import {
  Bug,
  CloudUpload,
  Database,
  FolderGit2,
  GitBranch,
  GitPullRequest,
  Layers,
  type LucideIcon,
  Rocket,
  ShieldCheck,
  Sprout,
  Workflow,
} from "lucide-react";

import type { HeroCopy } from "@/shared/types/content";

export type ExampleSlug =
  | "architecture"
  | "repository"
  | "branches"
  | "feature-flow"
  | "ci-cd"
  | "releases"
  | "protection"
  | "security"
  | "database"
  | "incidents";

export type ExamplePage = { slug: ExampleSlug; title: string; tagline: string; text: string; icon: LucideIcon };

// The ten pages follow the life of one product: AgroFarm, a farm management system (web, API, worker, database).
export const EXAMPLE_PAGES: readonly ExamplePage[] = [
  {
    slug: "architecture",
    title: "The system",
    tagline: "one repository, six parts.",
    text: "What AgroFarm is made of and which part depends on which.",
    icon: Layers,
  },
  {
    slug: "repository",
    title: "Create the repository",
    tagline: "from empty folder to GitHub.",
    text: "Make the monorepo, the first commit and the GitHub settings.",
    icon: FolderGit2,
  },
  {
    slug: "branches",
    title: "Branches",
    tagline: "which exist and how they live.",
    text: "main, feature, release and hotfix branches drawn on one graph.",
    icon: GitBranch,
  },
  {
    slug: "feature-flow",
    title: "A feature, start to end",
    tagline: "issue to merged pull request.",
    text: "The daily loop every developer repeats.",
    icon: GitPullRequest,
  },
  {
    slug: "ci-cd",
    title: "CI/CD",
    tagline: "from push to production.",
    text: "Checks on every pull request, deploys on every merge.",
    icon: Workflow,
  },
  {
    slug: "releases",
    title: "Releases",
    tagline: "versions and tags.",
    text: "Cut a version, tag it and publish the notes.",
    icon: Rocket,
  },
  {
    slug: "protection",
    title: "Protect main",
    tagline: "rules nobody can skip.",
    text: "Rulesets, reviewers and required checks.",
    icon: ShieldCheck,
  },
  {
    slug: "security",
    title: "Security",
    tagline: "find problems before users do.",
    text: "Dependencies, secrets and code scanning.",
    icon: Bug,
  },
  {
    slug: "database",
    title: "Database changes",
    tagline: "migrations without downtime.",
    text: "Version the schema together with the code.",
    icon: Database,
  },
  {
    slug: "incidents",
    title: "When production breaks",
    tagline: "roll back, hotfix, learn.",
    text: "Decide fast and recover safely.",
    icon: CloudUpload,
  },
];

export const EXAMPLE_HERO: HeroCopy = {
  badge: "Worked example",
  icon: Sprout,
  title: { top: "Version-control a real product,", accent: "AgroFarm." },
  description:
    "One farm management system with a web app, API, background worker and database, managed on GitHub in ten short steps. Every page shows the commands and what each one changes.",
  primary: { label: "Start with the system", href: "/example/architecture" },
  secondary: { label: "Jump to branches", href: "/example/branches" },
};

export const EXAMPLE_COPY = {
  navLabel: "Example pages",
  overview: "Overview",
  stepBadge: (n: number, total: number) => `Example · step ${n} of ${total}`,
  effectLabel: "Result",
  stepsTitle: "Commands",
  diagramTitle: "Diagram",
  journeyLabel: "The ten steps of the AgroFarm example",
  back: "Back to the example",
  next: "Next",
} as const;
