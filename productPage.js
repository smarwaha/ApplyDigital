exports.ProductPage = class ProductPage {

    constructor(page) {

        this.page = page
        this.featureProducts = page.locator('.features_items')         
        this.productInformation = page.locator('.product-information')
    }

    
}