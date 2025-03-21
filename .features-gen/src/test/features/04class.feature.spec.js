// Generated from: src\test\features\04class.feature
import { test } from "../../../../fixture/customFixtures.js";

test.describe('Validate class page functionality', () => {

  test.beforeEach('Background', async ({ When, classPageFixture }) => {
    await When('Admin clicks the Class Navigation bar in the Header', null, { classPageFixture }); 
  });
  
  test('Check no classes value added when selecting class dates', { tag: ['@parallel'] }, async ({ Given, classPageFixture, When, Then }) => { 
    await Given('Admin is on the Class Popup window', null, { classPageFixture }); 
    await When('Admin selects class date in date picker', null, { classPageFixture }); 
    await Then('Admin should see no of class value is added automatically', null, { classPageFixture }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('src\\test\\features\\04class.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":90,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":91,"keywordType":"Context","textWithKeyword":"Given Admin is on the Class Popup window","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":92,"keywordType":"Action","textWithKeyword":"When Admin selects class date in date picker","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":93,"keywordType":"Outcome","textWithKeyword":"Then Admin should see no of class value is added automatically","stepMatchArguments":[]}]},
]; // bdd-data-end