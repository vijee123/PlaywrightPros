import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

Given('I am on the home page', async ({}) => {
    console.log(`inside second step def -- GIVEN`)
  });
  
  When('I click on the link {string}', async ({}, arg) => {
    console.log(`inside second step def -- When`)

  });
  
  Then('I see in the title {string}', async ({}, arg) => {
     console.log(`inside second step def -- Then`)

  });