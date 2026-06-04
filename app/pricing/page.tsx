import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, Phone, Plus, X } from "lucide-react";
import { PageBadge, ReacherFooter, ReacherHeader } from "@/components/ReacherChrome";
import { localizedAlternates } from "@/lib/seo";
import { MobileFeatureTable } from "./MobileFeatureTable";
import { PricingPlans } from "./PricingPlans";

export const metadata: Metadata = {
  title: "Pricing | Reacher",
  description: "Flexible Reacher plans for brands starting or scaling TikTok Shop affiliate outreach.",
  alternates: localizedAlternates("/pricing"),
};

const groups = [
  ["Creator Discovery", [["Daily creator outreach", "1,000", "7,500", "Max"], ["Outreach speed", "Normal", "Fast", "Priority"], ["Access to creator database", "3M+ creators", "3M+ creators", "3M+ creators"], ["AI creator search", false, true, true]]],
  ["Creator Outreach Automations", [["Concurrent automations", "3", "10", "30"], ["TikTok Shop Affiliate Center TC + DM automation", true, true, true], ["Email automation", true, true, true], ["Automated follow-ups", false, true, true], ["Target Collaboration cleanup", false, true, true], ["TikTok DMs automation", false, false, true]]],
  ["Creator Relationship Management", [["Daily CRM messages", "1,000", "Unlimited", "Unlimited"], ["Customer reviews automation", false, true, true], ["Spark Code retrieval", false, true, true], ["AI Sample request review", false, true, true], ["Content Guides automation", false, true, true], ["Creator campaigns (Retainers, Challenges, and Contests)", false, true, true], ["Creator community custom branding", false, true, true], ["AI Chatbot - respond to all creators", false, true, true]]],
  ["Analytics", [["Basic analytics", true, true, true], ["Advanced content, product, and creator insights", false, true, true], ["End-to-End creator journey tracking and attribution", false, true, true], ["Metrics Dashboard", false, true, true], ["Exportable analytics", false, true, true]]],
  ["Advanced AI Features", [["Social Intelligence", false, true, true], ["AI Creative Strategist", false, true, true], ["Reacher AI Agent", false, true, true]]],
  ["Support & Team", [["Customer support", "Chat", "Dedicated Slack", "Priority Slack"], ["Team member accounts", true, true, true], ["1:1 brand strategy calls with expert account manager", false, true, true]]],
] as const;

const faq = [
  {
    question: "How does Reacher work?",
    answer:
      "Reacher helps TikTok Shop brands discover relevant creators, automate outreach and follow-ups, manage relationships, track performance, and scale affiliate sales from one dashboard.",
  },
  {
    question: "How is my information stored? Is it safe?",
    answer:
      "Your account information is stored securely and used only to power your Reacher workflows. Access is limited to authorized systems and team members needed to support your account.",
  },
  {
    question: "Will my TikTok account get banned?",
    answer:
      "Reacher is designed to support compliant creator outreach and reduce risky manual behavior. As with any outreach tool, brands should use sensible daily volumes and follow TikTok Shop policies.",
  },
  {
    question: "Can I change my plan after purchasing one?",
    answer:
      "Yes. You can upgrade as your creator program grows or speak with the Reacher team about the right plan if your outreach volume, CRM needs, or team structure changes.",
  },
  {
    question: "Is my payment information secure?",
    answer:
      "Yes. Payments are handled through secure payment infrastructure, and Reacher does not expose your full payment details inside the app.",
  },
];

function Value({ value }: { value: string | boolean }) {
  if (value === true) return <Check className="mx-auto h-5 w-5 text-[#3559e9]" />;
  if (value === false) return <X className="mx-auto h-5 w-5 text-slate-300" />;
  return <span className="text-[15px] font-semibold text-[#111827]">{value}</span>;
}

function FeatureTable() {
  return (
    <section className="bg-[#f1f5ff] px-6 py-[72px]">
      <MobileFeatureTable groups={groups} />
      <div className="mx-auto hidden max-w-[1360px] overflow-hidden rounded-[24px] bg-white shadow-[0_8px_26px_rgba(16,24,40,0.045)] ring-1 ring-slate-200 md:block">
        <div className="grid grid-cols-[1.35fr_1fr_1fr_1fr] items-end border-b border-slate-200 text-center">
          <div className="p-7 text-left text-[28px] font-semibold tracking-[-0.035em]">Features</div>
          {[["Starter", "Get Started"], ["Pro", "Go Pro"], ["Enterprise", "Let's Talk"]].map(([name, cta], i) => (
            <div key={name} className={`p-7 ${i === 2 ? "bg-[#f4f7ff]" : ""}`}>
              <h3 className="mb-4 text-[22px] font-semibold tracking-[-0.03em]">{name}</h3>
              <Link href={i === 2 ? "https://meetings.hubspot.com/yoji2/sales-team-meetings" : "https://portal.reacherapp.com/login"} className={`mx-auto flex h-[44px] min-w-[148px] items-center justify-center rounded-full border px-6 text-[16px] font-bold ${i === 2 ? "border-[#3559e9] bg-[#3559e9] !text-white" : "border-slate-300 bg-white !text-black shadow-sm"}`} style={{ color: i === 2 ? "#fff" : "#000", opacity: 1 }} aria-label={cta}><span className="block" style={{ color: i === 2 ? "#fff" : "#000" }}>{cta}</span></Link>
            </div>
          ))}
        </div>
        {groups.map(([group, rows]) => (
          <div key={group}>
            <div className="bg-[#f4f6fb] px-7 py-5 text-[17px] font-semibold text-[#111827]">{group}</div>
            {rows.map(([label, starter, pro, ent]) => (
              <div key={label} className="grid grid-cols-[1.35fr_1fr_1fr_1fr] items-center border-t border-slate-100 text-center [background:linear-gradient(to_right,transparent_0_77.0115%,#f7faff_77.0115%_100%)]">
                <div className="px-7 py-5 text-left text-[15.5px] font-medium text-black/72">{label}</div>
                  <div className="border-l border-slate-100 px-4 py-5"><Value value={starter} /></div>
                <div className="border-l border-slate-100 px-4 py-5"><Value value={pro} /></div>
                <div className="border-l border-slate-100 px-4 py-5"><Value value={ent} /></div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function FaqAndNewsletter() {
  return (
    <>
      <section className="bg-[#f1f5ff] px-6 py-[88px]">
        <div className="mx-auto max-w-[1120px] text-center">
          <PageBadge>FAQs</PageBadge>
          <h2 className="mt-7 text-[42px] font-semibold leading-[1.08] tracking-[-0.045em] md:text-[60px]">Got questions?<br />We&apos;ve got answers!</h2>
          <p className="mt-5 text-[19px] text-black/55">Everything you need to know about Reacher.</p>
          <div className="mt-14 grid gap-8 text-left md:grid-cols-[1fr_370px]">
            <div className="space-y-4">{faq.map(({ question, answer }) => <details key={question} className="group rounded-[18px] bg-[#f7f8fc] px-6 py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-[19px] font-semibold [&::-webkit-details-marker]:hidden"><span>{question}</span><Plus className="shrink-0 text-[#3559e9] transition group-open:rotate-45" /></summary><p className="mt-3 max-w-[650px] text-[15.5px] leading-7 text-black/58">{answer}</p></details>)}</div>
            <aside className="relative overflow-hidden rounded-[30px] bg-white p-8 text-center shadow-[0_20px_70px_rgba(15,23,42,0.12)] ring-1 ring-slate-200">
              <div className="absolute inset-0 opacity-[0.42] [background-image:radial-gradient(#cbd5e1_1px,transparent_1.2px)] [background-size:13px_13px]" />
              <div className="relative z-10 flex flex-col items-center py-2">
                <Image src="/reacher-assets/contact/call-avatar.png" alt="Support avatar" width={92} height={92} className="h-[92px] w-[92px] rounded-full object-cover" />
                <span className="-mt-9 ml-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#3559e9] !text-white shadow-lg" style={{ color: "#fff" }}><Phone size={18} fill="currentColor" /></span>
                <h3 className="mt-8 text-[27px] font-semibold leading-tight tracking-[-0.025em]">Have more questions?<br />Book a FREE call.</h3>
                <Link href="https://meetings.hubspot.com/yoji2/sales-team-meetings" className="mt-8 rounded-full bg-[#3559e9] px-8 py-4 text-[17px] font-semibold !text-white" style={{ color: "#fff" }}>Book a FREE call</Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <section className="bg-[#f1f5ff] px-6 py-[104px] text-center">
        <PageBadge>Subscribe to our newsletter</PageBadge>
        <h2 className="mt-7 text-[42px] font-semibold tracking-[-0.045em] md:text-[60px]">Start using Reacher today.</h2>
        <p className="mx-auto mt-5 max-w-[700px] text-[19px] leading-8 text-black/58">Manage affiliate campaigns, view shop analytics, send samples, and start generating GMV today!</p>
        <div className="mx-auto mt-10 flex max-w-[850px] flex-col gap-4 sm:flex-row"><input placeholder="name@email.com" className="h-[60px] min-h-[60px] w-full flex-none rounded-[14px] border border-slate-200 bg-white px-5 text-[17px] sm:flex-1" /><button className="h-[60px] rounded-[14px] bg-[#3559e9] px-7 text-[17px] font-semibold text-white">Sign up for Reacher Newsletter</button></div>
      </section>
    </>
  );
}

export default function PricingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f1f5ff] text-black">
      <ReacherHeader active="Pricing" />
      <section className="relative overflow-hidden px-6 pb-[64px] pt-[136px] text-center">
        <div className="absolute inset-x-0 top-0 h-[820px] bg-[radial-gradient(circle_at_44%_7%,rgba(69,94,255,0.34),rgba(151,168,255,0.2)_36%,rgba(247,249,255,0)_72%)]" />
        <div className="relative z-10 mx-auto max-w-[1360px]">
          <p className="text-[17px] font-semibold text-[#3559e9]">Pricing</p>
          <h1 className="mx-auto mt-7 max-w-[900px] text-[52px] font-semibold leading-[1.06] tracking-[-0.055em] md:text-[72px]">Ready to supercharge<br />your TikTok Shop?</h1>
          <p className="mx-auto mt-6 max-w-[780px] text-[20px] leading-8 text-black/60">Whether you’re just starting or scaling to the next level, Reacher offers flexible plans to match your goals.</p>
          <PricingPlans />
        </div>
      </section>
      <FeatureTable />
      <FaqAndNewsletter />
      <ReacherFooter />
    </main>
  );
}
