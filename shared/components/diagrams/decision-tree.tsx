import { CircleHelp } from "lucide-react";
import Link from "next/link";

import { CommandLine } from "@/shared/components/common/command-line";
import { cn } from "@/shared/lib/utils";
import type { Decision, DecisionAnswer, DecisionBranch } from "@/shared/types/content";

type Labels = { yes: string; no: string };

const isDecision = (b: DecisionBranch): b is Decision => "question" in b;

function Answer({ node }: { node: DecisionAnswer }) {
  const inner = (
    <>
      <p className="font-heading text-lg font-bold">{node.answer}</p>
      {node.text ? <p className="text-sm text-muted-foreground">{node.text}</p> : null}
      {node.command ? <CommandLine command={node.command} /> : null}
    </>
  );
  const cls = cn(
    "block space-y-2 border-2 bg-card p-3 shadow-[3px_3px_0_0_var(--shadow-hard)]",
    node.danger ? "border-signal bg-signal/10" : "border-edge",
  );
  return node.href ? (
    <Link href={node.href} className={cn(cls, "hover:-translate-y-px")}>
      {inner}
    </Link>
  ) : (
    <div className={cls}>{inner}</div>
  );
}

function Branch({ label, branch, labels }: { label: string; branch: DecisionBranch; labels: Labels }) {
  return (
    <div className="space-y-2">
      <span className="inline-block border-2 border-edge bg-secondary px-2 py-0.5 font-label text-xs tracking-wider uppercase">
        {label}
      </span>
      <Node node={branch} labels={labels} />
    </div>
  );
}

function Node({ node, labels }: { node: DecisionBranch; labels: Labels }) {
  if (!isDecision(node)) return <Answer node={node} />;
  return (
    <div className="space-y-3">
      <div className="flex items-start gap-2 border-2 border-edge bg-secondary p-3">
        <CircleHelp className="mt-0.5 size-5 shrink-0 text-signal" />
        <p className="font-heading text-lg leading-tight font-bold">{node.question}</p>
      </div>
      <div className="grid gap-4 border-l-2 border-edge pl-4 md:grid-cols-2">
        <Branch label={labels.yes} branch={node.yes} labels={labels} />
        <Branch label={labels.no} branch={node.no} labels={labels} />
      </div>
    </div>
  );
}

// Question boxes with Yes/No branches ending in an answer. Answers can link to a lesson.
export function DecisionTree({ tree, labels, label }: { tree: Decision; labels: Labels; label: string }) {
  return (
    <div role="group" aria-label={label}>
      <Node node={tree} labels={labels} />
    </div>
  );
}
