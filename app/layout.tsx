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

const rb2bVisitorTrackingScript = `
!function(key) {
  if (window.reb2b) return;
  window.reb2b = {loaded: true};
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://ddwl4m2hdecbv.cloudfront.net/b/" + key + "/" + key + ".js.gz";
  document.getElementsByTagName("script")[0].parentNode.insertBefore(s, document.getElementsByTagName("script")[0]);
}("DNXY8HDGL2O0");
`;

const monacoVisitorTrackingScript = `
!function(e){"use strict";var a=e&&e.namespace;if(a&&e.profileId&&e.cdn){var r=window[a];if(r&&Array.isArray(r)||(r=window[a]=[]),!r.initialized&&!r._loaded)if(r._loaded)console&&console.warn("[Radar] Duplicate initialization attempted");else{r._loaded=!0;["track","page","identify","group","alias","ready","debug","on","off","once","trackClick","trackSubmit","trackLink","trackForm","pageview","screen","reset","register","setAnonymousId","addSourceMiddleware","addIntegrationMiddleware","addDestinationMiddleware"].forEach((function(e){var i;r[e]=(i=e,function(){var e=window[a];if(e.initialized)return e[i].apply(e,arguments);var r=[].slice.call(arguments);return r.unshift(i),e.push(r),e})})),r.bootstrap=function(){var a=document.createElement("script");a.async=!0,a.type="text/javascript",a.id="__radar__",a.dataset.settings=JSON.stringify(e),a.src="https://"+e.cdn+"/releases/latest/radar.min.js";var r=document.scripts[0];r.parentNode.insertBefore(a,r)},r.bootstrap()}}else"undefined"!=typeof console&&console.error("[Radar] Configuration incomplete")}({"cdn":"cdn.snitcher.com","apiEndpoint":"radar.snitcher.com","profileId":"rodwb8DRUJf","namespace":"Monaco","waitForConsent":true});
`;

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
      <head>
        <script
          id="rb2b-visitor-tracking"
          dangerouslySetInnerHTML={{ __html: rb2bVisitorTrackingScript }}
        />
        <script
          id="monaco-visitor-tracking"
          dangerouslySetInnerHTML={{ __html: monacoVisitorTrackingScript }}
        />
      </head>
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
