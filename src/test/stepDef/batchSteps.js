import { expect } from '@playwright/test';
import { test, Given, Then, When } from '../../../fixture/customFixtures.js';
const path = require('path');
import { chainingData } from "../utils/chainingData.js";
const { readCSV } = require('../utils/csvReader');
const csvPath = path.resolve(__dirname, '../../../test-data/batchTestData.csv');
const testData = readCSV(csvPath);

//let batch;
When('Admin clicks the Batch Navigation bar in the Header', async ({batchPageFixture}) => {
    console.log("Admin clicks the Batch Navigation bar...");
    await batchPageFixture.batchTabClick();
  });
  
  Then('Admin should land on the Manage batch page', async ({batchPageFixture}) => {
    console.log("Admin land on Batch page....");
    await expect(batchPageFixture.manageBatchText).toBeVisible();
  });

  Given('Admin logged into the application successfully and in home page', async ({}) => {
    console.log("Admin succesfully logged in to the application");
  });
  
  
    Then('Admin should see the {string} Title', async ({ batchPageFixture }, expTitle) => {
      console.log("Admin verifies the LMS title...");
      
      // Get the title text and log it for debugging
      const actTitle = await batchPageFixture.verifyLMSTitleDisplay();
      
      console.log(`Actual Title: ${actTitle}`);  // Log actual title to check
  
      // If the title is undefined, throw an error
      if (!actTitle) {
          throw new Error('LMS Title is not found or is undefined');
      }
  
      // Trim and compare with the expected value
      await expect(actTitle.trim()).toBe(expTitle);
  });
  
  Then('Admin should see the {string} Heading', async ({batchPageFixture}, expHeading) => {
    console.log("Admin verifies batch page heading...");
      
      // Get the title text and log it for debugging
      const actHeading = await batchPageFixture.manageBatchText.textContent();
      
      console.log(`Actual Heading: ${actHeading}`);  // Log actual title to check
  
      // If the title is undefined, throw an error
      if (!actHeading) {
          throw new Error('Batch page heading is not found or is undefined');
      }
  
      // Trim and compare with the expected value
      await expect(actHeading.trim()).toBe(expHeading);
  });
  
  Then('Admin should see the disabled Delete Icon under the header', async ({batchPageFixture}) => {
    await expect(batchPageFixture.verifyMultipleDeleteDisabled()).toBeTruthy();
  });

  Then('Admin should see the enabled pagination controls under the data table', async ({batchPageFixture}) => {
   await expect(batchPageFixture.verifyPaginationEnabled()).toBeTruthy();
  });
  
  Then('Admin should see the edit icon in each row', async ({batchPageFixture}) => {
    await expect(batchPageFixture.verifyEditIconVisibleInEachRow()).toBeTruthy();
    });
  
  Then('Admin should see the delete icon in each row', async ({batchPageFixture}) => {
    await expect(batchPageFixture.verifyDeleteIconVisibleInEachRow()).toBeTruthy();
  });
  
  Then('Admin should see the checkbox in each row', async ({batchPageFixture}) => {
    await expect(batchPageFixture.verifyCheckboxVisibleInEachRow()).toBeTruthy();
  });
  
  Then('Admin should see the datatable header {string}', async ({batchPageFixture},header) => {
    await expect(batchPageFixture.verifyDatatableHeaders(header)).toBeTruthy();
  });
  
  
  Then('Admin should see the checkbox  in the datatable header row', async ({batchPageFixture}) => {
    await expect(batchPageFixture.verifyCheckBoxBatchHeader()).toBeTruthy();
  });
  
  Then('Admin should see the sort icon next to all Datatable headers', async ({batchPageFixture}) => {
    await expect(batchPageFixture.verifySortIconBatchHeader()).toBeTruthy();
  });

  When('Admin enters the input with {string} and clicks save button', async ({batchPageFixture}, scenario) => {
    console.log("Admin enters the given details in the Create batch form");
    const rowData = testData.find(row => row.scenario === scenario);
if (!rowData) {
        throw new Error(`No data found for scenario: ${scenario}`);
    }

    await batchPageFixture.fillCreateBatchForm({
      programName: rowData.programName,  
      batchId: rowData.batchId,
        batchDesc: rowData.batchDesc,
        status: rowData.status,
       noOfClasses: rowData.noOfClasses
    });

    await batchPageFixture.addNewBatchSaveBtn.click();


  });
  Then('Admin should get a valid message {string} for this {string}', async ({batchPageFixture}, message, scenario) => {
    console.log("Admin should see the valid message displayed...");
    const isVisible = await batchPageFixture.verifyMessageDisplay(message,scenario);
    // if(isVisible){
    //   const rowData = batchTestData.find(row => row.scenario === scenario);
    //  const batchNew = rowData.programName + rowData.batchName;
    //  console.log("newly created batch: ",batchNew );
    //  //chainingData.setBatchName(batchNew);
    
    // //console.log("my batch name is from then: " + chainingData.getBatchName());
    //    }
    await expect(isVisible).toBeTruthy();
  });

  Given('Admin is on the Batch Details Pop Up WIndow', async ({batchPageFixture}) => {
    await batchPageFixture.batchMenuLink.click();
    await batchPageFixture.addNewBatchMenuBtn.click();
    await batchPageFixture.popUpDialog.click();
  });
  
  When('Admin checks all the fields are enabled', async ({batchPageFixture}) => {
    await batchPageFixture.popUpDialog.isVisible();
    });
  
  Then('The pop up should include the fields {string} as type {string}', async ({batchPageFixture}, field, type) => {
   
    await expect(batchPageFixture.checkFieldsInPopUp(field,type)).toBeTruthy();
  });

  When('Admin selects program name present in the dropdown', async ({batchPageFixture}) => {
    await batchPageFixture.selectRandomProgram();
  });
  
  Then('Admin should see selected program name in the batch name prefix box', async ({batchPageFixture}) => {
    await expect(batchPageFixture.VerifyBatchPrefixBox()).toBeTruthy;
  });

  When('Admin enters the valid data to all the mandatory fields and click cancel button', async ({batchPageFixture}) => {
    const scenario = "ValidInput_BatchData";
    const rowData = testData.find(row => row.scenario === scenario);
    if (!rowData) {
            throw new Error(`No data found for scenario: ${scenario}`);
        }
    
        await batchPageFixture.fillCreateBatchForm({
          programName: rowData.programName,  
          batchId: rowData.batchId,
            batchDesc: rowData.batchDesc,
            status: rowData.status,
           noOfClasses: rowData.noOfClasses
        });
    await batchPageFixture.cancelBtn.click();
    
  });
  
  Then('Admin can see the batch details popup closes without creating any batch', async ({batchPageFixture}) => {
    await expect(batchPageFixture.popUpClosedWithoutSaving()).toBeTruthy();
  });
  
  When('Admin clicks on the close icon', async ({batchPageFixture}) => {
    await batchPageFixture.closeBtn.click();
  });
  
  Then('batch details pop up closes', async ({batchPageFixture}) => {
    await expect(batchPageFixture.popUpClosed()).toBeTruthy();
  });
   








   