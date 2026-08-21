import { access, readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const root = dirname(new URL(import.meta.url).pathname.replace(/^\/(?:[A-Za-z]:)/, (value) => value.slice(1)));
const failures = [];
let checkedIds = 0;
const pages = ['index.html', 'privacidad.html', 'auditoria-web.html', 'seo-tecnico.html', 'rendimiento-web.html', 'seguridad-web.html'];
for (const page of pages) {
  const html = await readFile(resolve(root, page), 'utf8');
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  checkedIds += ids.length;
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicates.length) failures.push(`${page}: duplicate IDs: ${[...new Set(duplicates)].join(', ')}`);
  if (/href="#"/.test(html)) failures.push(`${page}: placeholder href="#" found`);
  if (/<img(?![^>]*\salt=)[^>]*>/i.test(html)) failures.push(`${page}: image without alt text found`);
  for (const match of html.matchAll(/(?:src|href)="((?!https?:|mailto:|tel:|#)[^"]+)"/g)) {
    const relative = decodeURIComponent(match[1].split(/[?#]/)[0]).replace(/^\//, '');
    if (!relative || relative === 'site.webmanifest') continue;
    try { await access(resolve(root, relative)); } catch { failures.push(`${page}: missing local asset: ${relative}`); }
  }
  for (const match of html.matchAll(/href="#([^"]+)"/g)) {
    if (!ids.includes(match[1])) failures.push(`${page}: broken internal link: #${match[1]}`);
  }
  for (const match of html.matchAll(/<a[^>]*target="_blank"[^>]*>/g)) {
    if (!/rel="[^"]*noopener[^"]*"/.test(match[0])) failures.push(`${page}: unsafe external link: ${match[0]}`);
  }
  if (page !== 'privacidad.html') {
    if (!/id="menuButton"/.test(html)) failures.push(`${page}: menu button is not wired`);
    if (!/<nav class="mobile-menu" id="mobileMenu"[^>]*\shidden/.test(html)) {
      failures.push(`${page}: mobile menu must start hidden`);
    }
  }
}
if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log(`Validation passed: ${pages.length} pages, ${checkedIds} unique IDs and local references resolved.`);
