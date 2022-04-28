<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { dialogDisplay } from './dialog-actions';

	export let open = false;
	export let modal = false;

	const dispatch = createEventDispatcher();

	function handleClick({ currentTarget, clientX: x, clientY: y }: MouseEvent) {
		const element = currentTarget as HTMLElement;
		const { top, right, bottom, left } = element.getBoundingClientRect();
		const outside = x < left || x > right || y < top || y > bottom;
		if (outside) dispatch('cancel');
	}

	function handleCanel(e: Event) {
		e.preventDefault();
		dispatch('cancel');
	}
</script>

<dialog
	use:dialogDisplay={{ open, modal }}
	on:click={handleClick}
	on:cancel={handleCanel}
	class="bg-white rounded-md"
>
	<slot />
</dialog>
