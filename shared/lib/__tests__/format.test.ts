import { describe, expect, it } from "vitest";

import { formatDate, formatShort, toIsoDate } from "@/shared/lib/format";
import { cn } from "@/shared/lib/utils";

describe("format", () => {
  it("formats ISO dates", () => {
    expect(formatShort("2026-03-05")).toBe("5 Mar 2026");
    expect(formatDate("2026-03-05")).toContain("2026");
    expect(toIsoDate(new Date(2026, 2, 5))).toBe("2026-03-05");
  });
});

describe("cn", () => {
  it("merges and de-duplicates tailwind classes", () => {
    expect(cn("p-2", "p-4")).toBe("p-4");
    expect(cn("a", false && "b", "c")).toBe("a c");
  });
});
