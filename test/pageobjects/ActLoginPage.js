class AloginPage{

    openUrl(){
         return browser.url("https://demo.actitime.com/login.do");
 }
 get userName(){
    return $("//input[@name='username']")
 }
 get password(){
    return $("//input[@name='pwd']")
 }
 get LoginButton(){
    return $("//div[text()='Login ']")
 }
 async usernameEdt(){
    await this.userName.setValue("admin")
 }
 async passwordEdt(){
    await this.password.setValue("manager")
 }
 async performClick(){
    await this.LoginButton.click()
 }

}
export default new AloginPage()
