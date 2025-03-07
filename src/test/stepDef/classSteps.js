import { createBdd } from "playwright-bdd";
const{Given,When,Then} =createBdd();

const ClassPage  = require('../pageObjects/classPage.js');
const LoginPage  = require('../pageObjects/loginPage.js');
const { expect } = require("@playwright/test");



  Given('Admin is on the home Page', async ({page}) => {
    console.log("Admin is on the home Page");
    const loginPageInstance  = new LoginPage(page); 
    await loginPageInstance.launchApp();
    await loginPageInstance.validLogin("playwrightuser@gmail.com","Playwright@1234");
    });
 
 When('Admin clicks the Class Navigation bar in the Header', async ({page}) => {
    console.log("Admin clicks the Class Navigation bar in the Header");
    const classPageInstance  = new ClassPage(page);
    await classPageInstance.clickClassMenu();
  });
  
  Then('Admin should land on the Manage class page', async ({page}) => {
    console.log("Admin should land on the Manage class page");
    const classPageInstance  = new ClassPage(page);
    let visible = await classPageInstance.verifyManageClassDisplay();
    expect(visible).toBeTruthy();
  });