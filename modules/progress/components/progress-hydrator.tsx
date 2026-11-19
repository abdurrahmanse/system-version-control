"use client";

import { useEffect } from "react";

import { useProgressStore } from "@/modules/progress/store/progress-store";

// The store skips automatic hydration so server and client first renders match.
// This restores saved progress from localStorage right after mount.
export function ProgressHydrator() {
  useEffect(() => {
    void useProgressStore.persist.rehydrate();
  }, []);
  return null;
}
