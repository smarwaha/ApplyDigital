import { faker } from '@faker-js/faker';
exports.PaymentPage = class PaymentPage {

    constructor(page) {

        this.page = page
        this.paymentHeader = page.locator('div.step-one > h2')         
        this.nameOnCardField = page.locator('#payment-form>div:nth-child(2)>div>input')
        this.cardNumField = page.locator('#payment-form>div:nth-child(3)>div>input')         
        this.cvcField = page.locator('input.card-cvc')
        this.cardMonthExpiry = page.locator('input.card-expiry-month')         
        this.cardYearExpiry = page.locator('input.card-expiry-year')
        this.submitBtn = page.locator('#submit')  

    }

    async enterPaymentDetails() {
        const cardDetails = {
            nameOnCard: faker.person.fullName(),
            cardNumber: faker.finance.creditCardNumber(),
            cvc: faker.finance.creditCardCVV(),
            expiryMonth: String(faker.number.int({ min: 1, max: 12 })).padStart(2, '0'),
            expiryYear: String(faker.number.int({ min: 2024, max: 2030 }))
        };
        await this.nameOnCardField.fill(cardDetails.nameOnCard);
        await this.cardNumField.fill(cardDetails.cardNumber);
        await this.cvcField.fill(cardDetails.cvc);
        await this.cardMonthExpiry.fill(cardDetails.expiryMonth);
        await this.cardYearExpiry.fill(cardDetails.expiryYear);
        await this.submitBtn.click();          
       
    }     
}