import { expect } from '@playwright/test';
import { test, Given, Then, When } from '../../../fixture/customFixtures.js';
import {CONFIG} from '../../../config/env.js'
import LoginPage from '../pageObjects/loginPage.js';

let page, loginPage, homePage, response;

  Given('Admin is logged into the application', async ({browser}) => {
    page = await browser.newPage();
    await page.goto(CONFIG.BASE_URL);
    loginPage = new LoginPage(page);

    homePage = await loginPage.validLoginChaining(CONFIG.USERNAME, CONFIG.PASSWORD);
  });

Given('Admin is in home page', async ({}) => {

  const isVisibleBoolean = await homePage.isLMSTextVisible();
    expect(isVisibleBoolean).toBeTruthy();

  });
  
  When('Admin clicks on the logout in the menu bar', async ({}) => {
    loginPage = await homePage.clickLogoutOption();
  });
  
  Then('Admin should be redirected to login page', async ({}) => {
    await expect(loginPage.forgotPasswordLink).toBeVisible();
  });

  Given('Admin is logged out of the application', async ({}) => {
    loginPage = await homePage.clickLogoutOption();
  });
  
  Given('Admin is in login page', async ({}) => {
    await expect(loginPage.forgotPasswordLink).toBeVisible();
  });
  
  When('Admin clicks  browser back button', async ({}) => {
    response = await loginPage.navigateBack(); 
  });
  
  Then('Admin should receive error message', async ({}) => {
    expect(response.responseStatus).not.toBe(200);
  });