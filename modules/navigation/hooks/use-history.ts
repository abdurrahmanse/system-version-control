"use client";

import { usePathname } from "next/navigation";

import { useHistoryStore } from "@/modules/navigation/store/history-store";

// History for the current page: the trail, plus the page you came from (if different).
export function useHistory() {
  const pathname = usePathname();
  const entries = useHistoryStore((s) => s.entries);
  const hydrated = useHistoryStore((s) => s.hydrated);
  const previous = entries.find((e) => e.href !== pathname);
  return { pathname, entries, hydrated, previous };
}
