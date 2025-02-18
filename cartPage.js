exports.CartPage = class CartPage {

    constructor(page) {

        this.page = page
        this.proceedCheckout = page.locator('a.check_out')         
        this.cartProducts = page.locator('#cart_info_table')
        this.loginLink = page.locator('div.modal-body > p:nth-child(2) > a')         
        this.cartProducts = page.locator('#.modal-dialog')

    }

    
}