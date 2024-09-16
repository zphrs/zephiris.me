<script>
	import Zephiris from '$lib/Zephiris.svelte';
	import Header from '../Header.svelte';
	import '../styles/reset.css';
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
					⠀&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br />
					⠀&nbsp;◜&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;.<br />
					(&nbsp; ﹙&nbsp;◑&nbsp;<br />
					⠀&nbsp;◟&nbsp;&nbsp;&nbsp;|<br />
					⠀&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
				</td>
			</tr>
		</table>
		<h2>Symbolism</h2>
		<table>
			<tr>
				<th>Ripples</th>
				<td>probabilistic waves</td>
			</tr>
			<tr>
				<th>Center Line</th>
				<td>Slit of observation</td>
			</tr>
			<tr>
				<th>Middle Dot</th>
				<td>curiosity</td>
			</tr>
			<tr>
				<th>Top Right Dot</th>
				<td>unconditional love</td>
			</tr>
		</table>

		<h2>Explanation</h2>

		<p>
			Overall the tattoo represents wave particle duality which is a great metaphor for my gender: I
			am both a probabilistic wave and a discrete particle. My gender is constantly collapsing into
			a particle when I’m observed. When I’m not being observed it is a probabilistic wave of
			possibilities.
		</p>
		<h3>Particles</h3>
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
				The other stands for mutual unconditional love — especially the love I have toward the first
				person I felt unconditional love with.
			</li>
		</ul>
		<p>
			I look forward to adding many more dots over my lifetime whenever I find a new achievable goal
			to strive toward.
		</p>
		<h3>Ripples</h3>
		<p>
			The ripples represent the endless possibilities of what I might be at any given moment. They
			also represent how even though my presentation might not be consistent, there is a consistent
			underlying essense and discernable pattern to how I present; i.e. who I am.
		</p>
		<h3>Center Line</h3>
		<p>
			The vertical line represents a split between the potential and the present known. It
			represents collapsing the probabilities with sharp observation into rigid actualities. In this
			case, the actualities are the particles, of which I have two presently.
		</p>
		<h3>Why a Compass?</h3>
		<p>
			Because it points me forward, it orients me. If I am ever wondering why I'm here I can glance
			down and see at least two reasons why I am here; two reasons which inspire me to get to work.
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
