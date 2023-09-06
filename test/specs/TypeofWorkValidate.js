

import loginpage from "../pageobjects/ActLoginPage.js"
import homepage from "../pageobjects/ActiHomePage.js"
import validation from "../pageobjects/ActiTypeofWork.js"
import {expect} from 'chai'

describe("ActiTime",()=>{
    it("Admin Login",async()=>{
        
        await loginpage.openUrl();
            await browser.maximizeWindow();
            await loginpage.usernameEdt();
            await loginpage.passwordEdt();
            await loginpage.performClick();
            await browser.pause(3000);
            await homepage.homePagevalidate();
            await homepage.settingsPerformClick();
            await homepage.typeOfWorkPerformClick();
           
            //Type of work
            await validation.typeOfWorkValidate();
            //await browser.pause(3000);
         })
})