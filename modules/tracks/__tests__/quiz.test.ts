import { describe, expect, it } from "vitest";

import { TRACKS } from "@/modules/tracks";
import { QUIZZES } from "@/modules/tracks/data/quiz";

describe("quizzes", () => {
  it("has a valid quiz for every track", () => {
    for (const track of TRACKS) {
      const questions = QUIZZES[track.slug] ?? [];
      expect(questions.length, track.slug).toBeGreaterThanOrEqual(8);
      for (const item of questions) {
        expect(item.options.length).toBe(4);
        expect(item.answer).toBeGreaterThanOrEqual(0);
        expect(item.answer).toBeLessThan(item.options.length);
        expect(new Set(item.options).size).toBe(item.options.length);
      }
    }
  });
});
