
import { createBdd } from "playwright-bdd";
const{Given,When,Then} =createBdd();

const ProgramPage  = require('../pageObjects/programPage.js');

Given('Admin is in login Page.', async ({page}) => {
    const programPageInstance  = new ProgramPage(page);
    await programPageInstance.openURL();
    await programPageInstance.enterUserName("Playwright@gmail.com");     
    await programPageInstance.enterPassword("March@2025");

  });
  
  When('Admin enter valid data with {string} and {string} in all fields and clicks login button', async ({}, arg, arg1) => {
   
  });
  
  Then('Admin should land on Home page', async ({}) => {
    
  });
  
  When('Admin clicks the program menu from the header', async ({}) => {
   
  });
  
  Then('Admin should land on the program page', async ({}) => {
   
  });
  
  Given('Admin is on home page after Login', async ({}) => {
   
  });
  
  When('Admin clicks {string} on the navigation bar', async ({}, arg) => {
  
  });
  
  Then('Admin should see Logout in menu bar', async ({}) => {
    
  });