import type { Lesson } from "@/modules/curriculum";
import { TrackLessonBlock } from "@/modules/tracks/components/track-lesson-block";
import { CheckList } from "@/shared/components/common/check-list";

// What to do in each lesson: the project task, then the skills it trains.
export function TasksSection({ lessons }: { lessons: readonly Lesson[] }) {
  return (
    <div className="space-y-8">
      {lessons.map((lesson, index) => (
        <TrackLessonBlock key={lesson.n} index={index + 1} lesson={lesson} caption={lesson.task}>
          <CheckList items={lesson.learn} />
        </TrackLessonBlock>
      ))}
    </div>
  );
}
