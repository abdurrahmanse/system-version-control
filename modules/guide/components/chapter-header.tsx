import type { Chapter } from "@/modules/curriculum";
import { LevelBadge } from "@/shared/components/common/level-badge";
import { Container } from "@/shared/components/layout/container";
import { UI } from "@/shared/data/ui";

export function ChapterHeader({ chapter, count }: { chapter: Chapter; count: number }) {
  return (
    <Container as="header" className="pt-12">
      <p className="font-heading text-8xl leading-none font-bold text-signal">{chapter.n}</p>
      <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight sm:text-6xl">{chapter.title}</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">{chapter.summary}</p>
      <p className="mt-4 flex items-center gap-3 font-label text-xs tracking-wider text-muted-foreground uppercase">
        <LevelBadge level={chapter.level} />
        {count} {UI.steps_plural}
      </p>
    </Container>
  );
}
