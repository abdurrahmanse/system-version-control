import { HOME_NEXT } from "@/modules/home/data/home";
import { NextStepCard } from "@/modules/path";
import { SafeSection } from "@/shared/components/common/safe-section";
import { Section } from "@/shared/components/section/section";

export function NextStepSection() {
  return (
    <Section copy={HOME_NEXT}>
      <SafeSection>
        <NextStepCard />
      </SafeSection>
    </Section>
  );
}
