"use client";

import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

import { MegaNavLink } from "@/modules/shell/components/mega-nav-link";
import type { NavGroup } from "@/shared/config/site";
import { Button } from "@/shared/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/shared/ui/dropdown-menu";

// Opens only on click (Radix DropdownMenu), never on hover.
export function MegaNavGroup({ group }: { group: NavGroup }) {
  const pathname = usePathname();
  const active = group.items.some((i) => pathname.startsWith(i.href));
  const Icon = group.icon;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={active ? "secondary" : "ghost"} size="sm" className="group gap-1.5 text-xs">
          <Icon />
          {group.label}
          <ChevronDown className="transition-transform group-aria-expanded:rotate-180" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" sideOffset={10} className="w-[min(36rem,calc(100vw-2rem))] p-2">
        <div className="grid gap-1 sm:grid-cols-2">
          {group.items.map((item) => (
            <MegaNavLink key={item.href} item={item} />
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
