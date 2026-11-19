export type PackageInfo = { name: string; purpose: string; usedIn: string };
export type PackageGroup = {
  title: string;
  text: string;
  icon: "form" | "data" | "ui" | "util" | "test" | "quality" | "arch";
  items: PackageInfo[];
};

export const PACKAGE_GROUPS: PackageGroup[] = [
  {
    title: "Forms and validation",
    icon: "form",
    text: "Type-safe forms and runtime schemas.",
    items: [
      { name: "zod", purpose: "Schemas that validate data and infer TypeScript types.", usedIn: "modules/*/schemas/*" },
      {
        name: "react-hook-form",
        purpose: "Performant form state.",
        usedIn: "modules/contact/components/feedback-form.tsx",
      },
      {
        name: "@hookform/resolvers",
        purpose: "Connects zod schemas to react-hook-form.",
        usedIn: "modules/contact/components/feedback-form.tsx",
      },
    ],
  },
  {
    title: "Data and state",
    icon: "data",
    text: "Server state, client state, URL state, tables.",
    items: [
      {
        name: "@tanstack/react-query",
        purpose: "Async state and mutations.",
        usedIn: "modules/contact/hooks/use-feedback-mutation.ts, modules/search/hooks/use-search-query.ts",
      },
      {
        name: "@tanstack/react-table",
        purpose: "Headless sortable table (v9 API).",
        usedIn: "modules/progress/components/lessons-table.tsx",
      },
      {
        name: "zustand",
        purpose: "Small client store with persistence.",
        usedIn: "modules/progress/store/progress-store.ts",
      },
      {
        name: "nuqs",
        purpose: "Type-safe state in the URL query string.",
        usedIn: "modules/guide/components/guide-search.tsx, modules/glossary/components/glossary-browser.tsx",
      },
      { name: "ky", purpose: "Tiny fetch wrapper with JSON helpers.", usedIn: "shared/api/http-client.ts" },
    ],
  },
  {
    title: "UI and motion",
    icon: "ui",
    text: "Feedback, theming, charts, drag and drop.",
    items: [
      { name: "sonner", purpose: "Toast notifications.", usedIn: "modules/theme/components/themed-toaster.tsx" },
      { name: "next-themes", purpose: "Light, dark and system themes.", usedIn: "modules/theme/components/*" },
      {
        name: "recharts",
        purpose: "Charts.",
        usedIn: "modules/progress/components/*-chart.tsx, modules/toolbox/components/package-chart.tsx",
      },
      {
        name: "cmdk",
        purpose: "Command palette primitives.",
        usedIn: "shared/ui/command.tsx, modules/search/components/search-palette.tsx",
      },
      { name: "motion", purpose: "Animations and page transitions.", usedIn: "shared/motion/*" },
      {
        name: "@dnd-kit/core",
        purpose: "Drag and drop engine.",
        usedIn: "modules/practice/components/challenge-board.tsx",
      },
      {
        name: "@dnd-kit/sortable",
        purpose: "Sortable lists on top of dnd-kit.",
        usedIn: "modules/practice/components/sortable-command.tsx",
      },
      {
        name: "embla-carousel-react",
        purpose: "Accessible carousel.",
        usedIn: "modules/home/components/mistakes-carousel.tsx",
      },
      {
        name: "react-day-picker",
        purpose: "Calendar for the study goal.",
        usedIn: "modules/progress/components/goal-planner.tsx",
      },
    ],
  },
  {
    title: "Utilities",
    icon: "util",
    text: "Small helpers used across the project.",
    items: [
      { name: "date-fns", purpose: "Date formatting and math.", usedIn: "shared/lib/format.ts" },
      { name: "nanoid", purpose: "Compact unique ids.", usedIn: "modules/contact/server.ts" },
      {
        name: "use-debounce",
        purpose: "Debounced inputs.",
        usedIn: "modules/guide/components/guide-search.tsx, modules/glossary/components/glossary-browser.tsx",
      },
      {
        name: "react-error-boundary",
        purpose: "Contain UI crashes.",
        usedIn: "shared/components/common/safe-section.tsx",
      },
      { name: "@t3-oss/env-nextjs", purpose: "Validated environment variables.", usedIn: "shared/config/env.ts" },
    ],
  },
  {
    title: "Testing",
    icon: "test",
    text: "Unit, component, mock-network and end-to-end tests.",
    items: [
      { name: "vitest", purpose: "Test runner.", usedIn: "vitest.config.mts" },
      { name: "@vitejs/plugin-react", purpose: "JSX transform for Vitest.", usedIn: "vitest.config.mts" },
      { name: "jsdom", purpose: "Browser-like DOM for tests.", usedIn: "vitest.config.mts" },
      { name: "@testing-library/react", purpose: "Render and query components.", usedIn: "tests/components/*" },
      { name: "@testing-library/user-event", purpose: "Realistic user interactions.", usedIn: "tests/components/*" },
      { name: "@testing-library/jest-dom", purpose: "DOM matchers.", usedIn: "tests/setup.ts" },
      { name: "msw", purpose: "Mock the network in tests.", usedIn: "tests/mocks/*" },
      { name: "@playwright/test", purpose: "End-to-end browser tests.", usedIn: "e2e/*" },
    ],
  },
  {
    title: "Quality and releases",
    icon: "quality",
    text: "Formatting, hooks, commit rules, dead code and versioning.",
    items: [
      { name: "prettier", purpose: "Code formatter.", usedIn: ".prettierrc.json" },
      { name: "prettier-plugin-tailwindcss", purpose: "Sorts Tailwind classes.", usedIn: ".prettierrc.json" },
      { name: "husky", purpose: "Runs Git hooks.", usedIn: ".husky/*" },
      { name: "lint-staged", purpose: "Lint only staged files.", usedIn: "package.json (lint-staged)" },
      { name: "@commitlint/cli", purpose: "Validates commit messages.", usedIn: ".husky/commit-msg" },
      {
        name: "@commitlint/config-conventional",
        purpose: "Conventional Commits ruleset.",
        usedIn: "commitlint.config.mjs",
      },
      { name: "@changesets/cli", purpose: "Versioning and changelog.", usedIn: ".changeset/*" },
      { name: "@next/bundle-analyzer", purpose: "Inspect bundle size.", usedIn: "next.config.ts" },
      { name: "knip", purpose: "Find unused files and dependencies.", usedIn: "knip.json" },
    ],
  },
  {
    title: "Architecture and platform",
    icon: "arch",
    text: "Keeps the modular monolith honest and the app fast.",
    items: [
      {
        name: "dependency-cruiser",
        purpose: "Enforces module boundaries and forbids cycles.",
        usedIn: ".dependency-cruiser.cjs",
      },
      { name: "eslint-plugin-simple-import-sort", purpose: "Deterministic import order.", usedIn: "eslint.config.mjs" },
      {
        name: "server-only",
        purpose: "Fails the build if server code reaches the client.",
        usedIn: "modules/curriculum/server/lesson-repository.ts",
      },
      {
        name: "babel-plugin-react-compiler",
        purpose: "React Compiler: automatic memoisation.",
        usedIn: "next.config.ts",
      },
      { name: "tsx", purpose: "Runs TypeScript scripts.", usedIn: "scripts/generate-docs.ts" },
      { name: "@vitest/coverage-v8", purpose: "Test coverage reports.", usedIn: "vitest.config.mts" },
      { name: "@axe-core/playwright", purpose: "Automated accessibility checks.", usedIn: "e2e/a11y.spec.ts" },
    ],
  },
];
