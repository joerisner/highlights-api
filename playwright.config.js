import { defineConfig } from '@playwright/test';
import { config } from 'dotenv';
config();

export default defineConfig({
  fullyParallel: true,
  outputDir: './test/api/test-results',
  reporter: process.env.CI ? 'github' : [['list'], ['html', { open: 'never', outputFolder: './test/api/report' }]],
  retries: 0,
  testDir: './test/api',
  timeout: 10000,
  use: {
    baseURL: `http://localhost:${process.env.PORT}`,
    extraHTTPHeaders: { Accept: 'application/json' }, // Headers sent with every request
    trace: 'retain-on-failure'
  },
  webServer: {
    command: 'npm start',
    port: process.env.PORT,
    reuseExistingServer: !process.env.CI,
    timeout: 12000
  },
  workers: process.env.CI ? 1 : undefined // Opt out of parallel workers in CI
});
