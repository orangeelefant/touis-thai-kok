// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://touisthai.netlify.app',
  integrations: [sitemap()],
  // The whole stylesheet is ~12 KB — inlining it removes a round trip on the critical path.
  build: { inlineStylesheets: 'always' },
});
