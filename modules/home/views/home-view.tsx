import { NextStepSection } from "@/modules/home/components/next-step-section";
import { SiteMapSection } from "@/modules/home/components/site-map-section";
import { HOME_CTA, HOME_HERO } from "@/modules/home/data/home";
import { PageMain } from "@/shared/components/common/page-main";
import { Hero } from "@/shared/components/hero/hero";
import { CtaSection } from "@/shared/components/section/cta-section";

// Short on purpose: the hero, your next step, a map of the site, and one call to action.
export function HomeView() {
  return (
    <PageMain>
      <Hero copy={HOME_HERO} />
      <NextStepSection />
      <SiteMapSection />
      <CtaSection copy={HOME_CTA} />
    </PageMain>
  );
}
