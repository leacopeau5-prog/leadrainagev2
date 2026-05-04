// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://lea-drainage.fr',
  output: 'static',
  trailingSlash: 'ignore',
  compressHTML: true,

  integrations: [
    sitemap(),
    icon({
      include: {
        lucide: ['*'],
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },

  build: {
    inlineStylesheets: 'auto',
  },
});
