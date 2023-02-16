<script>
	import { browser } from '$app/environment';
	import Zephiris from '$lib/Zephiris.svelte';
	let scroll = 800;
	let windowWidth = 800;
	$: sMultip = Math.max(1 - (3.5 * scroll) / windowWidth);
	// get root font size
	let rem = 16;
	if (browser) {
		parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue('font-size')) ||
			16;
	}
</script>

<svelte:window bind:scrollY={scroll} bind:innerWidth={windowWidth} />
<div class:hide={sMultip * 0.2 * windowWidth >= 2 * rem}>
	<a href="/" style={'--s-multip: ' + sMultip}>
		<Zephiris capitalized={false} /><span class="me">.me</span>
	</a>
</div>

<style>
	a {
		display: block;
		z-index: 2;
		left: var(--gap-0-5);
		font-size: max(calc(18vw * var(--s-multip)), 2rem);
		text-align: center;
		text-decoration: none;
		color: var(--purple-500);
		font-family: 'Gilbert', sans-serif;
		font-weight: bold;
		background-color: var(--black);
		transition: font-size 0.2s;
	}
	.me {
		color: var(--white);
	}
	div {
		width: 100vw;
		transition: border-color 0.2s 0.2s;
		animation: fadein 0.2s 0.75s;
		border-bottom: 2px solid var(--purple-500);
		background-color: var(--black);
	}
	@keyframes fadein {
		0% {
			border-bottom-color: transparent;
		}
		100% {
			border-bottom-color: var(--purple-500);
		}
	}
	div.hide {
		border-bottom-color: transparent !important;
	}
</style>
