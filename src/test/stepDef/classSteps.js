import { expect } from '@playwright/test';
import { test, Given, Then, When } from '../../../fixture/customFixtures.js';

const path = require('path');
const { readCSV } = require('../utils/csvReader');

const csvPath = path.resolve(__dirname, '../../../test-data/classTestData.csv'); 
const testData = readCSV(csvPath);

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
    console.log(header+" Header is visible: ", isVisible);
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

  Then('Admin should see the sort icon in all the fields of the datatable', async ({classPageFixture}) => {
    console.log("Admin should see the sort icon in all the fields of the header...");
    const sortIconResults = await classPageFixture.verifySortIconDisplayInHeaderFields();
    console.log("Sort icon check results:", sortIconResults);
    const allHaveIcons = sortIconResults.every(item => item.hasSortIcon);
    await expect(allHaveIcons).toBeTruthy();
  });

  When('Admin clicks the Add New Class button', async ({classPageFixture}) => {
    console.log("Admin clicks the Create Class button...");
    await classPageFixture.clickAddNewClassButton();
  });
  
  When('Admin enters the given details {string} in the Create Class form', async ({classPageFixture}, scenario) => {
    console.log("Admin enters the given details in the Create Class form");
    // Find the matching row based on Scenario name
    const rowData = testData.find(row => row.Scenario === scenario);
    
    if (!rowData) {
        throw new Error(`No data found for scenario: ${scenario}`);
    }

    // Fill the form using the fetched data
    await classPageFixture.fillCreateClassForm({
        batchName: rowData.batchName,
        classTopic: rowData.classTopic,
        classDesc: rowData.classDesc,
        classDates: rowData.classDates,
        staffName: rowData.staffName,
        status: rowData.status,
        comments: rowData.comments,
        notes: rowData.notes,
        recording: rowData.recording
    });

  });
  
  When('Admin clicks the Save button', async ({classPageFixture}) => {
    console.log("Admin clicks the Save button");
    await classPageFixture.clickSaveButton();
  });
  
  Then('Admin should see the valid {string}', async ({classPageFixture}, arg) => {
    console.log("Admin should see the valid message");
    const isVisible = classPageFixture.classCreatedMsgDisplay();
    await expect(isVisible).toBeTruthy();
  })