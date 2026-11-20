import { describe, expect, it } from "vitest";

import {
  learningPath,
  LESSON_PREREQUISITES,
  LESSON_TERMS,
  lessonEdges,
  lessonNeighbourhood,
  lessonPrerequisites,
  LESSONS,
  lessonUnlocks,
  nextLesson,
  TERMS,
} from "@/modules/curriculum";

describe("lesson graph", () => {
  it("only references existing lessons and always points backwards (no cycles)", () => {
    const numbers = new Set(LESSONS.map((l) => l.n));
    for (const [lesson, prereqs] of Object.entries(LESSON_PREREQUISITES)) {
      for (const p of prereqs) {
        expect(numbers.has(p), `lesson ${lesson} needs ${p}`).toBe(true);
        expect(p, `lesson ${lesson} needs a later lesson ${p}`).toBeLessThan(Number(lesson));
      }
    }
  });

  it("gives every lesson except the first at least one prerequisite", () => {
    for (const l of LESSONS.filter((x) => x.n > 1))
      expect(lessonPrerequisites(l.n).length, `lesson ${l.n}`).toBeGreaterThan(0);
  });

  it("links lessons to glossary terms that exist", () => {
    const names = new Set(TERMS.map((t) => t.term));
    for (const [lesson, terms] of Object.entries(LESSON_TERMS))
      for (const t of terms) expect(names.has(t), `lesson ${lesson}: ${t}`).toBe(true);
  });

  it("derives unlocks and edges consistently", () => {
    expect(lessonUnlocks(6).map((l) => l.n)).toEqual([7, 10, 11, 12]);
    expect(lessonEdges()).toContainEqual({ from: 4, to: 7 });
  });

  it("describes the neighbourhood of a lesson", () => {
    const hood = lessonNeighbourhood(8);
    expect(hood.prerequisites.map((l) => l.n)).toEqual([7]);
    expect(hood.unlocks.map((l) => l.n)).toEqual([9]);
    expect(hood.challenge?.id).toBe("undo-local-commit");
    expect(hood.chapters.map((c) => c.slug)).toContain("conflicts-and-undo");
  });
});

describe("learning path", () => {
  it("recommends lesson 1 first, then the next unlocked lesson", () => {
    expect(nextLesson(new Set())?.n).toBe(1);
    expect(nextLesson(new Set([1, 2, 3]))?.n).toBe(4);
    expect(nextLesson(new Set(Array.from({ length: 25 }, (_, i) => i + 1)))).toBeUndefined();
  });

  it("lists every lesson in order with its steps", () => {
    const path = learningPath();
    expect(path.map((p) => p.lesson.n)).toEqual(LESSONS.map((l) => l.n));
    expect(path.reduce((sum, p) => sum + p.stepCount, 0)).toBe(150);
  });
});
