// Generated from: src\test\features\02program.feature
import { test } from "../../../../fixture/customFixtures.js";

test.describe('program Module', () => {

  test.describe('Verify Add New Program functionalities', () => {

    test('Example #1', async ({ Then, programPageFixture }) => { 
      await Then('Admin Adds new program and click on save button for the scenario "cancelwithValidData" in program module', null, { programPageFixture }); 
      await Then('Admin gets message for the scenario "cancelwithValidData" for program Module', null, { programPageFixture }); 
    });

    test('Example #2', async ({ Then, programPageFixture }) => { 
      await Then('Admin Adds new program and click on save button for the scenario "closewithValidData" in program module', null, { programPageFixture }); 
      await Then('Admin gets message for the scenario "closewithValidData" for program Module', null, { programPageFixture }); 
    });

    test('Example #3', async ({ Then, programPageFixture }) => { 
      await Then('Admin Adds new program and click on save button for the scenario "onlyMandatoryfields" in program module', null, { programPageFixture }); 
      await Then('Admin gets message for the scenario "onlyMandatoryfields" for program Module', null, { programPageFixture }); 
    });

    test('Example #4', async ({ Then, programPageFixture }) => { 
      await Then('Admin Adds new program and click on save button for the scenario "withoutMandatoryfields" in program module', null, { programPageFixture }); 
      await Then('Admin gets message for the scenario "withoutMandatoryfields" for program Module', null, { programPageFixture }); 
    });

    test('Example #5', async ({ Then, programPageFixture }) => { 
      await Then('Admin Adds new program and click on save button for the scenario "verifyAddedProgram" in program module', null, { programPageFixture }); 
      await Then('Admin gets message for the scenario "verifyAddedProgram" for program Module', null, { programPageFixture }); 
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('src\\test\\features\\02program.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":64,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":59,"keywordType":"Outcome","textWithKeyword":"Then Admin Adds new program and click on save button for the scenario \"cancelwithValidData\" in program module","stepMatchArguments":[{"group":{"start":65,"value":"\"cancelwithValidData\"","children":[{"start":66,"value":"cancelwithValidData","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":60,"keywordType":"Outcome","textWithKeyword":"Then Admin gets message for the scenario \"cancelwithValidData\" for program Module","stepMatchArguments":[{"group":{"start":36,"value":"\"cancelwithValidData\"","children":[{"start":37,"value":"cancelwithValidData","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":13,"pickleLine":65,"tags":[],"steps":[{"pwStepLine":14,"gherkinStepLine":59,"keywordType":"Outcome","textWithKeyword":"Then Admin Adds new program and click on save button for the scenario \"closewithValidData\" in program module","stepMatchArguments":[{"group":{"start":65,"value":"\"closewithValidData\"","children":[{"start":66,"value":"closewithValidData","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":60,"keywordType":"Outcome","textWithKeyword":"Then Admin gets message for the scenario \"closewithValidData\" for program Module","stepMatchArguments":[{"group":{"start":36,"value":"\"closewithValidData\"","children":[{"start":37,"value":"closewithValidData","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":18,"pickleLine":66,"tags":[],"steps":[{"pwStepLine":19,"gherkinStepLine":59,"keywordType":"Outcome","textWithKeyword":"Then Admin Adds new program and click on save button for the scenario \"onlyMandatoryfields\" in program module","stepMatchArguments":[{"group":{"start":65,"value":"\"onlyMandatoryfields\"","children":[{"start":66,"value":"onlyMandatoryfields","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":60,"keywordType":"Outcome","textWithKeyword":"Then Admin gets message for the scenario \"onlyMandatoryfields\" for program Module","stepMatchArguments":[{"group":{"start":36,"value":"\"onlyMandatoryfields\"","children":[{"start":37,"value":"onlyMandatoryfields","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":23,"pickleLine":67,"tags":[],"steps":[{"pwStepLine":24,"gherkinStepLine":59,"keywordType":"Outcome","textWithKeyword":"Then Admin Adds new program and click on save button for the scenario \"withoutMandatoryfields\" in program module","stepMatchArguments":[{"group":{"start":65,"value":"\"withoutMandatoryfields\"","children":[{"start":66,"value":"withoutMandatoryfields","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":25,"gherkinStepLine":60,"keywordType":"Outcome","textWithKeyword":"Then Admin gets message for the scenario \"withoutMandatoryfields\" for program Module","stepMatchArguments":[{"group":{"start":36,"value":"\"withoutMandatoryfields\"","children":[{"start":37,"value":"withoutMandatoryfields","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":28,"pickleLine":68,"tags":[],"steps":[{"pwStepLine":29,"gherkinStepLine":59,"keywordType":"Outcome","textWithKeyword":"Then Admin Adds new program and click on save button for the scenario \"verifyAddedProgram\" in program module","stepMatchArguments":[{"group":{"start":65,"value":"\"verifyAddedProgram\"","children":[{"start":66,"value":"verifyAddedProgram","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":30,"gherkinStepLine":60,"keywordType":"Outcome","textWithKeyword":"Then Admin gets message for the scenario \"verifyAddedProgram\" for program Module","stepMatchArguments":[{"group":{"start":36,"value":"\"verifyAddedProgram\"","children":[{"start":37,"value":"verifyAddedProgram","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end