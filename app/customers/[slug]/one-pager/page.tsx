import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { customers } from "@/lib/customers";
import { deriveStats, productImages } from "@/lib/caseStudyStats";
import CaseStudyCharts from "@/components/CaseStudyCharts";
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
  const stats = deriveStats(story, 6);
  const products = productImages(customer.slug, story);

  return (
    <main className="min-h-screen bg-slate-100 py-8 print:bg-white print:py-0">
      <PrintButton label="Download one-pager" />

      <article className="print-sheet mx-auto flex w-[900px] max-w-full flex-col overflow-hidden rounded-[14px] bg-white shadow-[0_24px_70px_-30px_rgba(16,24,40,0.45)] print:w-full print:rounded-none print:shadow-none">
        <div className="h-2 w-full" style={{ background: `linear-gradient(90deg, ${accent}, #2465f6)` }} />

        <div className="flex flex-1 flex-col gap-8 px-12 pb-12 pt-9">
          {/* Header */}
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-slate-200">
                <Image src={`/reacher-assets/customers/logos/${customer.slug}-avatar.png?v=3`} alt={customer.brand} fill sizes="40px" className="object-cover" />
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
          <div>
            <p className={EYEBROW}>Customer Story · {story.industry}</p>
            <h1 className="mt-2 max-w-[88%] text-[30px] font-bold leading-[1.1] tracking-[-0.03em] text-slate-950">{customer.headline}</h1>
            <p className="mt-3 max-w-[94%] text-[13.5px] leading-[1.6] text-slate-600">{story.subtitle}</p>
          </div>

          {/* Stat grid */}
          <div className={`grid gap-3 ${stats.length === 4 ? "grid-cols-4" : "grid-cols-3"}`}>
            {stats.map((s) => (
              <div key={s.label + s.value} className="rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3">
                <div className="text-[24px] font-bold leading-none tracking-[-0.03em] text-slate-950">{s.value}</div>
                <div className="mt-1.5 text-[10.5px] leading-tight text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Challenge + What we did (the story) */}
          <div className="grid grid-cols-2 gap-8">
            <section>
              <p className={EYEBROW}>The Challenge</p>
              <h2 className="mt-1.5 text-[16px] font-bold tracking-[-0.02em] text-slate-950">{story.challengeTitle}</h2>
              <div className="mt-2 flex flex-col gap-2.5">
                {story.challengeParagraphs.map((p, i) => (
                  <p key={i} className="text-[12px] leading-[1.65] text-slate-600">{p}</p>
                ))}
              </div>
              {story.challengeQuote ? (
                <p className="mt-3 border-l-2 pl-3 text-[12px] italic leading-[1.5] text-slate-700" style={{ borderColor: accent }}>{story.challengeQuote}</p>
              ) : null}
            </section>
            <section>
              <p className={EYEBROW}>What Reacher Plus Did</p>
              <p className="mt-1.5 text-[12px] leading-[1.65] text-slate-600">{story.solutionIntro}</p>
              <ul className="mt-3 flex flex-col gap-2">
                {story.solutions.slice(0, 4).map((s) => (
                  <li key={s.title} className="text-[12px] leading-[1.5] text-slate-600">
                    <span className="font-semibold text-[#2465f6]">{s.title}.</span> {s.body}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Result + wins */}
          <div className="grid grid-cols-2 gap-8">
            <section className="pt-4">
              <p className={EYEBROW}>The Result</p>
              <div className="mt-2 flex flex-col gap-2.5">
                {story.resultParagraphs.map((p, i) => (
                  <p key={i} className="text-[12.5px] leading-[1.65] text-slate-600">{p}</p>
                ))}
              </div>
            </section>
            <section className="self-start rounded-xl border border-[#cfe0ff] bg-[#f1f5ff] p-4">
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[#2465f6]">Key wins</p>
              <ul className="mt-2 flex flex-col gap-1.5">
                {story.wins.slice(0, 4).map((w) => (
                  <li key={w.stat} className="flex gap-2 text-[11.5px] leading-tight text-slate-700">
                    <span className="mt-[2px] font-bold text-[#2465f6]">✓</span>
                    <span><span className="font-semibold text-slate-900">{w.stat}</span> — {w.note}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Growth before → after (when present) */}
          {story.numbers && story.numbers.length > 0 ? (
            <div>
              <p className={EYEBROW}>Growth on Reacher Plus</p>
              <div className="mt-3 grid grid-cols-3 gap-3">
                {story.numbers.map((n) => (
                  <div key={n.label} className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                    <p className="text-[10.5px] font-semibold uppercase tracking-[0.06em] text-slate-400">{n.label}</p>
                    <div className="mt-2 flex items-baseline gap-1.5">
                      <span className="text-[13px] font-medium text-slate-400">{n.before}</span>
                      <span className="text-slate-300">→</span>
                      <span className="text-[20px] font-bold tracking-[-0.02em] text-slate-950">{n.after}</span>
                    </div>
                    {n.multiplier ? <span className="mt-1 inline-block text-[11px] font-bold text-[#2465f6]">{n.multiplier}</span> : null}
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {/* Product images */}
          {products.length > 0 ? (
            <div className="grid grid-cols-3 gap-3">
              {products.map((src, n) => (
                <div key={n} className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100">
                  <Image src={src} alt={`${customer.brand} product`} fill sizes="260px" className="object-cover" />
                </div>
              ))}
            </div>
          ) : null}

          {/* Charts */}
          {story.charts && story.charts.length > 0 ? (
            <div className="[&_*]:!shadow-none">
              <CaseStudyCharts charts={story.charts} />
            </div>
          ) : null}
        </div>
      </article>
    </main>
  );
}
