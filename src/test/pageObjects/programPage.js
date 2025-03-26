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
    this.pgmLabelName = this.page.locator('//label[text()="Name"]');
    this.prgdescriptionlabelName = this.page.locator('//label[text()="Description"]');
    this.prgmStatuslabelName = this.page.locator('//lable[text()="Status"]');
    this.pgmNameSortIcon = this.page.locator('//th[@ng-reflect-field="programName"]');
    this.pgmDescriptionSortIcon = this.page.locator('//th[@ng-reflect-field="programDescription"]');
    this.pgmNameslist = this.page.locator('//tr/td[2]');
    this.pgmDescriptionlist = this.page.locator('//tr/td[3]');

  }


  async clickProgramBtn() {
    await this.programBtn.click();
    await this.page.keyboard.press('Escape');
  }

  async programLogin(url, username, password) {
    let loginPage = new LoginPage(this.page);
    await loginPage.launchApp(url);
    await loginPage.validLogin(username, password);
    await this.programBtn.click();
  }

  async currentURL() {
    await this.page.keyboard.press('Escape');
    return this.page.url();
  }

  async logoutBtnVisiblity() {
    await this.page.keyboard.press('Escape');
    await this.logoutBtn.waitFor({ timeout: 30000 });
    await expect(this.logoutBtn).toBeVisible();
  }

  async getTitle() {
    await this.page.keyboard.press('Escape');
    const title = this.LMSheading.textContent();
    return title;
  }
  async getheaderText() {
    await this.page.keyboard.press('Escape');
    const headerText = this.header.textContent();
    return headerText;
  }

  async AddnewPgmgetText() {
    const addnewTxt = this.AddNewpgmBtn.textContent();
    return addnewTxt;
  }


  async headerTextValidation() {
    await this.page.keyboard.press('Escape');
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
    await this.page.keyboard.press('Escape');
    const isDisabled = await this.disabledDeleteIcon.evaluate(button => button.disabled);
    return isDisabled;
  }

  async validateHeaderCheckBoxUnchecked() {    
    await this.page.keyboard.press('Escape');
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
    await this.page.keyboard.press('Escape');
    let common = new commonTest(this.page);
    return await common.CommonEditDelCheckboxValidation(option);
  }

  async ProgramPageverifySortIconDisplayInHeaderFields() {
    await this.page.keyboard.press('Escape');
    let common = new commonTest(this.page);
    return await common.verifyHeaderFieldsSortIcons();
  }

  // Add New program functions


  async newProgramEnterDetails(scenario) {

    const rowData = testData.find(row => row.scenario === scenario);
    if (!rowData) {
      throw new Error(`No data found for scenario: ${scenario}`);
    }

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

    const rowData = testData.find(row => row.scenario === scenario);
    if (!rowData) {
      throw new Error(`No data found for scenario: ${scenario}`);
    }

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
        await this.page.waitForTimeout(2000);
        await this.searchBox.fill(rowData.ProgramName);
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(1000);
        const namelist = await this.pgmNameslist.textContent();
        console.log('Namelist:', namelist); // Debugging log

        if (namelist === rowData.ProgramName) {
          return true;
        } else {
          throw new Error('No programs found in the list.');
        }

      default:
        throw new Error(`Error message "${message}" not found!`);

    }
  }


  async mandatoryFieldRedmaekValidation(Fields) {
    await this.AddNewpgmBtn.click();
    let text;
    switch (Fields) {
      case "Program Name":
        text = await this.pgmLabelName.textContent();
        break;
      case "Program Description":
        text = await this.prgdescriptionlabelName.textContent();
        break;
      case "Program Status":
        text = await this.prgmStatuslabelName.textContent();
        break;
      default:
        throw new Error(`Error field "${Fields}" not found!`);
    }
    if (!text.includes("*")) {
      throw new Error(`The field "${fieldName}" is not marked as mandatory.`);
    }

    return true;
  }


  async popUpTextFieldValidation(textField) {
    await this.AddNewpgmBtn.click();
    const prgName = 'programName';
    const prgmDescrip = 'pgm Description';
    textField = textField.trim();

    switch (textField) {
      case "Program Name":
        await this.programName.fill(prgName);
        await this.prgDescription.click();
        const nameActText = await this.programName.inputValue();
        return nameActText.trim() === prgName;

      case "Program Description":
        await this.prgDescription.fill(prgmDescrip);
        await this.programName.click();
        const descrpActText = await this.prgDescription.inputValue();
        return descrpActText.trim() === prgmDescrip;

      case "Program Status":
        await this.pgmActiveBtn.click();
        const ariaChecked = await this.pgmActiveBtn.getAttribute('aria-checked');
        if (ariaChecked === 'true');
        return true;

      default:
        throw new Error(`Error: field "${textField}" not found!`);
    }
  }



  async ProgramSorting(programHeader) {
    await this.page.keyboard.press('Escape');
    let common = new commonTest(this.page);
    let isSorted;
    switch (programHeader) {
      case "programName_AscendingOrder":
        isSorted = await common.verifyingColumnSorting(this.page, 'Program Name', 'Ascending');
        return isSorted;
      case "programName_DecendingOrder":
        isSorted = await common.verifyingColumnSorting(this.page, 'Program Name', 'Descending');
        return isSorted;
      case "programDescription_AscendingOrder":
        isSorted = await common.verifyingColumnSorting(this.page, 'Program Description', 'Ascending');
        return isSorted;

      case "ProgramDescription_DecendingOrder":
        isSorted = await common.verifyingColumnSorting(this.page, 'Program Description', 'Descending');
        return isSorted;

      default:
        throw new Error(`Error: field "${programHeader}" not found!`);
    }

  }
  async programPageverifyPaginationTextAndIcons(items) {
    await this.page.keyboard.press('Escape');
    let common = new commonTest(this.page);
    return await common.verifyPaginationTextAndIcons(items);
  }


  async programSearch(scenario) {
    await this.page.keyboard.press('Escape');

    const rowData = testData.find(row => row.scenario === scenario);

    if (!rowData) {
      throw new Error(`No data found for scenario: ${scenario}`);
    }

    switch (scenario) {
      case 'searchBy_ValidProgramName':
        await this.searchBox.fill(rowData.ProgramName);
        await this.page.keyboard.press('Enter');
        const namelist = await this.pgmNameslist.textContent();
        return expect(namelist).toContain(rowData.ProgramName);

      case 'searchBy_ProgramDescription':
        await this.searchBox.fill(rowData.programDescription);
        await this.page.keyboard.press('Enter');
        const pgmDeslist = await this.pgmDescriptionlist.textContent();
        return expect(pgmDeslist).toContain(rowData.programDescription);

      case 'searchBy_InValidProgramName':
        await this.searchBox.fill(rowData.ProgramName);
        await this.page.keyboard.press('Enter');
        const lent = await this.pgmNameslist.count();
        return expect(lent).toBe(0);

      case 'searchBy_PartialProgramName':
        await this.searchBox.fill(rowData.ProgramName);
        await this.page.keyboard.press('Enter');
        const name = await this.pgmNameslist.textContent();
        return expect(name).toContain(rowData.ProgramName);

      default:
        throw new Error(`Error: field "${programHeader}" not found!`);
    }
   
  }



  async click_EditProgram(){

    await this.page.keyboard.press('Escape');
    
    

  }



  async editNewProgram(scenario)
  {
    const rowData = testData.find(row => row.scenario === scenario);

    if (!rowData) {
      throw new Error(`No data found for scenario: ${scenario}`);
    }
   
   




  }

  //------------------------------------DELETE FUCNTION METHODS---------------------------------

  async getTopRowData(module) {
    let common = new commonTest(this.page);
    return await common.getTopRowData(module);
  }

  async clickTopRowDeleteIcon() {
    await this.page.keyboard.press('Escape');
    let common = new commonTest(this.page);
    await common.clickTopRowDeleteIcon();
  }

  async deleteConfirmPopupVisibility() {
    let common = new commonTest(this.page);
    return await common.deleteConfirmPopup.isVisible();
  }

  async clickYesDeleteOnConfirm() {
    let common = new commonTest(this.page);
    await common.YesDeleteButtonConfirm.click();
  }

  async clickNoDeleteOnConfirm() {
    let common = new commonTest(this.page);
    await common.NoDeleteButtonConfirm.click();
  }

  async singleDeleteMessageVisible(module) {
    let common = new commonTest(this.page);
    return await common.singleDeleteMessageVisible(module);
  }

  async multiDeleteMessageVisible(module) {
    let common = new commonTest(this.page);
    return await common.multiDeleteMessageVisible(module);
  }

  async clickCloseIconDeleteConfirm() {
    let common = new commonTest(this.page);
    await common.deleteConfirmCloseIcon.click();
  }

  async clickTopRowCheckBox() {
    await this.page.keyboard.press('Escape');
    let common = new commonTest(this.page);
    await common.topRowCheckBox.click();
  }

  async clickMultipleCheckBoxes() {
    await this.page.keyboard.press('Escape');
    let common = new commonTest(this.page);
    await common.clickTopTwoCheckBox();
  }

  async checkMultiDeleteIconStatus() {
    let common = new commonTest(this.page);
    return await common.multiDeleteIcon.isEnabled();
  }

  async clickMultiDeleteIcon() {
    let common = new commonTest(this.page);
    await common.multiDeleteIcon.click();
  }

  async getTopTwoRowData(module) {
    let common = new commonTest(this.page);
    return await common.getTopTwoRowData(module);
  }

  async verifyManageProgramDisplay(){
    return await this.managePgm.isVisible();
  }

  // --------------------------------DELETE OVER------------------------------------------





}

