// @ts-check
import { defineConfig, devices } from '@playwright/test';
/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  timeout: 150 *1000,
  expect : {
    timeout: 160000,
  },
  reporter:  'html',  
  workers: 2,

  /* Run tests in files in parallel */ 
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 15000000,
    navigationTimeout: 190000000,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  } 
  
});
module.exports = config

