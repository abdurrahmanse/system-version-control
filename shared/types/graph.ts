import type { LucideIcon } from "lucide-react";

export type GraphTone = "default" | "signal" | "done" | "muted";

// A card in the graph. `col` and `row` are grid positions (0-based) on wide screens.
export type GraphNodeData = {
  id: string;
  title: string;
  text?: string;
  href?: string;
  icon?: LucideIcon;
  col: number;
  row: number;
  tone?: GraphTone;
  badge?: string;
};

// A connection between two cards. The label says why they are connected.
export type GraphEdgeData = { from: string; to: string; label?: string };
