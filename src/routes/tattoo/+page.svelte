<script>
	import Header from '../Header.svelte';
</script>

<main>
	<article>
		<h2>Tattoo</h2>

		<img
			src="./Tattoo.svg"
			alt="waves on the left side and two particles on the right, separated with a vertical line."
		/>
		<table>
			<tr>
				<th>Placement</th>
				<td>Middle of my chest</td>
			</tr>
			<tr>
				<th>Size</th>
				<td>3in</td>
			</tr>
		</table>

		<h2>Explaination</h2>

		<p>
			Overall the tattoo represents wave particle duality which is a great metaphor for my gender: I
			am both a probabilistic wave and a discrete particle. I am constantly collapsing into a
			particle when I’m observed (you either know my position or my velocity but not both). When I’m
			not being observed I am a probabilistic wave of possibilities.
		</p>
		<p>
			The two particles — one in the middle and another up and left from the center — represent why
			I continue to do anything, my reasons for existing:
		</p>
		<ul>
			<li>
				The middle dot stands for understanding how the universe and everything in it fundamentally
				works
			</li>
			<li>
				The other stands for mutual unconditional love — especially the love I have toward my
				partner who is the first person I felt unconditional love with.
			</li>
		</ul>
		<p>
			I look forward to adding many more dots over my lifetime whenever I find a new achievable goal
			to strive toward.
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

	main {
		padding: var(--gap-1);
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
		margin: 1rem 0;
	}
	li {
		margin-bottom: 0.5rem;
	}
</style>
