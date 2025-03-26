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
   // const headerTexts=await programPageFixture.headerTextValidation();
  //   const ExpTex="program name program description program status  edit / delete";
   // expect(headerTexts.trim().toLowerCase()).toContain(ExpTex.trim().toLowerCase());
  });
  
 //Admin should see a Delete button in left top is disabled

  Then('Admin should see a Delete button in left top is disabled', async ({programPageFixture}) => {
    const isDisabled = await programPageFixture.isDeleteButtonDisabled();    
    expect(isDisabled).toBe(true); 
  });

  //Verify the Search button 

  Then('Admin should see Search bar with text as Search', async ({programPageFixture}) => {
    const placeholderText = await programPageFixture.isSearchBarDisplayed();
    expect(placeholderText).toBe("Search...");
   
  });


  Then('Admin should see data table with column header on the Manage Program Page as  {string}', async ({programPageFixture}, ExpTex) => {
    const headerTexts=await programPageFixture.headerTextValidation();   
    expect(headerTexts.trim().toLowerCase()).toContain(ExpTex.trim().toLowerCase());
  });

 

  // Verify checkbox default state beside Program Name column header

  Then('Admin should see checkbox default state as unchecked beside Program Name column header', async ({programPageFixture}) => {
    const isUnchecked = await programPageFixture.validateHeaderCheckBoxUnchecked();
    expect(isUnchecked).toBe(true);
  });
  

  //Verify Sort icon in manage program

  Then('Admin should see the sort arrow icon beside to each column header except Edit and Delete', async ({programPageFixture}) => {
    const sortIconResults = await programPageFixture.ProgramPageverifySortIconDisplayInHeaderFields();    
    const allHaveIcons = sortIconResults.every(item => item.hasSortIcon);
    await expect(allHaveIcons).toBeTruthy();

  });
  
  //Verify edit and delete icon in manage program

  Then('Admin should see the {string} in each rows', async ({programPageFixture}, option) => {
    let results = await programPageFixture.programpageIconsValidations(option);     
    expect(results.every(result => result === 'true')).toBe(true);
  });


  // Add New Program


    //Verify add New Program pop up window
  
    Then('Admin should see pop up window for program details after clicking the Add New Program button', async ({programPageFixture}) => {
      const PopUpisvisible = await programPageFixture.addNewPopUpWindow();
      expect(PopUpisvisible).toBe(true);
    });

    //Verify add New Program pop up window Title  

    Then('Admin should see the pop up window title as {string} after clicking the Add New Program button', async ({programPageFixture}, popUpTile) => {
     
      const popUptext=await programPageFixture.popUpheadingValidation();   
      expect(popUptext).toContain(popUpTile);
    });

  

  //Verify Add New Program functionalities

  
  Then('Admin Adds new program and click on save button for the scenario {string} in program module', async ({programPageFixture}, Scenario) => {
   
    await programPageFixture.AddnewProgramValidation(Scenario);
  });
  
  Then('Admin gets message for the scenario {string} for program Module', async ({programPageFixture}, scenario) => {
    console.log("Admin should see the valid message displayed...");
    const isVisible = await programPageFixture.validateCreateProgramMessage(scenario);
    //await expect(isVisible).toBeTruthy();
    await expect(isVisible).toBe(true);
  });


// Verify mandatory fields with red asterisk mark 
 
Then('Admin should see the  mandatory fields {string} with asterisk mark in the pop Up window', async ({programPageFixture}, fields) => {
  const madatoryfieldsText = await programPageFixture.mandatoryFieldRedmaekValidation(fields);    
  expect(madatoryfieldsText).toBe(true);
});
  

// Validate the pop up window field Validation

Then('Admin see the entered text in the fields {string} in the add new program pop up window', async ({programPageFixture}, testField) => {
  const TextFieldValidation = await programPageFixture.popUpTextFieldValidation(testField);
  expect(TextFieldValidation).toBe(true);
});


// Program Sorting 

Then('Admin sees the program name or description sorted by ascennding or decending order after clicking the sort icon {string}', async ({programPageFixture}, headerName) => {
  const result= await programPageFixture.ProgramSorting(headerName);
  expect(result).toBe(true);
});


// Program Pagination

Then('Admin should see the below {string} pagination controls under the data table in the programPage', async ({programPageFixture}, items) => {
  await programPageFixture.programPageverifyPaginationTextAndIcons(items); 

});

// Program Search

When('Admin searches by valid program name,program description {string} in the Program module', async ({programPageFixture}, programSearch) => {
  await programPageFixture.programSearch(programSearch);
});


// Edit Program

When('Admin clicks on Edit option for particular program', async ({programPageFixture}) => {
  

});

Then('Admin lands on Program details form', async ({}) => {
 

});

//---------------------------Program Single And Multiple Delete Steps-----------------------------------
When('Admin clicks the delete icon in the program page', async ({programPageFixture}) => {
  console.log('Admin clicks delete icon of a program');
  const topRowProgram1 = await programPageFixture.getTopRowData("program");
  console.log("Top Row Program before Delete is: ", topRowProgram1);
  await programPageFixture.clickTopRowDeleteIcon();
  programPageFixture.topRowProgramBeforeDelete = topRowProgram1;
});

Then('Admin should see a alert open with heading Confirm along with YES and NO button for deletion in program', async ({programPageFixture}) => {
  console.log("verify delete confirm pops-up....")
  const isVisible = await programPageFixture.deleteConfirmPopupVisibility();
  await expect(isVisible).toBe(true);
});


When('Admin clicks No option to delete on confirm page of program', async ({programPageFixture}) => {
  console.log("Admin clicks No option on the confirm pop-up...");
  await programPageFixture.clickNoDeleteOnConfirm();
});

Then('Admin can see the deletion alert disappears without deleting the program', async ({programPageFixture}) => {
  console.log("Verify whether the confirm pop-up disappears without deleting...")
  const topRowProgram2 = await programPageFixture.getTopRowData("program");
  console.log("Top Row Program after Canceling Delete is: ", topRowProgram2);
  await expect(topRowProgram2).toEqual(programPageFixture.topRowProgramBeforeDelete);
  const isVisible = await programPageFixture.verifyManageProgramDisplay();
  await expect(isVisible).toBe(true);
});

When('Admin clicks Yes option to delete on confirm page of program', async ({programPageFixture}) => {
  console.log("Admin clicks YES option on the confirm pop-up...");
  await programPageFixture.clickYesDeleteOnConfirm();
});

Then('Admin gets a message Successful program Deleted alert', async ({programPageFixture}) => {
  console.log("Verify whether the Admin gets a message Successful Program Deleted alert");
  const isVisible = await programPageFixture.singleDeleteMessageVisible("program");
  expect(isVisible).toBe(true);
});

Then('Do not see that program in the data table', async ({programPageFixture}) => {
  console.log("Verify that the selected Program is deleted...")
  const topRowProgram2 = await programPageFixture.getTopRowData("program");
  console.log("Top Row Program name after Delete is: ", topRowProgram2);
  await expect(topRowProgram2).not.toBe(programPageFixture.topRowProgramBeforeDelete);
  const isVisible = await programPageFixture.verifyManageProgramDisplay();
  await expect(isVisible).toBe(true);
});

When('Admin clicks CLose X Icon on confirm page of program', async ({programPageFixture}) => {
  console.log('Admin clicks the CLose Icon on confirm delete window...')
  await programPageFixture.clickCloseIconDeleteConfirm();
});

When('Admin clicks any checkbox in the data table of program', async ({programPageFixture}) => {
  console.log("Admin clicks any check box...");
  await programPageFixture.clickTopRowCheckBox();
  const topRowProgram1 = await programPageFixture.getTopRowData("program");
  console.log("Program checked to Delete is: ", topRowProgram1);
  await programPageFixture.clickTopRowDeleteIcon();
  programPageFixture.topRowProgramBeforeDelete = topRowProgram1;
})

Then('Admin should see common delete option enabled under header Manage program', async ({programPageFixture}) => {
  console.log("Verify whether the common delete option enabled under header Manage Program..");
  const isEnabled = await programPageFixture.checkMultiDeleteIconStatus();
  console.log("Is multi-delete icon enabled?:", isEnabled);
  expect(isEnabled).toBe(true);
});

Given('Admin clicks single checkbox in the data table and clicks Multi Delete icon in program page', async ({programPageFixture}) => {
  console.log("Admin clicks any check box...");
  await programPageFixture.clickTopRowCheckBox();
  const topRowProgram1 = await programPageFixture.getTopRowData("program");
  console.log("Program checked to Delete is: ", topRowProgram1);
  programPageFixture.topRowProgramBeforeDelete = topRowProgram1;
  await programPageFixture.clickMultiDeleteIcon();
});

Then('Admin gets a message Successful programs Deleted alert', async ({programPageFixture}) => {
  console.log("Verify whether the Admin gets a Programs Deleted alert....");
  const isVisible = await programPageFixture.multiDeleteMessageVisible("program");
  console.log("is Programs Deleted Alert Visible: " + isVisible);
  expect(isVisible).toBe(true);
});

Given('Admin clicks multiple checkbox in the data table and clicks Multi Delete icon in program page', async ({programPageFixture}) => {
  console.log("Admin clicks on more than one check box...");
  await programPageFixture.clickMultipleCheckBoxes();
  const topTwoRowPrograms1 = await programPageFixture.getTopTwoRowData("program");
  console.log("Programs checked for Multiple Delete are: ", topTwoRowPrograms1);
  programPageFixture.topTwoRowProgramsBeforeDelete = topTwoRowPrograms1;
  await programPageFixture.clickMultiDeleteIcon();
});

Then('Admin can see the deletion alert disappears without deleting the selected programs', async ({programPageFixture}) => {
  console.log("Verify whether the confirm pop-up disappears without deleting...")
  const topTwoRowPrograms2 = await programPageFixture.getTopTwoRowData("program");
  console.log("Top Row Program names after Canceling Delete are: ", topTwoRowPrograms2);
  await expect(topTwoRowPrograms2).toEqual(programPageFixture.topTwoRowProgramsBeforeDelete);
  const isVisible = await programPageFixture.verifyManageProgramDisplay();
  await expect(isVisible).toBe(true);
});

Then('Do not see that programs in the data table', async ({}) => {
  // Step: And Do not see that programs in the data table
  // From: src\test\features\02program.feature:195:5
});

