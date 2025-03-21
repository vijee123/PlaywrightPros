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
        this.footerMessage = this.page.locator("//div[contains(@class,'p-datatable-footer')]/div");
        this.allEditIcons = this.page.locator('//table/tbody/tr//button[contains(@icon, "pi-pencil")]');
       this.allDelIcons = this.page.locator('//table/tbody/tr//button[contains(@icon, "pi-trash")]');
       this.allCheckBoxes = this.page.locator('//div[@class="p-checkbox-box p-component"]');
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
    
        return results; 
    }



    async verifyFooterMessage(moduleName){
       const footerText = await this.footerMessage.innerText();
       console.log("Footer message is: " + footerText);
       switch(moduleName.toLowerCase()){
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

    
async CommonEditDelCheckboxValidation(option)
{
    let passinglocator;
    await this.page.waitForTimeout(2000);      

    switch (option) {
        case "Edit_Icon":
            passinglocator=await this.allEditIcons;
            return await this.checkEditIconsVisibilityCommon(passinglocator);	    
        case "Delete_Icon":
            passinglocator=await this.allDelIcons;
          return await this.checkEditIconsVisibilityCommon(passinglocator);
  
        case "Check_Box":
            passinglocator=await this.allCheckBoxes;
            return await this.checkEditIconsVisibilityCommon(passinglocator);
  
        default:
          return false;
      }
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
            results.push( 'false'); 
        }          
        
    }   
    return results;

}








}
    
