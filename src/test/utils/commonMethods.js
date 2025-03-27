import { expect } from "@playwright/test";

export default class commonTest {

    constructor(page) {
        this.page = page;
        this.paginationText = this.page.getByText('Showing');
        this.firstPageIcon = this.page.locator("//span[@class='p-paginator-icon pi pi-angle-double-left']//parent::button");
        this.previousPageIcon = this.page.locator("//span[@class='p-paginator-icon pi pi-angle-left']//parent::button");
        this.nextPageIcon = this.page.locator("//span[@class='p-paginator-icon pi pi-angle-right']//parent::button");
        this.lastPageIcon = this.page.locator("//span[@class='p-paginator-icon pi pi-angle-double-right']//parent::button");
        this.PageNo = this.page.locator("//span[@class='p-paginator-pages ng-star-inserted']/button");
        this.pageHeaderColumns = this.page.locator("//thead[@class='p-datatable-thead']//th[@role='columnheader']");
        this.sortIcon = this.page.locator("//p-sorticon");
        this.footerMessage = this.page.locator("//div[contains(@class,'p-datatable-footer')]/div");
        this.allEditIcons = this.page.locator('//table/tbody/tr//button[contains(@icon, "pi-pencil")]');
        this.allDelIcons = this.page.locator('//table/tbody/tr//button[contains(@icon, "pi-trash")]');
        this.allCheckBoxes = this.page.locator('//div[@class="p-checkbox-box p-component"]');
        this.NextpageBtn = this.page.locator('//span[@class="p-paginator-icon pi pi-angle-right"]');
        this.nextPagedoubleArrowBtn = this.page.locator('//span[@class="p-paginator-icon pi pi-angle-double-right"]');

        //-----Delete Locators
        this.topRowClassTopic = this.page.locator("(//tbody[@class='p-datatable-tbody']/tr[1])/td[3]");
        this.secondRowClassTopic = this.page.locator("(//tbody[@class='p-datatable-tbody']/tr[2])/td[3]");
        this.topRowProgramName = this.page.locator("(//tbody[@class='p-datatable-tbody']/tr[1])/td[2]");
        this.secondRowProgramName = this.page.locator("(//tbody[@class='p-datatable-tbody']/tr[2])/td[2]");
        this.topRowBatchName = this.page.locator("(//tbody[@class='p-datatable-tbody']/tr[1])/td[2]");
        this.secondRowBatchName = this.page.locator("(//tbody[@class='p-datatable-tbody']/tr[2])/td[2]");
        this.topRowDeleteIcon = this.page.locator("(//div[@class='action'])[1]//button[@icon='pi pi-trash']");
        this.deleteConfirmPopup = this.page.locator("//span[text()='Confirm']");
        this.NoDeleteButtonConfirm = this.page.locator("//div[contains(@class,'p-dialog-footer')]/button[@ng-reflect-label='No']");
        this.YesDeleteButtonConfirm = this.page.locator("//div[contains(@class,'p-dialog-footer')]/button[@ng-reflect-label='Yes']");
        this.classDeletedMessage = this.page.locator("//div[text()='Class Deleted']");
        this.programDeletedMessage = this.page.locator("//div[text()='Program Deleted']");
        this.batchDeletedMessage = this.page.locator("//div[text()='batch Deleted']");
        this.classesDeletedMessage = this.page.locator("//div[text()='Classes Deleted']");
        this.batchesDeletedMessage = this.page.locator("//div[text()='Batches Deleted']");
        this.programsDeletedMessage = this.page.locator("//div[text()='Programs Deleted']");
        this.deleteConfirmCloseIcon = this.page.locator("//button[contains(@class,'dialog-header-icon')]");
        this.topRowCheckBox = this.page.locator("(//tbody//div[@role='checkbox'])[1]");
        this.secondCheckBox = this.page.locator("(//tbody//div[@role='checkbox'])[2]");
        this.multiDeleteIcon = this.page.locator("//mat-card-title[@class='mat-card-title']//button[@icon='pi pi-trash']");

// Pagination locators

       this.nextPage = this.page.locator("//button[contains(@class,'p-paginator-next')]");
        this.lastPage = this.page.locator("//button[contains(@class,'p-paginator-last')]");
        this.previousPage = this.page.locator("//button[contains(@class,'p-paginator-prev')]");

        this.FirstPage = this.page.locator("//button[contains(@class,'p-paginator-first')]");

    }

    //----------------Pagination Text And Icons Validation For All Modules--------------------
    async verifyPaginationTextAndIcons(item) {
        console.log("Pagination item checked: " + item);
        switch (item) {
            case "paginationText":
                return await this.paginationText.isVisible();
            case "firstPageIcon":
                return await this.firstPageIcon.isVisible();
            case "previousPageIcon":
                return await this.previousPageIcon.isVisible();
            case "nextPageIcon":
                return await this.nextPageIcon.isVisible();
            case "lastPageIcon":
                return await this.lastPageIcon.isVisible();
            case "pageNumber":
                return await this.PageNo.isVisible();
            default:
                throw new Error(`Item "${item}" not found!`);
        }
    }

    //-----------Header Field SorIcon validations to all modules-----------
    async verifyHeaderFieldsSortIcons() {
        const headersList = await this.pageHeaderColumns.all();
        let results = [];

        for (const header of headersList) {
            const headerText = await header.innerText();
            console.log("Testing " + headerText + " column for sort icon...");

            // Find the sort icon inside the specific header
            const sortIcon = await header.locator("//p-sorticon");

            if (await sortIcon.isVisible()) {
                console.log(headerText + " sort icon is visible in the header.");
                results.push({ header: headerText, hasSortIcon: true });
            } else {
                console.log(headerText + " sort icon is NOT visible in the header.");
                results.push({ header: headerText, hasSortIcon: false });
            }
        }

        return results;
    }


    // Footer Message Validation for all Modules
    async verifyFooterMessage(moduleName) {
        const footerText = await this.footerMessage.innerText();
        console.log("Footer message is: " + footerText);
        switch (moduleName.toLowerCase()) {
            case "class":
                return expect(footerText).toMatch(/In total there are .* classes/);
            case "batch":
                return expect(footerText).toMatch(/In total there are .* batches/);
            case "program":
                return expect(footerText).toMatch(/In total there are .* programs/);
            default:
                throw new Error(`Module "${moduleName}" not found!`);
        }
    }


    async CommonEditDelCheckboxValidation(option) {
        let passinglocator;
        await this.page.waitForTimeout(2000);

        switch (option) {
            case "Edit_Icon":
                passinglocator = await this.allEditIcons;
                return await this.checkEditIconsVisibilityCommon(passinglocator);
            case "Delete_Icon":
                passinglocator = await this.allDelIcons;
                return await this.checkEditIconsVisibilityCommon(passinglocator);

            case "Check_Box":
                passinglocator = await this.allCheckBoxes;
                return await this.checkEditIconsVisibilityCommon(passinglocator);

            default:
                return false;
        }
    }


    // Function to get actual data from a specific column on the current page

    async getActualDataFromColumn(page, columnIndex) {
        await page.waitForSelector('table tbody tr');
        const rows = await page.$$('table tbody tr');
        const actualData = [];
        for (const row of rows) {
            const cell = await row.$(`td:nth-child(${columnIndex})`);
            if (cell) {
                const cellData = await cell.evaluate(cell => cell.innerText.trim());
                actualData.push(cellData);
            }
        }
        return actualData;
    }


    async verifyingColumnSorting(page, columnName, sortOrder) {

        const actualData = [];

        const headers = await page.$$('table thead th');
        let columnIndex = -1;

        for (let i = 0; i < headers.length; i++) {
            const headerText = await headers[i].innerText();
            if (headerText.trim() === columnName) {
                columnIndex = i + 1; // 1-based index
                break;
            }
        }

        if (columnIndex === -1) {
            console.error(`Column "${columnName}" not found.`);
            return false;
        }

        do {
            const actualDataFromPage = await this.getActualDataFromColumn(page, columnIndex);
            actualData.push(actualDataFromPage);
            // Click to go to the next page if possible
            if (await this.NextpageBtn.isEnabled() || !this.nextPagedoubleArrowBtn.isEnabled()) {
                await this.NextpageBtn.click();
            } else {
                break; // Exit if no more pages
            }
        } while (true);


        const sortedData = [...actualData].map(item => String(item)); // Convert to strings    

        let FianlsortedCombinedString = '';

        switch (sortOrder) {
            case 'Ascending':
                const combinedString = sortedData.join(',');
                const individualValues = combinedString.split(',');
                const sortedValues = individualValues.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
                const sortedCombinedString = sortedValues.join(',');
                FianlsortedCombinedString = sortedCombinedString;
                // console.log('sortedCombinedString'+sortedCombinedString);
                break;

            case 'Descending':
                const deccombinedString = sortedData.join(',');
                const decindividualValues = deccombinedString.split(',');
                const decsortedValues = decindividualValues.sort((a, b) => b.localeCompare(a, undefined, { sensitivity: 'base' }));
                FianlsortedCombinedString = decsortedValues.join(',');
                //console.log('Sorted Data (Descending):', FianlsortedCombinedString);
                break;


            default:
                console.error(`Invalid sort option: ${sortOrder}`);
                return false; // Invalid sorting option
        }

        if (sortOrder === 'Ascending') {
            await page.click(`th:nth-child(${columnIndex})`); // Click to sort
        }
        else if (sortOrder === 'Descending') {
            await page.click(`th:nth-child(${columnIndex})`);
            await page.click(`th:nth-child(${columnIndex})`);
        }
        await page.waitForTimeout(1000); // Adjust as necessary

        const displayedData = [];

        do {
            const displayedDataFromPage = await this.getActualDataFromColumn(page, columnIndex);
            displayedData.push(displayedDataFromPage);
            // Click to go to the next page if possible
            if (await this.NextpageBtn.isEnabled() || !this.nextPagedoubleArrowBtn.isEnabled()) {
                await this.NextpageBtn.click();
            } else {
                break; // Exit if no more pages
            }
        } while (true);

        const sorteddisplayedData = [...displayedData].map(item => String(item)); // Convert to strings

        const combinedDisplayedString = sorteddisplayedData.join(',');
        const displayedValues = combinedDisplayedString.split(',');
        const sortedDisplayedCombinedString = displayedValues.join(',');
        //console.log('sortedDisplayedCombinedString  '+ sortedDisplayedCombinedString);    
        const isEqual = FianlsortedCombinedString === sortedDisplayedCombinedString;
        return isEqual;

    }


    async checkEditIconsVisibilityCommon(locat) {

        await this.page.waitForTimeout(2000);
        const count = await locat.count();

        let results = [];

        for (let i = 0; i < count; i++) {
            const optlist = await locat.nth(i);
            if (await optlist.isVisible()) {
                results.push('true');
            } else {
                results.push('false');
            }

        }
        return results;
    }



    // Delete Common Methods For All Modules

    async getTopRowData(module) {
        switch (module.toLowerCase()) {
            case "program":
                {
                    const programName = await this.topRowProgramName.textContent();
                    console.log("Top Row Program name is: ", programName);
                    return programName;
                }
            case "batch":
                {
                    const batchName = await this.topRowBatchName.textContent();
                    console.log("Top Row Batch Name is: ", batchName);
                    return batchName;
                }
            case "class":
                {
                    const classTopic = await this.topRowClassTopic.textContent();
                    console.log("Top Row Class Topic Text:", classTopic);
                    return classTopic;
                }
            default: throw new Error(`No such module "${module}"  found!`);
        }

    }

    async clickTopRowDeleteIcon() {
        const deleteIcon = this.topRowDeleteIcon;

        if (await deleteIcon.count() === 0) {
            throw new Error("Delete icon is not present in the DOM.");
        }

        if (await deleteIcon.isVisible()) {
            await deleteIcon.click();
        } else {
            throw new Error("Delete icon is present but not visible to click.");
        }
    }

    async deleteConfirmPopupVisibility() {
        return this.deleteConfirmPopup.isVisible();
    }

    async clickYesDeleteOnConfirm() {
        await this.YesDeleteButtonConfirm.click();
    }

    async clickNoDeleteOnConfirm() {
        await this.NoDeleteButtonConfirm.click();
    }

    async clickMultiDeleteIcon() {
        await this.multiDeleteIcon.click();
    }

    async singleDeleteMessageVisible(module) {
        switch (module.toLowerCase()) {
            case "program":
                return this.programDeletedMessage.isVisible();
            case "batch":
                return this.batchDeletedMessage.isVisible();
            case "class":
                return this.classDeletedMessage.isVisible();
        }
    }

    async multiDeleteMessageVisible(module) {
        console.log("The module is:" + module);
        switch (module.toLowerCase()) {

            case "program":
                return this.programsDeletedMessage.isVisible();
            case "batch":
                return this.batchesDeletedMessage.isVisible();
            case "class":
                return this.classesDeletedMessage.isVisible();
        }
    }


    async clickCloseIconDeleteConfirm() {
        await this.deleteConfirmCloseIcon.click();
    }

    async clickTopRowCheckBox() {
        await this.topRowCheckBox.click();
    }

    async clickTopTwoCheckBox() {
        await this.topRowCheckBox.click();
        await this.secondCheckBox.click();
    }

    async checkMultiDeleteIconStatus() {
        return await this.multiDeleteIcon.isEnabled();
    }

    async getTopTwoRowData(module) {
        switch (module.toLowerCase()) {
            case "program":
                {
                    const topRowProgram = await this.topRowProgramName.textContent();
                    const secondRowProgram = await this.secondRowProgramName.textContent();

                    console.log("Top Row Program name:", topRowProgram);
                    console.log("Second Row Program name:", secondRowProgram);

                    return [topRowProgram, secondRowProgram];
                }
            case "batch":
                {
                    const topRowBatch = await this.topRowBatchName.textContent();
                    const secondRowBatch = await this.secondRowBatchName.textContent();

                    console.log("Top Row Batch Name:", topRowBatch);
                    console.log("Second Row Batch Name:", secondRowBatch);

                    return [topRowBatch, secondRowBatch];
                }
            case "class":
                {
                    const topRowClass = await this.topRowClassTopic.textContent();
                    const secondRowClass = await this.secondRowClassTopic.textContent();

                    console.log("Top Row Class Topic:", topRowClass);
                    console.log("Second Row Class Topic:", secondRowClass);

                    return [topRowClass, secondRowClass];
                }
            default:
                throw new Error(`No such module "${module}" found!`);
        }
    }




 //pagination

 async CommonpaginationValidation(pages) {
    await this.page.keyboard.press('Escape');
    //await this.page.waitForTimeout(2000);

    await this.nextPage.click();
    // const pagination = await this.page.locator("//span[@class='p-paginator-pages ng-star-inserted']");
    const paginationPages = await this.page.locator("//span[contains(@class,'p-paginator-pages')]//button[contains(@class,'p-highlight')]");
    await paginationPages.scrollIntoViewIfNeeded();
    //await paginationPages.waitFor({ state: 'visible' });
    //
    const highlightedPage = await paginationPages.textContent();
    console.log("current page: ", highlightedPage);
    const befor = Number(highlightedPage);
    let afterNum;
    switch (pages) {
        case 'next':
            await this.nextPage.click();
            const afterPage = await this.page.locator("//span[contains(@class,'p-paginator-pages')]//button[contains(@class,'p-highlight')]");
            const after = await afterPage.textContent();
            console.log("after clciking next button the current page is :", after);
            afterNum = Number(after);
            if (afterNum == befor + 1) {
                return true;
            }
            return false;

        case 'previous':
            const notEnabled = await this.previousPage.isDisabled();
            if (!notEnabled) {
                console.log("previousPage is enabled..");
                await this.previousPage.click();

            } else {
                await this.previousPage.waitFor({ state: 'visible', timeout: 3000 });
                console.log("previousPage is enabled now..");
                await this.previousPage.click();

            }
            const prevPage = await this.page.locator("//span[contains(@class,'p-paginator-pages')]//button[contains(@class,'p-highlight')]").textContent();
            afterNum = Number(prevPage);
            if (afterNum == befor - 1) {
                console.log("After clicking previoud button, the current page is:", afterNum);
                return true;
            }
            return false;

        case 'last':
            await this.lastPage.click();
            const isdisabled = await this.nextPage.isDisabled();
            if (isdisabled) {
                console.log("currently in very last page!!next page is disabled..");
            }
            return isdisabled;


        case 'first':
            await this.FirstPage.click();
            const isdisabledF = await this.previousPage.isDisabled();
            if (isdisabledF) {
                console.log("Currently in very first page!!!...previous page is disabled...");
            }
            return isdisabledF;

    }
}

}

