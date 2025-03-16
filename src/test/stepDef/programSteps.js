import { expect } from '@playwright/test';
import { test, Given, Then, When } from '../../../fixture/customFixtures.js';
import programPage from '../pageObjects/programPage.js';

const ProgramPage  = require('../pageObjects/programPage.js');

  When('Admin clicks the program menu from the header', async ({programPageFixture}) => {  
     await programPageFixture.clickProgramBtn();
  });
  
  Then('Admin should land on the program page', async ({programPageFixture}) => {    
    await expect(programPageFixture.currentURL()).resolves.toContain("program");
  });


//Verify Logout displayed in menu bar
  Then('Admin should see Logout in menu bar', async ({programPageFixture}) => {        
    programPageFixture.logoutBtnVisiblity();
  });
  

//Verify heading in menu bar
  Then('Admin should see the heading {string}', async ({programPageFixture},heading) => {
    const title = await programPageFixture.getTitle();
    expect(title).toContain(heading);

  });
  
  //Verify other page's name displayed in menu bar

  Then('Admin should see the page names as in order {string}', async ({programPageFixture}, pageNames) => {
    const Text = await programPageFixture.getheaderText();
    expect(Text).toBe(pageNames.trim());
    
  });

  //Verify sub menu displayed in program menu bar

  Then('Admin should see sub menu in menu bar as {string}', async ({programPageFixture}, addNewpgm) => {
   const addnewtxt=await programPageFixture.AddnewPgmgetText();
   expect(addnewtxt).toContain(addNewpgm);
  });
  
// Admin should see the Title as "Manage Program"

  Then('Admin should see the title {string}', async ({programPageFixture}, headers) => {
    const titleText=await programPageFixture.managePgmText();
    expect(titleText).toContain(headers);
  });


  // Admin should able to see Program name, description, and status for each program

  Then('Admin should able to see Program name, description, and status for each program', async ({programPageFixture}) => {
    const headerTexts=await programPageFixture.headerTextValidation();
   const ExpTex="program name program description program status  edit / delete";
    expect(headerTexts.trim().toLowerCase()).toContain(ExpTex.trim().toLowerCase());
  });
  
 //Admin should see a Delete button in left top is disabled

  Then('Admin should see a Delete button in left top is disabled', async ({}) => {
  
  });

  //Verify the Search button 

  Then('Admin should see Search bar with text as Search', async ({}) => {
    
  });

  // Verify column header name of data table

  Then('Admin should see data table with column header on the Manage Program Page as  Program Name, Program Description, Program Status, Edit\\/Delete', async ({}) => {
  
  });

  // Verify checkbox default state beside Program Name column header

  Then('Admin should see checkbox default state as unchecked beside Program Name column header', async ({}) => {
 
  });

  // Verify checkboxes default state beside each Program names in the data table 

  Then('Admin should see check box default state as unchecked on the left side in all rows against program name', async ({}) => {
   
  });

  //Verify Sort icon in manage program

  Then('Admin should see the sort arrow icon beside to each column header except Edit and Delete', async ({}) => {
   
  });
  
  //Verify edit and delete icon in manage program

  Then('Admin should see the {string} in each rows', async ({}, arg) => {
   
  });