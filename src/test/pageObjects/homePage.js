import LoginPage from './loginPage.js';

export default class HomePage{

    constructor(page) {
        this.page = page;
        this.LMSDisplayHomePage = this.page.locator("//span[normalize-space()='LMS - Learning Management System']");
        this.logoutBtn = this.page.locator("//button[@id='logout']");
    }

    async isLMSTextVisible(){
        return await this.LMSDisplayHomePage.isVisible();
    }

    async clickLogoutOption(){
        await this.logoutBtn.click();
        return new LoginPage(this.page);
    }
}     