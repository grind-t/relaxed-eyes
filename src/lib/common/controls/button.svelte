<button
	type="button"
	title={$$props.title}
	on:click
	class="transition-transform duration-300 active:transition-none active:scale-90 {$$props.class}"
>
	<slot />
</button>
