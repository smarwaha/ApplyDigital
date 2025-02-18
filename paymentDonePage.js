exports.PaymentDonePage = class PaymentDonePage {

    constructor(page) {

        this.page = page
        this.orderPlacedMsg = page.locator('#form > div > div > div > h2')      
    }    
}