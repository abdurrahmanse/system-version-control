import { CHAPTERS } from "@/modules/curriculum";
import { ChapterCard } from "@/modules/guide/components/chapter-card";
import { CardGrid } from "@/shared/components/cards/card-grid";

export function ChapterGrid() {
  return (
    <CardGrid>
      {CHAPTERS.map((c) => (
        <ChapterCard key={c.slug} chapter={c} />
      ))}
    </CardGrid>
  );
}
