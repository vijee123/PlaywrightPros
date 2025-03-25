// Generated from: src\test\features\02program.feature
import { test } from "../../../../fixture/customFixtures.js";

test.describe('program Module', () => {

  test('Navigating to the program module', async ({ When, programPageFixture, Then }) => { 
    await When('Admin clicks the program menu from the header', null, { programPageFixture }); 
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

  test('Verify add New Program pop up window', async ({ Then, programPageFixture }) => { 
    await Then('Admin should see pop up window for program details after clicking the Add New Program button', null, { programPageFixture }); 
  });

  test('Verify title of the pop up window', async ({ Then, programPageFixture }) => { 
    await Then('Admin should see the pop up window title as "Program Details" after clicking the Add New Program button', null, { programPageFixture }); 
  });

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

  test.describe('Scenario Outline name: Verify mandatory fields with red asterisk mark', () => {

    test('Example #1', async ({ Then, programPageFixture }) => { 
      await Then('Admin should see the  mandatory fields "Program Name" with asterisk mark in the pop Up window', null, { programPageFixture }); 
    });

    test('Example #2', async ({ Then, programPageFixture }) => { 
      await Then('Admin should see the  mandatory fields "Program Description" with asterisk mark in the pop Up window', null, { programPageFixture }); 
    });

    test('Example #3', async ({ Then, programPageFixture }) => { 
      await Then('Admin should see the  mandatory fields "Program Status" with asterisk mark in the pop Up window', null, { programPageFixture }); 
    });

  });

  test.describe('Validate the pop up window field Validation', () => {

    test('Example #1', async ({ Then, programPageFixture }) => { 
      await Then('Admin see the entered text in the fields "Program Name" in the add new program pop up window', null, { programPageFixture }); 
    });

    test('Example #2', async ({ Then, programPageFixture }) => { 
      await Then('Admin see the entered text in the fields "Program Description" in the add new program pop up window', null, { programPageFixture }); 
    });

    test('Example #3', async ({ Then, programPageFixture }) => { 
      await Then('Admin see the entered text in the fields "Program Status" in the add new program pop up window', null, { programPageFixture }); 
    });

  });

  test.describe('Manage Program - Sorting Program by Program Name/Program Description', () => {

    test('Example #1', async ({ Then, programPageFixture }) => { 
      await Then('Admin sees the program name or description sorted by ascennding or decending order after clicking the sort icon "programName_AscendingOrder"', null, { programPageFixture }); 
    });

    test('Example #2', async ({ Then, programPageFixture }) => { 
      await Then('Admin sees the program name or description sorted by ascennding or decending order after clicking the sort icon "programName_DecendingOrder"', null, { programPageFixture }); 
    });

    test('Example #3', async ({ Then, programPageFixture }) => { 
      await Then('Admin sees the program name or description sorted by ascennding or decending order after clicking the sort icon "programDescription_AscendingOrder"', null, { programPageFixture }); 
    });

    test('Example #4', async ({ Then, programPageFixture }) => { 
      await Then('Admin sees the program name or description sorted by ascennding or decending order after clicking the sort icon "ProgramDescription_DecendingOrder"', null, { programPageFixture }); 
    });

  });

  test.describe('Validating the text and pagination icon in the programPage', () => {

    test('Example #1', async ({ Then, programPageFixture }) => { 
      await Then('Admin should see the below "paginationText" pagination controls under the data table in the programPage', null, { programPageFixture }); 
    });

    test('Example #2', async ({ Then, programPageFixture }) => { 
      await Then('Admin should see the below "firstPageIcon" pagination controls under the data table in the programPage', null, { programPageFixture }); 
    });

    test('Example #3', async ({ Then, programPageFixture }) => { 
      await Then('Admin should see the below "previousPageIcon" pagination controls under the data table in the programPage', null, { programPageFixture }); 
    });

    test('Example #4', async ({ Then, programPageFixture }) => { 
      await Then('Admin should see the below "nextPageIcon" pagination controls under the data table in the programPage', null, { programPageFixture }); 
    });

    test('Example #5', async ({ Then, programPageFixture }) => { 
      await Then('Admin should see the below "lastPageIcon" pagination controls under the data table in the programPage', null, { programPageFixture }); 
    });

  });

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

    test('Example #4', async ({ When, programPageFixture }) => { 
      await When('Admin searches by valid program name,program description "searchBy_PartialProgramName" in the Program module', null, { programPageFixture }); 
    });

  });

  test('Validate row level delete icon in the program page', async ({ When, programPageFixture, Then }) => { 
    await When('Admin clicks the delete icon in the program page', null, { programPageFixture }); 
    await Then('Admin should see a alert open with heading Confirm along with YES and NO button for deletion in program', null, { programPageFixture }); 
  });

  test('Click No on deletion window of a program', async ({ When, programPageFixture, And, Then }) => { 
    await When('Admin clicks the delete icon in the program page', null, { programPageFixture }); 
    await And('Admin clicks No option to delete on confirm page of program', null, { programPageFixture }); 
    await Then('Admin can see the deletion alert disappears without deleting the program', null, { programPageFixture }); 
  });

  test('Click Yes on deletion window of a program', async ({ When, programPageFixture, And, Then }) => { 
    await When('Admin clicks the delete icon in the program page', null, { programPageFixture }); 
    await And('Admin clicks Yes option to delete on confirm page of program', null, { programPageFixture }); 
    await Then('Admin gets a message Successful program Deleted alert', null, { programPageFixture }); 
    await And('Do not see that program in the data table', null, { programPageFixture }); 
  });

  test('Validate Close(X) icon on Confirm Deletion alert', async ({ When, programPageFixture, And, Then }) => { 
    await When('Admin clicks the delete icon in the program page', null, { programPageFixture }); 
    await And('Admin clicks CLose X Icon on confirm page of program', null, { programPageFixture }); 
    await Then('Admin can see the deletion alert disappears without deleting the program', null, { programPageFixture }); 
  });

  test('Validate Common Delete button enabled after clicking on any checkbox in program page', async ({ When, programPageFixture, Then }) => { 
    await When('Admin clicks any checkbox in the data table of program', null, { programPageFixture }); 
    await Then('Admin should see common delete option enabled under header Manage program', null, { programPageFixture }); 
  });

  test('Validate multiple program delete button by selecting Single checkbox and clicking NO', async ({ Given, programPageFixture, When, Then }) => { 
    await Given('Admin clicks single checkbox in the data table and clicks Multi Delete icon in program page', null, { programPageFixture }); 
    await When('Admin clicks No option to delete on confirm page of program', null, { programPageFixture }); 
    await Then('Admin can see the deletion alert disappears without deleting the program', null, { programPageFixture }); 
  });

  test('Validate multiple program delete button by selecting Single checkbox and clicking YES', async ({ Given, programPageFixture, When, Then, And }) => { 
    await Given('Admin clicks single checkbox in the data table and clicks Multi Delete icon in program page', null, { programPageFixture }); 
    await When('Admin clicks Yes option to delete on confirm page of program', null, { programPageFixture }); 
    await Then('Admin gets a message Successful programs Deleted alert', null, { programPageFixture }); 
    await And('Do not see that program in the data table', null, { programPageFixture }); 
  });

  test('Validate multiple program deletion by selecting multiple check boxes and clicking NO', async ({ Given, programPageFixture, When, Then }) => { 
    await Given('Admin clicks multiple checkbox in the data table and clicks Multi Delete icon in program page', null, { programPageFixture }); 
    await When('Admin clicks No option to delete on confirm page of program', null, { programPageFixture }); 
    await Then('Admin can see the deletion alert disappears without deleting the selected programs', null, { programPageFixture }); 
  });

  test('Validate multiple program delete button by selecting multiple checkboxes and clicking YES', async ({ Given, programPageFixture, When, Then, And }) => { 
    await Given('Admin clicks multiple checkbox in the data table and clicks Multi Delete icon in program page', null, { programPageFixture }); 
    await When('Admin clicks Yes option to delete on confirm page of program', null, { programPageFixture }); 
    await Then('Admin gets a message Successful programs Deleted alert', null, { programPageFixture }); 
    await And('Do not see that programs in the data table'); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('src\\test\\features\\02program.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the program menu from the header","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on the program page","stepMatchArguments":[]}]},
  {"pwTestLine":11,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Logout in menu bar","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":16,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the heading \"LMS - Learning Management System\"","stepMatchArguments":[{"group":{"start":29,"value":"\"LMS - Learning Management System\"","children":[{"start":30,"value":"LMS - Learning Management System","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":19,"pickleLine":14,"tags":[],"steps":[{"pwStepLine":20,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the page names as in order \"ProgramBatchClassLogout\"","stepMatchArguments":[{"group":{"start":44,"value":"\"ProgramBatchClassLogout\"","children":[{"start":45,"value":"ProgramBatchClassLogout","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":23,"pickleLine":17,"tags":[],"steps":[{"pwStepLine":24,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then Admin should see sub menu in menu bar as \"Add New Program\"","stepMatchArguments":[{"group":{"start":41,"value":"\"Add New Program\"","children":[{"start":42,"value":"Add New Program","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":27,"pickleLine":20,"tags":[],"steps":[{"pwStepLine":28,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the title \"Manage Program\"","stepMatchArguments":[{"group":{"start":27,"value":"\"Manage Program\"","children":[{"start":28,"value":"Manage Program","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":31,"pickleLine":23,"tags":[],"steps":[{"pwStepLine":32,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then Admin should see a Delete button in left top is disabled","stepMatchArguments":[]}]},
  {"pwTestLine":35,"pickleLine":26,"tags":[],"steps":[{"pwStepLine":36,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Search bar with text as Search","stepMatchArguments":[]}]},
  {"pwTestLine":39,"pickleLine":29,"tags":[],"steps":[{"pwStepLine":40,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then Admin should see data table with column header on the Manage Program Page as  \"program name program description program status  edit / delete\"","stepMatchArguments":[{"group":{"start":78,"value":"\"program name program description program status  edit / delete\"","children":[{"start":79,"value":"program name program description program status  edit / delete","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":43,"pickleLine":32,"tags":[],"steps":[{"pwStepLine":44,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then Admin should see checkbox default state as unchecked beside Program Name column header","stepMatchArguments":[]}]},
  {"pwTestLine":47,"pickleLine":35,"tags":[],"steps":[{"pwStepLine":48,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the sort arrow icon beside to each column header except Edit and Delete","stepMatchArguments":[]}]},
  {"pwTestLine":53,"pickleLine":42,"tags":[],"steps":[{"pwStepLine":54,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the \"Edit_Icon\" in each rows","stepMatchArguments":[{"group":{"start":21,"value":"\"Edit_Icon\"","children":[{"start":22,"value":"Edit_Icon","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":57,"pickleLine":43,"tags":[],"steps":[{"pwStepLine":58,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the \"Check_Box\" in each rows","stepMatchArguments":[{"group":{"start":21,"value":"\"Check_Box\"","children":[{"start":22,"value":"Check_Box","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":61,"pickleLine":44,"tags":[],"steps":[{"pwStepLine":62,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the \"Delete_Icon\" in each rows","stepMatchArguments":[{"group":{"start":21,"value":"\"Delete_Icon\"","children":[{"start":22,"value":"Delete_Icon","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":67,"pickleLine":49,"tags":[],"steps":[{"pwStepLine":68,"gherkinStepLine":50,"keywordType":"Outcome","textWithKeyword":"Then Admin should see pop up window for program details after clicking the Add New Program button","stepMatchArguments":[]}]},
  {"pwTestLine":71,"pickleLine":52,"tags":[],"steps":[{"pwStepLine":72,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the pop up window title as \"Program Details\" after clicking the Add New Program button","stepMatchArguments":[{"group":{"start":44,"value":"\"Program Details\"","children":[{"start":45,"value":"Program Details","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":77,"pickleLine":62,"tags":[],"steps":[{"pwStepLine":78,"gherkinStepLine":57,"keywordType":"Outcome","textWithKeyword":"Then Admin Adds new program and click on save button for the scenario \"cancelwithValidData\" in program module","stepMatchArguments":[{"group":{"start":65,"value":"\"cancelwithValidData\"","children":[{"start":66,"value":"cancelwithValidData","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":79,"gherkinStepLine":58,"keywordType":"Outcome","textWithKeyword":"Then Admin gets message for the scenario \"cancelwithValidData\" for program Module","stepMatchArguments":[{"group":{"start":36,"value":"\"cancelwithValidData\"","children":[{"start":37,"value":"cancelwithValidData","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":82,"pickleLine":63,"tags":[],"steps":[{"pwStepLine":83,"gherkinStepLine":57,"keywordType":"Outcome","textWithKeyword":"Then Admin Adds new program and click on save button for the scenario \"closewithValidData\" in program module","stepMatchArguments":[{"group":{"start":65,"value":"\"closewithValidData\"","children":[{"start":66,"value":"closewithValidData","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":84,"gherkinStepLine":58,"keywordType":"Outcome","textWithKeyword":"Then Admin gets message for the scenario \"closewithValidData\" for program Module","stepMatchArguments":[{"group":{"start":36,"value":"\"closewithValidData\"","children":[{"start":37,"value":"closewithValidData","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":87,"pickleLine":64,"tags":[],"steps":[{"pwStepLine":88,"gherkinStepLine":57,"keywordType":"Outcome","textWithKeyword":"Then Admin Adds new program and click on save button for the scenario \"onlyMandatoryfields\" in program module","stepMatchArguments":[{"group":{"start":65,"value":"\"onlyMandatoryfields\"","children":[{"start":66,"value":"onlyMandatoryfields","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":89,"gherkinStepLine":58,"keywordType":"Outcome","textWithKeyword":"Then Admin gets message for the scenario \"onlyMandatoryfields\" for program Module","stepMatchArguments":[{"group":{"start":36,"value":"\"onlyMandatoryfields\"","children":[{"start":37,"value":"onlyMandatoryfields","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":92,"pickleLine":65,"tags":[],"steps":[{"pwStepLine":93,"gherkinStepLine":57,"keywordType":"Outcome","textWithKeyword":"Then Admin Adds new program and click on save button for the scenario \"withoutMandatoryfields\" in program module","stepMatchArguments":[{"group":{"start":65,"value":"\"withoutMandatoryfields\"","children":[{"start":66,"value":"withoutMandatoryfields","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":94,"gherkinStepLine":58,"keywordType":"Outcome","textWithKeyword":"Then Admin gets message for the scenario \"withoutMandatoryfields\" for program Module","stepMatchArguments":[{"group":{"start":36,"value":"\"withoutMandatoryfields\"","children":[{"start":37,"value":"withoutMandatoryfields","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":97,"pickleLine":66,"tags":[],"steps":[{"pwStepLine":98,"gherkinStepLine":57,"keywordType":"Outcome","textWithKeyword":"Then Admin Adds new program and click on save button for the scenario \"verifyAddedProgram\" in program module","stepMatchArguments":[{"group":{"start":65,"value":"\"verifyAddedProgram\"","children":[{"start":66,"value":"verifyAddedProgram","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":99,"gherkinStepLine":58,"keywordType":"Outcome","textWithKeyword":"Then Admin gets message for the scenario \"verifyAddedProgram\" for program Module","stepMatchArguments":[{"group":{"start":36,"value":"\"verifyAddedProgram\"","children":[{"start":37,"value":"verifyAddedProgram","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":106,"pickleLine":72,"tags":[],"steps":[{"pwStepLine":107,"gherkinStepLine":69,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the  mandatory fields \"Program Name\" with asterisk mark in the pop Up window","stepMatchArguments":[{"group":{"start":39,"value":"\"Program Name\"","children":[{"start":40,"value":"Program Name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":110,"pickleLine":73,"tags":[],"steps":[{"pwStepLine":111,"gherkinStepLine":69,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the  mandatory fields \"Program Description\" with asterisk mark in the pop Up window","stepMatchArguments":[{"group":{"start":39,"value":"\"Program Description\"","children":[{"start":40,"value":"Program Description","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":114,"pickleLine":74,"tags":[],"steps":[{"pwStepLine":115,"gherkinStepLine":69,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the  mandatory fields \"Program Status\" with asterisk mark in the pop Up window","stepMatchArguments":[{"group":{"start":39,"value":"\"Program Status\"","children":[{"start":40,"value":"Program Status","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":122,"pickleLine":82,"tags":[],"steps":[{"pwStepLine":123,"gherkinStepLine":78,"keywordType":"Outcome","textWithKeyword":"Then Admin see the entered text in the fields \"Program Name\" in the add new program pop up window","stepMatchArguments":[{"group":{"start":41,"value":"\"Program Name\"","children":[{"start":42,"value":"Program Name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":126,"pickleLine":83,"tags":[],"steps":[{"pwStepLine":127,"gherkinStepLine":78,"keywordType":"Outcome","textWithKeyword":"Then Admin see the entered text in the fields \"Program Description\" in the add new program pop up window","stepMatchArguments":[{"group":{"start":41,"value":"\"Program Description\"","children":[{"start":42,"value":"Program Description","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":130,"pickleLine":84,"tags":[],"steps":[{"pwStepLine":131,"gherkinStepLine":78,"keywordType":"Outcome","textWithKeyword":"Then Admin see the entered text in the fields \"Program Status\" in the add new program pop up window","stepMatchArguments":[{"group":{"start":41,"value":"\"Program Status\"","children":[{"start":42,"value":"Program Status","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":138,"pickleLine":95,"tags":[],"steps":[{"pwStepLine":139,"gherkinStepLine":91,"keywordType":"Outcome","textWithKeyword":"Then Admin sees the program name or description sorted by ascennding or decending order after clicking the sort icon \"programName_AscendingOrder\"","stepMatchArguments":[{"group":{"start":112,"value":"\"programName_AscendingOrder\"","children":[{"start":113,"value":"programName_AscendingOrder","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":142,"pickleLine":96,"tags":[],"steps":[{"pwStepLine":143,"gherkinStepLine":91,"keywordType":"Outcome","textWithKeyword":"Then Admin sees the program name or description sorted by ascennding or decending order after clicking the sort icon \"programName_DecendingOrder\"","stepMatchArguments":[{"group":{"start":112,"value":"\"programName_DecendingOrder\"","children":[{"start":113,"value":"programName_DecendingOrder","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":146,"pickleLine":97,"tags":[],"steps":[{"pwStepLine":147,"gherkinStepLine":91,"keywordType":"Outcome","textWithKeyword":"Then Admin sees the program name or description sorted by ascennding or decending order after clicking the sort icon \"programDescription_AscendingOrder\"","stepMatchArguments":[{"group":{"start":112,"value":"\"programDescription_AscendingOrder\"","children":[{"start":113,"value":"programDescription_AscendingOrder","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":150,"pickleLine":98,"tags":[],"steps":[{"pwStepLine":151,"gherkinStepLine":91,"keywordType":"Outcome","textWithKeyword":"Then Admin sees the program name or description sorted by ascennding or decending order after clicking the sort icon \"ProgramDescription_DecendingOrder\"","stepMatchArguments":[{"group":{"start":112,"value":"\"ProgramDescription_DecendingOrder\"","children":[{"start":113,"value":"ProgramDescription_DecendingOrder","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":158,"pickleLine":108,"tags":[],"steps":[{"pwStepLine":159,"gherkinStepLine":104,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below \"paginationText\" pagination controls under the data table in the programPage","stepMatchArguments":[{"group":{"start":27,"value":"\"paginationText\"","children":[{"start":28,"value":"paginationText","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":162,"pickleLine":109,"tags":[],"steps":[{"pwStepLine":163,"gherkinStepLine":104,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below \"firstPageIcon\" pagination controls under the data table in the programPage","stepMatchArguments":[{"group":{"start":27,"value":"\"firstPageIcon\"","children":[{"start":28,"value":"firstPageIcon","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":166,"pickleLine":110,"tags":[],"steps":[{"pwStepLine":167,"gherkinStepLine":104,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below \"previousPageIcon\" pagination controls under the data table in the programPage","stepMatchArguments":[{"group":{"start":27,"value":"\"previousPageIcon\"","children":[{"start":28,"value":"previousPageIcon","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":170,"pickleLine":111,"tags":[],"steps":[{"pwStepLine":171,"gherkinStepLine":104,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below \"nextPageIcon\" pagination controls under the data table in the programPage","stepMatchArguments":[{"group":{"start":27,"value":"\"nextPageIcon\"","children":[{"start":28,"value":"nextPageIcon","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":174,"pickleLine":112,"tags":[],"steps":[{"pwStepLine":175,"gherkinStepLine":104,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below \"lastPageIcon\" pagination controls under the data table in the programPage","stepMatchArguments":[{"group":{"start":27,"value":"\"lastPageIcon\"","children":[{"start":28,"value":"lastPageIcon","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":182,"pickleLine":124,"tags":[],"steps":[{"pwStepLine":183,"gherkinStepLine":120,"keywordType":"Action","textWithKeyword":"When Admin searches by valid program name,program description \"searchBy_ValidProgramName\" in the Program module","stepMatchArguments":[{"group":{"start":57,"value":"\"searchBy_ValidProgramName\"","children":[{"start":58,"value":"searchBy_ValidProgramName","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":186,"pickleLine":125,"tags":[],"steps":[{"pwStepLine":187,"gherkinStepLine":120,"keywordType":"Action","textWithKeyword":"When Admin searches by valid program name,program description \"searchBy_ProgramDescription\" in the Program module","stepMatchArguments":[{"group":{"start":57,"value":"\"searchBy_ProgramDescription\"","children":[{"start":58,"value":"searchBy_ProgramDescription","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":190,"pickleLine":126,"tags":[],"steps":[{"pwStepLine":191,"gherkinStepLine":120,"keywordType":"Action","textWithKeyword":"When Admin searches by valid program name,program description \"searchBy_InValidProgramName\" in the Program module","stepMatchArguments":[{"group":{"start":57,"value":"\"searchBy_InValidProgramName\"","children":[{"start":58,"value":"searchBy_InValidProgramName","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":194,"pickleLine":127,"tags":[],"steps":[{"pwStepLine":195,"gherkinStepLine":120,"keywordType":"Action","textWithKeyword":"When Admin searches by valid program name,program description \"searchBy_PartialProgramName\" in the Program module","stepMatchArguments":[{"group":{"start":57,"value":"\"searchBy_PartialProgramName\"","children":[{"start":58,"value":"searchBy_PartialProgramName","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":200,"pickleLine":132,"tags":[],"steps":[{"pwStepLine":201,"gherkinStepLine":133,"keywordType":"Action","textWithKeyword":"When Admin clicks the delete icon in the program page","stepMatchArguments":[]},{"pwStepLine":202,"gherkinStepLine":134,"keywordType":"Outcome","textWithKeyword":"Then Admin should see a alert open with heading Confirm along with YES and NO button for deletion in program","stepMatchArguments":[]}]},
  {"pwTestLine":205,"pickleLine":136,"tags":[],"steps":[{"pwStepLine":206,"gherkinStepLine":137,"keywordType":"Action","textWithKeyword":"When Admin clicks the delete icon in the program page","stepMatchArguments":[]},{"pwStepLine":207,"gherkinStepLine":138,"keywordType":"Action","textWithKeyword":"And Admin clicks No option to delete on confirm page of program","stepMatchArguments":[]},{"pwStepLine":208,"gherkinStepLine":139,"keywordType":"Outcome","textWithKeyword":"Then Admin can see the deletion alert disappears without deleting the program","stepMatchArguments":[]}]},
  {"pwTestLine":211,"pickleLine":142,"tags":[],"steps":[{"pwStepLine":212,"gherkinStepLine":143,"keywordType":"Action","textWithKeyword":"When Admin clicks the delete icon in the program page","stepMatchArguments":[]},{"pwStepLine":213,"gherkinStepLine":144,"keywordType":"Action","textWithKeyword":"And Admin clicks Yes option to delete on confirm page of program","stepMatchArguments":[]},{"pwStepLine":214,"gherkinStepLine":145,"keywordType":"Outcome","textWithKeyword":"Then Admin gets a message Successful program Deleted alert","stepMatchArguments":[]},{"pwStepLine":215,"gherkinStepLine":146,"keywordType":"Outcome","textWithKeyword":"And Do not see that program in the data table","stepMatchArguments":[]}]},
  {"pwTestLine":218,"pickleLine":148,"tags":[],"steps":[{"pwStepLine":219,"gherkinStepLine":149,"keywordType":"Action","textWithKeyword":"When Admin clicks the delete icon in the program page","stepMatchArguments":[]},{"pwStepLine":220,"gherkinStepLine":150,"keywordType":"Action","textWithKeyword":"And Admin clicks CLose X Icon on confirm page of program","stepMatchArguments":[]},{"pwStepLine":221,"gherkinStepLine":151,"keywordType":"Outcome","textWithKeyword":"Then Admin can see the deletion alert disappears without deleting the program","stepMatchArguments":[]}]},
  {"pwTestLine":224,"pickleLine":154,"tags":[],"steps":[{"pwStepLine":225,"gherkinStepLine":155,"keywordType":"Action","textWithKeyword":"When Admin clicks any checkbox in the data table of program","stepMatchArguments":[]},{"pwStepLine":226,"gherkinStepLine":156,"keywordType":"Outcome","textWithKeyword":"Then Admin should see common delete option enabled under header Manage program","stepMatchArguments":[]}]},
  {"pwTestLine":229,"pickleLine":158,"tags":[],"steps":[{"pwStepLine":230,"gherkinStepLine":159,"keywordType":"Context","textWithKeyword":"Given Admin clicks single checkbox in the data table and clicks Multi Delete icon in program page","stepMatchArguments":[]},{"pwStepLine":231,"gherkinStepLine":160,"keywordType":"Action","textWithKeyword":"When Admin clicks No option to delete on confirm page of program","stepMatchArguments":[]},{"pwStepLine":232,"gherkinStepLine":161,"keywordType":"Outcome","textWithKeyword":"Then Admin can see the deletion alert disappears without deleting the program","stepMatchArguments":[]}]},
  {"pwTestLine":235,"pickleLine":164,"tags":[],"steps":[{"pwStepLine":236,"gherkinStepLine":165,"keywordType":"Context","textWithKeyword":"Given Admin clicks single checkbox in the data table and clicks Multi Delete icon in program page","stepMatchArguments":[]},{"pwStepLine":237,"gherkinStepLine":166,"keywordType":"Action","textWithKeyword":"When Admin clicks Yes option to delete on confirm page of program","stepMatchArguments":[]},{"pwStepLine":238,"gherkinStepLine":167,"keywordType":"Outcome","textWithKeyword":"Then Admin gets a message Successful programs Deleted alert","stepMatchArguments":[]},{"pwStepLine":239,"gherkinStepLine":168,"keywordType":"Outcome","textWithKeyword":"And Do not see that program in the data table","stepMatchArguments":[]}]},
  {"pwTestLine":242,"pickleLine":171,"tags":[],"steps":[{"pwStepLine":243,"gherkinStepLine":172,"keywordType":"Context","textWithKeyword":"Given Admin clicks multiple checkbox in the data table and clicks Multi Delete icon in program page","stepMatchArguments":[]},{"pwStepLine":244,"gherkinStepLine":173,"keywordType":"Action","textWithKeyword":"When Admin clicks No option to delete on confirm page of program","stepMatchArguments":[]},{"pwStepLine":245,"gherkinStepLine":174,"keywordType":"Outcome","textWithKeyword":"Then Admin can see the deletion alert disappears without deleting the selected programs","stepMatchArguments":[]}]},
  {"pwTestLine":248,"pickleLine":177,"tags":[],"steps":[{"pwStepLine":249,"gherkinStepLine":178,"keywordType":"Context","textWithKeyword":"Given Admin clicks multiple checkbox in the data table and clicks Multi Delete icon in program page","stepMatchArguments":[]},{"pwStepLine":250,"gherkinStepLine":179,"keywordType":"Action","textWithKeyword":"When Admin clicks Yes option to delete on confirm page of program","stepMatchArguments":[]},{"pwStepLine":251,"gherkinStepLine":180,"keywordType":"Outcome","textWithKeyword":"Then Admin gets a message Successful programs Deleted alert","stepMatchArguments":[]},{"pwStepLine":252,"gherkinStepLine":181,"keywordType":"Outcome","textWithKeyword":"And Do not see that programs in the data table","stepMatchArguments":[]}]},
]; // bdd-data-end