/*Assignment: 1 Create a Lead
1. Navigate to the url   http://leaftaps.com/opentaps/control/main
2. Enter the username as ‘Demosalesmanager’
3. Enter the password as ‘crmsfa’
4. Click the Login button
5. Click CRM/SFA
6. Click Leads
7. Click Create Lead
8. Fill the Company Name
9. Fill the First Name
10. Fill the Last Name
11. Fill the Salutation
12. Fill the Title
13. Fill the Annual Revenue
14. Fill the Department
15. Fill the Phone number
16. Click Create Lead button
17. Verify the company name, first name, last name and the status using auto retrying and nonretrying assertions */

import {test, expect} from '@playwright/test'
test('Create Lead on Leaftaps', async ({page})=>{

    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.fill('#username','Demosalesmanager')
    await page.fill('#password','crmsfa')
    await page.locator("//input[@class='decorativeSubmit']").click()
    await page.waitForTimeout(2000)
    await page.locator("//a[contains(text(),'CRM/SFA')]").click()
    await page.locator("//a[text()='Leads']").click() 
    await page.locator("//a[text()='Create Lead']").click();
    await page.fill('#createLeadForm_companyName','Eswaran Tests Company')
    await page.fill('#createLeadForm_firstName','Eswarans')
    await page.fill('#createLeadForm_lastName','Anantharaman')
    await page.selectOption('#createLeadForm_dataSourceId','LEAD_EMPLOYEE')
    await page.selectOption('#createLeadForm_industryEnumId','IND_FINANCE')
    await page.waitForTimeout(2000);
    //await page.selectOption('#createLeadForm_ownershipEnumId','OWN_PUBLIC')
    await page.waitForTimeout(2000);
    await page.fill('#createLeadForm_annualRevenue','1000000')
    await page.fill('#createLeadForm_departmentName','Finance')
    await page.fill('#createLeadForm_primaryPhoneNumber','1234567890')
    await page.locator("//input[@name='submitButton']").click()

    await page.waitForTimeout(30000);

    await expect(page.locator("//span[@id='viewLead_companyName_sp']")).toContainText('Eswaran Tests Company')
    await expect(page.locator("//span[@id='viewLead_firstName_sp']")).toContainText('Eswaran')
    await expect(page.locator("//span[@id='viewLead_lastName_sp']")).toContainText('Anantharaman')
    await expect(page.locator("//span[@id='viewLead_annualRevenue_sp']")).toContainText('1,000,000')
    await expect(page.locator("//span[@id='viewLead_departmentName_sp']")).toContainText('Finance')
    await expect(page.locator("//span[@id='viewLead_primaryPhoneNumber_sp']")).toContainText('1234567890')  

    await page.close();

})