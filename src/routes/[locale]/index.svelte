<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { t } from '$lib/translations';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div>
	<h1 class="text-3xl">{$t('home.greeting')}</h1>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
		min-height: 100vh;
	}
</style>
