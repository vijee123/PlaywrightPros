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

  Then('Admin should see the Manage Class Header', async ({classPageFixture}) => {
    console.log("Admin should see the Manage class Header...");
    await expect(classPageFixture.manageClassText).toBeVisible();
  });

  Then('Admin should see the Search bar in the Manage Class page', async ({classPageFixture}) => {
    console.log("Admin should see the SEARCH text box in Manage class...");
    await expect(classPageFixture.searchTextbox).toBeVisible();
  });

  Then('Admin should see the datatable heading like {string}', async ({classPageFixture}, header) => {
    console.log("Admin should see the heading: " + header); 
    const isVisible = await classPageFixture.verifyHeaderDisplay(header);
    expect(isVisible).toBeTruthy();
  });

  Then('Admin should see the Showing x to y of z entries', async ({classPageFixture}) => {
    console.log("Admin should see the pagination text like 'Showing 1 to 5 of 7 entries'...");
    const isVisible = classPageFixture.verifyPaginationText();
    expect(isVisible).toBeTruthy();
  });
  
  Then('Admin should see the below {string} pagination controls under the data table', async ({classPageFixture},items) => {
    console.log("Admin should see the : "+ items +" under the data table...");
    await classPageFixture.verifyPaginationTextAndIcons(items);  
  });