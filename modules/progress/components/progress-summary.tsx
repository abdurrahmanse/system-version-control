"use client";

import { CheckCheck, ListChecks, Swords } from "lucide-react";

import { PROGRESS_UI as T } from "@/modules/progress/data/progress";
import { useProgress } from "@/modules/progress/hooks/use-progress";
import { StatCard } from "@/shared/components/cards/stat-card";
import { formatRelative } from "@/shared/lib/format";
import { Progress } from "@/shared/ui/progress";

export function ProgressSummary() {
  const { hydrated, summary, persisted } = useProgress();
  const pct = hydrated ? summary.percent : 0;
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-baseline justify-between">
          <p className="font-heading text-3xl font-bold">{T.percent(pct)}</p>
          <p className="font-label text-xs tracking-wider text-muted-foreground uppercase">
            {T.lastActivity}: {hydrated && persisted.lastActivity ? formatRelative(persisted.lastActivity) : T.never}
          </p>
        </div>
        <Progress value={pct} aria-label={T.percent(pct)} />
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard
          icon={CheckCheck}
          value={`${hydrated ? summary.lessons : 0}/${summary.totals.lessons}`}
          label={T.lessonsDone}
        />
        <StatCard
          icon={ListChecks}
          value={`${hydrated ? summary.steps : 0}/${summary.totals.steps}`}
          label={T.stepsDone}
        />
        <StatCard
          icon={Swords}
          value={`${hydrated ? summary.challenges : 0}/${summary.totals.challenges}`}
          label={T.challengesDone}
        />
      </div>
    </div>
  );
}
