import { access, readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const root = dirname(
  new URL(import.meta.url).pathname.replace(/^\/(?:[A-Za-z]:)/, (value) =>
    value.slice(1),
  ),
);
const failures = [];
let checkedIds = 0;
const pages = [
  "index.html",
  "privacidad.html",
  "auditoria-web.html",
  "seo-tecnico.html",
  "rendimiento-web.html",
  "seguridad-web.html",
  "seguridad-aplicaciones-ia.html",
  "caso-codegurex.html",
];
for (const page of pages) {
  const html = await readFile(resolve(root, page), "utf8");
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  checkedIds += ids.length;
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicates.length)
    failures.push(
      `${page}: duplicate IDs: ${[...new Set(duplicates)].join(", ")}`,
    );
  if (/href="#"/.test(html))
    failures.push(`${page}: placeholder href="#" found`);
  if (/<img(?![^>]*\salt=)[^>]*>/i.test(html))
    failures.push(`${page}: image without alt text found`);
  if (/\sstyle="[^"]*"/i.test(html))
    failures.push(
      `${page}: inline style found but CSP only allows self-hosted styles`,
    );
  for (const match of html.matchAll(
    /(?:src|href)="((?!https?:|mailto:|tel:|#)[^"]+)"/g,
  )) {
    const relative = decodeURIComponent(match[1].split(/[?#]/)[0]).replace(
      /^\//,
      "",
    );
    if (!relative || relative === "site.webmanifest") continue;
    try {
      await access(resolve(root, relative));
    } catch {
      failures.push(`${page}: missing local asset: ${relative}`);
    }
  }
  for (const match of html.matchAll(/href="#([^"]+)"/g)) {
    if (!ids.includes(match[1]))
      failures.push(`${page}: broken internal link: #${match[1]}`);
  }
  for (const match of html.matchAll(/<a[^>]*target="_blank"[^>]*>/g)) {
    if (!/rel="[^"]*noopener[^"]*"/.test(match[0]))
      failures.push(`${page}: unsafe external link: ${match[0]}`);
  }
  const analyticsBootstraps = [...html.matchAll(/src="\/?analytics\.js\?v=1"/g)]
    .length;
  const googleTags = [
    ...html.matchAll(/googletagmanager\.com\/gtag\/js\?id=G-3NH66XEY32/g),
  ].length;
  if (analyticsBootstraps !== 1)
    failures.push(`${page}: expected exactly one local analytics bootstrap`);
  if (googleTags !== 1)
    failures.push(
      `${page}: expected exactly one Google Analytics measurement tag`,
    );
  if (
    !/<head>\s*<!-- Google tag \(gtag\.js\) -->\s*<script\s+src="\/?analytics\.js\?v=1"><\/script>\s*<script(?=[^>]*\basync\b)(?=[^>]*src="https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=G-3NH66XEY32")[^>]*><\/script>/.test(
      html,
    )
  ) {
    failures.push(`${page}: Google tag must appear immediately after <head>`);
  }
  if (!/styles\.css\?v=12/.test(html))
    failures.push(`${page}: current consent styles are not loaded`);
  if (page !== "privacidad.html") {
    if (!/script\.js\?v=(?:3|4|5)/.test(html))
      failures.push(`${page}: current interaction script is not loaded`);
    if (!/id="menuButton"/.test(html))
      failures.push(`${page}: menu button is not wired`);
    if (
      !/<nav(?=[^>]*class="[^"]*\bmobile-menu\b[^"]*")(?=[^>]*id="mobileMenu")(?=[^>]*\bhidden\b)[^>]*>/.test(
        html,
      )
    ) {
      failures.push(`${page}: mobile menu must start hidden`);
    }
  }
  if (page === "index.html") {
    if (!/home-next\.css\?v=\d+/.test(html))
      failures.push(`${page}: AI Era visual system stylesheet is not loaded`);
    if (!/home-sections\.css\?v=\d+/.test(html))
      failures.push(`${page}: complete Home stylesheet is not loaded`);
    if (!/home-next\.js\?v=\d+/.test(html))
      failures.push(`${page}: AI Era interaction script is not loaded`);
  } else if (!/internal-next\.css\?v=\d+/.test(html)) {
    failures.push(`${page}: current internal-page visual system is not loaded`);
  }
}
if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log(
  `Validation passed: ${pages.length} pages, ${checkedIds} unique IDs and local references resolved.`,
);
