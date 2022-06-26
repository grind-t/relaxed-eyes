<script lang="ts">
	import { page } from '$app/stores';
	import Dialog from '$lib/components/controls/dialog.svelte';

	const strings = {
		en: {
			title: 'Info'
		},
		ru: {
			title: 'Информация'
		}
	}[$page.params.locale];

	export let open = false;
</script>

<Dialog {open} modal on:cancel>
	<h2>{strings.title}</h2>
</Dialog>
