import { expect, test } from "@playwright/test";

test("breadcrumbs show where you are and link to every parent", async ({ page }) => {
  await page.goto("/roadmap/undo");
  const trail = page.getByRole("navigation", { name: "Breadcrumb" });
  await expect(trail.getByRole("link", { name: "Home" })).toBeVisible();
  await expect(trail.getByRole("link", { name: "Roadmap" })).toHaveAttribute("href", "/roadmap");
  await expect(trail.getByText("Undo anything")).toHaveAttribute("aria-current", "page");
});

test("the trail remembers the page you came from and offers a way back", async ({ page }) => {
  await page.goto("/roadmap");
  await page.getByRole("link", { name: /L03/ }).first().click();
  await expect(page).toHaveURL(/\/roadmap\/first-commits/);
  await expect(page.getByRole("link", { name: /Back to Roadmap/ })).toBeVisible();
  await page.getByRole("link", { name: /Back to Roadmap/ }).click();
  await expect(page).toHaveURL(/\/roadmap$/);
});

test("history menu lists the pages you visited", async ({ page }) => {
  await page.goto("/");
  await page.goto("/guide");
  await page.goto("/glossary");
  await page.getByRole("button", { name: "Recently visited" }).click();
  const list = page.getByRole("dialog");
  await expect(list.getByRole("link", { name: /Glossary/ })).toBeVisible();
  await expect(list.getByRole("link", { name: /Guide/ })).toBeVisible();
  await page.getByRole("button", { name: "Clear history" }).click();
  await expect(page.getByText("No pages visited yet.")).toBeVisible();
});

test("flowchart steps are links to lessons", async ({ page }) => {
  await page.goto("/");
  await page
    .getByRole("link", { name: /Commit/ })
    .filter({ hasText: "git commit" })
    .first()
    .click();
  await expect(page).toHaveURL(/\/roadmap\/first-commits/);
});
