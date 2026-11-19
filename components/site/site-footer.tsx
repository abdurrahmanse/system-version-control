import Link from "next/link";
import { GitCommitHorizontal } from "lucide-react";

import { NAV_LINKS } from "@/components/site/site-header";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t-4 border-double border-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-8 sm:flex-row sm:items-center sm:px-6">
        <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          <GitCommitHorizontal className="size-4 text-signal" />
          Commit early · branch freely · merge with care
        </p>
        <nav className="flex flex-wrap gap-4">
          {NAV_LINKS.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider hover:text-signal"
            >
              <Icon className="size-3.5" />
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
