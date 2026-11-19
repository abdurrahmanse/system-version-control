import Link from "next/link";

import { CommandLine } from "@/shared/components/common/command-line";
import { cn } from "@/shared/lib/utils";
import type { FlowNodeData } from "@/shared/types/content";

// One box in a flowchart. The whole box is a link when `href` is set.
export function FlowNode({ node }: { node: FlowNodeData }) {
  const Icon = node.icon;
  const body = (
    <>
      <span className="flex items-center gap-2">
        {Icon ? (
          <span className="flex size-8 shrink-0 items-center justify-center border-2 border-edge bg-secondary">
            <Icon className="size-4" />
          </span>
        ) : null}
        <span className="font-heading text-lg leading-tight font-bold">{node.title}</span>
      </span>
      {node.text ? <span className="block text-sm text-muted-foreground">{node.text}</span> : null}
      {node.command ? <CommandLine command={node.command} /> : null}
    </>
  );
  const classes = cn(
    "flex h-full flex-col gap-2 border-2 bg-card p-3 shadow-[3px_3px_0_0_var(--shadow-hard)]",
    node.tone === "signal" ? "border-signal" : "border-edge",
  );
  return node.href ? (
    <Link href={node.href} className={cn(classes, "transition-transform hover:-translate-x-px hover:-translate-y-px")}>
      {body}
    </Link>
  ) : (
    <div className={classes}>{body}</div>
  );
}
