describe("ActiTime",()=>{
    it("Admin Login",async()=>{

            await browser.url("https://demo.actitime.com/login.do");
            await browser.maximizeWindow();
            await browser.$("//input[@name='username']").setValue("admin");
            await browser.$("//input[@name='pwd']").setValue("manager");
             await browser.$("//div[text()='Login ']").click();

             await browser.pause(5000);
             await browser.$(".popup_menu_button_settings").click();
             await browser.$("//a[text()='Types of Work']").click();
             //await browser.pause(5000);
            // Create Type of work
            await $("//span[text()='Create Type of Work']").click();
            await browser.pause(5000);
            await $('#name').setValue("abc"+Math.random());
            
            
            await $("//input[contains(@value,'Create Type of Work')]").click();
            await browser.pause(5000);
            })
})