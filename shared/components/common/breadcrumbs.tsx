import { ChevronRight } from "lucide-react";
import Link from "next/link";

import { UI } from "@/shared/data/ui";
import { cn } from "@/shared/lib/utils";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
  return (
    <nav aria-label={UI.breadcrumbsLabel} className={cn("mb-6", className)}>
      <ol className="flex flex-wrap items-center gap-1.5 font-label text-xs tracking-wider text-muted-foreground uppercase">
        {items.map((c, i) => (
          <li key={c.label} className="flex items-center gap-1.5">
            {c.href ? (
              <Link href={c.href} className="hover:text-signal">
                {c.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-foreground">
                {c.label}
              </span>
            )}
            {i < items.length - 1 ? <ChevronRight className="size-3" /> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
