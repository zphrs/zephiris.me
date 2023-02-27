<script>
	import Header from './Header.svelte';
	import './styles/reset.css';
	import './styles/global.css';
	import './styles/genders.css';
	import './styles/scrollbar.css';
</script>

<nav>
	<Header />
</nav>

<main>
	<slot />
</main>

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
	}

	main > :global(p) {
		max-width: 800px;
		margin-left: auto;
		margin-right: auto;
	}
	footer {
		font-size: 14px;
		padding: 0 var(--gap-2);
		background-color: var(--black);
		border-top: 2px solid var(--violet);
	}

	footer > p {
		border-left: 2px solid var(--violet);
		border-right: 2px solid var(--violet);
		padding: 0 var(--gap-1);
		margin-top: 0;
		line-height: 0.6;
		background-color: var(--black);
	}
</style>
