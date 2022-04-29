<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Timer from '$lib/components/controls/timer.svelte';
	import { t } from '$lib/g11n/i18n';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<Timer label={$t('home.timerLabel')} class="w-fit mx-auto" />
