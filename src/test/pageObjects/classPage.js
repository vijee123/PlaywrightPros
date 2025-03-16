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
        this.addNewClassButton = this.page.getByText('Add New Class');
        this.selectBatchName = this.page.locator("//input[@placeholder='Select a Batch Name']");
        this.classTopicTextbox = this.page.locator("#classTopic");  
        this.classDescTextbox = this.page.locator("#classDescription");
        this.classDate = this.page.locator("//p-calendar//input");
        this.classDatePickerIcon = this.page.locator("//span[@class='p-button-icon pi pi-calendar']//parent::button");
        this.staffNameDropdown = this.page.locator("//p-dropdown[@id='staffId']//div[@role='button']/span");
        this.staffNameDropdownOptions = this.page.locator("//ul[@role='listbox']/p-dropdownitem");
        this.statusActiveRadioBtn = this.page.locator("//p-radiobutton[@ng-reflect-input-id='Active']");
        this.statusInactiveRadioBtn = this.page.locator("//p-radiobutton[@ng-reflect-input-id='Inactive']");
        this.saveButton = this.page.locator("//button[normalize-space()='Save']");
        this.commentsTextbox = this.page.locator("#classComments");
        this.notesTextbox = this.page.locator("#classNotes");
        this.recordingTextbox = this.page.locator("#classRecordingPath");
        this.saveButton = this.page.locator("#saveClass");
        this.cancelButton = this.page.locator('[label="Cancel"]');
        this.classCreatedMsg = this.page.locator("//div[@class='p-toast-detail ng-tns-c91-12' and text()='Class Created']");
        
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

    async clickAddNewClassButton(){
        await this.addNewClassButton.click();
    }

    async clickSaveButton(){
        await this.saveButton.click();
    }

    async classCreatedMsgDisplay(){
        return await this.classCreatedMsg.isVisible();
    }

    async selectStaffByName(staffName) {
        await this.staffNameDropdown.click();
      //  await this.page.waitForSelector("//ul[@role='listbox']/p-dropdownitem");
        await this.page.locator(`//p-dropdownitem[@ng-reflect-label='${staffName}']`).click();
    }

    async fillCreateClassForm({ batchName, classTopic, classDesc, classDates, staffName, status, comments,notes, recording}) {
        await this.selectBatchName.fill(batchName); // Select the batch name
        await this.classTopicTextbox.fill(classTopic); 
        await this.classDescTextbox.fill(classDesc);
        console.log("Class Dates sent are: ", classDates);
        //await this.classDate.fill(classDates);
        await this.selectStaffByName(staffName);
      //  staffNameDropdown.fill(staffName); // Select the staff name
        if (status === "Active") {
            await this.statusActiveRadioBtn.click();
        }
        else if (status === "Inactive") {
            await this.statusInactiveRadioBtn.click();
        }
        await this.commentsTextbox.fill(comments);
        await this.notesTextbox.fill(notes);
        await this.recordingTextbox.fill(recording);
      
    }





}

