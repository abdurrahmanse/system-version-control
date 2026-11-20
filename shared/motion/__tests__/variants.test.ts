import { describe, expect, it } from "vitest";

import { directionFor, offsetFor } from "@/shared/motion/variants";

describe("page slide direction", () => {
  it("slides every route, including new sections", () => {
    for (const path of ["/", "/tracks/beginner", "/example/branches", "/about", "/unknown"]) {
      const offset = offsetFor(directionFor(path));
      expect(Math.abs(offset.x) + Math.abs(offset.y), path).toBeGreaterThan(0);
    }
  });
});
