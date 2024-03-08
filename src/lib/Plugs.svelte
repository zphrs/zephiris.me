<script lang="ts">
	type EventuallyReleasable = {
		disabled?: boolean;
		estPublishDate?: Date;
	};
	type Plug = {
		name: string;
		href: string;
		desc?: string;
	} & (EventuallyReleasable | undefined);
	const plugs: Plug[] = [
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
			desc: 'A Foresty VS Code Color\nTheme'
		},
		{
			name: 'Boids',
			href: 'https://zphrs.github.io/jsExperiments/boids',
			desc: 'A GPGPU sim with\nWebGL'
		},
		{
			name: 'animent.dev',
			href: 'https://animent.dev',
			desc: 'Web Design Course'
		},
		{
			name: 'Twitter Vis',
			href: 'https://zphrs.github.io/humn-55-final/',
			desc: 'How Viral Spikes Shape Digital Movements'
		},
		{
			name: 'Aninest',
			href: 'https://plexigraph.github.io/aninest',
			desc: 'A nested animation library'
		},
		{
			name: 'Plex UI',
			href: 'https://plex.plexigraph.com',
			disabled: true,
			estPublishDate: new Date(2024, 1, 1)
		},
		{
			name: 'plexigraph.com',
			href: 'https://plexigraph.com',
			disabled: true,
			estPublishDate: new Date(2024, 1, 1)
		},
		{
			href: 'https://at.zephiris.me',
			name: 'at.zephiris.me',
			desc: 'Contact Card',
			disabled: true,
			estPublishDate: new Date(2024, 1, 15)
		},
		{
			name: 'creative.zephiris.me',
			href: 'https://creative.zephiris.me',
			desc: 'Creative Blog',
			disabled: true,
			estPublishDate: new Date(2024, 1, 30)
		},
		{
			name: 'zephiris.dev',
			href: 'https://zephiris.dev',
			desc: 'Technical Blog',
			disabled: true,
			estPublishDate: new Date(2024, 1, 30)
		}
	];
	function treatAsUTC(date: Date) {
		var result = new Date(date);
		result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
		return Number(result);
	}

	const MSPerDay = 24 * 60 * 60 * 1000;
	function daysBetween(startDate: Date, endDate: Date) {
		return Math.max((treatAsUTC(endDate) - treatAsUTC(startDate)) / MSPerDay, 0);
	}
	function daysUntilPlug(plug: Plug) {
		return plug.estPublishDate
			? Math.round(daysBetween(new Date(Date.now()), plug.estPublishDate))
			: 0;
	}
	function addS(n: number) {
		return n + (n == 1 ? ' day' : ' days');
	}
</script>

<div class="grid">
	{#each plugs as plug}
		<a
			class="card"
			style={`--days-left: "${addS(
				plug.estPublishDate ? Math.round(daysBetween(new Date(Date.now()), plug.estPublishDate)) : 0
			)}"; --days-percent: ${
				(plug.estPublishDate
					? Math.round(daysBetween(new Date(Date.now()), plug.estPublishDate))
					: 0) / 160
			}`}
			href={plug.disabled ? undefined : plug.href}
			class:disabled={plug.disabled}
		>
			<header>{plug.name}</header>
			{#if plug.estPublishDate}
				<aside class="gilbert small">{plug.estPublishDate.toLocaleDateString()}</aside>
			{/if}
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
		line-height: 1.25;
		text-align: center;
		white-space: pre-wrap;
		padding: 0 var(--gap-1);
	}

	a.card {
		border-radius: var(--gap-0-5);
		border-color: var(--sea-700);
		color: var(--sea-900);
		background-color: var(--sea-100);
		background: linear-gradient(135deg, var(--sea-100) 40%, var(--sea-900) 40%);
		background-size: 200% 200%;
		background-position: 0% 0%;
		transition: background-position 0.5s, color 0.15s step-end, font-size 0.15s step-end,
			border-color 0.5s, box-shadow 0.5s;
		cursor: pointer;
		box-shadow: 0 0 2px 0 var(--sea-700), 0 0 4px 0 var(--sea-700);
		background-blend-mode: difference;
		text-decoration: none;
		font-size: 1.5em;
	}

	.small {
		font-size: 0.8rem;
	}

	a.card.disabled {
		/* filter: grayscale(1); */
		border-color: var(--gold-700) !important;
		filter: blur(calc(var(--days-percent, 0) * 0.1rem)) opacity(calc(1 - var(--days-percent, 0)));
		transform-origin: calc(150% * var(--days-percent, 0)) calc(100% * var(--days-percent, 0));
		z-index: -1;
		transform: scale(calc(1 - 0.12 * var(--days-percent, 0)));
		background-image: linear-gradient(135deg, var(--gold-100) 40%, var(--gold-500) 40%);
		background-position: 0 0 !important;
		color: var(--gray-90) !important;
		box-shadow: none !important;
		cursor: default;
		position: relative;
	}

	a.card.disabled::before {
		content: var(--days-left, 0);
		font-size: 1.1rem;
		position: absolute;
		top: var(--gap-0-25);
		left: var(--gap-0-5);
		color: var(--gold-700);
		font-family: 'Gilbert', sans-serif;
	}

	a.card.disabled::after {
		content: 'coming soon!';
		bottom: 13%;
		right: -2%;
		color: var(--gray-10);
		font-size: 0.95rem;
		font-family: 'Gilbert', sans-serif;
		transform-origin: center;
		transform: rotate(-45deg);
	}

	a.card.disabled::after {
		position: absolute;
	}

	a.card:hover,
	a.card:focus {
		background-position: 60% 60%;
		color: var(--sea-100);
		border-color: var(--sea-900);
		box-shadow: 0 0 4px var(--sea-900), 0 0 8px var(--sea-900);
	}

	a.card:active {
		transition: font-size 0s, background-position 0.2s;
		background-position: 100% 100%;
	}
</style>
