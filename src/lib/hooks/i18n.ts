import { supportedLocales, getSuitableLocale } from '$lib/i18n';
import type { Handle } from '@sveltejs/kit';

const routeRegex = new RegExp(/^\/[^.]*([?#].*)?$/);

export const i18n: Handle = ({ event, resolve }) => {
	const { url, request } = event;
	const { pathname } = url;

	if (!routeRegex.test(pathname)) return resolve(event);

	const locale = pathname.split('/', 2)[1];

	if (!supportedLocales.includes(locale)) {
		const suitableLocale = getSuitableLocale(request);
		return new Response(undefined, {
			headers: { location: `/${suitableLocale}${pathname}` },
			status: 301
		});
	}

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('<html>', `<html lang="${locale}">`)
	});
};
