<script lang="ts">
	import PlayIcon from '$lib/components/icons/play-icon.svelte';
	import PauseIcon from '$lib/components/icons/pause-icon.svelte';
	import ResetIcon from '$lib/components/icons/reset-icon.svelte';
	import Button from '$lib/components/controls/button.svelte';
	import { t } from '$lib/g11n/i18n';

	export let label: string;

	let value = '00:00:00';
</script>

<div class={$$props.class}>
	<label class="space-y-2">
		<span class="inline-block w-full text-2xl text-center font-bold">{label}</span>
		<input
			type="text"
			bind:value
			class="block w-48 p-1 text-5xl text-center shadow-[0_0_1rem_gray] outline outline-0 outline-black hover:outline-2 focus:outline-2"
		/>
	</label>
	<div class="flex justify-center items-center mt-2">
		<Button title={$t('common.timer.start')}>
			<PlayIcon class="w-14 h-14" />
		</Button>
		<Button title={$t('common.timer.pause')}>
			<PauseIcon class="w-14 h-14" />
		</Button>
		<Button title={$t('common.timer.reset')}>
			<ResetIcon class="w-14 h-14 -mb-1 p-2" />
		</Button>
	</div>
</div>
