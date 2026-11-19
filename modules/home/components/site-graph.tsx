"use client";

import { HOME_MAP } from "@/modules/home/data/home";
import { SITE_GRAPH_EDGES, SITE_GRAPH_NODES } from "@/modules/home/data/site-graph";
import { ConnectionGraph } from "@/shared/components/graph/connection-graph";

// Client wrapper: icons are functions, so the data is imported here instead of passed from a server component.
export function SiteGraph() {
  return <ConnectionGraph nodes={SITE_GRAPH_NODES} edges={SITE_GRAPH_EDGES} label={HOME_MAP.label} />;
}
