<script context="module" lang="ts">
	import { loadTranslations } from '$lib/g11n/i18n';
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
	import SettingsDialog from '$lib/components/layout/settings-dialog.svelte';
	import InfoDialog from '$lib/components/layout/info-dialog.svelte';
	import { t } from '$lib/g11n/i18n';

	let areSettingsOpen = false;
	let isInfoOpen = false;
</script>

<div class="flex flex-col min-h-screen">
	<header class="flex-1 flex justify-end items-start space-x-3 p-4">
		<Button title={$t('common.settings')} on:click={() => (areSettingsOpen = true)}>
			<SettingsIcon class="h-6 w-6 fill-black" />
		</Button>
		<Button title={$t('common.info')} on:click={() => (isInfoOpen = true)}>
			<InfoIcon class="h-6 w-6 fill-black" />
		</Button>
		<Button title={$t('common.share')}>
			<ShareIcon class="h-6 w-6 fill-black" />
		</Button>
	</header>

	<main class="flex-2">
		<slot />
	</main>
</div>

<SettingsDialog open={areSettingsOpen} on:cancel={() => (areSettingsOpen = false)} />
<InfoDialog open={isInfoOpen} on:cancel={() => (isInfoOpen = false)} />
