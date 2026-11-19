import { differenceInCalendarDays, parseISO } from "date-fns";

export type Pace = { weeks: number; perWeek: number } | { weeks: 0; perWeek: 0; past: true };

// Pure and deterministic: `now` is injected so it can be unit-tested.
export function paceForGoal(goalIso: string, remainingLessons: number, now: Date): Pace {
  const days = differenceInCalendarDays(parseISO(goalIso), now);
  if (days <= 0) return { weeks: 0, perWeek: 0, past: true };
  const weeks = Math.max(1, Math.ceil(days / 7));
  return { weeks, perWeek: Math.round((remainingLessons / weeks) * 10) / 10 };
}
