// Generated from: src\test\features\03batch.feature
import { test } from "../../../../fixture/customFixtures.js";

test.describe('Validate Batch page functionality', () => {

  test.beforeEach('Background', async ({ Given }) => {
    await Given('Admin logged into the application successfully and in home page'); 
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

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('src\\test\\features\\03batch.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":119,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":120,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":121,"keywordType":"Action","textWithKeyword":"When Admin Updates any fields with invalid data \"Invalid_EditErrorMsg\" and click save button","stepMatchArguments":[{"group":{"start":43,"value":"\"Invalid_EditErrorMsg\"","children":[{"start":44,"value":"Invalid_EditErrorMsg","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":122,"keywordType":"Outcome","textWithKeyword":"Then Admin should get a error message under the respective field","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":124,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":125,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Page","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":126,"keywordType":"Action","textWithKeyword":"When Admin enters the valid data \"ValidInput_EditSaveBtn\" to all the mandatory fields and click save button","stepMatchArguments":[{"group":{"start":28,"value":"\"ValidInput_EditSaveBtn\"","children":[{"start":29,"value":"ValidInput_EditSaveBtn","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":127,"keywordType":"Outcome","textWithKeyword":"Then Admin should get a successful message for editing the batch","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":129,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logged into the application successfully and in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":130,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Page","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":131,"keywordType":"Action","textWithKeyword":"When Admin enters the valid data \"ValidInput_EditCancelBtn\" to all the mandatory fields and click cancel button","stepMatchArguments":[{"group":{"start":28,"value":"\"ValidInput_EditCancelBtn\"","children":[{"start":29,"value":"ValidInput_EditCancelBtn","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":25,"gherkinStepLine":132,"keywordType":"Outcome","textWithKeyword":"Then Admin can see the batch details popup closes without editing the batch","stepMatchArguments":[]}]},
]; // bdd-data-end