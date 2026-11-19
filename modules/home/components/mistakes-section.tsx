import { MistakesCarousel } from "@/modules/home/components/mistakes-carousel";
import { HOME_MISTAKES } from "@/modules/home/data/home";
import { Section } from "@/shared/components/section/section";

export function MistakesSection() {
  return (
    <Section copy={HOME_MISTAKES}>
      <MistakesCarousel items={HOME_MISTAKES.items} />
    </Section>
  );
}
