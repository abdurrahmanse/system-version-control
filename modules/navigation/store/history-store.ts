"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { NAVIGATION } from "@/modules/navigation/data/navigation";

export type HistoryEntry = { href: string; title: string; at: number };

type State = {
  entries: HistoryEntry[]; // newest first
  hydrated: boolean;
  visit: (entry: Omit<HistoryEntry, "at">) => void;
  clear: () => void;
};

// Browsing trail for this tab. Stored in sessionStorage, so it ends when the tab closes.
export const useHistoryStore = create<State>()(
  persist(
    (set) => ({
      entries: [],
      hydrated: false,
      visit: ({ href, title }) =>
        set((s) => {
          if (s.entries[0]?.href === href) return s; // reloading the same page is not a new visit
          return { entries: [{ href, title, at: Date.now() }, ...s.entries].slice(0, NAVIGATION.maxEntries) };
        }),
      clear: () => set({ entries: [] }),
    }),
    {
      name: NAVIGATION.storageKey,
      storage: createJSONStorage(() => sessionStorage),
      skipHydration: true,
      partialize: (s) => ({ entries: s.entries }),
      onRehydrateStorage: () => () => useHistoryStore.setState({ hydrated: true }),
    },
  ),
);
