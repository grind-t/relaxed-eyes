import i18n from 'sveltekit-i18n';
import type { Config } from 'sveltekit-i18n';

export const defaultLocale = 'en';

export const config: Config = {
	loaders: [
		{
			locale: 'en',
			key: 'common',
			loader: async () => (await import('./l10n/common/en.json')).default
		},
		{
			locale: 'ru',
			key: 'common',
			loader: async () => (await import('./l10n/common/ru.json')).default
		},
		{
			locale: 'en',
			key: 'home',
			routes: ['/'],
			loader: async () => (await import('./l10n/home/en.json')).default
		},
		{
			locale: 'ru',
			key: 'home',
			routes: ['/'],
			loader: async () => (await import('./l10n/home/ru.json')).default
		}
	]
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);

function parseAcceptLanguageEntry(entry: string): [string, number] {
	const [locale, quality] = entry.split(';');
	return [locale, quality ? Number(quality.split('=')[1]) : 1];
}

export function getSuitableLocale(request: Request): string {
	const header: string = request.headers.get('accept-language') || '';
	const preferredLocales = header.split(/,\s*/).map(parseAcceptLanguageEntry);
	const supportedLocales = new Set(locales.get());
	let result = defaultLocale;
	let resultQuality = -1;
	for (const [locale, quality] of preferredLocales) {
		if (quality > resultQuality && supportedLocales.has(locale)) {
			result = locale;
			resultQuality = quality;
		}
	}
	return result;
}