exports.ProductDescriptionPage = class ProductDescriptionPage {

    constructor(page) {

        this.page = page
        this.productInformation = page.locator('.product-information')         
        this.quantity = page.locator('#quantity')
        this.addToCartBtn = page.locator('button.cart')         
        this.cartModal = page.locator('.modal-content')
        this.viewCartLink = page.locator('div.modal-body > p >a' )
        
    }     
    


}