import { access, readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const root = dirname(new URL(import.meta.url).pathname.replace(/^\/(?:[A-Za-z]:)/, (value) => value.slice(1)));
const html = await readFile(resolve(root, 'index.html'), 'utf8');
const failures = [];
const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
if (duplicates.length) failures.push(`Duplicate IDs: ${[...new Set(duplicates)].join(', ')}`);
if (/href="#"/.test(html)) failures.push('Placeholder href="#" found');
if (/<img(?![^>]*\salt=)[^>]*>/i.test(html)) failures.push('Image without alt text found');
for (const match of html.matchAll(/(?:src|href)="((?!https?:|mailto:|tel:|#)[^"]+)"/g)) {
  const relative = decodeURIComponent(match[1].split(/[?#]/)[0]).replace(/^\//, '');
  if (!relative || relative === 'site.webmanifest') continue;
  try { await access(resolve(root, relative)); } catch { failures.push(`Missing local asset: ${relative}`); }
}
for (const match of html.matchAll(/href="#([^"]+)"/g)) {
  if (!ids.includes(match[1])) failures.push(`Broken internal link: #${match[1]}`);
}
for (const match of html.matchAll(/<a[^>]*target="_blank"[^>]*>/g)) {
  if (!/rel="[^"]*noopener[^"]*"/.test(match[0])) failures.push(`Unsafe external link: ${match[0]}`);
}
if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log(`Validation passed: ${ids.length} unique IDs and local references resolved.`);
