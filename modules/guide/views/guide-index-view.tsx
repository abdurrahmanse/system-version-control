import { Search, Terminal } from "lucide-react";
import { Suspense } from "react";

import { STEPS } from "@/modules/curriculum";
import { ChapterGrid } from "@/modules/guide/components/chapter-grid";
import { GuideSearch } from "@/modules/guide/components/guide-search";
import { GUIDE_HERO, GUIDE_INDEX } from "@/modules/guide/data/guide";
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
          numeral: GUIDE_INDEX.numeral,
          icon: Terminal,
          eyebrow: GUIDE_INDEX.eyebrow,
          title: GUIDE_INDEX.title,
          description: GUIDE_INDEX.description,
        }}
      >
        <ChapterGrid />
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
            <GuideSearch steps={STEPS} />
          </Suspense>
        </SafeSection>
      </Section>
    </PageMain>
  );
}
