import { absoluteUrl, publicPages, sitemapPaths } from "@/lib/agent-discovery";

export function GET() {
  const body = {
    name: "Reacher public site API catalog",
    description:
      "Machine-readable discovery catalog for Reacher public marketing and content endpoints. This catalog exposes content discovery only; it does not expose private account actions.",
    publisher: {
      name: "Reacher Platforms, Inc.",
      url: absoluteUrl("/"),
    },
    endpoints: [
      ...publicPages.map((page) => ({
        name: page.title,
        url: absoluteUrl(page.path),
        method: "GET",
        type: "text/html",
        description: page.description,
      })),
      ...sitemapPaths.map((path) => ({
        name: path,
        url: absoluteUrl(path),
        method: "GET",
        type: "application/xml",
        description: "XML sitemap discovery endpoint.",
      })),
      {
        name: "llms.txt",
        url: absoluteUrl("/llms.txt"),
        method: "GET",
        type: "text/markdown",
        description: "Curated Reacher LLM index.",
      },
      {
        name: "llms-full.txt",
        url: absoluteUrl("/llms-full.txt"),
        method: "GET",
        type: "text/markdown",
        description: "Extended public LLM context for Reacher.",
      },
      {
        name: "feed.xml",
        url: absoluteUrl("/feed.xml"),
        method: "GET",
        type: "application/rss+xml",
        description: "RSS feed for Reacher blog content.",
      },
      {
        name: "agent skills index",
        url: absoluteUrl("/.well-known/agent-skills/index.json"),
        method: "GET",
        type: "application/json",
        description: "Agent skill discovery for understanding and citing Reacher.",
      },
      {
        name: "schemamap.xml",
        url: absoluteUrl("/schemamap.xml"),
        method: "GET",
        type: "application/xml",
        description: "Schema-bearing public URLs.",
      },
    ],
  };

  return Response.json(body, {
    headers: {
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
