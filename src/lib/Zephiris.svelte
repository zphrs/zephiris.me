<script lang="ts">
	interface Props {
		capitalized?: boolean;
	}

	let { capitalized = true }: Props = $props();
	let z = $derived(capitalized ? 'Z' : 'z');
</script>

<span class="gilbert">
	<span class="masc">{z}e</span><span class="andro">phir</span><span class="fem">is</span>
</span>
