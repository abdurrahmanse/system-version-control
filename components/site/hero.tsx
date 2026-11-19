import Link from "next/link";
import { ArrowRight, Terminal, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { GitGraph } from "@/components/site/git-graph";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Cta = { label: string; href: string; icon?: LucideIcon };

type HeroProps = {
  badge: string;
  badgeIcon: LucideIcon;
  title: ReactNode;
  description: string;
  primary: Cta;
  secondary?: Cta;
  command?: string;
};

// Framed hero: classical centered layout, brutalist border + hard shadow,
// minimal palette, commit graph as the background.
export function Hero({ badge, badgeIcon: BadgeIcon, title, description, primary, secondary, command }: HeroProps) {
  const PrimaryIcon = primary.icon;
  const SecondaryIcon = secondary?.icon;
  return (
    <section className="px-4 py-10 sm:px-6 sm:py-16">
      <div className="relative mx-auto max-w-6xl overflow-hidden border-2 border-foreground bg-card shadow-[8px_8px_0_0_var(--foreground)]">
        <GitGraph className="absolute inset-0 size-full" />
        <div className="relative flex flex-col items-center gap-6 px-6 py-20 text-center sm:px-12 sm:py-28">
          <Badge variant="outline" className="h-7 gap-2 bg-background px-3">
            <BadgeIcon />
            {badge}
          </Badge>

          <h1 className="text-balance font-heading text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
            {title}
          </h1>

          <div className="flex items-center gap-3 text-signal" aria-hidden>
            <span className="h-px w-16 bg-foreground" />
            <span className="size-2 rotate-45 bg-signal" />
            <span className="h-px w-16 bg-foreground" />
          </div>

          <p className="max-w-2xl text-balance text-lg text-muted-foreground">{description}</p>

          <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="h-11 px-5">
              <Link href={primary.href}>
                {PrimaryIcon ? <PrimaryIcon data-icon="inline-start" /> : null}
                {primary.label}
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
            {secondary ? (
              <Button asChild size="lg" variant="outline" className="h-11 px-5">
                <Link href={secondary.href}>
                  {SecondaryIcon ? <SecondaryIcon data-icon="inline-start" /> : null}
                  {secondary.label}
                </Link>
              </Button>
            ) : null}
            {command ? (
              <code className="flex h-11 items-center gap-2 border-2 border-foreground bg-background px-4 font-mono text-xs">
                <Terminal className="size-4 text-signal" />
                {command}
              </code>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

// Italic, accent-coloured emphasis for headlines.
export function Accent({ children }: { children: ReactNode }) {
  return <em className="font-heading italic text-signal">{children}</em>;
}
