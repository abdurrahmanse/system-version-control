"use client";

import { CONCEPT_EDGES, CONCEPT_NODES, CONCEPTS_MAP } from "@/modules/concepts/data/concepts";
import { ConnectionGraph } from "@/shared/components/graph/connection-graph";

export function ConceptGraph() {
  return <ConnectionGraph nodes={CONCEPT_NODES} edges={CONCEPT_EDGES} label={CONCEPTS_MAP.label} showLabels="always" />;
}
