import i18n from 'sveltekit-i18n';
import type { Config } from 'sveltekit-i18n';

export const defaultLocale = 'en';

export const config: Config = {
	loaders: [
		{
			locale: 'en',
			key: 'home',
			routes: ['/'],
			loader: async () => (await import('./en/home.json')).default
		},
		{
			locale: 'ru',
			key: 'home',
			routes: ['/'],
			loader: async () => (await import('./ru/home.json')).default
		}
	]
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);

function parseAcceptLanguageEntry(entry: string): [string, number] {
	const [locale, quality] = entry.split(';');
	return [locale, quality ? Number(quality.split('=')[1]) : 1];
}

export function getSuitableLocale(request: Request): string {
	const header: string = request['accept-language'] || '';
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
