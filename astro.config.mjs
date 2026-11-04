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
        locales: { en: 'en-US', ko: 'ko-KR' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
