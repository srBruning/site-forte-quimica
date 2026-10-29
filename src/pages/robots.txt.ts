import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const siteUrl = import.meta.env.PUBLIC_SITE_URL?.replace(/\/$/, '');
  const body = `User-agent: *\nAllow: /\n${siteUrl ? `Sitemap: ${siteUrl}/sitemap.xml\n` : ''}`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
