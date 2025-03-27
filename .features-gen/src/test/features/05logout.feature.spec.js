// Generated from: src\test\features\05logout.feature
import { test } from "../../../../fixture/customFixtures.js";

test.describe('Logout Validation', () => {

  test.beforeEach('Background', async ({ Given, browser }) => {
    await Given('Admin is logged into the application', null, { browser }); 
  });
  
  test('Verify logout function', { tag: ['@logout'] }, async ({ Given, When, Then }) => { 
    await Given('Admin is in home page'); 
    await When('Admin clicks on the logout in the menu bar'); 
    await Then('Admin should be redirected to login page'); 
  });

  test('Verify back button function', { tag: ['@logout'] }, async ({ Given, And, When, Then }) => { 
    await Given('Admin is logged out of the application'); 
    await And('Admin is in login page'); 
    await When('Admin clicks  browser back button'); 
    await Then('Admin should receive error message'); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('src\\test\\features\\05logout.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":9,"tags":["@logout"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given Admin is in home page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When Admin clicks on the logout in the menu bar","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then Admin should be redirected to login page","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":14,"tags":["@logout"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"Given Admin is logged out of the application","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"And Admin is in login page","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When Admin clicks  browser back button","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then Admin should receive error message","stepMatchArguments":[]}]},
]; // bdd-data-end