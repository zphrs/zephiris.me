<script>
	import Audio from '$lib/Audio.svelte';
</script>

<ul>
	<li>
		<span class="masc gilbert"> <Audio src="/audio/zeph.wav">Zeph</Audio></span>
		<p class="agender">For when I seem more <span class="masc">masculine</span></p>
	</li>
	<li>
		<span class="fem gilbert"> <Audio src="/audio/iris.wav">Iris</Audio></span>
		<p class="agender">For when I seem more <span class="fem">feminine</span></p>
	</li>
	<li class="phire">
		<span class="andro gilbert">
			<Audio src="/audio/phire.wav"><span class="andro">Phire</span></Audio></span
		>
		<p class="agender">For when I seem more <span class="andro">androgynous</span></p>
	</li>
</ul>

<style>
	ul {
		list-style: none;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		margin-top: var(--gap-1);
	}
	li {
		padding: var(--gap-0-5);
		outline: 2px solid var(--violet);
		outline-offset: -1px;
		flex-grow: 1;
		width: 300px;
		text-align: center;
	}

	li > p {
		margin: 0;
		padding-top: 0.5rem;
		padding-bottom: 0.25rem;
		text-align: left;
		padding-left: 2rem;
	}
</style>
