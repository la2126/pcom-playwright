import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './kiosk/tests',

  /* Run tests in files in parallel */
  //fullyParallel: true,

  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    trace: 'on-first-retry',
    
  },

  projects: [
    {
      name: 'kiosk',
      use: {
        ...devices['Desktop Edge'],
        channel: 'msedge',
        viewport: ({width: 1920, height: 1080}),
        baseURL: 'https://abg-kiosk-develop.vercel.app/',
        storageState: 'state.json'

      },
    },

  ],

});
