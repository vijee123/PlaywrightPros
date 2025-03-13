
const { expect } = require('@playwright/test');
import LoginPage from './loginPage';

export default class programPage {
    
    constructor(page) {
      this.page = page;
      this.userName = this.page.locator('//input[@id="username"]'); 
      this.password=this.page.locator('//input[@id="password"]');
      this.programBtn = this.page.locator('//button[@id="program"]');
    }
  
     
      async clickProgramBtn() {    
        await this.programBtn.click();
        await page.mouse.click(100, 200);

      }

      async programLogin(url, username, password){
              let loginPage = new LoginPage(this.page);
              await loginPage.launchApp(url);
              await loginPage.validLogin(username, password); 
      }    


  }
