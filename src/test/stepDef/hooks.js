// import { Before, After, AfterStep, Status } from '@cucumber/cucumber';
// import { chromium } from '@playwright/test';
// //const data = JSON.parse(JSON.stringify(require( '../utils/config.json')));
// import LoginPage from '../pageObjects/loginPage.js';



// Before(async () =>  {
//     // This hook will be executed before all scenarios
//     console.log('Executing BeforeEach Hook....');
//     const browser = await chromium.launch({headless: false});
//     const context = await browser.newContext();     
//     this.page = await context.newPage();
//     console.log('Browser Launched');
//     loginPageInstance  = new LoginPage(this.page);
//     await this.loginPageInstance.launchApp();
//     console.log('Application Launched');   
// })


// AfterStep(async function (result){
//     // This hook will be executed after each step
//     console.log('Executing After Step Hook...');
//     if (result.status === Status.FAILED) {
//         const screenshot =   await this.page.screenshot({ path: `screenshot-${Date.now()}.png` });
//         this.attach(screenshot, 'image/png');
//         console.log("Screenshot attached");
//     }   
// })  

// After(async function () {
//     // This hook will be executed after all scenarios
//     console.log('Executing AfterEach Hook....');      
//     await this.page.close();
//     console.log('Page closed'); 

// })


// // Before({tags: "@foo"}, function () {
// //     // This hook will be executed before scenarios tagged with @foo
// //   });
  
// //   Before({tags: "@foo and @bar"}, function () {
// //     // This hook will be executed before scenarios tagged with @foo and @bar
// //   });
  
// //   Before({tags: "@foo or @bar"}, function () {
// //     // This hook will be executed before scenarios tagged with @foo or @bar
// //   });