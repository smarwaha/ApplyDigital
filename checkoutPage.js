import { faker } from '@faker-js/faker';
exports.CheckoutPage = class CheckoutPage {

    constructor(page) {

        this.page = page        
        this.placeOrderBtn = page.locator('a.check_out')
        
    }
   
}