"use client";

import { PACKAGE_GROUPS } from "@/modules/toolbox/data/packages";
import { PACKAGES_GRAPH } from "@/modules/toolbox/data/toolbox";
import { packageGraph } from "@/modules/toolbox/lib/package-graph";
import { ConnectionGraph } from "@/shared/components/graph/connection-graph";

const { nodes, edges } = packageGraph(PACKAGE_GROUPS);

// Package categories (left) linked to the parts of the project that use them (right).
export function PackageGraph() {
  return <ConnectionGraph nodes={nodes} edges={edges} label={PACKAGES_GRAPH.label} />;
}
