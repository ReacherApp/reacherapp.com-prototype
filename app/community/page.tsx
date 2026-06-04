import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, CreditCard, MessageCircle, MousePointer2, Plus, Search, Settings2, Sparkles, Users } from "lucide-react";
import { ReacherFooter, ReacherHeader } from "@/components/ReacherChrome";
import { localizedAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Creator Community | Reacher",
  description:
    "Direct access to pre-vetted creators with growth analytics and end-to-end payment management.",
  alternates: localizedAlternates("/community"),
};

const features = [
  [Search, "Discover Top Creators", "Find and vet the perfect creators for your brand based on performance metrics, audience fit, and conversion potential—all filtered by your specific industry and product category."],
  [Settings2, "Manage Campaigns Effortlessly", "Launch, track, and optimize campaigns with intuitive workflows. Set deliverables, send automated reminders, and measure performance all in one centralized dashboard."],
  [CreditCard, "Automate Creator Payments", "Streamline financial workflows with flexible payment models for retainers, commissions, and performance bonuses. Send payments with one click and maintain complete payment history."],
  [BarChart3, "Track Content Performance", "Measure the impact of creator content with real-time analytics on views, engagement, conversion rates, and GMV. Compare performance across creators to identify winning strategies."],
  [Users, "Flexible Partnership Models", "Support diverse creator relationships from one-time campaigns to long-term ambassadorships. Customize terms for fixed fees, commission structures, performance-based incentives, and hybrid models."],
  [MessageCircle, "Generate Actionable Insights", "Transform creator data into strategic decisions with comprehensive reporting to optimize your marketing spend. Export custom reports and share results with stakeholders in seconds."],
] as const;

const faqs = [
  {
    question: "How does Creator Community integrate with my existing TikTok Shop account?",
    answer:
      "Creator Community connects around your existing TikTok Shop workflow so you can manage creators, campaign activity, content performance, and payment status without replacing the systems your team already uses.",
  },
  {
    question: "What payment models does Creator Community support?",
    answer:
      "You can manage fixed retainers, one-off campaign fees, commissions, performance bonuses, and hybrid agreements. The goal is to keep every creator’s terms, deliverables, and payout history in one organized place.",
  },
  {
    question: "How do I measure ROI from my creator partnerships?",
    answer:
      "The dashboard tracks creator output, engagement, conversion signals, and GMV impact so you can compare partnerships, spot top performers, and decide where to reinvest your creator budget.",
  },
  {
    question: "Can I use Creator Community to find new creators for my brand?",
    answer:
      "Yes. Reacher helps surface pre-vetted, high-performing creators and lets you filter by product category, audience fit, performance signals, and partnership potential.",
  },
  {
    question: "Is there a limit to how many creators I can manage with Creator Community?",
    answer:
      "Creator Community is built for scaling teams. Limits depend on your plan and workflow needs, but the system is designed to manage large creator rosters, multiple campaigns, and ongoing partnerships.",
  },
];

function Logos() {
  const logos = ["logo-2.png", "logo-3.png", "logo-4.png", "logo-2.png"];
  return (
    <section className="bg-white px-6 py-14 text-center">
      <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-[#141a24]/85">Join 100+ companies already growing</h2>
      <div className="mx-auto mt-10 flex max-w-[1180px] items-center justify-center gap-14 overflow-hidden opacity-65 grayscale">
        <div className="flex h-[64px] min-w-[190px] items-center justify-center">
          <Image src="/reacher-assets/community/logo-1.svg" alt="The Office Oasis logo" width={220} height={60} className="max-h-[48px] w-auto object-contain" />
        </div>
        {logos.slice(0, 2).map((logo, index) => (
          <div key={`${logo}-${index}`} className="flex h-[64px] min-w-[155px] items-center justify-center">
            <Image src={`/reacher-assets/community/${logo}`} alt="Company logo" width={190} height={80} className="max-h-[64px] w-auto object-contain" />
          </div>
        ))}
        <div className="flex h-[64px] min-w-[190px] items-center justify-center text-center text-[18px] font-semibold leading-5 tracking-[-0.03em] text-black/72">Armed American<br />Supply</div>
        <div className="flex h-[64px] min-w-[190px] items-center justify-center">
          <Image src="/reacher-assets/community/logo-4.png" alt="Company logo" width={210} height={64} className="max-h-[54px] w-auto object-contain" />
        </div>
      </div>
    </section>
  );
}

function FeatureGrid() {
  return (
    <section className="bg-white px-6 py-[72px]">
      <div className="mx-auto max-w-[1180px] text-center">
        <p className="text-[15px] font-semibold text-[#3559e9]/85">Features</p>
        <h2 className="mx-auto mt-4 max-w-[820px] text-[40px] font-semibold leading-[1.1] tracking-[-0.045em] text-[#05070d] md:text-[58px]">
          One platform to manage your entire creator ecosystem
        </h2>
        <p className="mx-auto mt-5 max-w-[760px] text-[18px] leading-8 text-black/52">
          Streamline workflows, eliminate manual tasks, and focus on building meaningful creator partnerships that drive real business results.
        </p>
        <div className="mt-14 grid gap-x-9 gap-y-12 text-left md:grid-cols-3">
          {features.map(([Icon, title, copy]) => (
            <article key={title}>
              <div className="flex h-11 w-11 items-center justify-center rounded-[13px] bg-[#f0f4ff] text-[#3559e9]/75">
                <Icon size={24} strokeWidth={1.9} />
              </div>
              <h3 className="mt-6 text-[20px] font-semibold tracking-[-0.02em] text-[#111827]">{title}</h3>
              <p className="mt-3 text-[15.5px] leading-7 text-black/52">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="bg-[#f7f9fd] px-6 py-[92px] text-center">
      <div className="mx-auto max-w-[1080px]">
        <p className="inline-flex items-center gap-2 text-[25px] font-semibold tracking-[-0.04em] text-[#3559e9]/85"><span className="text-[30px]">✦</span> Wildcrafted</p>
        <blockquote className="mx-auto mt-8 max-w-[1020px] text-[32px] font-semibold leading-[1.24] tracking-[-0.04em] text-[#111827] md:text-[46px]">
          Reacher has been a game-changer for us. Their software and automations saved us DAYS of manual work and is much easier to use than Seller Center. Thanks to Reacher we hit our $1M GMV milestone!
        </blockquote>
        <Image src="/reacher-assets/community/amelie.png" alt="Amélie Laurent" width={68} height={68} className="mx-auto mt-8 h-[68px] w-[68px] rounded-full object-cover" />
        <p className="mt-5 text-[18px] font-semibold text-[#111827]">Amélie Laurent</p>
        <p className="mt-1 text-[16px] text-black/52">Product Manager, Wildcrafted</p>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="bg-white px-6 py-[76px] text-center">
      <div className="mx-auto max-w-[900px]">
        <h2 className="text-[38px] font-semibold tracking-[-0.04em] text-[#111827] md:text-[48px]">Frequently asked questions</h2>
        <p className="mt-4 text-[18px] text-black/55">Everything you need to know about the product and billing.</p>
        <div className="mt-10 divide-y divide-slate-300 text-left">
          {faqs.map(({ question, answer }) => (
            <details key={question} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 [&::-webkit-details-marker]:hidden">
                <h3 className="text-[18px] font-semibold tracking-[-0.01em] text-[#111827]">{question}</h3>
                <Plus className="h-6 w-6 shrink-0 text-[#667085] transition group-open:rotate-45" />
              </summary>
              <p className="mt-3 max-w-[790px] text-[15.5px] leading-7 text-black/55">{answer}</p>
            </details>
          ))}
        </div>

        <div className="mt-12 rounded-[28px] bg-[#f6f8fb] px-8 py-8 text-center">
          <div className="flex justify-center -space-x-3">
            {["avatar-1.png", "avatar-2.png", "avatar-3.png"].map((avatar) => (
              <Image key={avatar} src={`/reacher-assets/community/${avatar}`} alt="Support avatar" width={56} height={56} className="h-14 w-14 rounded-full border-4 border-[#f5f7fb] object-cover" />
            ))}
          </div>
          <h3 className="mt-7 text-[22px] font-semibold text-[#111827]">Still have questions?</h3>
          <p className="mt-2 text-[16px] text-black/55">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
          <Link href="https://calendly.com/bora-reacherapp/15min?month=2025-03" className="mt-7 inline-flex h-[48px] items-center justify-center rounded-full bg-[#3559e9] px-7 text-[16px] font-semibold text-white shadow-[0_8px_20px_rgba(53,89,233,0.18)]">
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function CommunityPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-black">
      <ReacherHeader active="" />
      <section className="relative overflow-hidden bg-[#eef4ff] px-6 pb-[58px] pt-[124px] text-center md:pt-[142px]">
        <div className="absolute left-1/2 top-[-150px] h-[660px] w-[94%] max-w-[1180px] -translate-x-1/2 rounded-[100%] bg-[#335CFF]/20 blur-[112px]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(219,229,255,0.72)_0%,rgba(239,244,255,0.88)_52%,#ffffff_100%)]" />
        <div className="relative z-10 mx-auto max-w-[1180px]">
          <Link href="https://www.loom.com/share/bd9e1bea0adb42848b46287d091a8c97" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[14px] font-medium text-[#344054] shadow-sm ring-1 ring-slate-200">
            <span className="inline-flex items-center gap-1 rounded-full bg-[#eef3ff] px-2.5 py-1 text-[#3559e9]"><Sparkles size={14} /> New feature</span>
            <span>Check out our AI Chat Assistant</span>
            <ArrowRight size={14} />
          </Link>
          <h1 className="mx-auto mt-7 max-w-[900px] text-[60px] font-semibold leading-[1.03] tracking-[-0.06em] text-[#05070d] md:text-[88px]">Creator Community</h1>
          <p className="mx-auto mt-7 max-w-[880px] text-[20px] leading-[1.5] text-black/58">
            Direct access to pre-vetted and high performing creators, combined with growth analytics and end-to-end payment management to help you connect, engage, and generate more impressions.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Link href="https://calendly.com/bora-reacherapp/15min?month=2025-03" className="inline-flex h-[56px] items-center gap-2 rounded-full bg-white px-8 text-[17px] font-semibold text-black shadow-sm ring-1 ring-slate-200">
              <MousePointer2 size={18} /> Get a demo
            </Link>
            <Link href="https://portal.reacherapp.com/login" className="inline-flex h-[56px] items-center rounded-full bg-[#3559e9] px-9 text-[17px] font-semibold text-white shadow-[0_12px_28px_rgba(53,89,233,0.24)]">
              Sign up
            </Link>
          </div>
          <div className="mx-auto mt-14 max-w-[1320px] overflow-hidden rounded-[28px] bg-transparent shadow-[0_22px_60px_rgba(15,23,42,0.14)]">
            <Image src="/reacher-assets/community/dashboard.png" alt="Creator Community dashboard" width={1280} height={636} priority className="h-auto w-full rounded-[24px]" />
          </div>
        </div>
      </section>
      <Logos />
      <FeatureGrid />
      <Testimonial />
      <Faq />
      <ReacherFooter />
    </main>
  );
}
