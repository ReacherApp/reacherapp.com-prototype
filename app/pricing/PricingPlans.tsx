"use client";

import { useState } from "react";
import Link from "next/link";
import { Building2, PackageOpen, Rocket } from "lucide-react";

type BillingPeriod = "monthly" | "quarterly" | "semiannual" | "yearly";

const billingPeriods: Array<{ id: BillingPeriod; label: string }> = [
  { id: "monthly", label: "Monthly" },
  { id: "quarterly", label: "3 Months" },
  { id: "semiannual", label: "6 Months" },
  { id: "yearly", label: "Yearly" },
];

const plans = [
  {
    name: "Starter",
    prices: {
      monthly: { price: "$199" },
      quarterly: { oldPrice: "$199", price: "$179" },
      semiannual: { oldPrice: "$199", price: "$159" },
      yearly: { oldPrice: "$199", price: "$133" },
    },
    copy: "Perfect for brands just starting on TikTok Shop and looking to streamline affiliate outreach and build growth.",
    cta: "Start 10-Day Free Trial",
    href: "https://portal.reacherapp.com/login",
    highlighted: false,
  },
  {
    name: "Pro",
    prices: {
      monthly: { price: "$599" },
      quarterly: { oldPrice: "$599", price: "$539" },
      semiannual: { oldPrice: "$599", price: "$479" },
      yearly: { oldPrice: "$599", price: "$419" },
    },
    copy: "Designed for growing brands ready to scale their outreach and boost GMV with advanced tools.",
    cta: "Start 10-Day Free Trial",
    href: "https://portal.reacherapp.com/login",
    highlighted: false,
  },
  {
    name: "Enterprise",
    prices: {
      monthly: { price: "Custom" },
      quarterly: { price: "Custom" },
      semiannual: { price: "Custom" },
      yearly: { price: "Custom" },
    },
    copy: "Built for established brands managing large-scale affiliate networks and complex campaigns.",
    cta: "Book a Demo",
    href: "https://meetings.hubspot.com/yoji2/sales-team-meetings",
    highlighted: true,
  },
] as const;

function PricingCard({ plan, billingPeriod }: { plan: (typeof plans)[number]; billingPeriod: BillingPeriod }) {
  const Icon = plan.name === "Starter" ? PackageOpen : plan.name === "Pro" ? Rocket : Building2;
  const currentPrice = plan.prices[billingPeriod];

  return (
    <article className={`relative flex h-full min-h-[444px] flex-col rounded-[28px] p-8 text-left shadow-[0_8px_24px_rgba(16,24,40,0.055)] ring-1 ${plan.highlighted ? "bg-[#f4f7ff] ring-[#b8c8ff]" : "bg-white ring-slate-200"}`}>
      <div className="mb-6 grid min-h-11 grid-cols-[44px_1fr] items-center gap-4">
        <div className={`flex h-10 w-10 items-center justify-center rounded-[12px] border bg-white ${plan.highlighted ? "border-[#dbe4ff] text-[#3559e9]/70" : "border-slate-200 text-[#3559e9]/55"}`}>
          <Icon size={17} strokeWidth={1.7} />
        </div>
        {plan.highlighted ? (
          <span className="ml-auto inline-flex h-8 items-center gap-1.5 rounded-full border border-[#cfdcff] bg-white px-3.5 text-[13px] font-semibold text-[#3559e9] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3559e9]/70" />Most Value
          </span>
        ) : null}
      </div>
      <h2 className="text-[25px] font-semibold tracking-[-0.03em] text-[#111827]">{plan.name}</h2>
      <div className="mt-7 flex min-h-[68px] items-end gap-3">
        {"oldPrice" in currentPrice && currentPrice.oldPrice ? <span className="pb-2 pr-1 text-[24px] font-semibold text-slate-400 line-through">{currentPrice.oldPrice}</span> : null}
        <span className="text-[58px] font-semibold leading-none tracking-[-0.06em] text-[#111827]">{currentPrice.price}</span>
        {plan.name !== "Enterprise" ? <span className="pb-2 text-[20px] font-medium text-black/55">/m</span> : null}
      </div>
      <p className="mt-6 text-[15.5px] leading-7 text-black/58">{plan.copy}</p>
      <div className="mt-auto pt-8">
        <Link href={plan.href} className={`flex h-[50px] w-full items-center justify-center rounded-full text-[16px] font-semibold ${plan.highlighted ? "bg-[#3559e9] !text-white shadow-[0_8px_20px_rgba(53,89,233,0.18)]" : "bg-white text-[#111827] shadow-sm ring-1 ring-slate-300"}`}>
          {plan.cta}
        </Link>
      </div>
    </article>
  );
}

export function PricingPlans() {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly");

  return (
    <>
      <div className="mx-auto mt-10 grid w-full max-w-[430px] grid-cols-2 gap-1 rounded-[28px] bg-white p-2 shadow-sm ring-1 ring-slate-200 sm:flex sm:max-w-[460px] sm:rounded-full" role="tablist" aria-label="Billing period">
        {billingPeriods.map((period) => {
          const isActive = period.id === billingPeriod;
          return (
            <button
              key={period.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setBillingPeriod(period.id)}
              className={`flex min-h-[44px] flex-1 items-center justify-center rounded-full px-4 py-3 text-center text-[15px] font-semibold transition ${isActive ? "bg-[#111827] text-white shadow-sm" : "text-black/60 hover:bg-slate-50 hover:text-black"}`}
            >
              {period.label}
            </button>
          );
        })}
      </div>
      <div className="mt-11 grid gap-5 md:grid-cols-3">
        {plans.map((plan) => <PricingCard key={plan.name} plan={plan} billingPeriod={billingPeriod} />)}
      </div>
    </>
  );
}
