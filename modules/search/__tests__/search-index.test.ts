import { describe, expect, it } from "vitest";

import { LESSONS, STEPS, TERMS } from "@/modules/curriculum";
import { buildSearchIndex } from "@/modules/search";
import { ALL_NAV } from "@/shared/config/site";

describe("buildSearchIndex", () => {
  const items = buildSearchIndex();

  it("indexes pages, lessons, steps and terms", () => {
    expect(items.length).toBeGreaterThanOrEqual(ALL_NAV.length + LESSONS.length + STEPS.length + TERMS.length);
    expect(items.some((item) => item.href === "/tracks/enterprise")).toBe(true);
  });

  it("uses unique ids and internal hrefs", () => {
    expect(new Set(items.map((i) => i.id)).size).toBe(items.length);
    for (const i of items) expect(i.href.startsWith("/")).toBe(true);
  });
});
