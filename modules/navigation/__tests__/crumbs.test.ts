import { describe, expect, it } from "vitest";

import { allSitePaths, crumbsFor, titleFor } from "@/modules/navigation";

describe("titleFor", () => {
  it("names top-level pages, lessons and chapters", () => {
    expect(titleFor("/")).toBe("Home");
    expect(titleFor("/glossary")).toBe("Glossary");
    expect(titleFor("/roadmap/undo")).toBe("Undo anything");
    expect(titleFor("/guide/branching")).toBe("5. Branching and merging");
    expect(titleFor("/privacy")).toBe("Privacy");
    expect(titleFor("/tracks")).toBe("Tracks");
    expect(titleFor("/tracks/beginner")).toBe("Beginner");
    expect(titleFor("/tracks/beginner/practice")).toBe("Practice");
    expect(titleFor("/tracks/pro-max/mistakes")).toBe("Mistakes");
    expect(titleFor("/tracks/beginner/1")).toBe("Setup");
    expect(titleFor("/tracks/beginner/1/commands")).toBe("Setup: commands");
  });
});

describe("crumbsFor", () => {
  it("has no trail on the home page", () => {
    expect(crumbsFor("/")).toEqual([]);
  });

  it("shows Home > Group > Page for a top-level page", () => {
    expect(crumbsFor("/practice")).toEqual([{ label: "Home", href: "/" }, { label: "Learn" }, { label: "Practice" }]);
  });

  it("links every ancestor on a detail page and not the last crumb", () => {
    expect(crumbsFor("/roadmap/undo")).toEqual([
      { label: "Home", href: "/" },
      { label: "Learn" },
      { label: "Roadmap", href: "/roadmap" },
      { label: "Undo anything" },
    ]);
  });

  it("handles pages outside the nav groups", () => {
    expect(crumbsFor("/terms")).toEqual([{ label: "Home", href: "/" }, { label: "Terms" }]);
  });
});

describe("every page of the site", () => {
  const paths = allSitePaths();

  it("lists a large, unique set of pages", () => {
    expect(paths.length).toBeGreaterThan(200);
    expect(new Set(paths).size).toBe(paths.length);
  });

  it("has a real title for each page (never the raw URL)", () => {
    for (const path of paths) {
      const title = titleFor(path);
      expect(title, path).not.toBe("");
      expect(title, path).not.toBe(path);
    }
  });

  it("builds a breadcrumb trail ending in the page itself", () => {
    expect(crumbsFor("/guide/branching/47").map((c) => c.label)).toEqual([
      "Home",
      "Learn",
      "Guide",
      "5. Branching and merging",
      "Step 47: Merge a branch",
    ]);
  });
});
