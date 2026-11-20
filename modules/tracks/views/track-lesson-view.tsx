import { notFound } from "next/navigation";

import { LESSON_DETAILS, LESSONS, stepsByLesson } from "@/modules/curriculum";
import { StepList } from "@/modules/guide";
import {
  LESSON_PAGE,
  LessonCommandList,
  LessonConnections,
  LessonHeader,
  LessonPitfalls,
  LessonSection,
  LessonSources,
  LessonTask,
} from "@/modules/roadmap";
import { TRACKS } from "@/modules/tracks/data/tracks";
import { CheckList } from "@/shared/components/common/check-list";
import { PageMain } from "@/shared/components/common/page-main";
import { PrevNext } from "@/shared/components/common/prev-next";
import { SafeSection } from "@/shared/components/common/safe-section";
import { Container } from "@/shared/components/layout/container";
import { ContentColumn } from "@/shared/components/layout/content-column";
import { SubNav } from "@/shared/components/layout/sub-nav";
import { UI } from "@/shared/data/ui";

export type TrackLessonTab = "overview" | "commands" | "checkpoints";

export function TrackLessonView({
  trackSlug,
  lessonNumber,
  tab,
}: {
  trackSlug: string;
  lessonNumber: number;
  tab: TrackLessonTab;
}) {
  const track = TRACKS.find((item) => item.slug === trackSlug);
  const lesson = LESSONS.find((item) => item.n === lessonNumber);
  if (!track || !lesson || lesson.level !== track.level) notFound();

  const detail = LESSON_DETAILS[lesson.n];
  if (!detail) notFound();

  const trackLessons = LESSONS.filter((item) => item.level === track.level);
  const position = trackLessons.findIndex((item) => item.n === lesson.n);
  const prev = position > 0 ? trackLessons[position - 1] : undefined;
  const next = position >= 0 && position < trackLessons.length - 1 ? trackLessons[position + 1] : undefined;
  const base = `/tracks/${track.slug}/${lesson.n}`;
  const nav = [
    { href: base, label: "Overview" },
    { href: `${base}/commands`, label: "Commands" },
    { href: `${base}/checkpoints`, label: "Checkpoints" },
  ];
  const steps = stepsByLesson(lesson.n);

  return (
    <PageMain>
      <LessonHeader lesson={lesson} />
      <SubNav items={nav} label={`${track.title} lesson sections`} />
      <Container className="py-12">
        <ContentColumn className="space-y-12">
          {tab === "overview" ? (
            <>
              <LessonSection title="Track and connections">
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
          <PrevNext
            prev={prev ? { href: `/tracks/${track.slug}/${prev.n}`, title: prev.title } : undefined}
            next={next ? { href: `/tracks/${track.slug}/${next.n}`, title: next.title } : undefined}
          />
        </ContentColumn>
      </Container>
    </PageMain>
  );
}
