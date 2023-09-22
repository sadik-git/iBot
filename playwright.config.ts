import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  reportSlowTests: null,
  timeout: 1000 * 60 * 2, //10 minutes
   use: {
     //video: 'on',
     screenshot: 'only-on-failure',
     //trace: 'on',
   },
}
export default config;