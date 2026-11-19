"use client";

import type { SearchResult } from "@/modules/search/schemas/search";
import { CommandGroup, CommandItem } from "@/shared/ui/command";

type Props = { heading: string; items: readonly SearchResult[]; onSelect: (item: SearchResult) => void };

export function SearchGroup({ heading, items, onSelect }: Props) {
  if (items.length === 0) return null;
  return (
    <CommandGroup heading={heading}>
      {items.map((item) => (
        <CommandItem key={item.id} value={item.id} onSelect={() => onSelect(item)}>
          <span className="flex min-w-0 flex-col">
            <span className="truncate">{item.title}</span>
            {item.subtitle ? (
              <span className="truncate font-code text-xs text-muted-foreground">{item.subtitle}</span>
            ) : null}
          </span>
        </CommandItem>
      ))}
    </CommandGroup>
  );
}
