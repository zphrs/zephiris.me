<script>
	import Audio from '$lib/AudioPlayer.svelte';
</script>

<ol class="main">
	<li>
		<span class="masc gilbert"><Audio inline title="Zeph" src="/audio/zeph.wav">Zeph</Audio></span>
		<span class="fira masc"> -> </span> For when I seem more <span class="masc">masculine</span>
	</li>
	<li>
		<span class="fem gilbert"> <Audio inline title="Iris" src="/audio/iris.wav">Iris</Audio></span>
		<span class="fira fem">~></span> For when I seem more <span class="fem">feminine</span>
	</li>
	<li class="phire">
		<span class="andro gilbert">
			<Audio inline title="Phire" src="/audio/phire.wav"><span class="andro">Phire</span></Audio
			></span
		>
		<span class="fira andro">{'-~'}</span> For when I seem more
		<span class="andro">androgynous</span>
	</li>
</ol>

<style>
	ol {
		list-style: none;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		margin-top: var(--gap-1);
	}
	.main > li {
		padding: var(--gap-0-5);
		outline: 2px solid var(--violet-700);
		outline-offset: -1px;
		flex-grow: 1;
		width: 300px;
		text-align: center;
	}
</style>
