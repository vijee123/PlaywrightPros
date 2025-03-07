const { expect } = require('@playwright/test');

export class loginPage{
    
   constructor(page) {
    this.page = page;
    this.userName = this.page.locator('//input[@id="username"]'); 
    this.password=this.page.locator('//input[@id="password"]');
    this.loginButton = this.page.locator('//button[@id="login"]');
    this.LMSDisplayHomePage = this.page.locator("//span[normalize-space()='LMS - Learning Management System']");
    this.URL = "https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/login";
  }

  async launchApp(url){
    await this.page.goto(this.URL);
  }

  async validLogin(username,password){
     await this.userName.fill(username);
     await this.password.fill(password);
     await this.loginButton.click();
 }
 
  async verifyHomePage(){
    await this.LMSDisplayHomePage.waitFor({timeout: 3000});
    expect(await this.LMSDisplayHomePage.isVisible()).toBeTruthy();
  }
  
}

module.exports = loginPage;

