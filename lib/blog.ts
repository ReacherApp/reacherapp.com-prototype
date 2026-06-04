import fs from "node:fs";
import path from "node:path";

const SITE_URL = "https://www.reacherapp.com";
export const DEFAULT_AUTHOR_IMAGE = "/reacher-assets/contact/nav-logo.png";

export type BlogLocale = "en" | "pt";

const BLOG_DIRS: Record<BlogLocale, string> = {
  en: path.join(process.cwd(), "content", "blog"),
  pt: path.join(process.cwd(), "content", "blog-pt"),
};

export type BlogPost = {
  id: string;
  orgId?: string;
  brandKitId?: string;
  title: string;
  slug: string;
  description: string;
  author: string;
  authorImage?: string | null;
  publishedAt: string;
  updatedAt: string;
  canonicalPath: string;
  canonicalUrl: string;
  wordCount: number | null;
  images: {
    featured: string | null;
    hero: string | null;
    card: string | null;
    alt: string;
  };
  source?: {
    table: string;
    articleId: string;
    contentHubUrl: string;
    sourceArticleId?: string;
    locale?: string;
  };
  contentHtml: string;
};

function isBlogPost(value: unknown): value is BlogPost {
  if (!value || typeof value !== "object") return false;
  const post = value as Partial<BlogPost>;
  return Boolean(post.title && post.slug && post.contentHtml && post.canonicalPath);
}

function getBlogDir(locale: BlogLocale) {
  return BLOG_DIRS[locale];
}

export function getAllBlogPosts(locale: BlogLocale = "en"): BlogPost[] {
  const blogDir = getBlogDir(locale);
  if (!fs.existsSync(blogDir)) return [];

  return fs
    .readdirSync(blogDir)
    .filter((file) => file.endsWith(".json"))
    .map((file) => {
      const fullPath = path.join(blogDir, file);
      const parsed = JSON.parse(fs.readFileSync(fullPath, "utf8")) as unknown;
      if (!isBlogPost(parsed)) {
        throw new Error(`Invalid blog post payload: ${fullPath}`);
      }
      return parsed;
    })
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
}

export function getBlogPost(slug: string, locale: BlogLocale = "en"): BlogPost | undefined {
  return getAllBlogPosts(locale).find((post) => post.slug === slug);
}

export function getBlogUrl(post: Pick<BlogPost, "canonicalPath">) {
  return `${SITE_URL}${post.canonicalPath}`;
}

export function formatBlogDate(value: string, locale: BlogLocale = "en") {
  return new Intl.DateTimeFormat(locale === "pt" ? "pt-BR" : "en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

export function readingTime(post: Pick<BlogPost, "wordCount">, locale: BlogLocale = "en") {
  if (!post.wordCount) return null;
  const minutes = Math.max(1, Math.round(post.wordCount / 220));
  return locale === "pt" ? `${minutes} min de leitura` : `${minutes} min read`;
}
