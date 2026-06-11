"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import type { Customer } from "@/lib/customers";

const NAVY = "#07131f";

function Eyebrow({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`text-[13px] font-semibold uppercase tracking-[0.2em] ${light ? "text-[#6aa8ff]" : "text-[#3559e9]"}`}>{children}</p>
  );
}

export default function CaseStudySlides({ customer }: { customer: Customer }) {
  const { story } = customer;
  const accent = customer.accent ?? "#3559e9";
  const brands = story.charts?.find((c) => c.type === "brands") as
    | Extract<NonNullable<typeof story.charts>[number], { type: "brands" }>
    | undefined;

  // Title slide
  const titleSlide = (
    <div className="relative flex h-full w-full flex-col justify-center overflow-hidden px-[8%]" style={{ background: NAVY }}>
      <div className="absolute right-[-6%] top-[-20%] h-[70%] w-[55%] rounded-full opacity-40 blur-3xl" style={{ background: accent }} />
      <div className="relative">
        <div className="flex items-center gap-3">
          <span className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-white/20">
            <Image src={`/reacher-assets/customers/logos/${customer.slug}-avatar.png?v=2`} alt={customer.brand} fill sizes="48px" className="object-cover" />
          </span>
          <span className="text-[18px] font-semibold text-white/80">{customer.brand} × Reacher Plus</span>
        </div>
        <Eyebrow light>{story.industry}</Eyebrow>
        <h1 className="mt-4 max-w-[80%] text-[44px] font-bold leading-[1.06] tracking-[-0.03em] text-white">{customer.headline}</h1>
        <p className="mt-5 max-w-[62%] text-[18px] leading-[1.5] text-white/65">{story.subtitle}</p>
        <div className="mt-8 flex flex-wrap gap-2.5">
          {customer.tags.map((t) => (
            <span key={t} className="rounded-full border border-white/20 px-4 py-1.5 text-[13px] font-medium text-white/80">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );

  // Results slide
  const resultsSlide = (
    <div className="flex h-full w-full flex-col justify-center bg-white px-[8%]">
      <Eyebrow>Results at a glance</Eyebrow>
      <div className="mt-10 grid grid-cols-3 gap-8">
        {story.results.map((r) => (
          <div key={r.label}>
            <div className="text-[58px] font-bold leading-none tracking-[-0.04em] text-slate-950">{r.value}</div>
            <div className="mt-4 text-[16px] leading-snug text-slate-500">{r.label}</div>
          </div>
        ))}
      </div>
    </div>
  );

  // Challenge slide
  const challengeSlide = (
    <div className="flex h-full w-full flex-col justify-center bg-white px-[8%]">
      <Eyebrow>The Challenge</Eyebrow>
      <h2 className="mt-3 max-w-[78%] text-[34px] font-bold tracking-[-0.025em] text-slate-950">{story.challengeTitle}</h2>
      <div className="mt-5 grid max-w-[88%] gap-4">
        {story.challengeParagraphs.map((p, i) => (
          <p key={i} className="text-[16.5px] leading-[1.6] text-slate-600">{p}</p>
        ))}
      </div>
      {story.challengeQuote ? (
        <p className="mt-6 max-w-[80%] border-l-[3px] pl-5 text-[18px] italic leading-[1.45] text-slate-800" style={{ borderColor: accent }}>{story.challengeQuote}</p>
      ) : null}
    </div>
  );

  // Solution slide
  const solutionSlide = (
    <div className="flex h-full w-full flex-col justify-center bg-[#f7f9ff] px-[8%]">
      <Eyebrow>What Reacher Plus Did</Eyebrow>
      <p className="mt-3 max-w-[80%] text-[19px] font-medium leading-[1.5] text-slate-700">{story.solutionIntro}</p>
      <div className="mt-7 grid grid-cols-2 gap-4">
        {story.solutions.slice(0, 4).map((s) => (
          <div key={s.title} className="rounded-2xl border border-[#dbe5ff] bg-white p-5">
            <h3 className="text-[16px] font-bold text-[#2465f6]">{s.title}</h3>
            <p className="mt-1.5 text-[13px] leading-[1.5] text-slate-600">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  );

  // Result + wins slide
  const resultSlide = (
    <div className="grid h-full w-full grid-cols-[1.1fr_1fr] bg-white">
      <div className="flex flex-col justify-center px-[10%]">
        <Eyebrow>The Result</Eyebrow>
        <p className="mt-4 text-[17px] leading-[1.65] text-slate-700">{story.resultParagraphs[0]}</p>
        {story.closingQuote ? (
          <p className="mt-6 text-[16px] font-medium italic leading-[1.45] text-slate-900">“{story.closingQuote}”</p>
        ) : null}
      </div>
      <div className="flex flex-col justify-center bg-[#f1f5ff] px-[9%]">
        <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#2465f6]">Key wins</p>
        <ul className="mt-5 flex flex-col gap-4">
          {story.wins.slice(0, 4).map((w) => (
            <li key={w.stat} className="flex gap-3">
              <span className="mt-[3px] text-[15px] font-bold text-[#2465f6]">✓</span>
              <span className="text-[15px] leading-snug text-slate-700"><span className="font-bold text-slate-900">{w.stat}</span> — {w.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  // Brands slide (optional)
  const brandsSlide = brands ? (
    <div className="flex h-full w-full flex-col justify-center bg-white px-[7%]">
      <div className="flex items-center justify-between">
        <Eyebrow>{brands.title}</Eyebrow>
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">{brands.badge}</span>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-3">
        {brands.items.slice(0, 9).map((b) =>
          b.image ? (
            <div key={b.name} className="relative flex h-[112px] flex-col justify-end overflow-hidden rounded-xl">
              <Image src={b.image} alt={b.name} fill sizes="320px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a]/85 to-transparent" />
              <div className="relative p-3">
                <p className="text-[13px] font-bold leading-none text-white">{b.name}</p>
                <p className="mt-1 text-[10px] font-semibold text-white/80">{b.gmv}</p>
              </div>
            </div>
          ) : (
            <div key={b.name} className="flex h-[112px] flex-col justify-between rounded-xl border border-slate-200 bg-white p-3">
              <p className="text-[13px] font-bold text-slate-950">{b.name}</p>
              <p className="text-[10px] font-semibold uppercase text-slate-400">{b.gmv}</p>
            </div>
          ),
        )}
      </div>
    </div>
  ) : null;

  // Closing slide
  const closingSlide = (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-[8%] text-center" style={{ background: NAVY }}>
      <div className="absolute left-[-6%] bottom-[-20%] h-[70%] w-[55%] rounded-full opacity-40 blur-3xl" style={{ background: accent }} />
      <div className="relative">
        <Eyebrow light>Become the next story</Eyebrow>
        <h2 className="mx-auto mt-5 max-w-[80%] text-[36px] font-bold leading-[1.12] tracking-[-0.02em] text-white">
          {story.closingQuote ? `“${story.closingQuote}”` : `${customer.brand} grows on Reacher.`}
        </h2>
        <div className="mt-9 flex items-center justify-center gap-3">
          <span className="rounded-full bg-[#3559e9] px-7 py-3 text-[15px] font-semibold text-white">Book a demo</span>
          <span className="rounded-full border border-white/25 px-7 py-3 text-[15px] font-semibold text-white">reacherapp.com</span>
        </div>
      </div>
    </div>
  );

  const slides = [titleSlide, resultsSlide, challengeSlide, solutionSlide, resultSlide, ...(brandsSlide ? [brandsSlide] : []), closingSlide];
  const [i, setI] = useState(0);
  const go = useCallback((n: number) => setI((c) => Math.min(slides.length - 1, Math.max(0, c + n))), [slides.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); go(1); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
      else if (e.key === "Home") setI(0);
      else if (e.key === "End") setI(slides.length - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, slides.length]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-200 py-6 print:bg-white print:py-0">
      {/* landscape print for slides */}
      <style>{`@media print{ @page{ size: A4 landscape; margin:0; } }`}</style>

      {/* Interactive deck (screen only) */}
      <div className="print:hidden">
        <div className="relative aspect-[16/9] w-[min(1200px,94vw,calc(84vh*16/9))] overflow-hidden rounded-[18px] bg-white shadow-[0_30px_80px_-30px_rgba(16,24,40,0.5)] ring-1 ring-black/5">
          {slides[i]}
          {/* click zones */}
          <button aria-label="Previous" onClick={() => go(-1)} className="no-print absolute left-0 top-0 h-full w-[14%] cursor-w-resize" />
          <button aria-label="Next" onClick={() => go(1)} className="no-print absolute right-0 top-0 h-full w-[14%] cursor-e-resize" />
        </div>

        {/* Controls */}
        <div className="no-print mt-5 flex items-center justify-center gap-4">
          <button onClick={() => go(-1)} disabled={i === 0} className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 shadow ring-1 ring-slate-200 transition hover:bg-slate-50 disabled:opacity-40">
            <ChevronLeft size={18} />
          </button>
          <div className="flex items-center gap-1.5">
            {slides.map((_, n) => (
              <button key={n} aria-label={`Slide ${n + 1}`} onClick={() => setI(n)} className={`h-2 rounded-full transition-all ${n === i ? "w-6 bg-[#3559e9]" : "w-2 bg-slate-300 hover:bg-slate-400"}`} />
            ))}
          </div>
          <button onClick={() => go(1)} disabled={i === slides.length - 1} className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 shadow ring-1 ring-slate-200 transition hover:bg-slate-50 disabled:opacity-40">
            <ChevronRight size={18} />
          </button>
          <span className="ml-2 text-[13px] font-semibold text-slate-500">{i + 1} / {slides.length}</span>
          <button onClick={() => window.print()} className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-[#3559e9] px-4 py-2 text-[13px] font-semibold text-white transition hover:bg-blue-600">
            <Download size={15} /> PDF
          </button>
        </div>
      </div>

      {/* Print stack (all slides, one per landscape page) */}
      <div className="hidden print:block">
        {slides.map((s, n) => (
          <div key={n} className="print-break aspect-[16/9] w-full overflow-hidden">{s}</div>
        ))}
      </div>
    </div>
  );
}
