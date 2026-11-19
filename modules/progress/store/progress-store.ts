"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { type PersistedProgress, persistedProgressSchema } from "@/modules/progress/schemas/progress";

type Actions = {
  hydrated: boolean;
  toggleLesson: (n: number) => void;
  toggleStep: (n: number) => void;
  markChallenge: (id: string) => void;
  setGoal: (iso: string) => void;
  clearGoal: () => void;
  replace: (data: PersistedProgress) => void;
  reset: () => void;
};

export type ProgressState = PersistedProgress & Actions;

const empty: PersistedProgress = { lessons: {}, steps: {}, challenges: {}, goalDate: null, lastActivity: null };

const toggle = (map: Record<string, number>, key: string) => {
  const next = { ...map };
  if (next[key]) delete next[key];
  else next[key] = Date.now();
  return next;
};

export const useProgressStore = create<ProgressState>()(
  persist(
    (set) => ({
      ...empty,
      hydrated: false,
      toggleLesson: (n) => set((s) => ({ lessons: toggle(s.lessons, String(n)), lastActivity: Date.now() })),
      toggleStep: (n) => set((s) => ({ steps: toggle(s.steps, String(n)), lastActivity: Date.now() })),
      markChallenge: (id) =>
        set((s) => ({ challenges: { ...s.challenges, [id]: Date.now() }, lastActivity: Date.now() })),
      setGoal: (iso) => set({ goalDate: iso }),
      clearGoal: () => set({ goalDate: null }),
      replace: (data) => set({ ...data, lastActivity: Date.now() }),
      reset: () => set({ ...empty }),
    }),
    {
      name: "git-field-guide:progress",
      version: 1,
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
      partialize: (s) => ({
        lessons: s.lessons,
        steps: s.steps,
        challenges: s.challenges,
        goalDate: s.goalDate,
        lastActivity: s.lastActivity,
      }),
      merge: (persisted, current) => {
        const parsed = persistedProgressSchema.safeParse(persisted);
        return parsed.success ? { ...current, ...parsed.data } : current;
      },
      onRehydrateStorage: () => () => useProgressStore.setState({ hydrated: true }),
    },
  ),
);
