import { cp, copyFile, mkdir, rm } from 'node:fs/promises';

const output = new URL('./dist/', import.meta.url);
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const file of ['index.html', 'styles.css', 'script.js', 'robots.txt', 'sitemap.xml', 'site.webmanifest', '_headers', 'favicon.ico', 'og.png', 'og-light.png', 'og-milk-sea.png', 'og-violet-reference.png', 'CNAME', '.nojekyll']) {
  await copyFile(new URL(`./${file}`, import.meta.url), new URL(`./dist/${file}`, import.meta.url));
}
await cp(new URL('./img/', import.meta.url), new URL('./dist/img/', import.meta.url), { recursive: true });
console.log('Build completed: dist/');
