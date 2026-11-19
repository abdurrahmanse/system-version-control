"use client";

import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { importProgress } from "@/modules/progress/api/progress-api";
import { PROGRESS_UI as T } from "@/modules/progress/data/progress";
import { useProgressStore } from "@/modules/progress/store/progress-store";

// Mutation: send a backup to the server for validation, then apply the clean data to the store.
export function useImportProgressMutation() {
  const replace = useProgressStore((s) => s.replace);
  return useMutation({
    mutationFn: importProgress,
    onSuccess: ({ data, summary }) => {
      replace(data);
      toast.success(T.importDone(summary.lessons, summary.steps));
    },
    onError: () => toast.error(T.importFailed),
  });
}
