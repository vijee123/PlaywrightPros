// Generated from: src\test\features\02program.feature
import { test } from "../../../../fixture/customFixtures.js";

test.describe('program Module', () => {

  test('Navigating to the program module', async ({ Then, programPageFixture }) => { 
    await Then('Admin should land on the program page', null, { programPageFixture }); 
  });

  test('Verify Logout displayed in menu bar', async ({ Then, programPageFixture }) => { 
    await Then('Admin should see Logout in menu bar', null, { programPageFixture }); 
  });

  test('Verify heading in menu bar', async ({ Then, programPageFixture }) => { 
    await Then('Admin should see the heading "LMS - Learning Management System"', null, { programPageFixture }); 
  });

  test('Verify other page\'s name displayed in menu bar', async ({ Then, programPageFixture }) => { 
    await Then('Admin should see the page names as in order "ProgramBatchClassLogout"', null, { programPageFixture }); 
  });

  test('Verify sub menu displayed in program menu bar', async ({ Then, programPageFixture }) => { 
    await Then('Admin should see sub menu in menu bar as "Add New Program"', null, { programPageFixture }); 
  });

  test('Admin should see the Title as "Manage Program"', async ({ Then, programPageFixture }) => { 
    await Then('Admin should see the title "Manage Program"', null, { programPageFixture }); 
  });

  test('Admin should see a Delete button in left top is disabled', async ({ Then, programPageFixture }) => { 
    await Then('Admin should see a Delete button in left top is disabled', null, { programPageFixture }); 
  });

  test('Verify the Search button', async ({ Then, programPageFixture }) => { 
    await Then('Admin should see Search bar with text as Search', null, { programPageFixture }); 
  });

  test('Verify column header name of data table', async ({ Then, programPageFixture }) => { 
    await Then('Admin should see data table with column header on the Manage Program Page as  "program name program description program status  edit / delete"', null, { programPageFixture }); 
  });

  test('Verify checkbox default state beside Program Name column header', async ({ Then, programPageFixture }) => { 
    await Then('Admin should see checkbox default state as unchecked beside Program Name column header', null, { programPageFixture }); 
  });

  test('Verify Sort icon in manage program', async ({ Then, programPageFixture }) => { 
    await Then('Admin should see the sort arrow icon beside to each column header except Edit and Delete', null, { programPageFixture }); 
  });

  test.describe('Verify edit and delete icon in manage program', () => {

    test('Example #1', async ({ Then, programPageFixture }) => { 
      await Then('Admin should see the "Edit_Icon" in each rows', null, { programPageFixture }); 
    });

    test('Example #2', async ({ Then, programPageFixture }) => { 
      await Then('Admin should see the "Check_Box" in each rows', null, { programPageFixture }); 
    });

    test('Example #3', async ({ Then, programPageFixture }) => { 
      await Then('Admin should see the "Delete_Icon" in each rows', null, { programPageFixture }); 
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
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on the program page","stepMatchArguments":[]}]},
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Logout in menu bar","stepMatchArguments":[]}]},
  {"pwTestLine":14,"pickleLine":9,"tags":[],"steps":[{"pwStepLine":15,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the heading \"LMS - Learning Management System\"","stepMatchArguments":[{"group":{"start":29,"value":"\"LMS - Learning Management System\"","children":[{"start":30,"value":"LMS - Learning Management System","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":18,"pickleLine":12,"tags":[],"steps":[{"pwStepLine":19,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the page names as in order \"ProgramBatchClassLogout\"","stepMatchArguments":[{"group":{"start":44,"value":"\"ProgramBatchClassLogout\"","children":[{"start":45,"value":"ProgramBatchClassLogout","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":22,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":23,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then Admin should see sub menu in menu bar as \"Add New Program\"","stepMatchArguments":[{"group":{"start":41,"value":"\"Add New Program\"","children":[{"start":42,"value":"Add New Program","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":26,"pickleLine":18,"tags":[],"steps":[{"pwStepLine":27,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the title \"Manage Program\"","stepMatchArguments":[{"group":{"start":27,"value":"\"Manage Program\"","children":[{"start":28,"value":"Manage Program","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":30,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":31,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then Admin should see a Delete button in left top is disabled","stepMatchArguments":[]}]},
  {"pwTestLine":34,"pickleLine":24,"tags":[],"steps":[{"pwStepLine":35,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Search bar with text as Search","stepMatchArguments":[]}]},
  {"pwTestLine":38,"pickleLine":27,"tags":[],"steps":[{"pwStepLine":39,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then Admin should see data table with column header on the Manage Program Page as  \"program name program description program status  edit / delete\"","stepMatchArguments":[{"group":{"start":78,"value":"\"program name program description program status  edit / delete\"","children":[{"start":79,"value":"program name program description program status  edit / delete","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":42,"pickleLine":30,"tags":[],"steps":[{"pwStepLine":43,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then Admin should see checkbox default state as unchecked beside Program Name column header","stepMatchArguments":[]}]},
  {"pwTestLine":46,"pickleLine":33,"tags":[],"steps":[{"pwStepLine":47,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the sort arrow icon beside to each column header except Edit and Delete","stepMatchArguments":[]}]},
  {"pwTestLine":52,"pickleLine":40,"tags":[],"steps":[{"pwStepLine":53,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the \"Edit_Icon\" in each rows","stepMatchArguments":[{"group":{"start":21,"value":"\"Edit_Icon\"","children":[{"start":22,"value":"Edit_Icon","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":56,"pickleLine":41,"tags":[],"steps":[{"pwStepLine":57,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the \"Check_Box\" in each rows","stepMatchArguments":[{"group":{"start":21,"value":"\"Check_Box\"","children":[{"start":22,"value":"Check_Box","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":60,"pickleLine":42,"tags":[],"steps":[{"pwStepLine":61,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the \"Delete_Icon\" in each rows","stepMatchArguments":[{"group":{"start":21,"value":"\"Delete_Icon\"","children":[{"start":22,"value":"Delete_Icon","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end