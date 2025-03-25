
import { expect } from '@playwright/test';
import { test, Given, Then, When } from '../../../fixture/customFixtures.js';
import { CONFIG } from '../../../config/env.js';
const { readCSV } = require('../utils/csvReader');
const path = require('path');
const csvPath = path.resolve(__dirname, '../../../test-data/loginTestData.csv');
const testData = readCSV(csvPath);

let page; 
let response;
let err;

Given('The browser is open', async ({browser}) => {
  console.log('INSIDE BACKGROUND - The browser is open')
  page = await browser.newPage();
});

Given('Admin gives the correct LMS portal URL', async ({}) => {
  console.log('INSIDE BACKGROUND - Admin gives the correct LMS portal URL')
  await page.goto(CONFIG.BASE_URL);
});

Then('Admin lands on login page', async ({loginPageFixture}) => {
  expect(loginPageFixture.forgotPasswordLink).toBeTruthy();
});

When('Admin enter invalid {string} and\\/or {string}, and clicks login button', async ({loginPageFixture}, username, password) => {
  await loginPageFixture.entercredentials(username,password);
});

Then('Error message {string}', async ({loginPageFixture}, expectedErrMsg) => {
  let scenarioName = test.info().title;
  
  if(scenarioName.includes('invalid data')){
    expect(await loginPageFixture.getInvalidCredentialText()).toBe(expectedErrMsg.trim());
  }
  else if(scenarioName.includes('null user name')){
    expect(await loginPageFixture.getNullErrTextFor("Username")).toBe(expectedErrMsg.trim());
  }
  else if(scenarioName.includes('null password')){
    expect(await loginPageFixture.getNullErrTextFor("Password")).toBe(expectedErrMsg.trim());
  }
    
});

When('Admin enter value only in password and clicks login button', async ({loginPageFixture}) => {
  await loginPageFixture.entercredentials("",CONFIG.PASSWORD);
});

When('Admin enter value only in user name and clicks login button', async ({loginPageFixture}) => {
  await loginPageFixture.entercredentials(CONFIG.USERNAME,"");

});

When('Admin does not enter credentials and clicks on login button', async ({loginPageFixture}) => {
  await loginPageFixture.entercredentials("","");

});

Then('Admin sees {int} error messages {string} and {string}', async ({loginPageFixture}, expErrMsgCount, expUsernameErrText, expPasswordErrText) => {
  
  let errResult = await loginPageFixture.getnullCredentialErrDetails();
  let actualErrMsgCount = errResult.get("errCount");
  let actualErrMsgTextArray = errResult.get("errTextArray");

/* SOFT ASSERTION PROBABLY DOESNT WORK = https://playwright.dev/docs/test-assertions#soft-assertions 
  await expect.soft(errResult.get("errCount")).toBe(expErrMsgCount);
  await expect.soft((errResult.get("errTextArray"))[0]).toBe(expUsernameErrText);
  await expect.soft((errResult.get("errCount"))[1]).toBe(expPasswordErrText);

  // Avoid running further if there were soft assertion failures.
expect(test.info().errors).toHaveLength(0);

//Note: Note that soft assertions only work with Playwright test runner????vIJAYA
*/
 expect(actualErrMsgCount).toBe(expErrMsgCount);
 expect(actualErrMsgTextArray[0]).toBe(expUsernameErrText);
 expect(actualErrMsgTextArray[1]).toBe(expPasswordErrText);

});


When('Admin enter valid credentials and clicks login button through keyboard', async ({loginPageFixture}) => {
  await loginPageFixture.loginThroughKeyboard(CONFIG.USERNAME, CONFIG.PASSWORD);
});

When('Admin enter valid credentials and clicks login button through mouse', async ({loginPageFixture}) => {
  await loginPageFixture.loginThroughMouse(CONFIG.USERNAME, CONFIG.PASSWORD);
});

Then('Admin should see {string}', async ({loginPageFixture}, expString) => {
  expect(await loginPageFixture.getFormLoginText()).toBe(expString);
});

Then('If HTTP response >= {int}, then the link is broken', async ({loginPageFixture}, expectedStatus) => {

  //https://playwright.dev/docs/api/class-apiresponseassertions
  response = await loginPageFixture.apiGETCall(CONFIG.BASE_URL);
  expect(response.status()).not.toBe(expectedStatus); 
});


Then('Admin should see  LMS - Learning Management System', async ({loginPageFixture}) => {

  let scenarioName = test.info().title;
  let data = await loginPageFixture.getScreenshot("partial", scenarioName);
  await expect(data.get("pageRef")).toHaveScreenshot(data.get("screenshotPath"));
});


Then('Admin should see company name below the app name', async ({loginPageFixture}) => {
  let scenarioName = test.info().title;
  let data = await loginPageFixture.getScreenshot("partial", scenarioName);
  await expect(data.get("pageRef")).toHaveScreenshot(data.get("screenshotPath"));
});

//here here
When('Admin gives the invalid LMS portal URL for test case {string}', async ({loginPageFixture}, testCase) => { 
  
  const rowData = testData.find(row => row.scenario === testCase);
  if (!rowData) {
    throw new Error(`No data found for scenario: ${testCase}`);
  }else {    

    try {
      // Attempt to navigate to the invalid URL
      response = await loginPageFixture.apiGETCall(rowData.invalidURL);
    } catch (error) {
      // Capture and log the error
      err = error.message;     
    }
  }  
});

Then('Admin should receive application error', async ({}) => {

  let scenarioName = test.info().title; 
    
    if(scenarioName.includes("Incorrect_Protocol")){
      expect(err).toContain('Protocol "httpx:" not supported. Expected "http:"');
    }
    else if(scenarioName.includes("Incorrect_TopLevelDomain")){
      expect(err).toContain('self-signed certificate');
    }
    else if(scenarioName.includes("Missing_TopLevelDomain") || scenarioName.includes("NonExistenSubDomain") || scenarioName.includes("InvalidCharacters")){
      expect(err).toContain('getaddrinfo ENOTFOUND');
    }
    else{
      expect(response.status()).toBe(404);
    }
});

When('Admin enter valid data in all field and clicks login button', async ({loginPageFixture }) => {
  console.log("Admin enters valid data in all fields and clicks login button");
  await loginPageFixture.validLogin(CONFIG.USERNAME, CONFIG.PASSWORD);

});

Then('Admin should land on home page', async ({loginPageFixture }) => {
  console.log("Admin should land on home page");
  await expect(loginPageFixture.LMSDisplayHomePage).toBeVisible();

});