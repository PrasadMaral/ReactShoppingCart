// @ts-check
import { defineConfig, devices } from '@playwright/test';


export default defineConfig(
  {
    testDir: './tests',
    
    fullyParallel: true, /* Run tests in files in parallel */
    
    forbidOnly: !!process.env.CI,   /* Fail the build on CI if you accidentally left test.only in the source code. */
    
    retries: process.env.CI ? 2 : 0,   /* Retry on CI only */
    
    workers: process.env.CI ? 1 : undefined, /* Opt out of parallel tests on CI. */
    
    reporter: 'html',

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use:
  {
    headless: false,
    baseURL: process.env.BASE_URL || 'https://react-shopping-cart-67954.firebaseapp.com/products',
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects:
  [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ]
});

