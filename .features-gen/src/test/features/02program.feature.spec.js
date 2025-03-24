// Generated from: src\test\features\02program.feature
import { test } from "../../../../fixture/customFixtures.js";

test.describe('program Module', () => {

  test.describe('Verify Admin is able to search results found for valid Program fields', () => {

    test('Example #1', async ({ When, programPageFixture }) => { 
      await When('Admin searches by valid program name,program description "searchBy_ValidProgramName" in the Program module', null, { programPageFixture }); 
    });

    test('Example #2', async ({ When, programPageFixture }) => { 
      await When('Admin searches by valid program name,program description "searchBy_ProgramDescription" in the Program module', null, { programPageFixture }); 
    });

    test('Example #3', async ({ When, programPageFixture }) => { 
      await When('Admin searches by valid program name,program description "searchBy_InValidProgramName" in the Program module', null, { programPageFixture }); 
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
  {"pwTestLine":8,"pickleLine":123,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":119,"keywordType":"Action","textWithKeyword":"When Admin searches by valid program name,program description \"searchBy_ValidProgramName\" in the Program module","stepMatchArguments":[{"group":{"start":57,"value":"\"searchBy_ValidProgramName\"","children":[{"start":58,"value":"searchBy_ValidProgramName","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":12,"pickleLine":124,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":119,"keywordType":"Action","textWithKeyword":"When Admin searches by valid program name,program description \"searchBy_ProgramDescription\" in the Program module","stepMatchArguments":[{"group":{"start":57,"value":"\"searchBy_ProgramDescription\"","children":[{"start":58,"value":"searchBy_ProgramDescription","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":16,"pickleLine":125,"tags":[],"steps":[{"pwStepLine":17,"gherkinStepLine":119,"keywordType":"Action","textWithKeyword":"When Admin searches by valid program name,program description \"searchBy_InValidProgramName\" in the Program module","stepMatchArguments":[{"group":{"start":57,"value":"\"searchBy_InValidProgramName\"","children":[{"start":58,"value":"searchBy_InValidProgramName","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end