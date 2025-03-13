import { expect } from '@playwright/test';
import { test, Given, Then, When } from '../../../fixture/customFixtures.js';

 
 When('Admin clicks the Class Navigation bar in the Header', async ({classPageFixture}) => {
    console.log("Admin clicks the Class Navigation bar in the Header");
   await classPageFixture.clickClassMenu();
  });
  
  Then('Admin should land on the Manage class page', async ({classPageFixture}) => {
    console.log("Admin should land on the Manage class page");
    await expect(classPageFixture.manageClassText).toBeVisible();
  });