// This file contains the custom fixtures that are used in the tests.
// The custom fixtures are used to create reusable code that can be shared across multiple tests.
import { test as baseTest, createBdd } from 'playwright-bdd';

import LoginPage from '../src/test/pageObjects/loginPage.js';
import ClassPage from '../src/test/pageObjects/classPage.js';
import ProgramPage from '../src/test/pageObjects/programPage.js';
import BatchPage from '../src/test/pageObjects/batchPage.js';
//import LogoutPage from '../src/test/pageObjects/logoutPage.js';
import { CONFIG } from '../config/env.js';


const test= baseTest.extend({  

    loginPageFixture:async({page},use)=>{
      const loginPage=new LoginPage(page); 
      console.log("Inside fixture B4 launching app")
      await loginPage.launchApp(CONFIG.BASE_URL);
      console.log("Inside fixture AFTER launching app")
      await use(loginPage);
       },

    programPageFixture:async({page},use)=>{
      const programPage = new ProgramPage(page); 
      await programPage.programLogin(CONFIG.BASE_URL, CONFIG.USERNAME, CONFIG.PASSWORD);
      await use(programPage);
        },

    batchPageFixture:async({page},use)=>{
      const batchPage = new BatchPage(page); 
      await batchPage.batchLogin(CONFIG.BASE_URL, CONFIG.USERNAME, CONFIG.PASSWORD);
      await use(batchPage);
        },

    classPageFixture:async({page},use)=>{
      const classPage = new ClassPage(page);
      await classPage.classLogin(CONFIG.BASE_URL, CONFIG.USERNAME, CONFIG.PASSWORD);
      await use(classPage);
        },

    browser: async ({ browser }, use) => {
      await use(browser);
    },

    /*
    logoutPageFixture:async({page},use)=>{
      const logoutPage=new LogoutPage(page); 
      //await logoutPage.logoutLogin(CONFIG.BASE_URL, CONFIG.USERNAME, CONFIG.PASSWORD);
      await use(logoutPage);
      },
    */

  });

export { test };
export const { Given, When, Then } = createBdd(test);

  
     

