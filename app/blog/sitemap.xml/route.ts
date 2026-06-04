import { getAllBlogPosts } from "@/lib/blog";

export const dynamic = "force-static";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const urls = getAllBlogPosts()
    .map((post) => {
      const lastmod = new Date(post.updatedAt || post.publishedAt).toISOString();
      return `  <url>
    <loc>${escapeXml(post.canonicalUrl)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
    })
    .join("\n");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`, {
    headers: {
      "content-type": "application/xml; charset=utf-8",
    },
  });
}
