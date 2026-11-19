import { notFound } from "next/navigation";

import { getChapter, getStep, lessonCode, lessonHref, stepHref, STEPS } from "@/modules/curriculum";
import { StepCard } from "@/modules/guide/components/step-card";
import { GUIDE_STEP as T } from "@/modules/guide/data/guide";
import { LinkArrow } from "@/shared/components/common/link-arrow";
import { PageMain } from "@/shared/components/common/page-main";
import { PrevNext } from "@/shared/components/common/prev-next";
import { Container } from "@/shared/components/layout/container";
import { ContentColumn } from "@/shared/components/layout/content-column";

// One step on its own page: the command, the explanation, warnings, and links to the lesson and neighbouring steps.
export function GuideStepView({ chapter, id }: { chapter: string; id: string }) {
  const step = getStep(Number(id));
  const chap = getChapter(chapter);
  if (!step || !chap || step.chapter !== chap.slug) notFound();
  const prev = STEPS[step.id - 2];
  const next = STEPS[step.id];
  return (
    <PageMain>
      <Container className="py-12">
        <ContentColumn className="space-y-8">
          <StepCard step={step} page />
          <p className="flex flex-wrap gap-x-8 gap-y-2">
            <LinkArrow href={`/guide/${chap.slug}`}>{`${T.allInChapter}: ${chap.title}`}</LinkArrow>
            <LinkArrow href={lessonHref(step.lesson)}>{`${T.relatedLesson} ${lessonCode(step.lesson)}`}</LinkArrow>
          </p>
          <PrevNext
            prev={prev ? { href: stepHref(prev), title: `${prev.id}. ${prev.title}` } : undefined}
            next={next ? { href: stepHref(next), title: `${next.id}. ${next.title}` } : undefined}
          />
        </ContentColumn>
      </Container>
    </PageMain>
  );
}
