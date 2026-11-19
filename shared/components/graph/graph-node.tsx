import { Check } from "lucide-react";
import Link from "next/link";
import type { CSSProperties, Ref } from "react";

import { cn } from "@/shared/lib/utils";
import type { GraphNodeData, GraphTone } from "@/shared/types/graph";

const TONE: Record<GraphTone, string> = {
  default: "border-edge bg-card",
  signal: "border-signal bg-signal/10",
  done: "border-signal bg-secondary",
  muted: "border-edge/50 bg-card/60",
};

type Props = {
  node: GraphNodeData;
  dimmed: boolean;
  nodeRef: Ref<HTMLElement>;
  onActivate: (id: string | null) => void;
};

// One card in the connection graph. A link when it has an href. Hover or focus highlights its connections.
export function GraphNode({ node, dimmed, nodeRef, onActivate }: Props) {
  const Icon = node.icon;
  const style = { "--c": node.col + 1, "--r": node.row + 1 } as CSSProperties;
  const classes = cn(
    "relative flex flex-col gap-1.5 border-2 p-3 shadow-[3px_3px_0_0_var(--shadow-hard)] transition-opacity md:[grid-column:var(--c)] md:[grid-row:var(--r)]",
    TONE[node.tone ?? "default"],
    dimmed && "opacity-40",
  );
  const body = (
    <>
      <span className="flex items-center gap-2">
        {Icon ? (
          <span className="flex size-8 shrink-0 items-center justify-center border-2 border-edge bg-secondary">
            <Icon className="size-4" />
          </span>
        ) : null}
        <span className="font-heading text-base leading-tight font-bold">{node.title}</span>
        {node.tone === "done" ? <Check aria-hidden className="ml-auto size-4 text-signal" /> : null}
        {node.badge ? (
          <span className="ml-auto border border-edge px-1.5 font-label text-[0.65rem] tracking-wider uppercase">
            {node.badge}
          </span>
        ) : null}
      </span>
      {node.text ? <span className="text-sm text-muted-foreground">{node.text}</span> : null}
    </>
  );
  const handlers = {
    onMouseEnter: () => onActivate(node.id),
    onMouseLeave: () => onActivate(null),
    onFocus: () => onActivate(node.id),
    onBlur: () => onActivate(null),
  };
  return node.href ? (
    <Link
      href={node.href}
      ref={nodeRef as Ref<HTMLAnchorElement>}
      style={style}
      className={cn(classes, "hover:-translate-y-px")}
      {...handlers}
    >
      {body}
    </Link>
  ) : (
    <div ref={nodeRef as Ref<HTMLDivElement>} style={style} className={classes} {...handlers}>
      {body}
    </div>
  );
}
