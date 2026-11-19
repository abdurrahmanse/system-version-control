import { describe, expect, it } from "vitest";

import { crumbsFor, titleFor } from "@/modules/navigation";

describe("titleFor", () => {
  it("names top-level pages, lessons and chapters", () => {
    expect(titleFor("/")).toBe("Home");
    expect(titleFor("/glossary")).toBe("Glossary");
    expect(titleFor("/roadmap/undo")).toBe("Undo anything");
    expect(titleFor("/guide/branching")).toBe("5. Branching and merging");
    expect(titleFor("/privacy")).toBe("Privacy");
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
