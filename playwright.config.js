const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  reporter: [
    ['list'],
    ['html', { open: 'never' }]
  ],

  use: {
    launchOptions: {
      slowMo: process.env.CI ? 500 : 0,
    },
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
});
