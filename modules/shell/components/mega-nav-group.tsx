"use client";

import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

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
        <Button
          variant={active ? "secondary" : "ghost"}
          size="sm"
          className="group gap-1 px-2 text-xs lg:gap-1.5 lg:px-2.5"
        >
          <Icon className="max-lg:hidden" />
          {group.label}
          <ChevronDown className="transition-transform group-aria-expanded:rotate-180" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        sideOffset={10}
        className="max-h-[75vh] w-[min(36rem,calc(100vw-2rem))] overflow-y-auto p-2"
      >
        <div className="grid gap-1 sm:grid-cols-2">
          {group.items.map((item, index) => (
            <Fragment key={item.href}>
              {item.section && item.section !== group.items[index - 1]?.section ? (
                <p className="px-3 pt-2 font-label text-xs tracking-[0.2em] text-signal uppercase sm:col-span-2">
                  {item.section}
                </p>
              ) : null}
              <MegaNavLink item={item} />
            </Fragment>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
