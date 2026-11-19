"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

import { SearchGroup } from "@/modules/search/components/search-group";
import { useSearchShortcut } from "@/modules/search/components/use-search-shortcut";
import { useDebouncedValue } from "@/modules/search/hooks/use-debounced-value";
import { useSearchQuery } from "@/modules/search/hooks/use-search-query";
import { SEARCH_GROUPS, type SearchResult } from "@/modules/search/schemas/search";
import { useUiStore } from "@/modules/search/store/ui-store";
import { UI } from "@/shared/data/ui";
import { Command, CommandDialog, CommandEmpty, CommandInput, CommandList } from "@/shared/ui/command";

// Command palette. With an empty box it suggests pages; typing searches the whole site on the server.
export function SearchPalette({ suggestions }: { suggestions: SearchResult[] }) {
  const router = useRouter();
  const open = useUiStore((s) => s.searchOpen);
  const setOpen = useUiStore((s) => s.setSearchOpen);
  useSearchShortcut();

  const [term, setTerm] = useState("");
  const debounced = useDebouncedValue(term);
  const { data, isFetching, isError } = useSearchQuery(debounced);

  const searching = debounced.trim().length > 0;
  const results = useMemo(() => (searching ? (data?.results ?? []) : suggestions), [searching, data, suggestions]);
  const grouped = useMemo(
    () => SEARCH_GROUPS.map((g) => ({ key: g, items: results.filter((r) => r.group === g) })),
    [results],
  );

  const go = (item: SearchResult) => {
    setOpen(false);
    setTerm("");
    router.push(item.href);
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen} title={UI.searchPlaceholder} description={UI.searchPlaceholder}>
      <Command shouldFilter={false}>
        <CommandInput value={term} onValueChange={setTerm} placeholder={UI.searchPlaceholder} />
        <CommandList>
          {isFetching ? (
            <p role="status" className="px-3 py-2 text-sm text-muted-foreground">
              {UI.searching}
            </p>
          ) : null}
          {isError ? (
            <p role="alert" className="px-3 py-2 text-sm text-destructive">
              {UI.searchError}
            </p>
          ) : null}
          {searching && !isFetching && results.length === 0 ? <CommandEmpty>{UI.searchEmpty}</CommandEmpty> : null}
          {grouped.map((g) => (
            <SearchGroup key={g.key} heading={UI.searchGroups[g.key]} items={g.items} onSelect={go} />
          ))}
        </CommandList>
      </Command>
    </CommandDialog>
  );
}
