import { getAgentBlogEntries, SITE_URL } from "@/lib/agent-discovery";

function xml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function GET() {
  const items = getAgentBlogEntries()
    .slice(0, 24)
    .map(({ locale, post }) => {
      const language = locale === "pt" ? "pt-BR" : "en-US";
      return `<item>
  <title>${xml(post.title)}</title>
  <link>${xml(post.canonicalUrl)}</link>
  <guid isPermaLink="true">${xml(post.canonicalUrl)}</guid>
  <description>${xml(post.description)}</description>
  <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
  <dc:language>${language}</dc:language>
</item>`;
    })
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/">
<channel>
  <title>Reacher Blog</title>
  <link>${SITE_URL}/blog</link>
  <description>TikTok Shop creator discovery, affiliate operations, and social commerce growth playbooks from Reacher.</description>
  <language>en-US</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
</channel>
</rss>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
