<script>
	export let playing = false;
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
	<!-- <rect x="20" y="0" width="20" height="100" />
	<rect x="60" y="0" width="20" height="100" /> -->
	<path id="left" d="M 20 0 l 20 0 l 0 100 l -20 0 Z" />
	<path id="right" d="M 60 0 l 20 0 l 0 100 l -20 0 Z" />
	<path id="play" />
</svg>

<style>
	#left {
		d: path('M 20 10, l 20 0, l 0 80, l -20 0, Z');
	}

	#right {
		d: path('M 60 10, l 20 0, l 0 80, l -20 0, Z');
	}
	#play {
		d: path('M 50 50, l 0 0, l 0 0, Z');
	}
	.play #left {
		d: path('M 15 10, L 50.1 30, L 50.1 70, L 15 90, Z');
	}

	.play #right {
		d: path('M 49.9 30, L 85 50, l 0 0, L 49.9 70, Z');
	}
	.play #play {
		d: path('M 15 10, L 85 50, L 15 90, Z');
	}

	#left,
	#right {
		transition: d 0.2s;
	}
	.play #play {
		transition: d 0.2s step-end;
	}
</style>
