"use client";

import {
  closestCenter,
  DndContext,
  type DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CheckCheck, Lightbulb, RotateCcw } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import type { Challenge } from "@/modules/curriculum";
import { SortableCommand } from "@/modules/practice/components/sortable-command";
import { PRACTICE_UI as T } from "@/modules/practice/data/practice";
import { useProgressStore } from "@/modules/progress";
import { Callout } from "@/shared/components/common/callout";
import { Button } from "@/shared/ui/button";

type Result = "idle" | "correct" | "wrong";

export function ChallengeBoard({ challenge }: { challenge: Challenge }) {
  const [order, setOrder] = useState<number[]>(challenge.initial);
  const [result, setResult] = useState<Result>("idle");
  const [hint, setHint] = useState(false);
  const markChallenge = useProgressStore((s) => s.markChallenge);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 4 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (!over || active.id === over.id) return;
    setOrder((current) => arrayMove(current, current.indexOf(Number(active.id)), current.indexOf(Number(over.id))));
    setResult("idle");
  };

  const check = () => {
    const ok = order.every((value, index) => value === index);
    setResult(ok ? "correct" : "wrong");
    if (ok) {
      markChallenge(challenge.id);
      toast.success(T.correct);
    } else {
      toast.error(T.incorrect);
    }
  };

  const reset = () => {
    setOrder(challenge.initial);
    setResult("idle");
  };

  return (
    <div className="space-y-4">
      <DndContext id={challenge.id} sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
        <SortableContext items={order.map(String)} strategy={verticalListSortingStrategy}>
          <ol aria-label={T.listLabel} className="space-y-2">
            {order.map((value, index) => (
              <SortableCommand
                key={value}
                id={String(value)}
                label={challenge.correct[value] ?? ""}
                position={index + 1}
                dragLabel={T.dragLabel}
              />
            ))}
          </ol>
        </SortableContext>
      </DndContext>

      <div className="flex flex-wrap gap-3">
        <Button onClick={check}>
          <CheckCheck data-icon="inline-start" />
          {T.check}
        </Button>
        <Button variant="outline" onClick={reset}>
          <RotateCcw data-icon="inline-start" />
          {T.reset}
        </Button>
        <Button variant="ghost" onClick={() => setHint((h) => !h)}>
          <Lightbulb data-icon="inline-start" />
          {hint ? T.hideHint : T.showHint}
        </Button>
      </div>

      {hint ? <Callout variant="tip">{challenge.hint}</Callout> : null}
      {result === "correct" ? (
        <Callout variant="tip">
          <strong>{T.why}:</strong> {challenge.explanation}
        </Callout>
      ) : null}
      {result === "wrong" ? <Callout variant="danger">{T.incorrect}</Callout> : null}
    </div>
  );
}
