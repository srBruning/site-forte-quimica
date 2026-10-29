import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://srbruning.github.io',
  base: '/site-forte-quimica',
  trailingSlash: 'always',
  integrations: [react()],
  vite: { plugins: [tailwindcss()] }
});
