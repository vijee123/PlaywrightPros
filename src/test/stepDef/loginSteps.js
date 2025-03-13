
import { expect } from '@playwright/test';
import { test, Given, Then, When } from '../../../fixture/customFixtures.js';


When('Admin enter valid data in all field and clicks login button', async ({loginPageFixture }) => {
  console.log("Admin enters valid data in all fields and clicks login button");
  await loginPageFixture.validLogin("playwrightuser@gmail.com", "Playwright@1234");
});

Then('Admin should land on home page', async ({loginPageFixture }) => {
  console.log("Admin should land on home page");
  await expect(loginPageFixture.LMSDisplayHomePage).toBeVisible();
});