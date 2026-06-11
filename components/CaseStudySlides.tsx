"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import type { Customer } from "@/lib/customers";
import { deriveStats, productImages } from "@/lib/caseStudyStats";
import { testimonials } from "@/lib/testimonials";
import CaseStudyCharts from "@/components/CaseStudyCharts";

const NAVY = "#07131f";

function Eyebrow({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`text-[13px] font-semibold uppercase tracking-[0.2em] ${light ? "text-[#6aa8ff]" : "text-[#3559e9]"}`}>{children}</p>;
}

export default function CaseStudySlides({ customer }: { customer: Customer }) {
  const { story } = customer;
  const accent = customer.accent ?? "#3559e9";
  const stats = deriveStats(story, 6);
  const products = productImages(customer.slug, story);
  const aboutImage = products[0] ?? customer.image;
  const testimonial = testimonials.find((t) => t.brand.toLowerCase() === customer.brand.toLowerCase());
  const quoteText = testimonial?.quote ?? story.solutionQuote ?? story.challengeQuote;

  // 1. Title
  const titleSlide = (
    <div className="grid h-full w-full grid-cols-[1.15fr_0.85fr]" style={{ background: NAVY }}>
      <div className="relative flex flex-col justify-center overflow-hidden px-[9%]">
        <div className="absolute left-[-10%] top-[-20%] h-[70%] w-[60%] rounded-full opacity-30 blur-3xl" style={{ background: accent }} />
        <div className="relative">
          <div className="flex items-center gap-3">
            <span className="relative h-11 w-11 overflow-hidden rounded-full ring-1 ring-white/20">
              <Image src={`/reacher-assets/customers/logos/${customer.slug}-avatar.png?v=2`} alt={customer.brand} fill sizes="44px" className="object-cover" />
            </span>
            <span className="text-[16px] font-semibold text-white/80">{customer.brand} × Reacher Plus</span>
          </div>
          <Eyebrow light>{story.industry}</Eyebrow>
          <h1 className="mt-4 text-[40px] font-bold leading-[1.05] tracking-[-0.03em] text-white">{customer.headline}</h1>
          <div className="mt-7 flex flex-wrap gap-2.5">
            {customer.tags.map((t) => (
              <span key={t} className="rounded-full border border-white/20 px-4 py-1.5 text-[13px] font-medium text-white/80">{t}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <Image src={customer.image} alt={customer.brand} fill sizes="600px" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07131f] via-transparent to-transparent" />
      </div>
    </div>
  );

  // 2. About — who the brand is
  const aboutSlide = (
    <div className="grid h-full w-full grid-cols-[1fr_0.85fr] bg-white">
      <div className="flex flex-col justify-center px-[9%]">
        <Eyebrow>About {customer.brand}</Eyebrow>
        <h2 className="mt-3 text-[30px] font-bold leading-[1.1] tracking-[-0.03em] text-slate-950">{story.aboutTitle}</h2>
        <div className="mt-4 flex flex-col gap-3">
          {story.about.slice(0, 2).map((p, n) => (
            <p key={n} className="text-[14.5px] leading-[1.6] text-slate-600">{p}</p>
          ))}
        </div>
      </div>
      <div className="relative overflow-hidden">
        <Image src={aboutImage} alt={customer.brand} fill sizes="520px" className="object-cover" />
      </div>
    </div>
  );

  // 3. Key improvements / metrics
  const statsSlide = (
    <div className="flex h-full w-full flex-col justify-center bg-white px-[8%]">
      <Eyebrow>Key improvements we drove</Eyebrow>
      <div className="mt-9 grid grid-cols-3 gap-x-8 gap-y-9">
        {stats.map((s) => (
          <div key={s.label + s.value}>
            <div className="text-[46px] font-bold leading-none tracking-[-0.04em] text-slate-950">{s.value}</div>
            <div className="mt-3 text-[14px] leading-snug text-slate-500">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );

  // 4. Challenge
  const challengeSlide = (
    <div className="flex h-full w-full flex-col justify-center bg-[#f7f9ff] px-[9%]">
      <Eyebrow>The Challenge</Eyebrow>
      <h2 className="mt-3 max-w-[82%] text-[32px] font-bold leading-[1.1] tracking-[-0.03em] text-slate-950">{story.challengeTitle}</h2>
      <div className="mt-4 flex max-w-[86%] flex-col gap-3">
        {story.challengeParagraphs.slice(0, 2).map((p, n) => (
          <p key={n} className="text-[14.5px] leading-[1.6] text-slate-600">{p}</p>
        ))}
      </div>
      {story.challengeQuote ? (
        <p className="mt-5 max-w-[80%] border-l-[3px] pl-5 text-[17px] italic leading-[1.45] text-slate-800" style={{ borderColor: accent }}>{story.challengeQuote}</p>
      ) : null}
    </div>
  );

  // 5. The Reacher solution (approach)
  const solutionSlide = (
    <div className="relative flex h-full w-full flex-col justify-center overflow-hidden px-[9%]" style={{ background: NAVY }}>
      <div className="absolute right-[-8%] top-[-15%] h-[60%] w-[50%] rounded-full opacity-25 blur-3xl" style={{ background: accent }} />
      <div className="relative">
        <Eyebrow light>The Reacher Plus Solution</Eyebrow>
        <p className="mt-5 max-w-[82%] text-[28px] font-semibold leading-[1.3] tracking-[-0.02em] text-white">{story.solutionIntro}</p>
      </div>
    </div>
  );

  // 6. Strategies & functions
  const strategiesSlide = (
    <div className="flex h-full w-full flex-col justify-center bg-white px-[7%]">
      <Eyebrow>Strategies &amp; functions we provided</Eyebrow>
      <div className="mt-6 grid grid-cols-2 gap-4">
        {story.solutions.slice(0, 4).map((s) => (
          <div key={s.title} className="rounded-2xl border border-[#dbe5ff] bg-[#f7f9ff] p-5">
            <h3 className="text-[16px] font-bold text-[#2465f6]">{s.title}</h3>
            <p className="mt-1.5 text-[13px] leading-[1.5] text-slate-600">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  );

  // 7+. one slide per chart
  const chartSlides = (story.charts ?? []).map((chart, idx) => (
    <div key={idx} className="flex h-full w-full flex-col justify-center bg-white px-[6%]">
      <div className="mx-auto w-full max-w-[1080px] [&_*]:!shadow-none">
        <CaseStudyCharts charts={[chart]} compact />
      </div>
    </div>
  ));

  // 8. Result
  const resultSlide = (
    <div className="grid h-full w-full grid-cols-[1.1fr_1fr] bg-white">
      <div className="flex flex-col justify-center px-[10%]">
        <Eyebrow>The Result</Eyebrow>
        <p className="mt-4 text-[16px] leading-[1.65] text-slate-700">{story.resultParagraphs[0]}</p>
      </div>
      <div className="flex flex-col justify-center bg-[#f1f5ff] px-[9%]">
        <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#2465f6]">Key wins</p>
        <ul className="mt-5 flex flex-col gap-3.5">
          {story.wins.slice(0, 4).map((w) => (
            <li key={w.stat} className="flex gap-3">
              <span className="mt-[3px] text-[15px] font-bold text-[#2465f6]">✓</span>
              <span className="text-[14px] leading-snug text-slate-700"><span className="font-bold text-slate-900">{w.stat}</span> — {w.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  // 9. Testimonial (real if matched, else brand pull-quote)
  const testimonialSlide = quoteText ? (
    testimonial?.image ? (
      <div className="grid h-full w-full grid-cols-[0.8fr_1.2fr] bg-white">
        <div className="relative overflow-hidden">
          <Image src={testimonial.image} alt={testimonial.name} fill sizes="500px" className="object-cover" />
        </div>
        <div className="flex flex-col justify-center px-[9%]">
          <Eyebrow>In their words</Eyebrow>
          <p className="mt-5 text-[23px] font-semibold leading-[1.4] tracking-[-0.02em] text-slate-950">“{quoteText}”</p>
          <p className="mt-7 text-[15px] font-bold text-slate-900">{testimonial.name}</p>
          <p className="text-[13px] text-slate-500">{testimonial.role} · {customer.brand}</p>
        </div>
      </div>
    ) : (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[#f7f9ff] px-[12%] text-center">
        <Eyebrow>In their words</Eyebrow>
        <p className="mt-6 max-w-[88%] text-[26px] font-semibold leading-[1.4] tracking-[-0.02em] text-slate-950">“{quoteText}”</p>
        <p className="mt-7 text-[14px] font-semibold text-slate-500">{customer.brand} × Reacher Plus</p>
      </div>
    )
  ) : null;

  // 10. Closing
  const closingSlide = (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-[8%] text-center" style={{ background: NAVY }}>
      <div className="absolute left-[-6%] bottom-[-20%] h-[70%] w-[55%] rounded-full opacity-35 blur-3xl" style={{ background: accent }} />
      <div className="relative">
        <Eyebrow light>Become the next story</Eyebrow>
        <h2 className="mx-auto mt-5 max-w-[82%] text-[34px] font-bold leading-[1.12] tracking-[-0.02em] text-white">
          {story.closingQuote ? `“${story.closingQuote}”` : `${customer.brand} grows on Reacher.`}
        </h2>
        <div className="mt-9 flex items-center justify-center gap-3">
          <span className="rounded-full bg-[#3559e9] px-7 py-3 text-[15px] font-semibold text-white">Book a demo</span>
          <span className="rounded-full border border-white/25 px-7 py-3 text-[15px] font-semibold text-white">reacherapp.com</span>
        </div>
      </div>
    </div>
  );

  const slides = [
    titleSlide,
    aboutSlide,
    statsSlide,
    challengeSlide,
    solutionSlide,
    strategiesSlide,
    ...(products.length > 0 ? [(
      <div key="prod" className="grid h-full w-full grid-cols-3 bg-white">
        {products.map((src, n) => (
          <div key={n} className="relative overflow-hidden">
            <Image src={src} alt={`${customer.brand} product`} fill sizes="500px" className="object-cover" />
          </div>
        ))}
      </div>
    )] : []),
    ...chartSlides,
    resultSlide,
    ...(testimonialSlide ? [testimonialSlide] : []),
    closingSlide,
  ];

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
      <style>{`@media print{ @page{ size: A4 landscape; margin:0; } }`}</style>

      <div className="print:hidden">
        <div className="relative aspect-[16/9] w-[min(1200px,94vw,calc(84vh*16/9))] overflow-hidden rounded-[18px] bg-white shadow-[0_30px_80px_-30px_rgba(16,24,40,0.5)] ring-1 ring-black/5">
          {slides[i]}
          <button aria-label="Previous" onClick={() => go(-1)} className="no-print absolute left-0 top-0 h-full w-[12%] cursor-w-resize" />
          <button aria-label="Next" onClick={() => go(1)} className="no-print absolute right-0 top-0 h-full w-[12%] cursor-e-resize" />
        </div>

        <div className="no-print mt-5 flex items-center justify-center gap-4">
          <button onClick={() => go(-1)} disabled={i === 0} className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 shadow ring-1 ring-slate-200 transition hover:bg-slate-50 disabled:opacity-40"><ChevronLeft size={18} /></button>
          <div className="flex items-center gap-1.5">
            {slides.map((_, n) => (
              <button key={n} aria-label={`Slide ${n + 1}`} onClick={() => setI(n)} className={`h-2 rounded-full transition-all ${n === i ? "w-6 bg-[#3559e9]" : "w-2 bg-slate-300 hover:bg-slate-400"}`} />
            ))}
          </div>
          <button onClick={() => go(1)} disabled={i === slides.length - 1} className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 shadow ring-1 ring-slate-200 transition hover:bg-slate-50 disabled:opacity-40"><ChevronRight size={18} /></button>
          <span className="ml-2 text-[13px] font-semibold text-slate-500">{i + 1} / {slides.length}</span>
          <button onClick={() => window.print()} className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-[#3559e9] px-4 py-2 text-[13px] font-semibold text-white transition hover:bg-blue-600"><Download size={15} /> PDF</button>
        </div>
      </div>

      <div className="hidden print:block">
        {slides.map((s, n) => (
          <div key={n} className="print-break aspect-[16/9] w-full overflow-hidden">{s}</div>
        ))}
      </div>
    </div>
  );
}
