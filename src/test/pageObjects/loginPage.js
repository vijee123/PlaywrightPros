const { expect } = require('@playwright/test');
import { CONFIG } from '../../../config/env.js';
import HomePage from './homePage.js';

export default class LoginPage{
    
  constructor(page) {
    if (!page) throw new Error("Page object is undefined!");
    this.page = page;
    this.userName = this.page.locator('//input[@id="username"]');
    this.password = this.page.locator('//input[@id="password"]');
    this.loginButton = this.page.locator('//button[@id="login"]');
    this.LMSDisplayHomePage = this.page.locator("//span[normalize-space()='LMS - Learning Management System']");
    this.forgotPasswordLink = this.page.getByRole('link', { name: 'Forgot Password' });
    this.invalidCredentialErrMsg = this.page.locator("//*[@id='errormessage']");
    this.nullUsernameErrMsg = this.page.locator("//*[@id='mat-error-0']");
    this.nullPasswordErrMsg = this.page.locator("//*[@id='mat-error-1']");
    this.multipleCredentialErrMsgs = this.page.locator("//mat-error");
    this.formLoginToLMSText = this.page.locator("//form/p")
    this.image = this.page.locator("//img")

}

async launchApp(url) {
    await this.page.goto(url, { timeout: 60000 }, { waitUntil: 'load' });
}


async validLogin(username, password) {
    await this.userName.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
    await this.LMSDisplayHomePage.waitFor({timeout: 30000});
 }

 async validLoginChaining(username, password) {
    await this.userName.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
    await this.LMSDisplayHomePage.waitFor({timeout: 30000});
    return new HomePage(this.page);
}

async navigateBack() {
  const initialUrl = this.page.url();  // Capture the initial URL
  let responseStatus = null;
  let finalUrl = initialUrl;  // Initially, set the finalUrl to the same as initial URL

  // Trigger back navigation
  await this.page.goBack();

  // Return a Promise that listens for the response and URL change
  const result = await new Promise((resolve) => {
    // Listen for a response event and capture the status
    this.page.on('response', (response) => {
      responseStatus = response.status(); // Capture response status
    });

    // Listen for the URL change
    this.page.waitForURL((url) => {
      finalUrl = url;  // Set the finalUrl to the current URL
      return url !== initialUrl;  // URL should change from the initial URL
    }, { timeout: 5000 }).catch(() => {
      // If no navigation happens, resolve with the initial URL and 'No navigation'
      finalUrl = initialUrl;
      resolve({ responseStatus, finalUrl });
    });

    // If navigation happens, resolve with response status and final URL
    setTimeout(() => resolve({ responseStatus, finalUrl }), 5000);
  });

  return result;
}

 async entercredentials(username, password) {
  await this.userName.waitFor({timeout: 90000});
  await this.userName.fill(username);
  await this.password.fill(password);
  await this.clickLoginButton();
} 

async loginThroughKeyboard(username, password) {
  await this.userName.waitFor({timeout: 90000});
  await this.userName.pressSequentially(username, { delay: 100 });
  await this.password.pressSequentially(password, { delay: 100 });
  await this.page.keyboard.press('Enter');

  return new HomePage(this.page);
}

async loginThroughMouse(username, password) {
  await this.userName.waitFor({timeout: 90000});
  await this.userName.pressSequentially(username);
  await this.password.pressSequentially(password);
  await this.clickLoginButtonThroughMouse();
  return new HomePage(this.page);
}

async clickLoginButtonThroughMouse() {

  //https://playwright.dev/docs/api/class-elementhandle#element-handle-bounding-box
  const buttonBox = await this.loginButton.boundingBox();
  
  if (buttonBox) {
    const x = buttonBox.x + buttonBox.width / 2;
    const y = buttonBox.y + buttonBox.height / 2;
    
    // Perform the click using the mouse at calculated coordinates
    await this.page.mouse.click(x, y);
  }

}

async clickLoginButton() {
  await this.loginButton.click();
} 
 
async verifyHomePage(){
    await this.LMSDisplayHomePage.waitFor({timeout: 3000});
    expect(await this.LMSDisplayHomePage.isVisible()).toBeTruthy();
  }

async getInvalidCredentialText(){
    await this.invalidCredentialErrMsg.waitFor({timeout: 3000});
    let errMsg = await this.invalidCredentialErrMsg.textContent();
    return errMsg.trim();
  } 

async getNullErrTextFor(fieldName){

  let errMsg;

  if(fieldName.toLowerCase().trim() === 'username'){
    await this.nullUsernameErrMsg.waitFor({timeout: 3000});
    errMsg = await this.nullUsernameErrMsg.textContent().trim();
  }
  else{
    const count = await this.nullUsernameErrMsg.count();
    if (count > 0) {
      errMsg = await this.nullPasswordErrMsg.textContent();
      console.log(`err msg for null password = ${errMsg}`)
    }else{
      errMsg = null;
      console.log(`err msg for null password = ${errMsg}`)
    } 
  } 
    return errMsg;
  }  
  
  async getnullCredentialErrDetails(){
    await this.nullUsernameErrMsg.waitFor({timeout: 3000});
    let errList = await this.multipleCredentialErrMsgs.all();
    /**locator.all(): The all() method returns an array of all the matching elements for the locator. It resolves to a list of elements that can be interacted with. */
    //let errCount = errList.count();
    let errCount = errList.length; 
    /**errorMessages.length: This returns the number of elements in the errorMessages array. Since errorMessages is an array of locator elements, .length will give you the count of elements that match the locator //mat-error */   
    let errTextArray = [];

    for (const ele of errList){
      let textContent = await ele.textContent();
      errTextArray.push(textContent.trim())
    }

    let map = new Map();
    map.set("errCount", errCount);
    map.set("errTextArray", errTextArray);

    return map;
  }
  
  async getFormLoginText(){
    await this.formLoginToLMSText.waitFor({timeout: 5000});
    let formTitleText = await this.formLoginToLMSText.textContent();
    return formTitleText.trim();
  }


  async apiGETCall(urlText){
    const response = await this.page.request.get(urlText);
      // Log the content-type to check if it's JSON or HTML
      console.log("Response Content-Type:", response.headers()['content-type'])
      
        // Log the response status code
        console.log("Response Status:", response.status());    
    return response;
  }

  async getScreenshot(fullPageOrElementScreenshot, scenarioName){

    let screenshotPath = null;

    if(fullPageOrElementScreenshot.toLowerCase().trim().includes("full")){

      screenshotPath = 'test-screenshot/full_'+scenarioName+'.png';
      await this.page.screenshot({ path: screenshotPath, fullPage: true });
    }
    else{
      screenshotPath = 'test-screenshot/partial_'+scenarioName+'.png';
      await this.image.screenshot({ path: screenshotPath });
    }

    // Wait for 5 seconds (5000 milliseconds)
    await this.page.waitForTimeout(5000); 
    await this.page.goto("https://www.numpyninja.com/products", { waitUntil: 'load' });

    await this.page.waitForTimeout(5000); 
    await this.page.goto(CONFIG.BASE_URL, { waitUntil: 'load' });
    
    let map = new Map();
    map.set("pageRef", this.page);
    map.set("screenshotPath", screenshotPath);

    return map;
  }



}


