import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { Fragment_Mono, Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { localizedAlternates, metadataBase } from "@/lib/seo";
import GlobalCursor from "@/components/GlobalCursor";

// Nuckle is a commercial typeface; Hanken Grotesk is the closest free, self-hostable match.
const inter = Hanken_Grotesk({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const fragmentMono = Fragment_Mono({
  variable: "--font-fragment-mono",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.reacherapp.com/#organization",
      name: "Reacher",
      legalName: "Reacher Platforms, Inc.",
      url: "https://www.reacherapp.com",
      logo: "https://www.reacherapp.com/reacher-assets/contact/nav-logo.png",
      sameAs: [
        "https://twitter.com/ReacherApp/",
        "https://www.linkedin.com/company/reacherapp",
        "https://www.facebook.com/reacherapp",
      ],
      description:
        "Reacher helps TikTok Shop brands grow revenue with AI creator discovery, automated outreach, creator CRM, campaigns, and social commerce analytics.",
    },
    {
      "@type": "WebSite",
      "@id": "https://www.reacherapp.com/#website",
      url: "https://www.reacherapp.com",
      name: "Reacher",
      publisher: {
        "@id": "https://www.reacherapp.com/#organization",
      },
      inLanguage: "en-US",
    },
  ],
};

export const metadata: Metadata = {
  metadataBase,
  title: "Reacher | Grow TikTok Shop Revenue on Autopilot",
  description:
    "Automate creator discovery, outreach, CRM, and TikTok Shop affiliate campaigns with Reacher.",
  alternates: localizedAlternates("/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${ibmPlexMono.variable} ${fragmentMono.variable} h-full antialiased`}
    >
      <Script
        src="https://files.tlt-cdn.com/tlt.js"
        data-tolt="pk_PzPT13f4bWaD17rvQvJWzF6i"
        strategy="beforeInteractive"
      />
      <body className="min-h-full flex flex-col bg-reacher-bg text-white">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }} />
        {children}
        <GlobalCursor />
        <Analytics />
        <Script src="//cdn.trackdesk.com/tracking.js" strategy="afterInteractive" />
        <Script src="https://cdn.firstpromoter.com/fpr.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
