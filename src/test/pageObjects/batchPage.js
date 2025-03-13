import {expect} from "@playwright/test";

import LoginPage from './loginPage';

export default class batchPage{

    constructor(page) {
        this.page = page;
        this.batchMenuLink = this.page.locator("//span[text()='Batch']/parent::button");
        this.manageBatchText = this.page.locator("//div[normalize-space()='Manage Batch']");
        
    }

    async batchLogin(url, username, password){
        let loginPage = new LoginPage(this.page);
        await loginPage.launchApp(url);
        await loginPage.validLogin(username, password); 
        await this.batchMenuLink.click();
        await page.mouse.click(100, 200);
     }   
     
    
    async verifyManageBatchDisplay(){
        await this.manageBatchText.waitFor({timeout: 30000});
        return await this.manageBatchText.isVisible();
    }

}