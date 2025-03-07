import { createBdd } from "playwright-bdd";
const{Given,When,Then} =createBdd();

const LoginPage  = require('../pageObjects/loginPage.js');

Given('Admin is on login Page', async ({page}) => {
    console.log("Admin is on login Page");
    const loginPageInstance  = new LoginPage(page);
    await loginPageInstance.launchApp();    
 });
  
  When('Admin enter valid data in all field and clicks login button', async ({page}) => {
    console.log("Admin enter valid data in all field and clicks login");
    const loginPageInstance  = new LoginPage(page);
    await loginPageInstance.validLogin("playwrightuser@gmail.com","Playwright@1234"); 
 });
  
  Then('Admin should land on home page', async ({page}) => {
    console.log("Admin should land on home page");
    const loginPageInstance  = new LoginPage(page);
    await loginPageInstance.verifyHomePage();
  });