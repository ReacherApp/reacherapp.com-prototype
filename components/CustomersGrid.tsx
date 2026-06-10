"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";
import { customerGroups, type Customer } from "@/lib/customers";

const TABS = ["All stories", ...customerGroups] as const;

export default function CustomersGrid({ customers }: { customers: Customer[] }) {
  const [active, setActive] = useState<(typeof TABS)[number]>("All stories");

  const filtered = useMemo(
    () => (active === "All stories" ? customers : customers.filter((c) => c.group === active)),
    [active, customers],
  );

  return (
    <>
      <div className="mx-auto flex w-fit max-w-full flex-wrap items-center justify-center gap-1 rounded-full border border-slate-200 bg-white p-1.5 shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
        {TABS.map((tab) => {
          const isActive = tab === active;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActive(tab)}
              aria-pressed={isActive}
              className={`rounded-full px-4 py-2 text-[13.5px] font-semibold transition ${
                isActive
                  ? "bg-[#3559e9] text-white shadow-[0_6px_16px_-8px_rgba(53,89,233,0.6)]"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((c) => (
          <Link
            key={c.slug}
            href={`/customers/${c.slug}`}
            className="group flex flex-col overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_1px_2px_rgba(16,24,40,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-24px_rgba(16,24,40,0.3)]"
          >
            <div className="relative aspect-[16/11] overflow-hidden bg-slate-100">
              <Image
                src={c.image}
                alt={c.brand}
                fill
                sizes="(min-width:1024px) 360px, (min-width:640px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a]/65 via-[#0b1f3a]/5 to-transparent" />
              <span className="absolute left-4 top-4 inline-flex max-w-[80%] truncate rounded-full bg-white/90 px-3 py-1 text-[12px] font-semibold text-slate-900 backdrop-blur">
                {c.category}
              </span>
              {/* brand logo chip on image */}
              <span className="absolute bottom-4 left-4 flex items-center gap-2.5">
                <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-white p-0.5 ring-1 ring-black/5">
                  <span className="relative block h-full w-full overflow-hidden rounded-full">
                    <Image src={`/reacher-assets/customers/logos/${c.slug}-avatar.png`} alt={c.brand} fill sizes="40px" className="object-cover" />
                  </span>
                </span>
                <span className="text-[15px] font-bold tracking-[-0.01em] text-white drop-shadow-sm">{c.brand}</span>
              </span>
            </div>
            <div className="flex flex-1 flex-col px-6 pb-6 pt-4">
              <p className="text-[18px] font-bold leading-[1.3] tracking-[-0.015em] text-slate-950">{c.headline}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="rounded-full border border-slate-200 px-2.5 py-1 text-[12px] font-medium text-slate-600">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="mt-auto inline-flex items-center gap-1 pt-5 text-[14px] font-semibold text-[#3559e9]">
                Read the story
                <ArrowUpRight size={16} strokeWidth={2.2} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
