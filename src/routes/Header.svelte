<script>
	import { browser } from '$app/environment';
	import Zephiris from '$lib/Zephiris.svelte';
	let scroll = 800;
	export let changeOnScroll = false;
	let windowWidth = 800;
	$: sMultip = changeOnScroll ? 1 - (3.5 * scroll) / windowWidth : 0;
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
		color: var(--violet-700);
		font-family: 'Gilbert', sans-serif;
		font-weight: bold;
		transition: font-size 0.2s;
	}
	.me {
		color: var(--white);
	}
	div {
		width: 100vw;
		transition: border-color 0.2s 0s;
		animation: fadein 0.2s 0s both;
		border-bottom: 2px solid var(--violet-900);
		background-color: var(--violet-100);
	}
	@keyframes fadein {
		0% {
			border-bottom-color: transparent;
		}
		100% {
			border-bottom-color: var(--violet-900);
		}
	}
	div.hide {
		animation: none;
		border-bottom-color: transparent !important;
	}
</style>
