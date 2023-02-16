<script lang="ts">
	export let playing = false;
	let left: SVGPathElement | null = null;
	let right: SVGPathElement | null = null;
	let play: SVGPathElement | null = null;
	let first = true;
	let playTimeout = 0;
	let animate = (el: SVGPathElement, from: string, to: string, reverse: boolean) => {
		let anim: SVGAnimateElement | null = el.querySelector('animate');
		if (!anim) {
			anim = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
			el.appendChild(anim);
		}
		if (reverse) {
			[from, to] = [to, from];
		}
		anim.setAttribute('from', from);
		anim.setAttribute('to', to);

		anim.beginElement();
	};
	function transition(
		left: SVGPathElement,
		right: SVGPathElement,
		play: SVGPathElement,
		playing: boolean
	) {
		if (first) {
			first = false;
			return;
		}
		animate(
			left,
			'M 20 10, l 20 0, l 0 80, l -20 0, Z',
			'M 15 10, L 50.1 30, L 50.1 70, L 15 90, Z',
			playing
		);
		animate(
			right,
			'M 60 10, l 20 0, l 0 80, l -20 0, Z',
			'M 49.9 30, L 85 50, l 0 0, L 49.9 70, Z',
			playing
		);
		if (!playing) {
			playTimeout = window.setTimeout(() => {
				play.setAttribute('d', 'M 15 10, L 85 50, L 15 90, Z');
			}, 200);
		} else {
			play.setAttribute('d', 'M 50 50, l 0 0, l 0 0, Z');
			window.clearTimeout(playTimeout);
		}
	}
	$: {
		if (left && right && play) transition(left, right, play, playing);
	}
</script>

<svg
	fill={playing ? 'inherit' : 'currentColor'}
	stroke={playing ? 'currentColor' : 'inherit'}
	stroke-width="10"
	class:play={!playing}
	version="1.1"
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 100 100"
>
	<path bind:this={left} d="M 15 10, L 50.1 30, L 50.1 70, L 15 90, Z">
		<animate attributeName="d" dur="0.2s" fill="freeze" begin="indefinite" />
	</path>
	<path bind:this={right} d="M 49.9 30, L 85 50, l 0 0, L 49.9 70, Z">
		<animate attributeName="d" dur="0.2s" fill="freeze" begin="indefinite" />
	</path>
	<path bind:this={play} d="M 15 10, L 85 50, L 15 90, Z" />
</svg>
