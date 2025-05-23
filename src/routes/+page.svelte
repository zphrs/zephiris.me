<script>
	import Audio from '$lib/AudioPlayer.svelte';
	import Plugs from '$lib/Plugs.svelte';
	import Zephiris from '$lib/Zephiris.svelte';
	import Nicknames from './Nicknames.svelte';
	import Header from './Header.svelte';
</script>

<svelte:head>
	<meta property="og:title" content="Zephiris.Me" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://zephiris.me" />
	<meta property="og:image" content="https://zephiris.me/og-image.png" />
	<meta property="og:description" content="Learn about my name!" />
</svelte:head>
<nav>
	<Header changeOnScroll={true} />
</nav>
<main>
	<article>
		<h2>About My Name</h2>
		<p>
			My preferred name is <Audio inline src="audio/zephiris.wav" title="Zephiris"
				><Zephiris /></Audio
			>
			and my preferred pronouns are
			<span class="andro">they/them</span>. I am a full stack programmer currently studying @ UCSC.
		</p>
		<p>
			My former name, a name which I loved, is <span class="masc gilbert">Zephyr</span>. That said,
			I am changing it because <span class="masc gilbert">Zephyr</span> has a bit of a
			<span class="masc"> masculine</span>
			connotation. Since I am <span class="andro">nonbinary</span> I prefer a name which mixes
			<span class="masc">masculinity</span>
			and
			<span class="fem">femininity</span>.
		</p>

		<p>
			In greek mythology, the Greek god <span class="masc gilbert">Zephyr</span>, god of the west
			wind, is married to
			<span class="fem gilbert">Iris</span>, the Greek goddess of rainbows. I decided to sandwich
			the two names together to get <Zephiris />.
		</p>
		<p>The name can also be broken down into three nicknames:</p>
		<Nicknames />
		<p>
			All three are equally correct, so use whichever one you think fits me best in the moment. Of
			course you can also call me by my full name, <Zephiris />, too.
		</p>
	</article>
	<article>
		<h2>About My Gender</h2>
		<p>
			I am <span class="andro">nonbinary</span>, and I often use the color
			<span class="violet">violet</span> to describe my gender. <span class="violet">Violet</span>,
			being a <span class="andro">blend</span> of
			<span class="masc">blue</span>
			and <span class="fem">pink</span>, is a color which can represent the mix of
			<span class="masc">masculinity</span>
			<span class="andro">and</span> <span class="fem">femininity</span>.
		</p>
		<p>
			I often find my presentation always collapses into a slightly different blend of
			<span class="masc">masculinity</span>
			<span class="andro">and</span> <span class="fem">femininity</span> -
			<span class="masc">manhood</span>
			<span class="andro">and</span>
			<span class="fem">womanhood</span>. While the underlying <span class="andro">essense</span> of
			myself does not waver, the way I convey that essense does. If you'd like to read more about
			how I view my gender in relation to my presentation through the lens of my tattoo check out
			<a href="./tattoo" class="compass">my compass tattoo</a>.
		</p>
	</article>
	<h2>Explore my other sites below:</h2>

	<Plugs />
</main>

<style>
	article {
		position: relative;
		margin-bottom: var(--gap-2);
	}
	article::after {
		content: '';
		position: absolute;
		bottom: -1.125rem;
		left: 0;
		filter: blur(0.1rem);
		width: 100%;
		height: 0.25rem;
		background: linear-gradient(
			0.5deg,
			var(--pink-700),
			var(--blue-700),
			var(--indigo-700),
			var(--lavender-700),
			var(--white),
			var(--gold-700),
			var(--sea-700),
			var(--gold-500),
			var(--sea-500)
		);
	}
	h2 {
		filter: drop-shadow(0 0 1.25px var(--sea-700));
	}
	.compass {
		color: var(--sea-900);
	}
	.compass:visited {
		color: var(--sea-700);
	}
	.compass::before {
		content: ' ';
		background-image: url('/Tattoo.svg');
		position: relative;
		display: inline-block;
		width: 1rem;
		border-radius: 100%;
		background-color: var(--sea-900);
		height: 1rem;
		top: 0.25rem;
		margin-right: 0.25rem;
	}
	nav {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1;
		animation: scrollin 0.75s both;
	}
	main {
		padding: var(--gap-1);
		margin-top: calc(30vw + 3rem);
		min-height: 100%;
		max-width: 1000px;
		margin-left: auto;
		margin-right: auto;
		box-sizing: border-box;
	}

	.violet {
		color: var(--violet-700);
	}
</style>
