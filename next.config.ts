import path from "node:path";
import type { NextConfig } from "next";

const SITE_URL = "https://www.reacherapp.com";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
      },
      {
        protocol: "https",
        hostname: "nfrgpkjuwvavdbhguzot.supabase.co",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Link",
            value: [
              `<${SITE_URL}/llms.txt>; rel="alternate"; type="text/markdown"; title="llms.txt"`,
              `<${SITE_URL}/llms-full.txt>; rel="alternate"; type="text/markdown"; title="llms-full.txt"`,
              `<${SITE_URL}/sitemap.xml>; rel="sitemap"; type="application/xml"`,
              `<${SITE_URL}/blog/sitemap.xml>; rel="sitemap"; type="application/xml"`,
              `<${SITE_URL}/pt/blog/sitemap.xml>; rel="sitemap"; type="application/xml"`,
              `<${SITE_URL}/feed.xml>; rel="alternate"; type="application/rss+xml"; title="Reacher Blog"`,
              `<${SITE_URL}/.well-known/api-catalog>; rel="service-desc"; type="application/json"`,
              `<${SITE_URL}/.well-known/agent-skills/index.json>; rel="agent-skills"; type="application/json"`,
              `<${SITE_URL}/schemamap.xml>; rel="schema"; type="application/xml"`,
            ].join(", "),
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: blob: https:; font-src 'self' data: https:; connect-src 'self' https:; frame-src 'self' https:; frame-ancestors 'self'; base-uri 'self'; form-action 'self' https://portal.reacherapp.com https://meetings.hubspot.com;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
