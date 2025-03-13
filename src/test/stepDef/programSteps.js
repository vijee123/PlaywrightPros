import { expect } from '@playwright/test';
import { test, Given, Then, When } from '../../../fixture/customFixtures.js';

const ProgramPage  = require('../pageObjects/programPage.js');

  When('Admin clicks the program menu from the header', async ({programPageFixture}) => {
    console.log("into 1st program page : WHEN");
     await programPageFixture.clickProgramBtn();
  });
  
  Then('Admin should land on the program page', async ({programPageFixture}) => {
    console.log("into 1st program page : THEN");
    await expect(programPageFixture).toHaveURL("https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/program");
  });
  