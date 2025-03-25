// Generated from: src\test\features\04class.feature
import { test } from "../../../../fixture/customFixtures.js";

test.describe('Validate class page functionality', () => {

  test.beforeEach('Background', async ({ When, classPageFixture }) => {
    await When('Admin clicks the Class Navigation bar in the Header', null, { classPageFixture }); 
  });
  
  test('Validating the class manage page', { tag: ['@parallel'] }, async ({ Then, classPageFixture }) => { 
    await Then('Admin should land on the Manage class page', null, { classPageFixture }); 
  });

  test('Validating the Header in the Manage class page', { tag: ['@parallel'] }, async ({ Then, classPageFixture }) => { 
    await Then('Admin should see the Manage Class Header', null, { classPageFixture }); 
  });

  test('Validating Search bar in class page', { tag: ['@parallel'] }, async ({ Then, classPageFixture }) => { 
    await Then('Admin should see the Search bar in the Manage Class page', null, { classPageFixture }); 
  });

  test.describe('Scenario Outline name: Validating the data table headers in the class page', () => {

    test('Example #1', { tag: ['@parallel'] }, async ({ Then, classPageFixture }) => { 
      await Then('Admin should see the datatable heading like "Batch Name"', null, { classPageFixture }); 
    });

    test('Example #2', { tag: ['@parallel'] }, async ({ Then, classPageFixture }) => { 
      await Then('Admin should see the datatable heading like "Class Topic"', null, { classPageFixture }); 
    });

    test('Example #3', { tag: ['@parallel'] }, async ({ Then, classPageFixture }) => { 
      await Then('Admin should see the datatable heading like "Class Description"', null, { classPageFixture }); 
    });

    test('Example #4', { tag: ['@parallel'] }, async ({ Then, classPageFixture }) => { 
      await Then('Admin should see the datatable heading like "Status"', null, { classPageFixture }); 
    });

    test('Example #5', { tag: ['@parallel'] }, async ({ Then, classPageFixture }) => { 
      await Then('Admin should see the datatable heading like "Class Date"', null, { classPageFixture }); 
    });

    test('Example #6', { tag: ['@parallel'] }, async ({ Then, classPageFixture }) => { 
      await Then('Admin should see the datatable heading like "Staff Name"', null, { classPageFixture }); 
    });

  });

  test.describe('Validating the text and pagination icon in the classpage', () => {

    test('Example #1', { tag: ['@parallel'] }, async ({ Then, classPageFixture }) => { 
      await Then('Admin should see the below "paginationText" pagination controls under the data table', null, { classPageFixture }); 
    });

    test('Example #2', { tag: ['@parallel'] }, async ({ Then, classPageFixture }) => { 
      await Then('Admin should see the below "pageNumber" pagination controls under the data table', null, { classPageFixture }); 
    });

    test('Example #3', { tag: ['@parallel'] }, async ({ Then, classPageFixture }) => { 
      await Then('Admin should see the below "firstPageIcon" pagination controls under the data table', null, { classPageFixture }); 
    });

    test('Example #4', { tag: ['@parallel'] }, async ({ Then, classPageFixture }) => { 
      await Then('Admin should see the below "previousPageIcon" pagination controls under the data table', null, { classPageFixture }); 
    });

    test('Example #5', { tag: ['@parallel'] }, async ({ Then, classPageFixture }) => { 
      await Then('Admin should see the below "nextPageIcon" pagination controls under the data table', null, { classPageFixture }); 
    });

    test('Example #6', { tag: ['@parallel'] }, async ({ Then, classPageFixture }) => { 
      await Then('Admin should see the below "lastPageIcon" pagination controls under the data table', null, { classPageFixture }); 
    });

  });

  test('Validate the sort icon of all the field in datatable', { tag: ['@parallel'] }, async ({ Then, classPageFixture }) => { 
    await Then('Admin should see the sort icon in all the fields of the datatable', null, { classPageFixture }); 
  });

  test('Validating the Delete button under the Manage class page', { tag: ['@parallel'] }, async ({ Then, classPageFixture }) => { 
    await Then('Admin should see the Delete button under the Manage class page header.', null, { classPageFixture }); 
  });

  test('Validate the footer message at bottom of manage class page', { tag: ['@parallel'] }, async ({ Then, classPageFixture }) => { 
    await Then('Admin should see footer message Total no of classes at the bottom of the Manage class page', null, { classPageFixture }); 
  });

  test.describe('Create a class with valid and invalid inputs', () => {

    test('Example #1', { tag: ['@parallel'] }, async ({ When, classPageFixture, And, Then }) => { 
      await When('Admin clicks the Add New Class button and enters the details of "validClass" in the Create Class form', null, { classPageFixture }); 
      await And('Admin clicks the Save button', null, { classPageFixture }); 
      await Then('Admin should see the valid "success"', null, { classPageFixture }); 
    });

    test('Example #2', { tag: ['@parallel'] }, async ({ When, classPageFixture, And, Then }) => { 
      await When('Admin clicks the Add New Class button and enters the details of "withoutStatus" in the Create Class form', null, { classPageFixture }); 
      await And('Admin clicks the Save button', null, { classPageFixture }); 
      await Then('Admin should see the valid "statusErrorMsg"', null, { classPageFixture }); 
    });

    test('Example #3', { tag: ['@parallel'] }, async ({ When, classPageFixture, And, Then }) => { 
      await When('Admin clicks the Add New Class button and enters the details of "withoutStaffName" in the Create Class form', null, { classPageFixture }); 
      await And('Admin clicks the Save button', null, { classPageFixture }); 
      await Then('Admin should see the valid "staffNameErrorMsg"', null, { classPageFixture }); 
    });

    test('Example #4', { tag: ['@parallel'] }, async ({ When, classPageFixture, And, Then }) => { 
      await When('Admin clicks the Add New Class button and enters the details of "withoutClassDate" in the Create Class form', null, { classPageFixture }); 
      await And('Admin clicks the Save button', null, { classPageFixture }); 
      await Then('Admin should see the valid "classDateErrorMsg"', null, { classPageFixture }); 
    });

    test('Example #5', { tag: ['@parallel'] }, async ({ When, classPageFixture, And, Then }) => { 
      await When('Admin clicks the Add New Class button and enters the details of "withoutClassTopic" in the Create Class form', null, { classPageFixture }); 
      await And('Admin clicks the Save button', null, { classPageFixture }); 
      await Then('Admin should see the valid "classTopicErrorMsg"', null, { classPageFixture }); 
    });

    test('Example #6', { tag: ['@parallel'] }, async ({ When, classPageFixture, And, Then }) => { 
      await When('Admin clicks the Add New Class button and enters the details of "withoutBatchName" in the Create Class form', null, { classPageFixture }); 
      await And('Admin clicks the Save button', null, { classPageFixture }); 
      await Then('Admin should see the valid "batchNameErrorMsg"', null, { classPageFixture }); 
    });

    test('Example #7', { tag: ['@parallel'] }, async ({ When, classPageFixture, And, Then }) => { 
      await When('Admin clicks the Add New Class button and enters the details of "withoutClassDesc" in the Create Class form', null, { classPageFixture }); 
      await And('Admin clicks the Save button', null, { classPageFixture }); 
      await Then('Admin should see the valid "success"', null, { classPageFixture }); 
    });

    test('Example #8', { tag: ['@parallel'] }, async ({ When, classPageFixture, And, Then }) => { 
      await When('Admin clicks the Add New Class button and enters the details of "withoutComments" in the Create Class form', null, { classPageFixture }); 
      await And('Admin clicks the Save button', null, { classPageFixture }); 
      await Then('Admin should see the valid "success"', null, { classPageFixture }); 
    });

    test('Example #9', { tag: ['@parallel'] }, async ({ When, classPageFixture, And, Then }) => { 
      await When('Admin clicks the Add New Class button and enters the details of "withoutNotes" in the Create Class form', null, { classPageFixture }); 
      await And('Admin clicks the Save button', null, { classPageFixture }); 
      await Then('Admin should see the valid "success"', null, { classPageFixture }); 
    });

    test('Example #10', { tag: ['@parallel'] }, async ({ When, classPageFixture, And, Then }) => { 
      await When('Admin clicks the Add New Class button and enters the details of "withoutRec" in the Create Class form', null, { classPageFixture }); 
      await And('Admin clicks the Save button', null, { classPageFixture }); 
      await Then('Admin should see the valid "success"', null, { classPageFixture }); 
    });

    test('Example #11', { tag: ['@parallel'] }, async ({ When, classPageFixture, And, Then }) => { 
      await When('Admin clicks the Add New Class button and enters the details of "emptyForm" in the Create Class form', null, { classPageFixture }); 
      await And('Admin clicks the Save button', null, { classPageFixture }); 
      await Then('Admin should see the valid "allErrorMsg"', null, { classPageFixture }); 
    });

  });

  test('Validate Class Details Popup window', { tag: ['@parallel'] }, async ({ When, classPageFixture, Then }) => { 
    await When('Admin clicks a add new class under the class menu bar', null, { classPageFixture }); 
    await Then('Admin should see a popup open for class details with empty form along with SAVE and CANCEL button and Close(X) Icon', null, { classPageFixture }); 
  });

  test.describe('Validate input fields and their text boxes in Class details form', () => {

    test('Example #1', { tag: ['@parallel'] }, async ({ When, classPageFixture, Then }) => { 
      await When('Admin clicks a add new class under the class menu bar', null, { classPageFixture }); 
      await Then('Admin should see the below input fields "BatchName" and their text boxes in the class details form', null, { classPageFixture }); 
    });

    test('Example #2', { tag: ['@parallel'] }, async ({ When, classPageFixture, Then }) => { 
      await When('Admin clicks a add new class under the class menu bar', null, { classPageFixture }); 
      await Then('Admin should see the below input fields "ClassTopic" and their text boxes in the class details form', null, { classPageFixture }); 
    });

    test('Example #3', { tag: ['@parallel'] }, async ({ When, classPageFixture, Then }) => { 
      await When('Admin clicks a add new class under the class menu bar', null, { classPageFixture }); 
      await Then('Admin should see the below input fields "ClassDescription" and their text boxes in the class details form', null, { classPageFixture }); 
    });

    test('Example #4', { tag: ['@parallel'] }, async ({ When, classPageFixture, Then }) => { 
      await When('Admin clicks a add new class under the class menu bar', null, { classPageFixture }); 
      await Then('Admin should see the below input fields "Status" and their text boxes in the class details form', null, { classPageFixture }); 
    });

    test('Example #5', { tag: ['@parallel'] }, async ({ When, classPageFixture, Then }) => { 
      await When('Admin clicks a add new class under the class menu bar', null, { classPageFixture }); 
      await Then('Admin should see the below input fields "ClassDates" and their text boxes in the class details form', null, { classPageFixture }); 
    });

    test('Example #6', { tag: ['@parallel'] }, async ({ When, classPageFixture, Then }) => { 
      await When('Admin clicks a add new class under the class menu bar', null, { classPageFixture }); 
      await Then('Admin should see the below input fields "Class No" and their text boxes in the class details form', null, { classPageFixture }); 
    });

    test('Example #7', { tag: ['@parallel'] }, async ({ When, classPageFixture, Then }) => { 
      await When('Admin clicks a add new class under the class menu bar', null, { classPageFixture }); 
      await Then('Admin should see the below input fields "StaffName" and their text boxes in the class details form', null, { classPageFixture }); 
    });

    test('Example #8', { tag: ['@parallel'] }, async ({ When, classPageFixture, Then }) => { 
      await When('Admin clicks a add new class under the class menu bar', null, { classPageFixture }); 
      await Then('Admin should see the below input fields "Comments" and their text boxes in the class details form', null, { classPageFixture }); 
    });

    test('Example #9', { tag: ['@parallel'] }, async ({ When, classPageFixture, Then }) => { 
      await When('Admin clicks a add new class under the class menu bar', null, { classPageFixture }); 
      await Then('Admin should see the below input fields "Notes" and their text boxes in the class details form', null, { classPageFixture }); 
    });

    test('Example #10', { tag: ['@parallel'] }, async ({ When, classPageFixture, Then }) => { 
      await When('Admin clicks a add new class under the class menu bar', null, { classPageFixture }); 
      await Then('Admin should see the below input fields "Recording" and their text boxes in the class details form', null, { classPageFixture }); 
    });

  });

  test('Check no classes value added when selecting class dates', { tag: ['@parallel'] }, async ({ Given, classPageFixture, When, Then }) => { 
    await Given('Admin is on the Class Popup window', null, { classPageFixture }); 
    await When('Admin selects class date in date picker', null, { classPageFixture }); 
    await Then('Admin should see no of class value is added automatically', null, { classPageFixture }); 
  });

  test('Check weekend dates are disabled in calendar', { tag: ['@parallel'] }, async ({ Given, classPageFixture, When, Then }) => { 
    await Given('Admin is on the Class Popup window', null, { classPageFixture }); 
    await When('Admin clicks date picker', null, { classPageFixture }); 
    await Then('Admin should see weekends dates are disabled to select', null, { classPageFixture }); 
  });

  test.describe('Validate Cancel/Close(X) icon on class Details form', () => {

    test('Example #1', { tag: ['@parallel'] }, async ({ Given, classPageFixture, When, Then }) => { 
      await Given('Admin clicks the Add New Class button and enters the details of "validClass" in the Create Class form', null, { classPageFixture }); 
      await When('Admin clicks Cancel button OR Close Icon "CancelBtn"', null, { classPageFixture }); 
      await Then('Class Details popup window should be closed without saving', null, { classPageFixture }); 
    });

    test('Example #2', { tag: ['@parallel'] }, async ({ Given, classPageFixture, When, Then }) => { 
      await Given('Admin clicks the Add New Class button and enters the details of "validClass" in the Create Class form', null, { classPageFixture }); 
      await When('Admin clicks Cancel button OR Close Icon "CloseIcon"', null, { classPageFixture }); 
      await Then('Class Details popup window should be closed without saving', null, { classPageFixture }); 
    });

  });

  test('Validate row level edit icon of a existing class', { tag: ['@parallel'] }, async ({ When, classPageFixture, Then }) => { 
    await When('Admin clicks on the edit icon in the class page', null, { classPageFixture }); 
    await Then('check that a new pop up with class details appears', null, { classPageFixture }); 
  });

  test('Validate Class Topic is disabled while editing existing Class', { tag: ['@parallel'] }, async ({ When, classPageFixture, Then }) => { 
    await When('Admin clicks on the edit icon in the class page', null, { classPageFixture }); 
    await Then('Admin should see class topic field is disabled', null, { classPageFixture }); 
  });

  test('Validate batchName is disabled while editing existing Class', { tag: ['@parallel'] }, async ({ When, classPageFixture, Then }) => { 
    await When('Admin clicks on the edit icon in the class page', null, { classPageFixture }); 
    await Then('Admin should see batch name field is disabled', null, { classPageFixture }); 
  });

  test('Validate row level delete icon in the class page', { tag: ['@parallel'] }, async ({ When, classPageFixture, Then }) => { 
    await When('Admin clicks the delete icon in the class page', null, { classPageFixture }); 
    await Then('Admin should see a alert open with heading Confirm along with YES and NO button for deletion', null, { classPageFixture }); 
  });

  test('Click No on deletion window of a class', { tag: ['@parallel'] }, async ({ When, classPageFixture, And, Then }) => { 
    await When('Admin clicks the delete icon in the class page', null, { classPageFixture }); 
    await And('Admin clicks No option to delete on confirm page of class', null, { classPageFixture }); 
    await Then('Admin can see the deletion alert disappears without deleting the class', null, { classPageFixture }); 
  });

  test('Click Yes on deletion window of a class', { tag: ['@parallel'] }, async ({ When, classPageFixture, And, Then }) => { 
    await When('Admin clicks the delete icon in the class page', null, { classPageFixture }); 
    await And('Admin clicks Yes option to delete on confirm page of class', null, { classPageFixture }); 
    await Then('Admin gets a message Successful Class Deleted alert', null, { classPageFixture }); 
    await And('Do not see that Class in the data table', null, { classPageFixture }); 
  });

  test('Validate Close(X) icon on Confirm Deletion alert', { tag: ['@parallel'] }, async ({ When, classPageFixture, And, Then }) => { 
    await When('Admin clicks the delete icon in the class page', null, { classPageFixture }); 
    await And('Admin clicks CLose X Icon on confirm page of class', null, { classPageFixture }); 
    await Then('Admin can see the deletion alert disappears without deleting the class', null, { classPageFixture }); 
  });

  test('Validate Common Delete button enabled after clicking on any checkbox in class page', { tag: ['@parallel'] }, async ({ When, classPageFixture, Then }) => { 
    await When('Admin clicks any checkbox in the data table', null, { classPageFixture }); 
    await Then('Admin should see common delete option enabled under header Manage class', null, { classPageFixture }); 
  });

  test('Validate multiple class delete button by selecting Single checkbox and clicking NO', { tag: ['@parallel'] }, async ({ Given, classPageFixture, When, Then }) => { 
    await Given('Admin clicks single checkbox in the data table and clicks Multi Delete icon in class page', null, { classPageFixture }); 
    await When('Admin clicks No option to delete on confirm page of class', null, { classPageFixture }); 
    await Then('Admin can see the deletion alert disappears without deleting the class', null, { classPageFixture }); 
  });

  test('Validate multiple class delete button by selecting Single checkbox and clicking YES', { tag: ['@parallel'] }, async ({ Given, classPageFixture, When, Then, And }) => { 
    await Given('Admin clicks single checkbox in the data table and clicks Multi Delete icon in class page', null, { classPageFixture }); 
    await When('Admin clicks Yes option to delete on confirm page of class', null, { classPageFixture }); 
    await Then('Admin gets a message Successful Classes Deleted alert', null, { classPageFixture }); 
    await And('Do not see that Class in the data table', null, { classPageFixture }); 
  });

  test('Validate multiple class deletion by selecting multiple check boxes and clicking NO', { tag: ['@parallel'] }, async ({ Given, classPageFixture, When, Then }) => { 
    await Given('Admin clicks multiple checkbox in the data table and clicks Multi Delete icon in class page', null, { classPageFixture }); 
    await When('Admin clicks No option to delete on confirm page of class', null, { classPageFixture }); 
    await Then('Admin can see the deletion alert disappears without deleting the selected classes', null, { classPageFixture }); 
  });

  test.describe('Manage Class - Sorting Class by Class Topic/Batch Name/Program Name/ Class Description / Staff Name and Class Dates', () => {

    test('Example #1', { tag: ['@parallel'] }, async ({ Then, classPageFixture }) => { 
      await Then('Admin see the Class Topic/Batch Name/Class Description / Staff Name and Class Dates sorted by ascending or decending order after clicking the sort icon "batchName_AscendingOrder"', null, { classPageFixture }); 
    });

    test('Example #2', { tag: ['@parallel'] }, async ({ Then, classPageFixture }) => { 
      await Then('Admin see the Class Topic/Batch Name/Class Description / Staff Name and Class Dates sorted by ascending or decending order after clicking the sort icon "batchName_DescendingOrder"', null, { classPageFixture }); 
    });

    test('Example #3', { tag: ['@parallel'] }, async ({ Then, classPageFixture }) => { 
      await Then('Admin see the Class Topic/Batch Name/Class Description / Staff Name and Class Dates sorted by ascending or decending order after clicking the sort icon "classTopic_AscendingOrder"', null, { classPageFixture }); 
    });

    test('Example #4', { tag: ['@parallel'] }, async ({ Then, classPageFixture }) => { 
      await Then('Admin see the Class Topic/Batch Name/Class Description / Staff Name and Class Dates sorted by ascending or decending order after clicking the sort icon "classTopic_DecendingOrder"', null, { classPageFixture }); 
    });

    test('Example #5', { tag: ['@parallel'] }, async ({ Then, classPageFixture }) => { 
      await Then('Admin see the Class Topic/Batch Name/Class Description / Staff Name and Class Dates sorted by ascending or decending order after clicking the sort icon "ClassDescription_AscendingOrder"', null, { classPageFixture }); 
    });

    test('Example #6', { tag: ['@parallel'] }, async ({ Then, classPageFixture }) => { 
      await Then('Admin see the Class Topic/Batch Name/Class Description / Staff Name and Class Dates sorted by ascending or decending order after clicking the sort icon "ClassDescription_DescendingOrder"', null, { classPageFixture }); 
    });

    test('Example #7', { tag: ['@parallel'] }, async ({ Then, classPageFixture }) => { 
      await Then('Admin see the Class Topic/Batch Name/Class Description / Staff Name and Class Dates sorted by ascending or decending order after clicking the sort icon "staffName_AscendingOrder"', null, { classPageFixture }); 
    });

    test('Example #8', { tag: ['@parallel'] }, async ({ Then, classPageFixture }) => { 
      await Then('Admin see the Class Topic/Batch Name/Class Description / Staff Name and Class Dates sorted by ascending or decending order after clicking the sort icon "staffName_DecendingOrder"', null, { classPageFixture }); 
    });

    test('Example #9', { tag: ['@parallel'] }, async ({ Then, classPageFixture }) => { 
      await Then('Admin see the Class Topic/Batch Name/Class Description / Staff Name and Class Dates sorted by ascending or decending order after clicking the sort icon "classDate_AscendingOrder"', null, { classPageFixture }); 
    });

    test('Example #10', { tag: ['@parallel'] }, async ({ Then, classPageFixture }) => { 
      await Then('Admin see the Class Topic/Batch Name/Class Description / Staff Name and Class Dates sorted by ascending or decending order after clicking the sort icon "classDate_DescendingOrder"', null, { classPageFixture }); 
    });

  });

  test.describe('Scenario Outline name: Search class by Batch Name, Class topic, Class Description and by Staff Name', () => {

    test('Example #1', { tag: ['@parallel'] }, async ({ When, classPageFixture }) => { 
      await When('Admin searches by below scenario "searchBy_batchName" in the Class module', null, { classPageFixture }); 
    });

    test('Example #2', { tag: ['@parallel'] }, async ({ When, classPageFixture }) => { 
      await When('Admin searches by below scenario "searchBy_classTopic" in the Class module', null, { classPageFixture }); 
    });

    test('Example #3', { tag: ['@parallel'] }, async ({ When, classPageFixture }) => { 
      await When('Admin searches by below scenario "searchBy_ClassDescription" in the Class module', null, { classPageFixture }); 
    });

    test('Example #4', { tag: ['@parallel'] }, async ({ When, classPageFixture }) => { 
      await When('Admin searches by below scenario "searchBy_staffName" in the Class module', null, { classPageFixture }); 
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('src\\test\\features\\04class.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":8,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on the Manage class page","stepMatchArguments":[]}]},
  {"pwTestLine":14,"pickleLine":11,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the Manage Class Header","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":14,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the Search bar in the Manage Class page","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":23,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the datatable heading like \"Batch Name\"","stepMatchArguments":[{"group":{"start":44,"value":"\"Batch Name\"","children":[{"start":45,"value":"Batch Name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":28,"pickleLine":24,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the datatable heading like \"Class Topic\"","stepMatchArguments":[{"group":{"start":44,"value":"\"Class Topic\"","children":[{"start":45,"value":"Class Topic","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":32,"pickleLine":25,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the datatable heading like \"Class Description\"","stepMatchArguments":[{"group":{"start":44,"value":"\"Class Description\"","children":[{"start":45,"value":"Class Description","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":36,"pickleLine":26,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the datatable heading like \"Status\"","stepMatchArguments":[{"group":{"start":44,"value":"\"Status\"","children":[{"start":45,"value":"Status","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":40,"pickleLine":27,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the datatable heading like \"Class Date\"","stepMatchArguments":[{"group":{"start":44,"value":"\"Class Date\"","children":[{"start":45,"value":"Class Date","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":44,"pickleLine":28,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the datatable heading like \"Staff Name\"","stepMatchArguments":[{"group":{"start":44,"value":"\"Staff Name\"","children":[{"start":45,"value":"Staff Name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":52,"pickleLine":36,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below \"paginationText\" pagination controls under the data table","stepMatchArguments":[{"group":{"start":27,"value":"\"paginationText\"","children":[{"start":28,"value":"paginationText","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":56,"pickleLine":37,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below \"pageNumber\" pagination controls under the data table","stepMatchArguments":[{"group":{"start":27,"value":"\"pageNumber\"","children":[{"start":28,"value":"pageNumber","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":60,"pickleLine":38,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below \"firstPageIcon\" pagination controls under the data table","stepMatchArguments":[{"group":{"start":27,"value":"\"firstPageIcon\"","children":[{"start":28,"value":"firstPageIcon","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":64,"pickleLine":39,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":65,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below \"previousPageIcon\" pagination controls under the data table","stepMatchArguments":[{"group":{"start":27,"value":"\"previousPageIcon\"","children":[{"start":28,"value":"previousPageIcon","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":68,"pickleLine":40,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":69,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below \"nextPageIcon\" pagination controls under the data table","stepMatchArguments":[{"group":{"start":27,"value":"\"nextPageIcon\"","children":[{"start":28,"value":"nextPageIcon","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":72,"pickleLine":41,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":73,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below \"lastPageIcon\" pagination controls under the data table","stepMatchArguments":[{"group":{"start":27,"value":"\"lastPageIcon\"","children":[{"start":28,"value":"lastPageIcon","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":78,"pickleLine":43,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":79,"gherkinStepLine":44,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the sort icon in all the fields of the datatable","stepMatchArguments":[]}]},
  {"pwTestLine":82,"pickleLine":46,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":83,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the Delete button under the Manage class page header.","stepMatchArguments":[]}]},
  {"pwTestLine":86,"pickleLine":49,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":87,"gherkinStepLine":50,"keywordType":"Outcome","textWithKeyword":"Then Admin should see footer message Total no of classes at the bottom of the Manage class page","stepMatchArguments":[]}]},
  {"pwTestLine":92,"pickleLine":60,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":93,"gherkinStepLine":54,"keywordType":"Action","textWithKeyword":"When Admin clicks the Add New Class button and enters the details of \"validClass\" in the Create Class form","stepMatchArguments":[{"group":{"start":64,"value":"\"validClass\"","children":[{"start":65,"value":"validClass","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":94,"gherkinStepLine":55,"keywordType":"Action","textWithKeyword":"And Admin clicks the Save button","stepMatchArguments":[]},{"pwStepLine":95,"gherkinStepLine":56,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the valid \"success\"","stepMatchArguments":[{"group":{"start":27,"value":"\"success\"","children":[{"start":28,"value":"success","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":98,"pickleLine":61,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":99,"gherkinStepLine":54,"keywordType":"Action","textWithKeyword":"When Admin clicks the Add New Class button and enters the details of \"withoutStatus\" in the Create Class form","stepMatchArguments":[{"group":{"start":64,"value":"\"withoutStatus\"","children":[{"start":65,"value":"withoutStatus","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":100,"gherkinStepLine":55,"keywordType":"Action","textWithKeyword":"And Admin clicks the Save button","stepMatchArguments":[]},{"pwStepLine":101,"gherkinStepLine":56,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the valid \"statusErrorMsg\"","stepMatchArguments":[{"group":{"start":27,"value":"\"statusErrorMsg\"","children":[{"start":28,"value":"statusErrorMsg","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":104,"pickleLine":62,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":105,"gherkinStepLine":54,"keywordType":"Action","textWithKeyword":"When Admin clicks the Add New Class button and enters the details of \"withoutStaffName\" in the Create Class form","stepMatchArguments":[{"group":{"start":64,"value":"\"withoutStaffName\"","children":[{"start":65,"value":"withoutStaffName","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":106,"gherkinStepLine":55,"keywordType":"Action","textWithKeyword":"And Admin clicks the Save button","stepMatchArguments":[]},{"pwStepLine":107,"gherkinStepLine":56,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the valid \"staffNameErrorMsg\"","stepMatchArguments":[{"group":{"start":27,"value":"\"staffNameErrorMsg\"","children":[{"start":28,"value":"staffNameErrorMsg","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":110,"pickleLine":63,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":111,"gherkinStepLine":54,"keywordType":"Action","textWithKeyword":"When Admin clicks the Add New Class button and enters the details of \"withoutClassDate\" in the Create Class form","stepMatchArguments":[{"group":{"start":64,"value":"\"withoutClassDate\"","children":[{"start":65,"value":"withoutClassDate","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":112,"gherkinStepLine":55,"keywordType":"Action","textWithKeyword":"And Admin clicks the Save button","stepMatchArguments":[]},{"pwStepLine":113,"gherkinStepLine":56,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the valid \"classDateErrorMsg\"","stepMatchArguments":[{"group":{"start":27,"value":"\"classDateErrorMsg\"","children":[{"start":28,"value":"classDateErrorMsg","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":116,"pickleLine":64,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":117,"gherkinStepLine":54,"keywordType":"Action","textWithKeyword":"When Admin clicks the Add New Class button and enters the details of \"withoutClassTopic\" in the Create Class form","stepMatchArguments":[{"group":{"start":64,"value":"\"withoutClassTopic\"","children":[{"start":65,"value":"withoutClassTopic","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":118,"gherkinStepLine":55,"keywordType":"Action","textWithKeyword":"And Admin clicks the Save button","stepMatchArguments":[]},{"pwStepLine":119,"gherkinStepLine":56,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the valid \"classTopicErrorMsg\"","stepMatchArguments":[{"group":{"start":27,"value":"\"classTopicErrorMsg\"","children":[{"start":28,"value":"classTopicErrorMsg","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":122,"pickleLine":65,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":123,"gherkinStepLine":54,"keywordType":"Action","textWithKeyword":"When Admin clicks the Add New Class button and enters the details of \"withoutBatchName\" in the Create Class form","stepMatchArguments":[{"group":{"start":64,"value":"\"withoutBatchName\"","children":[{"start":65,"value":"withoutBatchName","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":124,"gherkinStepLine":55,"keywordType":"Action","textWithKeyword":"And Admin clicks the Save button","stepMatchArguments":[]},{"pwStepLine":125,"gherkinStepLine":56,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the valid \"batchNameErrorMsg\"","stepMatchArguments":[{"group":{"start":27,"value":"\"batchNameErrorMsg\"","children":[{"start":28,"value":"batchNameErrorMsg","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":128,"pickleLine":66,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":129,"gherkinStepLine":54,"keywordType":"Action","textWithKeyword":"When Admin clicks the Add New Class button and enters the details of \"withoutClassDesc\" in the Create Class form","stepMatchArguments":[{"group":{"start":64,"value":"\"withoutClassDesc\"","children":[{"start":65,"value":"withoutClassDesc","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":130,"gherkinStepLine":55,"keywordType":"Action","textWithKeyword":"And Admin clicks the Save button","stepMatchArguments":[]},{"pwStepLine":131,"gherkinStepLine":56,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the valid \"success\"","stepMatchArguments":[{"group":{"start":27,"value":"\"success\"","children":[{"start":28,"value":"success","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":134,"pickleLine":67,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":135,"gherkinStepLine":54,"keywordType":"Action","textWithKeyword":"When Admin clicks the Add New Class button and enters the details of \"withoutComments\" in the Create Class form","stepMatchArguments":[{"group":{"start":64,"value":"\"withoutComments\"","children":[{"start":65,"value":"withoutComments","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":136,"gherkinStepLine":55,"keywordType":"Action","textWithKeyword":"And Admin clicks the Save button","stepMatchArguments":[]},{"pwStepLine":137,"gherkinStepLine":56,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the valid \"success\"","stepMatchArguments":[{"group":{"start":27,"value":"\"success\"","children":[{"start":28,"value":"success","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":140,"pickleLine":68,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":141,"gherkinStepLine":54,"keywordType":"Action","textWithKeyword":"When Admin clicks the Add New Class button and enters the details of \"withoutNotes\" in the Create Class form","stepMatchArguments":[{"group":{"start":64,"value":"\"withoutNotes\"","children":[{"start":65,"value":"withoutNotes","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":142,"gherkinStepLine":55,"keywordType":"Action","textWithKeyword":"And Admin clicks the Save button","stepMatchArguments":[]},{"pwStepLine":143,"gherkinStepLine":56,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the valid \"success\"","stepMatchArguments":[{"group":{"start":27,"value":"\"success\"","children":[{"start":28,"value":"success","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":146,"pickleLine":69,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":147,"gherkinStepLine":54,"keywordType":"Action","textWithKeyword":"When Admin clicks the Add New Class button and enters the details of \"withoutRec\" in the Create Class form","stepMatchArguments":[{"group":{"start":64,"value":"\"withoutRec\"","children":[{"start":65,"value":"withoutRec","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":148,"gherkinStepLine":55,"keywordType":"Action","textWithKeyword":"And Admin clicks the Save button","stepMatchArguments":[]},{"pwStepLine":149,"gherkinStepLine":56,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the valid \"success\"","stepMatchArguments":[{"group":{"start":27,"value":"\"success\"","children":[{"start":28,"value":"success","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":152,"pickleLine":70,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":153,"gherkinStepLine":54,"keywordType":"Action","textWithKeyword":"When Admin clicks the Add New Class button and enters the details of \"emptyForm\" in the Create Class form","stepMatchArguments":[{"group":{"start":64,"value":"\"emptyForm\"","children":[{"start":65,"value":"emptyForm","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":154,"gherkinStepLine":55,"keywordType":"Action","textWithKeyword":"And Admin clicks the Save button","stepMatchArguments":[]},{"pwStepLine":155,"gherkinStepLine":56,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the valid \"allErrorMsg\"","stepMatchArguments":[{"group":{"start":27,"value":"\"allErrorMsg\"","children":[{"start":28,"value":"allErrorMsg","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":160,"pickleLine":73,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":161,"gherkinStepLine":74,"keywordType":"Action","textWithKeyword":"When Admin clicks a add new class under the class menu bar","stepMatchArguments":[]},{"pwStepLine":162,"gherkinStepLine":75,"keywordType":"Outcome","textWithKeyword":"Then Admin should see a popup open for class details with empty form along with SAVE and CANCEL button and Close(X) Icon","stepMatchArguments":[]}]},
  {"pwTestLine":167,"pickleLine":83,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":168,"gherkinStepLine":78,"keywordType":"Action","textWithKeyword":"When Admin clicks a add new class under the class menu bar","stepMatchArguments":[]},{"pwStepLine":169,"gherkinStepLine":79,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below input fields \"BatchName\" and their text boxes in the class details form","stepMatchArguments":[{"group":{"start":40,"value":"\"BatchName\"","children":[{"start":41,"value":"BatchName","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":172,"pickleLine":84,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":173,"gherkinStepLine":78,"keywordType":"Action","textWithKeyword":"When Admin clicks a add new class under the class menu bar","stepMatchArguments":[]},{"pwStepLine":174,"gherkinStepLine":79,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below input fields \"ClassTopic\" and their text boxes in the class details form","stepMatchArguments":[{"group":{"start":40,"value":"\"ClassTopic\"","children":[{"start":41,"value":"ClassTopic","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":177,"pickleLine":85,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":178,"gherkinStepLine":78,"keywordType":"Action","textWithKeyword":"When Admin clicks a add new class under the class menu bar","stepMatchArguments":[]},{"pwStepLine":179,"gherkinStepLine":79,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below input fields \"ClassDescription\" and their text boxes in the class details form","stepMatchArguments":[{"group":{"start":40,"value":"\"ClassDescription\"","children":[{"start":41,"value":"ClassDescription","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":182,"pickleLine":86,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":183,"gherkinStepLine":78,"keywordType":"Action","textWithKeyword":"When Admin clicks a add new class under the class menu bar","stepMatchArguments":[]},{"pwStepLine":184,"gherkinStepLine":79,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below input fields \"Status\" and their text boxes in the class details form","stepMatchArguments":[{"group":{"start":40,"value":"\"Status\"","children":[{"start":41,"value":"Status","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":187,"pickleLine":87,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":188,"gherkinStepLine":78,"keywordType":"Action","textWithKeyword":"When Admin clicks a add new class under the class menu bar","stepMatchArguments":[]},{"pwStepLine":189,"gherkinStepLine":79,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below input fields \"ClassDates\" and their text boxes in the class details form","stepMatchArguments":[{"group":{"start":40,"value":"\"ClassDates\"","children":[{"start":41,"value":"ClassDates","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":192,"pickleLine":88,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":193,"gherkinStepLine":78,"keywordType":"Action","textWithKeyword":"When Admin clicks a add new class under the class menu bar","stepMatchArguments":[]},{"pwStepLine":194,"gherkinStepLine":79,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below input fields \"Class No\" and their text boxes in the class details form","stepMatchArguments":[{"group":{"start":40,"value":"\"Class No\"","children":[{"start":41,"value":"Class No","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":197,"pickleLine":89,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":198,"gherkinStepLine":78,"keywordType":"Action","textWithKeyword":"When Admin clicks a add new class under the class menu bar","stepMatchArguments":[]},{"pwStepLine":199,"gherkinStepLine":79,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below input fields \"StaffName\" and their text boxes in the class details form","stepMatchArguments":[{"group":{"start":40,"value":"\"StaffName\"","children":[{"start":41,"value":"StaffName","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":202,"pickleLine":90,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":203,"gherkinStepLine":78,"keywordType":"Action","textWithKeyword":"When Admin clicks a add new class under the class menu bar","stepMatchArguments":[]},{"pwStepLine":204,"gherkinStepLine":79,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below input fields \"Comments\" and their text boxes in the class details form","stepMatchArguments":[{"group":{"start":40,"value":"\"Comments\"","children":[{"start":41,"value":"Comments","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":207,"pickleLine":91,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":208,"gherkinStepLine":78,"keywordType":"Action","textWithKeyword":"When Admin clicks a add new class under the class menu bar","stepMatchArguments":[]},{"pwStepLine":209,"gherkinStepLine":79,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below input fields \"Notes\" and their text boxes in the class details form","stepMatchArguments":[{"group":{"start":40,"value":"\"Notes\"","children":[{"start":41,"value":"Notes","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":212,"pickleLine":92,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":213,"gherkinStepLine":78,"keywordType":"Action","textWithKeyword":"When Admin clicks a add new class under the class menu bar","stepMatchArguments":[]},{"pwStepLine":214,"gherkinStepLine":79,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below input fields \"Recording\" and their text boxes in the class details form","stepMatchArguments":[{"group":{"start":40,"value":"\"Recording\"","children":[{"start":41,"value":"Recording","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":219,"pickleLine":94,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":220,"gherkinStepLine":95,"keywordType":"Context","textWithKeyword":"Given Admin is on the Class Popup window","stepMatchArguments":[]},{"pwStepLine":221,"gherkinStepLine":96,"keywordType":"Action","textWithKeyword":"When Admin selects class date in date picker","stepMatchArguments":[]},{"pwStepLine":222,"gherkinStepLine":97,"keywordType":"Outcome","textWithKeyword":"Then Admin should see no of class value is added automatically","stepMatchArguments":[]}]},
  {"pwTestLine":225,"pickleLine":99,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":226,"gherkinStepLine":100,"keywordType":"Context","textWithKeyword":"Given Admin is on the Class Popup window","stepMatchArguments":[]},{"pwStepLine":227,"gherkinStepLine":101,"keywordType":"Action","textWithKeyword":"When Admin clicks date picker","stepMatchArguments":[]},{"pwStepLine":228,"gherkinStepLine":102,"keywordType":"Outcome","textWithKeyword":"Then Admin should see weekends dates are disabled to select","stepMatchArguments":[]}]},
  {"pwTestLine":233,"pickleLine":111,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":234,"gherkinStepLine":105,"keywordType":"Context","textWithKeyword":"Given Admin clicks the Add New Class button and enters the details of \"validClass\" in the Create Class form","stepMatchArguments":[{"group":{"start":64,"value":"\"validClass\"","children":[{"start":65,"value":"validClass","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":235,"gherkinStepLine":106,"keywordType":"Action","textWithKeyword":"When Admin clicks Cancel button OR Close Icon \"CancelBtn\"","stepMatchArguments":[{"group":{"start":41,"value":"\"CancelBtn\"","children":[{"start":42,"value":"CancelBtn","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":236,"gherkinStepLine":107,"keywordType":"Outcome","textWithKeyword":"Then Class Details popup window should be closed without saving","stepMatchArguments":[]}]},
  {"pwTestLine":239,"pickleLine":112,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":240,"gherkinStepLine":105,"keywordType":"Context","textWithKeyword":"Given Admin clicks the Add New Class button and enters the details of \"validClass\" in the Create Class form","stepMatchArguments":[{"group":{"start":64,"value":"\"validClass\"","children":[{"start":65,"value":"validClass","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":241,"gherkinStepLine":106,"keywordType":"Action","textWithKeyword":"When Admin clicks Cancel button OR Close Icon \"CloseIcon\"","stepMatchArguments":[{"group":{"start":41,"value":"\"CloseIcon\"","children":[{"start":42,"value":"CloseIcon","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":242,"gherkinStepLine":107,"keywordType":"Outcome","textWithKeyword":"Then Class Details popup window should be closed without saving","stepMatchArguments":[]}]},
  {"pwTestLine":247,"pickleLine":115,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":248,"gherkinStepLine":116,"keywordType":"Action","textWithKeyword":"When Admin clicks on the edit icon in the class page","stepMatchArguments":[]},{"pwStepLine":249,"gherkinStepLine":117,"keywordType":"Outcome","textWithKeyword":"Then check that a new pop up with class details appears","stepMatchArguments":[]}]},
  {"pwTestLine":252,"pickleLine":119,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":253,"gherkinStepLine":120,"keywordType":"Action","textWithKeyword":"When Admin clicks on the edit icon in the class page","stepMatchArguments":[]},{"pwStepLine":254,"gherkinStepLine":121,"keywordType":"Outcome","textWithKeyword":"Then Admin should see class topic field is disabled","stepMatchArguments":[]}]},
  {"pwTestLine":257,"pickleLine":123,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":258,"gherkinStepLine":124,"keywordType":"Action","textWithKeyword":"When Admin clicks on the edit icon in the class page","stepMatchArguments":[]},{"pwStepLine":259,"gherkinStepLine":125,"keywordType":"Outcome","textWithKeyword":"Then Admin should see batch name field is disabled","stepMatchArguments":[]}]},
  {"pwTestLine":262,"pickleLine":129,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":263,"gherkinStepLine":130,"keywordType":"Action","textWithKeyword":"When Admin clicks the delete icon in the class page","stepMatchArguments":[]},{"pwStepLine":264,"gherkinStepLine":131,"keywordType":"Outcome","textWithKeyword":"Then Admin should see a alert open with heading Confirm along with YES and NO button for deletion","stepMatchArguments":[]}]},
  {"pwTestLine":267,"pickleLine":133,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":268,"gherkinStepLine":134,"keywordType":"Action","textWithKeyword":"When Admin clicks the delete icon in the class page","stepMatchArguments":[]},{"pwStepLine":269,"gherkinStepLine":135,"keywordType":"Action","textWithKeyword":"And Admin clicks No option to delete on confirm page of class","stepMatchArguments":[]},{"pwStepLine":270,"gherkinStepLine":136,"keywordType":"Outcome","textWithKeyword":"Then Admin can see the deletion alert disappears without deleting the class","stepMatchArguments":[]}]},
  {"pwTestLine":273,"pickleLine":139,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":274,"gherkinStepLine":140,"keywordType":"Action","textWithKeyword":"When Admin clicks the delete icon in the class page","stepMatchArguments":[]},{"pwStepLine":275,"gherkinStepLine":141,"keywordType":"Action","textWithKeyword":"And Admin clicks Yes option to delete on confirm page of class","stepMatchArguments":[]},{"pwStepLine":276,"gherkinStepLine":142,"keywordType":"Outcome","textWithKeyword":"Then Admin gets a message Successful Class Deleted alert","stepMatchArguments":[]},{"pwStepLine":277,"gherkinStepLine":143,"keywordType":"Outcome","textWithKeyword":"And Do not see that Class in the data table","stepMatchArguments":[]}]},
  {"pwTestLine":280,"pickleLine":145,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":281,"gherkinStepLine":146,"keywordType":"Action","textWithKeyword":"When Admin clicks the delete icon in the class page","stepMatchArguments":[]},{"pwStepLine":282,"gherkinStepLine":147,"keywordType":"Action","textWithKeyword":"And Admin clicks CLose X Icon on confirm page of class","stepMatchArguments":[]},{"pwStepLine":283,"gherkinStepLine":148,"keywordType":"Outcome","textWithKeyword":"Then Admin can see the deletion alert disappears without deleting the class","stepMatchArguments":[]}]},
  {"pwTestLine":286,"pickleLine":151,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":287,"gherkinStepLine":152,"keywordType":"Action","textWithKeyword":"When Admin clicks any checkbox in the data table","stepMatchArguments":[]},{"pwStepLine":288,"gherkinStepLine":153,"keywordType":"Outcome","textWithKeyword":"Then Admin should see common delete option enabled under header Manage class","stepMatchArguments":[]}]},
  {"pwTestLine":291,"pickleLine":155,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":292,"gherkinStepLine":156,"keywordType":"Context","textWithKeyword":"Given Admin clicks single checkbox in the data table and clicks Multi Delete icon in class page","stepMatchArguments":[]},{"pwStepLine":293,"gherkinStepLine":157,"keywordType":"Action","textWithKeyword":"When Admin clicks No option to delete on confirm page of class","stepMatchArguments":[]},{"pwStepLine":294,"gherkinStepLine":158,"keywordType":"Outcome","textWithKeyword":"Then Admin can see the deletion alert disappears without deleting the class","stepMatchArguments":[]}]},
  {"pwTestLine":297,"pickleLine":161,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":298,"gherkinStepLine":162,"keywordType":"Context","textWithKeyword":"Given Admin clicks single checkbox in the data table and clicks Multi Delete icon in class page","stepMatchArguments":[]},{"pwStepLine":299,"gherkinStepLine":163,"keywordType":"Action","textWithKeyword":"When Admin clicks Yes option to delete on confirm page of class","stepMatchArguments":[]},{"pwStepLine":300,"gherkinStepLine":164,"keywordType":"Outcome","textWithKeyword":"Then Admin gets a message Successful Classes Deleted alert","stepMatchArguments":[]},{"pwStepLine":301,"gherkinStepLine":165,"keywordType":"Outcome","textWithKeyword":"And Do not see that Class in the data table","stepMatchArguments":[]}]},
  {"pwTestLine":304,"pickleLine":167,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":305,"gherkinStepLine":168,"keywordType":"Context","textWithKeyword":"Given Admin clicks multiple checkbox in the data table and clicks Multi Delete icon in class page","stepMatchArguments":[]},{"pwStepLine":306,"gherkinStepLine":169,"keywordType":"Action","textWithKeyword":"When Admin clicks No option to delete on confirm page of class","stepMatchArguments":[]},{"pwStepLine":307,"gherkinStepLine":170,"keywordType":"Outcome","textWithKeyword":"Then Admin can see the deletion alert disappears without deleting the selected classes","stepMatchArguments":[]}]},
  {"pwTestLine":312,"pickleLine":187,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":313,"gherkinStepLine":183,"keywordType":"Outcome","textWithKeyword":"Then Admin see the Class Topic/Batch Name/Class Description / Staff Name and Class Dates sorted by ascending or decending order after clicking the sort icon \"batchName_AscendingOrder\"","stepMatchArguments":[{"group":{"start":152,"value":"\"batchName_AscendingOrder\"","children":[{"start":153,"value":"batchName_AscendingOrder","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":316,"pickleLine":188,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":317,"gherkinStepLine":183,"keywordType":"Outcome","textWithKeyword":"Then Admin see the Class Topic/Batch Name/Class Description / Staff Name and Class Dates sorted by ascending or decending order after clicking the sort icon \"batchName_DescendingOrder\"","stepMatchArguments":[{"group":{"start":152,"value":"\"batchName_DescendingOrder\"","children":[{"start":153,"value":"batchName_DescendingOrder","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":320,"pickleLine":189,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":321,"gherkinStepLine":183,"keywordType":"Outcome","textWithKeyword":"Then Admin see the Class Topic/Batch Name/Class Description / Staff Name and Class Dates sorted by ascending or decending order after clicking the sort icon \"classTopic_AscendingOrder\"","stepMatchArguments":[{"group":{"start":152,"value":"\"classTopic_AscendingOrder\"","children":[{"start":153,"value":"classTopic_AscendingOrder","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":324,"pickleLine":190,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":325,"gherkinStepLine":183,"keywordType":"Outcome","textWithKeyword":"Then Admin see the Class Topic/Batch Name/Class Description / Staff Name and Class Dates sorted by ascending or decending order after clicking the sort icon \"classTopic_DecendingOrder\"","stepMatchArguments":[{"group":{"start":152,"value":"\"classTopic_DecendingOrder\"","children":[{"start":153,"value":"classTopic_DecendingOrder","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":328,"pickleLine":191,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":329,"gherkinStepLine":183,"keywordType":"Outcome","textWithKeyword":"Then Admin see the Class Topic/Batch Name/Class Description / Staff Name and Class Dates sorted by ascending or decending order after clicking the sort icon \"ClassDescription_AscendingOrder\"","stepMatchArguments":[{"group":{"start":152,"value":"\"ClassDescription_AscendingOrder\"","children":[{"start":153,"value":"ClassDescription_AscendingOrder","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":332,"pickleLine":192,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":333,"gherkinStepLine":183,"keywordType":"Outcome","textWithKeyword":"Then Admin see the Class Topic/Batch Name/Class Description / Staff Name and Class Dates sorted by ascending or decending order after clicking the sort icon \"ClassDescription_DescendingOrder\"","stepMatchArguments":[{"group":{"start":152,"value":"\"ClassDescription_DescendingOrder\"","children":[{"start":153,"value":"ClassDescription_DescendingOrder","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":336,"pickleLine":193,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":337,"gherkinStepLine":183,"keywordType":"Outcome","textWithKeyword":"Then Admin see the Class Topic/Batch Name/Class Description / Staff Name and Class Dates sorted by ascending or decending order after clicking the sort icon \"staffName_AscendingOrder\"","stepMatchArguments":[{"group":{"start":152,"value":"\"staffName_AscendingOrder\"","children":[{"start":153,"value":"staffName_AscendingOrder","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":340,"pickleLine":194,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":341,"gherkinStepLine":183,"keywordType":"Outcome","textWithKeyword":"Then Admin see the Class Topic/Batch Name/Class Description / Staff Name and Class Dates sorted by ascending or decending order after clicking the sort icon \"staffName_DecendingOrder\"","stepMatchArguments":[{"group":{"start":152,"value":"\"staffName_DecendingOrder\"","children":[{"start":153,"value":"staffName_DecendingOrder","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":344,"pickleLine":195,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":345,"gherkinStepLine":183,"keywordType":"Outcome","textWithKeyword":"Then Admin see the Class Topic/Batch Name/Class Description / Staff Name and Class Dates sorted by ascending or decending order after clicking the sort icon \"classDate_AscendingOrder\"","stepMatchArguments":[{"group":{"start":152,"value":"\"classDate_AscendingOrder\"","children":[{"start":153,"value":"classDate_AscendingOrder","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":348,"pickleLine":196,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":349,"gherkinStepLine":183,"keywordType":"Outcome","textWithKeyword":"Then Admin see the Class Topic/Batch Name/Class Description / Staff Name and Class Dates sorted by ascending or decending order after clicking the sort icon \"classDate_DescendingOrder\"","stepMatchArguments":[{"group":{"start":152,"value":"\"classDate_DescendingOrder\"","children":[{"start":153,"value":"classDate_DescendingOrder","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":356,"pickleLine":204,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":357,"gherkinStepLine":201,"keywordType":"Action","textWithKeyword":"When Admin searches by below scenario \"searchBy_batchName\" in the Class module","stepMatchArguments":[{"group":{"start":33,"value":"\"searchBy_batchName\"","children":[{"start":34,"value":"searchBy_batchName","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":360,"pickleLine":205,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":361,"gherkinStepLine":201,"keywordType":"Action","textWithKeyword":"When Admin searches by below scenario \"searchBy_classTopic\" in the Class module","stepMatchArguments":[{"group":{"start":33,"value":"\"searchBy_classTopic\"","children":[{"start":34,"value":"searchBy_classTopic","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":364,"pickleLine":206,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":365,"gherkinStepLine":201,"keywordType":"Action","textWithKeyword":"When Admin searches by below scenario \"searchBy_ClassDescription\" in the Class module","stepMatchArguments":[{"group":{"start":33,"value":"\"searchBy_ClassDescription\"","children":[{"start":34,"value":"searchBy_ClassDescription","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":368,"pickleLine":207,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":369,"gherkinStepLine":201,"keywordType":"Action","textWithKeyword":"When Admin searches by below scenario \"searchBy_staffName\" in the Class module","stepMatchArguments":[{"group":{"start":33,"value":"\"searchBy_staffName\"","children":[{"start":34,"value":"searchBy_staffName","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end