"use client";

import { Check, Circle } from "lucide-react";

import { useProgressStore } from "@/modules/progress/store/progress-store";
import { UI } from "@/shared/data/ui";
import { Button } from "@/shared/ui/button";

export function StepDoneToggle({ id }: { id: number }) {
  const done = useProgressStore((s) => Boolean(s.steps[String(id)]));
  const toggle = useProgressStore((s) => s.toggleStep);
  return (
    <Button variant={done ? "default" : "ghost"} size="sm" aria-pressed={done} onClick={() => toggle(id)}>
      {done ? <Check data-icon="inline-start" /> : <Circle data-icon="inline-start" />}
      {done ? UI.done : UI.markDone}
    </Button>
  );
}
