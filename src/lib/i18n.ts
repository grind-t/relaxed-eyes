export const supportedLocales = ['en', 'ru'];
export const defaultLocale = supportedLocales[0];

function parseAcceptLanguageEntry(entry: string): [string, number] {
	const [locale, quality] = entry.split(';');
	return [locale, quality ? Number(quality.split('=')[1]) : 1];
}

export function getSuitableLocale(request: Request): string {
	const header: string = request.headers.get('accept-language') || '';
	const preferredLocales = header.split(/,\s*/).map(parseAcceptLanguageEntry);
	let result = defaultLocale;
	let resultQuality = -1;
	for (const [locale, quality] of preferredLocales) {
		if (quality > resultQuality && supportedLocales.includes(locale)) {
			result = locale;
			resultQuality = quality;
		}
	}
	return result;
}
