import type { Metadata } from "next";

const SITE_URL = "https://www.reacherapp.com";

function ptPath(pathname: string) {
  if (pathname === "/") return "/pt/";
  return `/pt${pathname}`;
}

export function localizedAlternates(pathname: string, locale: "en" | "pt" = "en"): Metadata["alternates"] {
  return {
    canonical: locale === "pt" ? ptPath(pathname) : pathname,
    languages: {
      "en-US": pathname,
      "pt-BR": ptPath(pathname),
      "x-default": pathname,
    },
  };
}

export const metadataBase = new URL(SITE_URL);
