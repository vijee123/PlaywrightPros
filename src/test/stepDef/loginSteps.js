// import { createBdd } from "playwright-bdd";
// const{Given,When,Then} =createBdd();
// //const data = JSON.parse(JSON.stringify(require( '../utils/config.json')));
// const LoginPage  = require('../pageObjects/loginPage.js');

// // Given('Admin is on login Page', async ({page}) => {
// //     // console.log("Admin is on login Page");
// //     // const loginPageInstance  = new LoginPage(page);
// //     // await loginPageInstance.launchApp();    
// //  });
  
//   When('Admin enter valid data in all field and clicks login button', async ({}) => {
//     console.log("Admin enter valid data in all field and clicks login");
//     await this.loginPageInstance.validLogin("playwrightuser@gmail.com","Playwright@1234"); 
//  });
  
//   Then('Admin should land on home page', async ({}) => {
//     console.log("Admin should land on home page");
//      await expect(this.loginPageInstance.LMSDisplayHomePage).toBeVisible();
//   });