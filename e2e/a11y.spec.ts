import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const PAGES = [
  "/",
  "/roadmap",
  "/guide/setup",
  "/concepts",
  "/workflows",
  "/glossary",
  "/practice",
  "/progress",
  "/packages",
  "/mentor",
  "/contact",
  "/faq",
  "/about",
  "/changelog",
  "/privacy",
];

for (const scheme of ["light", "dark"] as const) {
  for (const route of PAGES) {
    test(`${route} has no serious accessibility violations (${scheme})`, async ({ page }) => {
      await page.emulateMedia({ colorScheme: scheme, reducedMotion: "reduce" });
      await page.goto(route);
      await page.waitForLoadState("networkidle");
      await page.waitForTimeout(800); // let the reveal fade finish before measuring contrast
      const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze();
      const serious = results.violations.filter((v) => v.impact === "serious" || v.impact === "critical");
      expect(serious.map((v) => `${v.id}: ${v.help} (${v.nodes.length})`)).toEqual([]);
    });
  }
}
