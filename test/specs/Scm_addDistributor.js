describe("SCM",()=>{
    it("Add Distributor", async()=>{

        await browser.url("http://rmgtestingserver/domain/Supply_Chain_Management/");
        await browser.$("#login:username").setValue("admin");
        await browser.$("#login:password").setValue("admin123");
        const dropdown= await browser.$("#login:type")
        await dropdown.selectByVisibleText("Admin");
        await browser.$("//input[@value='Login']").click();
        await browser.pause(5000);
        


    })
})