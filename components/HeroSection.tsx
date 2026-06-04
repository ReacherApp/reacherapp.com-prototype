'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

type HeroSectionProps = {
  logo: string;
  ycIcon: string;
  heroShots: string[];
  brandLogos: string[];
  locale?: Locale;
};

const appIcon = "/reacher-assets/contact/nav-logo.png";
const lightLogo = "/reacher-assets/shared/reacher-logo-light.svg";

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

function MobileHeader({ locale = "en" }: { locale?: Locale }) {
  const [open, setOpen] = useState(false);
  const copy = heroCopy[locale];
  const links = copy.navLinks;

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 h-[76px] overflow-visible text-white lg:hidden">
        <div className="absolute inset-x-0 top-0 h-[64px] rounded-b-[32px] bg-[#050505]" />
        <Link href={localizeHref("/", locale)} aria-label="Reacher home" className="absolute left-1/2 top-[14px] flex h-[36px] w-[132px] -translate-x-1/2 items-center justify-center rounded-[12px]">
          <Image src={lightLogo} alt="Reacher" width={120} height={32} className="h-[32px] w-[120px] object-contain" priority unoptimized />
        </Link>
        <button type="button" onClick={() => setOpen(true)} aria-label="Open menu" className="absolute left-[calc(50%+76px)] top-[16px] flex h-8 w-8 items-center justify-center text-white/90">
          <Menu size={24} strokeWidth={1.8} />
        </button>
      </nav>

      {open ? (
        <div className="pointer-events-none fixed inset-0 z-[60] bg-black text-white lg:hidden">
          <div className="pointer-events-auto absolute inset-0">
            <Link href={localizeHref("/", locale)} aria-label="Reacher home" onClick={() => setOpen(false)} className="absolute left-1/2 top-[16px] flex h-[36px] w-[132px] -translate-x-1/2 items-center justify-center rounded-[12px]">
              <Image src={lightLogo} alt="Reacher" width={120} height={32} className="h-[32px] w-[120px] object-contain" priority unoptimized />
            </Link>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close menu" className="absolute left-[calc(50%+76px)] top-[22px] text-white/85">
              <X size={24} strokeWidth={1.8} />
            </button>
            <div className="absolute inset-x-0 bottom-4 top-[104px] flex flex-col items-center gap-[clamp(10px,2.8vh,26px)] overflow-y-auto px-6 pb-6 pt-1 text-[20px] font-medium text-white/75">
              {links.map(([label, href]) => (
                <Link
                  key={label}
                  href={localizeHref(href, locale)}
                  onClick={() => setOpen(false)}
                  className="shrink-0 leading-tight"
                >
                  {label}
                </Link>
              ))}
              <Link href="https://portal.reacherapp.com/login" className="shrink-0 leading-tight">
                {copy.login}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function DesktopNotchHeader({ locale = "en" }: { locale?: Locale }) {
  const copy = heroCopy[locale];
  const leftLinks = copy.navLinks.slice(0, 4);
  const rightLinks = copy.navLinks.slice(4, 8);

  return (
    <header className="pointer-events-none fixed left-0 right-0 top-0 z-50 hidden h-[66px] lg:block">
      <div className="absolute inset-x-0 top-0 h-[24px] bg-[#050505]" />
      <svg
        viewBox="0 0 1440 44"
        preserveAspectRatio="none"
        className="absolute left-0 right-0 top-[21px] h-[44px] w-screen fill-[#050505] shadow-[0px_-2px_0px_0px_#050505]"
        aria-hidden="true"
      >
        <path d="M 0 0 C 83 0 68 44 158 44 L 1282 44 C 1372 44 1357 0 1440 0 L 1440 0 L 0 0 Z" />
      </svg>

      <nav className="pointer-events-auto absolute left-1/2 top-[23px] flex h-[32px] w-[1010px] -translate-x-1/2 flex-nowrap items-center justify-center gap-[22px] whitespace-nowrap text-[12.5px] font-medium leading-none text-white/82">
        {leftLinks.map(([label, href]) => (
          <Link key={label} href={localizeHref(href, locale)} className="inline-flex h-full shrink-0 items-center transition hover:text-white">
            {label}
          </Link>
        ))}
        <Link href={localizeHref("/", locale)} aria-label="Reacher home" className="inline-flex h-full w-[82px] shrink-0 items-center justify-center gap-2 rounded-[10px] transition hover:scale-[1.03]">
          <Image src={appIcon} alt="" width={31} height={31} className="h-[31px] w-[31px] rounded-[8px] object-contain shadow-[0_1px_3px_rgba(16,24,40,0.18)]" priority unoptimized />
          <span className="text-[12.5px] font-semibold leading-none text-white">Reacher</span>
        </Link>
        {rightLinks.map(([label, href]) => (
          <Link key={label} href={localizeHref(href, locale)} className="inline-flex h-full shrink-0 items-center transition hover:text-white">
            {label}
          </Link>
        ))}
        <Link
          href="https://portal.reacherapp.com/login"
          className="inline-flex h-full shrink-0 items-center justify-center rounded-full bg-[#3559e9] px-5 text-[13px] font-medium leading-none text-white shadow-[inset_0_2px_4px_rgba(255,255,255,0.25)] transition hover:bg-blue-700"
        >
          {copy.login}
        </Link>
      </nav>
    </header>
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
      <DesktopNotchHeader locale={locale} />

      <MobileHeader locale={locale} />

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
