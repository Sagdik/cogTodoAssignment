import { defineConfig } from '@playwright/test';

export default defineConfig({

  use: {
    browserName: 'chromium',
    headless: true,
    trace:'on',
    baseURL: 'https://todomvc.com/examples/react/dist/', 
    screenshot: 'only-on-failure',
    video: 'on-first-retry',
    actionTimeout: 15000, // Timeout for actions like clicks, fills, etc.
    navigationTimeout: 30000, // Timeout for page navigations
   
  },
  timeout:600000,
  reporter: [
    ['list'], // Console output
    ['html', { outputFolder: 'playwright-report', open: 'never' }], // HTML report
    ['json', { outputFile: 'report.json' }], // JSON report
    ['junit', { outputFile: 'junit-report.xml' }] // JUnit report (for CI integration)
  ],
});
