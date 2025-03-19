// Generated from: src\test\features\04class.feature
import { test } from "../../../../fixture/customFixtures.js";

test.describe('Validate class page functionality', () => {

  test.beforeEach('Background', async ({ When, classPageFixture }) => {
    await When('Admin clicks the Class Navigation bar in the Header', null, { classPageFixture }); 
  });
  
  test('Validate input fields and their text boxes in Class details form', { tag: ['@parallel'] }, async ({ When, classPageFixture, Then }) => { 
    await When('Admin clicks a add new class under the class menu bar', null, { classPageFixture }); 
    await Then('Admin should see the below input fields and their text boxes in the class details form', null, { classPageFixture }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('src\\test\\features\\04class.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":73,"tags":["@parallel"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":74,"keywordType":"Action","textWithKeyword":"When Admin clicks a add new class under the class menu bar","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":75,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below input fields and their text boxes in the class details form","stepMatchArguments":[]}]},
]; // bdd-data-end