import Link from "next/link";

import { lessonCode, lessonHref, LESSONS } from "@/modules/curriculum";
import { LESSON_PATH } from "@/modules/roadmap/data/roadmap";
import { cn } from "@/shared/lib/utils";

// 15 small stops showing where this lesson sits on the path. Each stop is a link.
export function LessonPathStrip({ current }: { current: number }) {
  return (
    <nav aria-label={LESSON_PATH.label}>
      <ol className="flex flex-wrap gap-1.5">
        {LESSONS.map((l) => (
          <li key={l.n}>
            <Link
              href={lessonHref(l.n)}
              title={l.title}
              aria-current={l.n === current ? "page" : undefined}
              aria-label={`${lessonCode(l.n)} ${l.title}`}
              className={cn(
                "flex size-9 items-center justify-center border-2 border-edge font-label text-xs font-bold hover:bg-secondary",
                l.n === current ? "bg-signal text-primary-foreground" : "bg-card",
              )}
            >
              {l.n}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
