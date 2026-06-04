import { notFound, redirect } from "next/navigation";

const legacyBlogRedirects: Record<string, string> = {
  "5-tiktok-shop-mistakes-that-are-holding-you-back-(and-how-to-fix-them)":
    "/blog/5-tiktok-shop-mistakes-that-are-holding-you-back-and-how-to-fix-them",
  "how-reacher-is-transforming-tiktok-shop-affiliate-marketing-success-stories":
    "/blog/how-reacher-is-transforming-tiktok-shop-affiliate-marketing-success-stories",
  "welcome-to-reacher": "/blog/welcome-to-reacher",
};

type LegacyBlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(legacyBlogRedirects).map((slug) => ({ slug }));
}

export default async function LegacyBlogPostPage({ params }: LegacyBlogPostPageProps) {
  const { slug } = await params;
  const destination = legacyBlogRedirects[slug];

  if (!destination) {
    notFound();
  }

  redirect(destination);
}
