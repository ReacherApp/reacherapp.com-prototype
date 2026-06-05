'use client';

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { featureGroups, featureItems } from "@/components/featureMenu";

export type Locale = "en" | "pt";

const appIcon = "/reacher-icon.svg";
const LOGIN_URL = "https://portal.reacherapp.com/login";

const navCopy = {
  en: {
    login: "Log In",
    product: "Product",
    resources: "Resources",
    trial: "Get 14 day free trial",
    links: [
      ["Testimonials", "/#testimonials-new"],
      ["Pricing", "/pricing"],
      ["What's New", "/changelog"],
    ],
    resourceLinks: [
      ["Blog", "/blog", "Practical guides for creator marketing & affiliate ops."],
      ["Masterclass", "/masterclass", "Free TikTok Shop affiliate training."],
      ["Affiliate", "/affiliate", "Earn by referring brands to Reacher."],
      ["Contact", "/contact", "Talk to our team."],
      ["Careers", "https://jobs.ashbyhq.com/reacher", "Join the team building Reacher."],
    ],
  },
  pt: {
    login: "Entrar",
    product: "Produto",
    resources: "Recursos",
    trial: "Teste grátis de 14 dias",
    links: [
      ["Depoimentos", "/#testimonials-new"],
      ["Preços", "/pricing"],
      ["Novidades", "/changelog"],
    ],
    resourceLinks: [
      ["Blog", "/blog", "Guias práticos de marketing de criadores."],
      ["Masterclass", "/masterclass", "Treinamento gratuito de afiliados."],
      ["Afiliados", "/affiliate", "Ganhe indicando marcas para a Reacher."],
      ["Contato", "/contact", "Fale com nosso time."],
      ["Carreiras", "https://jobs.ashbyhq.com/reacher", "Junte-se ao time da Reacher."],
    ],
  },
} as const;

function localizeHref(href: string, locale: Locale) {
  if (locale !== "pt" || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) return href;
  if (href.startsWith("/#")) return `/pt/${href.slice(1)}`;
  if (href.startsWith("#")) return href;
  return href === "/" ? "/pt/" : `/pt${href}`;
}

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

function FeaturesMenu({ label, locale }: { label: string; locale: Locale }) {
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
        <div className="w-[1040px] whitespace-normal rounded-[24px] border border-black/5 bg-white p-6 text-left shadow-[0_28px_70px_-14px_rgba(16,24,40,0.24)] ring-1 ring-black/5">
          <div className="grid grid-cols-3 gap-x-8 gap-y-7">
            {featureGroups.map((group) => (
              <div key={group.label} className="px-1">
                <p className="px-3 text-[11.5px] font-semibold uppercase tracking-[0.12em] text-[#98a2b3]">{group.label}</p>
                <div className="mt-2 flex flex-col gap-1">
                  {group.items.map(({ name, blurb, href, Icon }) => (
                    <Link key={href} href={localizeHref(href, locale)} onClick={() => setOpen(false)} className="group flex items-center gap-3.5 rounded-[14px] px-3 py-2.5 transition hover:bg-[#f3f6ff]">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-[#eef3ff] text-[#3559e9] ring-1 ring-[#dbe5ff] transition group-hover:bg-[#3559e9] group-hover:text-white group-hover:ring-[#3559e9]">
                        <Icon size={19} strokeWidth={2} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[14.5px] font-semibold leading-tight text-slate-900">{name}</span>
                        <span className="mt-0.5 block truncate text-[12.5px] leading-snug text-slate-500">{blurb}</span>
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

function ResourcesMenu({ label, links, locale }: { label: string; links: readonly (readonly [string, string, string])[]; locale: Locale }) {
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
        <div className="w-[360px] whitespace-normal rounded-[20px] border border-black/5 bg-white p-2.5 text-left shadow-[0_24px_60px_-12px_rgba(16,24,40,0.22)] ring-1 ring-black/5">
          {links.map(([itemLabel, href, desc]) => (
            <Link key={itemLabel} href={localizeHref(href, locale)} onClick={() => setOpen(false)} className="block rounded-[14px] px-3.5 py-3 transition hover:bg-[#f3f6ff]">
              <span className="block text-[14px] font-semibold text-slate-900">{itemLabel}</span>
              <span className="mt-0.5 block text-[12.5px] leading-snug text-slate-500">{desc}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function DesktopNav({ locale, active, partnerBadge }: { locale: Locale; active: string; partnerBadge?: string }) {
  const copy = navCopy[locale];
  const scrolled = useScrolled();

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 hidden lg:block">
      <nav
        className={`pointer-events-auto mx-auto mt-3 flex h-[58px] w-[calc(100%-40px)] max-w-[1320px] items-center justify-between gap-3 whitespace-nowrap rounded-full border border-white/40 pl-4 pr-2 tracking-[-0.02em] backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 ${
          scrolled
            ? "bg-white/75 shadow-[0_6px_22px_rgba(30,45,82,0.14)]"
            : "bg-white/55 shadow-[0_1px_2px_rgba(30,45,82,0.10),0_0_0_1px_rgba(30,45,82,0.03)]"
        }`}
      >
        <div className="flex min-w-0 items-center gap-0.5">
          <Link href={localizeHref("/", locale)} aria-label="Reacher home" className="mr-2 flex shrink-0 items-center gap-2 pl-1 pr-1">
            <Image src={appIcon} alt="" width={30} height={30} className="h-[30px] w-[30px] rounded-[8px] object-contain shadow-[0_1px_3px_rgba(16,24,40,0.18)]" priority unoptimized />
            <span className="text-[15px] font-semibold tracking-[-0.02em] text-[#101828]">Reacher</span>
          </Link>
          <FeaturesMenu label={copy.product} locale={locale} />
          <ResourcesMenu label={copy.resources} links={copy.resourceLinks} locale={locale} />
          {copy.links.map(([label, href]) => (
            <Link
              key={label}
              href={localizeHref(href, locale)}
              className={`shrink-0 rounded-full px-3 py-2 text-[13.5px] font-medium transition hover:bg-[#f2f4f7] hover:!text-[#101828] ${active === label ? "bg-[#f2f4f7] !text-[#101828]" : "!text-[#475467]"}`}
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-1">
          <Link href={LOGIN_URL} className="rounded-full px-3.5 py-2 text-[13.5px] font-medium text-[#475467] transition hover:text-[#101828]">
            {copy.login}
          </Link>
          <Link href={LOGIN_URL} className="inline-flex items-center rounded-full bg-[#3559e9] px-[18px] py-2.5 text-[13px] font-semibold !text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.28)] transition hover:bg-blue-600">
            {copy.trial}
          </Link>
          {partnerBadge ? (
            <Image src={partnerBadge} alt="TikTok Shop Partner" width={150} height={42} className="ml-[60px] h-[38px] w-auto shrink-0 object-contain" unoptimized />
          ) : null}
        </div>
      </nav>
    </header>
  );
}

function MobileNav({ locale, active }: { locale: Locale; active: string }) {
  const [open, setOpen] = useState(false);
  const copy = navCopy[locale];
  const close = () => setOpen(false);

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-50 lg:hidden">
        <div className="pointer-events-auto mx-auto mt-2.5 flex h-[52px] w-[calc(100%-24px)] items-center justify-between rounded-full border border-white/40 bg-white/65 pl-4 pr-2 shadow-[0_8px_26px_rgba(16,24,40,0.12)] backdrop-blur-xl backdrop-saturate-150">
          <Link href={localizeHref("/", locale)} aria-label="Reacher home" className="flex items-center gap-2">
            <Image src={appIcon} alt="" width={28} height={28} className="h-7 w-7 rounded-[7px] object-contain" priority unoptimized />
            <span className="text-[15px] font-semibold text-[#101828]">Reacher</span>
          </Link>
          <div className="flex items-center gap-1.5">
            <Link href={LOGIN_URL} className="rounded-full bg-[#3559e9] px-4 py-2 text-[12.5px] font-semibold !text-white">
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
            <p className="px-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#98a2b3]">{copy.product}</p>
            <div className="mt-2 flex flex-col">
              {featureItems.map(({ name, blurb, href, Icon }) => (
                <Link key={href} href={localizeHref(href, locale)} onClick={close} className="flex gap-3 rounded-2xl px-2 py-2.5 transition active:bg-[#f3f6ff]">
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
              {copy.links.map(([label, href]) => (
                <Link key={label} href={localizeHref(href, locale)} onClick={close} className={`shrink-0 leading-tight transition hover:text-[#101828] ${active === label ? "text-[#101828]" : ""}`}>
                  {label}
                </Link>
              ))}
              {copy.resourceLinks.map(([label, href]) => (
                <Link key={label} href={localizeHref(href, locale)} onClick={close} className="shrink-0 leading-tight transition hover:text-[#101828]">
                  {label}
                </Link>
              ))}
              <Link href={LOGIN_URL} onClick={close} className="mt-2 flex h-12 w-full max-w-[320px] shrink-0 items-center justify-center rounded-full bg-[#3559e9] text-[15px] font-semibold !text-white">
                {copy.login}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export function SiteNav({ locale = "en", active = "", partnerBadge }: { locale?: Locale; active?: string; partnerBadge?: string }) {
  return (
    <>
      <DesktopNav locale={locale} active={active} partnerBadge={partnerBadge} />
      <MobileNav locale={locale} active={active} />
    </>
  );
}
