/* 
Home Assignment <2.2>
Red Bus and Flipkart in Edge and Firefox Browser Instances (Week2.Day2)
Learning Objective:
 Learn how to automate basic navigation to two different websites (Red Bus and Flipkart)
in two separate browser instances (Edge and Firefox) using Playwright.
Expected Completion Time:
 Best Case: 15 minutes
 Average Case: 20 minutes
Assignment Details:
Task:
Your task is to launch two separate browser instances using Playwright:
1. 2. Load Red Bus in an Edge browser instance and verify the page title and URL.
Load Flipkart in a Firefox browser instance and verify the page title and URL.
Preconditions:
1. 2. Use Playwright to launch Edge and Firefox.
Create two separate browser instances.
3. Use the following URLs:
o Red Bus: https://www.redbus.in
o Flipkart: https://www.flipkart.com
Requirements:
 Red Bus (Edge):
 Flipkart (Firefox):
o Load the home page and print the page title and current URL.
o Load the home page and print the page title and current URL.
Hints:
 Use page.title() to retrieve the page title.
 Use page.url() to retrieve the current page URL.
Expected Outcome:
 Upon completion, you should be able to navigate two websites in two separate browser
instances (Edge and Firefox), retrieve page information, and print the page titles and
URLs.

*/
import { test, expect, chromium, firefox } from "@playwright/test";

test.describe("Red Bus and Flipkart Navigation Tests", () => {
  test("Red Bus in Edge Browser", async () => {
    // Launch Edge browser
    const edgeBrowser = await chromium.launch({ channel: 'msedge' });
    const edgeContext = await edgeBrowser.newContext();
    const edgePage = await edgeContext.newPage();

    // Navigate to Red Bus
    await edgePage.goto("https://www.redbus.in");

    // Get and print page title and URL
    const redBusTitle = await edgePage.title();
    const redBusUrl = await edgePage.url();
    console.log(`Red Bus Page Title: ${redBusTitle}`);
    console.log(`Red Bus Page URL: ${redBusUrl}`);

    // Close the Edge browser context and browser
    await edgeContext.close();
    await edgeBrowser.close();
  });

  test("Flipkart in Firefox Browser", async () => {
    // Launch Firefox browser
    const firefoxBrowser = await firefox.launch();
    const firefoxContext = await firefoxBrowser.newContext();
    const firefoxPage = await firefoxContext.newPage();

    // Navigate to Flipkart
    await firefoxPage.goto("https://www.flipkart.com");

    // Get and print page title and URL
    const flipkartTitle = await firefoxPage.title();
    const flipkartUrl = await firefoxPage.url();
    console.log(`Flipkart Page Title: ${flipkartTitle}`);
    console.log(`Flipkart Page URL: ${flipkartUrl}`);

    // Close the Firefox browser context and browser
    await firefoxContext.close();
    await firefoxBrowser.close();
  });
});