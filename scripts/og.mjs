// Generates the Open Graph cards in public/og/.
//
// Run with `npm run og` after changing a page title, the hero headline, or the palette.
// The output is committed — this is a build-time-only tool, so the site stays a plain
// static build (ADR 0001) with no image service and no extra runtime dependency.
//
// Headless Chrome rather than an SVG rasteriser: rsvg-convert resolves fonts through
// fontconfig, which can't see the webfonts in node_modules, so the brand faces would
// silently fall back to a system serif. Chrome renders the real thing. Fonts are inlined
// as data URIs because Chrome blocks file:// subresource loads from a file:// document.

import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = resolve(root, 'public/og');
const tmpDir = resolve(root, 'node_modules/.cache/og');

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const W = 1200;
const H = 630;

const font = (p) =>
  `data:font/woff2;base64,${readFileSync(resolve(root, p)).toString('base64')}`;

const newsreader = font('node_modules/@fontsource-variable/newsreader/files/newsreader-latin-wght-normal.woff2');
const manrope = font('node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2');

// Light palette only: a static card can't follow prefers-color-scheme, and alabaster is
// the brand's primary identity. Values mirror theme.css §2.1.
const C = {
  bg: '#F5F3EE',
  ink: '#1C1917',
  inkSecondary: '#5C5854',
  primary: '#1B4332',
  accent: '#C4956A',
  accentSubtle: '#F5EDE4',
  accentMuted: '#FAF6F1',
  secondaryDeep: '#4A6459',
};

/**
 * Cards. `headline` may contain <em> for the evergreen italic emphasis.
 * Keep headlines short — two lines at this size is the design.
 */
const cards = [
  {
    name: 'home',
    headline: 'Pick a goal.<br />Watch it get <em>closer.</em>',
    meta: 'Free · no account · runs on your phone',
  },
  {
    name: 'faq',
    kicker: 'Help',
    headline: 'Questions, <em>answered.</em>',
    meta: 'Safe-to-Spend, goals, and how Lysning works',
  },
  {
    name: 'privacy',
    kicker: 'Legal',
    headline: 'Your financial life<br /><em>is yours.</em>',
    meta: 'Privacy Policy · UK GDPR',
  },
  {
    name: 'terms',
    kicker: 'Legal',
    headline: 'Terms of <em>Service.</em>',
    meta: 'For the Lysning beta',
  },
];

const html = ({ kicker, headline, meta }) => `<!doctype html>
<meta charset="utf-8" />
<style>
  @font-face {
    font-family: 'Newsreader';
    src: url('${newsreader}') format('woff2-variations');
    font-weight: 200 800;
  }
  @font-face {
    font-family: 'Manrope';
    src: url('${manrope}') format('woff2-variations');
    font-weight: 200 800;
  }
  * { box-sizing: border-box; margin: 0; }
  body {
    width: ${W}px; height: ${H}px; overflow: hidden;
    /* The site's .wash, at card scale */
    background: linear-gradient(178deg, ${C.accentSubtle} 0%, ${C.bg} 58%);
    font-family: 'Newsreader', Georgia, serif;
    color: ${C.ink};
    padding: 72px 80px;
    display: flex; flex-direction: column; justify-content: space-between;
    -webkit-font-smoothing: antialiased;
  }
  .brand { display: flex; align-items: center; gap: 16px; }
  .brand svg { display: block; }
  .wordmark { font-size: 34px; font-weight: 600; letter-spacing: -0.02em; color: ${C.primary}; }
  .kicker {
    font-family: 'Manrope', system-ui, sans-serif;
    font-size: 19px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase;
    color: ${C.secondaryDeep}; margin-bottom: 26px;
  }
  h1 {
    font-size: 82px; line-height: 1.06; font-weight: 500; letter-spacing: -0.022em;
    max-width: 17ch;
  }
  h1 em { font-style: italic; color: ${C.primary}; }
  .meta {
    font-family: 'Manrope', system-ui, sans-serif;
    font-size: 21px; font-weight: 600; color: ${C.inkSecondary};
    display: flex; align-items: center; gap: 12px;
  }
  .tick {
    width: 10px; height: 10px; border-radius: 50%;
    background: ${C.accent}; box-shadow: 0 0 0 6px ${C.accentMuted};
  }
</style>
<div class="brand">
  <svg width="52" height="52" viewBox="0 0 64 64" aria-hidden="true">
    <rect width="64" height="64" rx="16" fill="${C.primary}" />
    <circle cx="32" cy="32" r="15" fill="none" stroke="${C.bg}" stroke-width="6" />
    <circle cx="32" cy="47" r="4.5" fill="${C.accent}" />
  </svg>
  <span class="wordmark">Lysning</span>
</div>
<div>
  ${kicker ? `<p class="kicker">${kicker}</p>` : ''}
  <h1>${headline}</h1>
</div>
<p class="meta"><span class="tick"></span>${meta}</p>
`;

mkdirSync(outDir, { recursive: true });
mkdirSync(tmpDir, { recursive: true });

for (const card of cards) {
  const page = resolve(tmpDir, `${card.name}.html`);
  writeFileSync(page, html(card));

  execFileSync(
    CHROME,
    [
      '--headless',
      '--disable-gpu',
      '--hide-scrollbars',
      '--force-device-scale-factor=1',
      `--window-size=${W},${H}`,
      `--screenshot=${resolve(outDir, `${card.name}.png`)}`,
      `file://${page}`,
    ],
    { stdio: 'ignore' },
  );
  console.log(`  public/og/${card.name}.png`);
}

rmSync(tmpDir, { recursive: true, force: true });
console.log(`\n${cards.length} cards written at ${W}×${H}.`);
