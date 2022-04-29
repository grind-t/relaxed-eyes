<script lang="ts">
	import { t } from '$lib/g11n/i18n';
	import Dialog from '$lib/components/controls/dialog.svelte';

	export let open = false;
</script>

<Dialog {open} modal on:cancel>
	<h2>{$t('common.settings')}</h2>
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
