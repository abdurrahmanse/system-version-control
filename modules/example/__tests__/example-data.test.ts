import { describe, expect, it } from "vitest";

import { BRANCH_GRAPH } from "@/modules/example/data/diagrams";
import { EXAMPLE_PAGES } from "@/modules/example/data/example";
import { EXAMPLE_STEPS } from "@/modules/example/data/steps";

describe("example data", () => {
  it("has commands for every page, each with a command and a result", () => {
    for (const page of EXAMPLE_PAGES) {
      const steps = EXAMPLE_STEPS[page.slug];
      expect(steps.length, page.slug).toBeGreaterThan(2);
      for (const step of steps) {
        expect(step.command.length).toBeGreaterThan(0);
        expect(step.effect.length).toBeGreaterThan(0);
      }
    }
  });

  it("draws a branch graph whose links and lanes all exist", () => {
    const commits = new Set(BRANCH_GRAPH.commits.map((c) => c.id));
    const lanes = new Set(BRANCH_GRAPH.lanes.map((l) => l.id));
    for (const link of BRANCH_GRAPH.links) {
      expect(commits.has(link.from), link.from).toBe(true);
      expect(commits.has(link.to), link.to).toBe(true);
    }
    for (const commit of BRANCH_GRAPH.commits) expect(lanes.has(commit.lane), commit.id).toBe(true);
  });
});
