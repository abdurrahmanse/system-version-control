"use client";

import { Download, Upload } from "lucide-react";
import { useRef } from "react";
import { toast } from "sonner";

import { PROGRESS_UI as T } from "@/modules/progress/data/progress";
import { useExportProgress } from "@/modules/progress/hooks/use-export-progress";
import { useImportProgressMutation } from "@/modules/progress/hooks/use-import-progress-mutation";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";

// Back up progress to a file and restore it. The restore goes through the validating API.
export function ProgressTransfer() {
  const exportProgress = useExportProgress();
  const importMutation = useImportProgressMutation();
  const input = useRef<HTMLInputElement>(null);

  const onFile = async (file: File | undefined) => {
    if (!file) return;
    try {
      importMutation.mutate(JSON.parse(await file.text()));
    } catch {
      toast.error(T.importFailed);
    }
    if (input.current) input.current.value = "";
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading text-xl">{T.transferTitle}</CardTitle>
        <CardDescription>{T.transferDescription}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-3">
        <Button variant="outline" onClick={exportProgress}>
          <Download data-icon="inline-start" />
          {T.exportLabel}
        </Button>
        <Button variant="outline" disabled={importMutation.isPending} onClick={() => input.current?.click()}>
          <Upload data-icon="inline-start" />
          {importMutation.isPending ? T.importing : T.importLabel}
        </Button>
        <input
          ref={input}
          type="file"
          accept="application/json"
          className="sr-only"
          aria-label={T.importLabel}
          onChange={(e) => void onFile(e.target.files?.[0])}
        />
      </CardContent>
    </Card>
  );
}
