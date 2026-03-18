<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

{@render children?.()}

<footer>
	<p>
		The font <a
			class="gilbert"
			target="_blank"
			rel="noreferrer"
			href="https://www.typewithpride.com/">Gilbert Bold</a
		>
		is licenced under the Creative Commons licence
		<a target="_blank" rel="noreferrer" href="https://creativecommons.org/licenses/by-sa/4.0/"
			>(CC BY-SA 4.0)</a
		>.
	</p>
</footer>

<style>
	a {
		color: var(--white);
		padding: 0.5rem 0.25rem;
		display: inline-block;
	}
	footer {
		font-size: 14px;
		padding: 0 var(--gap-2);
		border-top: 2px solid var(--violet-700);
	}

	footer > p {
		border-left: 2px solid var(--violet-700);
		border-right: 2px solid var(--violet-700);
		padding: 0 var(--gap-1);
		margin-top: 0;
		line-height: 0.6;
	}
</style>
