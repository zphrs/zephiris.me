<script lang="ts">
	type Plug = {
		name: string;
		href: string;
		desc?: string;
		disabled: boolean;
	};
	const plugs = [
		{
			name: 'zephyrj.com',
			href: 'https://zephyrj.com',
			desc: 'High School Portfolio'
		},
		{
			name: 'GitHub',
			href: 'https://github.com/zphrs'
		},
		{
			name: 'Forest Cottage',
			href: 'https://marketplace.visualstudio.com/items?itemName=zephyrj.forest-cottage',
			desc: 'VS Code Theme'
		},
		{
			href: 'https://at.zephiris.me',
			name: 'at.zephiris.me',
			desc: 'Contact Card',
			disabled: true
		},
		{
			name: 'zephiris.dev',
			href: 'https://zephiris.dev',
			desc: 'Technical Blog',
			disabled: true
		},
		{
			name: 'creative.zephiris.me',
			href: 'https://creative.zephiris.me',
			desc: 'Creative Endeavors',
			disabled: true
		},
		{
			name: 'animent.dev',
			href: 'https://animent.dev',
			desc: 'Web Design Tutorial',
			disabled: true
		},
		{
			name: 'plexigraph.com',
			href: 'https://plexigraph.com',
			desc: 'Future Project',
			disabled: true
		}
	];
</script>

<div class="grid">
	{#each plugs as plug}
		<a class="card" href={plug.disabled ? undefined : plug.href} class:disabled={plug.disabled}>
			<header>{plug.name}</header>
			{#if plug.desc}
				<p>{plug.desc}</p>
			{/if}
		</a>
	{/each}
</div>

<style>
	.grid {
		grid-auto-rows: 10rem;
		gap: var(--gap-0-5);
	}
	.card {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.card > p {
		font-size: 1.1rem;
	}

	a.card {
		border-radius: var(--gap-0-5);
		border-color: var(--sea-700);
		color: var(--sea-900);
		background-color: var(--sea-100);
		background: linear-gradient(135deg, var(--sea-100) 40%, var(--sea-900) 40%);
		background-size: 200% 200%;
		background-position: 0% 0%;
		transition: background-position 0.5s, color 0.15s step-end, font-size 0.15s step-end;
		cursor: pointer;
		background-blend-mode: difference;
		text-decoration: none;
		font-size: 1.5em;
	}

	a.card.disabled {
		/* filter: grayscale(1); */
		border-color: var(--gray-90);
		background-image: linear-gradient(135deg, var(--gray-10) 40%, var(--gray-90) 40%);
		background-position: 0 0 !important;
		color: var(--gray-90) !important;
		cursor: default;
		position: relative;
	}

	a.card.disabled::after {
		content: 'coming soon!';
		bottom: 13%;
		right: -2%;
		color: var(--gray-10);
		font-size: 0.95rem;
		font-family: 'Gilbert', sans-serif;
		transform-origin: center;
		text-align: center;
		transform: rotate(-45deg);
	}

	a.card.disabled::after {
		position: absolute;
	}

	a.card:hover {
		background-position: 60% 60%;
		color: var(--sea-100);
	}

	a.card:active {
		transition: font-size 0s, background-position 0.2s;
		background-position: 100% 100%;
	}
</style>
