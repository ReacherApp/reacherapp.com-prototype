'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
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
        className="inline-flex h-[50px] w-[312px] items-center justify-center rounded-full border border-[#d4d9e5] bg-white px-[17px] text-[18px] font-medium leading-none text-black shadow-[0_2px_6px_rgba(10,20,40,0.08)] transition hover:bg-gray-50 md:h-[67px] md:w-auto md:px-7 md:text-[24px]"
      >
        {copy.bookCall}
      </Link>
      <Link
        href="https://portal.reacherapp.com/login"
        className="inline-flex h-[50px] w-[312px] items-center justify-center rounded-full bg-[#3559e9] px-8 text-[18px] font-medium leading-none !text-white shadow-[inset_0_2px_4px_rgba(255,255,255,0.25)] transition hover:bg-blue-700 md:h-[67px] md:w-auto md:px-7 md:text-[24px]"
        style={{ color: "#fff" }}
      >
        {copy.trial}
      </Link>
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

const triggerClass = (open: boolean) =>
  `inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-[13.5px] font-medium transition ${
    open ? "bg-white/[0.12] text-white ring-1 ring-white/20" : "text-white/70 hover:text-white"
  }`;

const panelClass =
  "rounded-[20px] border border-white/10 bg-[#101019]/95 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.75)] backdrop-blur-2xl";

function ProductMenu({ label }: { label: string }) {
  const { open, setOpen, openNow, closeSoon } = useMenu();
  return (
    <div className="relative" onMouseEnter={openNow} onMouseLeave={closeSoon}>
      <button type="button" aria-haspopup="true" aria-expanded={open} onClick={openNow} onFocus={openNow} className={triggerClass(open)}>
        {label}
        <ChevronDown size={13} strokeWidth={2.2} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`absolute left-0 top-full pt-2.5 transition duration-150 ${open ? "visible opacity-100" : "pointer-events-none invisible -translate-y-1 opacity-0"}`}>
        <div className={`${panelClass} w-[640px] p-3`}>
          <div className="grid grid-cols-3 gap-1">
            {featureGroups.map((group) => (
              <div key={group.label} className="px-2 py-2">
                <p className="px-2 text-[10.5px] font-semibold uppercase tracking-[0.1em] text-white/35">{group.label}</p>
                <div className="mt-1.5 flex flex-col">
                  {group.items.map(({ name, blurb, anchor, Icon }) => (
                    <Link key={anchor} href={`#${anchor}`} onClick={() => setOpen(false)} className="group flex gap-2.5 rounded-[12px] p-2 transition hover:bg-white/[0.06]">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-[9px] bg-white/[0.08] text-white ring-1 ring-white/10 transition group-hover:bg-[#3559e9] group-hover:ring-[#3559e9]">
                        <Icon size={15} strokeWidth={2} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[12.5px] font-semibold leading-tight text-white">{name}</span>
                        <span className="mt-0.5 block text-[11px] leading-[1.35] text-white/45">{blurb}</span>
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

function CompanyMenu({ label, links, locale }: { label: string; links: readonly (readonly [string, string])[]; locale: Locale }) {
  const { open, setOpen, openNow, closeSoon } = useMenu();
  return (
    <div className="relative" onMouseEnter={openNow} onMouseLeave={closeSoon}>
      <button type="button" aria-haspopup="true" aria-expanded={open} onClick={openNow} onFocus={openNow} className={triggerClass(open)}>
        {label}
        <ChevronDown size={13} strokeWidth={2.2} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`absolute left-0 top-full pt-2.5 transition duration-150 ${open ? "visible opacity-100" : "pointer-events-none invisible -translate-y-1 opacity-0"}`}>
        <div className={`${panelClass} w-[230px] p-2`}>
          {links.map(([itemLabel, href]) => (
            <Link key={itemLabel} href={localizeHref(href, locale)} onClick={() => setOpen(false)} className="block rounded-[11px] px-3 py-2.5 text-[13px] font-medium text-white/70 transition hover:bg-white/[0.06] hover:text-white">
              {itemLabel}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function DesktopNav({ locale = "en" }: { locale?: Locale }) {
  const copy = heroCopy[locale];
  const scrolled = useScrolled();
  const nl = copy.navLinks;
  const companyLinks = [nl[0], nl[3], nl[5], nl[6], nl[7], nl[4]] as const;
  const pricing = nl[1];
  const affiliate = nl[2];
  const productLabel = locale === "pt" ? "Produto" : "Product";
  const companyLabel = locale === "pt" ? "Empresa" : "Company";
  const trialLabel = locale === "pt" ? "Comece grátis" : "Start free trial";

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 hidden lg:block">
      <div
        className={`pointer-events-auto mx-auto mt-3 flex h-[58px] w-[min(1180px,calc(100%-40px))] items-center justify-between gap-4 rounded-full border px-2.5 pl-5 transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-[#0b0b12]/85 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
            : "border-white/[0.08] bg-[#0b0b12]/55 backdrop-blur-xl"
        }`}
      >
        <div className="flex items-center gap-1">
          <Link href={localizeHref("/", locale)} aria-label="Reacher home" className="mr-2 flex items-center gap-2">
            <Image src={appIcon} alt="" width={30} height={30} className="h-[30px] w-[30px] rounded-[8px] object-contain" priority unoptimized />
            <span className="text-[15px] font-semibold tracking-[-0.01em] text-white">Reacher</span>
          </Link>
          <ProductMenu label={productLabel} />
          <CompanyMenu label={companyLabel} links={companyLinks} locale={locale} />
          <Link href={localizeHref(pricing[1], locale)} className="rounded-full px-3.5 py-2 text-[13.5px] font-medium text-white/70 transition hover:text-white">
            {pricing[0]}
          </Link>
          <Link href={localizeHref(affiliate[1], locale)} className="rounded-full px-3.5 py-2 text-[13.5px] font-medium text-white/70 transition hover:text-white">
            {affiliate[0]}
          </Link>
        </div>
        <div className="flex items-center gap-1">
          <Link href={LOGIN_URL} className="rounded-full px-4 py-2 text-[13.5px] font-medium text-white/75 transition hover:text-white">
            {copy.login}
          </Link>
          <Link href={LOGIN_URL} className="inline-flex items-center rounded-full bg-[#3559e9] px-[18px] py-2.5 text-[13px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] transition hover:bg-blue-600">
            {trialLabel}
          </Link>
        </div>
      </div>
    </header>
  );
}

function MobileNav({ locale = "en" }: { locale?: Locale }) {
  const [open, setOpen] = useState(false);
  const copy = heroCopy[locale];
  const nl = copy.navLinks;
  const companyLinks = [nl[0], nl[3], nl[5], nl[6], nl[7], nl[4], nl[1], nl[2]] as const;
  const productLabel = locale === "pt" ? "Produto" : "Product";
  const companyLabel = locale === "pt" ? "Empresa" : "Company";
  const trialLabel = locale === "pt" ? "Comece grátis" : "Start free trial";
  const close = () => setOpen(false);

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-50 lg:hidden">
        <div className="pointer-events-auto mx-auto mt-2.5 flex h-[54px] w-[calc(100%-24px)] items-center justify-between rounded-full border border-white/10 bg-[#0b0b12]/85 pl-4 pr-2 text-white backdrop-blur-xl">
          <Link href={localizeHref("/", locale)} aria-label="Reacher home" className="flex items-center gap-2">
            <Image src={appIcon} alt="" width={28} height={28} className="h-7 w-7 rounded-[7px] object-contain" priority unoptimized />
            <span className="text-[15px] font-semibold text-white">Reacher</span>
          </Link>
          <div className="flex items-center gap-1.5">
            <Link href={LOGIN_URL} className="rounded-full bg-[#3559e9] px-3.5 py-2 text-[12.5px] font-semibold text-white">
              {trialLabel}
            </Link>
            <button type="button" onClick={() => setOpen(true)} aria-label="Open menu" className="flex h-9 w-9 items-center justify-center text-white">
              <Menu size={22} strokeWidth={1.9} />
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 z-[60] flex flex-col bg-[#07070b] text-white lg:hidden">
          <div className="flex h-[64px] shrink-0 items-center justify-between px-5">
            <Link href={localizeHref("/", locale)} aria-label="Reacher home" onClick={close} className="flex items-center gap-2">
              <Image src={appIcon} alt="" width={28} height={28} className="h-7 w-7 rounded-[7px] object-contain" priority unoptimized />
              <span className="text-[15px] font-semibold text-white">Reacher</span>
            </Link>
            <button type="button" onClick={close} aria-label="Close menu" className="flex h-9 w-9 items-center justify-center text-white/85">
              <X size={24} strokeWidth={1.9} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-5 pb-8 pt-2">
            <p className="px-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/35">{productLabel}</p>
            <div className="mt-2 flex flex-col">
              {featureItems.map(({ name, blurb, anchor, Icon }) => (
                <Link key={anchor} href={`#${anchor}`} onClick={close} className="flex gap-3 rounded-2xl px-2 py-2.5 transition active:bg-white/[0.06]">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-white/[0.08] text-white ring-1 ring-white/10">
                    <Icon size={16} strokeWidth={2} />
                  </span>
                  <span>
                    <span className="block text-[15px] font-semibold leading-tight text-white">{name}</span>
                    <span className="mt-0.5 block text-[12.5px] leading-snug text-white/45">{blurb}</span>
                  </span>
                </Link>
              ))}
            </div>
            <p className="mt-6 px-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/35">{companyLabel}</p>
            <div className="mt-1 flex flex-col">
              {companyLinks.map(([label, href]) => (
                <Link key={label} href={localizeHref(href, locale)} onClick={close} className="rounded-xl px-2 py-3 text-[16px] font-medium text-white/80 transition active:bg-white/[0.06]">
                  {label}
                </Link>
              ))}
            </div>
            <div className="mt-7 flex flex-col gap-3">
              <Link href={LOGIN_URL} onClick={close} className="flex h-12 items-center justify-center rounded-full border border-white/15 text-[15px] font-semibold text-white">
                {copy.login}
              </Link>
              <Link href={LOGIN_URL} onClick={close} className="flex h-12 items-center justify-center rounded-full bg-[#3559e9] text-[15px] font-semibold text-white">
                {trialLabel}
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
        className="absolute left-[36px] top-[88px] z-10 h-auto w-[112px] md:left-[55px] md:top-[82px] md:w-[155px]"
        priority
      />

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
          className="mx-auto mt-[56px] grid w-full max-w-[390px] grid-cols-4 items-center justify-center gap-x-6 gap-y-8 opacity-95 md:mt-[22px] md:flex md:max-w-[1070px] md:flex-wrap md:gap-x-9 md:gap-y-10"
        >
          {brandLogos.map((src, index) => (
            <div key={`${src}-${index}`} className="flex min-w-0 items-center justify-center md:w-[calc((100%_-_144px)/5)] lg:w-[122px]">
              <Image
                src={src}
                alt=""
                width={240}
                height={144}
                sizes="(max-width: 767px) 68px, 122px"
                quality={100}
                className="h-auto max-h-[30px] max-w-full object-contain md:max-h-[78px]"
                priority={index < 10}
              />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto mt-6 block w-full max-w-[430px] px-4 pb-9 md:hidden">
        <motion.div
          key={heroShots[activeShot]}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-[1.7rem] border border-blue-100 bg-gradient-to-b from-[#eef5ff] to-white p-3 pt-8 shadow-xl shadow-blue-900/10"
        >
          {locale === "pt" ? (
            <div className="mx-auto mb-3 w-fit rounded-full border border-[#b9c7f5] bg-[#edf6ff] px-3.5 py-1.5 text-center text-[11px] font-medium leading-none text-[#1f2937] shadow-[0_0_0_5px_rgba(237,246,255,0.92)]">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#2563eb] align-middle" />
              {copy.carouselLabels[activeShot]}
            </div>
          ) : null}
          <Image src={heroShots[activeShot]} alt="Reacher dashboard" width={1035} height={490} className="h-auto w-full rounded-[1.05rem]" priority />
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
              className={`relative w-[1035px] shrink-0 overflow-hidden rounded-[2.5rem] border border-blue-100 bg-gradient-to-b from-[#eef5ff] to-white p-6 pt-[70px] shadow-2xl shadow-blue-900/10 transition-opacity duration-700 ${
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
              <Image src={src} alt="Reacher dashboard" width={1035} height={490} className="rounded-[1.6rem]" priority={index < 2} />
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
