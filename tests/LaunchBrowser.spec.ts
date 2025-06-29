import { test, expect } from '@playwright/test';

test('launch browser', async ({ page }) => {
  await page.goto('https://facebook.com/');

  // Expect a title "to contain" a substring.
 // await expect(page).toHaveTitle(/Facebook - log in or sign up/);
});