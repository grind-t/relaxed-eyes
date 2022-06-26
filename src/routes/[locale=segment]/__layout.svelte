<script>
	import Button from '$lib/components/controls/button.svelte';
	import SettingsIcon from '$lib/components/icons/settings-icon.svelte';
	import InfoIcon from '$lib/components/icons/info-icon.svelte';
	import ShareIcon from '$lib/components/icons/share-icon.svelte';
	import SettingsDialog from '$lib/components/layout/settings-dialog.svelte';
	import InfoDialog from '$lib/components/layout/info-dialog.svelte';
	import { page } from '$app/stores';

	const strings = {
		en: {
			settings: 'Settings',
			info: 'Info',
			share: 'Share'
		},
		ru: {
			settings: 'Настройки',
			info: 'Информация',
			share: 'Поделиться'
		}
	}[$page.params.locale];

	let areSettingsOpen = false;
	let isInfoOpen = false;
</script>

<div class="flex flex-col min-h-screen">
	<header class="flex-1 flex justify-end items-start space-x-3 p-4">
		<Button title={strings.settings} on:click={() => (areSettingsOpen = true)}>
			<SettingsIcon className="h-6 w-6 fill-black" />
		</Button>
		<Button title={strings.info} on:click={() => (isInfoOpen = true)}>
			<InfoIcon className="h-6 w-6 fill-black" />
		</Button>
		<Button title={strings.share}>
			<ShareIcon className="h-6 w-6 fill-black" />
		</Button>
	</header>

	<main class="flex-2">
		<slot />
	</main>
</div>

<SettingsDialog open={areSettingsOpen} on:cancel={() => (areSettingsOpen = false)} />
<InfoDialog open={isInfoOpen} on:cancel={() => (isInfoOpen = false)} />
