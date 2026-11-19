import { LEVELS } from "@/modules/curriculum";
import { LevelSection } from "@/modules/roadmap/components/level-section";
import { PathMap } from "@/modules/roadmap/components/path-map";
import { ROADMAP_CTA, ROADMAP_HERO, ROADMAP_MAP } from "@/modules/roadmap/data/roadmap";
import { PageMain } from "@/shared/components/common/page-main";
import { PageIntro } from "@/shared/components/hero/page-intro";
import { CtaSection } from "@/shared/components/section/cta-section";
import { Section } from "@/shared/components/section/section";

export function RoadmapView() {
  return (
    <PageMain>
      <PageIntro copy={ROADMAP_HERO} />
      <Section copy={ROADMAP_MAP}>
        <PathMap />
      </Section>
      {LEVELS.map((level) => (
        <LevelSection key={level.name} level={level} />
      ))}
      <CtaSection copy={ROADMAP_CTA} />
    </PageMain>
  );
}
