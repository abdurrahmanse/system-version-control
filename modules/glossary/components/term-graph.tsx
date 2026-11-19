"use client";

import { BookOpen, Library, Terminal } from "lucide-react";
import { useMemo } from "react";

import { lessonCode, lessonHref, lessonsIntroducing, type Term } from "@/modules/curriculum";
import { GLOSSARY_TERM as T } from "@/modules/glossary/data/glossary";
import { ConnectionGraph } from "@/shared/components/graph/connection-graph";
import type { GraphEdgeData, GraphNodeData } from "@/shared/types/graph";

// A term in the middle, the lessons that teach it on the left, the command that uses it on the right.
export function TermGraph({ term }: { term: Term }) {
  const { nodes, edges } = useMemo(() => {
    const lessons = lessonsIntroducing(term.term);
    const nodes: GraphNodeData[] = [{ id: "term", title: term.term, icon: Library, col: 1, row: 0, tone: "signal" }];
    const edges: GraphEdgeData[] = [];
    lessons.forEach((l, row) => {
      nodes.push({
        id: `l${l.n}`,
        title: l.title,
        badge: lessonCode(l.n),
        href: lessonHref(l.n),
        icon: BookOpen,
        col: 0,
        row,
      });
      edges.push({ from: `l${l.n}`, to: "term", label: T.taughtIn });
    });
    if (term.see) {
      nodes.push({
        id: "cmd",
        title: term.see,
        text: T.commandText,
        href: `/guide?q=${encodeURIComponent(term.see)}`,
        icon: Terminal,
        col: 2,
        row: 0,
      });
      edges.push({ from: "term", to: "cmd", label: T.usedBy });
    }
    return { nodes, edges };
  }, [term]);
  return <ConnectionGraph nodes={nodes} edges={edges} label={T.graphLabel} showLabels="always" />;
}
