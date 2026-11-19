import { expect, test } from "@playwright/test";

// The five device classes the site is designed for.
const DEVICES = [
  { name: "small phone", width: 360, height: 740 },
  { name: "large phone", width: 414, height: 896 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "laptop", width: 1280, height: 800 },
  { name: "large desktop", width: 1920, height: 1080 },
] as const;

const ROUTES = [
  "/",
  "/path/beginner",
  "/roadmap",
  "/roadmap/undo",
  "/guide",
  "/guide/branching/47",
  "/concepts",
  "/concepts/history",
  "/concepts/mistakes",
  "/workflows/github-flow",
  "/workflows/undo",
  "/glossary",
  "/practice/ship-feature",
  "/progress/lessons",
  "/packages",
  "/mentor/how-it-answers",
  "/contact",
];

for (const device of DEVICES) {
  test.describe(`${device.name} (${device.width}px)`, () => {
    test.use({ viewport: { width: device.width, height: device.height } });

    test("no page scrolls sideways", async ({ page }) => {
      for (const route of ROUTES) {
        await page.goto(route, { waitUntil: "networkidle" });
        const overflow = await page.evaluate(
          () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
        );
        expect(overflow, `${route} overflows by ${overflow}px`).toBeLessThanOrEqual(1);
      }
    });

    test("navigation fits the screen", async ({ page }) => {
      await page.goto("/");
      const mobile = device.width < 768;
      await expect(page.getByRole("button", { name: "Open menu" })).toBeVisible({ visible: mobile });
      await expect(page.getByRole("button", { name: /Learn/ })).toBeVisible({ visible: !mobile });
      await expect(page.getByRole("button", { name: "Change theme" })).toBeVisible();
    });
  });
}
