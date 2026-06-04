import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import { PageBadge, ReacherFooter, ReacherHeader } from "@/components/ReacherChrome";
import { localizedAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "What's New | Reacher",
  description: "See the latest Reacher features, improvements, and updates for TikTok Shop growth.",
  alternates: localizedAlternates("/changelog"),
};

const releases = [
  {
    label: "New Feature · Halo Effect Tracker",
    title: "Your TikTok is driving Amazon sales. Now you can prove it.",
    body: "Brands have told us for months: \"I know TikTok lifts my Amazon numbers, but I can't prove it.\" Now you can! The Halo Effect Tracker connects TikTok video views to Amazon search spikes and Shopify sales, filter by SKU and calculate cross-channel ROAS.",
    note: "Our Amazon app is live in the App Store. Shopify app is in final approval.",
    image: "/reacher-assets/changelog/halo.png",
    cta: "Try Halo Effect Tracker",
    href: "https://portal.reacherapp.com/analytics/halo",
  },
  {
    label: "New Feature · Sample Automations",
    title: "Stop bleeding budget on samples that never convert.",
    body: "Set global weekly caps or per-product limits on sample auto-approvals. Auto-approval pauses at your number and resets every Sunday at midnight PST.",
    note: "Sample data now syncs hourly instead of every 2 hours.",
    image: "/reacher-assets/changelog/samples.png",
    cta: "Try Sample Automations",
    href: "https://portal.reacherapp.com/automations/re-engage?stage=Sample+Requested",
  },
  {
    label: "New Feature · Social Intelligence Benchmarks",
    title: "Are you underperforming on affiliate conversion and don't know it?",
    body: "Compare your shop against every other shop on Reacher across 7 metrics at every stage of the affiliate funnel. Filter by GMV segment so you're benchmarking against brands your size.",
    note: "Live across US, UK, Global, Italy, and Brazil.",
    image: "/reacher-assets/changelog/benchmarks.png",
    cta: "Try Benchmarks",
    href: "https://portal.reacherapp.com/social-intelligence/insights",
  },
];

const shipped = [
  ["Rebuilt Automation Details", "No more toggling between tabs to check if an outreach campaign is working. See outreach status per creator, GMV, followers, post rate, and your full message sequence, all on one page."],
  ["Message Safety", "One automation going out with \"[Insert product name]\" to 500 creators will tank your reply rate. Reacher now blocks unfilled placeholders and detects TikTok-banned words (Amazon, WhatsApp, etc.) before anything sends."],
  ["New Onboarding", "Sign-up to first automation in minutes. Upload a list or use AI creator search, walk through Social Intelligence, set up your first Target Collab, and book an onboarding call, all in one flow."],
  ["Social Intelligence: Brands, Products, Trending Videos", "See which creators are driving GMV for your competitors by category, save them to lists, and launch automations to poach them. Now with L2 subcategory filters (e.g. Supplements, Vitamins) across US, UK, Global, Italy, and Brazil."],
  ["LIVEs Analytics", "Dedicated livestream performance page. See which live sessions are actually driving GMV. Available for Pro and above on US, UK, Global, Brazil, and Mexico."],
] as const;

function ScreenshotFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mt-8 overflow-hidden rounded-[24px] shadow-[0_24px_60px_rgba(45,78,198,0.16)]">
      <Image src={src} alt={alt} width={1104} height={720} className="h-auto w-full object-cover" />
    </div>
  );
}

function ReleaseCard({ release }: { release: (typeof releases)[number] }) {
  return (
    <article className="pt-9">
      <p className="text-[15px] font-semibold text-[#3559e9]">{release.label}</p>
      <h2 className="mt-4 text-[33px] font-semibold leading-[1.15] tracking-[-0.045em] text-[#111827]">{release.title}</h2>
      <p className="mt-5 text-[17.5px] leading-8 text-black/70">{release.body}</p>
      <p className="mt-5 flex items-start gap-2.5 text-[15px] font-medium leading-7 text-black/60"><span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e8eeff] text-[#3559e9]"><Info size={13} /></span>{release.note}</p>
      <ScreenshotFrame src={release.image} alt={release.title} />
      <Link
        href={release.href}
        className="mt-7 flex w-fit items-center gap-2.5 rounded-[320px] bg-[#3559e9] px-[14px] py-[7.25px] text-[14px] font-semibold leading-[22.5px] !text-white shadow-[inset_0_0_0_1px_rgba(16,24,40,0.18),inset_0_-2px_0_rgba(16,24,40,0.05),0_1px_2px_rgba(16,24,40,0.05)]"
      >
        {release.cta}
        <span className="flex h-5 w-5 items-center justify-center text-white">
          <ArrowRight size={16} strokeWidth={2} />
        </span>
      </Link>
    </article>
  );
}

export default function ChangelogPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f1f5ff] text-black">
      <ReacherHeader active="What's New" />
      <section className="relative px-6 pb-[72px] pt-[132px]">
        <div className="absolute inset-x-0 top-0 h-[820px] bg-[radial-gradient(circle_at_44%_7%,rgba(69,94,255,0.34),rgba(151,168,255,0.2)_36%,rgba(247,249,255,0)_72%)]" />
        <div className="relative z-10 mx-auto max-w-[880px] text-center">
          <PageBadge>What&apos;s New</PageBadge>
          <h1 className="mt-7 text-[52px] font-semibold leading-[1.02] tracking-[-0.06em] md:text-[78px]">What&apos;s New in Reacher</h1>
          <p className="mx-auto mt-6 max-w-[650px] text-[20px] leading-8 text-black/58">See the latest features, improvements, and updates we&apos;ve shipped to help you grow your TikTok Shop.</p>
        </div>

        <div className="relative z-10 mx-auto mt-[72px] grid max-w-[930px] gap-8 md:grid-cols-[142px_1fr]">
          <div className="pt-9 md:sticky md:top-24 md:h-fit">
            <span className="inline-block text-[15px] font-semibold leading-[23px] text-[#3559e9]">April 6</span>
          </div>
          <div className="px-0 pb-8 md:px-2">
            {releases.map((release, index) => (
              <div key={release.title} className={index > 0 ? "mt-12 pt-8" : ""}>
                <ReleaseCard release={release} />
              </div>
            ))}

            <section className="mt-[72px]">
              <h2 className="text-[36px] font-semibold tracking-[-0.045em] text-[#111827]">Also Shipped</h2>
              <div className="mt-8 space-y-7">
                {shipped.map(([title, copy], index) => (
                  <article key={title} className="grid grid-cols-[44px_1fr] gap-5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3559e9] text-[16px] font-bold text-white">{index + 1}</span>
                    <div>
                      <h3 className="text-[23px] font-semibold tracking-[-0.035em] text-[#111827]">{title}</h3>
                      <p className="mt-3 text-[16.5px] leading-7 text-black/66">{copy}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
      <ReacherFooter />
    </main>
  );
}
