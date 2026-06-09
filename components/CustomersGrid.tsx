import Image from "next/image";
import type { Customer } from "@/lib/customers";

function BrandAvatar({ brand, accent }: { brand: string; accent?: string }) {
  const initials = brand
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  return (
    <span
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white"
      style={{ backgroundColor: accent ?? "#3559e9" }}
    >
      {initials}
    </span>
  );
}

export default function CustomersGrid({ customers }: { customers: Customer[] }) {
  return (
    <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
      {customers.map((c) => (
        <a
          key={c.slug}
          href={c.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col rounded-[24px] border border-slate-200 bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-24px_rgba(16,24,40,0.3)]"
        >
          <div className="relative aspect-[16/11] overflow-hidden rounded-[16px] bg-slate-100">
            <Image
              src={c.image}
              alt={c.brand}
              fill
              sizes="(min-width:1024px) 360px, (min-width:768px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          </div>

          <div className="flex flex-1 flex-col px-1 pt-4">
            <div className="flex items-center gap-2.5">
              <BrandAvatar brand={c.brand} accent={c.accent} />
              <span className="text-[15px] font-bold tracking-[-0.01em] text-slate-900">{c.brand}</span>
              <span className="ml-auto max-w-[46%] truncate rounded-full bg-slate-100 px-3 py-1 text-[12px] font-medium text-slate-600">
                {c.category}
              </span>
            </div>

            <p className="mt-4 text-[19px] font-bold leading-[1.28] tracking-[-0.015em] text-slate-950">
              {c.headline}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {c.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 px-3 py-1.5 text-[13px] font-medium text-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
