import { defineConfig } from '@playwright/test';
const PORT = 4000; // NOTE: Remove this once Playwright is on Node v20.6.0+

export default defineConfig({
  fullyParallel: true,
  outputDir: './test/api/test-results',
  reporter: process.env.CI ? 'github' : [['list'], ['html', { open: 'never', outputFolder: './test/api/report' }]],
  retries: 0,
  testDir: './test/api',
  timeout: 10000,
  use: {
    baseURL: `http://localhost:${PORT}`,
    extraHTTPHeaders: { Accept: 'application/json' }, // Headers sent with every request
    trace: 'retain-on-failure'
  },
  webServer: {
    // NOTE: Update this to a simple `npm start' once Playwright is on Node v20.6.0+
    command: `PORT=${PORT} node src/server.js`,
    port: PORT,
    reuseExistingServer: !process.env.CI,
    timeout: 12000
  },
  workers: process.env.CI ? 1 : undefined // Opt out of parallel workers in CI
});
