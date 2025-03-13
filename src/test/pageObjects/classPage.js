import {expect} from "@playwright/test";

import LoginPage from './loginPage';

export default class classPage{

    constructor(page) {
        this.page = page;
        this.classMenuLink = this.page.locator("//span[text()='Class']/parent::button");
        this.manageClassText = this.page.locator("//div[normalize-space()='Manage Class']");
        this.LMSDisplayHomePage = this.page.locator("//span[normalize-space()='LMS - Learning Management System']");
    }

    async clickClassMenu(){
        await this.classMenuLink.click();
    }   

    async classLogin(url, username, password){
        let loginPage = new LoginPage(this.page);
        await loginPage.launchApp(url);
        await loginPage.validLogin(username, password); 
    }

    async verifyManageClassDisplay(){
       // await this.manageClassText.waitFor({timeout: 3000});
        return await this.manageClassText.isVisible();
    }

    async clickLMSTextClick(){
        await this.LMSDisplayHomePage.click();
    }   

}

