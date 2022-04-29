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
		const button = page.locator(`button[title="${strings.settings}"]`);
		const dialog = page.locator(`dialog:has-text("${strings.settings}")`);
		await button.click({ delay: 100 });
		await expect(dialog).toBeVisible();
		expect.soft(await page.screenshot()).toMatchSnapshot('settings.png');
	});

	test('info', async ({ page }) => {
		const button = page.locator(`button[title="${strings.info}"]`);
		const dialog = page.locator(`dialog:has-text("${strings.info}")`);
		await button.click({ delay: 100 });
		await expect(dialog).toBeVisible();
		expect.soft(await page.screenshot()).toMatchSnapshot('info.png');
	});

	test.skip('share', async ({ page }) => {
		const button = page.locator(`button[title="${strings.share}"]`);
	});
});
