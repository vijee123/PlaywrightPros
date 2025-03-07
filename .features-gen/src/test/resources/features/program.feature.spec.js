// Generated from: src\test\resources\features\program.feature
import { test } from "playwright-bdd";

test.describe('program Module', () => {

  test('Navigating to the program module', async ({ Given, page, When, Then }) => { 
    await Given('Admin is in login Page.', null, { page }); 
    await When('Admin enter valid data with "Login" and "Login with valid credentials" in all fields and clicks login button'); 
    await Then('Admin should land on Home page'); 
    await When('Admin clicks the program menu from the header'); 
    await Then('Admin should land on the program page'); 
  });

  test('Verify Logout displayed in menu bar', async ({ Given, When, Then }) => { 
    await Given('Admin is on home page after Login'); 
    await When('Admin clicks "Program" on the navigation bar'); 
    await Then('Admin should see Logout in menu bar'); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('src\\test\\resources\\features\\program.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is in login Page.","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin enter valid data with \"Login\" and \"Login with valid credentials\" in all fields and clicks login button","stepMatchArguments":[{"group":{"start":28,"value":"\"Login\"","children":[{"start":29,"value":"Login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":40,"value":"\"Login with valid credentials\"","children":[{"start":41,"value":"Login with valid credentials","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on Home page","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When Admin clicks the program menu from the header","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on the program page","stepMatchArguments":[]}]},
  {"pwTestLine":14,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Program\" on the navigation bar","stepMatchArguments":[{"group":{"start":13,"value":"\"Program\"","children":[{"start":14,"value":"Program","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Logout in menu bar","stepMatchArguments":[]}]},
]; // bdd-data-end