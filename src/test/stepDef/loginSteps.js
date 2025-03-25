
import { expect } from '@playwright/test';
import { test, Given, Then, When } from '../../../fixture/customFixtures.js';
import { CONFIG } from '../../../config/env.js';
const { readCSV } = require('../utils/csvReader');
const path = require('path');
const csvPath = path.resolve(__dirname, '../../../test-data/loginTestData.csv');
const testData = readCSV(csvPath);
import LoginPage from '../pageObjects/loginPage.js';

let page, response, err, loginPage, homePage;

//Background:
Given('The browser is open', async ({browser}) => {
  page = await browser.newPage();
});

Given('Admin gives the correct LMS portal URL', async ({}) => {
  await page.goto(CONFIG.BASE_URL);
  loginPage = new LoginPage(page);
});

//Scenario: Verify Admin is able to land on login page
Then('Admin lands on login page', async ({}) => {
  await expect(loginPage.forgotPasswordLink).toBeVisible();
});

//Scenario: Validate login with valid data in all fields
When('Admin enter valid data in all field and clicks login button', async ({}) => {
  homePage = await loginPage.validLoginChaining(CONFIG.USERNAME, CONFIG.PASSWORD);
});

Then('Admin should land on home page', async ({}) => {
  const isVisibleBoolean = await homePage.isLMSTextVisible();
    expect(isVisibleBoolean).toBeTruthy();
});

//Scenario: Verify login button action through keyboard
When('Admin enter valid credentials and clicks login button through keyboard', async ({}) => {
  homePage = await loginPage.loginThroughKeyboard(CONFIG.USERNAME, CONFIG.PASSWORD);
});


//Scenario: Verify login button action through mouse
When('Admin enter valid credentials and clicks login button through mouse', async ({}) => {
  homePage = await loginPage.loginThroughMouse(CONFIG.USERNAME, CONFIG.PASSWORD);
});


//Scenario Outline: Validate login with invalid data
When('Admin enter invalid {string} and\\/or {string}, and clicks login button', async ({}, username, password) => {
  loginPage.entercredentials(username,password)
});



//Scenario: Validate login credentials with null user name
When('Admin enter value only in password and clicks login button', async ({}) => {
  await loginPage.entercredentials("",CONFIG.PASSWORD);
});


//Scenario: Validate login credentials with null password
When('Admin enter value only in user name and clicks login button', async ({}) => {
  await loginPage.entercredentials(CONFIG.USERNAME,"");

});

Then('Error message {string}', async ({}, expectedErrMsg) => {
  let scenarioName = test.info().title;
  
  if(scenarioName.includes('invalid data')){
    expect(await loginPage.getInvalidCredentialText()).toBe(expectedErrMsg.trim());
  }
  else if(scenarioName.includes('null user name')){
    expect(await loginPage.getNullErrTextFor("Username")).toBe(expectedErrMsg.trim());
  }
  else if(scenarioName.includes('null password')){
    console.log('Inside null password THEN Block')
    console.log(`ExpectedErrorMsg = ${expectedErrMsg}`)
    expect(await loginPage.getNullErrTextFor("Password")).toBe(expectedErrMsg.trim()); //should fail yet passing. CONFUSED!
  }
    
});

//Scenario: Additional_Validate login with Empty Credentials only
When('Admin does not enter credentials and clicks on login button', async ({}) => {
  await loginPage.entercredentials("","");

});

Then('Admin sees {int} error messages {string} and {string}', async ({}, expErrMsgCount, expUsernameErrText, expPasswordErrText) => {
  
  let errResult = await loginPage.getnullCredentialErrDetails();
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






Then('Admin should see {string}', async ({}, expString) => {
  expect(await loginPage.getFormLoginText()).toBe(expString);
});

Then('If HTTP response >= {int}, then the link is broken', async ({}, expectedStatus) => {

  //https://playwright.dev/docs/api/class-apiresponseassertions
  response = await loginPage.apiGETCall(CONFIG.BASE_URL);
  expect(response.status()).not.toBe(expectedStatus); 
});


Then('Admin should see  LMS - Learning Management System', async ({}) => {

  let scenarioName = test.info().title;
  let data = await loginPage.getScreenshot("partial", scenarioName);
  await expect(data.get("pageRef")).toHaveScreenshot(data.get("screenshotPath"));
});


Then('Admin should see company name below the app name', async ({}) => {
  let scenarioName = test.info().title;
  let data = await loginPage.getScreenshot("partial", scenarioName);
  await expect(data.get("pageRef")).toHaveScreenshot(data.get("screenshotPath"));
});


When('Admin gives the invalid LMS portal URL for test case {string}', async ({}, testCase) => { 
  
  const rowData = testData.find(row => row.scenario === testCase);
  if (!rowData) {
    throw new Error(`No data found for scenario: ${testCase}`);
  }else {    

    try {
      // Attempt to navigate to the invalid URL
      response = await loginPage.apiGETCall(rowData.invalidURL);
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

