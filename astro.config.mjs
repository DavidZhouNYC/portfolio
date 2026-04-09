import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { SITE, SITE_NAME } from './src/consts.ts';

export default defineConfig({
  site: SITE,
  integrations: [
    mdx(),
    sitemap(),
  ],
  output: 'static',
  build: {
    assets: '_assets',
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
