import type { Lesson } from "@/modules/curriculum";
import { LessonDoneButton } from "@/modules/progress";
import { LessonBadges } from "@/modules/roadmap/components/lesson-badges";
import { LessonPathStrip } from "@/modules/roadmap/components/lesson-path-strip";
import { Container } from "@/shared/components/layout/container";

export function LessonHeader({ lesson }: { lesson: Lesson }) {
  return (
    <Container as="header" className="pt-12">
      <LessonBadges n={lesson.n} level={lesson.level} />
      <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight sm:text-6xl">{lesson.title}</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted-foreground">{lesson.summary}</p>
      <div className="mt-6 space-y-4">
        <LessonDoneButton n={lesson.n} />
        <LessonPathStrip current={lesson.n} />
      </div>
    </Container>
  );
}
