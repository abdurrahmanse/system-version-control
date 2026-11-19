import Link from "next/link";

import type { Lesson } from "@/modules/curriculum";
import { lessonHref } from "@/modules/curriculum";
import { LessonDoneButton } from "@/modules/progress";
import { LessonBadges } from "@/modules/roadmap/components/lesson-badges";
import { LessonBlock } from "@/modules/roadmap/components/lesson-block";
import { LessonCommandList } from "@/modules/roadmap/components/lesson-command-list";
import { LessonDocPath } from "@/modules/roadmap/components/lesson-doc-path";
import { LessonTask } from "@/modules/roadmap/components/lesson-task";
import { CheckList } from "@/shared/components/common/check-list";
import { UI } from "@/shared/data/ui";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";

export function LessonCard({ lesson }: { lesson: Lesson }) {
  return (
    <Card>
      <CardHeader>
        <LessonBadges n={lesson.n} level={lesson.level} />
        <CardTitle className="font-heading text-2xl">
          <Link href={lessonHref(lesson.n)} className="hover:text-signal">
            {lesson.title}
          </Link>
        </CardTitle>
        <CardDescription className="text-sm">{lesson.summary}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6 md:grid-cols-2">
        <LessonBlock label={UI.youWillLearn}>
          <CheckList items={lesson.learn} />
        </LessonBlock>
        <LessonBlock label={UI.commands}>
          <LessonCommandList commands={lesson.commands} />
        </LessonBlock>
        <div className="md:col-span-2">
          <LessonTask task={lesson.task} />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 md:col-span-2">
          <LessonDocPath path={lesson.doc} />
          <LessonDoneButton n={lesson.n} />
        </div>
      </CardContent>
    </Card>
  );
}
