import { describe, expect, it } from "vitest";

import { buildSearchIndex } from "@/modules/search";
import { searchItems } from "@/modules/search/lib/search-service";
import { searchParamsSchema } from "@/modules/search/schemas/search";
import { runSearch } from "@/modules/search/server";

describe("searchItems", () => {
  const index = buildSearchIndex();

  it("returns nothing for an empty query", () => {
    expect(searchItems(index, "   ")).toEqual([]);
  });

  it("ranks exact and prefix title matches first", () => {
    const results = searchItems(index, "rebase");
    expect(results.length).toBeGreaterThan(0);
    expect(results[0]?.title.toLowerCase()).toContain("rebase");
  });

  it("respects the limit", () => {
    expect(searchItems(index, "git", 5)).toHaveLength(5);
  });
});

describe("server search + params", () => {
  it("shapes the response without internal keywords", () => {
    const res = runSearch("stash", 3);
    expect(res.query).toBe("stash");
    expect(res.results.length).toBeLessThanOrEqual(3);
    for (const r of res.results) expect(r).not.toHaveProperty("keywords");
  });

  it("validates query parameters", () => {
    expect(searchParamsSchema.safeParse({ q: "" }).success).toBe(false);
    expect(searchParamsSchema.safeParse({ q: "x".repeat(81) }).success).toBe(false);
    expect(searchParamsSchema.parse({ q: " git " })).toEqual({ q: "git", limit: 20 });
  });
});
