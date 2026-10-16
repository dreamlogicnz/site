// Post-build sanity check. Run after `npm run build`: `npm run check`.
// Fails (exit 1) if the built site is missing pages, has broken in-page links,
// or still blocks search engines when site.indexable is true.
import { readFileSync, existsSync } from 'node:fs';

const errors = [];
const read = (p) => (existsSync(p) ? readFileSync(p, 'utf8') : (errors.push(`missing ${p}`), ''));

const home = read('dist/index.html');
read('dist/404.html');
for (const f of ['favicon.svg', 'fonts/outfit-300.woff2', 'fonts/outfit-400.woff2', 'fonts/outfit-500.woff2', 'fonts/outfit-600.woff2']) {
  if (!existsSync(`dist/${f}`)) errors.push(`missing dist/${f}`);
}

const ids = new Set([...home.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
for (const [, hash] of home.matchAll(/href="#([^"]+)"/g)) {
  if (!ids.has(hash)) errors.push(`broken anchor #${hash}`);
}
if (!/<h1[\s>]/.test(home)) errors.push('home page has no <h1>');

const data = readFileSync('src/data/site.ts', 'utf8');
const indexable = /indexable:\s*true/.test(data);
const noindex = home.includes('noindex');
if (indexable && noindex) errors.push('site.indexable is true but the page still has noindex');

if (errors.length) {
  console.error('Check failed:\n- ' + errors.join('\n- '));
  process.exit(1);
}
console.log(`Check passed. ${ids.size} section anchors OK. Search engines: ${noindex ? 'blocked (staging)' : 'allowed'}.`);
