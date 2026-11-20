"use client";

import { ARCH_EDGES, ARCH_LABEL, ARCH_NODES } from "@/modules/example/data/diagrams";
import { ConnectionGraph } from "@/shared/components/graph/connection-graph";

// The AgroFarm parts as an animated connection graph.
export function ExampleArchitectureGraph() {
  return <ConnectionGraph nodes={ARCH_NODES} edges={ARCH_EDGES} label={ARCH_LABEL} showLabels="always" />;
}
