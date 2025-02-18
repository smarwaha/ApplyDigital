import { test, expect, devices as playwrightDevices } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { NavigationBar } from '../Pages/navigationBar';
import { ProductPage } from '../Pages/productPage';
import { ProductDescriptionPage } from '../Pages/productDescriptionPage';
import { LoginPage } from '../Pages/loginPage';
import { CartPage } from '../Pages/cartPage';
import { SignupPage } from '../Pages/signupPage';
import { AccountCreatedPage } from '../Pages/accountCreatedPage';
import { CheckoutPage } from '../Pages/checkoutPage';
import { PaymentPage } from '../Pages/paymentPage';
import { PaymentDonePage } from '../Pages/paymentDonePage';


const devices = [
  {
    name: 'Desktop Chrome',
    viewport: { width: 1280, height: 720 }
  },
  {
    name: 'Mobile Chrome',
    ...playwrightDevices['Pixel 5']
  }
];

for (const device of devices) {
  test.describe(`E2E Shopping Flow - ${device.name}`, () => {
    test.beforeEach(async ({ page }) => {
      if (device.name === 'Desktop Chrome') {
        await page.setViewportSize(device.viewport);
      }
    });

    test('Product Purchase Flow', async ({ page }) => {
      const Navigation = new NavigationBar(page)
      const Product = new ProductPage(page)
      const ProductDescription = new ProductDescriptionPage(page)
      const Login = new LoginPage(page)
      const Cart = new CartPage(page)
      const Signup = new SignupPage(page)
      const AccCreated = new AccountCreatedPage(page)
      const Checkout = new CheckoutPage(page)
      const Payment = new PaymentPage(page)
      const PaymentDone = new PaymentDonePage(page)

      await page.goto('https://automationexercise.com/');
      await expect(page).toHaveTitle("Automation Exercise");
      await Navigation.navigateToProducts();
      await expect(Product.featureProducts).toBeVisible();
      await page.goto('https://automationexercise.com/product_details/3');      
      const randomQuantity = faker.number.int({ min: 1, max: 20 });
      await ProductDescription.quantity.click(); // Select all text
      await page.keyboard.press('Backspace'); // Delete selected text
      await ProductDescription.quantity.fill(randomQuantity.toString());
      await ProductDescription.addToCartBtn.click();
      await expect(ProductDescription.cartModal).toBeVisible();
      await ProductDescription.viewCartLink.click();
      await Cart.proceedCheckout.click();
      await Cart.loginLink.click();
      await expect(Login.signupHeader).toBeVisible();
      await Login.fillSignupForm();
      await Signup.fillAccountInfo();
      await expect(AccCreated.accountCreatedHeader).toBeVisible();
      await Navigation.cartLink.click();
      await Cart.proceedCheckout.click();
      await Checkout.placeOrderBtn.click();
      await expect(Payment.paymentHeader).toBeVisible();
      await Payment.enterPaymentDetails();
      await expect(PaymentDone.orderPlacedMsg).toBeVisible();
    });
  });

}
  