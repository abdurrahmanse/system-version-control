import Link from "next/link";

import type { Chapter } from "@/modules/curriculum";
import { stepsByChapter } from "@/modules/curriculum";
import { GUIDE_CHAPTER } from "@/modules/guide/data/guide";
import { LevelBadge } from "@/shared/components/common/level-badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";

export function ChapterCard({ chapter }: { chapter: Chapter }) {
  const count = stepsByChapter(chapter.slug).length;
  return (
    <Link
      href={`/guide/${chapter.slug}`}
      className="block h-full transition-transform hover:-translate-x-px hover:-translate-y-px"
    >
      <Card className="h-full">
        <CardHeader>
          <div className="flex items-baseline justify-between">
            <span className="font-heading text-5xl text-signal">{chapter.n}</span>
            <LevelBadge level={chapter.level} />
          </div>
          <CardTitle className="font-heading text-xl">{chapter.title}</CardTitle>
          <CardDescription>{chapter.summary}</CardDescription>
          <p className="pt-2 font-label text-xs tracking-wider text-muted-foreground uppercase">
            {count} {GUIDE_CHAPTER.stepsLabel}
          </p>
        </CardHeader>
      </Card>
    </Link>
  );
}
