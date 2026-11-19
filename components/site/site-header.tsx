import Link from "next/link";
import { Bot, GitBranch, Package, Route, ScrollText } from "lucide-react";

import { ThemeToggle } from "@/components/site/theme-toggle";

export const NAV_LINKS = [
  { href: "/roadmap", label: "Roadmap", icon: Route },
  { href: "/concepts", label: "Concepts", icon: ScrollText },
  { href: "/packages", label: "Toolbox", icon: Package },
  { href: "/mentor", label: "AI Mentor", icon: Bot },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b-4 border-double border-foreground bg-background/95 backdrop-blur">
      <div className="hidden border-b border-foreground/30 sm:block">
        <div className="mx-auto flex h-7 max-w-6xl items-center justify-between px-6 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
          <span>Vol. I · A field guide to version control</span>
          <span>Zero → Pro Max</span>
        </div>
      </div>
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex size-8 items-center justify-center border-2 border-foreground bg-signal text-primary-foreground">
            <GitBranch className="size-4" />
          </span>
          <span className="font-heading text-xl font-semibold tracking-tight">Git Field Guide</span>
        </Link>

        <nav className="flex items-center gap-1">
          {NAV_LINKS.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              aria-label={label}
              className="flex items-center gap-1.5 px-2.5 py-1.5 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              <Icon className="size-4" />
              <span className="hidden md:inline">{label}</span>
            </Link>
          ))}
          <span className="ml-2">
            <ThemeToggle />
          </span>
        </nav>
      </div>
    </header>
  );
}
