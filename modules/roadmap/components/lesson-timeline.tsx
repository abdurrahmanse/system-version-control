import type { Lesson } from "@/modules/curriculum";
import { LessonCard } from "@/modules/roadmap/components/lesson-card";
import { Reveal } from "@/shared/motion/reveal";

// Vertical "git log" style rail: each lesson is a commit on the learning branch.
export function LessonTimeline({ lessons }: { lessons: Lesson[] }) {
  return (
    <ol className="relative ml-3 border-l-2 border-edge">
      {lessons.map((lesson) => (
        <li key={lesson.n} className="relative pb-10 pl-8 last:pb-0">
          <span className="absolute top-6 -left-[11px] size-5 border-2 border-edge bg-signal" aria-hidden />
          <Reveal direction="right">
            <LessonCard lesson={lesson} />
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
