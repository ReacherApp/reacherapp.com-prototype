import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/lib/blog";

const SITE_URL = "https://www.reacherapp.com";

const staticRoutes = [
  "",
  "/pricing",
  "/affiliate",
  "/blog",
  "/pt/blog",
  "/contact",
  "/changelog",
  "/community",
  "/masterclass",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const blogEntries = getAllBlogPosts().map((post) => ({
    url: post.canonicalUrl,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const ptBlogEntries = getAllBlogPosts("pt").map((post) => ({
    url: post.canonicalUrl,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...blogEntries, ...ptBlogEntries];
}
