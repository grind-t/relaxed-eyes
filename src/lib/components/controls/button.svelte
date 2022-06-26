<script lang="ts">
	export let title = '';
	export let className = '';
</script>

<button
	type="button"
	{title}
	class="transition-transform duration-300 active:transition-none active:scale-90 {className}"
	on:click
>
	<slot />
</button>
