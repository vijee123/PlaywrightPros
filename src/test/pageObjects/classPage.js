import {expect} from "@playwright/test";

export class classPage{

    constructor(page) {
        this.page = page;
        this.classMenuLink = this.page.locator("//span[text()='Class']/parent::button");
        this.manageClassText = this.page.locator("//div[normalize-space()='Manage Class']");
        this.LMSDisplayHomePage = this.page.locator("//span[normalize-space()='LMS - Learning Management System']");
      //  this.addNewClassBtn = 
    }

    async clickClassMenu(){
        await this.classMenuLink.click();
        await this.page.mouse.click(100, 200); 
    }   

    async verifyManageClassDisplay(){
        await this.manageClassText.waitFor({timeout: 3000});
        return await this.manageClassText.isVisible();
    }

    async clickLMSTextClick(){
        await this.LMSDisplayHomePage.click();
    }   

}

module.exports = classPage;