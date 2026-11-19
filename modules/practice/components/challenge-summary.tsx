"use client";

import { BadgeCheck } from "lucide-react";

import type { Challenge } from "@/modules/curriculum";
import { PRACTICE_UI as T } from "@/modules/practice/data/practice";
import { useProgressStore } from "@/modules/progress";
import { InfoCard } from "@/shared/components/cards/info-card";

// Short card for the practice hub. The challenge itself lives on its own page.
export function ChallengeSummary({ challenge }: { challenge: Challenge }) {
  const solved = useProgressStore((s) => Boolean(s.challenges[challenge.id]));
  return (
    <InfoCard
      icon={BadgeCheck}
      title={challenge.title}
      text={`${challenge.level} · ${challenge.goal}${solved ? ` · ${T.solved}` : ""}`}
      href={`/practice/${challenge.id}`}
    />
  );
}
