<script context="module" lang="ts">
	import { loadTranslations } from '$lib/translations';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ url, params }) => {
		const { pathname } = url;
		const { locale } = params;
		const route = pathname.slice(locale.length + 1) || '/';
		await loadTranslations(locale, route);
		return {};
	};
</script>

<slot />
