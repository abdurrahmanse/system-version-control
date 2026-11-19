import { PackageChart } from "@/modules/toolbox/components/package-chart";
import { PackageGroupCard } from "@/modules/toolbox/components/package-group-card";
import { PACKAGE_GROUPS } from "@/modules/toolbox/data/packages";
import {
  PACKAGES_CATALOG,
  PACKAGES_CHART,
  PACKAGES_CTA,
  PACKAGES_HERO,
  PACKAGES_STEPS,
  PACKAGES_WORKFLOW,
} from "@/modules/toolbox/data/toolbox";
import { CardGrid } from "@/shared/components/cards/card-grid";
import { NumberedSteps } from "@/shared/components/common/numbered-steps";
import { PageMain } from "@/shared/components/common/page-main";
import { SafeSection } from "@/shared/components/common/safe-section";
import { PageIntro } from "@/shared/components/hero/page-intro";
import { CtaSection } from "@/shared/components/section/cta-section";
import { Section } from "@/shared/components/section/section";

export function ToolboxView() {
  return (
    <PageMain>
      <PageIntro copy={PACKAGES_HERO} />
      <Section copy={PACKAGES_CHART}>
        <SafeSection>
          <PackageChart />
        </SafeSection>
      </Section>
      <Section copy={PACKAGES_CATALOG}>
        <CardGrid>
          {PACKAGE_GROUPS.map((g) => (
            <PackageGroupCard key={g.title} group={g} />
          ))}
        </CardGrid>
      </Section>
      <Section copy={PACKAGES_WORKFLOW}>
        <NumberedSteps steps={PACKAGES_STEPS.map((text, i) => ({ title: `0${i + 1}`, text }))} />
      </Section>
      <CtaSection copy={PACKAGES_CTA} />
    </PageMain>
  );
}
