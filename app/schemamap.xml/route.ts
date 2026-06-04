import { absoluteUrl, getAgentBlogEntries, publicPages } from "@/lib/agent-discovery";

function xml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function GET() {
  const pageEntries = publicPages
    .map((page) => `<url><loc>${xml(absoluteUrl(page.path))}</loc><schemaType>WebPage</schemaType></url>`)
    .join("\n");
  const blogEntries = getAgentBlogEntries()
    .map(({ post }) => `<url><loc>${xml(post.canonicalUrl)}</loc><schemaType>BlogPosting</schemaType></url>`)
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<schemamap>
${pageEntries}
${blogEntries}
</schemamap>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
