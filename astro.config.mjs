import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://onlypfachi.github.io',
  	base: '/devtogo',
	integrations: [
		starlight({
			title: 'DevToGo',
			social: {
				github: 'https://github.com/onlypfachi/devtogo',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'What You Need To Know',
					autogenerate: { directory: 'intro' },
				},
			],
		}),
	],
});
