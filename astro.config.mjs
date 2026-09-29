// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // URL sans slash final (/massages et non /massages/) : fichiers .html servis
  // tels quels par Cloudflare Pages, sans redirection, comme les canonicals.
  trailingSlash: 'never',
  build: { format: 'file' },
  vite: {
    plugins: [tailwindcss()]
  }
});