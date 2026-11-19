import { LEVELS } from "@/modules/curriculum";
import { LevelCard } from "@/modules/home/components/level-card";
import { HOME_PATH } from "@/modules/home/data/home";
import { CardGrid } from "@/shared/components/cards/card-grid";
import { LinkArrow } from "@/shared/components/common/link-arrow";
import { Section } from "@/shared/components/section/section";

export function PathSection() {
  return (
    <Section copy={HOME_PATH}>
      <CardGrid className="md:grid-cols-2 lg:grid-cols-2">
        {LEVELS.map((l) => (
          <LevelCard key={l.name} level={l.name} />
        ))}
      </CardGrid>
      <p className="mt-6">
        <LinkArrow href={HOME_PATH.link.href}>{HOME_PATH.link.label}</LinkArrow>
      </p>
    </Section>
  );
}
