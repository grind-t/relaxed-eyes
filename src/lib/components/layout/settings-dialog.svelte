<script lang="ts">
	import Dialog from '$lib/components/controls/dialog.svelte';
	import { page } from '$app/stores';

	const strings = {
		en: {
			title: 'Settings'
		},
		ru: {
			title: 'Настройки'
		}
	}[$page.params.locale];

	export let open = false;
</script>

<Dialog {open} modal on:cancel>
	<h2>{strings.title}</h2>
	<!--<label class="block">
		<span>{$t('common.useExercisesLabel')}</span>
		<input type="checkbox" />
	</label>
	<label class="block">
		<span>{$t('common.breakDurationLabel')}</span>
		<input type="text" />
	</label>
	<label class="block">
		<span>{$t('common.nextExerciseLabel')}</span>
		<select>
			<option>a</option>
			<option>b</option>
			<option>c</option>
		</select>
	</label>
	<label class="block">
		<span>{$t('common.alternateExercisesLabel')}</span>
		<input type="checkbox" />
	</label>
	<label class="block">
		<span>{$t('common.ttsVoiceLabel')}</span>
		<select>
			<option>a</option>
			<option>b</option>
			<option>c</option>
		</select>
	</label>
	<label class="block">
		<span>{$t('common.ttsVoiceSpeedLabel')}</span>
		<input type="range" />
	</label>-->
</Dialog>
