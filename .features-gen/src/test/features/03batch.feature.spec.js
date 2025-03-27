// Generated from: src\test\features\03batch.feature
import { test } from "../../../../fixture/customFixtures.js";

test.describe('Validate Batch page functionality', () => {

  test.beforeEach('Background', async ({ Given }) => {
    await Given('Admin logged into the application successfully and in home page'); 
  });
  
  test('Validating the batch manage page', async ({ When, batchPageFixture, Then }) => { 
    await When('Admin clicks the Batch Navigation bar in the Header', null, { batchPageFixture }); 
    await Then('Admin should land on the Manage batch page', null, { batchPageFixture }); 
    await When('Admin clicks the Batch Navigation bar in the Header', null, { batchPageFixture }); 
    await Then('Admin should land on the Manage batch page', null, { batchPageFixture }); 
  });

  test('Validating Title in Batch Page', async ({ When, batchPageFixture, Then }) => { 
    await When('Admin clicks the Batch Navigation bar in the Header', null, { batchPageFixture }); 
    await Then('Admin should see the "LMS - Learning Management System" Title', null, { batchPageFixture }); 
    await When('Admin clicks the Batch Navigation bar in the Header', null, { batchPageFixture }); 
    await Then('Admin should see the "LMS - Learning Management System" Title', null, { batchPageFixture }); 
  });

  test('Validating heading in the Batch Page', async ({ When, batchPageFixture, Then }) => { 
    await When('Admin clicks the Batch Navigation bar in the Header', null, { batchPageFixture }); 
    await Then('Admin should see the "Manage Batch" Heading', null, { batchPageFixture }); 
    await When('Admin clicks the Batch Navigation bar in the Header', null, { batchPageFixture }); 
    await Then('Admin should see the "Manage Batch" Heading', null, { batchPageFixture }); 
  });

  test('Validating disabled Delete Icon under the header in the Batch Page', async ({ When, batchPageFixture, Then }) => { 
    await When('Admin clicks the Batch Navigation bar in the Header', null, { batchPageFixture }); 
    await Then('Admin should see the disabled Delete Icon under the header', null, { batchPageFixture }); 
    await When('Admin clicks the Batch Navigation bar in the Header', null, { batchPageFixture }); 
    await Then('Admin should see the disabled Delete Icon under the header', null, { batchPageFixture }); 
  });

  test('Validating pagination in the Batch Page', async ({ When, batchPageFixture, Then }) => { 
    await When('Admin clicks the Batch Navigation bar in the Header', null, { batchPageFixture }); 
    await Then('Admin should see the enabled pagination controls under the data table', null, { batchPageFixture }); 
    await When('Admin clicks the Batch Navigation bar in the Header', null, { batchPageFixture }); 
    await Then('Admin should see the enabled pagination controls under the data table', null, { batchPageFixture }); 
  });

  test('Validating edit icon in each data rows', async ({ When, batchPageFixture, Then }) => { 
    await When('Admin clicks the Batch Navigation bar in the Header', null, { batchPageFixture }); 
    await Then('Admin should see the edit icon in each row', null, { batchPageFixture }); 
    await When('Admin clicks the Batch Navigation bar in the Header', null, { batchPageFixture }); 
    await Then('Admin should see the edit icon in each row', null, { batchPageFixture }); 
  });

  test('validating delete icon in each data rows', async ({ When, batchPageFixture, Then }) => { 
    await When('Admin clicks the Batch Navigation bar in the Header', null, { batchPageFixture }); 
    await Then('Admin should see the delete icon in each row', null, { batchPageFixture }); 
    await When('Admin clicks the Batch Navigation bar in the Header', null, { batchPageFixture }); 
    await Then('Admin should see the delete icon in each row', null, { batchPageFixture }); 
  });

  test('validating checkbox in each data rows', async ({ When, batchPageFixture, Then }) => { 
    await When('Admin clicks the Batch Navigation bar in the Header', null, { batchPageFixture }); 
    await Then('Admin should see the checkbox in each row', null, { batchPageFixture }); 
    await When('Admin clicks the Batch Navigation bar in the Header', null, { batchPageFixture }); 
    await Then('Admin should see the checkbox in each row', null, { batchPageFixture }); 
  });

  test.describe('Scenario Outline name: Validating Datatable headers', () => {

    test('Example #1', async ({ When, batchPageFixture, Then }) => { 
      await When('Admin clicks the Batch Navigation bar in the Header', null, { batchPageFixture }); 
      await Then('Admin should see the datatable header "Batch Name"', null, { batchPageFixture }); 
    });

    test('Example #2', async ({ When, batchPageFixture, Then }) => { 
      await When('Admin clicks the Batch Navigation bar in the Header', null, { batchPageFixture }); 
      await Then('Admin should see the datatable header "Batch Description"', null, { batchPageFixture }); 
    });

    test('Example #3', async ({ When, batchPageFixture, Then }) => { 
      await When('Admin clicks the Batch Navigation bar in the Header', null, { batchPageFixture }); 
      await Then('Admin should see the datatable header "Batch Status"', null, { batchPageFixture }); 
    });

    test('Example #4', async ({ When, batchPageFixture, Then }) => { 
      await When('Admin clicks the Batch Navigation bar in the Header', null, { batchPageFixture }); 
      await Then('Admin should see the datatable header "No Of Classes"', null, { batchPageFixture }); 
    });

    test('Example #5', async ({ When, batchPageFixture, Then }) => { 
      await When('Admin clicks the Batch Navigation bar in the Header', null, { batchPageFixture }); 
      await Then('Admin should see the datatable header "Program Name"', null, { batchPageFixture }); 
    });

    test('Example #6', async ({ When, batchPageFixture, Then }) => { 
      await When('Admin clicks the Batch Navigation bar in the Header', null, { batchPageFixture }); 
      await Then('Admin should see the datatable header "Edit / Delete"', null, { batchPageFixture }); 
    });

  });

  test('Validating "Checkbox" in the Datatable header row', async ({ When, batchPageFixture, Then }) => { 
    await When('Admin clicks the Batch Navigation bar in the Header', null, { batchPageFixture }); 
    await Then('Admin should see the checkbox  in the datatable header row', null, { batchPageFixture }); 
    await When('Admin clicks the Batch Navigation bar in the Header', null, { batchPageFixture }); 
    await Then('Admin should see the checkbox  in the datatable header row', null, { batchPageFixture }); 
  });

  test('Validating "sort icon" next to all the datatable header', async ({ When, batchPageFixture, Then }) => { 
    await When('Admin clicks the Batch Navigation bar in the Header', null, { batchPageFixture }); 
    await Then('Admin should see the sort icon next to all Datatable headers', null, { batchPageFixture }); 
    await When('Admin clicks the Batch Navigation bar in the Header', null, { batchPageFixture }); 
    await Then('Admin should see the sort icon next to all Datatable headers', null, { batchPageFixture }); 
  });

  test.describe('Validating input data only for mandatory fields', () => {

    test('Example #1', async ({ Given, batchPageFixture, When, Then }) => { 
      await Given('Admin is on the Batch Details Pop Up WIndow', null, { batchPageFixture }); 
      await Given('Admin is on the Batch Details Pop Up WIndow', null, { batchPageFixture }); 
      await When('Admin enters the input with "ValidInput_BatchData" and clicks save button', null, { batchPageFixture }); 
      await Then('Admin should get a valid message "success" for this "ValidInput_BatchData"', null, { batchPageFixture }); 
    });

    test('Example #2', async ({ Given, batchPageFixture, When, Then }) => { 
      await Given('Admin is on the Batch Details Pop Up WIndow', null, { batchPageFixture }); 
      await Given('Admin is on the Batch Details Pop Up WIndow', null, { batchPageFixture }); 
      await When('Admin enters the input with "ValidInput_BatchData" and clicks save button', null, { batchPageFixture }); 
      await Then('Admin should get a valid message "success" for this "ValidInput_BatchData"', null, { batchPageFixture }); 
    });

    test('Example #3', async ({ Given, batchPageFixture, When, Then }) => { 
      await Given('Admin is on the Batch Details Pop Up WIndow', null, { batchPageFixture }); 
      await Given('Admin is on the Batch Details Pop Up WIndow', null, { batchPageFixture }); 
      await When('Admin enters the input with "InvalidInput_AlphabetsInBatchID" and clicks save button', null, { batchPageFixture }); 
      await Then('Admin should get a valid message "This field accept only numbers and max 5 count." for this "InvalidInput_AlphabetsInBatchID"', null, { batchPageFixture }); 
    });

    test('Example #4', async ({ Given, batchPageFixture, When, Then }) => { 
      await Given('Admin is on the Batch Details Pop Up WIndow', null, { batchPageFixture }); 
      await Given('Admin is on the Batch Details Pop Up WIndow', null, { batchPageFixture }); 
      await When('Admin enters the input with "InvalidInput_BatchEmptyDescription" and clicks save button', null, { batchPageFixture }); 
      await Then('Admin should get a valid message "Batch Description is required." for this "InvalidInput_BatchEmptyDescription"', null, { batchPageFixture }); 
    });

    test('Example #5', async ({ Given, batchPageFixture, When, Then }) => { 
      await Given('Admin is on the Batch Details Pop Up WIndow', null, { batchPageFixture }); 
      await Given('Admin is on the Batch Details Pop Up WIndow', null, { batchPageFixture }); 
      await When('Admin enters the input with "InvalidInput_BatchEmptyProgramName" and clicks save button', null, { batchPageFixture }); 
      await Then('Admin should get a valid message "Program Name is required." for this "InvalidInput_BatchEmptyProgramName"', null, { batchPageFixture }); 
    });

    test('Example #6', async ({ Given, batchPageFixture, When, Then }) => { 
      await Given('Admin is on the Batch Details Pop Up WIndow', null, { batchPageFixture }); 
      await Given('Admin is on the Batch Details Pop Up WIndow', null, { batchPageFixture }); 
      await When('Admin enters the input with "InvalidInput_BatchEmptyProgramName" and clicks save button', null, { batchPageFixture }); 
      await Then('Admin should get a valid message "Program Name is required." for this "InvalidInput_BatchEmptyProgramName"', null, { batchPageFixture }); 
    });

    test('Example #7', async ({ Given, batchPageFixture, When, Then }) => { 
      await Given('Admin is on the Batch Details Pop Up WIndow', null, { batchPageFixture }); 
      await Given('Admin is on the Batch Details Pop Up WIndow', null, { batchPageFixture }); 
      await When('Admin enters the input with "InvalidInput_BatchEmptyBatchID" and clicks save button', null, { batchPageFixture }); 
      await Then('Admin should get a valid message "Batch Name is required." for this "InvalidInput_BatchEmptyBatchID"', null, { batchPageFixture }); 
    });

    test('Example #8', async ({ Given, batchPageFixture, When, Then }) => { 
      await Given('Admin is on the Batch Details Pop Up WIndow', null, { batchPageFixture }); 
      await Given('Admin is on the Batch Details Pop Up WIndow', null, { batchPageFixture }); 
      await When('Admin enters the input with "InvalidInput_BatchEmptyStatus" and clicks save button', null, { batchPageFixture }); 
      await Then('Admin should get a valid message "Status is required." for this "InvalidInput_BatchEmptyStatus"', null, { batchPageFixture }); 
    });

    test('Example #9', async ({ Given, batchPageFixture, When, Then }) => { 
      await Given('Admin is on the Batch Details Pop Up WIndow', null, { batchPageFixture }); 
      await Given('Admin is on the Batch Details Pop Up WIndow', null, { batchPageFixture }); 
      await When('Admin enters the input with "InvalidInput_BatchEmptyNoOfClasses" and clicks save button', null, { batchPageFixture }); 
      await Then('Admin should get a valid message "Number of classes is required" for this "InvalidInput_BatchEmptyNoOfClasses"', null, { batchPageFixture }); 
    });

  });

  test('Validating cancel button in pop up window', async ({ Given, batchPageFixture, When, Then }) => { 
    await Given('Admin is on the Batch Details Pop Up WIndow', null, { batchPageFixture }); 
    await When('Admin enters the valid data to all the mandatory fields and click cancel button', null, { batchPageFixture }); 
    await Then('Admin can see the batch details popup closes without creating any batch', null, { batchPageFixture }); 
    await Given('Admin is on the Batch Details Pop Up WIndow', null, { batchPageFixture }); 
    await When('Admin enters the valid data to all the mandatory fields and click cancel button', null, { batchPageFixture }); 
    await Then('Admin can see the batch details popup closes without creating any batch', null, { batchPageFixture }); 
  });

  test('validate close icon on the batch details pop up', async ({ Given, batchPageFixture, When, Then }) => { 
    await Given('Admin is on the Batch Details Pop Up WIndow', null, { batchPageFixture }); 
    await When('Admin clicks on the close icon', null, { batchPageFixture }); 
    await Then('batch details pop up closes', null, { batchPageFixture }); 
    await Given('Admin is on the Batch Details Pop Up WIndow', null, { batchPageFixture }); 
    await When('Admin clicks on the close icon', null, { batchPageFixture }); 
    await Then('batch details pop up closes', null, { batchPageFixture }); 
  });

  test.describe('Validating all the fields exist in pop up', () => {

    test('Example #1', async ({ Given, batchPageFixture, When, Then }) => { 
      await Given('Admin is on the Batch Details Pop Up WIndow', null, { batchPageFixture }); 
      await When('Admin checks all the fields are enabled', null, { batchPageFixture }); 
      await Then('The pop up should include the fields "batchName" as type "text"', null, { batchPageFixture }); 
    });

    test('Example #2', async ({ Given, batchPageFixture, When, Then }) => { 
      await Given('Admin is on the Batch Details Pop Up WIndow', null, { batchPageFixture }); 
      await When('Admin checks all the fields are enabled', null, { batchPageFixture }); 
      await Then('The pop up should include the fields "batchNoOfClasses" as type "number"', null, { batchPageFixture }); 
    });

    test('Example #3', async ({ Given, batchPageFixture, When, Then }) => { 
      await Given('Admin is on the Batch Details Pop Up WIndow', null, { batchPageFixture }); 
      await When('Admin checks all the fields are enabled', null, { batchPageFixture }); 
      await Then('The pop up should include the fields "batchDescription" as type "text"', null, { batchPageFixture }); 
    });

    test('Example #4', async ({ Given, batchPageFixture, When, Then }) => { 
      await Given('Admin is on the Batch Details Pop Up WIndow', null, { batchPageFixture }); 
      await When('Admin checks all the fields are enabled', null, { batchPageFixture }); 
      await Then('The pop up should include the fields "programName" as type "text"', null, { batchPageFixture }); 
    });

    test('Example #5', async ({ Given, batchPageFixture, When, Then }) => { 
      await Given('Admin is on the Batch Details Pop Up WIndow', null, { batchPageFixture }); 
      await When('Admin checks all the fields are enabled', null, { batchPageFixture }); 
      await Then('The pop up should include the fields "batchStatus" as type "p-radiobutton"', null, { batchPageFixture }); 
    });

  });

  test('Validating batchname prefix selected program name', async ({ Given, batchPageFixture, When, Then }) => { 
    await Given('Admin is on the Batch Details Pop Up WIndow', null, { batchPageFixture }); 
    await When('Admin selects program name present in the dropdown', null, { batchPageFixture }); 
    await Then('Admin should see selected program name in the batch name prefix box', null, { batchPageFixture }); 
  });

  test('Validating batch name prefix box is not editable', async ({ Given, batchPageFixture, When, Then }) => { 
    await Given('Admin is on the Batch Details Pop Up WIndow', null, { batchPageFixture }); 
    await When('Admin enters alphabets in batch name prefix box', null, { batchPageFixture }); 
    await Then('Admin should see empty text box', null, { batchPageFixture }); 
  });

  test('Validating Edit icon feature in any row', async ({ Given, batchPageFixture, When, Then }) => { 
    await Given('Admin is on the Batch page', null, { batchPageFixture }); 
    await When('Admin clicks the edit icon', null, { batchPageFixture }); 
    await Then('Admin should see the Batch details pop up window', null, { batchPageFixture }); 
  });

  test('Validate program name  value is disabled to edit', async ({ Given, batchPageFixture, When, Then }) => { 
    await Given('Admin is on the Batch page', null, { batchPageFixture }); 
    await When('Admin clicks the edit icon', null, { batchPageFixture }); 
    await Then('Admin should see Program name value field is disabled for editing', null, { batchPageFixture }); 
  });

  test('Validate batch name  value is disabled to edit', async ({ Given, batchPageFixture, When, Then }) => { 
    await Given('Admin is on the Batch page', null, { batchPageFixture }); 
    await When('Admin clicks the edit icon', null, { batchPageFixture }); 
    await Then('Admin should see batch name value field is disabled for editing', null, { batchPageFixture }); 
  });

  test('Validate editing description and No. of classes fields with invalid data in the pop up', async ({ Given, batchPageFixture, When, Then }) => { 
    await Given('Admin is on the Batch Details Page', null, { batchPageFixture }); 
    await When('Admin Updates any fields with invalid data "Invalid_EditErrorMsg" and click save button', null, { batchPageFixture }); 
    await Then('Admin should get a error message under the respective field', null, { batchPageFixture }); 
  });

  test('validate save button in Edit Batch details pop up', async ({ Given, batchPageFixture, When, Then }) => { 
    await Given('Admin is on the Batch Details Page', null, { batchPageFixture }); 
    await When('Admin enters the valid data "ValidInput_EditSaveBtn" to all the mandatory fields and click save button', null, { batchPageFixture }); 
    await Then('Admin should get a successful message for editing the batch', null, { batchPageFixture }); 
  });

  test('validate cancel button in Batch details pop up', async ({ Given, batchPageFixture, When, Then }) => { 
    await Given('Admin is on the Batch Details Page', null, { batchPageFixture }); 
    await When('Admin enters the valid data "ValidInput_EditCancelBtn" to all the mandatory fields and click cancel button', null, { batchPageFixture }); 
    await Then('Admin can see the batch details popup closes without editing the batch', null, { batchPageFixture }); 
  });

  test('validate delete Icon on any row', async ({ Given, batchPageFixture, When, Then }) => { 
    await Given('Admin is on the Batch page', null, { batchPageFixture }); 
    await When('Admin clicks the delete Icon on any row', null, { batchPageFixture }); 
    await Then('Admin should see the confirm alert box with yes and no button', null, { batchPageFixture }); 
  });

  test('Validate yes button on the confirm alert box', async ({ Given, batchPageFixture, When, Then }) => { 
    await Given('Admin is on the batch confirm popup page', null, { batchPageFixture }); 
    await When('Admin clicks on the delete icon and click yes button', null, { batchPageFixture }); 
    await Then('Admin should see the successful message and the batch should be deleted', null, { batchPageFixture }); 
  });

  test('validate no button on the confirm alert box', async ({ Given, batchPageFixture, When, Then }) => { 
    await Given('Admin is on the batch confirm popup page', null, { batchPageFixture }); 
    await When('Admin clicks on the delete icon and click no button', null, { batchPageFixture }); 
    await Then('Admin should see the alert box closed and the batch is not deleted', null, { batchPageFixture }); 
  });

  test('validate close Icon on the alert box', async ({ Given, batchPageFixture, When, Then }) => { 
    await Given('Admin is on the batch confirm popup page', null, { batchPageFixture }); 
    await When('Admin clicks on the delete close icon', null, { batchPageFixture }); 
    await Then('Admin should see the alert box closed', null, { batchPageFixture }); 
    await Then('Admin should see the alert box closed', null, { batchPageFixture }); 
  });

  test('Validate single row delete with checkbox', async ({ Given, batchPageFixture, When, Then }) => { 
    await Given('Admin is on the batch page', null, { batchPageFixture }); 
    await When('Admin clicks on the delete icon under the Manage batch header', null, { batchPageFixture }); 
    await Then('The respective row in the table should be deleted', null, { batchPageFixture }); 
  });

  test('Validate multiple row delete with checkbox', async ({ Given, batchPageFixture, When, Then }) => { 
    await Given('Admin is on the batch page', null, { batchPageFixture }); 
    await When('Admin clicks more than one delete icons under the Manage batch header', null, { batchPageFixture }); 
    await Then('The respective row in the table should be deleted', null, { batchPageFixture }); 
  });

  test.describe('validate search box functionality', () => {

    test('Example #1', async ({ Given, batchPageFixture, When, Then }) => { 
      await Given('Admin is on the batch page', null, { batchPageFixture }); 
      await When('Admin enters the batch name "Name" in the search text box', null, { batchPageFixture }); 
      await Then('Admin should see the filtered batches "Name" in the data table', null, { batchPageFixture }); 
    });

    test('Example #2', async ({ Given, batchPageFixture, When, Then }) => { 
      await Given('Admin is on the batch page', null, { batchPageFixture }); 
      await When('Admin enters the batch name "abc" in the search text box', null, { batchPageFixture }); 
      await Then('Admin should see the filtered batches "abc" in the data table', null, { batchPageFixture }); 
    });

  });

  test.describe('Batch Page Pagination', () => {

    test('Example #1', async ({ Then, batchPageFixture }) => { 
      await Then('Admin navigated to the respective pages when he clicks the "next" link on the data table in batch module', null, { batchPageFixture }); 
    });

    test('Example #2', async ({ Then, batchPageFixture }) => { 
      await Then('Admin navigated to the respective pages when he clicks the "previous" link on the data table in batch module', null, { batchPageFixture }); 
    });

    test('Example #3', async ({ Then, batchPageFixture }) => { 
      await Then('Admin navigated to the respective pages when he clicks the "first" link on the data table in batch module', null, { batchPageFixture }); 
    });

    test('Example #4', async ({ Then, batchPageFixture }) => { 
      await Then('Admin navigated to the respective pages when he clicks the "last" link on the data table in batch module', null, { batchPageFixture }); 
    });

  });

  test('Validate logout option in the header is visible and enabled from the batch page', async ({ Given, batchPageFixture, When, Then }) => { 
    await Given('Admin is on the batch page', null, { batchPageFixture }); 
    await When('Admin clicks on the logout button', null, { batchPageFixture }); 
    await Then('Admin should see the Login screen Page', null, { batchPageFixture }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('src\\test\\features\\03batch.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When Admin clicks the Batch Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on the Manage batch page","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When Admin clicks the Batch Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on the Manage batch page","stepMatchArguments":[]}]},
  {"pwTestLine":17,"pickleLine":12,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When Admin clicks the Batch Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the \"LMS - Learning Management System\" Title","stepMatchArguments":[{"group":{"start":21,"value":"\"LMS - Learning Management System\"","children":[{"start":22,"value":"LMS - Learning Management System","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When Admin clicks the Batch Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the \"LMS - Learning Management System\" Title","stepMatchArguments":[{"group":{"start":21,"value":"\"LMS - Learning Management System\"","children":[{"start":22,"value":"LMS - Learning Management System","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":24,"pickleLine":18,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When Admin clicks the Batch Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the \"Manage Batch\" Heading","stepMatchArguments":[{"group":{"start":21,"value":"\"Manage Batch\"","children":[{"start":22,"value":"Manage Batch","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When Admin clicks the Batch Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the \"Manage Batch\" Heading","stepMatchArguments":[{"group":{"start":21,"value":"\"Manage Batch\"","children":[{"start":22,"value":"Manage Batch","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":31,"pickleLine":24,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When Admin clicks the Batch Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the disabled Delete Icon under the header","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"When Admin clicks the Batch Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the disabled Delete Icon under the header","stepMatchArguments":[]}]},
  {"pwTestLine":38,"pickleLine":30,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"When Admin clicks the Batch Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the enabled pagination controls under the data table","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":33,"keywordType":"Action","textWithKeyword":"When Admin clicks the Batch Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the enabled pagination controls under the data table","stepMatchArguments":[]}]},
  {"pwTestLine":45,"pickleLine":36,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":37,"keywordType":"Action","textWithKeyword":"When Admin clicks the Batch Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the edit icon in each row","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"When Admin clicks the Batch Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the edit icon in each row","stepMatchArguments":[]}]},
  {"pwTestLine":52,"pickleLine":42,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":43,"keywordType":"Action","textWithKeyword":"When Admin clicks the Batch Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":54,"gherkinStepLine":44,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the delete icon in each row","stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":45,"keywordType":"Action","textWithKeyword":"When Admin clicks the Batch Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":46,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the delete icon in each row","stepMatchArguments":[]}]},
  {"pwTestLine":59,"pickleLine":48,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":49,"keywordType":"Action","textWithKeyword":"When Admin clicks the Batch Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":50,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the checkbox in each row","stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":51,"keywordType":"Action","textWithKeyword":"When Admin clicks the Batch Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":63,"gherkinStepLine":52,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the checkbox in each row","stepMatchArguments":[]}]},
  {"pwTestLine":68,"pickleLine":59,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":69,"gherkinStepLine":55,"keywordType":"Action","textWithKeyword":"When Admin clicks the Batch Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":70,"gherkinStepLine":56,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the datatable header \"Batch Name\"","stepMatchArguments":[{"group":{"start":38,"value":"\"Batch Name\"","children":[{"start":39,"value":"Batch Name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":73,"pickleLine":60,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":74,"gherkinStepLine":55,"keywordType":"Action","textWithKeyword":"When Admin clicks the Batch Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":75,"gherkinStepLine":56,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the datatable header \"Batch Description\"","stepMatchArguments":[{"group":{"start":38,"value":"\"Batch Description\"","children":[{"start":39,"value":"Batch Description","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":78,"pickleLine":61,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":79,"gherkinStepLine":55,"keywordType":"Action","textWithKeyword":"When Admin clicks the Batch Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":80,"gherkinStepLine":56,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the datatable header \"Batch Status\"","stepMatchArguments":[{"group":{"start":38,"value":"\"Batch Status\"","children":[{"start":39,"value":"Batch Status","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":83,"pickleLine":62,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":84,"gherkinStepLine":55,"keywordType":"Action","textWithKeyword":"When Admin clicks the Batch Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":85,"gherkinStepLine":56,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the datatable header \"No Of Classes\"","stepMatchArguments":[{"group":{"start":38,"value":"\"No Of Classes\"","children":[{"start":39,"value":"No Of Classes","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":88,"pickleLine":63,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":89,"gherkinStepLine":55,"keywordType":"Action","textWithKeyword":"When Admin clicks the Batch Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":90,"gherkinStepLine":56,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the datatable header \"Program Name\"","stepMatchArguments":[{"group":{"start":38,"value":"\"Program Name\"","children":[{"start":39,"value":"Program Name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":93,"pickleLine":64,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":94,"gherkinStepLine":55,"keywordType":"Action","textWithKeyword":"When Admin clicks the Batch Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":95,"gherkinStepLine":56,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the datatable header \"Edit / Delete\"","stepMatchArguments":[{"group":{"start":38,"value":"\"Edit / Delete\"","children":[{"start":39,"value":"Edit / Delete","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":100,"pickleLine":67,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":101,"gherkinStepLine":68,"keywordType":"Action","textWithKeyword":"When Admin clicks the Batch Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":102,"gherkinStepLine":69,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the checkbox  in the datatable header row","stepMatchArguments":[]},{"pwStepLine":103,"gherkinStepLine":70,"keywordType":"Action","textWithKeyword":"When Admin clicks the Batch Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":104,"gherkinStepLine":71,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the checkbox  in the datatable header row","stepMatchArguments":[]}]},
  {"pwTestLine":107,"pickleLine":73,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":108,"gherkinStepLine":74,"keywordType":"Action","textWithKeyword":"When Admin clicks the Batch Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":109,"gherkinStepLine":75,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the sort icon next to all Datatable headers","stepMatchArguments":[]},{"pwStepLine":110,"gherkinStepLine":76,"keywordType":"Action","textWithKeyword":"When Admin clicks the Batch Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":111,"gherkinStepLine":77,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the sort icon next to all Datatable headers","stepMatchArguments":[]}]},
  {"pwTestLine":116,"pickleLine":86,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":117,"gherkinStepLine":80,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":118,"gherkinStepLine":81,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":119,"gherkinStepLine":82,"keywordType":"Action","textWithKeyword":"When Admin enters the input with \"ValidInput_BatchData\" and clicks save button","stepMatchArguments":[{"group":{"start":28,"value":"\"ValidInput_BatchData\"","children":[{"start":29,"value":"ValidInput_BatchData","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":120,"gherkinStepLine":83,"keywordType":"Outcome","textWithKeyword":"Then Admin should get a valid message \"success\" for this \"ValidInput_BatchData\"","stepMatchArguments":[{"group":{"start":33,"value":"\"success\"","children":[{"start":34,"value":"success","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":52,"value":"\"ValidInput_BatchData\"","children":[{"start":53,"value":"ValidInput_BatchData","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":123,"pickleLine":87,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":124,"gherkinStepLine":80,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":125,"gherkinStepLine":81,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":126,"gherkinStepLine":82,"keywordType":"Action","textWithKeyword":"When Admin enters the input with \"ValidInput_BatchData\" and clicks save button","stepMatchArguments":[{"group":{"start":28,"value":"\"ValidInput_BatchData\"","children":[{"start":29,"value":"ValidInput_BatchData","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":127,"gherkinStepLine":83,"keywordType":"Outcome","textWithKeyword":"Then Admin should get a valid message \"success\" for this \"ValidInput_BatchData\"","stepMatchArguments":[{"group":{"start":33,"value":"\"success\"","children":[{"start":34,"value":"success","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":52,"value":"\"ValidInput_BatchData\"","children":[{"start":53,"value":"ValidInput_BatchData","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":130,"pickleLine":88,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":131,"gherkinStepLine":80,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":132,"gherkinStepLine":81,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":133,"gherkinStepLine":82,"keywordType":"Action","textWithKeyword":"When Admin enters the input with \"InvalidInput_AlphabetsInBatchID\" and clicks save button","stepMatchArguments":[{"group":{"start":28,"value":"\"InvalidInput_AlphabetsInBatchID\"","children":[{"start":29,"value":"InvalidInput_AlphabetsInBatchID","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":134,"gherkinStepLine":83,"keywordType":"Outcome","textWithKeyword":"Then Admin should get a valid message \"This field accept only numbers and max 5 count.\" for this \"InvalidInput_AlphabetsInBatchID\"","stepMatchArguments":[{"group":{"start":33,"value":"\"This field accept only numbers and max 5 count.\"","children":[{"start":34,"value":"This field accept only numbers and max 5 count.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":92,"value":"\"InvalidInput_AlphabetsInBatchID\"","children":[{"start":93,"value":"InvalidInput_AlphabetsInBatchID","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":137,"pickleLine":89,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":138,"gherkinStepLine":80,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":139,"gherkinStepLine":81,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":140,"gherkinStepLine":82,"keywordType":"Action","textWithKeyword":"When Admin enters the input with \"InvalidInput_BatchEmptyDescription\" and clicks save button","stepMatchArguments":[{"group":{"start":28,"value":"\"InvalidInput_BatchEmptyDescription\"","children":[{"start":29,"value":"InvalidInput_BatchEmptyDescription","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":141,"gherkinStepLine":83,"keywordType":"Outcome","textWithKeyword":"Then Admin should get a valid message \"Batch Description is required.\" for this \"InvalidInput_BatchEmptyDescription\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Batch Description is required.\"","children":[{"start":34,"value":"Batch Description is required.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":75,"value":"\"InvalidInput_BatchEmptyDescription\"","children":[{"start":76,"value":"InvalidInput_BatchEmptyDescription","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":144,"pickleLine":90,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":145,"gherkinStepLine":80,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":146,"gherkinStepLine":81,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":147,"gherkinStepLine":82,"keywordType":"Action","textWithKeyword":"When Admin enters the input with \"InvalidInput_BatchEmptyProgramName\" and clicks save button","stepMatchArguments":[{"group":{"start":28,"value":"\"InvalidInput_BatchEmptyProgramName\"","children":[{"start":29,"value":"InvalidInput_BatchEmptyProgramName","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":148,"gherkinStepLine":83,"keywordType":"Outcome","textWithKeyword":"Then Admin should get a valid message \"Program Name is required.\" for this \"InvalidInput_BatchEmptyProgramName\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Program Name is required.\"","children":[{"start":34,"value":"Program Name is required.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":70,"value":"\"InvalidInput_BatchEmptyProgramName\"","children":[{"start":71,"value":"InvalidInput_BatchEmptyProgramName","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":151,"pickleLine":91,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":152,"gherkinStepLine":80,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":153,"gherkinStepLine":81,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":154,"gherkinStepLine":82,"keywordType":"Action","textWithKeyword":"When Admin enters the input with \"InvalidInput_BatchEmptyProgramName\" and clicks save button","stepMatchArguments":[{"group":{"start":28,"value":"\"InvalidInput_BatchEmptyProgramName\"","children":[{"start":29,"value":"InvalidInput_BatchEmptyProgramName","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":155,"gherkinStepLine":83,"keywordType":"Outcome","textWithKeyword":"Then Admin should get a valid message \"Program Name is required.\" for this \"InvalidInput_BatchEmptyProgramName\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Program Name is required.\"","children":[{"start":34,"value":"Program Name is required.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":70,"value":"\"InvalidInput_BatchEmptyProgramName\"","children":[{"start":71,"value":"InvalidInput_BatchEmptyProgramName","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":158,"pickleLine":92,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":159,"gherkinStepLine":80,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":160,"gherkinStepLine":81,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":161,"gherkinStepLine":82,"keywordType":"Action","textWithKeyword":"When Admin enters the input with \"InvalidInput_BatchEmptyBatchID\" and clicks save button","stepMatchArguments":[{"group":{"start":28,"value":"\"InvalidInput_BatchEmptyBatchID\"","children":[{"start":29,"value":"InvalidInput_BatchEmptyBatchID","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":162,"gherkinStepLine":83,"keywordType":"Outcome","textWithKeyword":"Then Admin should get a valid message \"Batch Name is required.\" for this \"InvalidInput_BatchEmptyBatchID\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Batch Name is required.\"","children":[{"start":34,"value":"Batch Name is required.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":68,"value":"\"InvalidInput_BatchEmptyBatchID\"","children":[{"start":69,"value":"InvalidInput_BatchEmptyBatchID","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":165,"pickleLine":93,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":166,"gherkinStepLine":80,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":167,"gherkinStepLine":81,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":168,"gherkinStepLine":82,"keywordType":"Action","textWithKeyword":"When Admin enters the input with \"InvalidInput_BatchEmptyStatus\" and clicks save button","stepMatchArguments":[{"group":{"start":28,"value":"\"InvalidInput_BatchEmptyStatus\"","children":[{"start":29,"value":"InvalidInput_BatchEmptyStatus","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":169,"gherkinStepLine":83,"keywordType":"Outcome","textWithKeyword":"Then Admin should get a valid message \"Status is required.\" for this \"InvalidInput_BatchEmptyStatus\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Status is required.\"","children":[{"start":34,"value":"Status is required.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":64,"value":"\"InvalidInput_BatchEmptyStatus\"","children":[{"start":65,"value":"InvalidInput_BatchEmptyStatus","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":172,"pickleLine":94,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":173,"gherkinStepLine":80,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":174,"gherkinStepLine":81,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":175,"gherkinStepLine":82,"keywordType":"Action","textWithKeyword":"When Admin enters the input with \"InvalidInput_BatchEmptyNoOfClasses\" and clicks save button","stepMatchArguments":[{"group":{"start":28,"value":"\"InvalidInput_BatchEmptyNoOfClasses\"","children":[{"start":29,"value":"InvalidInput_BatchEmptyNoOfClasses","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":176,"gherkinStepLine":83,"keywordType":"Outcome","textWithKeyword":"Then Admin should get a valid message \"Number of classes is required\" for this \"InvalidInput_BatchEmptyNoOfClasses\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Number of classes is required\"","children":[{"start":34,"value":"Number of classes is required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":74,"value":"\"InvalidInput_BatchEmptyNoOfClasses\"","children":[{"start":75,"value":"InvalidInput_BatchEmptyNoOfClasses","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":181,"pickleLine":96,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":182,"gherkinStepLine":97,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":183,"gherkinStepLine":98,"keywordType":"Action","textWithKeyword":"When Admin enters the valid data to all the mandatory fields and click cancel button","stepMatchArguments":[]},{"pwStepLine":184,"gherkinStepLine":99,"keywordType":"Outcome","textWithKeyword":"Then Admin can see the batch details popup closes without creating any batch","stepMatchArguments":[]},{"pwStepLine":185,"gherkinStepLine":100,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":186,"gherkinStepLine":101,"keywordType":"Action","textWithKeyword":"When Admin enters the valid data to all the mandatory fields and click cancel button","stepMatchArguments":[]},{"pwStepLine":187,"gherkinStepLine":102,"keywordType":"Outcome","textWithKeyword":"Then Admin can see the batch details popup closes without creating any batch","stepMatchArguments":[]}]},
  {"pwTestLine":190,"pickleLine":104,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":191,"gherkinStepLine":105,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":192,"gherkinStepLine":106,"keywordType":"Action","textWithKeyword":"When Admin clicks on the close icon","stepMatchArguments":[]},{"pwStepLine":193,"gherkinStepLine":107,"keywordType":"Outcome","textWithKeyword":"Then batch details pop up closes","stepMatchArguments":[]},{"pwStepLine":194,"gherkinStepLine":108,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":195,"gherkinStepLine":109,"keywordType":"Action","textWithKeyword":"When Admin clicks on the close icon","stepMatchArguments":[]},{"pwStepLine":196,"gherkinStepLine":110,"keywordType":"Outcome","textWithKeyword":"Then batch details pop up closes","stepMatchArguments":[]}]},
  {"pwTestLine":201,"pickleLine":118,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":202,"gherkinStepLine":113,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":203,"gherkinStepLine":114,"keywordType":"Action","textWithKeyword":"When Admin checks all the fields are enabled","stepMatchArguments":[]},{"pwStepLine":204,"gherkinStepLine":115,"keywordType":"Outcome","textWithKeyword":"Then The pop up should include the fields \"batchName\" as type \"text\"","stepMatchArguments":[{"group":{"start":37,"value":"\"batchName\"","children":[{"start":38,"value":"batchName","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":57,"value":"\"text\"","children":[{"start":58,"value":"text","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":207,"pickleLine":119,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":208,"gherkinStepLine":113,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":209,"gherkinStepLine":114,"keywordType":"Action","textWithKeyword":"When Admin checks all the fields are enabled","stepMatchArguments":[]},{"pwStepLine":210,"gherkinStepLine":115,"keywordType":"Outcome","textWithKeyword":"Then The pop up should include the fields \"batchNoOfClasses\" as type \"number\"","stepMatchArguments":[{"group":{"start":37,"value":"\"batchNoOfClasses\"","children":[{"start":38,"value":"batchNoOfClasses","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":64,"value":"\"number\"","children":[{"start":65,"value":"number","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":213,"pickleLine":120,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":214,"gherkinStepLine":113,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":215,"gherkinStepLine":114,"keywordType":"Action","textWithKeyword":"When Admin checks all the fields are enabled","stepMatchArguments":[]},{"pwStepLine":216,"gherkinStepLine":115,"keywordType":"Outcome","textWithKeyword":"Then The pop up should include the fields \"batchDescription\" as type \"text\"","stepMatchArguments":[{"group":{"start":37,"value":"\"batchDescription\"","children":[{"start":38,"value":"batchDescription","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":64,"value":"\"text\"","children":[{"start":65,"value":"text","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":219,"pickleLine":121,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":220,"gherkinStepLine":113,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":221,"gherkinStepLine":114,"keywordType":"Action","textWithKeyword":"When Admin checks all the fields are enabled","stepMatchArguments":[]},{"pwStepLine":222,"gherkinStepLine":115,"keywordType":"Outcome","textWithKeyword":"Then The pop up should include the fields \"programName\" as type \"text\"","stepMatchArguments":[{"group":{"start":37,"value":"\"programName\"","children":[{"start":38,"value":"programName","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":59,"value":"\"text\"","children":[{"start":60,"value":"text","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":225,"pickleLine":122,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":226,"gherkinStepLine":113,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":227,"gherkinStepLine":114,"keywordType":"Action","textWithKeyword":"When Admin checks all the fields are enabled","stepMatchArguments":[]},{"pwStepLine":228,"gherkinStepLine":115,"keywordType":"Outcome","textWithKeyword":"Then The pop up should include the fields \"batchStatus\" as type \"p-radiobutton\"","stepMatchArguments":[{"group":{"start":37,"value":"\"batchStatus\"","children":[{"start":38,"value":"batchStatus","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":59,"value":"\"p-radiobutton\"","children":[{"start":60,"value":"p-radiobutton","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":233,"pickleLine":125,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":234,"gherkinStepLine":126,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":235,"gherkinStepLine":127,"keywordType":"Action","textWithKeyword":"When Admin selects program name present in the dropdown","stepMatchArguments":[]},{"pwStepLine":236,"gherkinStepLine":128,"keywordType":"Outcome","textWithKeyword":"Then Admin should see selected program name in the batch name prefix box","stepMatchArguments":[]}]},
  {"pwTestLine":239,"pickleLine":130,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":240,"gherkinStepLine":131,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":241,"gherkinStepLine":132,"keywordType":"Action","textWithKeyword":"When Admin enters alphabets in batch name prefix box","stepMatchArguments":[]},{"pwStepLine":242,"gherkinStepLine":133,"keywordType":"Outcome","textWithKeyword":"Then Admin should see empty text box","stepMatchArguments":[]}]},
  {"pwTestLine":245,"pickleLine":135,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":246,"gherkinStepLine":136,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch page","stepMatchArguments":[]},{"pwStepLine":247,"gherkinStepLine":137,"keywordType":"Action","textWithKeyword":"When Admin clicks the edit icon","stepMatchArguments":[]},{"pwStepLine":248,"gherkinStepLine":138,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the Batch details pop up window","stepMatchArguments":[]}]},
  {"pwTestLine":251,"pickleLine":140,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":252,"gherkinStepLine":141,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch page","stepMatchArguments":[]},{"pwStepLine":253,"gherkinStepLine":142,"keywordType":"Action","textWithKeyword":"When Admin clicks the edit icon","stepMatchArguments":[]},{"pwStepLine":254,"gherkinStepLine":143,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Program name value field is disabled for editing","stepMatchArguments":[]}]},
  {"pwTestLine":257,"pickleLine":145,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":258,"gherkinStepLine":146,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch page","stepMatchArguments":[]},{"pwStepLine":259,"gherkinStepLine":147,"keywordType":"Action","textWithKeyword":"When Admin clicks the edit icon","stepMatchArguments":[]},{"pwStepLine":260,"gherkinStepLine":148,"keywordType":"Outcome","textWithKeyword":"Then Admin should see batch name value field is disabled for editing","stepMatchArguments":[]}]},
  {"pwTestLine":263,"pickleLine":150,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":264,"gherkinStepLine":151,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Page","stepMatchArguments":[]},{"pwStepLine":265,"gherkinStepLine":152,"keywordType":"Action","textWithKeyword":"When Admin Updates any fields with invalid data \"Invalid_EditErrorMsg\" and click save button","stepMatchArguments":[{"group":{"start":43,"value":"\"Invalid_EditErrorMsg\"","children":[{"start":44,"value":"Invalid_EditErrorMsg","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":266,"gherkinStepLine":153,"keywordType":"Outcome","textWithKeyword":"Then Admin should get a error message under the respective field","stepMatchArguments":[]}]},
  {"pwTestLine":269,"pickleLine":155,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":270,"gherkinStepLine":156,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Page","stepMatchArguments":[]},{"pwStepLine":271,"gherkinStepLine":157,"keywordType":"Action","textWithKeyword":"When Admin enters the valid data \"ValidInput_EditSaveBtn\" to all the mandatory fields and click save button","stepMatchArguments":[{"group":{"start":28,"value":"\"ValidInput_EditSaveBtn\"","children":[{"start":29,"value":"ValidInput_EditSaveBtn","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":272,"gherkinStepLine":158,"keywordType":"Outcome","textWithKeyword":"Then Admin should get a successful message for editing the batch","stepMatchArguments":[]}]},
  {"pwTestLine":275,"pickleLine":160,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":276,"gherkinStepLine":161,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Page","stepMatchArguments":[]},{"pwStepLine":277,"gherkinStepLine":162,"keywordType":"Action","textWithKeyword":"When Admin enters the valid data \"ValidInput_EditCancelBtn\" to all the mandatory fields and click cancel button","stepMatchArguments":[{"group":{"start":28,"value":"\"ValidInput_EditCancelBtn\"","children":[{"start":29,"value":"ValidInput_EditCancelBtn","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":278,"gherkinStepLine":163,"keywordType":"Outcome","textWithKeyword":"Then Admin can see the batch details popup closes without editing the batch","stepMatchArguments":[]}]},
  {"pwTestLine":281,"pickleLine":166,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":282,"gherkinStepLine":167,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch page","stepMatchArguments":[]},{"pwStepLine":283,"gherkinStepLine":168,"keywordType":"Action","textWithKeyword":"When Admin clicks the delete Icon on any row","stepMatchArguments":[]},{"pwStepLine":284,"gherkinStepLine":169,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the confirm alert box with yes and no button","stepMatchArguments":[]}]},
  {"pwTestLine":287,"pickleLine":171,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":288,"gherkinStepLine":172,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch confirm popup page","stepMatchArguments":[]},{"pwStepLine":289,"gherkinStepLine":173,"keywordType":"Action","textWithKeyword":"When Admin clicks on the delete icon and click yes button","stepMatchArguments":[]},{"pwStepLine":290,"gherkinStepLine":174,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the successful message and the batch should be deleted","stepMatchArguments":[]}]},
  {"pwTestLine":293,"pickleLine":176,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":294,"gherkinStepLine":177,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch confirm popup page","stepMatchArguments":[]},{"pwStepLine":295,"gherkinStepLine":178,"keywordType":"Action","textWithKeyword":"When Admin clicks on the delete icon and click no button","stepMatchArguments":[]},{"pwStepLine":296,"gherkinStepLine":179,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the alert box closed and the batch is not deleted","stepMatchArguments":[]}]},
  {"pwTestLine":299,"pickleLine":181,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":300,"gherkinStepLine":182,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch confirm popup page","stepMatchArguments":[]},{"pwStepLine":301,"gherkinStepLine":183,"keywordType":"Action","textWithKeyword":"When Admin clicks on the delete close icon","stepMatchArguments":[]},{"pwStepLine":302,"gherkinStepLine":184,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the alert box closed","stepMatchArguments":[]},{"pwStepLine":303,"gherkinStepLine":185,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the alert box closed","stepMatchArguments":[]}]},
  {"pwTestLine":306,"pickleLine":187,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":307,"gherkinStepLine":188,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch page","stepMatchArguments":[]},{"pwStepLine":308,"gherkinStepLine":189,"keywordType":"Action","textWithKeyword":"When Admin clicks on the delete icon under the Manage batch header","stepMatchArguments":[]},{"pwStepLine":309,"gherkinStepLine":190,"keywordType":"Outcome","textWithKeyword":"Then The respective row in the table should be deleted","stepMatchArguments":[]}]},
  {"pwTestLine":312,"pickleLine":192,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":313,"gherkinStepLine":193,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch page","stepMatchArguments":[]},{"pwStepLine":314,"gherkinStepLine":194,"keywordType":"Action","textWithKeyword":"When Admin clicks more than one delete icons under the Manage batch header","stepMatchArguments":[]},{"pwStepLine":315,"gherkinStepLine":195,"keywordType":"Outcome","textWithKeyword":"Then The respective row in the table should be deleted","stepMatchArguments":[]}]},
  {"pwTestLine":320,"pickleLine":207,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":321,"gherkinStepLine":202,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch page","stepMatchArguments":[]},{"pwStepLine":322,"gherkinStepLine":203,"keywordType":"Action","textWithKeyword":"When Admin enters the batch name \"Name\" in the search text box","stepMatchArguments":[{"group":{"start":28,"value":"\"Name\"","children":[{"start":29,"value":"Name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":323,"gherkinStepLine":204,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the filtered batches \"Name\" in the data table","stepMatchArguments":[{"group":{"start":38,"value":"\"Name\"","children":[{"start":39,"value":"Name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":326,"pickleLine":208,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":327,"gherkinStepLine":202,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch page","stepMatchArguments":[]},{"pwStepLine":328,"gherkinStepLine":203,"keywordType":"Action","textWithKeyword":"When Admin enters the batch name \"abc\" in the search text box","stepMatchArguments":[{"group":{"start":28,"value":"\"abc\"","children":[{"start":29,"value":"abc","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":329,"gherkinStepLine":204,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the filtered batches \"abc\" in the data table","stepMatchArguments":[{"group":{"start":38,"value":"\"abc\"","children":[{"start":39,"value":"abc","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":336,"pickleLine":215,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":337,"gherkinStepLine":212,"keywordType":"Outcome","textWithKeyword":"Then Admin navigated to the respective pages when he clicks the \"next\" link on the data table in batch module","stepMatchArguments":[{"group":{"start":59,"value":"\"next\"","children":[{"start":60,"value":"next","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":340,"pickleLine":216,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":341,"gherkinStepLine":212,"keywordType":"Outcome","textWithKeyword":"Then Admin navigated to the respective pages when he clicks the \"previous\" link on the data table in batch module","stepMatchArguments":[{"group":{"start":59,"value":"\"previous\"","children":[{"start":60,"value":"previous","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":344,"pickleLine":217,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":345,"gherkinStepLine":212,"keywordType":"Outcome","textWithKeyword":"Then Admin navigated to the respective pages when he clicks the \"first\" link on the data table in batch module","stepMatchArguments":[{"group":{"start":59,"value":"\"first\"","children":[{"start":60,"value":"first","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":348,"pickleLine":218,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":349,"gherkinStepLine":212,"keywordType":"Outcome","textWithKeyword":"Then Admin navigated to the respective pages when he clicks the \"last\" link on the data table in batch module","stepMatchArguments":[{"group":{"start":59,"value":"\"last\"","children":[{"start":60,"value":"last","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":354,"pickleLine":221,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":355,"gherkinStepLine":222,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch page","stepMatchArguments":[]},{"pwStepLine":356,"gherkinStepLine":223,"keywordType":"Action","textWithKeyword":"When Admin clicks on the logout button","stepMatchArguments":[]},{"pwStepLine":357,"gherkinStepLine":224,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the Login screen Page","stepMatchArguments":[]}]},
]; // bdd-data-end