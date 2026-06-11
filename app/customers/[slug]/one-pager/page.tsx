import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { customers } from "@/lib/customers";
import PrintButton from "@/components/PrintButton";

export function generateStaticParams() {
  return customers.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const customer = customers.find((c) => c.slug === slug);
  if (!customer) return {};
  return { title: `${customer.brand} — One-Pager | Reacher`, description: customer.story.subtitle };
}

const EYEBROW = "text-[10px] font-semibold uppercase tracking-[0.16em] text-[#3559e9]";

export default async function OnePager({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const customer = customers.find((c) => c.slug === slug);
  if (!customer) notFound();
  const { story } = customer;
  const accent = customer.accent ?? "#3559e9";
  const brandsChart = story.charts?.find((c) => c.type === "brands") as
    | Extract<NonNullable<typeof story.charts>[number], { type: "brands" }>
    | undefined;

  return (
    <main className="min-h-screen bg-slate-100 py-8 print:bg-white print:py-0">
      <PrintButton label="Download one-pager" />

      <article className="print-sheet mx-auto flex w-[820px] max-w-full flex-col overflow-hidden rounded-[14px] bg-white shadow-[0_24px_70px_-30px_rgba(16,24,40,0.45)] print:w-full print:rounded-none print:shadow-none">
        {/* Accent top bar */}
        <div className="h-2 w-full" style={{ background: `linear-gradient(90deg, ${accent}, #2465f6)` }} />

        <div className="flex flex-1 flex-col px-12 pb-12 pt-9">
          {/* Header */}
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-slate-200">
                <Image src={`/reacher-assets/customers/logos/${customer.slug}-avatar.png?v=2`} alt={customer.brand} fill sizes="40px" className="object-cover" />
              </span>
              <div>
                <p className="text-[15px] font-bold leading-tight tracking-[-0.01em] text-slate-950">{customer.brand} × Reacher Plus</p>
                <p className="text-[11px] text-slate-500">{customer.category}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/reacher-assets/contact/nav-logo.png" alt="Reacher" width={26} height={26} className="h-[26px] w-[26px] rounded-md object-contain" />
              <span className="text-[12px] font-semibold text-slate-400">reacherapp.com</span>
            </div>
          </header>

          {/* Headline */}
          <div className="mt-7">
            <p className={EYEBROW}>Customer Story · {story.industry}</p>
            <h1 className="mt-2 text-[30px] font-bold leading-[1.1] tracking-[-0.03em] text-slate-950">{customer.headline}</h1>
            <p className="mt-3 text-[13.5px] leading-[1.6] text-slate-600">{story.subtitle}</p>
          </div>

          {/* Results */}
          <div className="mt-7 grid grid-cols-3 gap-3">
            {story.results.map((r) => (
              <div key={r.label} className="rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3">
                <div className="text-[26px] font-bold leading-none tracking-[-0.03em] text-slate-950">{r.value}</div>
                <div className="mt-1.5 text-[11px] leading-tight text-slate-500">{r.label}</div>
              </div>
            ))}
          </div>

          {/* Challenge + Solution */}
          <div className="mt-8 grid grid-cols-2 gap-8">
            <section>
              <p className={EYEBROW}>The Challenge</p>
              <h2 className="mt-1.5 text-[16px] font-bold tracking-[-0.02em] text-slate-950">{story.challengeTitle}</h2>
              <p className="mt-2 text-[12px] leading-[1.6] text-slate-600">{story.challengeParagraphs[0]}</p>
              {story.challengeQuote ? (
                <p className="mt-3 border-l-2 pl-3 text-[12px] italic leading-[1.5] text-slate-700" style={{ borderColor: accent }}>
                  {story.challengeQuote}
                </p>
              ) : null}
            </section>
            <section>
              <p className={EYEBROW}>What Reacher Plus Did</p>
              <h2 className="mt-1.5 text-[16px] font-bold tracking-[-0.02em] text-slate-950">A program built around the metrics that matter</h2>
              <ul className="mt-2 flex flex-col gap-2">
                {story.solutions.slice(0, 4).map((s) => (
                  <li key={s.title} className="text-[12px] leading-[1.45] text-slate-600">
                    <span className="font-semibold text-slate-900">{s.title}.</span> {s.body}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Result + Wins */}
          <div className="mt-8 grid grid-cols-2 gap-8">
            <section>
              <p className={EYEBROW}>The Result</p>
              <p className="mt-2 text-[12px] leading-[1.6] text-slate-600">{story.resultParagraphs[0]}</p>
            </section>
            <section className="rounded-xl border border-[#cfe0ff] bg-[#f1f5ff] p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#2465f6]">Key wins</p>
              <ul className="mt-2 flex flex-col gap-1.5">
                {story.wins.slice(0, 4).map((w) => (
                  <li key={w.stat} className="flex gap-2 text-[12px] leading-tight text-slate-700">
                    <span className="mt-[2px] font-bold text-[#2465f6]">✓</span>
                    <span><span className="font-semibold text-slate-900">{w.stat}</span> — {w.note}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Portfolio brands strip (when present) */}
          {brandsChart ? (
            <div className="mt-8">
              <p className={EYEBROW}>{brandsChart.title}</p>
              <div className="mt-2 grid grid-cols-3 gap-2.5">
                {brandsChart.items.slice(0, 6).map((b) =>
                  b.image ? (
                    <div key={b.name} className="relative flex h-[68px] flex-col justify-end overflow-hidden rounded-lg">
                      <Image src={b.image} alt={b.name} fill sizes="240px" className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a]/85 to-transparent" />
                      <div className="relative px-2.5 py-1.5">
                        <p className="text-[11px] font-bold leading-none text-white">{b.name}</p>
                        <p className="text-[9px] font-semibold text-white/80">{b.gmv}</p>
                      </div>
                    </div>
                  ) : (
                    <div key={b.name} className="flex h-[68px] flex-col justify-between rounded-lg border border-slate-200 bg-white p-2.5">
                      <p className="text-[11px] font-bold text-slate-950">{b.name}</p>
                      <p className="text-[9px] font-semibold uppercase text-slate-400">{b.gmv}</p>
                    </div>
                  ),
                )}
              </div>
            </div>
          ) : null}

        </div>
      </article>
    </main>
  );
}
