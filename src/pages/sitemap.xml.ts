import type { APIRoute } from "astro";
import { SITE } from "../data/site";

// Toutes les pages .astro du dossier pages sont publiques : le sitemap se
// met à jour tout seul quand une page est ajoutée ou supprimée.
const pages = Object.keys(import.meta.glob("./**/*.astro")).map((file) =>
  file.replace(/^\./, "").replace(/(\/index)?\.astro$/, "") || "/",
);

export const GET: APIRoute = () => {
  const urls = pages
    .sort()
    .map((path) => `  <url><loc>${new URL(path, SITE.url).toString()}</loc></url>`)
    .join("\n");
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};
