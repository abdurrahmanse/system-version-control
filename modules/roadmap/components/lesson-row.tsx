import Link from "next/link";

import { type Lesson, lessonCode, lessonHref } from "@/modules/curriculum";
import { LessonDoneButton } from "@/modules/progress";

// One compact line per lesson on the roadmap: code, title, summary and a "mark done" button.
export function LessonRow({ lesson }: { lesson: Lesson }) {
  return (
    <li className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-edge/30 px-4 py-3 last:border-b-0">
      <span className="w-12 font-label text-xs font-bold text-signal">{lessonCode(lesson.n)}</span>
      <div className="min-w-0 flex-1 basis-64">
        <Link href={lessonHref(lesson.n)} className="font-heading text-lg font-bold hover:text-signal">
          {lesson.title}
        </Link>
        <p className="truncate text-sm text-muted-foreground">{lesson.summary}</p>
      </div>
      <LessonDoneButton n={lesson.n} />
    </li>
  );
}
