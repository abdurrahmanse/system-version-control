"use client";

import { useMemo } from "react";

import { CHAPTERS, stepsByChapter } from "@/modules/curriculum";
import { GUIDE_PATH as T } from "@/modules/guide/data/guide";
import { useProgress } from "@/modules/progress";
import { ConnectionGraph } from "@/shared/components/graph/connection-graph";
import type { GraphEdgeData, GraphNodeData } from "@/shared/types/graph";

const PER_ROW = 5;

// The ten chapters as a snaking route: left to right on the first row, right to left on the second.
// A chapter is ticked when every one of its steps is done.
export function ChapterGraph() {
  const { hydrated, persisted } = useProgress();

  const { nodes, edges } = useMemo(() => {
    const nodes: GraphNodeData[] = CHAPTERS.map((c, i) => {
      const steps = stepsByChapter(c.slug);
      const finished = hydrated && steps.every((s) => persisted.steps[String(s.id)]);
      const row = Math.floor(i / PER_ROW);
      const pos = i % PER_ROW;
      return {
        id: c.slug,
        title: c.title,
        badge: String(c.n),
        text: T.stepsLabel(steps.length),
        href: `/guide/${c.slug}`,
        col: row % 2 === 0 ? pos : PER_ROW - 1 - pos,
        row,
        tone: finished ? "done" : "default",
      };
    });
    const edges: GraphEdgeData[] = CHAPTERS.slice(1).map((c, i) => ({ from: CHAPTERS[i]!.slug, to: c.slug }));
    return { nodes, edges };
  }, [hydrated, persisted.steps]);

  return <ConnectionGraph nodes={nodes} edges={edges} label={T.label} />;
}
