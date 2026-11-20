import { type Lesson, LESSON_DETAILS } from "@/modules/curriculum";
import { LessonPitfalls } from "@/modules/roadmap";
import { TrackLessonBlock } from "@/modules/tracks/components/track-lesson-block";

// Common traps, lesson by lesson.
export function MistakesSection({ lessons }: { lessons: readonly Lesson[] }) {
  return (
    <div className="space-y-8">
      {lessons.map((lesson, index) => (
        <TrackLessonBlock key={lesson.n} index={index + 1} lesson={lesson}>
          <LessonPitfalls items={LESSON_DETAILS[lesson.n]?.pitfalls ?? []} />
        </TrackLessonBlock>
      ))}
    </div>
  );
}
