"use client";

import { MENTOR_FLOW } from "@/modules/mentor/data/mentor";
import { ConnectionGraph } from "@/shared/components/graph/connection-graph";
import type { GraphEdgeData, GraphNodeData } from "@/shared/types/graph";

const nodes: GraphNodeData[] = MENTOR_FLOW.nodes.map((n, col) => ({
  id: `n${col}`,
  title: n.title,
  text: n.text,
  icon: n.icon,
  href: "href" in n ? n.href : undefined,
  tone: "tone" in n ? n.tone : undefined,
  col,
  row: 0,
}));
const edges: GraphEdgeData[] = MENTOR_FLOW.edges.map((label, i) => ({ from: `n${i}`, to: `n${i + 1}`, label }));

// The mentor's answering process as an animated left-to-right graph.
export function MentorGraph() {
  return <ConnectionGraph nodes={nodes} edges={edges} label={MENTOR_FLOW.label} showLabels="always" />;
}
