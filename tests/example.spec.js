// @ts-check
import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/", {
    waitUntil: "load",
  });

  // Expect a title "to contain" a substring.
  await page.click("//button[text()='Home']");

  await expect(page).toHaveURL("https://rahulshettyacademy.com/");

  await page.waitForTimeout(3000);
});
