# Automation Exercise Website -Shopping Flow

Automated testing framework for Automation Exercise Website. This suite utilizes playwrigt JavaScript testing framework seeks fake data from faker library, following the Page Object Model (POM) design pattern.

## Table of Contents
- [Framework Selection](#framework-selection)
- [Architecture](#architecture)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Framework Structure](#framework-structure)


## Framework Selection
Framework Selection: Playwright

After careful consideration, I recommend selecting Playwright as the automation framework for our project. Here's a brief justification for my choice:

Ease of Use:

Playwright provides a simple and intuitive API, making it easy to write automated tests. Its syntax is concise and readable, allowing developers to focus on the test logic rather than the underlying implementation.

Community Support:

Playwright has a rapidly growing community, with a strong presence on GitHub, Stack Overflow, and other online platforms. This ensures that there are plenty of resources available for learning and troubleshooting.

Testing Features:

Playwright offers a wide range of testing features, including:

1. Multi-browser support: Playwright supports automated testing on multiple browsers, including Chromium, Firefox, and WebKit.
2. Fast and reliable: Playwright is designed for speed and reliability, making it ideal for large-scale automated testing.
3. Built-in waiting mechanisms: Playwright provides built-in waiting mechanisms, such as waitForSelector and waitForFunction, which simplify the process of waiting for elements to appear or become interactive.
4. Network traffic manipulation: Playwright allows you to manipulate network traffic, enabling you to test scenarios that involve network failures or slow connections.
5. Visual testing: Playwright provides built-in support for visual testing, allowing you to verify the visual appearance of your application.

Additional Benefits:

1. Cross-platform compatibility: Playwright tests can run on multiple platforms, including Windows, macOS, and Linux.
2. Integration with popular testing frameworks: Playwright can be used with popular testing frameworks like Jest, Mocha, and Pytest.

## Architecture

The test suite implements the Page Object Model (POM) pattern, providing:
- Improved test maintenance
- Reduced code duplication
- Better separation of concerns
- Enhanced readability

## Prerequisites

Before running the tests, ensure you have the following installed:
- Node.js (Latest LTS version recommended)
- npm (Node Package Manager)

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

## Running Tests

Execute individual test suites using the following commands:

```bash
# Run e2e product purchase flow which runs on both desktop and mobile devices
npx playwright test product.purchase.spec.js

# Run performance/accessibility check on homepage of the shopping website
 npx playwright test accessibility.spec.js

## Framework Structure
Framework is designed using Page object model where pages file contains locators and respective methods and test folder conatins the actual tests.
  Pages:
1.accountCreatedPage.js
2.cartPage.js
3.checkoutPage.js
4.loginPage.js
5.navigationBar.js
6.paymentDonePage.js
7.paymentPage.js
8.productDescriptionPage.js
9.productPage.js
10. signupPage.js
   tests
1.homepage.accessibility.spec.js
2.product.purchase.spec.js

