// Generated from: src\test\features\03batch.feature
import { test } from "../../../../fixture/customFixtures.js";

test.describe('Validate Batch page functionality', () => {

  test.beforeEach('Background', async ({ Given }) => {
    await Given('Admin logged into the application successfully and in home page'); 
  });
  
  test('Validating the batch manage page', async ({ When, batchPageFixture, Then }) => { 
    await When('Admin clicks the Batch Navigation bar in the Header', null, { batchPageFixture }); 
    await Then('Admin should land on the Manage batch page', null, { batchPageFixture }); 
  });

  test('Validating Title in Batch Page', async ({ When, batchPageFixture, Then }) => { 
    await When('Admin clicks the Batch Navigation bar in the Header', null, { batchPageFixture }); 
    await Then('Admin should see the "LMS - Learning Management System" Title', null, { batchPageFixture }); 
  });

  test('Validating heading in the Batch Page', async ({ When, batchPageFixture, Then }) => { 
    await When('Admin clicks the Batch Navigation bar in the Header', null, { batchPageFixture }); 
    await Then('Admin should see the "Manage Batch" Heading', null, { batchPageFixture }); 
  });

  test('Validating disabled Delete Icon under the header in the Batch Page', async ({ When, batchPageFixture, Then }) => { 
    await When('Admin clicks the Batch Navigation bar in the Header', null, { batchPageFixture }); 
    await Then('Admin should see the disabled Delete Icon under the header', null, { batchPageFixture }); 
  });

  test('Validating pagination in the Batch Page', async ({ When, batchPageFixture, Then }) => { 
    await When('Admin clicks the Batch Navigation bar in the Header', null, { batchPageFixture }); 
    await Then('Admin should see the enabled pagination controls under the data table', null, { batchPageFixture }); 
  });

  test('Validating edit icon in each data rows', async ({ When, batchPageFixture, Then }) => { 
    await When('Admin clicks the Batch Navigation bar in the Header', null, { batchPageFixture }); 
    await Then('Admin should see the edit icon in each row', null, { batchPageFixture }); 
  });

  test('validating delete icon in each data rows', async ({ When, batchPageFixture, Then }) => { 
    await When('Admin clicks the Batch Navigation bar in the Header', null, { batchPageFixture }); 
    await Then('Admin should see the delete icon in each row', null, { batchPageFixture }); 
  });

  test('validating checkbox in each data rows', async ({ When, batchPageFixture, Then }) => { 
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
  });

  test('Validating "sort icon" next to all the datatable header', async ({ When, batchPageFixture, Then }) => { 
    await When('Admin clicks the Batch Navigation bar in the Header', null, { batchPageFixture }); 
    await Then('Admin should see the sort icon next to all Datatable headers', null, { batchPageFixture }); 
  });

  test.describe('Validating input data only for mandatory fields', () => {

    test('Example #1', async ({ Given, batchPageFixture, When, Then }) => { 
      await Given('Admin is on the Batch Details Pop Up WIndow', null, { batchPageFixture }); 
      await When('Admin enters the input with "InvalidInput_AlphabetsInBatchID" and clicks save button', null, { batchPageFixture }); 
      await Then('Admin should get a valid message "This field accept only numbers and max 5 count." for this "InvalidInput_AlphabetsInBatchID"', null, { batchPageFixture }); 
    });

    test('Example #2', async ({ Given, batchPageFixture, When, Then }) => { 
      await Given('Admin is on the Batch Details Pop Up WIndow', null, { batchPageFixture }); 
      await When('Admin enters the input with "InvalidInput_BatchEmptyDescription" and clicks save button', null, { batchPageFixture }); 
      await Then('Admin should get a valid message "Batch Description is required." for this "InvalidInput_BatchEmptyDescription"', null, { batchPageFixture }); 
    });

    test('Example #3', async ({ Given, batchPageFixture, When, Then }) => { 
      await Given('Admin is on the Batch Details Pop Up WIndow', null, { batchPageFixture }); 
      await When('Admin enters the input with "InvalidInput_BatchEmptyBatchID" and clicks save button', null, { batchPageFixture }); 
      await Then('Admin should get a valid message "Batch Name is required." for this "InvalidInput_BatchEmptyBatchID"', null, { batchPageFixture }); 
    });

    test('Example #4', async ({ Given, batchPageFixture, When, Then }) => { 
      await Given('Admin is on the Batch Details Pop Up WIndow', null, { batchPageFixture }); 
      await When('Admin enters the input with "InvalidInput_BatchEmptyStatus" and clicks save button', null, { batchPageFixture }); 
      await Then('Admin should get a valid message "Status is required." for this "InvalidInput_BatchEmptyStatus"', null, { batchPageFixture }); 
    });

    test('Example #5', async ({ Given, batchPageFixture, When, Then }) => { 
      await Given('Admin is on the Batch Details Pop Up WIndow', null, { batchPageFixture }); 
      await When('Admin enters the input with "InvalidInput_BatchEmptyNoOfClasses" and clicks save button', null, { batchPageFixture }); 
      await Then('Admin should get a valid message "Number of classes is required" for this "InvalidInput_BatchEmptyNoOfClasses"', null, { batchPageFixture }); 
    });

  });

  test('Validating cancel button in pop up window', async ({ Given, batchPageFixture, When, Then }) => { 
    await Given('Admin is on the Batch Details Pop Up WIndow', null, { batchPageFixture }); 
    await When('Admin enters the valid data to all the mandatory fields and click cancel button', null, { batchPageFixture }); 
    await Then('Admin can see the batch details popup closes without creating any batch', null, { batchPageFixture }); 
  });

  test('validate close icon on the batch details pop up', async ({ Given, batchPageFixture, When, Then }) => { 
    await Given('Admin is on the Batch Details Pop Up WIndow', null, { batchPageFixture }); 
    await When('Admin clicks on the close icon', null, { batchPageFixture }); 
    await Then('batch details pop up closes', null, { batchPageFixture }); 
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

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('src\\test\\features\\03batch.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When Admin clicks the Batch Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on the Manage batch page","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When Admin clicks the Batch Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the \"LMS - Learning Management System\" Title","stepMatchArguments":[{"group":{"start":21,"value":"\"LMS - Learning Management System\"","children":[{"start":22,"value":"LMS - Learning Management System","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":14,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When Admin clicks the Batch Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the \"Manage Batch\" Heading","stepMatchArguments":[{"group":{"start":21,"value":"\"Manage Batch\"","children":[{"start":22,"value":"Manage Batch","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":25,"pickleLine":18,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When Admin clicks the Batch Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the disabled Delete Icon under the header","stepMatchArguments":[]}]},
  {"pwTestLine":30,"pickleLine":22,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When Admin clicks the Batch Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the enabled pagination controls under the data table","stepMatchArguments":[]}]},
  {"pwTestLine":35,"pickleLine":26,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"When Admin clicks the Batch Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the edit icon in each row","stepMatchArguments":[]}]},
  {"pwTestLine":40,"pickleLine":30,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"When Admin clicks the Batch Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the delete icon in each row","stepMatchArguments":[]}]},
  {"pwTestLine":45,"pickleLine":34,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"When Admin clicks the Batch Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the checkbox in each row","stepMatchArguments":[]}]},
  {"pwTestLine":52,"pickleLine":43,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"When Admin clicks the Batch Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":54,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the datatable header \"Batch Name\"","stepMatchArguments":[{"group":{"start":38,"value":"\"Batch Name\"","children":[{"start":39,"value":"Batch Name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":57,"pickleLine":44,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":58,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"When Admin clicks the Batch Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":59,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the datatable header \"Batch Description\"","stepMatchArguments":[{"group":{"start":38,"value":"\"Batch Description\"","children":[{"start":39,"value":"Batch Description","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":62,"pickleLine":45,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":63,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"When Admin clicks the Batch Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":64,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the datatable header \"Batch Status\"","stepMatchArguments":[{"group":{"start":38,"value":"\"Batch Status\"","children":[{"start":39,"value":"Batch Status","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":67,"pickleLine":46,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":68,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"When Admin clicks the Batch Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":69,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the datatable header \"No Of Classes\"","stepMatchArguments":[{"group":{"start":38,"value":"\"No Of Classes\"","children":[{"start":39,"value":"No Of Classes","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":72,"pickleLine":47,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":73,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"When Admin clicks the Batch Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":74,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the datatable header \"Program Name\"","stepMatchArguments":[{"group":{"start":38,"value":"\"Program Name\"","children":[{"start":39,"value":"Program Name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":77,"pickleLine":48,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":78,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"When Admin clicks the Batch Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":79,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the datatable header \"Edit / Delete\"","stepMatchArguments":[{"group":{"start":38,"value":"\"Edit / Delete\"","children":[{"start":39,"value":"Edit / Delete","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":84,"pickleLine":50,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":85,"gherkinStepLine":51,"keywordType":"Action","textWithKeyword":"When Admin clicks the Batch Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":86,"gherkinStepLine":52,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the checkbox  in the datatable header row","stepMatchArguments":[]}]},
  {"pwTestLine":89,"pickleLine":54,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":90,"gherkinStepLine":55,"keywordType":"Action","textWithKeyword":"When Admin clicks the Batch Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":91,"gherkinStepLine":56,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the sort icon next to all Datatable headers","stepMatchArguments":[]}]},
  {"pwTestLine":96,"pickleLine":65,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":97,"gherkinStepLine":59,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":98,"gherkinStepLine":60,"keywordType":"Action","textWithKeyword":"When Admin enters the input with \"InvalidInput_AlphabetsInBatchID\" and clicks save button","stepMatchArguments":[{"group":{"start":28,"value":"\"InvalidInput_AlphabetsInBatchID\"","children":[{"start":29,"value":"InvalidInput_AlphabetsInBatchID","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":99,"gherkinStepLine":61,"keywordType":"Outcome","textWithKeyword":"Then Admin should get a valid message \"This field accept only numbers and max 5 count.\" for this \"InvalidInput_AlphabetsInBatchID\"","stepMatchArguments":[{"group":{"start":33,"value":"\"This field accept only numbers and max 5 count.\"","children":[{"start":34,"value":"This field accept only numbers and max 5 count.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":92,"value":"\"InvalidInput_AlphabetsInBatchID\"","children":[{"start":93,"value":"InvalidInput_AlphabetsInBatchID","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":102,"pickleLine":66,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":103,"gherkinStepLine":59,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":104,"gherkinStepLine":60,"keywordType":"Action","textWithKeyword":"When Admin enters the input with \"InvalidInput_BatchEmptyDescription\" and clicks save button","stepMatchArguments":[{"group":{"start":28,"value":"\"InvalidInput_BatchEmptyDescription\"","children":[{"start":29,"value":"InvalidInput_BatchEmptyDescription","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":105,"gherkinStepLine":61,"keywordType":"Outcome","textWithKeyword":"Then Admin should get a valid message \"Batch Description is required.\" for this \"InvalidInput_BatchEmptyDescription\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Batch Description is required.\"","children":[{"start":34,"value":"Batch Description is required.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":75,"value":"\"InvalidInput_BatchEmptyDescription\"","children":[{"start":76,"value":"InvalidInput_BatchEmptyDescription","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":108,"pickleLine":68,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":109,"gherkinStepLine":59,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":110,"gherkinStepLine":60,"keywordType":"Action","textWithKeyword":"When Admin enters the input with \"InvalidInput_BatchEmptyBatchID\" and clicks save button","stepMatchArguments":[{"group":{"start":28,"value":"\"InvalidInput_BatchEmptyBatchID\"","children":[{"start":29,"value":"InvalidInput_BatchEmptyBatchID","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":111,"gherkinStepLine":61,"keywordType":"Outcome","textWithKeyword":"Then Admin should get a valid message \"Batch Name is required.\" for this \"InvalidInput_BatchEmptyBatchID\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Batch Name is required.\"","children":[{"start":34,"value":"Batch Name is required.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":68,"value":"\"InvalidInput_BatchEmptyBatchID\"","children":[{"start":69,"value":"InvalidInput_BatchEmptyBatchID","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":114,"pickleLine":69,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":115,"gherkinStepLine":59,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":116,"gherkinStepLine":60,"keywordType":"Action","textWithKeyword":"When Admin enters the input with \"InvalidInput_BatchEmptyStatus\" and clicks save button","stepMatchArguments":[{"group":{"start":28,"value":"\"InvalidInput_BatchEmptyStatus\"","children":[{"start":29,"value":"InvalidInput_BatchEmptyStatus","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":117,"gherkinStepLine":61,"keywordType":"Outcome","textWithKeyword":"Then Admin should get a valid message \"Status is required.\" for this \"InvalidInput_BatchEmptyStatus\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Status is required.\"","children":[{"start":34,"value":"Status is required.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":64,"value":"\"InvalidInput_BatchEmptyStatus\"","children":[{"start":65,"value":"InvalidInput_BatchEmptyStatus","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":120,"pickleLine":70,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":121,"gherkinStepLine":59,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":122,"gherkinStepLine":60,"keywordType":"Action","textWithKeyword":"When Admin enters the input with \"InvalidInput_BatchEmptyNoOfClasses\" and clicks save button","stepMatchArguments":[{"group":{"start":28,"value":"\"InvalidInput_BatchEmptyNoOfClasses\"","children":[{"start":29,"value":"InvalidInput_BatchEmptyNoOfClasses","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":123,"gherkinStepLine":61,"keywordType":"Outcome","textWithKeyword":"Then Admin should get a valid message \"Number of classes is required\" for this \"InvalidInput_BatchEmptyNoOfClasses\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Number of classes is required\"","children":[{"start":34,"value":"Number of classes is required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":74,"value":"\"InvalidInput_BatchEmptyNoOfClasses\"","children":[{"start":75,"value":"InvalidInput_BatchEmptyNoOfClasses","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":128,"pickleLine":72,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":129,"gherkinStepLine":73,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":130,"gherkinStepLine":74,"keywordType":"Action","textWithKeyword":"When Admin enters the valid data to all the mandatory fields and click cancel button","stepMatchArguments":[]},{"pwStepLine":131,"gherkinStepLine":75,"keywordType":"Outcome","textWithKeyword":"Then Admin can see the batch details popup closes without creating any batch","stepMatchArguments":[]}]},
  {"pwTestLine":134,"pickleLine":77,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":135,"gherkinStepLine":78,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":136,"gherkinStepLine":79,"keywordType":"Action","textWithKeyword":"When Admin clicks on the close icon","stepMatchArguments":[]},{"pwStepLine":137,"gherkinStepLine":80,"keywordType":"Outcome","textWithKeyword":"Then batch details pop up closes","stepMatchArguments":[]}]},
  {"pwTestLine":140,"pickleLine":94,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":141,"gherkinStepLine":95,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":142,"gherkinStepLine":96,"keywordType":"Action","textWithKeyword":"When Admin selects program name present in the dropdown","stepMatchArguments":[]},{"pwStepLine":143,"gherkinStepLine":97,"keywordType":"Outcome","textWithKeyword":"Then Admin should see selected program name in the batch name prefix box","stepMatchArguments":[]}]},
  {"pwTestLine":146,"pickleLine":99,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":147,"gherkinStepLine":100,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":148,"gherkinStepLine":101,"keywordType":"Action","textWithKeyword":"When Admin enters alphabets in batch name prefix box","stepMatchArguments":[]},{"pwStepLine":149,"gherkinStepLine":102,"keywordType":"Outcome","textWithKeyword":"Then Admin should see empty text box","stepMatchArguments":[]}]},
  {"pwTestLine":152,"pickleLine":104,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":153,"gherkinStepLine":105,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch page","stepMatchArguments":[]},{"pwStepLine":154,"gherkinStepLine":106,"keywordType":"Action","textWithKeyword":"When Admin clicks the edit icon","stepMatchArguments":[]},{"pwStepLine":155,"gherkinStepLine":107,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the Batch details pop up window","stepMatchArguments":[]}]},
  {"pwTestLine":158,"pickleLine":109,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":159,"gherkinStepLine":110,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch page","stepMatchArguments":[]},{"pwStepLine":160,"gherkinStepLine":111,"keywordType":"Action","textWithKeyword":"When Admin clicks the edit icon","stepMatchArguments":[]},{"pwStepLine":161,"gherkinStepLine":112,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Program name value field is disabled for editing","stepMatchArguments":[]}]},
  {"pwTestLine":164,"pickleLine":114,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":165,"gherkinStepLine":115,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch page","stepMatchArguments":[]},{"pwStepLine":166,"gherkinStepLine":116,"keywordType":"Action","textWithKeyword":"When Admin clicks the edit icon","stepMatchArguments":[]},{"pwStepLine":167,"gherkinStepLine":117,"keywordType":"Outcome","textWithKeyword":"Then Admin should see batch name value field is disabled for editing","stepMatchArguments":[]}]},
  {"pwTestLine":170,"pickleLine":119,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":171,"gherkinStepLine":120,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Page","stepMatchArguments":[]},{"pwStepLine":172,"gherkinStepLine":121,"keywordType":"Action","textWithKeyword":"When Admin Updates any fields with invalid data \"Invalid_EditErrorMsg\" and click save button","stepMatchArguments":[{"group":{"start":43,"value":"\"Invalid_EditErrorMsg\"","children":[{"start":44,"value":"Invalid_EditErrorMsg","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":173,"gherkinStepLine":122,"keywordType":"Outcome","textWithKeyword":"Then Admin should get a error message under the respective field","stepMatchArguments":[]}]},
  {"pwTestLine":176,"pickleLine":124,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":177,"gherkinStepLine":125,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Page","stepMatchArguments":[]},{"pwStepLine":178,"gherkinStepLine":126,"keywordType":"Action","textWithKeyword":"When Admin enters the valid data \"ValidInput_EditSaveBtn\" to all the mandatory fields and click save button","stepMatchArguments":[{"group":{"start":28,"value":"\"ValidInput_EditSaveBtn\"","children":[{"start":29,"value":"ValidInput_EditSaveBtn","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":179,"gherkinStepLine":127,"keywordType":"Outcome","textWithKeyword":"Then Admin should get a successful message for editing the batch","stepMatchArguments":[]}]},
  {"pwTestLine":182,"pickleLine":129,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":183,"gherkinStepLine":130,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Page","stepMatchArguments":[]},{"pwStepLine":184,"gherkinStepLine":131,"keywordType":"Action","textWithKeyword":"When Admin enters the valid data \"ValidInput_EditCancelBtn\" to all the mandatory fields and click cancel button","stepMatchArguments":[{"group":{"start":28,"value":"\"ValidInput_EditCancelBtn\"","children":[{"start":29,"value":"ValidInput_EditCancelBtn","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":185,"gherkinStepLine":132,"keywordType":"Outcome","textWithKeyword":"Then Admin can see the batch details popup closes without editing the batch","stepMatchArguments":[]}]},
  {"pwTestLine":188,"pickleLine":134,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":189,"gherkinStepLine":135,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch page","stepMatchArguments":[]},{"pwStepLine":190,"gherkinStepLine":136,"keywordType":"Action","textWithKeyword":"When Admin clicks the delete Icon on any row","stepMatchArguments":[]},{"pwStepLine":191,"gherkinStepLine":137,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the confirm alert box with yes and no button","stepMatchArguments":[]}]},
  {"pwTestLine":194,"pickleLine":139,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":195,"gherkinStepLine":140,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch confirm popup page","stepMatchArguments":[]},{"pwStepLine":196,"gherkinStepLine":141,"keywordType":"Action","textWithKeyword":"When Admin clicks on the delete icon and click yes button","stepMatchArguments":[]},{"pwStepLine":197,"gherkinStepLine":142,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the successful message and the batch should be deleted","stepMatchArguments":[]}]},
  {"pwTestLine":200,"pickleLine":144,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":201,"gherkinStepLine":145,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch confirm popup page","stepMatchArguments":[]},{"pwStepLine":202,"gherkinStepLine":146,"keywordType":"Action","textWithKeyword":"When Admin clicks on the delete icon and click no button","stepMatchArguments":[]},{"pwStepLine":203,"gherkinStepLine":147,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the alert box closed and the batch is not deleted","stepMatchArguments":[]}]},
  {"pwTestLine":206,"pickleLine":149,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":207,"gherkinStepLine":150,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch confirm popup page","stepMatchArguments":[]},{"pwStepLine":208,"gherkinStepLine":151,"keywordType":"Action","textWithKeyword":"When Admin clicks on the delete close icon","stepMatchArguments":[]},{"pwStepLine":209,"gherkinStepLine":152,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the alert box closed","stepMatchArguments":[]}]},
  {"pwTestLine":212,"pickleLine":154,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":213,"gherkinStepLine":155,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch page","stepMatchArguments":[]},{"pwStepLine":214,"gherkinStepLine":156,"keywordType":"Action","textWithKeyword":"When Admin clicks on the delete icon under the Manage batch header","stepMatchArguments":[]},{"pwStepLine":215,"gherkinStepLine":157,"keywordType":"Outcome","textWithKeyword":"Then The respective row in the table should be deleted","stepMatchArguments":[]}]},
  {"pwTestLine":218,"pickleLine":159,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":219,"gherkinStepLine":160,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch page","stepMatchArguments":[]},{"pwStepLine":220,"gherkinStepLine":161,"keywordType":"Action","textWithKeyword":"When Admin clicks more than one delete icons under the Manage batch header","stepMatchArguments":[]},{"pwStepLine":221,"gherkinStepLine":162,"keywordType":"Outcome","textWithKeyword":"Then The respective row in the table should be deleted","stepMatchArguments":[]}]},
  {"pwTestLine":226,"pickleLine":170,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":227,"gherkinStepLine":165,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch page","stepMatchArguments":[]},{"pwStepLine":228,"gherkinStepLine":166,"keywordType":"Action","textWithKeyword":"When Admin enters the batch name \"Name\" in the search text box","stepMatchArguments":[{"group":{"start":28,"value":"\"Name\"","children":[{"start":29,"value":"Name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":229,"gherkinStepLine":167,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the filtered batches \"Name\" in the data table","stepMatchArguments":[{"group":{"start":38,"value":"\"Name\"","children":[{"start":39,"value":"Name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":232,"pickleLine":171,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":233,"gherkinStepLine":165,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch page","stepMatchArguments":[]},{"pwStepLine":234,"gherkinStepLine":166,"keywordType":"Action","textWithKeyword":"When Admin enters the batch name \"abc\" in the search text box","stepMatchArguments":[{"group":{"start":28,"value":"\"abc\"","children":[{"start":29,"value":"abc","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":235,"gherkinStepLine":167,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the filtered batches \"abc\" in the data table","stepMatchArguments":[{"group":{"start":38,"value":"\"abc\"","children":[{"start":39,"value":"abc","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end