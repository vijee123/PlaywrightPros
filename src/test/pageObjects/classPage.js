import {expect} from "@playwright/test";

import LoginPage from './loginPage';
import commonTest from '../utils/commonMethods';
import { th } from "@faker-js/faker";

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
        this.labels =this.page.locator("//label");
        this.selectBatchName = this.page.locator("//input[@placeholder='Select a Batch Name']");
        this.classTopicTextbox = this.page.locator("#classTopic");  
        this.classDescTextbox = this.page.locator("#classDescription");
        this.classDate = this.page.locator("//p-calendar//input");
        this.classNumber = this.page.locator("#classNo");
        this.classDatePickerBtn = this.page.locator("//span[@class='p-button-icon pi pi-calendar']//parent::button");
        this.datePickerYear = this.page.locator("//span[contains(@class, 'p-datepicker-year')]");
        this.datePickerMonth = this.page.locator("//span[contains(@class, 'p-datepicker-month')]");
        this.datePickerDay = this.page.locator("//td[@class='ng-tns-c178-13 ng-star-inserted']//span");
        this.datePickerNextArrowBtn = this.page.locator("//button[contains(@class, 'p-datepicker-next')]");
        this.datePickerPrevArrowBtn = this.page.locator("//button[contains(@class, 'p-datepicker-prev')]");
        this.staffNameDropdown = this.page.locator("//p-dropdown[@id='staffId']//div[@role='button']");
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
        this.statusErrorMsg = this.page.locator("//small[text()='Status is required.']");
        this.staffNameErrorMsg = this.page.locator("//small[text()='Staff Name is required.']");
        this.classDateErrorMsg = this.page.locator("//small[text()='Class Date is required.']");
        this.classTopicErrorMsg = this.page.locator("//small[text()='Class Topic is required.']");
        this.batchNameErrorMsg = this.page.locator("//small[text()='Batch Name is required.']");
        this.batchNameDeleteIcon = this.page.locator("//input[@placeholder='Select a Batch Name']/parent::div/i[contains(@class,'p-dropdown-clear')]");
        this.staffNameDeleteIcon = this.page.locator("//input[@placeholder='Select a Staff Name']/parent::div/i[contains(@class,'p-dropdown-clear')]");
        this.headerDeleteIcon = this.page.locator("//mat-card-title[@class='mat-card-title']//button[@icon='pi pi-trash']");
        this.saveButton = this.page.locator("//span[text()='Save']");
        this.cancelButton = this.page.locator("//span[text()='Cancel']");
        this.closeIcon = this.page.locator("//span[contains(@class,'p-dialog-header-close-icon')]");   
             
       }


    async clickClassMenu(){
        await this.classMenuLink.click();
    }   

    async classLogin(url, username, password){
        let loginPage = new LoginPage(this.page);
        await loginPage.launchApp(url);
        await loginPage.validLogin(username, password); 
    }

    async classNoDisplayed(){
        const classNo = await this.classNumber.getAttribute('ng-reflect-model');
        console.log("class Count Displayed is ", classNo);
        return classNo;
    }

    async verifyManageClassDisplay(){
       // await this.manageClassText.waitFor({timeout: 3000});
        return await this.manageClassText.isVisible();
    }

    async clickLMSTextClick(){
        await this.LMSDisplayHomePage.click();
    }  

    async clickHeaderDeleteIcon(){
        await this.headerDeleteIcon.click();    
    }

    async verifyHeaderDeleteIconDisplay(){
        return await this.headerDeleteIcon.isVisible();     
    }

    async verifyClassFooterMessage(moduleName){
        let common = new commonTest(this.page);
        return await common.verifyFooterMessage(moduleName);
    }

    async verifyFieldNameDisplay(fieldName){
        console.log("Tested Field Name is: " + fieldName);
        const fieldLabels = await this.page.locator("//label").allTextContents();
        console.log("The labels of fields are: "+fieldLabels); 
        switch(fieldName){
            case "BatchName":  
               return await fieldLabels.includes("Batch Name");
            case "ClassTopic": 
               return await fieldLabels.includes("Class Topic");
            case "ClassDescription":
                return  await fieldLabels.includes("Class Description");
            case "ClassDates":
                return await fieldLabels.includes(" Select Class Dates ");
            case "ClassNo":
                return await fieldLabels.includes("No of Classes");
            case "StaffName":
                return await fieldLabels.includes("Staff Name");
            case "Status":
                return await fieldLabels.includes("Status");
            case "Comments":
                return await fieldLabels.includes("Comments");
            case "Notes":
                return await fieldLabels.includes("Notes");
            case "Recording":
                return await fieldLabels.includes("Recording");
        }

    }


    async verifyFieldBoxDisplay(fieldBox){
         switch(fieldBox){
            case "BatchName":  
                {console.log("into bathc name..");return await this.selectBatchName.isVisible();}
            case "ClassTopic": 
              {console.log("into class topic..");return await this.classTopicTextbox.isVisible();}
            case "ClassDescription":
                return await this.classDescTextbox.isVisible();
            case "ClassDates":
                return await this.classDate.isVisible();
            case "ClassNo":
               return await this.classNumber.isVisible();
            case "StaffName":
                return await this.staffNameDropdown.isVisible();
            case "Comments":
                return await this.commentsTextbox.isVisible();
            case "Notes":
                return await this.notesTextbox.isVisible();
            case "Recording":
               return await this.recordingTextbox.isVisible();
            case "Status":
               return await this.statusActiveRadioBtn.isVisible();
             
        }

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

    async clickBatchNameDeleteIcon(){
        await this.batchNameDeleteIcon.click(); 
    }

    async selectStaffByName(staffName) {
        if (!staffName || staffName.trim() === "") {
            console.log("No staff name provided. Skipping staff selection.");
            return;
        }
        await this.staffNameDropdown.click();
        await this.page.waitForTimeout(1500); 
        await this.page.waitForSelector("//ul[@role='listbox']/p-dropdownitem");
        await this.page.locator(`//p-dropdownitem[@ng-reflect-label='${staffName}']`).click();
    }

    async checkNoOfClasses() {
        try {
            const value = await this.page.locator('#classNo').inputValue();
            console.log("No of Classes value:", value);
            return value;
        } catch (error) {
            console.error("Error getting class number:", error);
            throw error; 
        }
    }

    async clickDatePickerBtn(){
       await this.classDatePickerBtn.click();
    }
    
    async verifyDisabledWeekendDates(){
        const weekendDates = await this.page.$$("//div[contains(@class,'p-datepicker-calendar-container')]//tbody//td[position()=1 or position()=7]");
        for (const date of weekendDates) {
            const isDisabled = await date.$('span.p-disabled') !== null;
            const dateText = await date.innerText();
            
            if (!isDisabled) {
                console.log(`Weekend date ${dateText} is enabled`);
                return false; 
            }
            
            console.log(`Weekend date ${dateText} is disabled`);
        }
        
        console.log("All the week end dates are disabled....")
        return true;
    }


    async fillCreateClassForm({ batchName, classTopic, classDesc, classDates, staffName, status, comments,notes, recording}) {
        await this.selectBatchName.fill(batchName); 
        await this.classTopicTextbox.fill(classTopic); 
        await this.classDescTextbox.fill(classDesc);
        await this.selectDates(classDates);
        await this.selectStaffByName(staffName);
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


    async selectDates(classDates) {

        // Ensure classDates is always an array
       if (!Array.isArray(classDates)) {
          classDates = classDates.split(",").map(date => date.trim()); 
        }

        // Filter out invalid or empty dates
        classDates = classDates.filter(date => date && typeof date === "string" && date.includes("/"));


        // If there are no valid dates, exit early
        if (classDates.length === 0) {
            console.log("No valid dates provided. Skipping date selection.");
            return;
        }

       await this.classDatePickerBtn.click(); 
   
       for (const targetDate of classDates) {
       if (!targetDate || typeof targetDate !== "string" || !targetDate.includes("/")) {
           console.error("Invalid date format:", targetDate);
           continue;
       }

       // Extract month, day, and year
       const [month, day, yearRaw] = targetDate.trim().split("/");
       const year = yearRaw.trim().split(" ")[0].replace(/[^0-9]/g, '');
      
       // Convert month number to text
       const monthNames = ["January", "February", "March", "April", "May", "June",
                           "July", "August", "September", "October", "November", "December"];
       const targetMonth = monthNames[parseInt(month, 10) - 1];
      
       // Get the currently displayed month and year
       let displayedYear = await this.datePickerYear.textContent();
       let displayedMonth = await this.datePickerMonth.textContent(); 

       // Navigate to the correct month and year
       while (displayedMonth !== targetMonth || displayedYear !== year) {
           const currentYear = parseInt(displayedYear, 10);
           const targetYear = parseInt(year, 10);
           const currentMonthIndex = monthNames.indexOf(displayedMonth);
           const targetMonthIndex = monthNames.indexOf(targetMonth);
          if (currentYear < targetYear || (currentYear === targetYear && currentMonthIndex < targetMonthIndex)) {
               await this.datePickerNextArrowBtn.click(); 
           } else {
               await this.datePickerPrevArrowBtn.click(); 
           }

           await this.page.waitForTimeout(1000);
           displayedYear = await this.datePickerYear.textContent();
           displayedMonth = await this.datePickerMonth.textContent();
       }

       console.log(`Navigated to: ${displayedMonth} ${displayedYear}`);

       // Click the correct day
       await this.page.locator(`//table[contains(@class,'p-datepicker-calendar')]/tbody/tr/td/span[text()='${parseInt(day, 10)}']`).click();
       console.log(`Selected date: ${targetDate}`);

         await this.page.waitForTimeout(2000);
       }

        await this.page.click('body', { position: { x: 0, y: 0 } }); 
        await this.page.keyboard.press('Escape'); 
        await this.page.waitForTimeout(1000);
     
    }


    async verifyMessageDisplay(message){
        console.log("Checking message visibility for:", message);
      
        if (this.page.isClosed()) {
            console.error("Page is already closed. Cannot verify message.");
            return false;
        }

        switch(message){
            case "success":
                console.log("Checking Valid Class Created Message..");
                return await this.classCreatedMsg.isVisible();
            case "statusErrorMsg":
                console.log("Checking Status Error Message..");
                return await this.statusErrorMsg.isVisible();
            case "staffNameErrorMsg":
                console.log("Checking Staff Name Error Message..");
                return await this.staffNameErrorMsg.isVisible();
            case "classDateErrorMsg":
                console.log("Checking Class date Error Message..");
                return await this.classDateErrorMsg.isVisible();
            case "classTopicErrorMsg":
                console.log("Checking Class Topic Message..");
                return await this.classTopicErrorMsg.isVisible();
            case "batchNameErrorMsg":
                console.log("Checking Batch name Error Message..");
                return await this.batchNameErrorMsg.isVisible();
            default:
                throw new Error(`Error message "${message}" not found!`);
        }
    }

    

}
