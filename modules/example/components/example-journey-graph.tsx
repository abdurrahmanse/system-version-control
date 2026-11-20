"use client";

import { EXAMPLE_COPY, EXAMPLE_PAGES } from "@/modules/example/data/example";
import { ConnectionGraph } from "@/shared/components/graph/connection-graph";
import type { GraphEdgeData, GraphNodeData } from "@/shared/types/graph";

const COLUMNS = 4;
const nodes: GraphNodeData[] = EXAMPLE_PAGES.map((page, index) => ({
  id: page.slug,
  title: `${index + 1}. ${page.title}`,
  text: page.text,
  icon: page.icon,
  href: `/example/${page.slug}`,
  col: index % COLUMNS,
  row: Math.floor(index / COLUMNS),
}));
const edges: GraphEdgeData[] = EXAMPLE_PAGES.slice(1).map((page, index) => ({
  from: EXAMPLE_PAGES[index]!.slug,
  to: page.slug,
}));

// The ten example pages as one clickable path.
export function ExampleJourneyGraph() {
  return <ConnectionGraph nodes={nodes} edges={edges} label={EXAMPLE_COPY.journeyLabel} />;
}
