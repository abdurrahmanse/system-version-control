import { type Lesson, stepsByLesson } from "@/modules/curriculum";
import { TrackLessonBlock } from "@/modules/tracks/components/track-lesson-block";
import { CommandLine } from "@/shared/components/common/command-line";

const commandsOf = (lesson: Lesson) => {
  const fromSteps = stepsByLesson(lesson.n).map((step) => step.command);
  return [...new Set(fromSteps.length > 0 ? fromSteps : lesson.commands)];
};

// Cheat sheet: only the commands, grouped by lesson.
export function CommandsSection({ lessons }: { lessons: readonly Lesson[] }) {
  return (
    <div className="space-y-8">
      {lessons.map((lesson, index) => (
        <TrackLessonBlock key={lesson.n} index={index + 1} lesson={lesson}>
          <ul className="grid gap-1.5 md:grid-cols-2">
            {commandsOf(lesson).map((command) => (
              <li key={command}>
                <CommandLine command={command} />
              </li>
            ))}
          </ul>
        </TrackLessonBlock>
      ))}
    </div>
  );
}
