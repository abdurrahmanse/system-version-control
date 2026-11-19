import { describe, expect, it } from "vitest";

import { lessonDtoSchema, LESSONS, lessonsQuerySchema } from "@/modules/curriculum";
import { inMemoryLessonRepository } from "@/modules/curriculum/server";

describe("inMemoryLessonRepository", () => {
  it("lists every lesson as a valid DTO", async () => {
    const all = await inMemoryLessonRepository.list();
    expect(all).toHaveLength(LESSONS.length);
    for (const l of all) expect(lessonDtoSchema.safeParse(l).success).toBe(true);
  });

  it("filters by level", async () => {
    const beginner = await inMemoryLessonRepository.list({ level: "Beginner" });
    expect(beginner).toHaveLength(4);
    expect(beginner.every((l) => l.level === "Beginner")).toBe(true);
  });

  it("finds a lesson by slug", async () => {
    expect((await inMemoryLessonRepository.findBySlug("undo"))?.n).toBe(8);
    expect(await inMemoryLessonRepository.findBySlug("missing")).toBeUndefined();
  });

  it("rejects an unknown level in the query schema", () => {
    expect(lessonsQuerySchema.safeParse({ level: "Expert" }).success).toBe(false);
  });
});
