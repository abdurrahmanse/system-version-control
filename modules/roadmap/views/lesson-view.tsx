import { notFound } from "next/navigation";

import { getLessonBySlug, stepsByLesson } from "@/modules/curriculum";
import { StepList } from "@/modules/guide";
import { LessonCommandList } from "@/modules/roadmap/components/lesson-command-list";
import { LessonHeader } from "@/modules/roadmap/components/lesson-header";
import { LessonNav } from "@/modules/roadmap/components/lesson-nav";
import { LessonPitfalls } from "@/modules/roadmap/components/lesson-pitfalls";
import { LessonSection } from "@/modules/roadmap/components/lesson-section";
import { LessonSources } from "@/modules/roadmap/components/lesson-sources";
import { LessonTask } from "@/modules/roadmap/components/lesson-task";
import { LESSON_PAGE } from "@/modules/roadmap/data/roadmap";
import { CheckList } from "@/shared/components/common/check-list";
import { PageMain } from "@/shared/components/common/page-main";
import { Container } from "@/shared/components/layout/container";
import { ContentColumn } from "@/shared/components/layout/content-column";
import { UI } from "@/shared/data/ui";

export function LessonView({ slug }: { slug: string }) {
  const found = getLessonBySlug(slug);
  if (!found) notFound();
  const { lesson, detail } = found;
  const steps = stepsByLesson(lesson.n);

  return (
    <PageMain>
      <LessonHeader lesson={lesson} />
      <Container className="py-12">
        <ContentColumn className="space-y-12">
          <LessonSection title={UI.youWillLearn}>
            <CheckList items={lesson.learn} />
          </LessonSection>
          <LessonSection title={UI.commands}>
            <LessonCommandList commands={lesson.commands} />
          </LessonSection>
          <LessonSection title={UI.projectTask}>
            <LessonTask task={lesson.task} />
            <p className="mt-3 text-sm text-muted-foreground">{LESSON_PAGE.projectIntro}</p>
          </LessonSection>
          {steps.length > 0 ? (
            <LessonSection title={UI.steps}>
              <StepList steps={steps} />
            </LessonSection>
          ) : null}
          <LessonSection title={UI.checkpoints}>
            <CheckList items={detail.checkpoints} />
          </LessonSection>
          <LessonSection title={UI.pitfalls}>
            <LessonPitfalls items={detail.pitfalls} />
          </LessonSection>
          <LessonSection title={UI.sources}>
            <LessonSources sources={detail.sources} />
          </LessonSection>
          <LessonNav n={lesson.n} />
        </ContentColumn>
      </Container>
    </PageMain>
  );
}
