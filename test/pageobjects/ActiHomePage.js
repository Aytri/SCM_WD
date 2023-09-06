
import {expect} from 'chai'
class ToW{
    get validateHomepage(){
        return $("//td[text()='Enter Time-Track']")
    }

    get settingsedt(){
         return $("//div[@class='popup_menu_button popup_menu_button_settings ']");
    }

    get typeOfworkEdt(){
        return $("//a[text()='Types of Work']");
    }

    async homePagevalidate(){
        expect(await this.validateHomepage.waitForDisplayed()).to.be.equal('Enter Time-Track')
          }
    async settingsPerformClick(){
        await this.settingsedt.click();
    }
    async typeOfWorkPerformClick(){
        (await this.typeOfworkEdt).click();
    }
    
}
export default new ToW()