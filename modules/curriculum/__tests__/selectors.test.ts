import { describe, expect, it } from "vitest";

import {
  getChapter,
  getLessonBySlug,
  lessonCode,
  lessonHref,
  neighbours,
  stepsByChapter,
  stepsByLesson,
  termsByLetter,
} from "@/modules/curriculum";

describe("selectors", () => {
  it("formats lesson codes and hrefs", () => {
    expect(lessonCode(3)).toBe("L03");
    expect(lessonHref(1)).toBe("/roadmap/setup");
  });

  it("finds lessons and chapters by slug", () => {
    expect(getLessonBySlug("undo")?.lesson.n).toBe(8);
    expect(getLessonBySlug("nope")).toBeUndefined();
    expect(getChapter("branching")?.n).toBe(5);
  });

  it("filters steps", () => {
    expect(stepsByChapter("setup")).toHaveLength(10);
    expect(stepsByLesson(1).every((s) => s.lesson === 1)).toBe(true);
  });

  it("returns neighbours at the edges", () => {
    expect(neighbours([1, 2, 3], 0)).toEqual({ prev: undefined, next: 2 });
    expect(neighbours([1, 2, 3], 2)).toEqual({ prev: 2, next: undefined });
  });

  it("groups glossary terms by first letter", () => {
    const map = termsByLetter();
    expect([...map.keys()]).toEqual([...map.keys()].sort());
  });
});
