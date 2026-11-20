import { expect, test } from "@playwright/test";

test("search palette finds a lesson and navigates", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Control+k");
  await page.getByPlaceholder(/search lessons/i).fill("rebase");
  const hit = page.getByRole("option", { name: /rebase/i }).first();
  await expect(hit).toBeVisible(); // results come from /api/search after a short debounce
  await hit.click();
  await expect(page).toHaveURL(/roadmap|guide|glossary|tracks/);
});

test("guide filter is stored in the URL", async ({ page }) => {
  await page.goto("/guide");
  await page.getByLabel("Filter commands…").fill("stash");
  await expect(page).toHaveURL(/q=stash/);
  await expect(page.getByText("git stash push", { exact: false }).first()).toBeVisible();
});

test("progress persists across reloads", async ({ page }) => {
  await page.goto("/roadmap/setup");
  await page.getByRole("button", { name: "Mark done" }).first().click();
  await expect(page.getByRole("button", { name: "Done" }).first()).toBeVisible();
  await page.reload();
  await expect(page.getByRole("button", { name: "Done" }).first()).toBeVisible();
});

test("a practice challenge can be checked", async ({ page }) => {
  await page.goto("/practice/ship-feature");
  await page.getByRole("button", { name: "Check order" }).click();
  await expect(page.getByText("Not quite").first()).toBeVisible();
});

test("feedback form validates and submits", async ({ page }) => {
  await page.goto("/contact");
  await page.getByRole("button", { name: "Send feedback" }).click();
  await expect(page.getByRole("alert").first()).toBeVisible();
});

test("mobile menu opens", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 800 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();
  await expect(page.getByRole("link", { name: "Roadmap" }).last()).toBeVisible();
});

test("pages slide in when you move between pages of the same section", async ({ page }) => {
  await page.goto("/tracks/beginner");
  // Watch for the slide before navigating, so a fast animation is not missed.
  await page.evaluate(() => {
    const w = window as unknown as { slid: boolean };
    w.slid = false;
    const tick = () => {
      for (const el of document.querySelectorAll<HTMLElement>('[style*="transform"]')) {
        const m = new DOMMatrixReadOnly(getComputedStyle(el).transform);
        if (Math.abs(m.m41) > 20 || Math.abs(m.m42) > 20) w.slid = true;
      }
      requestAnimationFrame(tick);
    };
    tick();
  });
  await page.getByRole("navigation", { name: "Learning tracks" }).getByRole("link", { name: "Quiz" }).click();
  await expect(page).toHaveURL(/\/tracks\/beginner\/quiz/);
  await page.waitForFunction(() => (window as unknown as { slid: boolean }).slid, undefined, { timeout: 3000 });
});
