// Generated from: src\test\features\04class.feature
import { test } from "../../../../fixture/customFixtures.js";

test.describe('Validate class page functionality', () => {

  test.beforeEach('Background', async ({ When, classPageFixture }) => {
    await When('Admin clicks the Class Navigation bar in the Header', null, { classPageFixture }); 
  });
  
  test('Validating the class manage page', { tag: ['@parallel', '@test'] }, async ({ Then, classPageFixture }) => { 
    await Then('Admin should land on the Manage class page', null, { classPageFixture }); 
  });

  test('Validating the Header in the Manage class page', { tag: ['@parallel', '@test'] }, async ({ Then, classPageFixture }) => { 
    await Then('Admin should see the Manage Class Header', null, { classPageFixture }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('src\\test\\features\\04class.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":7,"tags":["@parallel","@test"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on the Manage class page","stepMatchArguments":[]}]},
  {"pwTestLine":14,"pickleLine":11,"tags":["@parallel","@test"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the Manage Class Header","stepMatchArguments":[]}]},
]; // bdd-data-end