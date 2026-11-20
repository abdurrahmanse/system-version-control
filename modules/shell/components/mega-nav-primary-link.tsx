"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { NavItem } from "@/shared/config/site";
import { Button } from "@/shared/ui/button";

// A plain header link (no dropdown) that sits beside the mega-menu groups.
export function MegaNavPrimaryLink({ item }: { item: NavItem }) {
  const pathname = usePathname();
  const active = pathname.startsWith(item.href);
  const Icon = item.icon;
  return (
    <Button
      asChild
      variant={active ? "secondary" : "ghost"}
      size="sm"
      className="gap-1 px-2 text-xs lg:gap-1.5 lg:px-2.5"
    >
      <Link href={item.href} aria-current={active ? "page" : undefined}>
        <Icon className="max-lg:hidden" />
        {item.label}
      </Link>
    </Button>
  );
}
