<script lang="ts">
	type Plug = {
		name: string;
		href: string;
		desc?: string;
		disabled: boolean;
	};
	const plugs = [
		{
			href: 'https://zephyr.contact',
			name: 'zephyr.contact',
			desc: 'Contact Card'
		},
		{
			name: 'zephyrj.com',
			href: 'https://zephyrj.com',
			desc: 'High School Portfolio'
		},
		{
			name: 'GitHub',
			href: 'https://github.com/zphyrj'
		},
		{
			name: 'zephiris.dev',
			href: 'https://zephiris.dev',
			desc: 'Technical Blog',
			disabled: true
		},
		{
			name: 'creative.zephiris.me',
			href: 'https://blog.zephiris.me',
			desc: 'Creative Endeavors',
			disabled: true
		},
		{
			name: 'animent.dev',
			href: 'https://animent.dev',
			desc: 'Web Design Tutorial',
			disabled: true
		}
	];
</script>

<div class="flex">
	{#each plugs as plug}
		<a class="card" href={plug.disabled ? undefined : plug.href} class:disabled={plug.disabled}>
			{plug.name}
			<br />
			{#if plug.desc}
				<p>{plug.desc}</p>
			{/if}
		</a>
	{/each}
</div>

<style>
	.flex {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-auto-rows: 10rem;
		gap: var(--gap-0-5);
		margin-top: var(--gap-1);
	}

	.flex > .card {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-family: 'Gilbert', sans-serif;
	}
	.card > p {
		font-family: 'Atkinson Hyperlegible', sans-serif;
		font-size: 1.1rem;
	}

	a.card {
		border-radius: var(--gap-0-5);
		color: var(--violet);
		background: linear-gradient(135deg, transparent 40%, var(--violet) 40%);
		background-size: 200% 200%;
		background-position: 0% 0%;
		transition: background-position 0.5s, color 0.15s step-end, font-size 0.15s step-end;
		display: block;
		cursor: pointer;
		background-blend-mode: difference;
		text-decoration: none;
		font-size: 1.5em;
	}

	a.card.disabled {
		filter: grayscale(1);
		background-position: 0 0 !important;
		color: var(--violet) !important;
		cursor: default;
		position: relative;
	}

	a.card.disabled::after {
		content: 'coming soon!';
		bottom: 15%;
		right: 0%;
		color: var(--plum);
		font-size: 1rem;
		transform-origin: center;
		text-align: center;
		transform: rotate(-45deg);
	}

	a.card.disabled::after {
		position: absolute;
	}

	a.card:hover {
		background-position: 60% 60%;
		color: var(--plum);
	}

	a.card:active {
		transition: font-size 0s, background-position 0.2s;
		background-position: 100% 100%;
	}
</style>
