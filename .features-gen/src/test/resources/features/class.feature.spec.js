// Generated from: src\test\resources\features\class.feature
import { test } from "playwright-bdd";

test.describe('Validate class page functionality', () => {

  test.beforeEach('Background', async ({ Given, page }) => {
    await Given('Admin is on the home Page', null, { page }); 
  });
  
  test('Validating the class manage page', async ({ When, page, Then }) => { 
    await When('Admin clicks the Class Navigation bar in the Header', null, { page }); 
    await Then('Admin should land on the Manage class page', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('src\\test\\resources\\features\\class.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the home Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on the Manage class page","stepMatchArguments":[]}]},
]; // bdd-data-end