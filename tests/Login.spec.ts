import {test, expect} from "@playwright/test";

test("Login Test", async ({ page }) => {
  // Navigate to the login page
  await page.goto("https://login.salesforce.com/?locale=in");
  await page.fill("#username", "vidyar@testleaf.com"); // Replace with your username
  await page.fill("#password", "Sales@123");
  await page.click("#Login");
  await page.waitForTimeout(10000 )
  const titlePage = await page.title()
  console.log(`The Page Title is ${titlePage}`);
  await page.waitForTimeout(10000 )
  }
);

