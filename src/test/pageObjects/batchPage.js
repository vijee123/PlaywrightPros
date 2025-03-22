import {expect} from "@playwright/test";

import LoginPage from './loginPage';
import commonTest from '../utils/commonMethods';

export default class batchPage{

    constructor(page) {
        this.page = page;
        this.batchMenuLink = this.page.locator("//span[normalize-space()='Batch']");
        //this.overlay=this.page.locator("//div[@class='cdk-overlay-container']");
        this.manageBatchText = this.page.locator("//div[normalize-space()='Manage Batch']");
        this.LMSTitleBatch = this.page.locator("//span[normalize-space()='LMS - Learning Management System']");
        this.multipleDeleteIcon = this.page.locator("//button[@class='p-button-danger p-button p-component p-button-icon-only']");
        this.paginator = this.page.locator("//div[@class='p-paginator-bottom p-paginator p-component ng-star-inserted']");
        this.batchDataTable = this.page.locator("//tbody[@class='p-datatable-tbody']");
        this.addNewBatchMenuBtn = this.page.getByText('Add New Batch');
        this.popUpDialog = this.page.locator("//div[@role='dialog']");
        this.programNameInput = this.page.locator("//input[@placeholder='Select a Program name']");
        this.batchNameFirstHalf = this.page.locator("//input[@id='batchProg']");
        this.batchNameInput = this.page.locator("//input[@id='batchName'][1]");
        this.batchDescription = this.page.locator("//input[@id='batchDescription']");
        this.statusActiveRadioBtn = this.page.locator("//p-radiobutton[@ng-reflect-input-id='ACTIVE']");
        this.statusInactiveRadioBtn = this.page.locator("//p-radiobutton[@ng-reflect-input-id='INACTIVE']");
        this.NoOfClasses = this.page.locator("//input[@id='batchNoOfClasses']");
        this.addNewBatchSaveBtn = this.page.locator("//span[normalize-space()='Save']");
        this.batchCreatedMsg = this.page.locator("//div[@role='alert']");
        this.successMsg = this.page.locator("//div[text()=' Batch Created Successfully']");
        this.errorMsglocator = this.page.locator(".p-invalid.ng-star-inserted");
        this.cancelBtn = this.page.locator("//span[normalize-space()='Cancel']");
        this.closeBtn = this.page.locator(".p-dialog-header-close-icon.ng-tns-c168-6.pi.pi-times");
        
        this.batchIdAlphabetErrorMsg = this.page.locator("//small[text()='This field accept only numbers and max 5 count. ']");
        this.batchIdEmptyErrorMsg = this.page.locator("//small[text()='Batch Name is required.']");
        this.progNameEmptyErrorMsg = this.page.locator("//small[text()='Program Name is required.']");
        this.batchDescEmptyErrorMsg = this.page.locator("//small[text()='Batch Description is required.']");
        this.batchDescFormatErrorMsg = this.page.locator("//small[text()='This field should start with an alphabet and min 2 character.']");
        this.batchStatusEmptyErrorMsg = this.page.locator("//small[text()='Status is required.']");
        this.noOfClassesEmptyErrorMsg = this.page.locator("//small[text()='Number of classes is required.']");
        
       
    }

    async batchLogin(url, username, password){
        let loginPage = new LoginPage(this.page);
        await loginPage.launchApp(url);
        await loginPage.validLogin(username, password); 
        
        //await this.page.mouse.click(100, 200);
     }   

     async batchTabClick()
     {
        await this.batchMenuLink.click();
        await this.page.evaluate(() => {
            const overlay = document.querySelector('.cdk-overlay-container');
            if (overlay) {
                overlay.style.display = 'none';
            }
        });
     }
     
    
    async verifyManageBatchDisplay(){
        await this.manageBatchText.waitFor({timeout: 30000});
        return await this.manageBatchText.isVisible();
    }

    async verifyLMSTitleDisplay(){
        const titleText=await this.LMSTitleBatch.textContent();
        console.log("title:" +titleText);
        return await titleText;
    }

    async verifyMultipleDeleteDisabled(){
         return this.multipleDeleteIcon.isDisabled();
    }

    async verifyPaginationEnabled(){
        const buttons= await this.paginator.locator('button');
        const count= await buttons.count();
        for (let i = 0; i < count; i++) {
            const button = buttons.nth(i);
            const isDisabled = await button.isDisabled();

            // Print button index and whether it's disabled
            console.log(`Button ${i + 1} is ${isDisabled ? 'disabled' : 'enabled'}`);
            expect(isDisabled).toBe(true);  // or false, depending on what you expect
        }
    }

    async verifyEditIconVisibleInEachRow(){
        const tableRows = await this.batchDataTable.locator('tr');
        const noOfRows = await tableRows.count();
        console.log("no. of rows:"+noOfRows);
        const count=0;
        for(let i = 0; i< noOfRows; i++){
            const tabRow = tableRows.nth(i);
            const editIcon = tabRow.locator("//button[@icon='pi pi-pencil']");
            const editIsVisible = editIcon.isVisible();
            if(!editIsVisible){
                console.log("editIcon not present in row["+i+"]");
               return false;
            }
        }
        console.log("edit icon present in all rows");
       return true;     
    }

    async verifyDeleteIconVisibleInEachRow(){
        const tableRows = await this.batchDataTable.locator('tr');
        const noOfRows = await tableRows.count();
        console.log("no. of rows:"+noOfRows);
        const count=0;
        for(let i = 0; i< noOfRows; i++){
            const tabRow = tableRows.nth(i);
            const deleteIcon = tabRow.locator("//button[@icon='pi pi-trash']");
            const deleteIsVisible = await deleteIcon.isVisible();
            
            if(!deleteIsVisible){
                console.log("DeleteIcon not present in row["+i+"]");
               return false;
            }
        }
        console.log("delete icon present in all rows");
       return true;     
    }

    async verifyCheckboxVisibleInEachRow(){
        const tableRows = await this.batchDataTable.locator('tr');
        const noOfRows = await tableRows.count();
        console.log("no. of rows:"+noOfRows);
        const count=0;
        for(let i = 0; i< noOfRows; i++){
            const tabRow = tableRows.nth(i);
            const checkBox = tabRow.locator("//div[@class='p-checkbox p-component']");
            const chkBoxIsVisible = await checkBox.isVisible();
            
            if(!chkBoxIsVisible){
                console.log("Checkbox not present in row["+i+"]");
                console.log(`Checkbox in row ${i} is ${chkBoxIsVisible ? 'visible' : 'not visible'}`);
    
               return false;
            }
        }
        console.log("checkbox present in all rows");
       return true;     
    }
    async verifyDatatableHeaders(testHeader) {
        const expHeader = testHeader;
        
        // Get the header elements
        const tabHeaders = await this.page.locator("thead tr");
        const batchHeader = await tabHeaders.locator("th");
    
        // Get the count of headers in the table
        const count = await batchHeader.count();
        console.log(count + " count, expected header: " + expHeader);
    
        // Iterate over each header
        for (let i = 0; i < count; i++) {
            const header = await batchHeader.nth(i).textContent();
            
            // Handle potential null or empty value for textContent
            if (header && header.trim() === expHeader) {
                console.log(`${expHeader} found in Batch DataTable Header at index ${i}`);
                return true;  // Header found
            }
        }
    
        console.log(`${expHeader} not found in the Batch DataTable Headers`);
        return false;  // Header not found
    }
    
    async verifyCheckBoxBatchHeader()
    {
        return this.page.locator("//p-tableheadercheckbox").isVisible();
    }

    async verifySortIconBatchHeader()
    {
        const tabHeaders = await this.page.locator("thead tr");
        const batchHeader = await tabHeaders.locator("th");
        const sortIcon = await batchHeader.locator(" //p-sorticon");
        if(sortIcon.count()==5)
        {
            return true;
        }
        return false;
       
    }

    async fillCreateBatchForm({ programName, batchId, batchDesc, status, noOfClasses}) {
        const prgName = programName;
     
    await this.page.locator("//div[@role='button']").click();
    const programField = await this.page.locator(`li[aria-label="${prgName}"]`);  // Replace "Item Text" with the text of the list item
    if(!prgName){
    await programField.waitFor({ state: 'visible' }); // Wait until the element is visible
    }
    await programField.click();
     await this.batchNameInput.fill(String(batchId)); 
        await this.batchDescription.fill(batchDesc);
        if (status === "Active") {
            await this.statusActiveRadioBtn.click();
        }
        else if (status === "Inactive") {
            await this.statusInactiveRadioBtn.click();
        }
      await this.NoOfClasses.fill(noOfClasses);
    }
    async verifyMessageDisplay(message,scenario){
        console.log("Checking message visibility for:", message);
      
        if (this.page.isClosed()) {
            console.error("Page is already closed. Cannot verify message.");
            return false;
        }

        switch(scenario){
            case "ValidInput_BatchData":
                console.log("Checking Valid Batch Created Message..");
                //await successMsg.waitFor({ state: 'visible' });
                console.log(await this.successMsg.textContent());
                return await this.successMsg.isVisible();

            case "InvalidInput_AlphabetsInBatchID":
                return await this.batchIdAlphabetErrorMsg.isVisible();
               // return await this.statusErrorMsg.isVisible();

            case "InvalidInput_BatchEmptyDescription":
                return await this.batchDescEmptyErrorMsg.isVisible();

            case "InvalidInput_BatchEmptyProgramName":
                return await this.progNameEmptyErrorMsg.isVisible();

            case "InvalidInput_BatchEmptyBatchID":
                return await this.batchIdEmptyErrorMsg.isVisible();

            case "InvalidInput_BatchEmptyStatus":
                return await this.batchStatusEmptyErrorMsg.isVisible();

            case "InvalidInput_BatchEmptyNoOfClasses":
                return await this.noOfClassesEmptyErrorMsg.isVisible();

            case "ValidInpu_VerifyBatchCloseButton":
                console.log("ValidInpu_VerifyBatchCloseButton...");
                await this.page.locator("//span[@class='p-dialog-header-close-icon ng-tns-c168-6 pi pi-times']").click();

                return await this.batchNameInput.isVisible();
               
                default:
                throw new Error(`Error message "${message}" not found!`);
        }
    }

    async clickaddNewBatchMenuBtn()
    {
        await addNewBatchMenuBtn.click();
    }

        async checkFieldsInPopUp(field, type) {
            console.log(`Checking field: ${field} for type: ${type}`);
            const popUpContent = await this.popUpDialog.locator("//div[@ng-reflect-ng-class='p-dialog-content']");
        
            // Check for specific field names
            switch(field) {
                case 'programName':
                    const programElt = await popUpContent.locator("//p-dropdown[@id='programName']");
                    const programHandle = await programElt.elementHandle(); // Get the element handle
                    const programTag = await programHandle?.tagName(); // Call getTagName() on the handle
                    return programTag === type;
        
                case 'batchName':
                    const batchNameElt = await popUpContent.locator("//input[@id='batchName']");
                    const batchNameHandle = await batchNameElt.elementHandle(); // Get the element handle
                    const batchNameTag = await batchNameHandle?.tagName(); // Call getTagName() on the handle
                    return batchNameTag === type;
        
                case 'batchNoOfClasses':
                    const batchNoOfClassesElt = await popUpContent.locator("//input[@id='batchNoOfClasses']");
                    const batchNoOfClassesHandle = await batchNoOfClassesElt.elementHandle(); // Get the element handle
                    const batchNoOfClassesTag = await batchNoOfClassesHandle?.tagName(); // Call getTagName() on the handle
                    return batchNoOfClassesTag === type;
        
                case 'batchDescription':
                    const batchDescriptionElt = await popUpContent.locator("//input[@id='batchDescription']");
                    const batchDescriptionHandle = await batchDescriptionElt.elementHandle(); // Get the element handle
                    const batchDescriptionTag = await batchDescriptionHandle?.tagName(); // Call getTagName() on the handle
                    return batchDescriptionTag === type;
        
                case 'batchStatus':
                    const batchStatusElt = await popUpContent.locator("//p-radiobutton[@id='batchStatus']");
                    const batchStatusHandle = await batchStatusElt.elementHandle(); // Get the element handle
                    const batchStatusTag = await batchStatusHandle.getTagName(); // Call getTagName() on the handle
                    return batchStatusTag === type;
        
                default:
                    console.log(`Field ${field} not recognized in the popup`);
                    return false;
            }
        }
         
        async selectRandomProgram(){

            await this.page.locator("//div[@role='button']").click();
    
            const prog = await this.page.locator("//*[@id='programName']/div/div[3]/div/ul/p-dropdownitem[1]/li");
            const progNameelement =await  prog.textContent();
            console.log(progNameelement);
            await prog.waitFor({ state: 'visible' });   // Ensure the element is stable before interacting with it

            await prog.click();
            await this.page.locator("//input[@placeholder='Select a Program name']").waitFor({ state: 'attached' }); // Wait for the program name input to be attached

            const progname = await this.programNameInput.inputValue();
            console.log("program name from when: ",await progname)

            
        }
        async VerifyBatchPrefixBox(){
            const prog = await this.programNameInput.inputValue();
            console.log("program name from then: ",prog);
            const batchPrefix = await this.page.locator("//*[@id='batchProg']").inputValue();
            console.log("batch prefix text: ",batchPrefix);
            return batchPrefix === prog;
        }

        async popUpClosedWithoutSaving(){
            const open =await this.popUpDialog.isVisible();
            const Saved = await this.successMsg.isVisible();
            return !open===!Saved;
        }

        async popUpClosed(){
            const open = await this.popUpDialog.isVisible();
            console.log(!open);    
            return !open;
        }
        // async clickAddNewBatchSaveBtn()
    // {
    //     await addNewBatchSaveBtn.click();
    // }

    }