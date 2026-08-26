import { cp, copyFile, mkdir, rm } from "node:fs/promises";

await import("./generate-service-pages.mjs");

const output = new URL("./dist/", import.meta.url);
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const file of [
  "index.html",
  "privacidad.html",
  "auditoria-web.html",
  "seo-tecnico.html",
  "rendimiento-web.html",
  "seguridad-web.html",
  "seguridad-aplicaciones-ia.html",
  "seguridad-apis.html",
  "seguridad-agentes-ia.html",
  "hardening-infraestructura-nube.html",
  "codegurex-sentinel.html",
  "caso-codegurex.html",
  "nosotros.html",
  "fundador.html",
  "contacto.html",
  "styles.css",
  "home-next.css",
  "home-sections.css",
  "home-next.js",
  "internal-next.css",
  "company-pages.css",
  "script.js",
  "analytics.js",
  "robots.txt",
  "sitemap.xml",
  "site.webmanifest",
  "_headers",
  "favicon.ico",
  "favicon-cg.ico",
  "favicon-512.png",
  "og.png",
  "og-light.png",
  "og-milk-sea.png",
  "og-violet-reference.png",
  "CNAME",
  ".nojekyll",
]) {
  await copyFile(
    new URL(`./${file}`, import.meta.url),
    new URL(`./dist/${file}`, import.meta.url),
  );
}
await cp(
  new URL("./img/", import.meta.url),
  new URL("./dist/img/", import.meta.url),
  { recursive: true },
);
console.log("Build completed: dist/");
