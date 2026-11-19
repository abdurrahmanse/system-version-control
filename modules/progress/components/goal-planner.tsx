"use client";

import { parseISO } from "date-fns";
import { CalendarDays } from "lucide-react";
import { useState } from "react";

import { PROGRESS_UI as T } from "@/modules/progress/data/progress";
import { useProgress } from "@/modules/progress/hooks/use-progress";
import { paceForGoal } from "@/modules/progress/lib/study-plan";
import { useProgressStore } from "@/modules/progress/store/progress-store";
import { formatDate, toIsoDate } from "@/shared/lib/format";
import { Button } from "@/shared/ui/button";
import { Calendar } from "@/shared/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";

// Pick a finish date (react-day-picker) and see the weekly pace needed (date-fns).
export function GoalPlanner() {
  const { hydrated, persisted, summary } = useProgress();
  const setGoal = useProgressStore((s) => s.setGoal);
  const clearGoal = useProgressStore((s) => s.clearGoal);
  const [open, setOpen] = useState(false);

  const goal = hydrated ? persisted.goalDate : null;
  const remaining = summary.totals.lessons - summary.lessons;
  const pace = goal ? paceForGoal(goal, remaining, new Date()) : null;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading text-xl">{T.goalTitle}</CardTitle>
        <CardDescription>{T.goalDescription}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <CalendarDays data-icon="inline-start" />
                {goal ? formatDate(goal) : T.goalNone}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={goal ? parseISO(goal) : undefined}
                onSelect={(date) => {
                  if (date) setGoal(toIsoDate(date));
                  setOpen(false);
                }}
              />
            </PopoverContent>
          </Popover>
          {goal ? (
            <Button variant="ghost" onClick={clearGoal}>
              {T.goalClear}
            </Button>
          ) : null}
        </div>
        {pace ? (
          <p role="status" className="text-sm">
            {"past" in pace ? T.goalPast : T.goalPace(String(pace.perWeek), pace.weeks)}
          </p>
        ) : null}
      </CardContent>
    </Card>
  );
}
