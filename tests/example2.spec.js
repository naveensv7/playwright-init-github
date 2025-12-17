import { expect, test } from "@playwright/test";

test("this is to check differet test", async ({ page }) => {
  page.on("console", (data) => {
    console.log(data);
  });
  await page.evaluate((name) => {
    console.log("This is to check different tests");
    console.log(name);
  }, "this is outside command");
});
