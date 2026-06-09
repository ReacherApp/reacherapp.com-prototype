"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";
import { customerCategories, type Customer } from "@/lib/customers";

const TABS = ["All stories", ...customerCategories] as const;

export default function CustomersGrid({ customers }: { customers: Customer[] }) {
  const [active, setActive] = useState<(typeof TABS)[number]>("All stories");

  const filtered = useMemo(
    () => (active === "All stories" ? customers : customers.filter((c) => c.category === active)),
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
        {filtered.map((customer) => (
          <Link
            key={customer.slug}
            href={`/customers/${customer.slug}`}
            className="group flex flex-col overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_1px_2px_rgba(16,24,40,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-24px_rgba(16,24,40,0.28)]"
          >
            <div className="relative aspect-[16/11] overflow-hidden bg-slate-100">
              <Image
                src={customer.image}
                alt={customer.brand}
                fill
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a]/55 via-transparent to-transparent" />
              <span className="absolute left-4 top-4 inline-flex rounded-full bg-white/90 px-3 py-1 text-[12px] font-semibold text-[#3559e9] backdrop-blur">
                {customer.category}
              </span>
              <span className="absolute bottom-4 left-4 text-[17px] font-bold tracking-[-0.01em] text-white drop-shadow-sm">
                {customer.brand}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="text-[16px] font-semibold leading-[1.4] tracking-[-0.01em] text-slate-900">
                {customer.headline}
              </p>
              {customer.stats.length > 0 ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {customer.stats.map((stat) => (
                    <span
                      key={stat}
                      className="rounded-full bg-[#eef3ff] px-2.5 py-1 text-[12px] font-semibold text-[#2465f6]"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              ) : null}
              <span className="mt-6 inline-flex items-center gap-1 text-[14px] font-semibold text-[#3559e9]">
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
