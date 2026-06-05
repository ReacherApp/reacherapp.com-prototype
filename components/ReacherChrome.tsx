'use client';

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { SocialIconLinks } from "@/components/SocialIconLinks";
import { SiteNav } from "@/components/SiteNav";

const appIcon = "/reacher-assets/contact/nav-logo.png";
const lightLogo = "/reacher-assets/shared/reacher-logo-light.svg";
const partnerBadge = "/reacher-assets/shared/tiktok-shop-partner.png";

type Locale = "en" | "pt";

type ChromeCopy = {
  login: string;
  navLinks: readonly (readonly [string, string])[];
  footerColumns: readonly {
    title: string;
    links: readonly (readonly [string, string])[];
  }[];
  footerTagline: string;
  copyright: string;
};

function localizeHref(href: string, locale: Locale) {
  if (locale !== "pt" || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) return href;
  if (href.startsWith("/#")) return `/pt/${href.slice(1)}`;
  if (href.startsWith("#")) return href;
  return href === "/" ? "/pt/" : `/pt${href}`;
}

const chromeCopy: Record<Locale, ChromeCopy> = {
  en: {
    login: "Log In",
    navLinks: [
      ["Testimonials", "/#testimonials-new"],
      ["Pricing", "/pricing"],
      ["Affiliate", "https://reacher.tolt.io/"],
      ["Blog", "/blog"],
      ["Contact", "/contact"],
      ["What's New", "/changelog"],
      ["Careers", "https://jobs.ashbyhq.com/reacher"],
      ["Masterclass", "/masterclass"],
    ],
    footerColumns: [
      {
        title: "Company",
        links: [
          ["Testimonials", "/#testimonials-new"],
          ["Career", "https://jobs.ashbyhq.com/reacher"],
          ["Blog", "/blog"],
          ["Pricing", "/pricing"],
          ["Contact Us", "/contact"],
        ],
      },
      {
        title: "Social",
        links: [
          ["Twitter", "https://twitter.com/ReacherApp/"],
          ["LinkedIn", "https://www.linkedin.com/company/reacherapp"],
          ["Facebook", "https://www.facebook.com/reacherapp"],
          ["TikTok App", "https://seller-us.tiktok.com/appstore/us/7382298357580007211"],
        ],
      },
      {
        title: "Legal",
        links: [
          ["Privacy Policy", "/policy/privacy-policy"],
          ["Terms of Service", "/policy/terms-of-service-agreement"],
        ],
      },
    ],
    footerTagline: "Automate your creator outreach and boost engagement",
    copyright: "© 2026 Reacher. All rights reserved.",
  },
  pt: {
    login: "Entrar",
    navLinks: [
      ["Depoimentos", "/#testimonials-new"],
      ["Preços", "/pricing"],
      ["Afiliados", "https://reacher.tolt.io/"],
      ["Blog", "/blog"],
      ["Contato", "/contact"],
      ["Novidades", "/changelog"],
      ["Carreiras", "https://jobs.ashbyhq.com/reacher"],
      ["Masterclass", "/masterclass"],
    ],
    footerColumns: [
      {
        title: "Empresa",
        links: [
          ["Depoimentos", "/#testimonials-new"],
          ["Carreiras", "https://jobs.ashbyhq.com/reacher"],
          ["Blog", "/blog"],
          ["Preços", "/pricing"],
          ["Fale conosco", "/contact"],
        ],
      },
      {
        title: "Social",
        links: [
          ["Twitter", "https://twitter.com/ReacherApp/"],
          ["LinkedIn", "https://www.linkedin.com/company/reacherapp"],
          ["Facebook", "https://www.facebook.com/reacherapp"],
          ["TikTok App", "https://seller-us.tiktok.com/appstore/us/7382298357580007211"],
        ],
      },
      {
        title: "Legal",
        links: [
          ["Política de Privacidade", "/policy/privacy-policy"],
          ["Termos de Serviço", "/policy/terms-of-service-agreement"],
        ],
      },
    ],
    footerTagline: "Automatize o contato com criadores e aumente o engajamento",
    copyright: "© 2026 Reacher. Todos os direitos reservados.",
  },
};

function MobileHeader({ active = "", locale = "en" }: { active?: string; locale?: Locale }) {
  const [open, setOpen] = useState(false);
  const { login, navLinks } = chromeCopy[locale];

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
              {navLinks.map(([label, href]) => (
                <Link
                  key={label}
                  href={localizeHref(href, locale)}
                  onClick={() => setOpen(false)}
                  className={`shrink-0 leading-tight ${active === label ? "font-bold text-white" : ""}`}
                >
                  {label}
                </Link>
              ))}
              <Link href="https://portal.reacherapp.com/login" className="shrink-0 leading-tight">
                {login}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export function ReacherHeader({ active = "", locale = "en" }: { active?: string; locale?: Locale }) {
  return <SiteNav locale={locale} active={active} />;
}

export function PageBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full bg-[#eef1fb] px-7 py-3 text-sm font-semibold text-[#3559e9]">
      {children}
    </span>
  );
}

function FooterColumn({ title, links }: { title: string; links: readonly (readonly [string, string])[] }) {
  return (
    <div>
      <h3 className="text-[13px] font-semibold text-[#97baff]">{title}</h3>
      <div className="mt-4 flex flex-col gap-3.5 text-[14px] font-semibold text-[#d5e2ff]">
        {links.map(([label, href]) => (
          <Link href={href} key={label} className="hover:text-white">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function ReacherFooter({ locale = "en" }: { locale?: Locale }) {
  const { footerColumns, footerTagline, copyright } = chromeCopy[locale];

  return (
    <footer className="relative bg-[#2547d0] px-6 pt-[72px] text-white">
      <div className="mx-auto grid max-w-[1320px] gap-14 pb-11 md:grid-cols-[2.2fr_0.65fr_0.65fr_0.75fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <Image src={appIcon} alt="Reacher" width={31} height={31} className="h-[31px] w-[31px] rounded-[8px] object-contain shadow-[0_1px_3px_rgba(16,24,40,0.18)]" />
            <span className="text-[18px] font-semibold tracking-[-0.02em] text-white">Reacher</span>
          </div>
          <p className="mt-7 max-w-[250px] text-[14px] leading-6 text-[#c0d5ff]">{footerTagline}</p>
          <Link href="https://seller-us.tiktok.com/appstore/us/7382298357580007211" className="mt-7 block w-[142px]">
            <Image src={partnerBadge} alt="TikTok Shop Partner" width={168} height={47} className="h-auto w-[142px] brightness-0 invert" />
          </Link>
        </div>
        {footerColumns.map((column) => (
          <FooterColumn key={column.title} title={column.title} links={column.links.map(([label, href]) => [label, localizeHref(href, locale)] as const)} />
        ))}
      </div>
      <div className="mx-auto flex max-w-[1320px] flex-col gap-5 border-t border-white/10 py-9 text-[14px] text-[#c0d5ff] md:flex-row md:items-center md:justify-between">
        <span>{copyright}</span>
        <SocialIconLinks />
      </div>
    </footer>
  );
}
