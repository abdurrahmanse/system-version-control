import { SiteGraph } from "@/modules/home/components/site-graph";
import { HOME_MAP } from "@/modules/home/data/home";
import { SafeSection } from "@/shared/components/common/safe-section";
import { Section } from "@/shared/components/section/section";

export function SiteMapSection() {
  return (
    <Section copy={HOME_MAP}>
      <SafeSection>
        <SiteGraph />
      </SafeSection>
    </Section>
  );
}
