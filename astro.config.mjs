// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://portfolio.beege.works',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko'],
    routing: {
      // English stays at "/", Korean lives under "/ko/"
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        // Same codes as the hreflang tags in Layout.astro
        locales: { en: 'en', ko: 'ko' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
