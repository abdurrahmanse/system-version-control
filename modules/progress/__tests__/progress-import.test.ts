import { describe, expect, it } from "vitest";

import { buildExport, exportFileName } from "@/modules/progress/lib/progress-export";
import { progressExportSchema } from "@/modules/progress/schemas/progress-export";
import { validateImport } from "@/modules/progress/server";

const data = { lessons: { "1": 1 }, steps: { "1": 1, "2": 2 }, challenges: {}, goalDate: null, lastActivity: 5 };

describe("progress export / import", () => {
  it("builds a deterministic, valid backup", () => {
    const now = new Date("2026-02-03T04:05:06Z");
    const backup = buildExport(data, now);
    expect(progressExportSchema.safeParse(backup).success).toBe(true);
    expect(backup.exportedAt).toBe("2026-02-03T04:05:06.000Z");
    expect(exportFileName(now)).toBe("git-field-guide-progress-2026-02-03.json");
  });

  it("validates a good backup and summarises it", () => {
    const result = validateImport(buildExport(data, new Date()));
    expect(result.ok).toBe(true);
    if (result.ok) expect(result.response.summary).toEqual({ lessons: 1, steps: 2, challenges: 0 });
  });

  it.each([
    ["null", null],
    ["wrong app", { app: "other", version: 1, exportedAt: "x", data }],
    ["wrong version", { app: "git-field-guide", version: 2, exportedAt: "x", data }],
    ["bad data", { app: "git-field-guide", version: 1, exportedAt: "x", data: { lessons: "no" } }],
  ])("rejects %s", (_label, payload) => {
    expect(validateImport(payload).ok).toBe(false);
  });
});
