import { test } from '@playwright/test';
import { chromium } from 'playwright-core';
test.describe('Homepage Accessibility check', () => {
  test('should pass Lighthouse accessibility audit', async () => {
    // Launch the browser instance
    //const browser = await chromium.launch();
    const browser = await chromium.launch({
      args: ['--remote-debugging-port=9222'],
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://automationexercise.com/");      
    const { playAudit } = await import('playwright-lighthouse');
    const fetch = (await import('node-fetch')).default;

    globalThis.fetch = fetch;
    await playAudit({
      page: page,
      thresholds: {
        performance: 50,
        accessibility: 100,
        "best-practices": 100,
        seo: 100
      },
      port: 9222
    });

    await browser.close();
  });
});


