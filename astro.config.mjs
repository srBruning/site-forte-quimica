import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

const githubPages = process.env.DEPLOY_TARGET === 'github-pages';
const vercelDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const site = githubPages
  ? 'https://srbruning.github.io'
  : process.env.PUBLIC_SITE_URL || (vercelDomain ? `https://${vercelDomain}` : undefined);

export default defineConfig({
  site,
  base: githubPages ? '/site-forte-quimica' : '/',
  trailingSlash: 'always',
  integrations: [react()],
  vite: { plugins: [tailwindcss()] }
});
