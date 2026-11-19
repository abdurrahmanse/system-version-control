"use client";

import { useShallow } from "zustand/react/shallow";

import { levelProgress, overall } from "@/modules/progress/lib/progress";
import { useProgressStore } from "@/modules/progress/store/progress-store";

// Derived, memo-friendly view of the persisted progress. `hydrated` is false until localStorage was read.
export function useProgress() {
  const persisted = useProgressStore(
    useShallow((s) => ({
      lessons: s.lessons,
      steps: s.steps,
      challenges: s.challenges,
      goalDate: s.goalDate,
      lastActivity: s.lastActivity,
    })),
  );
  const hydrated = useProgressStore((s) => s.hydrated);
  return { hydrated, persisted, summary: overall(persisted), levels: levelProgress(persisted) };
}
