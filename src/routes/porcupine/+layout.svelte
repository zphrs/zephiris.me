<script lang="ts">
	import { onMount } from 'svelte';
	import { pwaInfo } from 'virtual:pwa-info';

	$: webManifestLink = pwaInfo ? pwaInfo.webManifest.linkTag : '';

	onMount(async () => {
		const { registerSW } = await import('virtual:pwa-register');
		registerSW({
			immediate: true,
			onRegistered(r: unknown) {
				// uncomment following code if you want check for updates
				// r && setInterval(() => {
				//    console.log('Checking for sw update')
				//    r.update()
				// }, 20000 /* 20s for testing purposes */)
				console.log(`SW Registered: ${r}`);
			},
			onReunknownterError(error: unknown) {
				console.log('SW registration error', error);
			}
		});
	});
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
	{@html webManifestLink}
</svelte:head>
<slot />
