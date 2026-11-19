import { notFound } from "next/navigation";

import { getLessonBySlug, stepsByLesson } from "@/modules/curriculum";
import { StepList } from "@/modules/guide";
import { LessonCommandList } from "@/modules/roadmap/components/lesson-command-list";
import { LessonConnections } from "@/modules/roadmap/components/lesson-connections";
import { LessonHeader } from "@/modules/roadmap/components/lesson-header";
import { LessonNav } from "@/modules/roadmap/components/lesson-nav";
import { LessonPitfalls } from "@/modules/roadmap/components/lesson-pitfalls";
import { LessonSection } from "@/modules/roadmap/components/lesson-section";
import { LessonSources } from "@/modules/roadmap/components/lesson-sources";
import { LessonTask } from "@/modules/roadmap/components/lesson-task";
import { LESSON_CONNECTIONS, LESSON_PAGE, LESSON_TABS, type LessonTab } from "@/modules/roadmap/data/roadmap";
import { CheckList } from "@/shared/components/common/check-list";
import { PageMain } from "@/shared/components/common/page-main";
import { SafeSection } from "@/shared/components/common/safe-section";
import { Container } from "@/shared/components/layout/container";
import { ContentColumn } from "@/shared/components/layout/content-column";
import { SubNav } from "@/shared/components/layout/sub-nav";
import { UI } from "@/shared/data/ui";

// One lesson, split over three short pages so nothing needs long scrolling.
export function LessonView({ slug, tab }: { slug: string; tab: LessonTab }) {
  const found = getLessonBySlug(slug);
  if (!found) notFound();
  const { lesson, detail } = found;
  const base = `/roadmap/${slug}`;
  const nav = [
    { href: base, label: LESSON_TABS.overview },
    { href: `${base}/commands`, label: LESSON_TABS.commands },
    { href: `${base}/checkpoints`, label: LESSON_TABS.checkpoints },
  ];
  const steps = stepsByLesson(lesson.n);

  return (
    <PageMain>
      <LessonHeader lesson={lesson} />
      <SubNav items={nav} label={LESSON_TABS.label} />
      <Container className="py-12">
        <ContentColumn className="space-y-12">
          {tab === "overview" ? (
            <>
              <LessonSection title={LESSON_CONNECTIONS.title}>
                <SafeSection>
                  <LessonConnections lesson={lesson} />
                </SafeSection>
              </LessonSection>
              <LessonSection title={UI.youWillLearn}>
                <CheckList items={lesson.learn} />
              </LessonSection>
              <LessonSection title={UI.projectTask}>
                <LessonTask task={lesson.task} />
                <p className="mt-3 text-sm text-muted-foreground">{LESSON_PAGE.projectIntro}</p>
              </LessonSection>
            </>
          ) : null}
          {tab === "commands" ? (
            <>
              <LessonSection title={UI.commands}>
                <LessonCommandList commands={lesson.commands} />
              </LessonSection>
              {steps.length > 0 ? (
                <LessonSection title={UI.steps}>
                  <StepList steps={steps} />
                </LessonSection>
              ) : null}
            </>
          ) : null}
          {tab === "checkpoints" ? (
            <>
              <LessonSection title={UI.checkpoints}>
                <CheckList items={detail.checkpoints} />
              </LessonSection>
              <LessonSection title={UI.pitfalls}>
                <LessonPitfalls items={detail.pitfalls} />
              </LessonSection>
              <LessonSection title={UI.sources}>
                <LessonSources sources={detail.sources} />
              </LessonSection>
            </>
          ) : null}
          <LessonNav n={lesson.n} />
        </ContentColumn>
      </Container>
    </PageMain>
  );
}
