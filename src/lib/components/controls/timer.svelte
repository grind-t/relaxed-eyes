<script lang="ts">
	import PlayIcon from '$lib/components/icons/play-icon.svelte';
	import PauseIcon from '$lib/components/icons/pause-icon.svelte';
	import ResetIcon from '$lib/components/icons/reset-icon.svelte';
	import Button from '$lib/components/controls/button.svelte';
	import { page } from '$app/stores';

	const strings = {
		en: {
			start: 'Start timer',
			pause: 'Pause timer',
			reset: 'Reset timer'
		},
		ru: {
			start: 'Запустить таймер',
			pause: 'Остановить таймер',
			reset: 'Сбросить таймер'
		}
	}[$page.params.locale];

	export let label: string;
	export let className: string;

	let value = '00:00:00';
</script>

<div class={className}>
	<label class="space-y-2">
		<span class="inline-block w-full text-2xl text-center font-bold">{label}</span>
		<input
			bind:value
			type="text"
			size={value.length}
			class="block p-1 text-5xl text-center shadow-[0_0_1rem_gray] outline outline-0 outline-black hover:outline-2 focus:outline-2"
		/>
	</label>
	<div class="flex justify-center items-center mt-2">
		<Button title={strings.start}>
			<PlayIcon className="w-14 h-14" />
		</Button>
		<Button title={strings.pause}>
			<PauseIcon className="w-14 h-14" />
		</Button>
		<Button title={strings.reset}>
			<ResetIcon className="w-14 h-14 -mb-1 p-2" />
		</Button>
	</div>
</div>
