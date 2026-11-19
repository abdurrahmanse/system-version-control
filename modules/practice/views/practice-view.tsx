import { Suspense } from "react";

import { ChallengeBrowser } from "@/modules/practice/components/challenge-browser";
import { PRACTICE_HERO } from "@/modules/practice/data/practice";
import { PageMain } from "@/shared/components/common/page-main";
import { SafeSection } from "@/shared/components/common/safe-section";
import { PageIntro } from "@/shared/components/hero/page-intro";
import { Container } from "@/shared/components/layout/container";
import { Skeleton } from "@/shared/ui/skeleton";

// Hub: filter the challenges, then open one. Each challenge has its own page.
export function PracticeView() {
  return (
    <PageMain>
      <PageIntro copy={PRACTICE_HERO} />
      <Container className="py-12">
        <SafeSection>
          <Suspense fallback={<Skeleton className="h-40 w-full" />}>
            <ChallengeBrowser />
          </Suspense>
        </SafeSection>
      </Container>
    </PageMain>
  );
}
