import Link from "next/link";

import type { Level } from "@/modules/curriculum";
import { LEVELS } from "@/modules/curriculum";
import { lessonCode, lessonHref, lessonsByLevel } from "@/modules/curriculum";
import { Badge } from "@/shared/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";

export function LevelCard({ level }: { level: Level }) {
  const meta = LEVELS.find((l) => l.name === level)!;
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-baseline justify-between">
          <CardTitle className="font-heading text-3xl">{meta.name}</CardTitle>
          <span className="font-heading text-4xl text-signal">{meta.numeral}</span>
        </div>
        <CardDescription>{meta.tagline}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {lessonsByLevel(level).map((l) => (
          <Link key={l.n} href={lessonHref(l.n)}>
            <Badge variant="outline" className="hover:bg-foreground hover:text-background">
              {lessonCode(l.n)} · {l.title}
            </Badge>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}
