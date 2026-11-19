import { LayoutList } from "lucide-react";
import { Suspense } from "react";

import { LessonGraph } from "@/modules/progress";
import { LessonBrowser } from "@/modules/roadmap/components/lesson-browser";
import { ROADMAP_CTA, ROADMAP_FILTERS, ROADMAP_HERO, ROADMAP_MAP } from "@/modules/roadmap/data/roadmap";
import { PageMain } from "@/shared/components/common/page-main";
import { SafeSection } from "@/shared/components/common/safe-section";
import { PageIntro } from "@/shared/components/hero/page-intro";
import { CtaSection } from "@/shared/components/section/cta-section";
import { Section } from "@/shared/components/section/section";
import { Skeleton } from "@/shared/ui/skeleton";

export function RoadmapView() {
  return (
    <PageMain>
      <PageIntro copy={ROADMAP_HERO} />
      <Section copy={ROADMAP_MAP}>
        <SafeSection>
          <LessonGraph />
        </SafeSection>
      </Section>
      <Section
        copy={{
          numeral: ROADMAP_FILTERS.sectionNumeral,
          icon: LayoutList,
          eyebrow: ROADMAP_FILTERS.eyebrow,
          title: ROADMAP_FILTERS.title,
          description: ROADMAP_FILTERS.description,
        }}
      >
        <SafeSection>
          <Suspense fallback={<Skeleton className="h-64 w-full" />}>
            <LessonBrowser />
          </Suspense>
        </SafeSection>
      </Section>
      <CtaSection copy={ROADMAP_CTA} />
    </PageMain>
  );
}
