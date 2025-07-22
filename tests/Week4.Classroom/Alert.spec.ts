// to Handle Alerts using Playwright
import { test, expect } from '@playwright/test';

test.describe('Alert Handling', () => {

    test('Verify Alert handling', async ({ page }) => {
        // Navigate to the alert demo page with timeout
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts', { timeout: 15000 });

        // Wait for 1 second
        await page.waitForTimeout(1000);

        // Set up dialog handler before clicking the button
        page.once('dialog', async dialog => {
            expect(dialog.type()).toBe('alert');
            expect(dialog.message()).toBe('I am a JS Alert');
            await dialog.accept();
        });

        // Click on the button to trigger the alert with timeout
        await page.locator('button:has-text("Click for JS Alert")').click({ timeout: 5000 });

        // Wait for 1 second
        await page.waitForTimeout(1000);

        // Verify that the result text is updated after accepting the alert with timeout
        const resultText = await page.locator('#result').textContent({ timeout: 5000 });
        expect(resultText).toBe('You successfully clicked an alert');
    });

});