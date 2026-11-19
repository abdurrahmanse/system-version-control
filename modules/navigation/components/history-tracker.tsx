"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { titleFor } from "@/modules/navigation/lib/titles";
import { useHistoryStore } from "@/modules/navigation/store/history-store";

// Records every page you open. Mounted once in the providers; renders nothing.
export function HistoryTracker() {
  const pathname = usePathname();
  const visit = useHistoryStore((s) => s.visit);
  const hydrated = useHistoryStore((s) => s.hydrated);

  useEffect(() => {
    void useHistoryStore.persist.rehydrate();
  }, []);

  useEffect(() => {
    if (hydrated) visit({ href: pathname, title: titleFor(pathname) });
  }, [hydrated, pathname, visit]);

  return null;
}
