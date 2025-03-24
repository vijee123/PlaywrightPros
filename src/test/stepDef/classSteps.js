import { expect } from '@playwright/test';
import { test, Given, Then, When } from '../../../fixture/customFixtures.js';

const { faker } = require('@faker-js/faker');
const path = require('path');
const { readCSV } = require('../utils/csvReader');
const csvPath = path.resolve(__dirname, '../../../test-data/classTestData.csv');
const classTestData = readCSV(csvPath);

//import { chainingData } from "../utils/chainingData.js";
//console.log("Chaining batchName data into class Steps is: "+chainingData.getBatchName());


When('Admin clicks the Class Navigation bar in the Header', async ({ classPageFixture }) => {
  console.log("Admin clicks the Class Navigation bar in the Header");
  await classPageFixture.clickClassMenu();
});

Then('Admin should land on the Manage class page', async ({ classPageFixture }) => {
  console.log("Admin should land on the Manage class page");
  await expect(classPageFixture.manageClassText).toBeVisible();
});

Then('Admin should see the Manage Class Header', async ({ classPageFixture }) => {
  console.log("Admin should see the Manage class Header...");
  await expect(classPageFixture.manageClassText).toBeVisible();
});

Then('Admin should see the Search bar in the Manage Class page', async ({ classPageFixture }) => {
  console.log("Admin should see the SEARCH text box in Manage class...");
  await expect(classPageFixture.searchTextbox).toBeVisible();
});

Then('Admin should see the datatable heading like {string}', async ({ classPageFixture }, header) => {
  console.log("Admin should see the heading: " + header);
  const isVisible = await classPageFixture.verifyHeaderDisplay(header);
  expect(isVisible).toBeTruthy();
  console.log(header + " Header is visible: ", isVisible);
});

Then('Admin should see the Showing x to y of z entries', async ({ classPageFixture }) => {
  console.log("Admin should see the pagination text like 'Showing 1 to 5 of 7 entries'...");
  const isVisible = classPageFixture.verifyPaginationText();
  expect(isVisible).toBeTruthy();
});

Then('Admin should see the below {string} pagination controls under the data table', async ({ classPageFixture }, items) => {
  console.log("Admin should see the : " + items + " under the data table...");
  await classPageFixture.verifyPaginationTextAndIcons(items);
});

Then('Admin should see the sort icon in all the fields of the datatable', async ({ classPageFixture }) => {
  console.log("Admin should see the sort icon in all the fields of the header...");
  const sortIconResults = await classPageFixture.verifySortIconDisplayInHeaderFields();
  console.log("Sort icon check results:", sortIconResults);
  const allHaveIcons = sortIconResults.every(item => item.hasSortIcon);
  await expect(allHaveIcons).toBeTruthy();
});

When('Admin clicks the Add New Class button and enters the details of {string} in the Create Class form', async ({ classPageFixture }, scenario) => {
  console.log("Admin clicks the Create Class button...");
  //const batchName = sharedData.batchName;
  //console.log("The batchName inside CLASS STEPS is: "+sharedData.batchName);
  // const batchName = chainingData.getBatchName();
  // console.log("Chaining data of batchName in classSTeps is: ",batchName);
  await classPageFixture.clickAddNewClassButton();

  console.log("Admin enters the given details in the Create Class form");
  const rowData = classTestData.find(row => row.Scenario === scenario);

  if (!rowData) {
    throw new Error(`No data found for scenario: ${scenario}`);
  }

  // Scenarios where we want a random alphanumeric value starting with "Playwright"
  const randomClassScenarios = ["validClass", "withoutClassDesc", "withoutNotes", "withoutRec"];

  // Generate classTopic only for specified scenarios
  const classTopic = randomClassScenarios.includes(scenario)
    ? `Playwright_${faker.string.alphanumeric(3).toUpperCase()}`
    : rowData.classTopic;

  //convert dates from string to date format and remove
  const classDates = typeof rowData.classDates === 'string'
    ? rowData.classDates.replace(/^"|"$/g, '').split(',').map(date => date.trim())
    : rowData.classDates;

  console.log("Processed classDates:", classDates);

  console.log("Class Topic generated is : ", classTopic);
  console.log("The dates sent are: " + rowData.classDates);
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

  if (rowData.scenario === "EmptyBatchName") {
    classPageFixture.clickBatchNameDeleteIcon();
  };

});


When('Admin clicks the Save button', async ({ classPageFixture }) => {
  console.log("Admin clicks the Save button");
  await classPageFixture.clickSaveButton();
});


Then('Admin should see the valid {string}', async ({ classPageFixture }, message) => {
  console.log("Admin should see the valid message displayed...");
  const isVisible = classPageFixture.verifyMessageDisplay(message);
  await expect(isVisible).toBeTruthy();
})


Then('Admin should see the Delete button under the Manage class page header.', async ({ classPageFixture }) => {
  console.log("Verify the display of DELETE button under Manage Header...");
  const isVisible = await classPageFixture.verifyHeaderDeleteIconDisplay();
  await expect(isVisible).toBeTruthy();
});


Then('Admin should see footer message Total no of classes at the bottom of the Manage class page', async ({ classPageFixture }) => {
  console.log("Verify the footer message at the bottom of the Manage class page...");
  await classPageFixture.verifyClassFooterMessage("class");

});

When('Admin clicks a add new class under the class menu bar', async ({ classPageFixture }) => {
  console.log("Admin clicks the Save button");
  await classPageFixture.clickAddNewClassButton();
});

Then('Admin should see a popup open for class details with empty form along with SAVE and CANCEL button and Close\\(X) Icon', async ({ classPageFixture }) => {
  console.log("Verify whether popup opens with SAVE and CANCEL button and Close(X) Icon...");
  await expect(classPageFixture.saveButton).toBeVisible();
  await expect(classPageFixture.cancelButton).toBeVisible();
  await expect(classPageFixture.closeIcon).toBeVisible();
});

Then('Admin should see the below input fields {string} and their text boxes in the class details form', async ({ classPageFixture }, fieldNameAndBox) => {
  console.log("Verify the display of input fields and text boxes in the class details form...");
  await expect(classPageFixture.verifyFieldNameDisplay(fieldNameAndBox)).toBeTruthy();
  await expect(classPageFixture.verifyFieldBoxDisplay(fieldNameAndBox)).toBeTruthy();
});

Given('Admin is on the Class Popup window', async ({ classPageFixture }) => {
  console.log("Admin is in the class pop up window...");
  await classPageFixture.clickAddNewClassButton();
});

When('Admin selects class date in date picker', async ({ classPageFixture }) => {
  await classPageFixture.selectDates("04/07/2025, 04/08/2025");
});

Then('Admin should see no of class value is added automatically', async ({ classPageFixture }) => {
  console.log("Verify the No Of Classses displayed..");
  await expect(classPageFixture.checkNoOfClasses()).resolves.toEqual('2');
});

When('Admin clicks date picker', async ({ classPageFixture }) => {
  console.log("Clicking the Date Picker...")
  await classPageFixture.clickDatePickerBtn();
});

Then('Admin should see weekends dates are disabled to select', async ({ classPageFixture }) => {
  console.log("Checking whether all the weekends dates are disabled...")
  await classPageFixture.verifyDisabledWeekendDates();
});

When('Admin clicks Cancel button OR Close Icon {string}', async ({ classPageFixture }, Icon) => {
  console.log("Clicking Cancel Button OR the Close Icon.....")
  await classPageFixture.clickCancelOrClose(Icon);
});

Then('Class Details popup window should be closed without saving', async ({ classPageFixture }) => {
  console.log("Checking whether class details form is closed...")
  const isVisible = await classPageFixture.classDetailsFormVisibility();
  console.log(`Class Details Form is Visible: ${isVisible}`);
  expect(isVisible).toBe(false);
});

When('Admin clicks on the edit icon in the class page', async ({ classPageFixture }) => {
  console.log("Admin clicks Edit icon...")
  await classPageFixture.clickTopRowEditIcon();
});

Then('check that a new pop up with class details appears', async ({ classPageFixture }) => {
  console.log("Admin verifies the opening of Class details pop-up..")
  const isVisible = await classPageFixture.classDetailsFormVisibility();
  expect(isVisible).toBe(true);
});

Then('Admin should see class topic field is disabled', async ({ classPageFixture }) => {
  console.log("verify whether class topic field is disabled...")
  const isDisabled = await classPageFixture.classTopicFieldStatus();
  console.log("Is the Class Topic field disabled?", isDisabled);
  expect(isDisabled).toBe(true);
});

Then('Admin should see batch name field is disabled', async ({ classPageFixture }) => {
  console.log("verify whether batch name field is disabled...")
  const isDisabled = await classPageFixture.batchNameFieldStatus();
  console.log("Is the Class Topic field disabled?", isDisabled);
  expect(isDisabled).toBe(true);
});

When('Admin clicks the delete icon in the class page', async ({ classPageFixture }) => {
  console.log('Admin clicks delete icon of a class');
  const topRowClass1 = await classPageFixture.getTopRowData("class");
  console.log("Top Row Class Topic before Delete is: ", topRowClass1);
  await classPageFixture.clickTopRowDeleteIcon();
  classPageFixture.topRowClassBeforeDelete = topRowClass1;
});

Then('Admin should see a alert open with heading Confirm along with YES and NO button for deletion', async ({ classPageFixture }) => {
  console.log("verify delete confirm pops-up....")
  const isVisible = await classPageFixture.deleteConfirmPopupVisibility();
  await expect(isVisible).toBe(true);
});

When('Admin clicks No option to delete on confirm page of class', async ({ classPageFixture }) => {
  console.log("Admin clicks No option on the confirm pop-up...");
  await classPageFixture.clickNoDeleteOnConfirm();
});

Then('Admin can see the deletion alert disappears without deleting the class', async ({ classPageFixture }) => {
  console.log("Verify whether the confirm pop-up disappears without deleting...")
  const topRowClass2 = await classPageFixture.getTopRowData("class");
  console.log("Top Row Class Topic after Canceling Delete is: ", topRowClass2);
  await expect(topRowClass2).toEqual(classPageFixture.topRowClassBeforeDelete);
  const isVisible = await classPageFixture.verifyManageClassDisplay();
  await expect(isVisible).toBe(true);
});

When('Admin clicks Yes option to delete on confirm page of class', async ({ classPageFixture }) => {
  console.log("Admin clicks YES option on the confirm pop-up...");
  await classPageFixture.clickYesDeleteOnConfirm();
});

Then('Admin gets a message Successful Class Deleted alert', async ({ classPageFixture }) => {
  console.log("Verify whether the Admin gets a message Successful Class Deleted alert");
  const isVisible = await classPageFixture.singleDeleteMessageVisible("class");
  expect(isVisible).toBe(true);
});

When('Admin clicks CLose X Icon on confirm page of class', async ({ classPageFixture }) => {
  console.log('Admin clicks the CLose Icon on confirm delete window...')
  await classPageFixture.clickCloseIconDeleteConfirm();
});

Then('Do not see that Class in the data table', async ({ classPageFixture }) => {
  console.log("Verify that the selected class Topic is deleted...")
  const topRowClass2 = await classPageFixture.getTopRowData("class");
  console.log("Top Row Class Topic after Delete is: ", topRowClass2);
  await expect(topRowClass2).not.toBe(classPageFixture.topRowClassBeforeDelete);
  const isVisible = await classPageFixture.verifyManageClassDisplay();
  await expect(isVisible).toBe(true);
});

When('Admin clicks any checkbox in the data table', async ({ classPageFixture }) => {
  console.log("Admin clicks any check box...");
  await classPageFixture.clickTopRowCheckBox();
  const topRowClass1 = await classPageFixture.getTopRowData("class");
  console.log("Class checked to Delete is: ", topRowClass1);
  await classPageFixture.clickTopRowDeleteIcon();
  classPageFixture.topRowClassBeforeDelete = topRowClass1;
});


Given('Admin clicks single checkbox in the data table and clicks Multi Delete icon in class page', async ({ classPageFixture }) => {
  console.log("Admin clicks any check box...");
  await classPageFixture.clickTopRowCheckBox();
  const topRowClass1 = await classPageFixture.getTopRowData("class");
  console.log("Class checked to Delete is: ", topRowClass1);
  classPageFixture.topRowClassBeforeDelete = topRowClass1;
  await classPageFixture.clickMultiDeleteIcon();
});


Given('Admin clicks the Multi Delete icon in the class page', async ({ classPageFixture }) => {
  console.log("Admin clicks Multi Delete Icon on the table header......");
  await classPageFixture.clickMultiDeleteIcon();
});

Then('Admin gets a message Successful Classes Deleted alert', async ({ classPageFixture }) => {
  console.log("Verify whether the Admin gets a Classes Deleted alert....");
  const isVisible = await classPageFixture.multiDeleteMessageVisible("class");
  console.log("is Classes Deleted Alert Visible: " + isVisible);
  expect(isVisible).toBe(true);
});

Then('Admin should see common delete option enabled under header Manage class', async ({ classPageFixture }) => {
  console.log("Verify whether the common delete option enabled under header Manage class..");
  const isEnabled = await classPageFixture.checkMultiDeleteIconStatus();
  console.log("Is multi-delete icon enabled?:", isEnabled);
  expect(isEnabled).toBe(true);
});

Given('Admin clicks multiple checkbox in the data table and clicks Multi Delete icon in class page', async ({ classPageFixture }) => {
  console.log("Admin clicks on more than one check box...");
  await classPageFixture.clickMultipleCheckBoxes();
  const topTwoRowClasses1 = await classPageFixture.getTopTwoRowData("class");
  console.log("Classes checked for Multiple Delete are: ", topTwoRowClasses1);
  classPageFixture.topTwoRowClassesBeforeDelete = topTwoRowClasses1;
  await classPageFixture.clickMultiDeleteIcon();
});

Then('Admin can see the deletion alert disappears without deleting the selected classes', async ({ classPageFixture }) => {
  console.log("Verify whether the confirm pop-up disappears without deleting...")
  const topTwoRowClasses2 = await classPageFixture.getTopTwoRowData("class");
  console.log("Top Row Class Topic after Canceling Delete are: ", topTwoRowClasses2);
  await expect(topTwoRowClasses2).toEqual(classPageFixture.topTwoRowClassesBeforeDelete);
  const isVisible = await classPageFixture.verifyManageClassDisplay();
  await expect(isVisible).toBe(true);
});

Then('Do not see that Classes in the data table', async ({ classPageFixture }) => {
  console.log("Verify that the selected classes are deleted...")
  const topTwoRowClasses2 = await classPageFixture.getTopTwoRowData("class");
  console.log("Top Row Class Topic after Delete are: ", topTwoRowClasses2);
  await expect(topTwoRowClasses2).not.toBe(classPageFixture.topTwoRowClassesBeforeDelete);
  const isVisible = await classPageFixture.verifyManageClassDisplay();
  await expect(isVisible).toBe(true);
});


Then('Admin see the Class Topic\\/Batch Name\\/Class Description \\/ Staff Name and Class Dates sorted by ascending or decending order after clicking the sort icon {string}', async ({classPageFixture}, ClassHeader) => {
  console.log("Checking the sorting of "+ClassHeader);
  const result= await classPageFixture.ClassSorting(ClassHeader);
  console.log("The "+ClassHeader+" is sorted properly: "+result);
  expect(result).toBe(true);
});

