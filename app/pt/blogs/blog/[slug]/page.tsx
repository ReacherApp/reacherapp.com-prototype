import { redirect } from "next/navigation";
import { getAllBlogPosts, getBlogPost } from "@/lib/blog";

type BlogPostPtRedirectProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPtRedirectPage({ params }: BlogPostPtRedirectProps) {
  const { slug } = await params;
  const post = getBlogPost(slug, "pt") || getAllBlogPosts("pt").find((item) => item.source?.articleId === slug);
  redirect(post ? post.canonicalPath : "/pt/blog");
}
