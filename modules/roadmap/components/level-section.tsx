import { type LEVELS } from "@/modules/curriculum";
import { lessonsByLevel } from "@/modules/curriculum";
import { LessonTimeline } from "@/modules/roadmap/components/lesson-timeline";
import { LEVEL_ICONS } from "@/modules/roadmap/data/roadmap";
import { Section } from "@/shared/components/section/section";

export function LevelSection({ level }: { level: (typeof LEVELS)[number] }) {
  return (
    <Section
      copy={{
        numeral: level.numeral,
        icon: LEVEL_ICONS[level.name],
        eyebrow: `Level ${level.numeral}`,
        title: level.name,
        description: level.tagline,
      }}
    >
      <LessonTimeline lessons={lessonsByLevel(level.name)} />
    </Section>
  );
}
