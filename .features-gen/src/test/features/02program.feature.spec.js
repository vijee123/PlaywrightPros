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

  test('Verify Edit Option', async ({ When, programPageFixture, Then }) => { 
    await When('Admin clicks on Edit option for particular program', null, { programPageFixture }); 
    await Then('Admin lands on Program details form', null, { programPageFixture }); 
    await Then('Admin should see the Heading as Program Details', null, { programPageFixture }); 
  });

  test.describe('Verify Edit Program Functionalities', () => {

    test('Example #1', async ({ When, programPageFixture, Then }) => { 
      await When('Admin Edited the program deatils "update_Programdescription"', null, { programPageFixture }); 
      await Then('Admin should get the message for the success or failure update "update_Programdescription"', null, { programPageFixture }); 
    });

    test('Example #2', async ({ When, programPageFixture, Then }) => { 
      await When('Admin Edited the program deatils "update_ProgramStatus"', null, { programPageFixture }); 
      await Then('Admin should get the message for the success or failure update "update_ProgramStatus"', null, { programPageFixture }); 
    });

    test('Example #3', async ({ When, programPageFixture, Then }) => { 
      await When('Admin Edited the program deatils "update_ProgramName"', null, { programPageFixture }); 
      await Then('Admin should get the message for the success or failure update "update_ProgramName"', null, { programPageFixture }); 
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

  test.describe('Program Page Pagination', () => {

    test('Example #1', async ({ Then, programPageFixture }) => { 
      await Then('Admin navigated to the respective pages when he clicks the "next" link on the data table in program module', null, { programPageFixture }); 
    });

    test('Example #2', async ({ Then, programPageFixture }) => { 
      await Then('Admin navigated to the respective pages when he clicks the "previous" link on the data table in program module', null, { programPageFixture }); 
    });

    test('Example #3', async ({ Then, programPageFixture }) => { 
      await Then('Admin navigated to the respective pages when he clicks the "first" link on the data table in program module', null, { programPageFixture }); 
    });

    test('Example #4', async ({ Then, programPageFixture }) => { 
      await Then('Admin navigated to the respective pages when he clicks the "last" link on the data table in program module', null, { programPageFixture }); 
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
  {"pwTestLine":66,"pickleLine":47,"tags":[],"steps":[{"pwStepLine":67,"gherkinStepLine":48,"keywordType":"Outcome","textWithKeyword":"Then Admin should see pop up window for program details after clicking the Add New Program button","stepMatchArguments":[]}]},
  {"pwTestLine":70,"pickleLine":50,"tags":[],"steps":[{"pwStepLine":71,"gherkinStepLine":51,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the pop up window title as \"Program Details\" after clicking the Add New Program button","stepMatchArguments":[{"group":{"start":44,"value":"\"Program Details\"","children":[{"start":45,"value":"Program Details","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":76,"pickleLine":64,"tags":[],"steps":[{"pwStepLine":77,"gherkinStepLine":59,"keywordType":"Outcome","textWithKeyword":"Then Admin Adds new program and click on save button for the scenario \"cancelwithValidData\" in program module","stepMatchArguments":[{"group":{"start":65,"value":"\"cancelwithValidData\"","children":[{"start":66,"value":"cancelwithValidData","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":78,"gherkinStepLine":60,"keywordType":"Outcome","textWithKeyword":"Then Admin gets message for the scenario \"cancelwithValidData\" for program Module","stepMatchArguments":[{"group":{"start":36,"value":"\"cancelwithValidData\"","children":[{"start":37,"value":"cancelwithValidData","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":81,"pickleLine":65,"tags":[],"steps":[{"pwStepLine":82,"gherkinStepLine":59,"keywordType":"Outcome","textWithKeyword":"Then Admin Adds new program and click on save button for the scenario \"closewithValidData\" in program module","stepMatchArguments":[{"group":{"start":65,"value":"\"closewithValidData\"","children":[{"start":66,"value":"closewithValidData","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":83,"gherkinStepLine":60,"keywordType":"Outcome","textWithKeyword":"Then Admin gets message for the scenario \"closewithValidData\" for program Module","stepMatchArguments":[{"group":{"start":36,"value":"\"closewithValidData\"","children":[{"start":37,"value":"closewithValidData","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":86,"pickleLine":66,"tags":[],"steps":[{"pwStepLine":87,"gherkinStepLine":59,"keywordType":"Outcome","textWithKeyword":"Then Admin Adds new program and click on save button for the scenario \"onlyMandatoryfields\" in program module","stepMatchArguments":[{"group":{"start":65,"value":"\"onlyMandatoryfields\"","children":[{"start":66,"value":"onlyMandatoryfields","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":88,"gherkinStepLine":60,"keywordType":"Outcome","textWithKeyword":"Then Admin gets message for the scenario \"onlyMandatoryfields\" for program Module","stepMatchArguments":[{"group":{"start":36,"value":"\"onlyMandatoryfields\"","children":[{"start":37,"value":"onlyMandatoryfields","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":91,"pickleLine":67,"tags":[],"steps":[{"pwStepLine":92,"gherkinStepLine":59,"keywordType":"Outcome","textWithKeyword":"Then Admin Adds new program and click on save button for the scenario \"withoutMandatoryfields\" in program module","stepMatchArguments":[{"group":{"start":65,"value":"\"withoutMandatoryfields\"","children":[{"start":66,"value":"withoutMandatoryfields","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":93,"gherkinStepLine":60,"keywordType":"Outcome","textWithKeyword":"Then Admin gets message for the scenario \"withoutMandatoryfields\" for program Module","stepMatchArguments":[{"group":{"start":36,"value":"\"withoutMandatoryfields\"","children":[{"start":37,"value":"withoutMandatoryfields","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":96,"pickleLine":68,"tags":[],"steps":[{"pwStepLine":97,"gherkinStepLine":59,"keywordType":"Outcome","textWithKeyword":"Then Admin Adds new program and click on save button for the scenario \"verifyAddedProgram\" in program module","stepMatchArguments":[{"group":{"start":65,"value":"\"verifyAddedProgram\"","children":[{"start":66,"value":"verifyAddedProgram","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":98,"gherkinStepLine":60,"keywordType":"Outcome","textWithKeyword":"Then Admin gets message for the scenario \"verifyAddedProgram\" for program Module","stepMatchArguments":[{"group":{"start":36,"value":"\"verifyAddedProgram\"","children":[{"start":37,"value":"verifyAddedProgram","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":103,"pickleLine":72,"tags":[],"steps":[{"pwStepLine":104,"gherkinStepLine":74,"keywordType":"Action","textWithKeyword":"When Admin clicks on Edit option for particular program","stepMatchArguments":[]},{"pwStepLine":105,"gherkinStepLine":75,"keywordType":"Outcome","textWithKeyword":"Then Admin lands on Program details form","stepMatchArguments":[]},{"pwStepLine":106,"gherkinStepLine":76,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the Heading as Program Details","stepMatchArguments":[]}]},
  {"pwTestLine":111,"pickleLine":88,"tags":[],"steps":[{"pwStepLine":112,"gherkinStepLine":83,"keywordType":"Action","textWithKeyword":"When Admin Edited the program deatils \"update_Programdescription\"","stepMatchArguments":[{"group":{"start":33,"value":"\"update_Programdescription\"","children":[{"start":34,"value":"update_Programdescription","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":113,"gherkinStepLine":84,"keywordType":"Outcome","textWithKeyword":"Then Admin should get the message for the success or failure update \"update_Programdescription\"","stepMatchArguments":[{"group":{"start":63,"value":"\"update_Programdescription\"","children":[{"start":64,"value":"update_Programdescription","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":116,"pickleLine":89,"tags":[],"steps":[{"pwStepLine":117,"gherkinStepLine":83,"keywordType":"Action","textWithKeyword":"When Admin Edited the program deatils \"update_ProgramStatus\"","stepMatchArguments":[{"group":{"start":33,"value":"\"update_ProgramStatus\"","children":[{"start":34,"value":"update_ProgramStatus","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":118,"gherkinStepLine":84,"keywordType":"Outcome","textWithKeyword":"Then Admin should get the message for the success or failure update \"update_ProgramStatus\"","stepMatchArguments":[{"group":{"start":63,"value":"\"update_ProgramStatus\"","children":[{"start":64,"value":"update_ProgramStatus","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":121,"pickleLine":90,"tags":[],"steps":[{"pwStepLine":122,"gherkinStepLine":83,"keywordType":"Action","textWithKeyword":"When Admin Edited the program deatils \"update_ProgramName\"","stepMatchArguments":[{"group":{"start":33,"value":"\"update_ProgramName\"","children":[{"start":34,"value":"update_ProgramName","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":123,"gherkinStepLine":84,"keywordType":"Outcome","textWithKeyword":"Then Admin should get the message for the success or failure update \"update_ProgramName\"","stepMatchArguments":[{"group":{"start":63,"value":"\"update_ProgramName\"","children":[{"start":64,"value":"update_ProgramName","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":130,"pickleLine":99,"tags":[],"steps":[{"pwStepLine":131,"gherkinStepLine":95,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the  mandatory fields \"Program Name\" with asterisk mark in the pop Up window","stepMatchArguments":[{"group":{"start":39,"value":"\"Program Name\"","children":[{"start":40,"value":"Program Name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":134,"pickleLine":100,"tags":[],"steps":[{"pwStepLine":135,"gherkinStepLine":95,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the  mandatory fields \"Program Description\" with asterisk mark in the pop Up window","stepMatchArguments":[{"group":{"start":39,"value":"\"Program Description\"","children":[{"start":40,"value":"Program Description","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":138,"pickleLine":101,"tags":[],"steps":[{"pwStepLine":139,"gherkinStepLine":95,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the  mandatory fields \"Program Status\" with asterisk mark in the pop Up window","stepMatchArguments":[{"group":{"start":39,"value":"\"Program Status\"","children":[{"start":40,"value":"Program Status","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":146,"pickleLine":109,"tags":[],"steps":[{"pwStepLine":147,"gherkinStepLine":105,"keywordType":"Outcome","textWithKeyword":"Then Admin see the entered text in the fields \"Program Name\" in the add new program pop up window","stepMatchArguments":[{"group":{"start":41,"value":"\"Program Name\"","children":[{"start":42,"value":"Program Name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":150,"pickleLine":110,"tags":[],"steps":[{"pwStepLine":151,"gherkinStepLine":105,"keywordType":"Outcome","textWithKeyword":"Then Admin see the entered text in the fields \"Program Description\" in the add new program pop up window","stepMatchArguments":[{"group":{"start":41,"value":"\"Program Description\"","children":[{"start":42,"value":"Program Description","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":154,"pickleLine":111,"tags":[],"steps":[{"pwStepLine":155,"gherkinStepLine":105,"keywordType":"Outcome","textWithKeyword":"Then Admin see the entered text in the fields \"Program Status\" in the add new program pop up window","stepMatchArguments":[{"group":{"start":41,"value":"\"Program Status\"","children":[{"start":42,"value":"Program Status","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":162,"pickleLine":122,"tags":[],"steps":[{"pwStepLine":163,"gherkinStepLine":118,"keywordType":"Outcome","textWithKeyword":"Then Admin sees the program name or description sorted by ascennding or decending order after clicking the sort icon \"programName_AscendingOrder\"","stepMatchArguments":[{"group":{"start":112,"value":"\"programName_AscendingOrder\"","children":[{"start":113,"value":"programName_AscendingOrder","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":166,"pickleLine":123,"tags":[],"steps":[{"pwStepLine":167,"gherkinStepLine":118,"keywordType":"Outcome","textWithKeyword":"Then Admin sees the program name or description sorted by ascennding or decending order after clicking the sort icon \"programName_DecendingOrder\"","stepMatchArguments":[{"group":{"start":112,"value":"\"programName_DecendingOrder\"","children":[{"start":113,"value":"programName_DecendingOrder","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":170,"pickleLine":124,"tags":[],"steps":[{"pwStepLine":171,"gherkinStepLine":118,"keywordType":"Outcome","textWithKeyword":"Then Admin sees the program name or description sorted by ascennding or decending order after clicking the sort icon \"programDescription_AscendingOrder\"","stepMatchArguments":[{"group":{"start":112,"value":"\"programDescription_AscendingOrder\"","children":[{"start":113,"value":"programDescription_AscendingOrder","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":174,"pickleLine":125,"tags":[],"steps":[{"pwStepLine":175,"gherkinStepLine":118,"keywordType":"Outcome","textWithKeyword":"Then Admin sees the program name or description sorted by ascennding or decending order after clicking the sort icon \"ProgramDescription_DecendingOrder\"","stepMatchArguments":[{"group":{"start":112,"value":"\"ProgramDescription_DecendingOrder\"","children":[{"start":113,"value":"ProgramDescription_DecendingOrder","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":182,"pickleLine":135,"tags":[],"steps":[{"pwStepLine":183,"gherkinStepLine":131,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below \"paginationText\" pagination controls under the data table in the programPage","stepMatchArguments":[{"group":{"start":27,"value":"\"paginationText\"","children":[{"start":28,"value":"paginationText","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":186,"pickleLine":136,"tags":[],"steps":[{"pwStepLine":187,"gherkinStepLine":131,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below \"firstPageIcon\" pagination controls under the data table in the programPage","stepMatchArguments":[{"group":{"start":27,"value":"\"firstPageIcon\"","children":[{"start":28,"value":"firstPageIcon","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":190,"pickleLine":137,"tags":[],"steps":[{"pwStepLine":191,"gherkinStepLine":131,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below \"previousPageIcon\" pagination controls under the data table in the programPage","stepMatchArguments":[{"group":{"start":27,"value":"\"previousPageIcon\"","children":[{"start":28,"value":"previousPageIcon","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":194,"pickleLine":138,"tags":[],"steps":[{"pwStepLine":195,"gherkinStepLine":131,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below \"nextPageIcon\" pagination controls under the data table in the programPage","stepMatchArguments":[{"group":{"start":27,"value":"\"nextPageIcon\"","children":[{"start":28,"value":"nextPageIcon","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":198,"pickleLine":139,"tags":[],"steps":[{"pwStepLine":199,"gherkinStepLine":131,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below \"lastPageIcon\" pagination controls under the data table in the programPage","stepMatchArguments":[{"group":{"start":27,"value":"\"lastPageIcon\"","children":[{"start":28,"value":"lastPageIcon","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":206,"pickleLine":151,"tags":[],"steps":[{"pwStepLine":207,"gherkinStepLine":147,"keywordType":"Action","textWithKeyword":"When Admin searches by valid program name,program description \"searchBy_ValidProgramName\" in the Program module","stepMatchArguments":[{"group":{"start":57,"value":"\"searchBy_ValidProgramName\"","children":[{"start":58,"value":"searchBy_ValidProgramName","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":210,"pickleLine":152,"tags":[],"steps":[{"pwStepLine":211,"gherkinStepLine":147,"keywordType":"Action","textWithKeyword":"When Admin searches by valid program name,program description \"searchBy_ProgramDescription\" in the Program module","stepMatchArguments":[{"group":{"start":57,"value":"\"searchBy_ProgramDescription\"","children":[{"start":58,"value":"searchBy_ProgramDescription","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":214,"pickleLine":153,"tags":[],"steps":[{"pwStepLine":215,"gherkinStepLine":147,"keywordType":"Action","textWithKeyword":"When Admin searches by valid program name,program description \"searchBy_InValidProgramName\" in the Program module","stepMatchArguments":[{"group":{"start":57,"value":"\"searchBy_InValidProgramName\"","children":[{"start":58,"value":"searchBy_InValidProgramName","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":218,"pickleLine":154,"tags":[],"steps":[{"pwStepLine":219,"gherkinStepLine":147,"keywordType":"Action","textWithKeyword":"When Admin searches by valid program name,program description \"searchBy_PartialProgramName\" in the Program module","stepMatchArguments":[{"group":{"start":57,"value":"\"searchBy_PartialProgramName\"","children":[{"start":58,"value":"searchBy_PartialProgramName","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":226,"pickleLine":163,"tags":[],"steps":[{"pwStepLine":227,"gherkinStepLine":160,"keywordType":"Outcome","textWithKeyword":"Then Admin navigated to the respective pages when he clicks the \"next\" link on the data table in program module","stepMatchArguments":[{"group":{"start":59,"value":"\"next\"","children":[{"start":60,"value":"next","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":230,"pickleLine":164,"tags":[],"steps":[{"pwStepLine":231,"gherkinStepLine":160,"keywordType":"Outcome","textWithKeyword":"Then Admin navigated to the respective pages when he clicks the \"previous\" link on the data table in program module","stepMatchArguments":[{"group":{"start":59,"value":"\"previous\"","children":[{"start":60,"value":"previous","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":234,"pickleLine":165,"tags":[],"steps":[{"pwStepLine":235,"gherkinStepLine":160,"keywordType":"Outcome","textWithKeyword":"Then Admin navigated to the respective pages when he clicks the \"first\" link on the data table in program module","stepMatchArguments":[{"group":{"start":59,"value":"\"first\"","children":[{"start":60,"value":"first","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":238,"pickleLine":166,"tags":[],"steps":[{"pwStepLine":239,"gherkinStepLine":160,"keywordType":"Outcome","textWithKeyword":"Then Admin navigated to the respective pages when he clicks the \"last\" link on the data table in program module","stepMatchArguments":[{"group":{"start":59,"value":"\"last\"","children":[{"start":60,"value":"last","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":244,"pickleLine":170,"tags":[],"steps":[{"pwStepLine":245,"gherkinStepLine":171,"keywordType":"Action","textWithKeyword":"When Admin clicks the delete icon in the program page","stepMatchArguments":[]},{"pwStepLine":246,"gherkinStepLine":172,"keywordType":"Outcome","textWithKeyword":"Then Admin should see a alert open with heading Confirm along with YES and NO button for deletion in program","stepMatchArguments":[]}]},
  {"pwTestLine":249,"pickleLine":174,"tags":[],"steps":[{"pwStepLine":250,"gherkinStepLine":175,"keywordType":"Action","textWithKeyword":"When Admin clicks the delete icon in the program page","stepMatchArguments":[]},{"pwStepLine":251,"gherkinStepLine":176,"keywordType":"Action","textWithKeyword":"And Admin clicks No option to delete on confirm page of program","stepMatchArguments":[]},{"pwStepLine":252,"gherkinStepLine":177,"keywordType":"Outcome","textWithKeyword":"Then Admin can see the deletion alert disappears without deleting the program","stepMatchArguments":[]}]},
  {"pwTestLine":255,"pickleLine":180,"tags":[],"steps":[{"pwStepLine":256,"gherkinStepLine":181,"keywordType":"Action","textWithKeyword":"When Admin clicks the delete icon in the program page","stepMatchArguments":[]},{"pwStepLine":257,"gherkinStepLine":182,"keywordType":"Action","textWithKeyword":"And Admin clicks Yes option to delete on confirm page of program","stepMatchArguments":[]},{"pwStepLine":258,"gherkinStepLine":183,"keywordType":"Outcome","textWithKeyword":"Then Admin gets a message Successful program Deleted alert","stepMatchArguments":[]},{"pwStepLine":259,"gherkinStepLine":184,"keywordType":"Outcome","textWithKeyword":"And Do not see that program in the data table","stepMatchArguments":[]}]},
  {"pwTestLine":262,"pickleLine":186,"tags":[],"steps":[{"pwStepLine":263,"gherkinStepLine":187,"keywordType":"Action","textWithKeyword":"When Admin clicks the delete icon in the program page","stepMatchArguments":[]},{"pwStepLine":264,"gherkinStepLine":188,"keywordType":"Action","textWithKeyword":"And Admin clicks CLose X Icon on confirm page of program","stepMatchArguments":[]},{"pwStepLine":265,"gherkinStepLine":189,"keywordType":"Outcome","textWithKeyword":"Then Admin can see the deletion alert disappears without deleting the program","stepMatchArguments":[]}]},
  {"pwTestLine":268,"pickleLine":192,"tags":[],"steps":[{"pwStepLine":269,"gherkinStepLine":193,"keywordType":"Action","textWithKeyword":"When Admin clicks any checkbox in the data table of program","stepMatchArguments":[]},{"pwStepLine":270,"gherkinStepLine":194,"keywordType":"Outcome","textWithKeyword":"Then Admin should see common delete option enabled under header Manage program","stepMatchArguments":[]}]},
  {"pwTestLine":273,"pickleLine":196,"tags":[],"steps":[{"pwStepLine":274,"gherkinStepLine":197,"keywordType":"Context","textWithKeyword":"Given Admin clicks single checkbox in the data table and clicks Multi Delete icon in program page","stepMatchArguments":[]},{"pwStepLine":275,"gherkinStepLine":198,"keywordType":"Action","textWithKeyword":"When Admin clicks No option to delete on confirm page of program","stepMatchArguments":[]},{"pwStepLine":276,"gherkinStepLine":199,"keywordType":"Outcome","textWithKeyword":"Then Admin can see the deletion alert disappears without deleting the program","stepMatchArguments":[]}]},
  {"pwTestLine":279,"pickleLine":202,"tags":[],"steps":[{"pwStepLine":280,"gherkinStepLine":203,"keywordType":"Context","textWithKeyword":"Given Admin clicks single checkbox in the data table and clicks Multi Delete icon in program page","stepMatchArguments":[]},{"pwStepLine":281,"gherkinStepLine":204,"keywordType":"Action","textWithKeyword":"When Admin clicks Yes option to delete on confirm page of program","stepMatchArguments":[]},{"pwStepLine":282,"gherkinStepLine":205,"keywordType":"Outcome","textWithKeyword":"Then Admin gets a message Successful programs Deleted alert","stepMatchArguments":[]},{"pwStepLine":283,"gherkinStepLine":206,"keywordType":"Outcome","textWithKeyword":"And Do not see that program in the data table","stepMatchArguments":[]}]},
  {"pwTestLine":286,"pickleLine":209,"tags":[],"steps":[{"pwStepLine":287,"gherkinStepLine":210,"keywordType":"Context","textWithKeyword":"Given Admin clicks multiple checkbox in the data table and clicks Multi Delete icon in program page","stepMatchArguments":[]},{"pwStepLine":288,"gherkinStepLine":211,"keywordType":"Action","textWithKeyword":"When Admin clicks No option to delete on confirm page of program","stepMatchArguments":[]},{"pwStepLine":289,"gherkinStepLine":212,"keywordType":"Outcome","textWithKeyword":"Then Admin can see the deletion alert disappears without deleting the selected programs","stepMatchArguments":[]}]},
  {"pwTestLine":292,"pickleLine":215,"tags":[],"steps":[{"pwStepLine":293,"gherkinStepLine":216,"keywordType":"Context","textWithKeyword":"Given Admin clicks multiple checkbox in the data table and clicks Multi Delete icon in program page","stepMatchArguments":[]},{"pwStepLine":294,"gherkinStepLine":217,"keywordType":"Action","textWithKeyword":"When Admin clicks Yes option to delete on confirm page of program","stepMatchArguments":[]},{"pwStepLine":295,"gherkinStepLine":218,"keywordType":"Outcome","textWithKeyword":"Then Admin gets a message Successful programs Deleted alert","stepMatchArguments":[]},{"pwStepLine":296,"gherkinStepLine":219,"keywordType":"Outcome","textWithKeyword":"And Do not see that programs in the data table","stepMatchArguments":[]}]},
]; // bdd-data-end