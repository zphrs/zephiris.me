<script lang="ts">
	import './styles/reset.css';
	import './styles/global.css';
	import './styles/genders.css';
	import './styles/scrollbar.css';
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();
</script>

{@render children?.()}
