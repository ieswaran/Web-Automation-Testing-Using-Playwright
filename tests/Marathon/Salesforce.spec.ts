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
    //const casePageTitle = await page.title();
    //expect(casePageTitle).toContain('Cases | Salesforce');

    await page.locator("//div[@title='New']").click();
    await page.waitForTimeout(2000); // Wait for the New Case modal to load
    
    await page.locator("//button[@aria-label='Case Origin']").click();
    await page.waitForTimeout(2000); // Wait for the status dropdown to load
    await page.locator("//div[@aria-label='Case Origin']//span[text()='Phone']").click();    
    await page.waitForTimeout(3000); // Wait for the status to be selected
    await page.locator("//input[@placeholder='Search Contacts...']").click();
    await page.waitForTimeout(2000); // Wait for the search input to be ready
    await page.locator("//span[text()='New Contact']").click();
    await page.waitForTimeout(2000); // Wait for the New Contact modal to load

     // Wait for the salutation dropdown to load    
     // Wait for the salutation to be selected
    await page.locator("//input[@placeholder='First Name']").fill('Ananth');
    await page.locator("//input[@placeholder='Last Name']").fill('Eswaran');
    await page.waitForTimeout(5000);
    
    await page.locator("//button[@aria-label='Salutation']").click();
    await page.waitForTimeout(2000);    
    await page.locator("//lightning-base-combobox-item//span[text()='Mr.']").click();
    await page.waitForTimeout(5000)
    await page.locator("//button[@aria-label='Save']").click();
    await page.waitForTimeout(2000); // Wait for the contact to be saved
    }); 

});