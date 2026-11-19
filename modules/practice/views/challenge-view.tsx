import { notFound } from "next/navigation";

import { CHALLENGES } from "@/modules/curriculum";
import { ChallengeCard } from "@/modules/practice/components/challenge-card";
import { PRACTICE_FILTERS as F } from "@/modules/practice/data/practice";
import { LinkArrow } from "@/shared/components/common/link-arrow";
import { PageMain } from "@/shared/components/common/page-main";
import { PrevNext } from "@/shared/components/common/prev-next";
import { SafeSection } from "@/shared/components/common/safe-section";
import { Container } from "@/shared/components/layout/container";
import { ContentColumn } from "@/shared/components/layout/content-column";

// One challenge on its own page.
export function ChallengeView({ id }: { id: string }) {
  const i = CHALLENGES.findIndex((c) => c.id === id);
  const challenge = CHALLENGES[i];
  if (!challenge) notFound();
  const prev = CHALLENGES[i - 1];
  const next = CHALLENGES[i + 1];
  return (
    <PageMain>
      <Container className="py-12">
        <ContentColumn className="space-y-8">
          <SafeSection>
            <ChallengeCard challenge={challenge} page />
          </SafeSection>
          <LinkArrow href="/practice">{F.back}</LinkArrow>
          <PrevNext
            prev={prev ? { href: `/practice/${prev.id}`, title: prev.title } : undefined}
            next={next ? { href: `/practice/${next.id}`, title: next.title } : undefined}
          />
        </ContentColumn>
      </Container>
    </PageMain>
  );
}
