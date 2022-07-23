import { devices } from '@playwright/test';
import { env } from 'process';
import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	use: {
		baseURL: env.PREVIEW_URL || 'http://localhost:3000',
		trace: 'retain-on-failure',
		video: 'retain-on-failure'
	},
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] }
		},
		{
			name: 'firefox',
			use: { ...devices['Desktop Firefox'] }
		},
		{
			name: 'webkit',
			use: { ...devices['Desktop Safari'] }
		}
	],
	expect: {
		toMatchSnapshot: {
			maxDiffPixels: 100
		}
	},
	fullyParallel: true
};

export default config;
