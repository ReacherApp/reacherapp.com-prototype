import { getAllBlogPosts } from "@/lib/blog";

export const SITE_URL = "https://www.reacherapp.com";

export const publicPages = [
  {
    title: "Homepage",
    path: "/",
    description: "Reacher overview for TikTok Shop brands that want to scale creator discovery, outreach, CRM, campaigns, and analytics.",
  },
  {
    title: "Pricing",
    path: "/pricing",
    description: "Reacher plans for brands starting or scaling TikTok Shop affiliate outreach.",
  },
  {
    title: "Affiliate Program",
    path: "/affiliate",
    description: "Affiliate program information for partners referring brands to Reacher.",
  },
  {
    title: "Blog",
    path: "/blog",
    description: "English TikTok Shop growth, creator outreach, affiliate operations, and social commerce playbooks.",
  },
  {
    title: "Portuguese Blog",
    path: "/pt/blog",
    description: "Portuguese TikTok Shop growth and creator operations playbooks.",
  },
  {
    title: "Contact",
    path: "/contact",
    description: "Reacher contact and sales call page.",
  },
  {
    title: "Masterclass",
    path: "/masterclass",
    description: "TikTok Shop and creator growth masterclass page.",
  },
  {
    title: "Community",
    path: "/community",
    description: "Community page for Reacher and social commerce operators.",
  },
  {
    title: "Changelog",
    path: "/changelog",
    description: "Product update and changelog page.",
  },
];

export const sitemapPaths = ["/sitemap.xml", "/blog/sitemap.xml", "/pt/blog/sitemap.xml"];

export function absoluteUrl(path: string) {
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path}`;
}

export function plainTextFromHtml(html: string, maxChars = 1800) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxChars);
}

export function getAgentBlogEntries() {
  return [
    ...getAllBlogPosts("en").map((post) => ({ locale: "en", post })),
    ...getAllBlogPosts("pt").map((post) => ({ locale: "pt", post })),
  ];
}
