import {expect} from "@playwright/test";

import LoginPage from './loginPage';

export default class logoutPage{

    constructor(page) {
        this.page = page;
        
    }

    async logoutLogin(url, username, password){
        let loginPage = new LoginPage(this.page);
        await loginPage.launchApp(url);
        await loginPage.validLogin(username, password); 
     }    


}