// @ts-check
import { defineConfig } from 'astro/config';

// Static site: Astro builds to ./dist and Cloudflare serves it as Workers static assets.
// No adapter needed until the site has server-rendered routes (e.g. a contact form endpoint).
export default defineConfig({
  site: 'https://dreamlogic.co.nz',
  build: { inlineStylesheets: 'always' },
});
