// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from "@astrojs/sitemap";

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
  fonts: [{
    provider: fontProviders.fontsource(),
      name: "Poppins",
      cssVariable: "--font-poppins"
    }]
  }
});