import { BookOpen } from "lucide-react";
import { Suspense } from "react";

import { TERMS } from "@/modules/curriculum";
import { GlossaryBrowser } from "@/modules/glossary/components/glossary-browser";
import { GLOSSARY_HERO } from "@/modules/glossary/data/glossary";
import { PageMain } from "@/shared/components/common/page-main";
import { SafeSection } from "@/shared/components/common/safe-section";
import { PageIntro } from "@/shared/components/hero/page-intro";
import { Section } from "@/shared/components/section/section";
import { Skeleton } from "@/shared/ui/skeleton";

export function GlossaryView() {
  return (
    <PageMain>
      <PageIntro copy={GLOSSARY_HERO} />
      <Section copy={{ numeral: "I", icon: BookOpen, eyebrow: "Terms", title: `${TERMS.length} terms, A to Z` }}>
        <SafeSection>
          <Suspense fallback={<Skeleton className="h-64 w-full" />}>
            <GlossaryBrowser terms={[...TERMS].sort((a, b) => a.term.localeCompare(b.term))} />
          </Suspense>
        </SafeSection>
      </Section>
    </PageMain>
  );
}
