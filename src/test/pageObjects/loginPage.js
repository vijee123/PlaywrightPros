const { expect } = require('@playwright/test');

export default class LoginPage{
    
  constructor(page) {
    if (!page) throw new Error("Page object is undefined!");
    this.page = page;
    this.userName = this.page.locator('//input[@id="username"]');
    this.password = this.page.locator('//input[@id="password"]');
    this.loginButton = this.page.locator('//button[@id="login"]');
    this.LMSDisplayHomePage = this.page.locator("//span[normalize-space()='LMS - Learning Management System']");
}

async launchApp(url) {
    await this.page.goto(url);
}


async validLogin(username, password) {
    await this.userName.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
    await this.LMSDisplayHomePage.waitFor({timeout: 30000});
 }
 
async verifyHomePage(){
    await this.LMSDisplayHomePage.waitFor({timeout: 3000});
    expect(await this.LMSDisplayHomePage.isVisible()).toBeTruthy();
  }
  
}


