'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowUp, ChevronDown, ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { featureGroups, featureItems } from "@/components/featureMenu";

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
    bookCall: "Book a call",
    trial: "Start your free trial",
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
    bookCall: "Agende uma chamada",
    trial: "Comece seu teste gratuito",
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

  const caption = locale === "pt" ? "Acompanhe tudo. Pergunte qualquer coisa." : "Track everything. Ask anything.";

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
        <button type="button" aria-label="Ask Reacher" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#101828] text-white transition hover:bg-[#1d2939] md:h-11 md:w-11">
          <ArrowUp size={19} strokeWidth={2.2} />
        </button>
      </div>
      <p className="mt-3 text-[13px] font-medium text-[#667085] md:text-[14px]">{caption}</p>
    </motion.div>
  );
}

const LOGIN_URL = "https://portal.reacherapp.com/login";

function useScrolled(threshold = 16) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

function useMenu() {
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cancel = () => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  };
  const openNow = () => {
    cancel();
    setOpen(true);
  };
  const closeSoon = () => {
    cancel();
    timer.current = setTimeout(() => setOpen(false), 140);
  };
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  useEffect(() => () => cancel(), []);
  return { open, setOpen, openNow, closeSoon };
}

function FeaturesMenu({ label }: { label: string }) {
  const { open, setOpen, openNow, closeSoon } = useMenu();
  return (
    <div className="relative inline-flex shrink-0 items-center" onMouseEnter={openNow} onMouseLeave={closeSoon}>
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={openNow}
        onFocus={openNow}
        className={`inline-flex items-center gap-1 rounded-full px-3 py-2 text-[13.5px] font-medium transition ${open ? "bg-[#f2f4f7] text-[#101828]" : "text-[#475467] hover:bg-[#f2f4f7] hover:text-[#101828]"}`}
      >
        {label}
        <ChevronDown size={13} strokeWidth={2.2} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`absolute left-0 top-full pt-3 transition duration-150 ${open ? "visible opacity-100" : "pointer-events-none invisible -translate-y-1 opacity-0"}`}>
        <div className="w-[640px] whitespace-normal rounded-[20px] border border-black/5 bg-white p-3 text-left shadow-[0_24px_60px_-12px_rgba(16,24,40,0.22)] ring-1 ring-black/5">
          <div className="grid grid-cols-3 gap-1">
            {featureGroups.map((group) => (
              <div key={group.label} className="px-2 py-2">
                <p className="px-2 text-[10.5px] font-semibold uppercase tracking-[0.1em] text-[#98a2b3]">{group.label}</p>
                <div className="mt-1.5 flex flex-col">
                  {group.items.map(({ name, blurb, anchor, Icon }) => (
                    <Link key={anchor} href={`#${anchor}`} onClick={() => setOpen(false)} className="group flex gap-2.5 rounded-[12px] p-2 transition hover:bg-[#f3f6ff]">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-[9px] bg-[#eef3ff] text-[#3559e9] ring-1 ring-[#dbe5ff] transition group-hover:bg-[#3559e9] group-hover:text-white group-hover:ring-[#3559e9]">
                        <Icon size={15} strokeWidth={2} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[12.5px] font-semibold leading-tight text-slate-900">{name}</span>
                        <span className="mt-0.5 block text-[11px] leading-[1.35] text-slate-500">{blurb}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DesktopNav({ locale = "en" }: { locale?: Locale }) {
  const copy = heroCopy[locale];
  const scrolled = useScrolled();
  const links = copy.navLinks;
  const productLabel = locale === "pt" ? "Produto" : "Product";
  const trialLabel = locale === "pt" ? "Comece grátis" : "Start free trial";

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 hidden lg:block">
      <nav
        className={`pointer-events-auto mx-auto mt-3 flex h-[58px] w-[calc(100%-40px)] max-w-[1320px] items-center justify-between gap-3 whitespace-nowrap rounded-full border border-[#1e2d52]/[0.07] bg-white/85 pl-4 pr-2 tracking-[-0.02em] backdrop-blur-md transition-shadow duration-300 ${
          scrolled
            ? "shadow-[0_6px_22px_rgba(30,45,82,0.14)]"
            : "shadow-[0_1px_2px_rgba(30,45,82,0.12),0_0_0_1px_rgba(30,45,82,0.04)]"
        }`}
      >
        <div className="flex min-w-0 items-center gap-0.5">
          <Link href={localizeHref("/", locale)} aria-label="Reacher home" className="mr-2 flex shrink-0 items-center gap-2 pl-1 pr-1">
            <Image src={appIcon} alt="" width={30} height={30} className="h-[30px] w-[30px] rounded-[8px] object-contain shadow-[0_1px_3px_rgba(16,24,40,0.18)]" priority unoptimized />
            <span className="text-[15px] font-semibold tracking-[-0.02em] text-[#101828]">Reacher</span>
          </Link>
          <FeaturesMenu label={productLabel} />
          {links.map(([label, href]) => (
            <Link key={label} href={localizeHref(href, locale)} className="shrink-0 rounded-full px-3 py-2 text-[13.5px] font-medium text-[#475467] transition hover:bg-[#f2f4f7] hover:text-[#101828]">
              {label}
            </Link>
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-1">
          <Link href={LOGIN_URL} className="rounded-full px-3.5 py-2 text-[13.5px] font-medium text-[#475467] transition hover:text-[#101828]">
            {copy.login}
          </Link>
          <Link href={LOGIN_URL} className="inline-flex items-center rounded-full bg-[#3559e9] px-[18px] py-2.5 text-[13px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.28)] transition hover:bg-blue-600">
            {trialLabel}
          </Link>
        </div>
      </nav>
    </header>
  );
}

function MobileNav({ locale = "en" }: { locale?: Locale }) {
  const [open, setOpen] = useState(false);
  const copy = heroCopy[locale];
  const links = copy.navLinks;
  const close = () => setOpen(false);

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-50 lg:hidden">
        <div className="pointer-events-auto mx-auto mt-2.5 flex h-[52px] w-[calc(100%-24px)] items-center justify-between rounded-full border border-black/[0.06] bg-white/85 pl-4 pr-2 shadow-[0_8px_26px_rgba(16,24,40,0.12)] backdrop-blur-xl">
          <Link href={localizeHref("/", locale)} aria-label="Reacher home" className="flex items-center gap-2">
            <Image src={appIcon} alt="" width={28} height={28} className="h-7 w-7 rounded-[7px] object-contain" priority unoptimized />
            <span className="text-[15px] font-semibold text-[#101828]">Reacher</span>
          </Link>
          <div className="flex items-center gap-1.5">
            <Link href={LOGIN_URL} className="rounded-full bg-[#3559e9] px-4 py-2 text-[12.5px] font-semibold text-white">
              {copy.login}
            </Link>
            <button type="button" onClick={() => setOpen(true)} aria-label="Open menu" className="flex h-9 w-9 items-center justify-center text-[#101828]">
              <Menu size={22} strokeWidth={1.9} />
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 z-[60] flex flex-col bg-white text-[#101828] lg:hidden">
          <div className="flex h-[60px] shrink-0 items-center justify-between px-5">
            <Link href={localizeHref("/", locale)} aria-label="Reacher home" onClick={close} className="flex items-center gap-2">
              <Image src={appIcon} alt="" width={28} height={28} className="h-7 w-7 rounded-[7px] object-contain" priority unoptimized />
              <span className="text-[15px] font-semibold text-[#101828]">Reacher</span>
            </Link>
            <button type="button" onClick={close} aria-label="Close menu" className="flex h-9 w-9 items-center justify-center text-[#475467]">
              <X size={24} strokeWidth={1.9} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-5 pb-8 pt-2">
            <p className="px-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#98a2b3]">
              {locale === "pt" ? "Produto" : "Product"}
            </p>
            <div className="mt-2 flex flex-col">
              {featureItems.map(({ name, blurb, anchor, Icon }) => (
                <Link key={anchor} href={`#${anchor}`} onClick={close} className="flex gap-3 rounded-2xl px-2 py-2.5 transition active:bg-[#f3f6ff]">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-[#eef3ff] text-[#3559e9] ring-1 ring-[#dbe5ff]">
                    <Icon size={16} strokeWidth={2} />
                  </span>
                  <span>
                    <span className="block text-[15px] font-semibold leading-tight text-slate-900">{name}</span>
                    <span className="mt-0.5 block text-[12.5px] leading-snug text-slate-500">{blurb}</span>
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-6 flex flex-col items-center gap-[clamp(10px,2.4vh,22px)] text-[18px] font-medium text-[#475467]">
              {links.map(([label, href]) => (
                <Link key={label} href={localizeHref(href, locale)} onClick={close} className="shrink-0 leading-tight transition hover:text-[#101828]">
                  {label}
                </Link>
              ))}
              <Link href={LOGIN_URL} onClick={close} className="mt-2 flex h-12 w-full max-w-[320px] shrink-0 items-center justify-center rounded-full bg-[#3559e9] text-[15px] font-semibold text-white">
                {copy.login}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
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
      <div className="pointer-events-none absolute left-1/2 top-[-190px] h-[690px] w-[92%] max-w-[1120px] -translate-x-1/2 rounded-[100%] bg-[#335CFF]/18 blur-[115px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_2%,rgba(199,216,255,0.96)_0%,rgba(223,233,255,0.78)_42%,rgba(255,255,255,0.98)_82%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(215,228,255,0.62)_0%,rgba(239,245,255,0.54)_45%,#ffffff_92%)]" />
      <DesktopNav locale={locale} />

      <MobileNav locale={locale} />

      <Image
        src={logo}
        alt="TikTok Shop Partner"
        width={155}
        height={42}
        className="absolute left-[24px] top-[80px] z-10 h-auto w-[110px] lg:hidden"
        priority
      />
      <div className="pointer-events-none absolute inset-x-0 top-[78px] z-10 hidden lg:block">
        <div className="mx-auto flex w-[calc(100%-40px)] max-w-[1320px] justify-end pr-1">
          <Image src={logo} alt="TikTok Shop Partner" width={155} height={42} className="h-auto w-[150px]" priority />
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
          <motion.span variants={wordVariants} className="inline-block">
            {copy.titleBottom}
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.82, y: 0 }}
          transition={{ type: "spring", damping: 14, stiffness: 100, delay: 0.42 }}
          className="mx-auto mt-4 max-w-[342px] text-[17px] leading-[1.82] text-[#343947] md:mt-5 md:max-w-[500px] md:text-[20px] md:leading-[30px]"
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
                        className="h-auto max-h-[26px] w-auto max-w-full object-contain opacity-60 grayscale transition md:max-h-[38px]"
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
