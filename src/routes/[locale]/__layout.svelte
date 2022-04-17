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

<script>
	import Button from '$lib/components/controls/button.svelte';
	import SettingsIcon from '$lib/components/icons/settings-icon.svelte';
	import InfoIcon from '$lib/components/icons/info-icon.svelte';
	import ShareIcon from '$lib/components/icons/share-icon.svelte';
	import { t } from '$lib/translations';
</script>

<header class="flex-1 flex justify-end items-start space-x-3 p-4">
	<Button title={$t('common.settings')}>
		<SettingsIcon class="h-6 w-6 fill-black" />
	</Button>
	<Button title={$t('common.info')}>
		<InfoIcon class="h-6 w-6 fill-black" />
	</Button>
	<Button title={$t('common.share')}>
		<ShareIcon class="h-6 w-6 fill-black" />
	</Button>
</header>

<main class="flex-2">
	<slot />
</main>
