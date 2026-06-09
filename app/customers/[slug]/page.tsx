import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ReacherFooter, ReacherHeader } from "@/components/ReacherChrome";
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
    description: customer.story.summary,
    alternates: localizedAlternates(`/customers/${customer.slug}`),
  };
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
      <section className="relative overflow-hidden bg-[#eef4ff] px-6 pb-12 pt-[112px] md:pt-[132px]">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(219,229,255,0.7)_0%,rgba(239,244,255,0.9)_60%,#ffffff_100%)]" />
        <div className="relative z-10 mx-auto max-w-[920px] text-center">
          <Link href="/customers" className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#3559e9] hover:underline">
            <ArrowLeft size={16} strokeWidth={2.2} /> Customers
          </Link>
          <p className="mt-7 text-[14px] font-bold uppercase tracking-[0.14em] text-[#3559e9]">{customer.brand}</p>
          <h1 className="mx-auto mt-4 max-w-[820px] text-[32px] font-semibold leading-[1.14] tracking-[-0.04em] text-[#05070d] md:text-[48px]">
            {customer.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-[680px] text-[18px] leading-[1.5] text-slate-600 md:text-[20px]">{story.summary}</p>
          <p className="mt-4 text-[14px] font-medium text-slate-500">{story.joined}</p>
        </div>
      </section>

      {/* Hero image */}
      <section className="px-6 pb-2 pt-10">
        <div className="mx-auto max-w-[1040px]">
          <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-gradient-to-b from-[#eef5ff] to-white p-2.5 shadow-[0_34px_90px_-26px_rgba(16,24,40,0.28)] md:p-3">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[16px] bg-slate-100">
              <Image src={customer.image} alt={customer.brand} fill sizes="1040px" className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Results at a glance */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-[1040px] rounded-[24px] border border-slate-200 bg-[#f7faff] p-7 md:p-9">
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[#3559e9]">Results at a glance</p>
          <div className={`mt-6 grid gap-5 ${story.results.length >= 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3"}`}>
            {story.results.map((r) => (
              <div key={r.label} className="rounded-2xl border border-slate-200 bg-white p-5 text-center">
                <strong className="block text-[28px] font-bold tracking-[-0.03em] text-[#2465f6] md:text-[36px]">{r.value}</strong>
                <span className="mt-2 block text-[13px] leading-[1.3] text-slate-500">{r.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 pb-2 pt-6">
        <div className="mx-auto max-w-[760px]">
          <h2 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[#3559e9]">About {customer.brand}</h2>
          <p className="mt-4 text-[18px] leading-[1.65] text-slate-700">{story.about}</p>
        </div>
      </section>

      {/* Challenge */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-[760px]">
          <h2 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[#3559e9]">The challenge</h2>
          <p className="mt-4 text-[24px] font-semibold leading-[1.3] tracking-[-0.02em] text-slate-950 md:text-[28px]">{story.challenge.title}</p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {story.challenge.points.map((p) => (
              <span key={p} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-[14px] font-medium text-slate-700">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="px-6 py-6">
        <div className="mx-auto flex max-w-[760px] flex-col gap-10">
          {story.solutions.map((s) => (
            <div key={s.label} className="border-l-[3px] border-[#3559e9] pl-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#3559e9]">{s.label}</p>
              <h3 className="mt-2 text-[22px] font-semibold tracking-[-0.02em] text-slate-950 md:text-[24px]">{s.title}</h3>
              <p className="mt-3 text-[18px] leading-[1.6] text-slate-700">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The numbers */}
      {story.numbers && story.numbers.length > 0 ? (
        <section className="px-6 py-10">
          <div className="mx-auto max-w-[760px]">
            <h2 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[#3559e9]">The numbers</h2>
            <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
              <div className="grid grid-cols-[1.4fr_1fr_1fr] bg-slate-50 px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.06em] text-slate-500">
                <span>Metric</span>
                <span>Before</span>
                <span className="text-[#2465f6]">With Reacher</span>
              </div>
              {story.numbers.map((n, i) => (
                <div key={n.label} className={`grid grid-cols-[1.4fr_1fr_1fr] items-center px-5 py-4 text-[15px] ${i > 0 ? "border-t border-slate-100" : ""}`}>
                  <span className="font-medium text-slate-800">{n.label}</span>
                  <span className="text-slate-500">{n.before}</span>
                  <span className="font-bold text-[#2465f6]">{n.after}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Related */}
      {related.length > 0 ? (
        <section className="px-6 py-16">
          <div className="mx-auto max-w-[1040px]">
            <h2 className="text-center text-2xl font-bold tracking-[-0.02em] text-slate-950 md:text-[30px]">More customer stories</h2>
            <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((c) => (
                <Link
                  key={c.slug}
                  href={`/customers/${c.slug}`}
                  className="group flex flex-col overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_1px_2px_rgba(16,24,40,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-24px_rgba(16,24,40,0.28)]"
                >
                  <div className="relative aspect-[16/11] overflow-hidden bg-slate-100">
                    <Image src={c.image} alt={c.brand} fill sizes="(min-width:1024px) 320px, 50vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a]/55 via-transparent to-transparent" />
                    <span className="absolute left-4 top-4 inline-flex max-w-[80%] truncate rounded-full bg-white/90 px-3 py-1 text-[12px] font-semibold text-[#3559e9] backdrop-blur">{c.category}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-[15px] font-bold text-slate-900">{c.brand}</p>
                    <p className="mt-2 text-[15px] font-semibold leading-[1.4] text-slate-700">{c.headline}</p>
                    <span className="mt-5 inline-flex items-center gap-1 text-[14px] font-semibold text-[#3559e9]">
                      Read the story
                      <ArrowUpRight size={16} strokeWidth={2.2} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Dark CTA */}
      <section className="bg-[#07131f] px-6 py-24 text-center text-white md:py-32">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-[-0.03em] md:text-[42px]">Want results like this?</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/60">Automate creator outreach and grow TikTok Shop revenue on autopilot.</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="https://portal.reacherapp.com/login" className="inline-flex h-[52px] items-center rounded-full border border-white/25 px-7 text-[15px] font-semibold text-white transition hover:bg-white/10">
              Get 14 day free trial
            </Link>
            <Link href="https://calendly.com/bora-reacherapp/15min" className="inline-flex h-[52px] items-center rounded-full bg-[#3559e9] px-7 text-[15px] font-semibold text-white transition hover:bg-blue-600">
              Book a demo
            </Link>
          </div>
        </div>
      </section>

      <ReacherFooter />
    </main>
  );
}
