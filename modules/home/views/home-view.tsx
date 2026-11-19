import { FlowSection } from "@/modules/home/components/flow-section";
import { MethodSection } from "@/modules/home/components/method-section";
import { MistakesSection } from "@/modules/home/components/mistakes-section";
import { PathSection } from "@/modules/home/components/path-section";
import { StatsSection } from "@/modules/home/components/stats-section";
import { TrustSection } from "@/modules/home/components/trust-section";
import { HOME_CTA, HOME_HERO } from "@/modules/home/data/home";
import { PageMain } from "@/shared/components/common/page-main";
import { Hero } from "@/shared/components/hero/hero";
import { CtaSection } from "@/shared/components/section/cta-section";

export function HomeView() {
  return (
    <PageMain>
      <Hero copy={HOME_HERO} />
      <StatsSection />
      <PathSection />
      <FlowSection />
      <MethodSection />
      <MistakesSection />
      <TrustSection />
      <CtaSection copy={HOME_CTA} />
    </PageMain>
  );
}
