// Generated from: src\test\resources\features\sample_copy.feature
import { test } from "playwright-bdd";

test.describe('Playwright site', () => {

  test('Check get started link', async ({ Given, When, Then }) => { 
    await Given('I am on the home page'); 
    await When('I click on the link "Get started"'); 
    await Then('I see in the title "Installation"'); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('src\\test\\resources\\features\\sample_copy.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on the home page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I click on the link \"Get started\"","stepMatchArguments":[{"group":{"start":20,"value":"\"Get started\"","children":[{"start":21,"value":"Get started","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I see in the title \"Installation\"","stepMatchArguments":[{"group":{"start":19,"value":"\"Installation\"","children":[{"start":20,"value":"Installation","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end