import type { Lesson } from "@/modules/curriculum";
import { LessonRow } from "@/modules/roadmap/components/lesson-row";

export function LessonList({ lessons }: { lessons: Lesson[] }) {
  return (
    <ul className="border-2 border-edge bg-card shadow-[4px_4px_0_0_var(--shadow-hard)]">
      {lessons.map((l) => (
        <LessonRow key={l.n} lesson={l} />
      ))}
    </ul>
  );
}
