import { expect, test } from '@playwright/test';
import { getStrings } from './globals.js';

const pageName = 'home';
const strings = await getStrings(pageName);

test.beforeEach(async ({ page }) => {
	await page.goto('/');
});

test.describe('snapshot matches', () => {
	test('page', async ({ page }) => {
		expect.soft(await page.screenshot()).toMatchSnapshot('page.png');
	});

	test('settings', async ({ page }) => {
		await page.locator(`[title="${strings.settings}"]`).click();
		expect.soft(await page.screenshot()).toMatchSnapshot('settings.png');
	});

	test('info', async ({ page }) => {
		await page.locator(`[title="${strings.info}"]`).click();
		expect.soft(await page.screenshot()).toMatchSnapshot('info.png');
	});

	test.skip('share', async ({ page }) => {
		await page.locator(`[title="${strings.share}"]`).click();
		expect.soft(await page.screenshot()).toMatchSnapshot('share.png');
	});
});
