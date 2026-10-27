// @ts-check
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import { headingAnchors } from './src/markdown/heading-anchors.mjs';

// Static site → GitHub Pages → lysning.app (ADR 0001, 0008, 0009).
export default defineConfig({
  site: 'https://lysning.app',
  // Custom apex domain, so served from root.
  base: '/',
  trailingSlash: 'never',
  markdown: {
    processor: satteri({ hastPlugins: [headingAnchors] }),
  },
});
