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
	<div>
		I used the font <a
			class="gilbert"
			target="_blank"
			rel="noreferrer"
			href="https://www.typewithpride.com/">Gilbert Bold</a
		>
		which is licenced under the Creative Commons licence
		<a target="_blank" rel="noreferrer" href="https://creativecommons.org/licenses/by-sa/4.0/"
			>(CC BY-SA 4.0)</a
		>.
	</div>
</footer>

<style>
	a {
		color: var(--white);
		padding: 0.5rem 0.25rem;
		display: inline-block;
	}
	nav {
		position: fixed;
		z-index: 1;
		animation: scrollin 1s 0.5s both;
	}
	main {
		padding: var(--gap-1);
		padding-top: 30vw;
		min-height: 100%;
	}
	footer {
		font-size: 14px;
		padding: 0 var(--gap-2);
		background-color: var(--black);
		border-top: 2px solid var(--violet);
		background-color: var(--violet);
		line-height: unset;
	}

	footer > div {
		border-left: 2px solid var(--violet);
		border-right: 2px solid var(--violet);
		padding: 0 var(--gap-1);
		background-color: var(--black);
	}
</style>
