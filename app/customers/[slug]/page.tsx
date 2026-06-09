import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
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
    description: customer.headline,
    alternates: localizedAlternates(`/customers/${customer.slug}`),
  };
}

export default async function CustomerStoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const customer = customers.find((c) => c.slug === slug);
  if (!customer) notFound();

  return (
    <main className="min-h-screen overflow-hidden bg-white text-black">
      <ReacherHeader active="" />

      <section className="relative overflow-hidden bg-[#eef4ff] px-6 pb-12 pt-[116px] md:pt-[136px]">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(219,229,255,0.7)_0%,rgba(239,244,255,0.9)_60%,#ffffff_100%)]" />
        <div className="relative z-10 mx-auto max-w-[980px]">
          <Link href="/customers" className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#3559e9] hover:underline">
            <ArrowLeft size={16} strokeWidth={2.2} /> All customer stories
          </Link>
          <span className="mt-7 inline-flex rounded-full bg-white px-3 py-1 text-[12px] font-semibold text-[#3559e9] ring-1 ring-[#dbe5ff]">
            {customer.category}
          </span>
          <h1 className="mt-5 max-w-[820px] text-[34px] font-semibold leading-[1.12] tracking-[-0.04em] text-[#05070d] md:text-[50px]">
            {customer.brand}
          </h1>
          <p className="mt-5 max-w-[720px] text-[19px] font-medium leading-[1.45] text-slate-700 md:text-[22px]">
            {customer.headline}
          </p>
        </div>
      </section>

      <section className="px-6 pb-8 pt-10">
        <div className="mx-auto max-w-[980px]">
          <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-gradient-to-b from-[#eef5ff] to-white p-2.5 shadow-[0_34px_90px_-26px_rgba(16,24,40,0.28)] md:p-3">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[16px] bg-slate-100">
              <Image src={customer.image} alt={customer.brand} fill sizes="980px" className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {customer.stats.length > 0 ? (
        <section className="px-6 py-8">
          <div className="mx-auto grid max-w-[980px] grid-cols-3 gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center md:gap-5 md:p-7">
            {customer.stats.map((stat) => {
              const [num, ...rest] = stat.split(" ");
              return (
                <div key={stat} className="min-w-0">
                  <strong className="block whitespace-nowrap text-[26px] leading-none tracking-[-0.04em] text-[#2465f6] md:text-[38px]">
                    {num}
                  </strong>
                  <span className="mt-2 block text-[12px] leading-[1.25] text-slate-500 md:text-[14px]">{rest.join(" ")}</span>
                </div>
              );
            })}
          </div>
        </section>
      ) : null}

      <section className="px-6 py-10">
        <figure className="mx-auto max-w-[820px] text-center">
          <span className="font-serif text-[64px] leading-[0.5] text-[#3559e9]/25">&ldquo;</span>
          <blockquote className="mt-4 text-[22px] font-medium leading-[1.5] tracking-[-0.01em] text-slate-800 md:text-[26px]">
            {customer.quote}
          </blockquote>
          <figcaption className="mt-9">
            <p className="text-[16px] font-semibold text-slate-900">{customer.name}</p>
            <p className="text-[14px] text-slate-500">{customer.role} · Verified Customer</p>
          </figcaption>
        </figure>
      </section>

      <section className="bg-[#07131f] px-6 py-24 text-center text-white md:py-32">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-[-0.03em] md:text-[42px]">Become the next story</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/60">
            Automate creator outreach and grow TikTok Shop revenue on autopilot.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="https://portal.reacherapp.com/login"
              className="inline-flex h-[52px] items-center rounded-full border border-white/25 px-7 text-[15px] font-semibold text-white transition hover:bg-white/10"
            >
              Get 14 day free trial
            </Link>
            <Link
              href="https://calendly.com/bora-reacherapp/15min"
              className="inline-flex h-[52px] items-center rounded-full bg-[#3559e9] px-7 text-[15px] font-semibold text-white transition hover:bg-blue-600"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </section>

      <ReacherFooter />
    </main>
  );
}
