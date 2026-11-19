"use client";

import { create } from "zustand";

type UiState = { searchOpen: boolean; setSearchOpen: (open: boolean) => void; toggleSearch: () => void };

export const useUiStore = create<UiState>((set) => ({
  searchOpen: false,
  setSearchOpen: (searchOpen) => set({ searchOpen }),
  toggleSearch: () => set((s) => ({ searchOpen: !s.searchOpen })),
}));
