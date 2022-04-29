import { locales, getSuitableLocale } from '$lib/g11n/i18n';
import type { Handle } from '@sveltejs/kit';

const routeRegex = new RegExp(/^\/[^.]*([?#].*)?$/);

export const handle: Handle = async ({ event, resolve }) => {
	const { url, request } = event;
	const { pathname } = url;

	if (!routeRegex.test(pathname)) return resolve(event);

	const locale = pathname.split('/', 2)[1];

	if (!locales.get().includes(locale)) {
		const suitableLocale = getSuitableLocale(request);
		return new Response(undefined, {
			headers: { location: `/${suitableLocale}${pathname}` },
			status: 301
		});
	}

	return await resolve(event, {
		transformPage: ({ html }) => html.replace('<html>', `<html lang="${locale}">`)
	});
};
