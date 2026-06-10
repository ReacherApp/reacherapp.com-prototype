import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ReacherFooter, ReacherHeader } from "@/components/ReacherChrome";
import CustomersGrid from "@/components/CustomersGrid";
import CaseStudyCarousel from "@/components/CaseStudyCarousel";
import BrandMarquee from "@/components/BrandMarquee";
import { customers } from "@/lib/customers";
import { testimonials } from "@/lib/testimonials";
import { localizedAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Customers | Reacher",
  description:
    "Brands winning with Reacher Plus — see how TikTok Shop sellers are scaling their affiliate programs.",
  alternates: localizedAlternates("/customers"),
};

const featured = customers[0];
const rest = customers.slice(1);

export default function CustomersPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-black">
      <ReacherHeader active="" />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#eef4ff] px-6 pb-10 pt-[124px] text-center md:pt-[142px]">
        <div className="absolute left-1/2 top-[-150px] h-[620px] w-[94%] max-w-[1180px] -translate-x-1/2 rounded-[100%] bg-[#335CFF]/20 blur-[112px]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(219,229,255,0.72)_0%,rgba(239,244,255,0.88)_52%,#ffffff_100%)]" />
        <div className="relative z-10 mx-auto max-w-[1080px]">
          <h1 className="mx-auto max-w-[960px] text-[44px] font-semibold leading-[1.04] tracking-[-0.05em] text-[#05070d] md:text-[64px]">
            Brands and Agencies Winning with Reacher
          </h1>
          <p className="mx-auto mt-6 max-w-[680px] text-[18px] leading-[1.55] text-black/58 md:max-w-none md:whitespace-nowrap md:text-[20px]">
            See how TikTok Shop sellers scale their affiliate programs with Reacher and Reacher Plus.
          </p>
        </div>
      </section>

      {/* Brand marquee */}
      <BrandMarquee />

      {/* Testimonials (moved up) */}
      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1180px] text-center">
          <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-[-0.03em] text-slate-950 md:text-[42px]">In their words</h2>
          <CaseStudyCarousel testimonials={testimonials} embedded />
        </div>
      </section>

      {/* Featured story */}
      <section className="px-6 pb-4 pt-14">
        <div className="mx-auto max-w-[1180px]">
          <p className="mb-7 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#3559e9]">Featured story</p>
          <Link
            href={`/customers/${featured.slug}`}
            className="group grid overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_24px_60px_-30px_rgba(16,24,40,0.32)] transition hover:shadow-[0_30px_70px_-28px_rgba(16,24,40,0.4)] md:grid-cols-[1.05fr_1fr]"
          >
            <div className="relative min-h-[260px] overflow-hidden bg-slate-100">
              <Image src={featured.image} alt={featured.brand} fill sizes="(min-width:768px) 600px, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.02]" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a]/55 via-transparent to-transparent" />
              <span className="absolute bottom-5 left-5 flex items-center gap-2.5">
                <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-white p-0.5 ring-1 ring-black/5">
                  <span className="relative block h-full w-full overflow-hidden rounded-full">
                    <Image src={`/reacher-assets/customers/logos/${featured.slug}-avatar.png`} alt={featured.brand} fill sizes="44px" className="object-cover" />
                  </span>
                </span>
                <span className="text-[17px] font-bold tracking-[-0.01em] text-white drop-shadow-sm">{featured.brand}</span>
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <span className="inline-flex w-fit rounded-full bg-[#eef3ff] px-3 py-1 text-[12px] font-semibold text-[#3559e9]">
                {featured.category} · Featured
              </span>
              <p className="mt-5 text-[18px] font-bold text-slate-900">{featured.brand}</p>
              <p className="mt-3 text-[24px] font-semibold leading-[1.3] tracking-[-0.02em] text-slate-950 md:text-[30px]">
                {featured.headline}
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-slate-200 px-3 py-1.5 text-[13px] font-medium text-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="mt-8 inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#3559e9]">
                Read the story
                <ArrowUpRight size={17} strokeWidth={2.2} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Grid + filter tabs */}
      <section className="px-6 pb-24 pt-12">
        <div className="mx-auto max-w-[1180px]">
          <CustomersGrid customers={rest} />
        </div>
      </section>

      {/* Dark CTA */}
      <section className="bg-[#07131f] px-6 py-24 text-center text-white md:py-32">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-[-0.03em] md:text-[42px]">Become the next story</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/60">
            Automate creator outreach and grow TikTok Shop revenue on autopilot.
          </p>
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
