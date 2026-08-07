// @ts-check
import { defineConfig } from 'astro/config';

// Static site → GitHub Pages → orielle.app (ADR 0001, 0008, 0009).
export default defineConfig({
  site: 'https://orielle.app',
  // Custom apex domain, so served from root.
  base: '/',
  trailingSlash: 'never',
});
