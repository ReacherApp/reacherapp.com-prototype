import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageBadge, ReacherFooter, ReacherHeader } from "@/components/ReacherChrome";
import { DEFAULT_AUTHOR_IMAGE, formatBlogDate, getAllBlogPosts, readingTime } from "@/lib/blog";
import type { BlogPost } from "@/lib/blog";
import { localizedAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Blog de crescimento TikTok Shop | Reacher",
  description:
    "Guias de descoberta de criadores, afiliados da TikTok Shop e social commerce da Reacher.",
  alternates: localizedAlternates("/blog", "pt"),
};

function AuthorLine({ post, compact = false }: { post: BlogPost; compact?: boolean }) {
  const authorImage = post.authorImage || DEFAULT_AUTHOR_IMAGE;

  return (
    <div className={`mt-6 flex items-center gap-3 ${compact ? "" : "pt-1"}`}>
      <Image
        src={authorImage}
        alt={post.author || "Reacher Team"}
        width={44}
        height={44}
        className="h-11 w-11 shrink-0 rounded-full object-cover ring-1 ring-black/10"
      />
      <div className="min-w-0">
        <p className="truncate text-[15px] font-semibold leading-5 text-[#111827]">{post.author || "Reacher Team"}</p>
        <time className="mt-0.5 block text-[14px] leading-5 text-black/48" dateTime={post.publishedAt}>
          {formatBlogDate(post.publishedAt, "pt")}
        </time>
      </div>
    </div>
  );
}

export default function BlogPtPage() {
  const posts = getAllBlogPosts("pt");
  const [featured, ...rest] = posts;

  return (
    <main className="min-h-screen overflow-hidden bg-[#f1f5ff] text-black">
      <ReacherHeader active="Blog" locale="pt" />
      <section className="relative overflow-hidden px-6 pb-[76px] pt-[140px]">
        <div className="absolute inset-x-0 top-0 h-[760px] bg-[radial-gradient(circle_at_44%_7%,rgba(69,94,255,0.32),rgba(151,168,255,0.18)_36%,rgba(247,249,255,0)_72%)]" />
        <div className="relative z-10 mx-auto max-w-[1220px]">
          <div className="text-center">
            <PageBadge>Blog Reacher</PageBadge>
            <h1 className="mx-auto mt-6 max-w-[880px] text-[46px] font-semibold leading-[1.05] tracking-[-0.055em] text-[#05070d] md:text-[72px]">
              Playbooks de crescimento para TikTok Shop
            </h1>
            <p className="mx-auto mt-6 max-w-[720px] text-[19px] leading-[1.55] text-black/60">
              Guias práticos para descoberta de criadores, operações de afiliados, campanhas de social commerce e crescimento de receita da TikTok Shop com o Reacher.
            </p>
          </div>

          {featured ? (
            <Link
              href={featured.canonicalPath}
              className="group mt-12 grid overflow-hidden rounded-[28px] bg-white text-left shadow-[0_22px_64px_rgba(15,23,42,0.10)] ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(15,23,42,0.14)] md:grid-cols-[1fr_0.86fr]"
            >
              <div className="relative min-h-[320px] bg-[#dce7ff]">
                {featured.images.card || featured.images.hero || featured.images.featured ? (
                  <Image
                    src={featured.images.card || featured.images.hero || featured.images.featured || ""}
                    alt={featured.images.alt || ""}
                    fill
                    sizes="(min-width: 768px) 55vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    priority
                  />
                ) : null}
              </div>
              <div className="flex flex-col justify-center px-7 py-8 md:px-10">
                <div className="flex flex-wrap gap-3 text-[13px] font-semibold text-[#3559e9]">
                  <span>Destaque</span>
                  <span className="text-black/30">/</span>
                  <time dateTime={featured.publishedAt}>{formatBlogDate(featured.publishedAt, "pt")}</time>
                  {readingTime(featured, "pt") ? (
                    <>
                      <span className="text-black/30">/</span>
                      <span>{readingTime(featured, "pt")}</span>
                    </>
                  ) : null}
                </div>
                <h2 className="mt-5 text-[32px] font-semibold leading-[1.08] tracking-[-0.045em] text-[#05070d] md:text-[46px]">
                  {featured.title}
                </h2>
                <p className="mt-5 text-[17px] leading-7 text-black/60">{featured.description}</p>
                <AuthorLine post={featured} />
                <span className="mt-8 inline-flex w-fit rounded-full bg-[#3559e9] px-5 py-3 text-[14px] font-semibold text-white shadow-[inset_0_2px_4px_rgba(255,255,255,0.25)]">
                  Ler artigo
                </span>
              </div>
            </Link>
          ) : (
            <div className="mx-auto mt-12 max-w-[720px] rounded-[24px] bg-white p-8 text-center shadow-[0_16px_46px_rgba(15,23,42,0.08)] ring-1 ring-slate-200">
              <p className="text-[18px] leading-7 text-black/60">Ainda não há artigos publicados.</p>
            </div>
          )}

          {rest.length ? (
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {rest.map((post) => (
                <Link
                  key={post.id}
                  href={post.canonicalPath}
                  className="group flex flex-col overflow-hidden rounded-[24px] bg-white text-left shadow-[0_8px_8px_-4px_rgba(16,24,40,0.03),0_20px_24px_-4px_rgba(16,24,40,0.08)] ring-1 ring-slate-200/70 transition hover:-translate-y-1"
                >
                  <div className="h-[220px] bg-[#dce7ff]">
                    {post.images.card || post.images.hero || post.images.featured ? (
                      <Image
                        src={post.images.card || post.images.hero || post.images.featured || ""}
                        alt={post.images.alt || ""}
                        width={760}
                        height={456}
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]"
                      />
                    ) : null}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <time className="text-[13px] font-semibold text-[#3559e9]" dateTime={post.publishedAt}>
                      {formatBlogDate(post.publishedAt, "pt")}
                    </time>
                    <h2 className="mt-3 text-[22px] font-semibold leading-[1.18] tracking-[-0.035em] text-[#111827]">{post.title}</h2>
                    <p className="mt-3 line-clamp-3 text-[14px] leading-6 text-black/56">{post.description}</p>
                    <div className="mt-auto">
                      <AuthorLine post={post} compact />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </section>
      <ReacherFooter locale="pt" />
    </main>
  );
}
