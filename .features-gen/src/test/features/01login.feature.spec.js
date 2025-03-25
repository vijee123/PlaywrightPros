// Generated from: src\test\features\01login.feature
import { test } from "../../../../fixture/customFixtures.js";

test.describe('Login Page Validation', () => {

  test.beforeEach('Background', async ({ Given, browser, And }) => {
    await Given('The browser is open', null, { browser }); 
    await And('Admin gives the correct LMS portal URL'); 
  });
  
  test('Verify Admin is able to land on login page', { tag: ['@login'] }, async ({ Then, loginPageFixture }) => { 
    await Then('Admin lands on login page', null, { loginPageFixture }); 
  });

  test('Validate login with valid data in all fields', { tag: ['@login'] }, async ({ When, loginPageFixture, Then }) => { 
    await When('Admin enter valid data in all field and clicks login button', null, { loginPageFixture }); 
    await Then('Admin should land on home page', null, { loginPageFixture }); 
  });

  test('Verify login button action through keyboard', { tag: ['@login'] }, async ({ Given, loginPageFixture, When, Then }) => { 
    await Given('Admin lands on login page', null, { loginPageFixture }); 
    await When('Admin enter valid credentials and clicks login button through keyboard', null, { loginPageFixture }); 
    await Then('Admin should land on home page', null, { loginPageFixture }); 
  });

  test('Verify login button action through mouse', { tag: ['@login'] }, async ({ Given, loginPageFixture, When, Then }) => { 
    await Given('Admin lands on login page', null, { loginPageFixture }); 
    await When('Admin enter valid credentials and clicks login button through mouse', null, { loginPageFixture }); 
    await Then('Admin should land on home page', null, { loginPageFixture }); 
  });

  test.describe('Validate login with invalid data - "<TestCase>"', () => {

    test('Validate login with invalid data - "Password_Incorrect"', { tag: ['@login'] }, async ({ Given, loginPageFixture, When, Then }) => { 
      await Given('Admin lands on login page', null, { loginPageFixture }); 
      await When('Admin enter invalid "Playwright@gmail.com" and/or "March@2026", and clicks login button', null, { loginPageFixture }); 
      await Then('Error message "Invalid username and password Please try again"', null, { loginPageFixture }); 
    });

    test('Validate login with invalid data - "Username_IncorrectLocalPart"', { tag: ['@login'] }, async ({ Given, loginPageFixture, When, Then }) => { 
      await Given('Admin lands on login page', null, { loginPageFixture }); 
      await When('Admin enter invalid "Playwright22@gmail.com" and/or "March@2025", and clicks login button', null, { loginPageFixture }); 
      await Then('Error message "Invalid username and password Please try again"', null, { loginPageFixture }); 
    });

    test('Validate login with invalid data - "Username_MissingAtSymbol"', { tag: ['@login'] }, async ({ Given, loginPageFixture, When, Then }) => { 
      await Given('Admin lands on login page', null, { loginPageFixture }); 
      await When('Admin enter invalid "Playwrightgmail.com" and/or "March@2025", and clicks login button', null, { loginPageFixture }); 
      await Then('Error message "Invalid username and password Please try again"', null, { loginPageFixture }); 
    });

    test('Validate login with invalid data - "Username_IncorrectSubdomain"', { tag: ['@login'] }, async ({ Given, loginPageFixture, When, Then }) => { 
      await Given('Admin lands on login page', null, { loginPageFixture }); 
      await When('Admin enter invalid "Playwright@hotmail.com" and/or "March@2025", and clicks login button', null, { loginPageFixture }); 
      await Then('Error message "Invalid username and password Please try again"', null, { loginPageFixture }); 
    });

    test('Validate login with invalid data - "Username_IncorrectTopLevelDomain"', { tag: ['@login'] }, async ({ Given, loginPageFixture, When, Then }) => { 
      await Given('Admin lands on login page', null, { loginPageFixture }); 
      await When('Admin enter invalid "Playwright@gmail.net" and/or "March@2025", and clicks login button', null, { loginPageFixture }); 
      await Then('Error message "Invalid username and password Please try again"', null, { loginPageFixture }); 
    });

  });

  test('Validate login credentials with null user name', { tag: ['@login'] }, async ({ Given, loginPageFixture, When, Then }) => { 
    await Given('Admin lands on login page', null, { loginPageFixture }); 
    await When('Admin enter value only in password and clicks login button', null, { loginPageFixture }); 
    await Then('Error message "Please enter your user name"', null, { loginPageFixture }); 
  });

  test('Validate login credentials with null password', { tag: ['@login', '@fail'] }, async ({ Given, loginPageFixture, When, Then }) => { 
    test.fail();
    await Given('Admin lands on login page', null, { loginPageFixture }); 
    await When('Admin enter value only in user name and clicks login button', null, { loginPageFixture }); 
    await Then('Error message "Please enter your password"', null, { loginPageFixture }); 
  });

  test('Additional_Validate login with Empty Credentials only', { tag: ['@login'] }, async ({ Given, loginPageFixture, When, Then }) => { 
    await Given('Admin lands on login page', null, { loginPageFixture }); 
    await When('Admin does not enter credentials and clicks on login button', null, { loginPageFixture }); 
    await Then('Admin sees 2 error messages "Please enter your user name" and "Please enter your password"', null, { loginPageFixture }); 
  });

  test('Validate sign in content', { tag: ['@login'] }, async ({ Given, loginPageFixture, Then }) => { 
    await Given('Admin lands on login page', null, { loginPageFixture }); 
    await Then('Admin should see "Please login to LMS application"', null, { loginPageFixture }); 
  });

  test('Verify for broken link', { tag: ['@login'] }, async ({ Then, loginPageFixture }) => { 
    await Then('If HTTP response >= 400, then the link is broken', null, { loginPageFixture }); 
  });

  test('Verify application name', { tag: ['@login'] }, async ({ Then, loginPageFixture }) => { 
    await Then('Admin should see  LMS - Learning Management System', null, { loginPageFixture }); 
  });

  test('Verify company name', { tag: ['@login'] }, async ({ Then, loginPageFixture }) => { 
    await Then('Admin should see company name below the app name', null, { loginPageFixture }); 
  });

  test.describe('Verify Admin is not able to land on home page with invalid URL - "<TestCase>"', () => {

    test('Verify Admin is not able to land on home page with invalid URL - "Incorrect_DomainName"', { tag: ['@login', '@wip'] }, async ({ When, loginPageFixture, Then }) => { 
      await When('Admin gives the invalid LMS portal URL for test case "Incorrect_DomainName"', null, { loginPageFixture }); 
      await Then('Admin should receive application error'); 
    });

    test('Verify Admin is not able to land on home page with invalid URL - "Misspelled_DomainName"', { tag: ['@login', '@wip'] }, async ({ When, loginPageFixture, Then }) => { 
      await When('Admin gives the invalid LMS portal URL for test case "Misspelled_DomainName"', null, { loginPageFixture }); 
      await Then('Admin should receive application error'); 
    });

    test('Verify Admin is not able to land on home page with invalid URL - "Incorrect_Protocol"', { tag: ['@login', '@wip'] }, async ({ When, loginPageFixture, Then }) => { 
      await When('Admin gives the invalid LMS portal URL for test case "Incorrect_Protocol"', null, { loginPageFixture }); 
      await Then('Admin should receive application error'); 
    });

    test('Verify Admin is not able to land on home page with invalid URL - "Incorrect_Endpoint"', { tag: ['@login', '@wip'] }, async ({ When, loginPageFixture, Then }) => { 
      await When('Admin gives the invalid LMS portal URL for test case "Incorrect_Endpoint"', null, { loginPageFixture }); 
      await Then('Admin should receive application error'); 
    });

    test('Verify Admin is not able to land on home page with invalid URL - "Misspelled_Endpoint"', { tag: ['@login', '@wip'] }, async ({ When, loginPageFixture, Then }) => { 
      await When('Admin gives the invalid LMS portal URL for test case "Misspelled_Endpoint"', null, { loginPageFixture }); 
      await Then('Admin should receive application error'); 
    });

    test('Verify Admin is not able to land on home page with invalid URL - "Incorrect_TopLevelDomain"', { tag: ['@login', '@wip'] }, async ({ When, loginPageFixture, Then }) => { 
      await When('Admin gives the invalid LMS portal URL for test case "Incorrect_TopLevelDomain"', null, { loginPageFixture }); 
      await Then('Admin should receive application error'); 
    });

    test('Verify Admin is not able to land on home page with invalid URL - "Missing_TopLevelDomain"', { tag: ['@login', '@wip'] }, async ({ When, loginPageFixture, Then }) => { 
      await When('Admin gives the invalid LMS portal URL for test case "Missing_TopLevelDomain"', null, { loginPageFixture }); 
      await Then('Admin should receive application error'); 
    });

    test('Verify Admin is not able to land on home page with invalid URL - "NonExistenSubDomain"', { tag: ['@login', '@wip'] }, async ({ When, loginPageFixture, Then }) => { 
      await When('Admin gives the invalid LMS portal URL for test case "NonExistenSubDomain"', null, { loginPageFixture }); 
      await Then('Admin should receive application error'); 
    });

    test('Verify Admin is not able to land on home page with invalid URL - "InvalidCharacters"', { tag: ['@login', '@wip'] }, async ({ When, loginPageFixture, Then }) => { 
      await When('Admin gives the invalid LMS portal URL for test case "InvalidCharacters"', null, { loginPageFixture }); 
      await Then('Admin should receive application error'); 
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('src\\test\\features\\01login.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":9,"tags":["@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And Admin gives the correct LMS portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then Admin lands on login page","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":12,"tags":["@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And Admin gives the correct LMS portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When Admin enter valid data in all field and clicks login button","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on home page","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":16,"tags":["@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And Admin gives the correct LMS portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given Admin lands on login page","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When Admin enter valid credentials and clicks login button through keyboard","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on home page","stepMatchArguments":[]}]},
  {"pwTestLine":26,"pickleLine":21,"tags":["@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And Admin gives the correct LMS portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given Admin lands on login page","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When Admin enter valid credentials and clicks login button through mouse","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on home page","stepMatchArguments":[]}]},
  {"pwTestLine":34,"pickleLine":33,"tags":["@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And Admin gives the correct LMS portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":27,"keywordType":"Context","textWithKeyword":"Given Admin lands on login page","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When Admin enter invalid \"Playwright@gmail.com\" and/or \"March@2026\", and clicks login button","stepMatchArguments":[{"group":{"start":20,"value":"\"Playwright@gmail.com\"","children":[{"start":21,"value":"Playwright@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":50,"value":"\"March@2026\"","children":[{"start":51,"value":"March@2026","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":37,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then Error message \"Invalid username and password Please try again\"","stepMatchArguments":[{"group":{"start":14,"value":"\"Invalid username and password Please try again\"","children":[{"start":15,"value":"Invalid username and password Please try again","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":40,"pickleLine":34,"tags":["@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And Admin gives the correct LMS portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":27,"keywordType":"Context","textWithKeyword":"Given Admin lands on login page","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When Admin enter invalid \"Playwright22@gmail.com\" and/or \"March@2025\", and clicks login button","stepMatchArguments":[{"group":{"start":20,"value":"\"Playwright22@gmail.com\"","children":[{"start":21,"value":"Playwright22@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":52,"value":"\"March@2025\"","children":[{"start":53,"value":"March@2025","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":43,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then Error message \"Invalid username and password Please try again\"","stepMatchArguments":[{"group":{"start":14,"value":"\"Invalid username and password Please try again\"","children":[{"start":15,"value":"Invalid username and password Please try again","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":46,"pickleLine":35,"tags":["@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And Admin gives the correct LMS portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":27,"keywordType":"Context","textWithKeyword":"Given Admin lands on login page","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When Admin enter invalid \"Playwrightgmail.com\" and/or \"March@2025\", and clicks login button","stepMatchArguments":[{"group":{"start":20,"value":"\"Playwrightgmail.com\"","children":[{"start":21,"value":"Playwrightgmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":49,"value":"\"March@2025\"","children":[{"start":50,"value":"March@2025","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":49,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then Error message \"Invalid username and password Please try again\"","stepMatchArguments":[{"group":{"start":14,"value":"\"Invalid username and password Please try again\"","children":[{"start":15,"value":"Invalid username and password Please try again","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":52,"pickleLine":36,"tags":["@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And Admin gives the correct LMS portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":27,"keywordType":"Context","textWithKeyword":"Given Admin lands on login page","stepMatchArguments":[]},{"pwStepLine":54,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When Admin enter invalid \"Playwright@hotmail.com\" and/or \"March@2025\", and clicks login button","stepMatchArguments":[{"group":{"start":20,"value":"\"Playwright@hotmail.com\"","children":[{"start":21,"value":"Playwright@hotmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":52,"value":"\"March@2025\"","children":[{"start":53,"value":"March@2025","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":55,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then Error message \"Invalid username and password Please try again\"","stepMatchArguments":[{"group":{"start":14,"value":"\"Invalid username and password Please try again\"","children":[{"start":15,"value":"Invalid username and password Please try again","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":58,"pickleLine":37,"tags":["@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And Admin gives the correct LMS portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":59,"gherkinStepLine":27,"keywordType":"Context","textWithKeyword":"Given Admin lands on login page","stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When Admin enter invalid \"Playwright@gmail.net\" and/or \"March@2025\", and clicks login button","stepMatchArguments":[{"group":{"start":20,"value":"\"Playwright@gmail.net\"","children":[{"start":21,"value":"Playwright@gmail.net","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":50,"value":"\"March@2025\"","children":[{"start":51,"value":"March@2025","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":61,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then Error message \"Invalid username and password Please try again\"","stepMatchArguments":[{"group":{"start":14,"value":"\"Invalid username and password Please try again\"","children":[{"start":15,"value":"Invalid username and password Please try again","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":66,"pickleLine":40,"tags":["@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And Admin gives the correct LMS portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":67,"gherkinStepLine":41,"keywordType":"Context","textWithKeyword":"Given Admin lands on login page","stepMatchArguments":[]},{"pwStepLine":68,"gherkinStepLine":42,"keywordType":"Action","textWithKeyword":"When Admin enter value only in password and clicks login button","stepMatchArguments":[]},{"pwStepLine":69,"gherkinStepLine":43,"keywordType":"Outcome","textWithKeyword":"Then Error message \"Please enter your user name\"","stepMatchArguments":[{"group":{"start":14,"value":"\"Please enter your user name\"","children":[{"start":15,"value":"Please enter your user name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":72,"pickleLine":46,"tags":["@login","@fail"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And Admin gives the correct LMS portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":74,"gherkinStepLine":47,"keywordType":"Context","textWithKeyword":"Given Admin lands on login page","stepMatchArguments":[]},{"pwStepLine":75,"gherkinStepLine":48,"keywordType":"Action","textWithKeyword":"When Admin enter value only in user name and clicks login button","stepMatchArguments":[]},{"pwStepLine":76,"gherkinStepLine":49,"keywordType":"Outcome","textWithKeyword":"Then Error message \"Please enter your password\"","stepMatchArguments":[{"group":{"start":14,"value":"\"Please enter your password\"","children":[{"start":15,"value":"Please enter your password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":79,"pickleLine":54,"tags":["@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And Admin gives the correct LMS portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":80,"gherkinStepLine":55,"keywordType":"Context","textWithKeyword":"Given Admin lands on login page","stepMatchArguments":[]},{"pwStepLine":81,"gherkinStepLine":56,"keywordType":"Action","textWithKeyword":"When Admin does not enter credentials and clicks on login button","stepMatchArguments":[]},{"pwStepLine":82,"gherkinStepLine":57,"keywordType":"Outcome","textWithKeyword":"Then Admin sees 2 error messages \"Please enter your user name\" and \"Please enter your password\"","stepMatchArguments":[{"group":{"start":11,"value":"2","children":[]},"parameterTypeName":"int"},{"group":{"start":28,"value":"\"Please enter your user name\"","children":[{"start":29,"value":"Please enter your user name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":62,"value":"\"Please enter your password\"","children":[{"start":63,"value":"Please enter your password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":85,"pickleLine":62,"tags":["@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And Admin gives the correct LMS portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":86,"gherkinStepLine":63,"keywordType":"Context","textWithKeyword":"Given Admin lands on login page","stepMatchArguments":[]},{"pwStepLine":87,"gherkinStepLine":64,"keywordType":"Outcome","textWithKeyword":"Then Admin should see \"Please login to LMS application\"","stepMatchArguments":[{"group":{"start":17,"value":"\"Please login to LMS application\"","children":[{"start":18,"value":"Please login to LMS application","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":90,"pickleLine":66,"tags":["@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And Admin gives the correct LMS portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":91,"gherkinStepLine":67,"keywordType":"Outcome","textWithKeyword":"Then If HTTP response >= 400, then the link is broken","stepMatchArguments":[{"group":{"start":20,"value":"400","children":[]},"parameterTypeName":"int"}]}]},
  {"pwTestLine":94,"pickleLine":72,"tags":["@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And Admin gives the correct LMS portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":95,"gherkinStepLine":73,"keywordType":"Outcome","textWithKeyword":"Then Admin should see  LMS - Learning Management System","stepMatchArguments":[]}]},
  {"pwTestLine":98,"pickleLine":75,"tags":["@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And Admin gives the correct LMS portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":99,"gherkinStepLine":76,"keywordType":"Outcome","textWithKeyword":"Then Admin should see company name below the app name","stepMatchArguments":[]}]},
  {"pwTestLine":104,"pickleLine":85,"tags":["@login","@wip"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And Admin gives the correct LMS portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":105,"gherkinStepLine":80,"keywordType":"Action","textWithKeyword":"When Admin gives the invalid LMS portal URL for test case \"Incorrect_DomainName\"","stepMatchArguments":[{"group":{"start":53,"value":"\"Incorrect_DomainName\"","children":[{"start":54,"value":"Incorrect_DomainName","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":106,"gherkinStepLine":81,"keywordType":"Outcome","textWithKeyword":"Then Admin should receive application error","stepMatchArguments":[]}]},
  {"pwTestLine":109,"pickleLine":86,"tags":["@login","@wip"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And Admin gives the correct LMS portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":110,"gherkinStepLine":80,"keywordType":"Action","textWithKeyword":"When Admin gives the invalid LMS portal URL for test case \"Misspelled_DomainName\"","stepMatchArguments":[{"group":{"start":53,"value":"\"Misspelled_DomainName\"","children":[{"start":54,"value":"Misspelled_DomainName","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":111,"gherkinStepLine":81,"keywordType":"Outcome","textWithKeyword":"Then Admin should receive application error","stepMatchArguments":[]}]},
  {"pwTestLine":114,"pickleLine":87,"tags":["@login","@wip"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And Admin gives the correct LMS portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":115,"gherkinStepLine":80,"keywordType":"Action","textWithKeyword":"When Admin gives the invalid LMS portal URL for test case \"Incorrect_Protocol\"","stepMatchArguments":[{"group":{"start":53,"value":"\"Incorrect_Protocol\"","children":[{"start":54,"value":"Incorrect_Protocol","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":116,"gherkinStepLine":81,"keywordType":"Outcome","textWithKeyword":"Then Admin should receive application error","stepMatchArguments":[]}]},
  {"pwTestLine":119,"pickleLine":88,"tags":["@login","@wip"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And Admin gives the correct LMS portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":120,"gherkinStepLine":80,"keywordType":"Action","textWithKeyword":"When Admin gives the invalid LMS portal URL for test case \"Incorrect_Endpoint\"","stepMatchArguments":[{"group":{"start":53,"value":"\"Incorrect_Endpoint\"","children":[{"start":54,"value":"Incorrect_Endpoint","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":121,"gherkinStepLine":81,"keywordType":"Outcome","textWithKeyword":"Then Admin should receive application error","stepMatchArguments":[]}]},
  {"pwTestLine":124,"pickleLine":89,"tags":["@login","@wip"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And Admin gives the correct LMS portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":125,"gherkinStepLine":80,"keywordType":"Action","textWithKeyword":"When Admin gives the invalid LMS portal URL for test case \"Misspelled_Endpoint\"","stepMatchArguments":[{"group":{"start":53,"value":"\"Misspelled_Endpoint\"","children":[{"start":54,"value":"Misspelled_Endpoint","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":126,"gherkinStepLine":81,"keywordType":"Outcome","textWithKeyword":"Then Admin should receive application error","stepMatchArguments":[]}]},
  {"pwTestLine":129,"pickleLine":90,"tags":["@login","@wip"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And Admin gives the correct LMS portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":130,"gherkinStepLine":80,"keywordType":"Action","textWithKeyword":"When Admin gives the invalid LMS portal URL for test case \"Incorrect_TopLevelDomain\"","stepMatchArguments":[{"group":{"start":53,"value":"\"Incorrect_TopLevelDomain\"","children":[{"start":54,"value":"Incorrect_TopLevelDomain","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":131,"gherkinStepLine":81,"keywordType":"Outcome","textWithKeyword":"Then Admin should receive application error","stepMatchArguments":[]}]},
  {"pwTestLine":134,"pickleLine":91,"tags":["@login","@wip"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And Admin gives the correct LMS portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":135,"gherkinStepLine":80,"keywordType":"Action","textWithKeyword":"When Admin gives the invalid LMS portal URL for test case \"Missing_TopLevelDomain\"","stepMatchArguments":[{"group":{"start":53,"value":"\"Missing_TopLevelDomain\"","children":[{"start":54,"value":"Missing_TopLevelDomain","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":136,"gherkinStepLine":81,"keywordType":"Outcome","textWithKeyword":"Then Admin should receive application error","stepMatchArguments":[]}]},
  {"pwTestLine":139,"pickleLine":92,"tags":["@login","@wip"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And Admin gives the correct LMS portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":140,"gherkinStepLine":80,"keywordType":"Action","textWithKeyword":"When Admin gives the invalid LMS portal URL for test case \"NonExistenSubDomain\"","stepMatchArguments":[{"group":{"start":53,"value":"\"NonExistenSubDomain\"","children":[{"start":54,"value":"NonExistenSubDomain","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":141,"gherkinStepLine":81,"keywordType":"Outcome","textWithKeyword":"Then Admin should receive application error","stepMatchArguments":[]}]},
  {"pwTestLine":144,"pickleLine":93,"tags":["@login","@wip"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And Admin gives the correct LMS portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":145,"gherkinStepLine":80,"keywordType":"Action","textWithKeyword":"When Admin gives the invalid LMS portal URL for test case \"InvalidCharacters\"","stepMatchArguments":[{"group":{"start":53,"value":"\"InvalidCharacters\"","children":[{"start":54,"value":"InvalidCharacters","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":146,"gherkinStepLine":81,"keywordType":"Outcome","textWithKeyword":"Then Admin should receive application error","stepMatchArguments":[]}]},
]; // bdd-data-end