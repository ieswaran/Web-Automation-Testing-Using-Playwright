import {test,expect} from '@playwright/test';
/*
https://www.telerik.com/contact
What can we help you with?  -> index 5
Product Interest -> UI for react -> label
Country/Territory -> canada -> value

*/ 
test('Dropdown Tests', async ({page}) => {
  // Navigate to the ClassRoom Sessions page
  await page.goto('https://www.telerik.com/contact');

  await page.selectOption("[id='Dropdown-1']", {index: 5});
  await page.waitForTimeout(2000); // Wait for the dropdown to update
  await page.selectOption("[id='Dropdown-2']", {label: 'UI for React'});
  await page.waitForTimeout(2000); // Wait for the dropdown to update
  await page.selectOption("[id='Country-1']", {value: 'Canada'});
  await page.waitForTimeout(2000); // Wait for the dropdown to update

});
