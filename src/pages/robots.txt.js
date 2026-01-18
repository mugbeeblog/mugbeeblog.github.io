export function GET({ site }) {
  const sitemapUrl = new URL("sitemap-index.xml", site);

  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${sitemapUrl}`;

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
