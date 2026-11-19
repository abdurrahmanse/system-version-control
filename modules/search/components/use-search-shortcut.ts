"use client";

import { useEffect } from "react";

import { useUiStore } from "@/modules/search/store/ui-store";

// Cmd/Ctrl + K toggles the search palette from anywhere.
export function useSearchShortcut() {
  const toggle = useUiStore((s) => s.toggleSearch);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        toggle();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [toggle]);
}
