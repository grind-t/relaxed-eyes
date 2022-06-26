<script lang="ts">
	import { page } from '$app/stores';

	import Timer from '$lib/components/controls/timer.svelte';

	const strings = {
		en: {
			timerLabel: 'Waiting time'
		},
		ru: {
			timerLabel: 'Перерыв через'
		}
	}[$page.params.locale];
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<Timer label={strings.timerLabel} className="w-fit mx-auto" />
