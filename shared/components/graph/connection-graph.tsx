"use client";

import { useMemo, useState } from "react";

import { GraphEdges } from "@/shared/components/graph/graph-edges";
import { GraphNode } from "@/shared/components/graph/graph-node";
import { useGraphLayout } from "@/shared/components/graph/use-graph-layout";
import { cn } from "@/shared/lib/utils";
import type { GraphEdgeData, GraphNodeData } from "@/shared/types/graph";

type Props = {
  nodes: readonly GraphNodeData[];
  edges: readonly GraphEdgeData[];
  /** Accessible name of the whole diagram. */
  label: string;
  /** "always" shows every edge label; "hover" (default) shows them for the hovered card. */
  showLabels?: "always" | "hover";
  className?: string;
};

// Animated connection graph: cards placed on a grid, linked by flowing curves.
// Hover or focus a card to highlight what it connects to. On small screens it becomes a plain list.
export function ConnectionGraph({ nodes, edges, label, showLabels = "hover", className }: Props) {
  const ids = useMemo(() => nodes.map((n) => n.id), [nodes]);
  const { container, rects, size, register } = useGraphLayout(ids);
  const [active, setActive] = useState<string | null>(null);
  const cols = Math.max(...nodes.map((n) => n.col)) + 1;
  const titles = useMemo(() => new Map(nodes.map((n) => [n.id, n.title])), [nodes]);
  const linked = useMemo(() => {
    if (!active) return null;
    const set = new Set([active]);
    for (const e of edges) {
      if (e.from === active) set.add(e.to);
      if (e.to === active) set.add(e.from);
    }
    return set;
  }, [active, edges]);

  return (
    <figure aria-label={label} className={cn("space-y-3", className)}>
      <div
        ref={container}
        style={{ "--cols": cols } as React.CSSProperties}
        className="relative grid grid-cols-1 gap-3 md:[grid-template-columns:repeat(var(--cols),minmax(0,1fr))] md:gap-x-14 md:gap-y-8"
      >
        <GraphEdges edges={edges} rects={rects} size={size} active={active} showLabels={showLabels} />
        {nodes.map((node) => (
          <GraphNode
            key={node.id}
            node={node}
            dimmed={linked !== null && !linked.has(node.id)}
            nodeRef={register(node.id)}
            onActivate={setActive}
          />
        ))}
      </div>
      <ul className="sr-only">
        {edges.map((e) => (
          <li
            key={`${e.from}-${e.to}`}
          >{`${titles.get(e.from)} → ${titles.get(e.to)}${e.label ? `: ${e.label}` : ""}`}</li>
        ))}
      </ul>
    </figure>
  );
}
