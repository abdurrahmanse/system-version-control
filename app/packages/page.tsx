import type { Metadata } from "next";
import {
  BarChart3,
  Database,
  FlaskConical,
  FormInput,
  GitBranch,
  GitPullRequest,
  HelpCircle,
  Package,
  Palette,
  Sparkles,
  Tag,
  TestTube,
  Wrench,
  House,
  CircleCheck,
  FileCode,
} from "lucide-react";

import { CtaSection } from "@/components/site/cta-section";
import { Accent, Hero } from "@/components/site/hero";
import { IconTile, Section } from "@/components/site/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = { title: "Packages" };

const groups = [
  { icon: FormInput, title: "Forms & validation", text: "Type-safe forms and schemas.", items: ["react-hook-form", "zod", "@hookform/resolvers"] },
  { icon: Database, title: "Data & state", text: "Server state, tables and client state.", items: ["@tanstack/react-query", "@tanstack/react-table", "zustand", "nuqs", "ky"] },
  { icon: Palette, title: "UI & motion", text: "Feedback, theming, charts and drag-and-drop.", items: ["sonner", "next-themes", "recharts", "cmdk", "motion", "@dnd-kit/core", "embla-carousel-react", "react-day-picker"] },
  { icon: Wrench, title: "Utilities", text: "Small helpers used everywhere.", items: ["date-fns", "nanoid", "use-debounce", "react-error-boundary", "@t3-oss/env-nextjs"] },
  { icon: TestTube, title: "Testing", text: "Unit, component and end-to-end tests.", items: ["vitest", "@testing-library/react", "@testing-library/user-event", "@testing-library/jest-dom", "jsdom", "msw", "@playwright/test"] },
  { icon: Tag, title: "Quality & releases", text: "Git hooks, formatting and versioning.", items: ["husky", "lint-staged", "@commitlint/cli", "prettier", "knip", "@changesets/cli", "@next/bundle-analyzer"] },
];

const steps = [
  { icon: GitBranch, text: "Create a branch such as feature/zod-validation" },
  { icon: FileCode, text: "Follow the package guide in docs/PACKAGES.md" },
  { icon: CircleCheck, text: "Run pnpm build and pnpm lint" },
  { icon: GitPullRequest, text: "Open a pull request and merge it" },
];

export default function PackagesPage() {
  return (
    <main>
      <Hero
        badge="Installed and ready"
        badgeIcon={Package}
        title={
          <>
            The enterprise <Accent>toolbox.</Accent>
          </>
        }
        description="Packages used by production Next.js teams. Enable them one at a time, each in its own pull request."
        primary={{ label: "Open the roadmap", href: "/roadmap", icon: FlaskConical }}
        secondary={{ label: "Back home", href: "/", icon: House }}
      />

      <Section icon={BarChart3} numeral="I" eyebrow="Catalog" title="Six categories" description="Installed, not yet configured. That is your practice.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <Card key={group.title}>
              <CardHeader>
                <IconTile icon={group.icon} />
                <CardTitle className="font-heading text-xl">{group.title}</CardTitle>
                <CardDescription>{group.text}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item} variant="outline" className="gap-1 font-mono text-xs">
                    <Package className="size-3" />
                    {item}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section icon={Sparkles} numeral="II" eyebrow="Workflow" title="One package, one pull request" description="Branch, configure, test, review, merge.">
        <ol className="max-w-xl space-y-3">
          {steps.map(({ icon: Icon, text }, i) => (
            <li key={text} className="flex items-center gap-3 text-muted-foreground">
              <span className="flex size-8 shrink-0 items-center justify-center border-2 border-foreground bg-secondary text-foreground">
                <Icon className="size-4" />
              </span>
              <span className="font-mono text-xs text-foreground/50">0{i + 1}</span>
              {text}
            </li>
          ))}
        </ol>
      </Section>

      <CtaSection
        icon={HelpCircle}
        title="Questions?"
        description="Ask the AI mentor, or open an issue in the repository."
        href="/mentor"
        label="Ask the AI mentor"
      />
    </main>
  );
}
