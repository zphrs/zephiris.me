<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

{@render children?.()}

<style>
	:root {
		color-scheme: light dark;
	}

	@media (prefers-color-scheme: dark) {
		:root {
			background-color: #1a1a1a;
			color: #ffffff;
		}
	}

	@media (prefers-color-scheme: light) {
		:root {
			background-color: #ffffff;
			color: #000000;
		}
	}
</style>
