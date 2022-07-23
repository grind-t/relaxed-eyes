import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
});

test.describe('snapshot matches', () => {
	test('page', async ({ page }) => {
		expect.soft(await page.screenshot()).toMatchSnapshot('page.png');
	});

	test('settings', async ({ page }) => {
		const button = page.locator(`button[title="Settings"]`);
		const dialog = page.locator(`dialog:has-text("Settings")`);
		await button.click({ delay: 500 });
		await expect(dialog).toBeVisible();
		expect.soft(await page.screenshot()).toMatchSnapshot('settings.png');
	});

	test('info', async ({ page }) => {
		const button = page.locator(`button[title="Info"]`);
		const dialog = page.locator(`dialog:has-text("Info")`);
		await button.click({ delay: 500 });
		await expect(dialog).toBeVisible();
		expect.soft(await page.screenshot()).toMatchSnapshot('info.png');
	});

	/*test.skip('share', async ({ page }) => {
		const button = page.locator(`button[title="${strings.share}"]`);
	});*/
});
