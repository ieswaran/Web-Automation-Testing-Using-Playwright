import {test, expect} from '@playwright/test';

test.describe('Salesforce', () => {
  
    test('Verify Salesforce login page', async ({page}) => {    

    await page.goto('https://login.salesforce.com/');
    await expect(page).toHaveTitle(/Salesforce/);
    await page.locator('input[name="username"]').fill('udaya18udai318@agentforce.com');
    await page.locator('input[name="pw"]').fill('Sales@123');
    await page.locator('input[name="Login"]').click();     
    await page.locator("//span[text()='App Launcher']").click();
    await page.waitForTimeout(2000); // Wait for the app launcher to load

    await page.locator("//button[text()='View All']").click();
    await page.waitForTimeout(2000); // Wait for the app launcher to load
    // await page.locator("input[placeholder='Search apps or items...']").fill('Service'); 
    // await page.keyboard.press('Enter');
    await page.locator("//p[@title='Manage customer service with accounts, contacts, cases, and more']").click();
    await page.waitForTimeout(2000); // Wait for the Cases page to load

    await page.locator("//span[text()='Cases']").click(); 

    await page.waitForTimeout(2000); // Wait for the Cases page to load
    const casePageTitle = await page.title();
    expect(casePageTitle).toContain('Cases | Salesforce');

    await page.locator("//div[@title='New']").click();
    await page.waitForTimeout(2000); // Wait for the New Case modal to load
    
    await page.locator("//button[@aria-label='Status']").click();
    await page.waitForTimeout(2000); // Wait for the status dropdown to load
    

    
    });

});