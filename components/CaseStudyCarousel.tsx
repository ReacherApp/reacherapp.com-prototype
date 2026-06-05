"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export type CaseStudy = {
  brand: string;
  quote: string;
  stats: string[];
  name: string;
  role: string;
  image: string;
};

const ROTATION_MS = 4000;

export default function CaseStudyCarousel({ testimonials }: { testimonials: CaseStudy[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (index: number) => {
    setActiveIndex((index + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (testimonials.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, ROTATION_MS);

    return () => window.clearInterval(interval);
  }, [testimonials.length]);

  const active = testimonials[activeIndex];

  return (
    <>
      <div className="mx-auto mt-12 flex max-w-full flex-wrap items-center justify-center gap-1 rounded-[1.4rem] bg-white/12 p-1.5 ring-1 ring-white/25 backdrop-blur-sm sm:max-w-fit sm:rounded-full">
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.brand}
            type="button"
            aria-label={`Show ${testimonial.brand} case study`}
            aria-pressed={index === activeIndex}
            onClick={() => goTo(index)}
            className={`rounded-full px-4 py-2 text-[13px] font-semibold transition md:text-sm ${
              index === activeIndex ? "bg-white text-[#0b3bdb] shadow-sm" : "text-white/75 hover:bg-white/10 hover:text-white"
            }`}
          >
            {testimonial.brand}
          </button>
        ))}
      </div>
      <div className="mx-auto mt-8 max-w-[1080px] overflow-hidden rounded-[2rem] bg-white text-left text-slate-950 shadow-2xl shadow-blue-950/20">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active.brand}
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -36 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="grid md:grid-cols-[340px_1fr]"
          >
            <Image
              src={active.image}
              alt={active.name}
              width={360}
              height={540}
              loading="eager"
              sizes="(min-width: 768px) 340px, 100vw"
              className="h-full min-h-[430px] w-full object-cover"
            />
            <div className="p-8 md:p-12">
              <p className="text-lg font-semibold text-slate-600">{active.brand}</p>
              <p className="mt-6 text-2xl font-semibold leading-9 tracking-[-0.025em] md:text-[28px] md:leading-10">“{active.quote}”</p>

              {active.stats.length > 0 ? (
                <div className="mt-10 grid grid-cols-3 gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-center md:gap-3 md:p-5 md:text-left">
                  {active.stats.map((stat) => {
                    const [num, ...rest] = stat.split(" ");
                    return (
                      <div key={stat} className="min-w-0">
                        <strong className="block whitespace-nowrap text-[22px] leading-none tracking-[-0.08em] text-[#2465f6] md:text-3xl md:tracking-normal">{num}</strong>
                        <span className="mt-2 block text-[12px] leading-[1.25] text-slate-500 md:text-sm">{rest.join(" ")}</span>
                      </div>
                    );
                  })}
                </div>
              ) : null}

              <p className={active.stats.length > 0 ? "mt-7 font-semibold" : "mt-10 font-semibold"}>{active.name}</p>
              <p className="text-sm text-slate-500">{active.role} • Verified Customer</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </>
  );
}
