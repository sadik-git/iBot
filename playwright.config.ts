import { en } from '@faker-js/faker';
import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  reportSlowTests: null,
  timeout: 1000 * 60 * 2, //10 minutes
  use: {
    //video: 'on',
    screenshot: 'only-on-failure',
    //trace: 'on',
  },
  reporter: [['html', { open: 'never' }],
              ['allure-playwright',
                {
                  detail: true,
                  outputDir: 'allure-results',
                  environmentInfo: {
                    OS: process.platform,
                    NODE_VERSION: process.version,
                  },                  
                }]],
    projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

     {
       name: 'firefox',
       use: { ...devices['Desktop Firefox'] },
     },

     {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
     },

     {
       name: 'MSEdge',
       use: { ...devices['Desktop Edge'], channel: 'msedge' }, // or "msedge-beta" or 'msedge-dev'
     },
  ],
}
export default config;