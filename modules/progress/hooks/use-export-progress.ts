"use client";

import { toast } from "sonner";

import { PROGRESS_UI as T } from "@/modules/progress/data/progress";
import { buildExport, exportFileName } from "@/modules/progress/lib/progress-export";
import { useProgressStore } from "@/modules/progress/store/progress-store";

// Downloads the current progress as a JSON backup file.
export function useExportProgress() {
  return () => {
    const { lessons, steps, challenges, goalDate, lastActivity } = useProgressStore.getState();
    const now = new Date();
    const blob = new Blob(
      [JSON.stringify(buildExport({ lessons, steps, challenges, goalDate, lastActivity }, now), null, 2)],
      { type: "application/json" },
    );
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = exportFileName(now);
    link.click();
    URL.revokeObjectURL(url);
    toast(T.exportDone);
  };
}
