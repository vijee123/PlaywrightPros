import {expect} from "@playwright/test";

export default class commonTest{        

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
    }

    async verifyPaginationTextAndIcons(item){
        console.log("Pagination item checked: " + item);
        switch(item){
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
    
        return results; // Return the list of headers with their sort icon status
    }
    
}