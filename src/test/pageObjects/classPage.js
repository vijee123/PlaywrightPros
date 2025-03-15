import {expect} from "@playwright/test";

import LoginPage from './loginPage';
import commonTest from '../utils/commonMethods';

export default class classPage{

    constructor(page) {
        this.page = page;
        this.classMenuLink = this.page.locator("//span[text()='Class']/parent::button");
        this.manageClassText = this.page.locator("//div[normalize-space()='Manage Class']");
        this.LMSDisplayHomePage = this.page.locator("//span[normalize-space()='LMS - Learning Management System']");
        this.searchTextbox = this.page.locator('#filterGlobal');
        this.batchNameHeader = this.page.locator("//th[normalize-space()='Batch Name']");
        this.classTopicHeader = this.page.locator("//th[normalize-space()='Class Topic']");
        this.classDescHeader = this.page.locator("//th[normalize-space()='Class Description']");
        this.classDateHeader = this.page.locator("//th[normalize-space()='Class Date']");
        this.statusHeader = this.page.locator("//th[normalize-space()='Status']");
        this.staffNameHeader = this.page.locator("//th[normalize-space()='Staff Name']");   
        this.EditDeleteHeader = this.page.locator("//th[contains(text(), 'Edit / Delete')]");
        this.paginationText = this.page.getByText('Showing');
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

    async verifyHeaderDisplay(header){
        console.log("Header is: " + header);
        switch(header){
            case "Batch Name":
                return await this.batchNameHeader.isVisible();
            case "Class Topic":
                return await this.classTopicHeader.isVisible();
            case "Class Description":
                return await this.classDescHeader.isVisible();
            case "Class Date":
                return await this.classDateHeader.isVisible();
            case "Status":
                return await this.statusHeader.isVisible();
            case "Staff Name":
                return await this.staffNameHeader.isVisible();
            case "Edit/Delete":
                return await this.EditDeleteHeader.isVisible();
            default:
               throw new Error(`Header "${header}" not found!`);
        }

    }

    async verifyPaginationText() {
        console.log("The pagination text is: " + await this.paginationText.textContent());
        return await this.paginationText.isVisible();
    }

    async verifyPaginationTextAndIcons(items){
        let common = new commonTest(this.page);
        return await common.verifyPaginationTextAndIcons(items);
    }   

    async verifySortIconDisplayInHeaderFields(){
        let common = new commonTest(this.page);
        return await common.verifyHeaderFieldsSortIcons();
    }

}

