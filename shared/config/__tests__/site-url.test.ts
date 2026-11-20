import { describe, expect, it } from "vitest";

import { resolveSiteUrl } from "@/shared/config/site-url";

describe("resolveSiteUrl", () => {
  it("prefers the explicit public URL", () => {
    expect(
      resolveSiteUrl({ NEXT_PUBLIC_SITE_URL: "https://example.org", VERCEL_PROJECT_PRODUCTION_URL: "x.vercel.app" }),
    ).toBe("https://example.org");
  });

  it("falls back to the Vercel production host and adds https", () => {
    expect(resolveSiteUrl({ VERCEL_PROJECT_PRODUCTION_URL: "system-version-control.vercel.app" })).toBe(
      "https://system-version-control.vercel.app",
    );
  });

  it("trims whitespace and trailing slashes", () => {
    expect(resolveSiteUrl({ NEXT_PUBLIC_SITE_URL: "  https://example.org/// " })).toBe("https://example.org");
  });

  it("returns undefined when nothing is configured", () => {
    expect(resolveSiteUrl({})).toBeUndefined();
    expect(resolveSiteUrl({ NEXT_PUBLIC_SITE_URL: "", VERCEL_PROJECT_PRODUCTION_URL: " " })).toBeUndefined();
  });
});
