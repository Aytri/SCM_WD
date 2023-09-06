import {expect} from 'chai'
describe('first Script',()=>{
    it('it should run', async()=>{
        await browser.url("https://www.globalsqa.com/demo-site/");
        await browser.maximizeWindow();
        await browser.$("//li[@id='menu-item-2822']").moveTo();
        
        await browser.$("//span[text()='Sample Page Test']").click();
        await browser.pause(3000);

        // const filepath="C:/Users/user/Downloads/L-11.jpg"
        // const relativepath=await browser.uploadFile(filepath);
        // await browser.$("//input[@name='file-553']").setValue(relativepath);

        await browser.$("//input[@class='name']").addValue("ashish");
        await browser.pause(3000);
        await browser.$("//input[@type='email']").addValue("ashi@gmail.com");
       const dropdown = await browser.$('#g2599-experienceinyears');
       dropdown.selectByAttribute('value','5-7');
       //dropdown.click();
       
       await browser.scroll(0,400);
       
       await browser.$("//input[@value='Automation Testing']").click();
        const radiobuttons=await $$('.grunion-radio-label');
        const gradRadio=radiobuttons[0]
        await gradRadio.click();
        //await browser.$("//input[@value='Graduate']").click();
       
       await browser.$("//button[text()='Alert Box : Click Here']").click();
       expect(browser.isAlertOpen()).to.be.true
        await browser.acceptAlert();
        let alert=await browser.getAlertText();
        
        console.log(alert);
        await browser.acceptAlert();
        await browser.$("//textarea[@class='textarea']").addValue(alert)
        await browser.pause(3000);
        await browser.$("//button[text()='Submit']").click();
        console.log(await browser.getTitle());
        await expect(await expect(browser).toHaveTitle("Sample Page Testing Site Online - Global SQA Testing Sites")).to.be.true
         await browser.$("//div[@id='contact-form-2599']").saveScreenshot('./screenshot/ss.png');
         await browser.saveScreenshot('./screenshot/ss1.png')

 })
    xit("drag and drop",async()=>{
        await browser.url("https://www.globalsqa.com/demo-site/");
        await browser.maximizeWindow();
        await $("#menu-item-2822").moveTo();
        await $("#menu-item-2823").moveTo();
        await $("//span[text()='Drag And Drop']").waitForExist();
        await $("//span[text()='Drag And Drop']").click();
        await browser.pause(3000);
        await $("//li[@id='Accepted Elements']").waitForExist();
        await expect(browser).toHaveUrlContaining("Accepted");
        await $("//li[@id='Accepted Elements']").click();
        await browser.pause(5000)
        const frame= await browser.$("//div[@class='single_tab_div resp-tab-content resp-tab-content-active']//iframe[@class='demo-frame lazyloaded']");
        await browser.switchToFrame(frame);
        await browser.pause(3000);
        let drag=await $("//div[@id='draggable']");
        let drop=await $("//div[@id='droppable']");
        await drag.dragAndDrop(drop);
        await browser.pause(3000);
         })
})
xit("window handle",async()=>{
    await browser.url("https://www.globalsqa.com/demo-site/");
    await browser.maximizeWindow();
    await $("#menu-item-2822").moveTo();
    //await browser.pause(3000)
    await $("#menu-item-2823").moveTo();
    //await browser.pause(3000)
    await $("#menu-item-2999").click();
    await browser.pause(3000);
    //await $("//li[@id='Open New Window']").waitForExist;
    await $("//li[@id='Open New Window']").click();
    await browser.pause(3000)
    await $("//div[@class='single_tab_div resp-tab-content resp-tab-content-active']//a[text()='Click Here']").click();

 })
