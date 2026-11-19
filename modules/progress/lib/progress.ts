import { CHALLENGES } from "@/modules/curriculum";
import { LESSONS, type Level, LEVELS } from "@/modules/curriculum";
import { STEPS } from "@/modules/curriculum";
import type { PersistedProgress } from "@/modules/progress/schemas/progress";

export type LevelProgress = { level: Level; done: number; remaining: number; total: number };

const isDone = (map: Record<string, number>, key: string | number) => Boolean(map[String(key)]);

const lessonDone = (p: PersistedProgress, n: number) => isDone(p.lessons, n);
const stepDone = (p: PersistedProgress, n: number) => isDone(p.steps, n);

export function levelProgress(p: PersistedProgress): LevelProgress[] {
  return LEVELS.map(({ name }) => {
    const lessons = LESSONS.filter((l) => l.level === name);
    const done = lessons.filter((l) => lessonDone(p, l.n)).length;
    return { level: name, done, remaining: lessons.length - done, total: lessons.length };
  });
}

export function overall(p: PersistedProgress) {
  const lessons = LESSONS.filter((l) => lessonDone(p, l.n)).length;
  const steps = STEPS.filter((s) => stepDone(p, s.id)).length;
  const challenges = CHALLENGES.filter((c) => isDone(p.challenges, c.id)).length;
  const percent = Math.round((lessons / LESSONS.length) * 100);
  return {
    lessons,
    steps,
    challenges,
    percent,
    totals: { lessons: LESSONS.length, steps: STEPS.length, challenges: CHALLENGES.length },
  };
}
