"use client";

import { useReducedMotion } from "motion/react";
import { useId } from "react";

import { edgeGeometry, type Rect } from "@/shared/components/graph/edge-path";
import { cn } from "@/shared/lib/utils";
import type { GraphEdgeData } from "@/shared/types/graph";

type Props = {
  edges: readonly GraphEdgeData[];
  rects: Record<string, Rect>;
  size: { w: number; h: number };
  active: string | null;
  showLabels: "always" | "hover";
};

// SVG layer drawn behind the cards: curved, animated links with arrowheads and a travelling dot.
export function GraphEdges({ edges, rects, size, active, showLabels }: Props) {
  const marker = useId();
  const reduce = useReducedMotion();
  const drawn = edges.flatMap((e) => {
    const a = rects[e.from];
    const b = rects[e.to];
    return a && b ? [{ edge: e, geo: edgeGeometry(a, b) }] : [];
  });

  return (
    <>
      <svg
        aria-hidden
        width={size.w}
        height={size.h}
        className="pointer-events-none absolute inset-0 hidden text-signal md:block"
      >
        <defs>
          <marker id={marker} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="context-stroke" />
          </marker>
        </defs>
        {drawn.map(({ edge, geo }) => {
          const connected = active === edge.from || active === edge.to;
          const dim = active !== null && !connected;
          return (
            <g key={`${edge.from}-${edge.to}`} opacity={dim ? 0.15 : 1}>
              <path d={geo.d} fill="none" stroke="var(--edge)" strokeOpacity={0.35} strokeWidth={connected ? 3 : 2} />
              <path
                d={geo.d}
                fill="none"
                stroke="currentColor"
                strokeWidth={connected ? 3 : 2}
                markerEnd={`url(#${marker})`}
                className={cn(!reduce && "edge-flow")}
              />
              {!reduce ? (
                <circle r={connected ? 5 : 3.5} fill="currentColor">
                  <animateMotion dur={connected ? "1.6s" : "3.2s"} repeatCount="indefinite" path={geo.d} />
                </circle>
              ) : null}
            </g>
          );
        })}
      </svg>
      {drawn.map(({ edge, geo }) => {
        const connected = active === edge.from || active === edge.to;
        if (!edge.label || (showLabels === "hover" && !connected)) return null;
        return (
          <span
            key={`label-${edge.from}-${edge.to}`}
            aria-hidden
            style={{ left: geo.mid.x, top: geo.mid.y }}
            className="pointer-events-none absolute hidden -translate-x-1/2 -translate-y-1/2 border border-edge bg-background px-1.5 py-0.5 font-label text-[0.65rem] tracking-wider whitespace-nowrap uppercase md:block"
          >
            {edge.label}
          </span>
        );
      })}
    </>
  );
}
