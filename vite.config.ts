import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';

export default defineConfig({
	plugins: [
		sveltekit(),
		SvelteKitPWA({
			base: '/porcupine/',
			buildBase: '/',
			registerType: 'autoUpdate',
			strategies: 'generateSW',

			manifest: {
				theme_color: '#000000',
				name: 'Porcupine',
				short_name: 'Porcupine',
				description: 'A fun web toy',
				icons: [
					{
						src: 'icons-192.png',
						type: 'image/png',
						sizes: '192x192',
						purpose: 'maskable'
					},
					{
						src: 'icons-256.png',
						type: 'image/png',
						sizes: '256x256'
					},
					{
						src: 'icons-512.png',
						type: 'image/png',
						sizes: '512x512'
					}
				],
				background_color: '#000000',
				display: 'standalone'
			},
			workbox: {
				sourcemap: true
			}
		})
	]
});
