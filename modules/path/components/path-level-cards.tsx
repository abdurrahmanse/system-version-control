import { lessonsByLevel, LEVELS, levelSlug } from "@/modules/curriculum";
import { PATH_LEVEL_ICONS, PATH_LEVEL_UI } from "@/modules/path/data/path";
import { CardGrid } from "@/shared/components/cards/card-grid";
import { InfoCard } from "@/shared/components/cards/info-card";

export function PathLevelCards() {
  return (
    <CardGrid className="md:grid-cols-2 lg:grid-cols-2">
      {LEVELS.map((l) => (
        <InfoCard
          key={l.name}
          icon={PATH_LEVEL_ICONS[l.name]}
          title={`${l.numeral} · ${l.name}`}
          text={`${l.tagline} ${PATH_LEVEL_UI.lessons(lessonsByLevel(l.name).length)}.`}
          href={`/path/${levelSlug(l.name)}`}
        />
      ))}
    </CardGrid>
  );
}
