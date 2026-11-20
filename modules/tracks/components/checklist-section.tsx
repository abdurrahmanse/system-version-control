import { type Lesson, LESSON_DETAILS } from "@/modules/curriculum";
import { TrackLessonBlock } from "@/modules/tracks/components/track-lesson-block";
import { CheckList } from "@/shared/components/common/check-list";

// Checkpoints that prove each lesson is done.
export function ChecklistSection({ lessons }: { lessons: readonly Lesson[] }) {
  return (
    <div className="space-y-8">
      {lessons.map((lesson, index) => (
        <TrackLessonBlock key={lesson.n} index={index + 1} lesson={lesson}>
          <CheckList items={LESSON_DETAILS[lesson.n]?.checkpoints ?? []} />
        </TrackLessonBlock>
      ))}
    </div>
  );
}
