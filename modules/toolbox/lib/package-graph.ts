import type { PackageGroup } from "@/modules/toolbox/data/packages";

// Which part of the project a package is used in, read from its `usedIn` paths.
export function targetsOf(usedIn: string): string[] {
  const targets = new Set<string>();
  for (const raw of usedIn.split(",")) {
    const path = raw.trim();
    const mod = /^modules\/([a-z-]+)\//.exec(path);
    if (mod?.[1]) targets.add(mod[1]);
    else if (path.startsWith("shared/")) targets.add("shared");
    else if (path.startsWith("app/")) targets.add("app");
    else if (path) targets.add("tooling");
  }
  return [...targets];
}

export const groupSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

// Package categories on the left, the parts of the project that use them on the right.
export function packageGraph(groups: readonly PackageGroup[]) {
  const links = groups.map((g) => ({
    group: g,
    targets: [...new Set(g.items.flatMap((i) => targetsOf(i.usedIn)))].sort(),
  }));
  const targets = [...new Set(links.flatMap((l) => l.targets))].sort();
  const nodes = [
    ...links.map((l, row) => ({
      id: `g-${groupSlug(l.group.title)}`,
      title: l.group.title,
      text: `${l.group.items.length} packages`,
      href: `/packages/${groupSlug(l.group.title)}`,
      col: 0,
      row,
    })),
    ...targets.map((t, row) => ({ id: `t-${t}`, title: t, col: 1, row })),
  ];
  const edges = links.flatMap((l) => l.targets.map((t) => ({ from: `g-${groupSlug(l.group.title)}`, to: `t-${t}` })));
  return { nodes, edges };
}
