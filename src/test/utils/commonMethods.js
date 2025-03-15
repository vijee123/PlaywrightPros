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
    }

    async verifyPaginationTextAndIcons(item){
        console.log("Pagination item checked: " + item);
        switch(item){
            case "paginationText":
                {console.log("into page text");return await this.paginationText.isVisible();}
            case "firstPageIcon":
                return await this.firstPageIcon.isVisible();
            case "previousPageIcon":
                return await this.previousPageIcon.isVisible();
            case "nextPageIcon":
                {console.log("into next page icon");return await this.nextPageIcon.isVisible();}
            case "lastPageIcon":
                return await this.lastPageIcon.isVisible();
            case "pageNumber":
                return await this.PageNo.isVisible();
            default:
                throw new Error(`Item "${item}" not found!`);
         }
       }     
    
}