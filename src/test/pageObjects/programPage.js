
const { expect } = require('@playwright/test');
import LoginPage from './loginPage';

export default class programPage {
    
    constructor(page) {
      this.page = page;
      this.userName = this.page.locator('//input[@id="username"]'); 
      this.password=this.page.locator('//input[@id="password"]');
      this.programBtn = this.page.locator('//button[@id="program"]');
      this.AddNewpgmBtn=this.page.locator('//*[text()="Add New Program"]');
      this.disableDelBtn=this.page.locator('//button[@class="p-button-danger p-button p-component p-button-icon-only"]');
      this.logoutBtn=this.page.locator('//span[normalize-space()="Logout"]');
      this.LMSheading=this.page.locator('//span[normalize-space()="LMS - Learning Management System"]');       
      this.header = page.locator('div.ng-star-inserted:has-text("ProgramBatchClassLogout")');  
      this.managePgm=page.locator('//div[normalize-space(text())="Manage Program" ]');
      this.pgmHeaderTxt=page.locator('//thead[@class="p-datatable-thead"]');
      this.disabledDeleteIcon=page.locator('//button[@class="p-button-danger p-button p-component p-button-icon-only"]');
	    this.searchBox=page.locator('//input[@id="filterGlobal" and @placeholder="Search..."]');
      this.pgmNamecheckBox=page.locator('//div[@class="p-checkbox-box"]');
      this.allEditIcons=page.locator('//table/tbody/tr//button[contains(@icon, "pi-pencil")]');
      this.allDelIcons=page.locator('//table/tbody/tr//button[contains(@icon, "pi-trash")]');
      this.allCheckBoxes=page.locator('//div[@class="p-checkbox-box p-component"]');
      this.allSortIcons=page.locator('//i[@class="p-sortable-column-icon pi pi-fw pi-sort-alt"]')
    }
       
      async clickProgramBtn() {    
        await this.programBtn.click();              

      }

      async programLogin(url, username, password){
              let loginPage = new LoginPage(this.page);
              await loginPage.launchApp(url);
              await loginPage.validLogin(username, password); 
              await this.programBtn.click(); 
      }    

      async currentURL() {
        return this.page.url();
      }

  async logoutBtnVisiblity()
    {
   await this.logoutBtn.waitFor({timeout: 30000});
   await expect(this.logoutBtn).toBeVisible();
  }
 
async getTitle()
{
   const title=this.LMSheading.textContent();
   return title;
}
async getheaderText(){
const headerText=this.header.textContent();
return headerText;
}
 
async AddnewPgmgetText()
{
  const addnewTxt=this.AddNewpgmBtn.textContent();
  return addnewTxt;
}


async  headerTextValidation() {
  if (await this.pgmHeaderTxt.isVisible()) { 
    const headerText = await this.pgmHeaderTxt.textContent(); 
    console.log(headerText);
    return headerText;
  } else {
    return "";
  }
}
async managePgmText()
{
  const text=this.managePgm.textContent(); 
  console.log(text);
  return text;
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



async batchAllRowOptions(option) { 
  switch (option) {
      case "Edit_Icon":
        return await elementVisibleAllRows(allEditIcons) ;				           

      case "Delete_Icon":
        return await elementVisibleAllRows(allDelIcons);           

      case "Check_Box":
        return await elementVisibleAllRows(allCheckBoxes);           

      default:
          return false;
  }
}


async elementVisibleAllRows(elementsList) {
  // Check visibility of each element
  for (const element of elementsList) {
      const isVisible = await element.isVisible();
      if (!isVisible) {
          console.log(`Element is not visible: ${await element.textContent()}`);
          return false;
      }
  }

  // Check if all elements are enabled
  for (const element of elementsList) {
      const isEnabled = await element.isEnabled(); // Use isVisible and not isEnabled directly
      if (!isEnabled) {
          console.log(`Element is not enabled: ${await element.textContent()}`);
          return false;
      }
  }

  return true; // All elements are visible and enabled
}




  

 




  }
