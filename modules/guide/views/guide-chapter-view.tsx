import { notFound } from "next/navigation";

import { getChapter, stepsByChapter } from "@/modules/curriculum";
import { ChapterHeader } from "@/modules/guide/components/chapter-header";
import { ChapterNav } from "@/modules/guide/components/chapter-nav";
import { StepList } from "@/modules/guide/components/step-list";
import { PageMain } from "@/shared/components/common/page-main";
import { Container } from "@/shared/components/layout/container";
import { ContentColumn } from "@/shared/components/layout/content-column";

export function GuideChapterView({ slug }: { slug: string }) {
  const chapter = getChapter(slug);
  if (!chapter) notFound();
  const steps = stepsByChapter(chapter.slug);
  return (
    <PageMain>
      <ChapterHeader chapter={chapter} count={steps.length} />
      <Container className="py-12">
        <ContentColumn className="space-y-12">
          <StepList steps={steps} variant="rows" />
          <ChapterNav slug={chapter.slug} />
        </ContentColumn>
      </Container>
    </PageMain>
  );
}
