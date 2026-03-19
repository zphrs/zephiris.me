<!-- @migration-task Error while migrating Svelte code: `<tr>` cannot be a child of `<table>`. `<table>` only allows these children: `<caption>`, `<colgroup>`, `<tbody>`, `<thead>`, `<tfoot>`, `<style>`, `<script>`, `<template>`. The browser will 'repair' the HTML (by moving, removing, or inserting elements) which breaks Svelte's assumptions about the structure of your components.
https://svelte.dev/e/node_invalid_placement -->
<script>
	import Zephiris from '$lib/Zephiris.svelte';
	import Header from '../../Header.svelte';
	import '../../styles/reset.css';
</script>

<nav>
	<Header />
</nav>
<main>
	<article>
		<h1>My Compass Tattoo</h1>

		<img
			src="./Tattoo.svg"
			alt="waves on the left side and two particles on the right, separated with a vertical line."
		/>
		<h2>Info Sheet</h2>
		<table>
			<tbody>
				<tr>
					<th>Name</th>
					<td>my compass </td>
				</tr>
				<tr>
					<th>Placement</th>
					<td>Middle of my chest</td>
				</tr>
				<tr>
					<th>Size</th>
					<td>3in</td>
				</tr>
				<tr>
					<th>In ASCII Art</th>
					<td>
						⠀⠀⠀ |<br />
						⠀ ◜⠀| ⠀.<br />
						( ﹙ ◑ <br />
						⠀ ◟⠀|<br />
						⠀⠀⠀ |<br />
					</td>
				</tr>
			</tbody>
		</table>
		<h2>Symbolism</h2>
		<table>
			<tbody>
				<tr>
					<th>Ripples</th>
					<td>probabilistic waves</td>
				</tr>
				<tr>
					<th>Middle Dot</th>
					<td>curiosity</td>
				</tr>
				<tr>
					<th>Top Right Dot</th>
					<td>unconditional love</td>
				</tr>
			</tbody>
		</table>

		<h2>Explanation</h2>

		<p>
			I conceptualize the self as being equivalent to the total probability distribution of what
			actions I might take in response to various sets of stimuli. While my actions sample this
			distribution, any one action isn't who I am and furthermore this distribution continuously
			evolves over time. At the same time, the distribution is shaped by some immutable aspects of
			who I am.
		</p>
		<h3>Ripples</h3>
		<p>
			The ripples represent the endless possibilities of what I might be at any given moment. They
			also represent how even though my presentation might not be consistent, there is a consistent
			underlying essense and discernable pattern to how I present; i.e. who I am.
		</p>
		<h3>Particles</h3>
		<p>
			The two specific samplings — one in the middle and another up and right of the center — have a
			farther meaning; they represent why I continue to do anything, my reasons for existing:
		</p>
		<ul>
			<li>
				The middle dot stands for wanting to understand how the universe and everything in it
				fundamentally works
			</li>
			<li>The other stands for mutual unconditional love</li>
		</ul>
		<p>I look forward to adding more dots over my lifetime whenever I find a new aspiration.</p>
		<h3>Center Line</h3>
		<p>
			The vertical line represents a split between the potential and the present known. It
			represents collapsing the probabilities with sharp observation into rigid actualities.
		</p>
		<h3>Why a Compass?</h3>
		<p>
			Because it points me forward, it orients me. If I'm feeling adrift, I can glance down and get
			at least two aspirations which answer definitively why I am here; two reasons which inspire me
			to get to work.
		</p>
	</article>
</main>

<style>
	table {
		max-width: 100%;
		margin: 1rem auto;
		border-collapse: collapse;
	}
	table th {
		text-align: right;
		color: var(--sea-900);
		font-family: 'Gilbert', sans-serif;
		border-right: 1px solid var(--sea-900);
		border-bottom: 1px solid var(--sea-900);
		padding: 0.25rem 0.25rem;
	}
	table tr:last-child th {
		border-bottom: none;
	}
	table tr:last-child td {
		border-bottom: none;
	}
	table td {
		padding: 0.25rem 0.25rem;
		border-left: 1px solid var(--sea-900);
		border-bottom: 1px solid var(--sea-900);
		color: var(--sea-700);
	}

	nav {
		position: fixed;
	}

	main {
		padding: var(--gap-1);
		padding-top: calc(3rem + var(--gap-1));
		min-height: 100%;
		max-width: 1000px;
		margin-left: auto;
		margin-right: auto;
		box-sizing: border-box;
	}
	img {
		background-color: var(--sea-900);
		max-width: 400px;
		margin: 2rem auto;
		border-radius: 50%;
	}
	ul {
		margin-top: 1rem;
		margin-bottom: 2rem;
	}
	li {
		margin-bottom: 0.5rem;
	}
</style>
