import { describe, expect, it } from "vitest";

import { levelProgress, overall, paceForGoal } from "@/modules/progress";
import type { PersistedProgress } from "@/modules/progress/schemas/progress";

const empty: PersistedProgress = { lessons: {}, steps: {}, challenges: {}, goalDate: null, lastActivity: null };

describe("progress calculations", () => {
  it("starts at zero", () => {
    const o = overall(empty);
    expect(o).toMatchObject({ lessons: 0, steps: 0, challenges: 0, percent: 0 });
  });

  it("counts completed lessons per level", () => {
    const p = { ...empty, lessons: { "1": 1, "2": 1, "9": 1 } };
    const levels = levelProgress(p);
    expect(levels.find((l) => l.level === "Beginner")).toMatchObject({ done: 2, total: 4, remaining: 2 });
    expect(levels.find((l) => l.level === "Advanced")?.done).toBe(1);
    expect(overall(p).percent).toBe(20);
  });
});

describe("paceForGoal", () => {
  const now = new Date("2026-01-01T00:00:00Z");
  it("computes lessons per week", () => {
    expect(paceForGoal("2026-01-29", 14, now)).toEqual({ weeks: 4, perWeek: 3.5 });
  });
  it("rounds partial weeks up and never returns zero weeks", () => {
    expect(paceForGoal("2026-01-03", 3, now)).toEqual({ weeks: 1, perWeek: 3 });
  });
  it("flags goals in the past", () => {
    expect(paceForGoal("2025-12-01", 5, now)).toMatchObject({ past: true });
  });
});
