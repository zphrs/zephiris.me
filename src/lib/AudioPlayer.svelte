<script lang="ts">
	import { onMount } from 'svelte';
	import PlayPause from './PlayPause.svelte';

	let playing = false;
	let hasMeta = false;
	let buffering = false;
	export let src: string;
	export let title: string;
	export let inline: undefined | null | boolean = false;

	$: audio && whenAudioLoaded();

	function whenAudioLoaded() {
		switch (audio.readyState) {
			case 4:
				buffering = false;
			case 3:
			case 2:
				buffering = true;
			case 1:
				hasMeta = true;
			case 0:
		}
	}

	function playAudio(play: boolean, audio: HTMLAudioElement) {
		// restart audio
		if (play) {
			buffering = true;
			audio.play();
		} else {
			currentTime = 0;
			audio.pause();
		}
	}
	async function loadMedia() {
		if (audio.readyState < 4 && !buffering) {
			console.log('loading ' + title);
			console.log(audio.readyState);
			buffering = true;
			await audio.play();
			audio.pause();
		}
	}
	function onStall() {
		buffering = true;
	}
	function onResume() {
		buffering = false;
	}
	$: progress = audio && audio.duration && playing ? (currentTime / audio.duration) * 100 : 0;
	$: progress && onResume();
	let audio: HTMLAudioElement;
	export let currentTime = 0;
	$: audio && playAudio(playing, audio);
</script>

<span aria-hidden="true" class="hide"><slot /></span><button
	style={`--progress: ${progress}%`}
	class:empty={!$$slots.default}
	class:inline={inline !== undefined && inline !== false}
	class:playing
	class:buffering
	class:hasMeta
	disabled={buffering && playing && !hasMeta}
	on:click={() => {
		playing = !playing;
		buffering = true;
	}}
	on:pointerover={loadMedia}
	class="card"
>
	<span class="icon">
		<PlayPause {playing} />
		<audio
			bind:this={audio}
			bind:currentTime
			preload="metadata"
			{title}
			on:ended={() => {
				playing = false;
				currentTime = 0;
			}}
			on:loadedmetadata={() => {
				console.log('loaded metadata');
				hasMeta = true;
			}}
			on:waiting={onStall}
			on:canplay={onResume}
			on:stalled={onStall}
			{src}
		/>
	</span>{#if $$slots.default}<span class="slot"><slot /></span>{/if}
</button>

<style>
	button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 10%;
		background: linear-gradient(to right, currentColor 50%, var(--sea-100) 50%);
		background-size: 200% 100%;
		background-repeat: no-repeat;
		background-position: 100% 50%;
		padding: 0;
		width: 100%;
		position: relative;
		border-color: currentColor;
		border-width: 0;
		filter: brightness(0.8);
		transform: scale(0.8);
		transition: transform 0.2s ease-in-out, filter 0.2s ease-in-out;
	}
	.hasMeta {
		filter: brightness(1);
		transform: scale(1);
	}
	.playing.buffering {
		animation: pulse 0.5s infinite alternate;
	}
	@keyframes pulse {
		from {
			filter: brightness(0.8);
		}
		to {
			filter: brightness(1);
		}
	}
	.playing {
		background-position: calc(100% - (var(--progress))) 50%;
		animation: none;
	}
	.playing .icon {
		color: currentColor;
		fill: var(--sea-100);
	}

	.slot {
		background-color: var(--sea-300);
		margin: 0rem 0.25rem;
	}
	.icon {
		height: calc(100% - 0.5rem);
		aspect-ratio: 1;
		position: absolute;
		left: 0.25rem;
	}
	button.empty {
		position: relative;
		top: 0.05rem;
		width: 1.1rem;
		aspect-ratio: 1;
		border-radius: 0.25rem;
		justify-content: center;
	}
	.inline {
		width: fit-content;
		position: relative;
		top: 0.1rem;
	}
	.inline .icon {
		position: relative;
		width: 0.8em;
	}
	.empty .icon {
		margin: 0;
		position: relative;
	}
	.slot {
		font-size: 1em;
		border-radius: inherit;
		padding: 0rem 0.5rem;
		margin: 0.1rem;
		margin-left: var(--gap-0-5);
	}
	.inline .slot {
		font-size: calc(1em - 0.3rem);
	}
	.hide {
		width: 0;
		height: 0;
		overflow: hidden;
		display: inline-block;
	}
</style>
