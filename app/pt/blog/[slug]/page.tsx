import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ReacherFooter, ReacherHeader } from "@/components/ReacherChrome";
import { DEFAULT_AUTHOR_IMAGE, formatBlogDate, getAllBlogPosts, getBlogPost, readingTime } from "@/lib/blog";
import { localizedAlternates } from "@/lib/seo";

type BlogPostPtPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllBlogPosts("pt").map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPtPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug, "pt");
  if (!post) return {};

  const image = post.images.hero || post.images.featured || post.images.card || undefined;

  return {
    title: `${post.title} | Reacher`,
    description: post.description,
    alternates: localizedAlternates(`/blog/${post.slug}`, "pt"),
    openGraph: {
      title: post.title,
      description: post.description,
      url: post.canonicalPath,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      locale: "pt_BR",
      images: image ? [{ url: image, alt: post.images.alt || post.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: image ? [image] : undefined,
    },
  };
}

export default async function BlogPostPtPage({ params }: BlogPostPtPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug, "pt");
  if (!post) notFound();

  const heroImage = post.images.hero || post.images.featured || post.images.card;
  const authorImage = post.authorImage || DEFAULT_AUTHOR_IMAGE;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    inLanguage: "pt-BR",
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Person",
      name: post.author || "Reacher Team",
      image: `https://www.reacherapp.com${authorImage}`,
    },
    publisher: {
      "@type": "Organization",
      name: "Reacher",
      url: "https://www.reacherapp.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.reacherapp.com/reacher-assets/contact/nav-logo.png",
      },
    },
    mainEntityOfPage: post.canonicalUrl,
    image: heroImage ? [heroImage] : undefined,
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f1f5ff] text-black">
      <ReacherHeader active="Blog" locale="pt" />
      <article className="relative px-6 pb-[92px] pt-[132px]">
        <div className="absolute inset-x-0 top-0 h-[720px] bg-[radial-gradient(circle_at_44%_7%,rgba(69,94,255,0.32),rgba(151,168,255,0.18)_36%,rgba(247,249,255,0)_72%)]" />
        <div className="relative z-10 mx-auto max-w-[1120px]">
          <Link href="/pt/blog" className="inline-flex rounded-full bg-white/82 px-4 py-2 text-[13px] font-semibold text-[#3559e9] shadow-sm ring-1 ring-slate-200">
            Blog Reacher
          </Link>
          <header className="mt-8 text-center">
            <div className="flex flex-wrap justify-center gap-3 text-[13px] font-semibold text-[#3559e9]">
              <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt, "pt")}</time>
              {readingTime(post, "pt") ? (
                <>
                  <span className="text-black/30">/</span>
                  <span>{readingTime(post, "pt")}</span>
                </>
              ) : null}
            </div>
            <div className="mt-5 flex items-center justify-center gap-3">
              <Image
                src={authorImage}
                alt={post.author || "Reacher Team"}
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover ring-1 ring-black/10"
              />
              <p className="text-[16px] font-semibold leading-5 text-[#111827]">{post.author || "Reacher Team"}</p>
            </div>
            <h1 className="mx-auto mt-5 max-w-[980px] text-[42px] font-semibold leading-[1.06] tracking-[-0.055em] text-[#05070d] md:text-[70px]">
              {post.title}
            </h1>
            <p className="mx-auto mt-6 max-w-[760px] text-[19px] leading-8 text-black/62">{post.description}</p>
          </header>

          {heroImage ? (
            <div className="mx-auto mt-11 max-w-[1040px] overflow-hidden rounded-[28px] bg-white shadow-[0_22px_64px_rgba(15,23,42,0.12)] ring-1 ring-slate-200">
              <Image
                src={heroImage}
                alt={post.images.alt || ""}
                width={1400}
                height={788}
                sizes="(min-width: 1024px) 1040px, 100vw"
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          ) : null}

          <div className="mx-auto mt-12 max-w-[820px] rounded-[28px] bg-white px-6 py-8 shadow-[0_18px_56px_rgba(15,23,42,0.08)] ring-1 ring-slate-200 md:px-10 md:py-12">
            <div
              className="reacher-blog-content"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
          </div>
        </div>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <ReacherFooter locale="pt" />
    </main>
  );
}
