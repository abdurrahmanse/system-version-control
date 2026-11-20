"use client";

import { MegaNavGroup } from "@/modules/shell/components/mega-nav-group";
import { MegaNavPrimaryLink } from "@/modules/shell/components/mega-nav-primary-link";
import { HEADER, NAV_GROUPS, PRIMARY_LINKS } from "@/shared/config/site";

// Desktop navigation: three labelled groups, each a click-to-open mega panel with icons.
export function MegaNav() {
  return (
    <nav aria-label={HEADER.menuAria} className="hidden items-center justify-center gap-1 justify-self-center md:flex">
      {NAV_GROUPS.map((group) => (
        <MegaNavGroup key={group.label} group={group} />
      ))}
      {PRIMARY_LINKS.map((item) => (
        <MegaNavPrimaryLink key={item.href} item={item} />
      ))}
    </nav>
  );
}
