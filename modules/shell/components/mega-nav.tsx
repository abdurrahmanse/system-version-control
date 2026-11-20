"use client";

import { MegaNavGroup } from "@/modules/shell/components/mega-nav-group";
import { HEADER, NAV_GROUPS } from "@/shared/config/site";

// Desktop navigation: three labelled groups, each a click-to-open mega panel with icons.
export function MegaNav() {
  return (
    <nav aria-label={HEADER.menuAria} className="hidden items-center justify-center gap-1 justify-self-center md:flex">
      {NAV_GROUPS.map((group) => (
        <MegaNavGroup key={group.label} group={group} />
      ))}
    </nav>
  );
}
