"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Container } from "@/shared/components/layout/container";
import { cn } from "@/shared/lib/utils";

export type SubNavItem = { href: string; label: string };

// Tab-style navigation between the sub-pages of one section. Keeps every page short: one idea per page.
export function SubNav({ items, label }: { items: readonly SubNavItem[]; label: string }) {
  const pathname = usePathname();
  return (
    <nav aria-label={label} className="border-b-2 border-edge bg-card/60">
      <Container>
        <ul className="flex gap-1 overflow-x-auto py-2">
          {items.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "block border-2 px-3 py-1.5 font-label text-xs tracking-wider whitespace-nowrap uppercase transition-colors",
                    active
                      ? "border-edge bg-foreground text-background"
                      : "border-transparent hover:border-edge hover:bg-secondary",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </nav>
  );
}
