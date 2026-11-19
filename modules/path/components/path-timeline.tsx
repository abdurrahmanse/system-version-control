"use client";

import { learningPath, type Level, nextLesson } from "@/modules/curriculum";
import { PathItem } from "@/modules/path/components/path-item";
import { PATH_UI as T } from "@/modules/path/data/path";
import { useProgress } from "@/modules/progress";

const path = learningPath();

// A learning path as one vertical line. State (done / next / to do) comes from your saved progress.
// Pass `level` to show only that level's lessons.
export function PathTimeline({ level }: { level?: Level }) {
  const { hydrated, persisted } = useProgress();
  const done = new Set(
    hydrated ? path.filter((p) => persisted.lessons[String(p.lesson.n)]).map((p) => p.lesson.n) : [],
  );
  const next = nextLesson(done)?.n;
  const items = level ? path.filter((p) => p.lesson.level === level) : path;
  return (
    <ol aria-label={T.pathLabel} className="relative ml-3 border-l-2 border-edge">
      {items.map((item) => (
        <PathItem
          key={item.lesson.n}
          item={item}
          state={done.has(item.lesson.n) ? "done" : item.lesson.n === next ? "next" : "todo"}
        />
      ))}
    </ol>
  );
}
