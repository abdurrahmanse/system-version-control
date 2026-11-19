import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

import { describe, expect, it } from "vitest";

const ROOT = join(import.meta.dirname, "..", "..");
const CONTAINER_FILE = "shared/components/layout/container.tsx";

function sources(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) return name === "__tests__" || name === "ui" ? [] : sources(full);
    return /\.(ts|tsx)$/.test(name) ? [full] : [];
  });
}

describe("layout consistency", () => {
  const files = ["app", "modules", "shared"].flatMap((d) => sources(join(ROOT, d)));

  it("defines the page width in exactly one place (the Container)", () => {
    const offenders = files
      .filter((f) => readFileSync(f, "utf8").includes("max-w-6xl"))
      .map((f) => relative(ROOT, f))
      .filter((f) => f !== CONTAINER_FILE);
    expect(offenders).toEqual([]);
  });

  it("never re-implements side gutters with raw px-4 sm:px-6 outside the Container", () => {
    const offenders = files
      .filter((f) => /px-4 sm:px-6/.test(readFileSync(f, "utf8")))
      .map((f) => relative(ROOT, f))
      .filter((f) => f !== CONTAINER_FILE);
    expect(offenders).toEqual([]);
  });
});
