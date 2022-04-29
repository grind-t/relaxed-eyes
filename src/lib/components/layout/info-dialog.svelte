<script lang="ts">
	import { t } from '$lib/g11n/i18n';
	import Dialog from '$lib/components/controls/dialog.svelte';

	export let open = false;
</script>

<Dialog {open} modal on:cancel>
	<h2>{$t('common.info')}</h2>
</Dialog>
