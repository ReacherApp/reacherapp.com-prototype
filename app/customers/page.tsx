import type { Metadata } from "next";
import Link from "next/link";
import { ReacherFooter, ReacherHeader } from "@/components/ReacherChrome";
import CustomersGrid from "@/components/CustomersGrid";
import { customers } from "@/lib/customers";
import { localizedAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Customers | Reacher",
  description:
    "Brands winning with Reacher Plus — see how TikTok Shop sellers are scaling their affiliate programs.",
  alternates: localizedAlternates("/customers"),
};

export default function CustomersPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-black">
      <ReacherHeader active="" />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#eef4ff] px-6 pb-10 pt-[124px] text-center md:pt-[142px]">
        <div className="absolute left-1/2 top-[-150px] h-[620px] w-[94%] max-w-[1180px] -translate-x-1/2 rounded-[100%] bg-[#335CFF]/20 blur-[112px]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(219,229,255,0.72)_0%,rgba(239,244,255,0.88)_52%,#ffffff_100%)]" />
        <div className="relative z-10 mx-auto max-w-[1080px]">
          <h1 className="mx-auto max-w-[920px] text-[44px] font-semibold leading-[1.04] tracking-[-0.05em] text-[#05070d] md:text-[68px]">
            Brands Winning with Reacher Plus
          </h1>
          <p className="mx-auto mt-6 max-w-[680px] text-[18px] leading-[1.55] text-black/58 md:text-[20px]">
            See how TikTok Shop sellers are scaling their affiliate programs with Reacher Plus.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 pb-24 pt-12">
        <div className="mx-auto max-w-[1180px]">
          <CustomersGrid customers={customers} />
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
