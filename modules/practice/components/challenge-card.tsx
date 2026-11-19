"use client";

import { BadgeCheck } from "lucide-react";

import { type Challenge, lessonCode, lessonHref } from "@/modules/curriculum";
import { ChallengeBoard } from "@/modules/practice/components/challenge-board";
import { PRACTICE_UI as T } from "@/modules/practice/data/practice";
import { useProgressStore } from "@/modules/progress";
import { LevelBadge } from "@/shared/components/common/level-badge";
import { LinkArrow } from "@/shared/components/common/link-arrow";
import { Badge } from "@/shared/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";

export function ChallengeCard({ challenge }: { challenge: Challenge }) {
  const solved = useProgressStore((s) => Boolean(s.challenges[challenge.id]));
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-wrap items-center gap-2">
          <LevelBadge level={challenge.level} />
          {solved ? (
            <Badge>
              <BadgeCheck />
              {T.solved}
            </Badge>
          ) : null}
        </div>
        <CardTitle className="font-heading text-2xl">{challenge.title}</CardTitle>
        <CardDescription>
          <strong>{T.goal}:</strong> {challenge.goal}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChallengeBoard challenge={challenge} />
        <p className="mt-4 text-sm">
          <LinkArrow href={lessonHref(challenge.lesson)}>
            {T.relatedLesson}: {lessonCode(challenge.lesson)}
          </LinkArrow>
        </p>
      </CardContent>
    </Card>
  );
}
