// Generated from: src\test\features\06EndToEnd.feature
import { test } from "../../../../fixture/customFixtures.js";

test.describe('Checking the chaining between different Modules', () => {

  test('To test whether we are able to pass data between modules for chaining', async ({ Given, programPageFixture, And, batchPageFixture, Then, classPageFixture }) => { 
    await Given('Admin creates a new Program for chaining', null, { programPageFixture }); 
    await And('Admin creates a new batch with the created Program', null, { batchPageFixture }); 
    await Then('Admin should be able to create a new class with the newly created batch', null, { classPageFixture }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('src\\test\\features\\06EndToEnd.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin creates a new Program for chaining","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And Admin creates a new batch with the created Program","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Admin should be able to create a new class with the newly created batch","stepMatchArguments":[]}]},
]; // bdd-data-end