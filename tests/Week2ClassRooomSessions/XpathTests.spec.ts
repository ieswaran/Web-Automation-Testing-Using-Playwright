import { test } from "@playwright/test";

test("Xpath", async ({ page }) => {
  await page.goto("http://leaftaps.com/opentaps");
  await page.locator("//input[@id='username']").fill("DemoCSR2");
  await page.locator("//input[@type='password']").fill("crmsfa");
  await page.click("//input[@type='submit']");
  await page.locator("//a[contains(text(),'CRM')]").click();
});
