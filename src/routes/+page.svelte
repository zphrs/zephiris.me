<script>
	import Audio from '$lib/Audio.svelte';
	import Plugs from '$lib/Plugs.svelte';
	import Zephiris from '$lib/Zephiris.svelte';
	import Nicknames from './Nicknames.svelte';
</script>

<svelte:head>
	<meta property="og:title" content="Zephiris.Me" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://zephiris.me" />
	<meta property="og:image" content="https://zephiris.me/og-image.png" />
	<meta property="og:description" content="Learn about my name!" />
</svelte:head>

<p>
	My preferred name is <Audio inline src="audio/zephiris.wav"><Zephiris /></Audio> and my preferred pronouns are
	<span class="andro">they/them</span>. I am a full stack programmer currently studying @ UCSC. My
	former name, a name which I loved, is <span class="masc gilbert">Zephyr</span>. That said, I am
	changing it because <span class="masc gilbert">Zephyr</span> has a bit of a
	<span class="masc"> masculine</span>
	connotation. Since I am <span class="andro">nonbinary</span> I prefer a name which mixes
	<span class="masc">masculinity</span>
	and
	<span class="fem">femininity</span>.
</p>

<p>
	In greek mythology, the Greek god <span class="masc gilbert">Zephyr</span>, god of the west wind,
	is married to
	<span class="fem gilbert">Iris</span>, the Greek goddess of rainbows. I decided to sandwich the
	two names together to get <Zephiris />.
</p>
<p>The name can also be broken down into three nicknames:</p>
<Nicknames />
<p>
	All three are equally correct, so use whichever one you think fits me best in the moment. Of
	course you can also call me by my full name, <Zephiris />, too.
</p>

<h2>Explore my other sites below:</h2>

<Plugs />
