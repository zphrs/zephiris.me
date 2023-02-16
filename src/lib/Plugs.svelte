<script lang="ts">
	type Plug = {
		name: string;
		href: string;
		desc?: string;
		active: boolean;
	};
	const plugs = [
		{
			name: 'zephyrj.com',
			href: 'https://zephyrj.com',
			desc: 'High School Portfolio'
		},
		{
			href: 'https://zephyr.contact',
			name: 'zephyr.contact',
			desc: 'Contact Card'
		},
		{
			name: 'zephiris.dev',
			href: 'https://zephiris.dev',
			desc: 'Technical Blog',
			active: false
		},
		{
			name: 'blog.zephiris.me',
			href: 'https://blog.zephiris.me',
			desc: 'Personal Blog',
			active: false
		},
		{
			name: 'GitHub',
			href: 'https://github.com/zphyrj'
		}
	];
</script>

<div class="flex">
	{#each plugs as plug}
		<a class="card" href={plug.href}>
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
		grid-template-columns: repeat(2, 1fr);
		grid-auto-rows: 8rem;
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
</style>
