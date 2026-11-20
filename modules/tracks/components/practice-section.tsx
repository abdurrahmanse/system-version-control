import { CHALLENGES, type Lesson } from "@/modules/curriculum";
import { type Track, TRACK_SECTION_COPY } from "@/modules/tracks/data/tracks";
import { CardGrid } from "@/shared/components/cards/card-grid";
import { InfoCard } from "@/shared/components/cards/info-card";

// Ordering challenges that belong to this level's lessons.
export function PracticeSection({ track, lessons }: { track: Track; lessons: readonly Lesson[] }) {
  const numbers = new Set(lessons.map((lesson) => lesson.n));
  const challenges = CHALLENGES.filter((challenge) => numbers.has(challenge.lesson));
  if (challenges.length === 0) return <p className="text-muted-foreground">{TRACK_SECTION_COPY.emptyPractice}</p>;
  return (
    <CardGrid className="md:grid-cols-2">
      {challenges.map((challenge) => (
        <InfoCard
          key={challenge.id}
          icon={track.icon}
          title={challenge.title}
          text={challenge.goal}
          href={`/practice/${challenge.id}`}
        />
      ))}
    </CardGrid>
  );
}
