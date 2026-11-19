"use client";

import { BookOpen, Library, Swords, Terminal } from "lucide-react";
import { useMemo } from "react";

import { type Lesson, lessonCode, lessonHref, lessonNeighbourhood } from "@/modules/curriculum";
import { useProgress } from "@/modules/progress";
import { LESSON_CONNECTIONS as T } from "@/modules/roadmap/data/roadmap";
import { ConnectionGraph } from "@/shared/components/graph/connection-graph";
import type { GraphEdgeData, GraphNodeData } from "@/shared/types/graph";

// The lesson at the centre, what it builds on (left), what it unlocks (right) and where to practise it (below).
export function LessonConnections({ lesson }: { lesson: Lesson }) {
  const { hydrated, persisted } = useProgress();

  const { nodes, edges } = useMemo(() => {
    const hood = lessonNeighbourhood(lesson.n);
    const tone = (n: number) => (hydrated && persisted.lessons[String(n)] ? ("done" as const) : ("default" as const));
    const nodes: GraphNodeData[] = [];
    const edges: GraphEdgeData[] = [];

    hood.prerequisites.forEach((p, row) => {
      nodes.push({
        id: `p${p.n}`,
        title: p.title,
        badge: lessonCode(p.n),
        href: lessonHref(p.n),
        icon: BookOpen,
        col: 0,
        row,
        tone: tone(p.n),
      });
      edges.push({ from: `p${p.n}`, to: "self", label: T.buildsOn });
    });
    nodes.push({ id: "self", title: lesson.title, badge: lessonCode(lesson.n), col: 1, row: 0, tone: "signal" });
    hood.unlocks.forEach((u, row) => {
      nodes.push({
        id: `u${u.n}`,
        title: u.title,
        badge: lessonCode(u.n),
        href: lessonHref(u.n),
        icon: BookOpen,
        col: 2,
        row,
        tone: tone(u.n),
      });
      edges.push({ from: "self", to: `u${u.n}`, label: T.unlocks });
    });

    const below = Math.max(hood.prerequisites.length, hood.unlocks.length, 1);
    const chapter = hood.chapters[0];
    if (chapter) {
      nodes.push({
        id: "chapter",
        title: `${T.chapterPrefix} ${chapter.n}`,
        text: chapter.title,
        href: `/guide/${chapter.slug}`,
        icon: Terminal,
        col: 0,
        row: below,
      });
      edges.push({ from: "self", to: "chapter", label: T.runCommands });
    }
    if (hood.challenge) {
      nodes.push({
        id: "challenge",
        title: T.challengePrefix,
        text: hood.challenge.title,
        href: `/practice/${hood.challenge.id}`,
        icon: Swords,
        col: 1,
        row: below,
      });
      edges.push({ from: "self", to: "challenge", label: T.practise });
    }
    const [firstTerm] = hood.terms;
    if (firstTerm) {
      nodes.push({
        id: "terms",
        title: T.termsTitle,
        text: hood.terms.join(", "),
        href: `/glossary?q=${encodeURIComponent(firstTerm)}`,
        icon: Library,
        col: 2,
        row: below,
      });
      edges.push({ from: "self", to: "terms", label: T.vocabulary });
    }
    return { nodes, edges };
  }, [lesson, hydrated, persisted.lessons]);

  return <ConnectionGraph nodes={nodes} edges={edges} label={T.label} showLabels="always" />;
}
