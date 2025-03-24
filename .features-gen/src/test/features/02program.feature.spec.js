// Generated from: src\test\features\02program.feature
import { test } from "../../../../fixture/customFixtures.js";

test.describe('program Module', () => {

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

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('src\\test\\features\\02program.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Logout in menu bar","stepMatchArguments":[]}]},
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the heading \"LMS - Learning Management System\"","stepMatchArguments":[{"group":{"start":29,"value":"\"LMS - Learning Management System\"","children":[{"start":30,"value":"LMS - Learning Management System","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":14,"pickleLine":9,"tags":[],"steps":[{"pwStepLine":15,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the page names as in order \"ProgramBatchClassLogout\"","stepMatchArguments":[{"group":{"start":44,"value":"\"ProgramBatchClassLogout\"","children":[{"start":45,"value":"ProgramBatchClassLogout","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":18,"pickleLine":12,"tags":[],"steps":[{"pwStepLine":19,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then Admin should see sub menu in menu bar as \"Add New Program\"","stepMatchArguments":[{"group":{"start":41,"value":"\"Add New Program\"","children":[{"start":42,"value":"Add New Program","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":22,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":23,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the title \"Manage Program\"","stepMatchArguments":[{"group":{"start":27,"value":"\"Manage Program\"","children":[{"start":28,"value":"Manage Program","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":26,"pickleLine":18,"tags":[],"steps":[{"pwStepLine":27,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then Admin should see a Delete button in left top is disabled","stepMatchArguments":[]}]},
  {"pwTestLine":30,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":31,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Search bar with text as Search","stepMatchArguments":[]}]},
  {"pwTestLine":34,"pickleLine":24,"tags":[],"steps":[{"pwStepLine":35,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then Admin should see data table with column header on the Manage Program Page as  \"program name program description program status  edit / delete\"","stepMatchArguments":[{"group":{"start":78,"value":"\"program name program description program status  edit / delete\"","children":[{"start":79,"value":"program name program description program status  edit / delete","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":38,"pickleLine":27,"tags":[],"steps":[{"pwStepLine":39,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then Admin should see checkbox default state as unchecked beside Program Name column header","stepMatchArguments":[]}]},
  {"pwTestLine":42,"pickleLine":30,"tags":[],"steps":[{"pwStepLine":43,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the sort arrow icon beside to each column header except Edit and Delete","stepMatchArguments":[]}]},
  {"pwTestLine":48,"pickleLine":37,"tags":[],"steps":[{"pwStepLine":49,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the \"Edit_Icon\" in each rows","stepMatchArguments":[{"group":{"start":21,"value":"\"Edit_Icon\"","children":[{"start":22,"value":"Edit_Icon","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":52,"pickleLine":38,"tags":[],"steps":[{"pwStepLine":53,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the \"Check_Box\" in each rows","stepMatchArguments":[{"group":{"start":21,"value":"\"Check_Box\"","children":[{"start":22,"value":"Check_Box","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":56,"pickleLine":39,"tags":[],"steps":[{"pwStepLine":57,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the \"Delete_Icon\" in each rows","stepMatchArguments":[{"group":{"start":21,"value":"\"Delete_Icon\"","children":[{"start":22,"value":"Delete_Icon","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":62,"pickleLine":44,"tags":[],"steps":[{"pwStepLine":63,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"Then Admin should see pop up window for program details after clicking the Add New Program button","stepMatchArguments":[]}]},
  {"pwTestLine":66,"pickleLine":47,"tags":[],"steps":[{"pwStepLine":67,"gherkinStepLine":48,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the pop up window title as \"Program Details\" after clicking the Add New Program button","stepMatchArguments":[{"group":{"start":44,"value":"\"Program Details\"","children":[{"start":45,"value":"Program Details","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":72,"pickleLine":57,"tags":[],"steps":[{"pwStepLine":73,"gherkinStepLine":52,"keywordType":"Outcome","textWithKeyword":"Then Admin Adds new program and click on save button for the scenario \"cancelwithValidData\" in program module","stepMatchArguments":[{"group":{"start":65,"value":"\"cancelwithValidData\"","children":[{"start":66,"value":"cancelwithValidData","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":74,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then Admin gets message for the scenario \"cancelwithValidData\" for program Module","stepMatchArguments":[{"group":{"start":36,"value":"\"cancelwithValidData\"","children":[{"start":37,"value":"cancelwithValidData","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":77,"pickleLine":58,"tags":[],"steps":[{"pwStepLine":78,"gherkinStepLine":52,"keywordType":"Outcome","textWithKeyword":"Then Admin Adds new program and click on save button for the scenario \"closewithValidData\" in program module","stepMatchArguments":[{"group":{"start":65,"value":"\"closewithValidData\"","children":[{"start":66,"value":"closewithValidData","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":79,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then Admin gets message for the scenario \"closewithValidData\" for program Module","stepMatchArguments":[{"group":{"start":36,"value":"\"closewithValidData\"","children":[{"start":37,"value":"closewithValidData","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":82,"pickleLine":59,"tags":[],"steps":[{"pwStepLine":83,"gherkinStepLine":52,"keywordType":"Outcome","textWithKeyword":"Then Admin Adds new program and click on save button for the scenario \"onlyMandatoryfields\" in program module","stepMatchArguments":[{"group":{"start":65,"value":"\"onlyMandatoryfields\"","children":[{"start":66,"value":"onlyMandatoryfields","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":84,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then Admin gets message for the scenario \"onlyMandatoryfields\" for program Module","stepMatchArguments":[{"group":{"start":36,"value":"\"onlyMandatoryfields\"","children":[{"start":37,"value":"onlyMandatoryfields","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":87,"pickleLine":60,"tags":[],"steps":[{"pwStepLine":88,"gherkinStepLine":52,"keywordType":"Outcome","textWithKeyword":"Then Admin Adds new program and click on save button for the scenario \"withoutMandatoryfields\" in program module","stepMatchArguments":[{"group":{"start":65,"value":"\"withoutMandatoryfields\"","children":[{"start":66,"value":"withoutMandatoryfields","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":89,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then Admin gets message for the scenario \"withoutMandatoryfields\" for program Module","stepMatchArguments":[{"group":{"start":36,"value":"\"withoutMandatoryfields\"","children":[{"start":37,"value":"withoutMandatoryfields","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":92,"pickleLine":61,"tags":[],"steps":[{"pwStepLine":93,"gherkinStepLine":52,"keywordType":"Outcome","textWithKeyword":"Then Admin Adds new program and click on save button for the scenario \"verifyAddedProgram\" in program module","stepMatchArguments":[{"group":{"start":65,"value":"\"verifyAddedProgram\"","children":[{"start":66,"value":"verifyAddedProgram","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":94,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then Admin gets message for the scenario \"verifyAddedProgram\" for program Module","stepMatchArguments":[{"group":{"start":36,"value":"\"verifyAddedProgram\"","children":[{"start":37,"value":"verifyAddedProgram","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":101,"pickleLine":67,"tags":[],"steps":[{"pwStepLine":102,"gherkinStepLine":64,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the  mandatory fields \"Program Name\" with asterisk mark in the pop Up window","stepMatchArguments":[{"group":{"start":39,"value":"\"Program Name\"","children":[{"start":40,"value":"Program Name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":105,"pickleLine":68,"tags":[],"steps":[{"pwStepLine":106,"gherkinStepLine":64,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the  mandatory fields \"Program Description\" with asterisk mark in the pop Up window","stepMatchArguments":[{"group":{"start":39,"value":"\"Program Description\"","children":[{"start":40,"value":"Program Description","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":109,"pickleLine":69,"tags":[],"steps":[{"pwStepLine":110,"gherkinStepLine":64,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the  mandatory fields \"Program Status\" with asterisk mark in the pop Up window","stepMatchArguments":[{"group":{"start":39,"value":"\"Program Status\"","children":[{"start":40,"value":"Program Status","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":117,"pickleLine":77,"tags":[],"steps":[{"pwStepLine":118,"gherkinStepLine":73,"keywordType":"Outcome","textWithKeyword":"Then Admin see the entered text in the fields \"Program Name\" in the add new program pop up window","stepMatchArguments":[{"group":{"start":41,"value":"\"Program Name\"","children":[{"start":42,"value":"Program Name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":121,"pickleLine":78,"tags":[],"steps":[{"pwStepLine":122,"gherkinStepLine":73,"keywordType":"Outcome","textWithKeyword":"Then Admin see the entered text in the fields \"Program Description\" in the add new program pop up window","stepMatchArguments":[{"group":{"start":41,"value":"\"Program Description\"","children":[{"start":42,"value":"Program Description","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":125,"pickleLine":79,"tags":[],"steps":[{"pwStepLine":126,"gherkinStepLine":73,"keywordType":"Outcome","textWithKeyword":"Then Admin see the entered text in the fields \"Program Status\" in the add new program pop up window","stepMatchArguments":[{"group":{"start":41,"value":"\"Program Status\"","children":[{"start":42,"value":"Program Status","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":133,"pickleLine":90,"tags":[],"steps":[{"pwStepLine":134,"gherkinStepLine":86,"keywordType":"Outcome","textWithKeyword":"Then Admin sees the program name or description sorted by ascennding or decending order after clicking the sort icon \"programName_AscendingOrder\"","stepMatchArguments":[{"group":{"start":112,"value":"\"programName_AscendingOrder\"","children":[{"start":113,"value":"programName_AscendingOrder","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":137,"pickleLine":91,"tags":[],"steps":[{"pwStepLine":138,"gherkinStepLine":86,"keywordType":"Outcome","textWithKeyword":"Then Admin sees the program name or description sorted by ascennding or decending order after clicking the sort icon \"programName_DecendingOrder\"","stepMatchArguments":[{"group":{"start":112,"value":"\"programName_DecendingOrder\"","children":[{"start":113,"value":"programName_DecendingOrder","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":141,"pickleLine":92,"tags":[],"steps":[{"pwStepLine":142,"gherkinStepLine":86,"keywordType":"Outcome","textWithKeyword":"Then Admin sees the program name or description sorted by ascennding or decending order after clicking the sort icon \"programDescription_AscendingOrder\"","stepMatchArguments":[{"group":{"start":112,"value":"\"programDescription_AscendingOrder\"","children":[{"start":113,"value":"programDescription_AscendingOrder","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":145,"pickleLine":93,"tags":[],"steps":[{"pwStepLine":146,"gherkinStepLine":86,"keywordType":"Outcome","textWithKeyword":"Then Admin sees the program name or description sorted by ascennding or decending order after clicking the sort icon \"ProgramDescription_DecendingOrder\"","stepMatchArguments":[{"group":{"start":112,"value":"\"ProgramDescription_DecendingOrder\"","children":[{"start":113,"value":"ProgramDescription_DecendingOrder","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":153,"pickleLine":103,"tags":[],"steps":[{"pwStepLine":154,"gherkinStepLine":99,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below \"paginationText\" pagination controls under the data table in the programPage","stepMatchArguments":[{"group":{"start":27,"value":"\"paginationText\"","children":[{"start":28,"value":"paginationText","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":157,"pickleLine":104,"tags":[],"steps":[{"pwStepLine":158,"gherkinStepLine":99,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below \"firstPageIcon\" pagination controls under the data table in the programPage","stepMatchArguments":[{"group":{"start":27,"value":"\"firstPageIcon\"","children":[{"start":28,"value":"firstPageIcon","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":161,"pickleLine":105,"tags":[],"steps":[{"pwStepLine":162,"gherkinStepLine":99,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below \"previousPageIcon\" pagination controls under the data table in the programPage","stepMatchArguments":[{"group":{"start":27,"value":"\"previousPageIcon\"","children":[{"start":28,"value":"previousPageIcon","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":165,"pickleLine":106,"tags":[],"steps":[{"pwStepLine":166,"gherkinStepLine":99,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below \"nextPageIcon\" pagination controls under the data table in the programPage","stepMatchArguments":[{"group":{"start":27,"value":"\"nextPageIcon\"","children":[{"start":28,"value":"nextPageIcon","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":169,"pickleLine":107,"tags":[],"steps":[{"pwStepLine":170,"gherkinStepLine":99,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the below \"lastPageIcon\" pagination controls under the data table in the programPage","stepMatchArguments":[{"group":{"start":27,"value":"\"lastPageIcon\"","children":[{"start":28,"value":"lastPageIcon","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":177,"pickleLine":119,"tags":[],"steps":[{"pwStepLine":178,"gherkinStepLine":115,"keywordType":"Action","textWithKeyword":"When Admin searches by valid program name,program description \"searchBy_ValidProgramName\" in the Program module","stepMatchArguments":[{"group":{"start":57,"value":"\"searchBy_ValidProgramName\"","children":[{"start":58,"value":"searchBy_ValidProgramName","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":181,"pickleLine":120,"tags":[],"steps":[{"pwStepLine":182,"gherkinStepLine":115,"keywordType":"Action","textWithKeyword":"When Admin searches by valid program name,program description \"searchBy_ProgramDescription\" in the Program module","stepMatchArguments":[{"group":{"start":57,"value":"\"searchBy_ProgramDescription\"","children":[{"start":58,"value":"searchBy_ProgramDescription","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":185,"pickleLine":121,"tags":[],"steps":[{"pwStepLine":186,"gherkinStepLine":115,"keywordType":"Action","textWithKeyword":"When Admin searches by valid program name,program description \"searchBy_InValidProgramName\" in the Program module","stepMatchArguments":[{"group":{"start":57,"value":"\"searchBy_InValidProgramName\"","children":[{"start":58,"value":"searchBy_InValidProgramName","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":189,"pickleLine":122,"tags":[],"steps":[{"pwStepLine":190,"gherkinStepLine":115,"keywordType":"Action","textWithKeyword":"When Admin searches by valid program name,program description \"searchBy_PartialProgramName\" in the Program module","stepMatchArguments":[{"group":{"start":57,"value":"\"searchBy_PartialProgramName\"","children":[{"start":58,"value":"searchBy_PartialProgramName","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end