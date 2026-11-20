import { describe, expect, it } from "vitest";

import { TRACKS } from "@/modules/tracks";
import { LEVEL_LINKS, LEVEL_PAGES, NAV_GROUPS } from "@/shared/config/site";

describe("level navigation", () => {
  it("lists exactly the tracks", () => {
    expect(LEVEL_LINKS.map((level) => level.slug)).toEqual(TRACKS.map((track) => track.slug));
  });

  it("puts every level page in the mega menu", () => {
    const levels = NAV_GROUPS.find((group) => group.label === "Levels");
    expect(levels?.items).toHaveLength(LEVEL_LINKS.length * LEVEL_PAGES.length);
  });
});
