const SITE_URL = "https://www.reacherapp.com";

const aiCrawlers = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-User",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "Amazonbot",
  "Bytespider",
  "anthropic-ai",
];

const sitemapUrls = [
  `${SITE_URL}/sitemap.xml`,
  `${SITE_URL}/blog/sitemap.xml`,
  `${SITE_URL}/pt/blog/sitemap.xml`,
];

export function GET() {
  const crawlerRules = aiCrawlers
    .map((crawler) => `User-Agent: ${crawler}\nAllow: /`)
    .join("\n\n");

  const body = [
    "# Reacher allows AI search, citation, and user-request retrieval for public marketing pages.",
    "# Content-Signal: search=yes, ai-citation=yes, ai-train=no",
    "User-Agent: *",
    "Allow: /",
    "",
    crawlerRules,
    "",
    ...sitemapUrls.map((url) => `Sitemap: ${url}`),
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
