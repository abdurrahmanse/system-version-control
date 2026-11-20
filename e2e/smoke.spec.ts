import { expect, test } from "@playwright/test";

const ROUTES = [
  "/",
  "/tracks",
  "/tracks/beginner",
  "/tracks/beginner/practice",
  "/tracks/beginner/commands",
  "/tracks/beginner/quiz",
  "/tracks/intermediate/tasks",
  "/tracks/advanced/checklist",
  "/tracks/pro-max/mistakes",
  "/tracks/enterprise/terms",
  "/tracks/enterprise/practice",
  "/roadmap",
  "/roadmap/setup",
  "/roadmap/setup/commands",
  "/roadmap/setup/checkpoints",
  "/guide",
  "/guide/setup",
  "/guide/setup/1",
  "/concepts",
  "/concepts/history",
  "/concepts/one-change",
  "/workflows",
  "/workflows/strategies",
  "/workflows/undo",
  "/glossary",
  "/glossary/commit",
  "/practice",
  "/practice/ship-feature",
  "/progress",
  "/progress/lessons",
  "/progress/charts",
  "/packages",
  "/packages/forms-and-validation",
  "/mentor",
  "/mentor/how-it-answers",
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
