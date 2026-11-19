"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";

import { fetchSearch } from "@/modules/search/api/search-api";
import { searchKeys } from "@/modules/search/api/search-keys";

// react-query: server-side search, cached per term, keeps the previous results while typing.
export function useSearchQuery(term: string) {
  const q = term.trim();
  return useQuery({
    queryKey: searchKeys.list({ q }),
    queryFn: ({ signal }) => fetchSearch(q, signal),
    enabled: q.length > 0,
    placeholderData: keepPreviousData,
    staleTime: 5 * 60_000,
  });
}
