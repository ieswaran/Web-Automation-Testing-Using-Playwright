/*
1. Login to https://login.salesforce.com
2. Click on toggle menu button from the left corner
3. Click view All and click Sales from App Launcher
4. Click on Leads tab
5. Click on New button
6. Select Salutation dropdown
7. Enter the Last Name
8. Enter the Company Name
9. Click Save and Verify Leads name created

*/

import { test, expect, chromium} from "@playwright/test";

test("Create Lead in Salesforce", async ({page})=>{

    await page.goto("https://login.salesforce.com");
    await page.fill('#username','udaya18udai318@agentforce.com'); 
    await page.fill('#password','Sales@123');
    await page.locator('input[name="Login"]').click();     
    await page.locator("//span[text()='App Launcher']").click();
    await page.waitForTimeout(2000); // Wait for the app launcher to load

    await page.locator("//button[text()='View All']").click();
    await page.waitForTimeout(2000); // Wait for the app launcher to load
})