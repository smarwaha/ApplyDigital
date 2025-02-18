exports.AccountCreatedPage = class AccountCreatedPage {

    constructor(page) {
        this.page = page
        this.accountCreatedHeader = page.locator('#form > div > div > div > h2')         
        this.continueBtn = page.locator('.btn-primary')                
    }     
    
}