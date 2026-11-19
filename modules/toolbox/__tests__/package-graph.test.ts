import { describe, expect, it } from "vitest";

import { PACKAGE_GROUPS } from "@/modules/toolbox/data/packages";
import { groupSlug, packageGraph, targetsOf } from "@/modules/toolbox/lib/package-graph";

describe("targetsOf", () => {
  it("reads modules, shared, app and tooling from usedIn paths", () => {
    expect(targetsOf("modules/contact/server.ts, modules/search/hooks/use-search-query.ts")).toEqual([
      "contact",
      "search",
    ]);
    expect(targetsOf("shared/api/http-client.ts")).toEqual(["shared"]);
    expect(targetsOf("next.config.ts")).toEqual(["tooling"]);
    expect(targetsOf("app/providers.tsx")).toEqual(["app"]);
  });
});

describe("packageGraph", () => {
  const { nodes, edges } = packageGraph(PACKAGE_GROUPS);

  it("has a node for every group and only references existing nodes", () => {
    const ids = new Set(nodes.map((n) => n.id));
    expect(nodes.filter((n) => n.col === 0)).toHaveLength(PACKAGE_GROUPS.length);
    for (const e of edges) {
      expect(ids.has(e.from)).toBe(true);
      expect(ids.has(e.to)).toBe(true);
    }
  });

  it("creates unique, readable slugs for the group pages", () => {
    const slugs = PACKAGE_GROUPS.map((g) => groupSlug(g.title));
    expect(new Set(slugs).size).toBe(slugs.length);
    expect(groupSlug("Forms and validation")).toBe("forms-and-validation");
  });
});
