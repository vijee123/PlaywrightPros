
const { expect } = require('@playwright/test');
import LoginPage from './loginPage';
import commonTest from '../utils/commonMethods';
const path = require('path');
const { readCSV } = require('../utils/csvReader');

const csvPath = path.resolve(__dirname, '../../../test-data/programTestData.csv');
const testData = readCSV(csvPath);

export default class programPage {

  constructor(page) {
    this.page = page;
    this.userName = this.page.locator('//input[@id="username"]');
    this.password = this.page.locator('//input[@id="password"]');
    this.programBtn = this.page.locator('//button[@id="program"]');
    this.AddNewpgmBtn = this.page.locator('//*[text()="Add New Program"]');
    this.disableDelBtn = this.page.locator('//button[@class="p-button-danger p-button p-component p-button-icon-only"]');
    this.logoutBtn = this.page.locator('//span[normalize-space()="Logout"]');
    this.LMSheading = this.page.locator('//span[normalize-space()="LMS - Learning Management System"]');
    this.header = this.page.locator('div.ng-star-inserted:has-text("ProgramBatchClassLogout")');
    this.managePgm = this.page.locator('//div[normalize-space(text())="Manage Program" ]');
    this.pgmHeaderTxt = this.page.locator('//thead[@class="p-datatable-thead"]');
    this.disabledDeleteIcon = this.page.locator('//button[@class="p-button-danger p-button p-component p-button-icon-only"]');
    this.searchBox = this.page.locator('//input[@id="filterGlobal" and @placeholder="Search..."]');
    this.pgmNamecheckBox = this.page.locator('//div[@class="p-checkbox-box"]');
    this.allSortIcons = this.page.locator('//i[@class="p-sortable-column-icon pi pi-fw pi-sort-alt"]')
    this.allDelIcons = this.page.locator('//table/tbody/tr//button[contains(@icon, "pi-trash")]');
    this.saveBtn = this.page.locator('//button[@id="saveProgram"]');
    this.cancelBtn = this.page.locator('//span[normalize-space()="Cancel"]');
    this.programName = this.page.locator('//input[@id="programName"]');
    this.prgDescription = this.page.locator('//input[@id="programDescription"]');
    this.pgmStatus = this.page.locator('//label[text()="Status"]');
    this.pgmDetailsPopUpheading = this.page.locator('//span[text()="Program Details"]');
    this.pgmPopupWindow = this.page.locator('//div[@role="dialog"]');
    this.pgmSuccessMesg = this.page.locator('//div[contains(@class, "p-toast-detail")]');
    this.pgmActiveBtn = this.page.locator('//p-radiobutton[@ng-reflect-input-id="Active"]');
    this.prmInactiveBtn = this.page.locator('//p-radiobutton[@ng-reflect-input-id="Inactive"]');
    this.pgmSuccessMessgae = this.page.locator('//div[contains(@class, "p-toast-detail")]');
    this.pgmNameErrorMesg = this.page.locator('//*[text()="Program name is required."]');
    this.pgmdescriptionErrormesg = this.page.locator('//*[text()="Description is required."]');
    this.pgmStatusErrMesg = this.page.locator('//*[text()="Status is required."]');
    this.popUpheading = this.page.locator('//span[text()="Program Details"]');
    this.popUpCloseBtn = this.page.locator('//span[contains(@class, "p-dialog-header-close-icon")]');
  }


  async clickProgramBtn() {
    await this.programBtn.click();

  }

  async programLogin(url, username, password) {
    let loginPage = new LoginPage(this.page);
    await loginPage.launchApp(url);
    await loginPage.validLogin(username, password);
    await this.programBtn.click();
  }

  async currentURL() {
    return this.page.url();
  }

  async logoutBtnVisiblity() {
    await this.logoutBtn.waitFor({ timeout: 30000 });
    await expect(this.logoutBtn).toBeVisible();
  }

  async getTitle() {
    const title = this.LMSheading.textContent();
    return title;
  }
  async getheaderText() {
    const headerText = this.header.textContent();
    return headerText;
  }

  async AddnewPgmgetText() {
    const addnewTxt = this.AddNewpgmBtn.textContent();
    return addnewTxt;
  }


  async headerTextValidation() {
    if (await this.pgmHeaderTxt.isVisible()) {
      const headerText = await this.pgmHeaderTxt.textContent();
      console.log(headerText);
      return headerText;
    } else {
      return "";
    }
  }
  async managePgmText() {
    const text = this.managePgm.textContent();
    console.log(text);
    return text;
  }

  async popUpheadingValidation() {
    await this.AddNewpgmBtn.click();
    const popupheadingtext = this.popUpheading.textContent();
    return popupheadingtext;
  }

  async isSearchBarDisplayed() {
    await this.page.keyboard.press('Escape');
    const placeholderText = await this.searchBox.getAttribute('placeholder');
    return placeholderText;
  }


  async isDeleteButtonDisabled() {
    const isDisabled = await this.disabledDeleteIcon.evaluate(button => button.disabled);
    return isDisabled;
  }

  async validateHeaderCheckBoxUnchecked() {
    try {
      const isChecked = await this.pgmNamecheckBox.getAttribute('aria-checked') === 'true';
      // Return true if the checkbox is unchecked
      return !isChecked;
    } catch (error) {

      return false;
    }
  }


  async addNewPopUpWindow() {
    await this.AddNewpgmBtn.click();
    try {
      if (await this.programName.isVisible()) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error checking visibility:", error);
      return false;
    }
  }

  async programpageIconsValidations(option) {
    let common = new commonTest(this.page);
    return await common.CommonEditDelCheckboxValidation(option);
  }

  async ProgramPageverifySortIconDisplayInHeaderFields() {
    let common = new commonTest(this.page);
    return await common.verifyHeaderFieldsSortIcons();
  }

  // Add New program functions


  async newProgramEnterDetails(scenario) {
    console.log(scenario);
    const rowData = testData.find(row => row.scenario === scenario);
    if (!rowData) {
      throw new Error(`No data found for scenario: ${scenario}`);
    }
    console.log(rowData);
    await this.programName.fill(rowData.ProgramName);
    await this.prgDescription.fill(rowData.programDescription);
    if (rowData.Status == 'Active') {
      await this.pgmActiveBtn.click();
    }
  }



  async AddnewProgramValidation(scenario) {
    await this.AddNewpgmBtn.click();
    switch (scenario) {
      case "cancelwithValidData":
        await this.newProgramEnterDetails(scenario);
        await this.cancelBtn.click();
        break;
      case "closewithValidData":
        await this.newProgramEnterDetails(scenario);
        await this.popUpCloseBtn.click();
        break;
      case "withoutMandatoryfields":
        await this.newProgramEnterDetails(scenario);
        await this.saveBtn.click();
        break;
      case "onlyMandatoryfields":
        await this.newProgramEnterDetails(scenario);
        await this.saveBtn.click();
        break;
     case "verifyAddedProgram":
        await this.newProgramEnterDetails(scenario);
        await this.saveBtn.click();
        break;
      default:
        throw new Error(`Error message "${scenario}" not found!`);

    }

  }



  async validateCreateProgramMessage(scenario) {
    console.log('scenario::' + scenario);
    if (this.page.isClosed()) {
      console.error("Page is already closed. Cannot verify message.");
      return false;
    }
    switch (scenario) {

      case "onlyMandatoryfields":
        console.log("Checking Valid Program Created Message..");

        return await this.pgmSuccessMessgae.isVisible();

      case "withoutMandatoryfields":
        console.log("Checking Status Error Message..");
        return await this.pgmNameErrorMesg.isVisible() && this.pgmdescriptionErrormesg.isVisible() && this.pgmStatusErrMesg.isVisible();

      case "cancelwithValidData":
        if (await this.pgmPopupWindow.isVisible())
          return false;
        else
          return true;

      case "closewithValidData":
        if (await this.pgmPopupWindow.isVisible())
          return false;
        else
          return true;
    case "verifyAddedProgram":
          console.log('into verify added pgm')
          return true;
      default:
        throw new Error(`Error message "${message}" not found!`);

    }
  }


}





