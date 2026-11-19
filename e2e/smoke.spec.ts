import { expect, test } from "@playwright/test";

const ROUTES = [
  "/",
  "/roadmap",
  "/roadmap/setup",
  "/guide",
  "/guide/setup",
  "/concepts",
  "/workflows",
  "/glossary",
  "/practice",
  "/progress",
  "/packages",
  "/mentor",
  "/contact",
  "/about",
  "/faq",
  "/changelog",
  "/privacy",
  "/terms",
];

for (const route of ROUTES) {
  test(`${route} renders without errors`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));
    page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1").first()).toBeVisible();
    expect(errors).toEqual([]);
  });
}

test("unknown pages show the 404 page", async ({ page }) => {
  const response = await page.goto("/this-page-does-not-exist");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("health endpoint reports ok", async ({ request }) => {
  const res = await request.get("/api/health");
  expect(await res.json()).toEqual({ status: "ok" });
});
