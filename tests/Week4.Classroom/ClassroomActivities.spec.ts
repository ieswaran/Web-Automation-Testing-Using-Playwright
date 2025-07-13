import { test } from '@playwright/test';

test("Frame Alert", async ({ page }) => {
  page.on("dialog", async (dialog) => {
	console.log(`Dialog Type is ${dialog.type()}`);
	if (dialog.type() === 'confirm') {
	  // Decide whether to accept (OK) or dismiss (Cancel)
	  // For this test, let's accept it (click OK)
	  await dialog.accept(); // Clicks 'OK'
	  // To click 'Cancel', you would use: await dialog.dismiss();
	  console.log("Confirm dialog accepted (OK).");
	  await page.waitForTimeout(4000);
	} else {
	  // Handle other dialog types if they might appear
	  await dialog.accept(); // Default to accepting other types
	  console.log(`Non-confirm dialog of type ${dialog.type()} accepted.`);
	}
  });

  await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");
  await page.frameLocator("#iframeResult").getByRole('button', { name: 'Try it' }).click();
});