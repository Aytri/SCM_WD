import {expect} from 'chai'
class TypwOfWorkpage{
    
    get validateTypeOfWorkPage(){
        return $("//span[text()='Types of Work']")
    }

    
    async typeOfWorkValidate(){
           expect(await this.validateTypeOfWorkPage.waitForDisplayed()).to.be.true
             }
}
export default new TypwOfWorkpage()