"use client";

import { RotateCcw } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { PROGRESS_UI as T } from "@/modules/progress/data/progress";
import { useProgressStore } from "@/modules/progress/store/progress-store";
import { UI } from "@/shared/data/ui";
import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";

// Destructive action behind a confirmation dialog.
export function ProgressReset() {
  const reset = useProgressStore((s) => s.reset);
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="destructive">
          <RotateCcw data-icon="inline-start" />
          {T.reset}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{T.reset}</DialogTitle>
          <DialogDescription>{T.resetConfirm}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            {UI.cancel}
          </Button>
          <Button
            variant="destructive"
            onClick={() => {
              reset();
              setOpen(false);
              toast(T.resetDone);
            }}
          >
            {T.reset}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
