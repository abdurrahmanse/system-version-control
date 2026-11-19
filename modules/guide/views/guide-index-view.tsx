import { Route, Search } from "lucide-react";
import { Suspense } from "react";

import { STEPS } from "@/modules/curriculum";
import { ChapterGraph } from "@/modules/guide/components/chapter-graph";
import { GuideBrowser } from "@/modules/guide/components/guide-browser";
import { GUIDE_HERO, GUIDE_INDEX, GUIDE_PATH } from "@/modules/guide/data/guide";
import { PageMain } from "@/shared/components/common/page-main";
import { SafeSection } from "@/shared/components/common/safe-section";
import { PageIntro } from "@/shared/components/hero/page-intro";
import { Section } from "@/shared/components/section/section";
import { Skeleton } from "@/shared/ui/skeleton";

export function GuideIndexView() {
  return (
    <PageMain>
      <PageIntro copy={GUIDE_HERO} />
      <Section
        copy={{
          numeral: GUIDE_PATH.numeral,
          icon: Route,
          eyebrow: GUIDE_PATH.eyebrow,
          title: GUIDE_PATH.title,
          description: GUIDE_PATH.description,
        }}
      >
        <SafeSection>
          <ChapterGraph />
        </SafeSection>
      </Section>
      <Section
        copy={{
          numeral: GUIDE_INDEX.searchNumeral,
          icon: Search,
          eyebrow: GUIDE_INDEX.searchEyebrow,
          title: GUIDE_INDEX.searchTitle,
          description: GUIDE_INDEX.searchDescription,
        }}
      >
        <SafeSection>
          <Suspense fallback={<Skeleton className="h-40 w-full" />}>
            <GuideBrowser steps={STEPS} />
          </Suspense>
        </SafeSection>
      </Section>
    </PageMain>
  );
}
