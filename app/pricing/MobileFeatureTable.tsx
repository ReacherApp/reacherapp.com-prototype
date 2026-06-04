"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";

type FeatureValue = string | boolean;
type FeatureRow = readonly [string, FeatureValue, FeatureValue, FeatureValue];
type FeatureGroup = readonly [string, readonly FeatureRow[]];
type PlanKey = "starter" | "pro" | "enterprise";

const planTabs: Array<{ key: PlanKey; label: string; heading: string; index: 1 | 2 | 3 }> = [
  { key: "starter", label: "Starter Plan", heading: "Starter", index: 1 },
  { key: "pro", label: "Pro Plan", heading: "Pro", index: 2 },
  { key: "enterprise", label: "Enterprise Plan", heading: "Enterprise", index: 3 },
];

function Value({ value }: { value: FeatureValue }) {
  if (value === true) return <Check className="mx-auto h-5 w-5 text-[#3559e9]" />;
  if (value === false) return <X className="mx-auto h-5 w-5 text-slate-300" />;
  return <span className="text-[15px] font-semibold text-[#111827]">{value}</span>;
}

export function MobileFeatureTable({ groups }: { groups: readonly FeatureGroup[] }) {
  const [activePlan, setActivePlan] = useState<PlanKey>("pro");
  const activeTab = planTabs.find((tab) => tab.key === activePlan) ?? planTabs[1];

  return (
    <div className="mx-auto max-w-[520px] md:hidden">
      <div className="mb-5 grid grid-cols-3 border-b border-slate-200 text-center text-[15px] font-semibold text-black/62" role="tablist" aria-label="Compare pricing plan features">
        {planTabs.map((tab) => {
          const isActive = tab.key === activePlan;
          return (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls="mobile-pricing-feature-table"
              onClick={() => setActivePlan(tab.key)}
              className={`pb-4 transition ${isActive ? "border-b-2 border-[#3559e9] text-[#3559e9]" : "border-b-2 border-transparent text-black/62"}`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div id="mobile-pricing-feature-table" className="overflow-hidden rounded-[22px] bg-white ring-1 ring-slate-200">
        <div className="grid grid-cols-[1fr_46%] border-b border-slate-200 bg-white">
          <div className="px-5 py-5 text-[26px] font-semibold tracking-[-0.035em]">Features</div>
          <div className="border-l border-slate-200 px-5 py-5 text-[24px] font-semibold tracking-[-0.035em]">{activeTab.heading}</div>
        </div>
        {groups.map(([group, rows]) => (
          <div key={group}>
            <div className="border-b border-slate-200 bg-[#f4f6fb] px-5 py-4 text-[20px] font-semibold tracking-[-0.02em] text-[#111827]">{group}</div>
            {rows.map((row) => (
              <div key={row[0]} className="grid grid-cols-[1fr_46%] items-center border-b border-slate-100">
                <div className="px-5 py-4 text-[16px] font-medium leading-6 text-black/70">{row[0]}</div>
                <div className="border-l border-slate-200 px-5 py-4"><Value value={row[activeTab.index]} /></div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
