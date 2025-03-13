import { expect } from '@playwright/test';
import { test, Given, Then, When } from '../../../fixture/customFixtures.js';

When('Admin clicks the Batch Navigation bar in the Header', async ({batchPageFixture}) => {
    console.log("Admin clicks the Batch Navigation bar...");
    await batchPageFixture.batchMenuLink.click();
  });
  
  Then('Admin should land on the Manage batch page', async ({batchPageFixture}) => {
    console.log("Admin land on Batch page....");
    await expect(batchPageFixture.manageBatchText).toBeVisible();
  });