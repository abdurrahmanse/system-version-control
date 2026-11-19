"use client";

import { useMemo } from "react";

import {
  LESSON_PREREQUISITES,
  lessonCode,
  lessonEdges,
  lessonHref,
  LESSONS,
  LEVELS,
  nextLesson,
} from "@/modules/curriculum";
import { PROGRESS_UI as T } from "@/modules/progress/data/progress";
import { useProgress } from "@/modules/progress/hooks/use-progress";
import { ConnectionGraph } from "@/shared/components/graph/connection-graph";
import type { GraphEdgeData, GraphNodeData } from "@/shared/types/graph";

// The whole curriculum as one animated graph: a column per level, a link from each prerequisite to the lesson that needs it.
// Completed lessons are ticked and the recommended next lesson is highlighted.
export function LessonGraph() {
  const { hydrated, persisted } = useProgress();

  const { nodes, edges } = useMemo(() => {
    const done = new Set(hydrated ? LESSONS.filter((l) => persisted.lessons[String(l.n)]).map((l) => l.n) : []);
    const next = nextLesson(done)?.n;
    const rowOf = new Map<string, number>();
    const nodes: GraphNodeData[] = LESSONS.map((l) => {
      const col = LEVELS.findIndex((lv) => lv.name === l.level);
      const row = rowOf.get(l.level) ?? 0;
      rowOf.set(l.level, row + 1);
      const ready = (LESSON_PREREQUISITES[l.n] ?? []).every((p) => done.has(p));
      return {
        id: String(l.n),
        title: l.title,
        badge: lessonCode(l.n),
        href: lessonHref(l.n),
        col,
        row,
        tone: done.has(l.n) ? "done" : l.n === next ? "signal" : ready ? "default" : "muted",
      };
    });
    const edges: GraphEdgeData[] = lessonEdges().map((e) => ({ from: String(e.from), to: String(e.to) }));
    return { nodes, edges };
  }, [hydrated, persisted.lessons]);

  return <ConnectionGraph nodes={nodes} edges={edges} label={T.graphLabel} />;
}
