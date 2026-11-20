"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { NavItem } from "@/shared/config/site";
import { cn } from "@/shared/lib/utils";
import { DropdownMenuItem } from "@/shared/ui/dropdown-menu";

// One tile in a mega panel: icon, title, one-line description.
export function MegaNavLink({ item }: { item: NavItem }) {
  const pathname = usePathname();
  const active = item.exact ? pathname === item.href : pathname.startsWith(item.href);
  const Icon = item.icon;
  return (
    <DropdownMenuItem asChild className="items-start gap-3 p-3 focus:bg-secondary">
      <Link
        href={item.href}
        aria-current={active ? "page" : undefined}
        className={cn("border-2 border-transparent hover:border-edge", active && "border-edge bg-secondary")}
      >
        <span className="flex size-9 shrink-0 items-center justify-center border-2 border-edge bg-secondary text-foreground">
          <Icon className="size-4" />
        </span>
        <span className="min-w-0">
          <span className="block font-heading text-base leading-tight font-bold">{item.label}</span>
          <span className="block text-sm font-normal text-muted-foreground">{item.description}</span>
        </span>
      </Link>
    </DropdownMenuItem>
  );
}
