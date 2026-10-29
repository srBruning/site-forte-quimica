import type { APIRoute } from 'astro';
import { posts } from '../data/posts';

export const GET: APIRoute = () => {
  const siteUrl = import.meta.env.PUBLIC_SITE_URL?.replace(/\/$/, '');
  if (!siteUrl) return new Response('Configure PUBLIC_SITE_URL para gerar o sitemap.', { status: 404 });
  const paths = ["/", "/blog/", ...posts.map(post => `/blog/${post.slug}/`)];
  const urls = paths.map(path => `<url><loc>${siteUrl}${path}</loc></url>`).join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
