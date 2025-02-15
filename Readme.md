# Automation Exercise Website -Shopping Flow

Automated testing framework for Automation Exercise Website. This suite utilizes playwrigt JavaScript testing framework seeks fake data from faker library, following the Page Object Model (POM) design pattern.

## Table of Contents
- [Architecture](#architecture)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Framework Structure](#framework-structure)


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

