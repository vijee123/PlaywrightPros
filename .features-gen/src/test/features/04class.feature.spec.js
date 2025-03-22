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

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('src\\test\\features\\04class.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":7,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on the Manage class page","stepMatchArguments":[]}]},
  {"pwTestLine":14,"pickleLine":10,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the Manage Class Header","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":13,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the Search bar in the Manage Class page","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":22,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the datatable heading like \"Batch Name\"","stepMatchArguments":[{"group":{"start":44,"value":"\"Batch Name\"","children":[{"start":45,"value":"Batch Name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":28,"pickleLine":23,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the datatable heading like \"Class Topic\"","stepMatchArguments":[{"group":{"start":44,"value":"\"Class Topic\"","children":[{"start":45,"value":"Class Topic","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":32,"pickleLine":24,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the datatable heading like \"Class Description\"","stepMatchArguments":[{"group":{"start":44,"value":"\"Class Description\"","children":[{"start":45,"value":"Class Description","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":36,"pickleLine":25,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the datatable heading like \"Status\"","stepMatchArguments":[{"group":{"start":44,"value":"\"Status\"","children":[{"start":45,"value":"Status","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":40,"pickleLine":26,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the datatable heading like \"Class Date\"","stepMatchArguments":[{"group":{"start":44,"value":"\"Class Date\"","children":[{"start":45,"value":"Class Date","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":44,"pickleLine":27,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the datatable heading like \"Staff Name\"","stepMatchArguments":[{"group":{"start":44,"value":"\"Staff Name\"","children":[{"start":45,"value":"Staff Name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":52,"pickleLine":34,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below \"paginationText\" pagination controls under the data table","stepMatchArguments":[{"group":{"start":27,"value":"\"paginationText\"","children":[{"start":28,"value":"paginationText","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":56,"pickleLine":35,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below \"pageNumber\" pagination controls under the data table","stepMatchArguments":[{"group":{"start":27,"value":"\"pageNumber\"","children":[{"start":28,"value":"pageNumber","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":60,"pickleLine":36,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below \"firstPageIcon\" pagination controls under the data table","stepMatchArguments":[{"group":{"start":27,"value":"\"firstPageIcon\"","children":[{"start":28,"value":"firstPageIcon","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":64,"pickleLine":37,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":65,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below \"previousPageIcon\" pagination controls under the data table","stepMatchArguments":[{"group":{"start":27,"value":"\"previousPageIcon\"","children":[{"start":28,"value":"previousPageIcon","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":68,"pickleLine":38,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":69,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below \"nextPageIcon\" pagination controls under the data table","stepMatchArguments":[{"group":{"start":27,"value":"\"nextPageIcon\"","children":[{"start":28,"value":"nextPageIcon","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":72,"pickleLine":39,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":73,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below \"lastPageIcon\" pagination controls under the data table","stepMatchArguments":[{"group":{"start":27,"value":"\"lastPageIcon\"","children":[{"start":28,"value":"lastPageIcon","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":78,"pickleLine":41,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":79,"gherkinStepLine":42,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the sort icon in all the fields of the datatable","stepMatchArguments":[]}]},
  {"pwTestLine":82,"pickleLine":44,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":83,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the Delete button under the Manage class page header.","stepMatchArguments":[]}]},
  {"pwTestLine":86,"pickleLine":47,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":87,"gherkinStepLine":48,"keywordType":"Outcome","textWithKeyword":"Then Admin should see footer message Total no of classes at the bottom of the Manage class page","stepMatchArguments":[]}]},
  {"pwTestLine":92,"pickleLine":57,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":93,"gherkinStepLine":51,"keywordType":"Action","textWithKeyword":"When Admin clicks the Add New Class button and enters the details of \"validClass\" in the Create Class form","stepMatchArguments":[{"group":{"start":64,"value":"\"validClass\"","children":[{"start":65,"value":"validClass","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":94,"gherkinStepLine":52,"keywordType":"Action","textWithKeyword":"And Admin clicks the Save button","stepMatchArguments":[]},{"pwStepLine":95,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the valid \"success\"","stepMatchArguments":[{"group":{"start":27,"value":"\"success\"","children":[{"start":28,"value":"success","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":98,"pickleLine":58,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":99,"gherkinStepLine":51,"keywordType":"Action","textWithKeyword":"When Admin clicks the Add New Class button and enters the details of \"withoutStatus\" in the Create Class form","stepMatchArguments":[{"group":{"start":64,"value":"\"withoutStatus\"","children":[{"start":65,"value":"withoutStatus","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":100,"gherkinStepLine":52,"keywordType":"Action","textWithKeyword":"And Admin clicks the Save button","stepMatchArguments":[]},{"pwStepLine":101,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the valid \"statusErrorMsg\"","stepMatchArguments":[{"group":{"start":27,"value":"\"statusErrorMsg\"","children":[{"start":28,"value":"statusErrorMsg","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":104,"pickleLine":59,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":105,"gherkinStepLine":51,"keywordType":"Action","textWithKeyword":"When Admin clicks the Add New Class button and enters the details of \"withoutStaffName\" in the Create Class form","stepMatchArguments":[{"group":{"start":64,"value":"\"withoutStaffName\"","children":[{"start":65,"value":"withoutStaffName","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":106,"gherkinStepLine":52,"keywordType":"Action","textWithKeyword":"And Admin clicks the Save button","stepMatchArguments":[]},{"pwStepLine":107,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the valid \"staffNameErrorMsg\"","stepMatchArguments":[{"group":{"start":27,"value":"\"staffNameErrorMsg\"","children":[{"start":28,"value":"staffNameErrorMsg","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":110,"pickleLine":60,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":111,"gherkinStepLine":51,"keywordType":"Action","textWithKeyword":"When Admin clicks the Add New Class button and enters the details of \"withoutClassDate\" in the Create Class form","stepMatchArguments":[{"group":{"start":64,"value":"\"withoutClassDate\"","children":[{"start":65,"value":"withoutClassDate","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":112,"gherkinStepLine":52,"keywordType":"Action","textWithKeyword":"And Admin clicks the Save button","stepMatchArguments":[]},{"pwStepLine":113,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the valid \"classDateErrorMsg\"","stepMatchArguments":[{"group":{"start":27,"value":"\"classDateErrorMsg\"","children":[{"start":28,"value":"classDateErrorMsg","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":116,"pickleLine":61,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":117,"gherkinStepLine":51,"keywordType":"Action","textWithKeyword":"When Admin clicks the Add New Class button and enters the details of \"withoutClassTopic\" in the Create Class form","stepMatchArguments":[{"group":{"start":64,"value":"\"withoutClassTopic\"","children":[{"start":65,"value":"withoutClassTopic","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":118,"gherkinStepLine":52,"keywordType":"Action","textWithKeyword":"And Admin clicks the Save button","stepMatchArguments":[]},{"pwStepLine":119,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the valid \"classTopicErrorMsg\"","stepMatchArguments":[{"group":{"start":27,"value":"\"classTopicErrorMsg\"","children":[{"start":28,"value":"classTopicErrorMsg","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":122,"pickleLine":62,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":123,"gherkinStepLine":51,"keywordType":"Action","textWithKeyword":"When Admin clicks the Add New Class button and enters the details of \"withoutBatchName\" in the Create Class form","stepMatchArguments":[{"group":{"start":64,"value":"\"withoutBatchName\"","children":[{"start":65,"value":"withoutBatchName","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":124,"gherkinStepLine":52,"keywordType":"Action","textWithKeyword":"And Admin clicks the Save button","stepMatchArguments":[]},{"pwStepLine":125,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the valid \"batchNameErrorMsg\"","stepMatchArguments":[{"group":{"start":27,"value":"\"batchNameErrorMsg\"","children":[{"start":28,"value":"batchNameErrorMsg","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":128,"pickleLine":63,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":129,"gherkinStepLine":51,"keywordType":"Action","textWithKeyword":"When Admin clicks the Add New Class button and enters the details of \"withoutClassDesc\" in the Create Class form","stepMatchArguments":[{"group":{"start":64,"value":"\"withoutClassDesc\"","children":[{"start":65,"value":"withoutClassDesc","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":130,"gherkinStepLine":52,"keywordType":"Action","textWithKeyword":"And Admin clicks the Save button","stepMatchArguments":[]},{"pwStepLine":131,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the valid \"success\"","stepMatchArguments":[{"group":{"start":27,"value":"\"success\"","children":[{"start":28,"value":"success","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":134,"pickleLine":64,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":135,"gherkinStepLine":51,"keywordType":"Action","textWithKeyword":"When Admin clicks the Add New Class button and enters the details of \"withoutComments\" in the Create Class form","stepMatchArguments":[{"group":{"start":64,"value":"\"withoutComments\"","children":[{"start":65,"value":"withoutComments","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":136,"gherkinStepLine":52,"keywordType":"Action","textWithKeyword":"And Admin clicks the Save button","stepMatchArguments":[]},{"pwStepLine":137,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the valid \"success\"","stepMatchArguments":[{"group":{"start":27,"value":"\"success\"","children":[{"start":28,"value":"success","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":140,"pickleLine":65,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":141,"gherkinStepLine":51,"keywordType":"Action","textWithKeyword":"When Admin clicks the Add New Class button and enters the details of \"withoutNotes\" in the Create Class form","stepMatchArguments":[{"group":{"start":64,"value":"\"withoutNotes\"","children":[{"start":65,"value":"withoutNotes","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":142,"gherkinStepLine":52,"keywordType":"Action","textWithKeyword":"And Admin clicks the Save button","stepMatchArguments":[]},{"pwStepLine":143,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the valid \"success\"","stepMatchArguments":[{"group":{"start":27,"value":"\"success\"","children":[{"start":28,"value":"success","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":146,"pickleLine":66,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":147,"gherkinStepLine":51,"keywordType":"Action","textWithKeyword":"When Admin clicks the Add New Class button and enters the details of \"withoutRec\" in the Create Class form","stepMatchArguments":[{"group":{"start":64,"value":"\"withoutRec\"","children":[{"start":65,"value":"withoutRec","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":148,"gherkinStepLine":52,"keywordType":"Action","textWithKeyword":"And Admin clicks the Save button","stepMatchArguments":[]},{"pwStepLine":149,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the valid \"success\"","stepMatchArguments":[{"group":{"start":27,"value":"\"success\"","children":[{"start":28,"value":"success","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":152,"pickleLine":67,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":153,"gherkinStepLine":51,"keywordType":"Action","textWithKeyword":"When Admin clicks the Add New Class button and enters the details of \"emptyForm\" in the Create Class form","stepMatchArguments":[{"group":{"start":64,"value":"\"emptyForm\"","children":[{"start":65,"value":"emptyForm","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":154,"gherkinStepLine":52,"keywordType":"Action","textWithKeyword":"And Admin clicks the Save button","stepMatchArguments":[]},{"pwStepLine":155,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the valid \"allErrorMsg\"","stepMatchArguments":[{"group":{"start":27,"value":"\"allErrorMsg\"","children":[{"start":28,"value":"allErrorMsg","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":160,"pickleLine":70,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":161,"gherkinStepLine":71,"keywordType":"Action","textWithKeyword":"When Admin clicks a add new class under the class menu bar","stepMatchArguments":[]},{"pwStepLine":162,"gherkinStepLine":72,"keywordType":"Outcome","textWithKeyword":"Then Admin should see a popup open for class details with empty form along with SAVE and CANCEL button and Close(X) Icon","stepMatchArguments":[]}]},
  {"pwTestLine":167,"pickleLine":80,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":168,"gherkinStepLine":75,"keywordType":"Action","textWithKeyword":"When Admin clicks a add new class under the class menu bar","stepMatchArguments":[]},{"pwStepLine":169,"gherkinStepLine":76,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below input fields \"BatchName\" and their text boxes in the class details form","stepMatchArguments":[{"group":{"start":40,"value":"\"BatchName\"","children":[{"start":41,"value":"BatchName","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":172,"pickleLine":81,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":173,"gherkinStepLine":75,"keywordType":"Action","textWithKeyword":"When Admin clicks a add new class under the class menu bar","stepMatchArguments":[]},{"pwStepLine":174,"gherkinStepLine":76,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below input fields \"ClassTopic\" and their text boxes in the class details form","stepMatchArguments":[{"group":{"start":40,"value":"\"ClassTopic\"","children":[{"start":41,"value":"ClassTopic","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":177,"pickleLine":82,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":178,"gherkinStepLine":75,"keywordType":"Action","textWithKeyword":"When Admin clicks a add new class under the class menu bar","stepMatchArguments":[]},{"pwStepLine":179,"gherkinStepLine":76,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below input fields \"ClassDescription\" and their text boxes in the class details form","stepMatchArguments":[{"group":{"start":40,"value":"\"ClassDescription\"","children":[{"start":41,"value":"ClassDescription","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":182,"pickleLine":83,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":183,"gherkinStepLine":75,"keywordType":"Action","textWithKeyword":"When Admin clicks a add new class under the class menu bar","stepMatchArguments":[]},{"pwStepLine":184,"gherkinStepLine":76,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below input fields \"Status\" and their text boxes in the class details form","stepMatchArguments":[{"group":{"start":40,"value":"\"Status\"","children":[{"start":41,"value":"Status","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":187,"pickleLine":84,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":188,"gherkinStepLine":75,"keywordType":"Action","textWithKeyword":"When Admin clicks a add new class under the class menu bar","stepMatchArguments":[]},{"pwStepLine":189,"gherkinStepLine":76,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below input fields \"ClassDates\" and their text boxes in the class details form","stepMatchArguments":[{"group":{"start":40,"value":"\"ClassDates\"","children":[{"start":41,"value":"ClassDates","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":192,"pickleLine":85,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":193,"gherkinStepLine":75,"keywordType":"Action","textWithKeyword":"When Admin clicks a add new class under the class menu bar","stepMatchArguments":[]},{"pwStepLine":194,"gherkinStepLine":76,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below input fields \"Class No\" and their text boxes in the class details form","stepMatchArguments":[{"group":{"start":40,"value":"\"Class No\"","children":[{"start":41,"value":"Class No","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":197,"pickleLine":86,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":198,"gherkinStepLine":75,"keywordType":"Action","textWithKeyword":"When Admin clicks a add new class under the class menu bar","stepMatchArguments":[]},{"pwStepLine":199,"gherkinStepLine":76,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below input fields \"StaffName\" and their text boxes in the class details form","stepMatchArguments":[{"group":{"start":40,"value":"\"StaffName\"","children":[{"start":41,"value":"StaffName","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":202,"pickleLine":87,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":203,"gherkinStepLine":75,"keywordType":"Action","textWithKeyword":"When Admin clicks a add new class under the class menu bar","stepMatchArguments":[]},{"pwStepLine":204,"gherkinStepLine":76,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below input fields \"Comments\" and their text boxes in the class details form","stepMatchArguments":[{"group":{"start":40,"value":"\"Comments\"","children":[{"start":41,"value":"Comments","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":207,"pickleLine":88,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":208,"gherkinStepLine":75,"keywordType":"Action","textWithKeyword":"When Admin clicks a add new class under the class menu bar","stepMatchArguments":[]},{"pwStepLine":209,"gherkinStepLine":76,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below input fields \"Notes\" and their text boxes in the class details form","stepMatchArguments":[{"group":{"start":40,"value":"\"Notes\"","children":[{"start":41,"value":"Notes","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":212,"pickleLine":89,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":213,"gherkinStepLine":75,"keywordType":"Action","textWithKeyword":"When Admin clicks a add new class under the class menu bar","stepMatchArguments":[]},{"pwStepLine":214,"gherkinStepLine":76,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below input fields \"Recording\" and their text boxes in the class details form","stepMatchArguments":[{"group":{"start":40,"value":"\"Recording\"","children":[{"start":41,"value":"Recording","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":219,"pickleLine":91,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":220,"gherkinStepLine":92,"keywordType":"Context","textWithKeyword":"Given Admin is on the Class Popup window","stepMatchArguments":[]},{"pwStepLine":221,"gherkinStepLine":93,"keywordType":"Action","textWithKeyword":"When Admin selects class date in date picker","stepMatchArguments":[]},{"pwStepLine":222,"gherkinStepLine":94,"keywordType":"Outcome","textWithKeyword":"Then Admin should see no of class value is added automatically","stepMatchArguments":[]}]},
  {"pwTestLine":225,"pickleLine":96,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":226,"gherkinStepLine":97,"keywordType":"Context","textWithKeyword":"Given Admin is on the Class Popup window","stepMatchArguments":[]},{"pwStepLine":227,"gherkinStepLine":98,"keywordType":"Action","textWithKeyword":"When Admin clicks date picker","stepMatchArguments":[]},{"pwStepLine":228,"gherkinStepLine":99,"keywordType":"Outcome","textWithKeyword":"Then Admin should see weekends dates are disabled to select","stepMatchArguments":[]}]},
  {"pwTestLine":233,"pickleLine":108,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":234,"gherkinStepLine":102,"keywordType":"Context","textWithKeyword":"Given Admin clicks the Add New Class button and enters the details of \"validClass\" in the Create Class form","stepMatchArguments":[{"group":{"start":64,"value":"\"validClass\"","children":[{"start":65,"value":"validClass","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":235,"gherkinStepLine":103,"keywordType":"Action","textWithKeyword":"When Admin clicks Cancel button OR Close Icon \"CancelBtn\"","stepMatchArguments":[{"group":{"start":41,"value":"\"CancelBtn\"","children":[{"start":42,"value":"CancelBtn","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":236,"gherkinStepLine":104,"keywordType":"Outcome","textWithKeyword":"Then Class Details popup window should be closed without saving","stepMatchArguments":[]}]},
  {"pwTestLine":239,"pickleLine":109,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":240,"gherkinStepLine":102,"keywordType":"Context","textWithKeyword":"Given Admin clicks the Add New Class button and enters the details of \"validClass\" in the Create Class form","stepMatchArguments":[{"group":{"start":64,"value":"\"validClass\"","children":[{"start":65,"value":"validClass","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":241,"gherkinStepLine":103,"keywordType":"Action","textWithKeyword":"When Admin clicks Cancel button OR Close Icon \"CloseIcon\"","stepMatchArguments":[{"group":{"start":41,"value":"\"CloseIcon\"","children":[{"start":42,"value":"CloseIcon","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":242,"gherkinStepLine":104,"keywordType":"Outcome","textWithKeyword":"Then Class Details popup window should be closed without saving","stepMatchArguments":[]}]},
]; // bdd-data-end