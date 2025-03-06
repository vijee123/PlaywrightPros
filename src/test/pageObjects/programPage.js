
const { expect } = require('@playwright/test');

export class programPage {
    
    constructor(page) {
      this.page = page;
      this.userName = this.page.locator('//input[@id="username"]'); 
      this.password=this.page.locator('//input[@id="password"]');
    }
  
    async openURL(){
    await this.page.goto("https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/login");
    }

    async enterUserName(username) {
      await this.userName.fill(username);
    }

    async enterPassword(password) {
        await this.password.fill(password);
      }


  }
  module.exports = programPage;