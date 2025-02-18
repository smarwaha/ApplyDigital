import { faker } from '@faker-js/faker';
exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page
        this.nameSignup = page.getByRole('textbox', { name: 'Name' })
        this.emailSignup = page.locator('div.signup-form > form > input:nth-child(3)')
        this.signupBtn = page.locator('div.signup-form > form > button')
        this.signupHeader = page.locator('.signup-form')
    }
   
    async fillSignupForm() {
        const userData = {
            name: faker.person.fullName(),
            email: faker.internet.email(),
          };
        await this.nameSignup.fill(userData.name);
        await this.emailSignup.fill(userData.email);
        await this.signupBtn.click();        
    }
}