import { describe, expect, it } from "vitest";

import { CHALLENGES, CHAPTERS, LESSON_DETAILS, LESSONS, LEVELS, STEPS, TERMS } from "@/modules/curriculum";

describe("guide steps", () => {
  it("has exactly 150 steps numbered 1..150 in order", () => {
    expect(STEPS).toHaveLength(150);
    expect(STEPS.map((s) => s.id)).toEqual(Array.from({ length: 150 }, (_, i) => i + 1));
  });

  it("references only existing chapters and lessons", () => {
    const chapters = new Set(CHAPTERS.map((c) => c.slug));
    const lessons = new Set(LESSONS.map((l) => l.n));
    for (const s of STEPS) {
      expect(chapters.has(s.chapter), `step ${s.id} chapter`).toBe(true);
      expect(lessons.has(s.lesson), `step ${s.id} lesson`).toBe(true);
      expect(s.command.trim(), `step ${s.id} command`).not.toBe("");
      expect(s.explain.trim(), `step ${s.id} explanation`).not.toBe("");
    }
  });

  it("gives every chapter at least one step", () => {
    for (const c of CHAPTERS)
      expect(
        STEPS.some((s) => s.chapter === c.slug),
        c.slug,
      ).toBe(true);
  });

  it("marks destructive commands with a warning", () => {
    const risky = STEPS.filter((s) => /reset --hard|push --force|branch -D|clean -fd/.test(s.command));
    for (const s of risky) expect(s.danger, `step ${s.id}`).toBeTruthy();
  });
});

describe("lessons", () => {
  it("are numbered 1..25 and have details with unique slugs", () => {
    expect(LESSONS.map((l) => l.n)).toEqual(Array.from({ length: 25 }, (_, i) => i + 1));
    const slugs = Object.values(LESSON_DETAILS).map((d) => d.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const l of LESSONS) expect(LESSON_DETAILS[l.n], `lesson ${l.n}`).toBeDefined();
  });

  it("belong to a known level and link only to https sources", () => {
    const levels = new Set(LEVELS.map((l) => l.name));
    for (const l of LESSONS) expect(levels.has(l.level)).toBe(true);
    for (const d of Object.values(LESSON_DETAILS)) for (const s of d.sources) expect(s.href).toMatch(/^https:\/\//);
  });
});

describe("glossary and challenges", () => {
  it("has unique glossary terms", () => {
    const names = TERMS.map((t) => t.term.toLowerCase());
    expect(new Set(names).size).toBe(names.length);
  });

  it("has challenges whose starting order is a real shuffle of the answer", () => {
    for (const c of CHALLENGES) {
      expect(c.initial).toHaveLength(c.correct.length);
      expect([...c.initial].sort((a, b) => a - b)).toEqual(c.correct.map((_, i) => i));
      expect(
        c.initial.every((v, i) => v === i),
        `${c.id} must not start solved`,
      ).toBe(false);
    }
  });
});
