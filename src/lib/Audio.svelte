<script lang="ts">
	import { browser } from '$app/environment';
	import PlayPause from './PlayPause.svelte';

	let playing = false;
	export let src: string;
	export let offset = 0;
	export let inline: undefined | null | boolean = false;

	function playAudio(play: boolean, audio: HTMLAudioElement) {
		// restart audio
		if (play) {
			audio.play();
		} else {
			audio.pause();
		}
		currentTime = offset;
	}
	let audio: HTMLAudioElement;
	export let currentTime = offset;
	$: audio && playAudio(playing, audio);
</script>

<button
	style={`--progress: ${audio ? ((currentTime - offset) / (audio.duration - offset)) * 100 : 0}%`}
	class:empty={!$$slots.default}
	class:inline={inline !== undefined && inline !== false}
	class:playing
	on:click={() => (playing = !playing)}
	class="card"
>
	<span class="icon">
		<PlayPause {playing} />
		<audio
			bind:this={audio}
			bind:currentTime
			on:ended={() => {
				playing = false;
				currentTime = 0;
			}}
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
		background: linear-gradient(to right, var(--violet) 50%, var(--black) 50%);
		background-size: 200% 100%;
		background-repeat: no-repeat;
		background-position: calc(100% - (var(--progress))) 50%;
		padding: 0;
		width: 100%;
		position: relative;
	}
	.playing .icon {
		color: var(--violet);
		fill: var(--plum);
	}

	.slot {
		background-color: var(--black);
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
</style>
