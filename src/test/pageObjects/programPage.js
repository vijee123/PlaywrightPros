
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

  }
