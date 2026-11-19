"use client";

import { Check, Circle } from "lucide-react";
import { toast } from "sonner";

import { useProgressStore } from "@/modules/progress/store/progress-store";
import { UI } from "@/shared/data/ui";
import { Button } from "@/shared/ui/button";

export function LessonDoneButton({ n }: { n: number }) {
  const done = useProgressStore((s) => Boolean(s.lessons[String(n)]));
  const toggle = useProgressStore((s) => s.toggleLesson);
  return (
    <Button
      variant={done ? "default" : "outline"}
      size="sm"
      aria-pressed={done}
      onClick={() => {
        toggle(n);
        toast(done ? UI.markUndone : UI.done);
      }}
    >
      {done ? <Check data-icon="inline-start" /> : <Circle data-icon="inline-start" />}
      {done ? UI.done : UI.markDone}
    </Button>
  );
}
