import { faker } from '@faker-js/faker';
exports.SignupPage = class SignupPage {

    constructor(page) {

        this.page = page
        this.signupForm = page.locator('.login-form')         
        this.passwordField = page.locator('#password')
        this.fnameField = page.locator('#first_name')         
        this.lnameField = page.locator('#last_name')
        this.addressField = page.locator('#address1')         
        this.stateField = page.locator('#state')
        this.cityField = page.locator('#city')         
        this.zipcode = page.locator('#zipcode')
        this.mnumberField = page.locator('#mobile_number')         
        this.createAccountBtn = page.locator('div.login-form > form > button')

    }

    async fillAccountInfo() {
        const userData = {            
            password: faker.internet.password(),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            company: faker.company.name(),
            address: faker.location.streetAddress(),           
            state: faker.location.state(),
            city: faker.location.city(),
            zipcode: faker.location.zipCode(),
            mobileNumber: faker.phone.number()
          };
        await this.passwordField.fill(userData.password);
        await this.fnameField.fill(userData.firstName);
        await this.lnameField.fill(userData.lastName);
        await this.addressField.fill(userData.address);
        await this.stateField.fill(userData.state);
        await this.cityField.fill(userData.city);
        await this.zipcode.fill(userData.zipcode);
        await this.mnumberField.fill(userData.mobileNumber);
        await this.createAccountBtn.click();        
        
    }    
}