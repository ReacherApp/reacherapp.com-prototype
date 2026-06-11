import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ReacherFooter, ReacherHeader } from "@/components/ReacherChrome";
import CaseStudyCharts from "@/components/CaseStudyCharts";
import { customers } from "@/lib/customers";
import { localizedAlternates } from "@/lib/seo";

export function generateStaticParams() {
  return customers.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const customer = customers.find((c) => c.slug === slug);
  if (!customer) return {};
  return {
    title: `${customer.brand} — Customer Story | Reacher`,
    description: customer.story.subtitle,
    alternates: localizedAlternates(`/customers/${customer.slug}`),
  };
}

const DEMO_URL = "https://calendly.com/bora-reacherapp/15min";

function BrandAvatar({ slug, brand, size = 40 }: { slug: string; brand: string; size?: number }) {
  return (
    <span className="relative shrink-0 overflow-hidden rounded-full ring-1 ring-slate-200" style={{ width: size, height: size }}>
      <Image src={`/reacher-assets/customers/logos/${slug}-avatar.png`} alt={brand} fill sizes={`${size}px`} className="object-cover" />
    </span>
  );
}

export default async function CustomerStoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const customer = customers.find((c) => c.slug === slug);
  if (!customer) notFound();

  const { story } = customer;
  const related = customers.filter((c) => c.slug !== customer.slug).slice(0, 3);

  return (
    <main className="min-h-screen overflow-hidden bg-white text-black">
      <ReacherHeader active="" />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#eef4ff] px-6 pb-14 pt-[110px] md:pt-[130px]">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(219,229,255,0.7)_0%,rgba(239,244,255,0.92)_62%,#ffffff_100%)]" />
        <div className="relative z-10 mx-auto max-w-[1080px]">
          <div className="text-center">
            <Link href="/customers" className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#3559e9] hover:underline">
              <ArrowLeft size={16} strokeWidth={2.2} /> Customers
            </Link>
            <h1 className="mx-auto mt-6 max-w-[900px] text-[34px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#05070d] md:text-[56px]">
              {customer.headline}
            </h1>
            <p className="mx-auto mt-6 max-w-[760px] text-[18px] leading-[1.5] text-slate-600 md:text-[20px]">{story.subtitle}</p>
          </div>

          {/* Hero card: image + company info */}
          <div className="mt-12 grid overflow-hidden rounded-[28px] bg-white shadow-[0_30px_80px_-30px_rgba(16,24,40,0.4)] md:grid-cols-[1.1fr_1fr]">
            <div className="relative min-h-[280px] self-stretch bg-slate-100">
              <Image src={customer.image} alt={customer.brand} fill sizes="(min-width:768px) 560px, 100vw" className="object-cover" priority />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-11">
              <div className="flex items-center gap-3">
                <BrandAvatar slug={customer.slug} brand={customer.brand} size={44} />
                <span className="text-[15px] font-semibold text-slate-400">×</span>
                <Image src="/reacher-assets/contact/nav-logo.png" alt="Reacher" width={44} height={44} className="h-11 w-11 rounded-full object-contain" />
              </div>
              <p className="mt-5 text-[22px] font-bold tracking-[-0.01em] text-slate-950">{customer.brand} × Reacher Plus</p>
              <p className="mt-4 text-[15px] text-slate-700">
                <span className="font-semibold text-slate-900">Industry:</span> {story.industry}
              </p>
              <p className="mt-1.5 text-[15px] text-slate-700">
                <span className="font-semibold text-slate-900">Product Category:</span> {story.productCategory}
              </p>
              <div className="mt-5 flex w-fit flex-col gap-2">
                {customer.tags.map((tag) => (
                  <span key={tag} className="w-full rounded-full border border-slate-200 px-4 py-1.5 text-center text-[14px] font-medium text-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={DEMO_URL} style={{ color: "#ffffff" }} className="mt-7 inline-flex h-[52px] w-fit items-center rounded-full bg-[#07131f] px-8 text-[15px] font-semibold text-white transition hover:bg-black">
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Results at a glance */}
      <section className="px-6 pt-14">
        <div className="mx-auto max-w-[1040px] border-b border-slate-200 pb-12">
          <div className={`grid gap-8 text-center ${story.results.length >= 4 ? "grid-cols-2 md:grid-cols-4" : "grid-cols-1 sm:grid-cols-3"}`}>
            {story.results.map((r) => (
              <div key={r.label}>
                <div className="text-[44px] font-bold leading-none tracking-[-0.04em] text-slate-950 md:text-[56px]">{r.value}</div>
                <div className="mt-3 text-[15px] text-slate-500">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 pt-20 md:pt-24">
        <div className="mx-auto max-w-[760px]">
          <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#3559e9]">About {customer.brand}</p>
          <h2 className="mt-4 text-[30px] font-bold tracking-[-0.03em] text-slate-950 md:text-[38px]">{story.aboutTitle}</h2>
          <div className="mt-6 flex flex-col gap-5">
            {story.about.map((p, i) => (
              <p key={i} className="text-[18px] leading-[1.75] text-slate-700">{p}</p>
            ))}
          </div>
        </div>
        {story.noProductStrip ? null : (
          <div className="mx-auto mt-10 grid max-w-[1040px] gap-4 sm:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="relative aspect-[4/3] overflow-hidden rounded-[18px] bg-slate-100">
                <Image
                  src={`/reacher-assets/customers/products/${customer.slug}-${n}.jpg`}
                  alt={`${customer.brand} product`}
                  fill
                  sizes="(min-width:640px) 340px, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Challenge */}
      <section className="px-6 pt-20 md:pt-24">
        <div className="mx-auto max-w-[760px]">
          <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#3559e9]">The Challenge</p>
          <h2 className="mt-4 text-[28px] font-bold tracking-[-0.03em] text-slate-950 md:text-[34px]">{story.challengeTitle}</h2>
          <div className="mt-6 flex flex-col gap-5">
            {story.challengeParagraphs.map((p, i) => (
              <p key={i} className="text-[18px] leading-[1.75] text-slate-700">{p}</p>
            ))}
          </div>
          {story.challengeQuote ? (
            <blockquote className="mt-9 border-l-[3px] border-[#3559e9] bg-slate-50 py-5 pl-6 pr-5 text-[19px] italic leading-[1.55] text-slate-700">
              {story.challengeQuote}
            </blockquote>
          ) : null}
        </div>
      </section>

      {/* Solution */}
      <section className="px-6 pt-20 md:pt-24">
        <div className="mx-auto max-w-[760px]">
          <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#3559e9]">The Solution</p>
          <h2 className="mt-4 text-[28px] font-bold tracking-[-0.03em] text-slate-950 md:text-[34px]">What Reacher Plus Did</h2>
          <p className="mt-6 text-[18px] leading-[1.75] text-slate-700">{story.solutionIntro}</p>
          <div className="mt-8 flex flex-col gap-4">
            {story.solutions.map((s) => (
              <div key={s.title} className="rounded-2xl bg-[#f1f5ff] p-6 md:p-7">
                <h3 className="text-[19px] font-bold text-[#3559e9]">{s.title}</h3>
                <p className="mt-2.5 text-[17px] leading-[1.6] text-slate-700">{s.body}</p>
              </div>
            ))}
          </div>
          {story.solutionQuote ? (
            <blockquote className="mt-9 border-l-[3px] border-[#3559e9] bg-slate-50 py-5 pl-6 pr-5 text-[19px] italic leading-[1.55] text-slate-700">
              {story.solutionQuote}
            </blockquote>
          ) : null}
        </div>
      </section>

      {/* Result */}
      <section className="px-6 pt-20 md:pt-24">
        <div className="mx-auto max-w-[760px]">
          <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#3559e9]">The Result</p>
          <div className="mt-6 flex flex-col gap-5">
            {story.resultParagraphs.map((p, i) => (
              <p key={i} className="text-[18px] leading-[1.75] text-slate-700">{p}</p>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-[#f1f5ff] p-7 md:p-8">
            <p className="text-[18px] font-bold text-[#3559e9]">Wins:</p>
            <ul className="mt-5 flex flex-col gap-3">
              {story.wins.map((w) => (
                <li key={w.stat} className="flex gap-2 text-[17px] leading-[1.5] text-slate-800">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  <span>
                    <strong className="font-bold text-slate-950">{w.stat}</strong> <span className="text-slate-600">({w.note})</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Numbers — horizontal bars */}
          {story.numbers && story.numbers.length > 0 ? (
            <div className="mt-6 rounded-2xl border border-slate-200 p-7 md:p-8">
              <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-slate-400">Before → With Reacher</p>
              <div className="mt-6 flex flex-col gap-6">
                {story.numbers.map((n, i) => {
                  const width = `${30 + ((story.numbers!.length - i) / story.numbers!.length) * 65}%`;
                  return (
                    <div key={n.label}>
                      <div className="flex items-baseline justify-between">
                        <span className="text-[14px] font-semibold text-slate-800">{n.label}</span>
                        <span className="text-[14px] font-bold text-emerald-600">{n.multiplier}</span>
                      </div>
                      <div className="mt-1 text-[12px] text-slate-400">From {n.before} to {n.after}</div>
                      <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
                        <div className="h-full rounded-full bg-gradient-to-r from-[#6aa8ff] to-[#2465f6]" style={{ width }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}

          {story.charts && story.charts.length > 0 ? <CaseStudyCharts charts={story.charts} /> : null}

          {story.closingQuote ? (
            <blockquote className="mt-9 border-l-[3px] border-[#3559e9] bg-slate-50 py-5 pl-6 pr-5 text-[19px] italic leading-[1.55] text-slate-700">
              {story.closingQuote}
            </blockquote>
          ) : null}
        </div>
      </section>

      {/* Other case studies */}
      {related.length > 0 ? (
        <section className="px-6 pt-20">
          <div className="mx-auto max-w-[1180px]">
            <h2 className="text-[26px] font-bold tracking-[-0.02em] text-slate-950 md:text-[30px]">Other Case Studies</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((c) => (
                <Link
                  key={c.slug}
                  href={`/customers/${c.slug}`}
                  className="group flex flex-col overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_1px_2px_rgba(16,24,40,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-24px_rgba(16,24,40,0.28)]"
                >
                  <div className="relative aspect-[16/11] overflow-hidden bg-slate-100">
                    <Image src={c.image} alt={c.brand} fill sizes="(min-width:1024px) 360px, 50vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
                    <span className="absolute right-4 top-4 inline-flex rounded-full bg-white/90 px-3 py-1 text-[12px] font-semibold text-slate-600 backdrop-blur">{c.group}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2.5">
                      <BrandAvatar slug={c.slug} brand={c.brand} size={28} />
                      <span className="text-[14px] font-bold text-slate-900">{c.brand}</span>
                    </div>
                    <p className="mt-3 text-[17px] font-bold leading-[1.3] text-slate-950">{c.headline}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {c.tags.slice(0, 3).map((t) => (
                        <span key={t} className="rounded-full border border-slate-200 px-2.5 py-1 text-[12px] font-medium text-slate-600">{t}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Dark CTA */}
      <section className="mt-20 bg-[#07131f] px-6 py-24 text-center text-white md:py-32">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-[-0.03em] md:text-[42px]">Want results like this?</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/60">Automate creator outreach and grow TikTok Shop revenue on autopilot.</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="https://portal.reacherapp.com/login" className="inline-flex h-[52px] items-center rounded-full border border-white/25 px-7 text-[15px] font-semibold text-white transition hover:bg-white/10">
              Get 14 day free trial
            </Link>
            <Link href={DEMO_URL} className="inline-flex h-[52px] items-center rounded-full bg-[#3559e9] px-7 text-[15px] font-semibold text-white transition hover:bg-blue-600">
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      <ReacherFooter />
    </main>
  );
}
