'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { SiteNav } from "@/components/SiteNav";
import CursorRipple from "@/components/CursorRipple";

type HeroSectionProps = {
  logo: string;
  ycIcon: string;
  heroShots: string[];
  brandLogos: string[];
  locale?: Locale;
};

const appIcon = "/reacher-assets/contact/nav-logo.png";

type Locale = "en" | "pt";

const heroCopy = {
  en: {
    titleTop: "Grow TikTok Shop Revenue",
    titleBottom: "on Autopilot",
    mobileLines: ["Grow TikTok Shop", "Revenue on Autopilot"],
    subtitle: "Grow your TikTok Shop with AI-powered tools to manage all your creator relationships.",
    bookCall: "Book a demo",
    trial: "Get 14 day free trial",
    trusted: "Trusted by over",
    brands: "brands",
    backed: "Backed by",
    login: "Log In",
    carouselLabels: [
      "All your affiliate metrics in one view",
      "Automate every creator touchpoint",
      "Turn social intelligence into revenue",
      "Manage campaigns from one CRM",
    ],
    navLinks: [
      ["Testimonials", "#testimonials-new"],
      ["Pricing", "/pricing"],
      ["Affiliate", "/affiliate"],
      ["Blog", "/blog"],
      ["Contact", "/contact"],
      ["What's New", "/changelog"],
      ["Careers", "https://jobs.ashbyhq.com/reacher"],
      ["Masterclass", "/masterclass"],
    ],
  },
  pt: {
    titleTop: "Faça a receita da TikTok Shop crescer",
    titleBottom: "no piloto automático",
    mobileLines: ["Faça a receita da", "TikTok Shop crescer", "no piloto automático"],
    subtitle: "Expanda sua TikTok Shop com ferramentas com inteligência artificial para gerenciar todos os seus relacionamentos com criadores.",
    bookCall: "Agende uma demo",
    trial: "Teste grátis de 14 dias",
    trusted: "Com a confiança de mais de",
    brands: "marcas",
    backed: "Apoiado por",
    login: "Entrar",
    carouselLabels: [
      "Todas as métricas de afiliados em uma só visão",
      "Automatize cada contato com criadores",
      "Transforme inteligência social em receita",
      "Gerencie campanhas em um único CRM",
    ],
    navLinks: [
      ["Depoimentos", "#testimonials-new"],
      ["Preços", "/pricing"],
      ["Afiliados", "/affiliate"],
      ["Blog", "/blog"],
      ["Contato", "/contact"],
      ["Novidades", "/changelog"],
      ["Carreiras", "https://jobs.ashbyhq.com/reacher"],
      ["Masterclass", "/masterclass"],
    ],
  },
} as const;

function localizeHref(href: string, locale: Locale) {
  if (locale !== "pt" || href.startsWith("http")) return href;
  if (href.startsWith("#")) return href;
  return href === "/" ? "/pt/" : `/pt${href}`;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 14, stiffness: 100 },
  },
};

function HeroCtas({ locale = "en" }: { locale?: Locale }) {
  const copy = heroCopy[locale];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", damping: 14, stiffness: 100, delay: 0.62 }}
      className="mt-7 flex flex-col items-center justify-center gap-[15px] sm:flex-row"
    >
      <Link
        href="https://meetings.hubspot.com/yoji2/sales-team-meetings"
        className="inline-flex h-10 w-[260px] items-center justify-center rounded-full border border-[#d4d9e5] bg-white px-6 text-[15px] font-medium leading-none text-black shadow-[0_2px_6px_rgba(10,20,40,0.08)] transition hover:bg-gray-50 sm:w-auto"
      >
        {copy.bookCall}
      </Link>
      <Link
        href="https://portal.reacherapp.com/login"
        className="inline-flex h-10 w-[260px] items-center justify-center rounded-full bg-[#3559e9] px-6 text-[15px] font-medium leading-none !text-white shadow-[inset_0_2px_4px_rgba(255,255,255,0.25)] transition hover:bg-blue-700 sm:w-auto"
        style={{ color: "#fff" }}
      >
        {copy.trial}
      </Link>
    </motion.div>
  );
}

const askPrompts = {
  en: [
    "Find creators for my skincare brand",
    "Show me competitor brand intelligence",
    "Which creators drive the most GMV?",
    "Analyze top TikTok Shop videos in my niche",
  ],
  pt: [
    "Encontre criadores para minha marca",
    "Mostre inteligência de marcas concorrentes",
    "Quais criadores geram mais GMV?",
    "Analise os vídeos de melhor desempenho",
  ],
} as const;

function HeroAskBar({ locale = "en" }: { locale?: Locale }) {
  const prompts = askPrompts[locale];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    const full = prompts[index];
    let timer: ReturnType<typeof setTimeout>;
    if (phase === "typing") {
      timer =
        text.length < full.length
          ? setTimeout(() => setText(full.slice(0, text.length + 1)), 42)
          : setTimeout(() => setPhase("pausing"), 1600);
    } else if (phase === "pausing") {
      timer = setTimeout(() => setPhase("deleting"), 700);
    } else if (text.length > 0) {
      timer = setTimeout(() => setText(full.slice(0, text.length - 1)), 20);
    } else {
      setIndex((current) => (current + 1) % prompts.length);
      setPhase("typing");
      timer = setTimeout(() => {}, 0);
    }
    return () => clearTimeout(timer);
  }, [text, phase, index, prompts]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", damping: 16, stiffness: 95, delay: 0.52 }}
      className="mx-auto mt-8 w-full max-w-[330px] sm:max-w-[560px]"
    >
      <div className="flex items-center gap-2 rounded-full border border-white/70 bg-white/65 py-2 pl-5 pr-2 shadow-[0_14px_44px_rgba(16,24,40,0.13)] ring-1 ring-black/[0.04] backdrop-blur-xl md:pl-6">
        <span className="flex min-w-0 flex-1 items-center overflow-hidden whitespace-nowrap text-left text-[15px] text-[#475467] md:text-[17px]">
          {text || " "}
          <span className="ml-[1px] inline-block h-[1.05em] w-[2px] shrink-0 translate-y-[2px] animate-pulse bg-[#3559e9]" />
        </span>
        <button
          type="button"
          aria-label="Ask Reacher"
          className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[length:160%_160%] bg-[linear-gradient(120deg,#04C8F9_0%,#3559e9_50%,#335CFF_100%)] text-white shadow-[0_4px_16px_rgba(53,89,233,0.45)] ring-1 ring-white/30 transition hover:shadow-[0_6px_22px_rgba(53,89,233,0.6)] md:h-11 md:w-11"
          style={{ animation: "ai-gradient 6s ease infinite" }}
        >
          <Sparkles size={18} strokeWidth={2.2} className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]" />
        </button>
      </div>
    </motion.div>
  );
}

export default function HeroSection({ logo, ycIcon, heroShots, brandLogos, locale = "en" }: HeroSectionProps) {
  const [activeShot, setActiveShot] = useState(0);
  const shotCount = heroShots.length;
  const copy = heroCopy[locale];
  const titleWords = copy.titleTop.split(" ");

  useEffect(() => {
    if (shotCount < 2) return;

    const interval = window.setInterval(() => {
      setActiveShot((current) => (current + 1) % shotCount);
    }, 4200);

    return () => window.clearInterval(interval);
  }, [shotCount]);

  const goToPreviousShot = () => {
    setActiveShot((current) => (current - 1 + shotCount) % shotCount);
  };

  const goToNextShot = () => {
    setActiveShot((current) => (current + 1) % shotCount);
  };

  return (
    <section className="relative overflow-hidden bg-white text-black">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#a9ccff_0%,#c3dbff_20%,#dceaff_40%,#eef5ff_62%,#ffffff_85%)]" />
      <div className="pointer-events-none absolute left-1/2 top-[-150px] h-[520px] w-[78%] max-w-[980px] -translate-x-1/2 rounded-[100%] bg-[#6f9eff]/15 blur-[120px]" />
      <CursorRipple />
      <SiteNav locale={locale} />

      <Image
        src={logo}
        alt="TikTok Shop Partner"
        width={155}
        height={42}
        className="absolute left-[24px] top-[80px] z-10 h-auto w-[92px] lg:hidden"
        priority
      />
      <div className="pointer-events-none absolute inset-x-0 top-[82px] z-10 hidden lg:block">
        <div className="mx-auto flex w-[calc(100%-40px)] max-w-[1320px] justify-end pr-1">
          <Image src={logo} alt="TikTok Shop Partner" width={155} height={42} className="h-auto w-[118px]" priority />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-9 pt-[226px] text-center md:pb-12 md:pt-[140px] lg:pt-[160px]">
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-[342px] text-[33px] font-semibold leading-[1.1] tracking-[-1.95px] text-[#05070d] md:max-w-[920px] md:text-[48px] md:leading-[68px] md:tracking-[-3.2px] lg:text-[60px] lg:leading-[71px]"
        >
          {titleWords.map((word) => (
            <motion.span key={word} variants={wordVariants} className="mr-[0.24em] inline-block">
              {word}
            </motion.span>
          ))}
          <br />
          <motion.span
            variants={wordVariants}
            className="inline-block bg-gradient-to-r from-[#04C8F9] via-[#3559e9] to-[#335CFF] bg-clip-text text-transparent"
          >
            {copy.titleBottom}
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.82, y: 0 }}
          transition={{ type: "spring", damping: 14, stiffness: 100, delay: 0.42 }}
          className="mx-auto mt-4 max-w-[342px] text-[17px] leading-[1.82] text-[#343947] md:mt-5 md:max-w-none md:whitespace-nowrap md:text-[20px] md:leading-[30px]"
        >
          {copy.subtitle}
        </motion.p>

        <HeroAskBar locale={locale} />

        <HeroCtas locale={locale} />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", damping: 16, stiffness: 90, delay: 0.78 }}
          className="mt-[62px] text-[14px] text-[#5e6573] md:mt-[68px] md:text-[15.4px]"
        >
          <div className="hidden flex-wrap items-center justify-center gap-x-3 gap-y-2 md:flex">
            <span>
              {copy.trusted} <strong className="font-bold text-[#222633]">1000+</strong> {copy.brands}
            </span>
            <Image src={ycIcon} alt="Y Combinator" width={20} height={20} className="h-5 w-5" />
            <span>
              {copy.backed} <strong className="font-bold text-[#222633]">Y Combinator</strong>
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 md:hidden">
            <div className="flex items-center gap-2">
              <Image src={ycIcon} alt="Y Combinator" width={22} height={22} className="h-[22px] w-[22px]" />
              <span>
                {copy.backed} <strong className="font-bold text-[#222633]">Y Combinator</strong>
              </span>
            </div>
            <span>
              {copy.trusted} <strong className="font-bold text-[#222633]">1000+</strong> {copy.brands}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", damping: 18, stiffness: 90, delay: 0.9 }}
          className="mt-[44px] w-full [mask-image:linear-gradient(to_right,transparent,#000_7%,#000_93%,transparent)] md:mt-[26px]"
        >
          <div className="mx-auto flex max-w-[1180px] flex-col gap-6 md:gap-8">
            {[brandLogos.slice(0, Math.ceil(brandLogos.length / 2)), brandLogos.slice(Math.ceil(brandLogos.length / 2))].map((row, rowIndex) => (
              <div key={rowIndex} className="group flex overflow-hidden">
                <div
                  className={`flex w-max shrink-0 items-center ${rowIndex === 0 ? "animate-marquee-left" : "animate-marquee-right"} group-hover:[animation-play-state:paused]`}
                >
                  {[...row, ...row].map((src, index) => (
                    <span key={`${src}-${index}`} className="flex w-[112px] shrink-0 items-center justify-center px-4 md:w-[172px] md:px-7">
                      <Image
                        src={src}
                        alt=""
                        width={240}
                        height={144}
                        sizes="172px"
                        quality={100}
                        className="h-auto max-h-[26px] w-auto max-w-full object-contain opacity-70 transition [filter:grayscale(1)_sepia(1)_hue-rotate(188deg)_saturate(1.8)_brightness(0.92)] md:max-h-[38px]"
                      />
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto mt-6 block w-full max-w-[430px] px-4 pb-9 md:hidden">
        <motion.div
          key={heroShots[activeShot]}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-[1.4rem] shadow-xl shadow-blue-900/10"
        >
          {locale === "pt" ? (
            <div className="mx-auto mb-3 w-fit rounded-full border border-[#b9c7f5] bg-[#edf6ff] px-3.5 py-1.5 text-center text-[11px] font-medium leading-none text-[#1f2937] shadow-[0_0_0_5px_rgba(237,246,255,0.92)]">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#2563eb] align-middle" />
              {copy.carouselLabels[activeShot]}
            </div>
          ) : null}
          <Image src={heroShots[activeShot]} alt="Reacher dashboard" width={1035} height={490} className="block h-auto w-full" priority />
        </motion.div>
      </div>

      <div className="relative z-10 mt-7 hidden h-[515px] overflow-hidden md:block md:mt-8">
        <div
          className="absolute left-1/2 top-0 flex gap-[60px] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(calc(-517.5px - ${activeShot * 1095}px))` }}
        >
          {heroShots.map((src, index) => (
            <div
              key={src}
              className={`relative w-[1035px] shrink-0 overflow-hidden rounded-[2rem] shadow-2xl shadow-blue-900/10 transition-opacity duration-700 ${
                index === activeShot ? "opacity-100" : "opacity-70"
              }`}
            >
              {locale === "pt" ? (
                <>
                  <div aria-hidden className="absolute left-1/2 top-[110px] z-[9] h-[29px] w-[360px] -translate-x-1/2 rounded-full bg-[#edf6ff] shadow-[0_0_4px_4px_rgba(237,246,255,0.9)]" />
                  <div className="absolute left-1/2 top-[112px] z-10 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#b9c7f5] bg-[#edf6ff] px-4 py-2 text-[14px] font-medium leading-none text-[#1f2937] shadow-[0_0_0_6px_rgba(237,246,255,0.92)]">
                    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#2563eb] align-middle" />
                    {copy.carouselLabels[index]}
                  </div>
                </>
              ) : null}
              <Image src={src} alt="Reacher dashboard" width={1035} height={490} className="block w-full" priority={index < 2} />
            </div>
          ))}
        </div>
        <button
          type="button"
          aria-label="Previous dashboard screenshot"
          onClick={goToPreviousShot}
          className="absolute left-[9%] top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg md:flex"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          aria-label="Next dashboard screenshot"
          onClick={goToNextShot}
          className="absolute right-[9%] top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg md:flex"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
