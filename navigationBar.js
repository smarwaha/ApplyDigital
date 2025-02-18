exports.NavigationBar= class NavigationBar {

    constructor(page) {

        this.page = page
        this.productsLink = page.locator('a[href="/products"]')
        this.logoutLink = page.locator('a[href="/logout"]')
        this.cartLink = page.locator('a[href="/view_cart"]')       
    }
    

    async navigateToProducts() { 
        await this.productsLink.click();
        
    }
    
}