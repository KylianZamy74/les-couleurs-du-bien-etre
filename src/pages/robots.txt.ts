import type { APIRoute } from "astro";
import { SITE } from "../data/site";

// Aucun robot exclu (moteurs de recherche et IA compris).
export const GET: APIRoute = () =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL("/sitemap.xml", SITE.url).toString()}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
