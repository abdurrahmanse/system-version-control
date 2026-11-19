"use client";

import { Search } from "lucide-react";

import { useUiStore } from "@/modules/search/store/ui-store";
import { Kbd } from "@/shared/components/common/kbd";
import { HEADER } from "@/shared/config/site";
import { Button } from "@/shared/ui/button";

export function SearchTrigger() {
  const setOpen = useUiStore((s) => s.setSearchOpen);
  return (
    <Button variant="outline" size="sm" onClick={() => setOpen(true)} aria-label={HEADER.searchLabel}>
      <Search />
      <span className="hidden xl:inline">{HEADER.searchLabel}</span>
      <span className="hidden gap-0.5 xl:flex">
        <Kbd>⌘</Kbd>
        <Kbd>{HEADER.searchShortcut}</Kbd>
      </span>
    </Button>
  );
}
