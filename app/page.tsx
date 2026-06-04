import Image from "next/image";
import Link from "next/link";
import { Check, Phone, Rocket, X } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import CaseStudyCarousel from "@/components/CaseStudyCarousel";
import { SocialIconLinks } from "@/components/SocialIconLinks";

const logo =
  "https://framerusercontent.com/images/F68h2j9Bg2J6B29Z3plcX5AHOM.png?width=431&height=117";
const ycIcon =
  "https://framerusercontent.com/images/No24MroIAOOqQTvTMXRZchUXeug.svg?width=400&height=400";
const heroShots = [
  "https://framerusercontent.com/images/C8iJnbM3vy2U11VEVlLmMOSd5Ds.png?scale-down-to=2048&width=10350&height=4900",
  "https://framerusercontent.com/images/Cz5zjbvJhS6VOTcsq1PCkSUeqxc.png?scale-down-to=2048&width=10350&height=4900",
  "https://framerusercontent.com/images/QKtTw5uLjqHWxHrPA3fyPLf6U.png?scale-down-to=2048&width=10350&height=4900",
  "https://framerusercontent.com/images/T183VHdXEqHM6jkanlYBIHDZi6k.png?scale-down-to=2048&width=10350&height=4900",
];

const brandLogos = [
  "https://framerusercontent.com/images/0ogJrZaIXSJd0ZvWwhsrY0i0oK0.svg?scale-down-to=512&width=1200&height=800",
  "https://framerusercontent.com/images/tXgkWywxm8cALHk9dF2QvjaqD4o.svg?scale-down-to=512&width=1200&height=800",
  "https://framerusercontent.com/images/dA6m3MvSky8ElDhABpNqJwkyamg.svg?width=84&height=31",
  "https://framerusercontent.com/images/sp5PrOSM4qPAVMlWuE3XxE3Eoyw.svg?width=295&height=211",
  "https://framerusercontent.com/images/JCyBR5RAwNL1jt2QchUog5f4z8w.svg?width=430&height=155",
  "https://framerusercontent.com/images/HfaE6aDfsRAAndh55FqLSDuigD4.png?scale-down-to=512&width=1024&height=640",
  "https://framerusercontent.com/images/BkrcWYNHW5PmFa9p7FyXRK5BD0k.svg?width=157&height=100",
  "https://framerusercontent.com/images/pDyY3gkgRXxQSWrzpg5Fbcc7jRg.svg?width=400&height=293",
  "https://framerusercontent.com/images/8GcnfsodNlnxoE6tlKySmhSXM.png?width=200&height=93",
  "https://framerusercontent.com/images/ec33mGS7FcG3RgLhproAkCSjjKg.svg?width=155&height=142",
  "https://framerusercontent.com/images/5hFpLY9HzRWSFQH889Pqbkb9lvk.webp?width=343&height=120",
  "https://framerusercontent.com/images/OxdAEnozwu5dV6TtTGbqWR59Mw.png?scale-down-to=512&width=1536&height=864",
  "https://framerusercontent.com/images/W5qmwKNmsQ2hgSv3w04BrQffFsc.png?width=466&height=108",
  "/logi.svg",
  "https://framerusercontent.com/images/ckR1SQcSBJjunq03YMqy3g538U.webp?width=371&height=120",
  "https://framerusercontent.com/images/eWRhZGlvaIOLW1zGdMqirgC3J8.svg?scale-down-to=1024&width=1629&height=233",
  "https://framerusercontent.com/images/NY4Imcn49uVVNlGS6Op3pWDLsM.webp?width=391&height=120",
  "https://framerusercontent.com/images/bovkJ5fG9SjaaYrxJMrc1qL365I.svg?scale-down-to=1024&width=2500&height=338",
  "https://framerusercontent.com/images/qzqdTQjBDe9AtWxuy5AAteqIik.svg?scale-down-to=512&width=830&height=195",
  "https://framerusercontent.com/images/uOL5sIFXSHiOOg2z6FsgDyT6EKg.webp?scale-down-to=512&width=660&height=120",
];

const features = [
  {
    id: "creator-discovery",
    title: "AI Creator Discovery",
    saved: "10+ hours saved",
    copy: "Describe your ideal creator. AI matches based on their actual video content, style, and demographics.",
    image:
      "https://framerusercontent.com/images/9pQSPFM0J5002wQ6OnzgRUQH6kk.png?scale-down-to=1024&width=2152&height=1000",
  },
  {
    id: "automated-outreach",
    title: "Automated Outreach",
    saved: "40+ hours saved",
    copy: "Reach thousands of creators daily through DMs, collab invites, email, and sample requests.",
    image:
      "https://framerusercontent.com/images/DjNceYh6EbhjcYDzwatq0bfVZE.png?scale-down-to=1024&width=2152&height=1000",
  },
];

const intelligence = [
  {
    id: "social-intelligence",
    title: "Social Intelligence",
    saved: "Competitor insights",
    copy: "Track top-performing brands, products, and videos on TikTok Shop. Spy on competitor creators and one-click target them with outreach.",
    image:
      "https://framerusercontent.com/images/LKcKJp3qqCMdKiDJUytPQHw4ao4.png?scale-down-to=1024&width=2960&height=1344",
  },
  {
    id: "creative-agent",
    title: "Creative Agent",
    saved: "10+ hours saved",
    copy: "AI analyzes your best-performing videos and generates ready-to-share creative briefs in minutes.",
    image:
      "https://framerusercontent.com/images/dMNrWj0mId2OG6lq90eHu39nEA.png?scale-down-to=1024&width=2960&height=1344",
  },
];

const scale = [
  {
    id: "crm",
    title: "CRM",
    saved: "10+ hours saved",
    copy: "Track every creator's status, messages, samples, and GMV in one place. Group and segment creators to run targeted automations.",
    image:
      "https://framerusercontent.com/images/CTXSsOa8J35dNanOUYDsi3uRqs.png?scale-down-to=1024&width=2960&height=1344",
  },
  {
    id: "campaigns",
    title: "Campaigns",
    saved: "20+ hours saved",
    copy: "Run retainers, challenges, and contests to keep creators posting. Set reward structures, track GMV per campaign, and share via Automations or Discord.",
    image:
      "https://framerusercontent.com/images/WcPyLmo4jxmfPIzvFUJl7mLko.png?scale-down-to=1024&width=2960&height=1344",
  },
];

const testimonials = [
  {
    brand: "Flywheel Digital",
    quote:
      "Jerry and Bora are outstanding partners—responsive, innovative, and genuinely invested in our success. With Reacher, we've brought our TikTok Shop affiliate workflow in-house, efficiently scaling to serve a growing client base. Their collaborative approach and commitment to understanding our business needs makes them vital to our ongoing success.",
    stats: ["+200% Videos Posted", "+340% Video Views", "+120% Affiliates"],
    name: "Molly O'Bryen",
    role: "Senior Director",
    image:
      "https://framerusercontent.com/images/jjDew1lvN2vR8K2ah7l8eoS6p0.jpeg?scale-down-to=512&width=2048&height=2048",
  },
  {
    brand: "Goli Nutrition",
    quote:
      "Reacher powered our 24-hour sprint campaign, reaching over 20,000 creators with nearly 50 messages a minute. The execution was flawless, the momentum unmatched.",
    stats: ["300K+ Videos Posted", "100M+ Video Views", "30,000+ Affiliates"],
    name: "Davy Sanchez",
    role: "Content Strategist",
    image:
      "https://framerusercontent.com/images/0P3F4FlF4dPiZlvHHv6uciDv6ac.jpg?scale-down-to=512&width=2560&height=2560",
  },
  {
    brand: "Social Commerce Club",
    quote:
      "Jerry and Bora are first-class founders. They move fast, listen to the market, and have the ability to build exactly what’s needed—always at a top-tier level. Working with them is a masterclass in execution and adaptability.",
    stats: ["+45% Videos Posted", "+60% Video Views", "+120% Affiliates"],
    name: "Jordan West",
    role: "CEO",
    image:
      "https://framerusercontent.com/images/CKLvUKswOu4xwI2SCDELOFvkPI.jpeg?width=1040&height=1322",
  },
  {
    brand: "Social Commerce Collective",
    quote:
      "Working with the Reacher team has honestly been amazing. They’re super responsive and get back very quickly anytime we have a question. They’re also really proactive about helping when something comes up and are always flexible about jumping on a call if needed. On top of that, the platform has features and tools I haven’t seen anywhere else, which has been a huge plus for us. Overall, great team and great product.",
    stats: [],
    name: "Alex Linebaugh",
    role: "CEO",
    image:
      "https://framerusercontent.com/images/zjp83fCoe8M0BySXxxg9ttl6s6c.jpeg?width=400&height=400",
  },
];

const comparisonRows = [
  ["Automated creator outreach", true, false, false],
  ["Track end to end creator journey with attribution", true, false, false],
  ["Social Intelligence and Creative Agent", true, true, false],
  ["Outreach Agent", true, false, false],
  ["Respond to creators with our AI Chatbot", true, false, false],
  ["Creator community campaigns with your own community and branding", true, false, false],
] as const;

const faq = [
  [
    "How does Reacher work?",
    "Reacher is an automation tool that acts as your AI affiliate manager to automate and scale your affiliate management. We send messages, emails, and target invites to creators on your behalf.",
  ],
  [
    "How is my information stored? Is it safe?",
    "Your personal information is not stored. Reacher is 100% safe, 100% private.",
  ],
  [
    "Will my TikTok account get banned?",
    "No. Reacher is an official TikTok Shop Partner and complies to TikTok Shop Terms and Conditions.",
  ],
  [
    "Can I change my plan after purchasing one?",
    "Of course! Our team is happy to help you upgrade or downgrade your plan at any time. Please contact us for more information on how to change your plan.",
  ],
  [
    "Is my payment information secure?",
    "Reacher processes payments through Stripe. Stripe is a Level 1 Service Provider, which is the highest level of certification for payment processors. Stripe complies with the Payment Card Industry Data Security Standard (PCI-DSS), a set of security standards established by major card brands like Visa, Mastercard, and American Express.",
  ],
] as const;

const countries = [
  ["United States", "https://framerusercontent.com/images/3VuLRJrAZjwcpki3s9D1OBt2IxM.png?width=64&height=64"],
  ["Spain", "https://framerusercontent.com/images/U9RueZznq48gLkg8tlkP1XnVmM.png?width=64&height=64"],
  ["Ireland", "https://framerusercontent.com/images/zVl2qzPUhsA7vqRGIVthWoJf9o.png?width=64&height=64"],
  ["United Kingdom", "https://framerusercontent.com/images/u8oNBoGXdHxLPBIaXXEg7XNcuZk.png?width=64&height=64"],
  ["Mexico", "https://framerusercontent.com/images/qW05kthRsXZtd0Jk7t3Ix2KkxY.png?width=64&height=64"],
  ["Germany", "https://framerusercontent.com/images/yJ9WHmzcO64tz6xPW5HKyt6ia0U.png?width=64&height=64"],
  ["France", "https://framerusercontent.com/images/M9N4WdGRDc4SM4DtiAQXn1sBc.png?width=64&height=64"],
  ["Brazil", "https://framerusercontent.com/images/W2LC5mWPBOHhsclKvyWd36mncrM.png?width=64&height=64"],
  ["Global Sellers", "https://framerusercontent.com/images/2DZf4lArE4ROB1ZKm1E3wROEHiw.png?width=64&height=64"],
] as const;

const footerColumns = [
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
] as const;

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.reacherapp.com/#webpage",
      url: "https://www.reacherapp.com",
      name: "Reacher | Grow TikTok Shop Revenue on Autopilot",
      description:
        "Automate creator discovery, outreach, CRM, and TikTok Shop affiliate campaigns with Reacher.",
      isPartOf: {
        "@id": "https://www.reacherapp.com/#website",
      },
      about: {
        "@id": "https://www.reacherapp.com/#organization",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.reacherapp.com/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.reacherapp.com",
        },
      ],
    },
  ],
};

function CTAButtons({
  light = false,
  secondaryLabel = "View Pricing",
  secondaryHref = "/pricing",
  primaryLabel = "Start your free trial",
}: {
  light?: boolean;
  secondaryLabel?: string;
  secondaryHref?: string;
  primaryLabel?: string;
}) {
  return (
    <div className="mt-9 flex flex-col items-center justify-center gap-5 sm:flex-row">
      <Link
        href={secondaryHref}
        className={`inline-flex h-[62px] w-[312px] items-center justify-center rounded-full px-10 text-[18px] font-semibold shadow-sm ring-1 ring-black/10 sm:w-auto ${
          light ? "bg-white text-slate-950" : "bg-white text-slate-950"
        }`}
        style={{ color: "#0f172a" }}
      >
        {secondaryLabel}
      </Link>
      <Link
        href="https://portal.reacherapp.com/login"
        className="inline-flex h-[62px] w-[312px] items-center justify-center rounded-full bg-[#2465f6] px-10 text-[18px] font-semibold !text-white shadow-lg shadow-blue-600/25 sm:w-auto"
        style={{ color: "#fff" }}
      >
        {primaryLabel}
      </Link>
    </div>
  );
}


function TikTokBadge({ title, subtitle, className = "" }: { title: string; subtitle: string; className?: string }) {
  return (
    <div className={`flex items-center gap-3 rounded-[20px] bg-white px-5 py-4 text-left shadow-[0_16px_35px_rgba(15,23,42,0.12)] ring-1 ring-slate-200 ${className}`}>
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center">
        <span className="absolute left-[9px] top-[7px] text-[31px] font-black leading-none text-[#25f4ee]">♪</span>
        <span className="absolute left-[13px] top-[9px] text-[31px] font-black leading-none text-[#fe2c55]">♪</span>
        <span className="relative text-[31px] font-black leading-none text-black">♪</span>
      </div>
      <div className="leading-tight">
        <p className="text-[17px] font-black text-slate-950">{title}</p>
        <p className="text-[17px] font-semibold text-slate-950">{subtitle}</p>
      </div>
    </div>
  );
}

function AnimatedGlobe() {
  return (
    <div className="reacher-globe absolute -right-24 -bottom-36 h-[360px] w-[360px] rounded-full md:-right-16 md:-bottom-40 md:h-[430px] md:w-[430px]">
      <div className="reacher-globe-dots absolute inset-0 rounded-full" />
      <div className="absolute inset-[18%] rounded-full border border-blue-200/70" />
      <div className="absolute inset-[31%] rounded-full border border-blue-200/70" />
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full bg-[#eef1fb] px-7 py-3 text-sm font-semibold text-[#3559e9]">
      {children}
    </span>
  );
}

function preventWidow(text: string) {
  return text.replace(/\s+(\S+)$/, "\u00A0$1");
}

function SectionHeading({ badge, title, copy }: { badge: string; title: string; copy: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Badge>{badge}</Badge>
      <h2 className="mt-7 text-balance text-4xl font-bold tracking-[-0.045em] text-slate-950 md:text-6xl">
        {preventWidow(title)}
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-8 text-slate-600">{preventWidow(copy)}</p>
    </div>
  );
}

function ImageCard({ item, compact = false }: { item: typeof features[number]; compact?: boolean }) {
  return (
    <article id={item.id} className={`scroll-mt-28 overflow-hidden rounded-[2rem] bg-white text-slate-950 shadow-2xl shadow-blue-950/10 ring-1 ring-black/5 ${compact ? "p-4 md:p-8" : "p-6 md:p-8"}`}>
      <div className={compact ? "grid items-center gap-8 md:grid-cols-[0.7fr_1.3fr]" : ""}>
        <div>
          {compact ? (
            <p className="text-sm font-semibold text-[#2465f6]">{item.saved}</p>
          ) : (
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-6">
              <h3 className="text-[26px] font-bold leading-[1.15] tracking-[-0.035em] md:max-w-[330px] md:text-[36px] md:leading-[1.08]">
                {item.title}
              </h3>
              <p className="inline-flex w-fit shrink-0 rounded-full bg-[#eef3ff] px-3.5 py-2 text-sm font-semibold leading-none text-[#2465f6] md:text-[15px]">
                {item.saved}
              </p>
            </div>
          )}
          {compact && <h3 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">{item.title}</h3>}
          <p className={compact ? "mt-4 text-base leading-7 text-slate-600" : "mt-4 max-w-[95%] text-[17px] leading-[1.5] text-slate-600 md:mt-5 md:text-[19px]"}>{item.copy}</p>
        </div>
        <div className={compact ? "-mx-1 mt-6 overflow-hidden rounded-[1.55rem] bg-[#f3f7ff] ring-1 ring-slate-200 md:mx-0 md:mt-0 md:rounded-3xl" : "mt-8 overflow-hidden rounded-3xl bg-[#f3f7ff] ring-1 ring-slate-200 md:mt-9 md:h-[260px]"}>
          <Image src={item.image} alt="" width={900} height={420} className={compact ? "h-auto w-full" : "h-auto w-full md:origin-top md:scale-[1.18]"} />
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
      <HeroSection logo={logo} ycIcon={ycIcon} heroShots={heroShots} brandLogos={brandLogos} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }} />

      <section className="bg-gradient-to-br from-[#0b55f4] via-[#4b8cff] to-[#bcd7ff] px-6 py-24 text-white md:py-30">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold ring-1 ring-white/30">150+ hours saved per week</span>
            <h2 className="mx-auto mt-7 max-w-4xl text-balance text-4xl font-bold tracking-[-0.045em] md:text-6xl">
              Find & activate the right&nbsp;creators
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-8 text-white/85">
              Describe who you want, let AI find them, and launch outreach to thousands,&nbsp;automatically.
            </p>
            <div className="mx-auto mt-10 flex max-w-md justify-center overflow-hidden rounded-3xl bg-white/15 p-2 ring-1 ring-white/25 backdrop-blur">
              <div className="flex-1 rounded-2xl bg-white px-6 py-5 text-slate-950">
                <strong className="block text-3xl">50+ hrs</strong>
                <span className="text-sm text-slate-500">Time Saved</span>
              </div>
              <div className="flex-1 px-6 py-5">
                <strong className="block text-3xl">3.4M+</strong>
                <span className="text-sm text-white/75">Creators</span>
              </div>
            </div>
          </div>
          <div className="mt-14 grid gap-7 md:grid-cols-2">
            {features.map((item) => (
              <ImageCard key={item.title} item={item} />
            ))}
          </div>
          <CTAButtons light />
        </div>
      </section>

      <section className="bg-[#f7faff] px-6 py-24 md:py-30">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            badge="Turn data into action"
            title="Know what content actually drives sales"
            copy="See what's working on TikTok Shop, track top brands, videos, and creators, then turn insights into briefs."
          />
          <div className="mt-16 space-y-7">
            {intelligence.map((item) => (
              <ImageCard key={item.title} item={item} compact />
            ))}
          </div>
          <CTAButtons />
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#0b55f4] via-[#4b8cff] to-[#bcd7ff] px-6 py-24 text-white md:py-30">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold ring-1 ring-white/30">Everything you need to scale</span>
            <h2 className="mt-7 text-balance text-4xl font-bold tracking-[-0.045em] md:text-6xl">Manage & grow your creator&nbsp;network</h2>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-8 text-white/85">
              Run campaigns, track every creator relationship, and build a community that keeps posting and driving&nbsp;GMV.
            </p>
          </div>
          <div className="mt-16 space-y-7">
            {scale.map((item) => (
              <ImageCard key={item.title} item={item} compact />
            ))}
          </div>
          <CTAButtons light />
        </div>
      </section>

      <section className="bg-[#f7faff] px-6 py-24 text-center">
        <Image src="https://framerusercontent.com/images/jnD00x1iNTy8GlbUSZ3sDa0qFJE.jpeg?width=200&height=200" alt="" width={60} height={60} className="mx-auto rounded-full" />
        <blockquote className="mx-auto mt-7 max-w-4xl text-3xl font-bold leading-tight tracking-[-0.035em] md:text-5xl">
          “The platform has features and tools I haven’t seen anywhere else, which has been a huge plus for us.”
        </blockquote>
        <p className="mt-6 text-sm font-medium text-slate-500">Social Commerce Collective CEO - Alex Linebaugh</p>
      </section>

      <section id="testimonials-new" className="bg-gradient-to-br from-[#0b55f4] via-[#4b8cff] to-[#bed8ff] px-6 py-24 text-white md:py-30">
        <div className="mx-auto max-w-6xl text-center">
          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold ring-1 ring-white/30">Case Studies & Testimonial</span>
          <h2 className="mx-auto mt-7 max-w-3xl text-balance text-4xl font-bold tracking-[-0.045em] md:text-6xl">Loved by leading brands&nbsp;worldwide</h2>
          <p className="mt-5 text-pretty text-lg text-white/80">Real results from real customers who&apos;ve transformed their creator&nbsp;programs</p>
          <CaseStudyCarousel testimonials={testimonials} />
        </div>
      </section>

      <section className="bg-[#f7faff] px-6 py-24 md:py-30">
        <div className="mx-auto max-w-6xl text-center">
          <SectionHeading
            badge="The Last Tool your Brand will Need"
            title="Why Reacher is the Obvious Choice"
            copy="Everything your team needs to replace manual spreadsheets, fragmented tools, and slow creator outreach."
          />
          <div className="mt-14 overflow-hidden rounded-[2rem] bg-white text-left shadow-xl ring-1 ring-slate-200">
            <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] bg-slate-950 px-6 py-5 text-sm font-semibold text-white md:px-9">
              <span>Top Features</span>
              <span className="text-center">Reacher</span>
              <span className="text-center">Other Tools</span>
              <span className="text-center">Manually</span>
            </div>
            {comparisonRows.map(([label, reacher, tools, manual]) => (
              <div key={label} className="grid grid-cols-[1.5fr_1fr_1fr_1fr] items-center border-t border-slate-100 px-6 py-5 text-sm md:px-9">
                <span className="font-medium text-slate-700">{label}</span>
                {[reacher, tools, manual].map((value, index) => (
                  <span key={`${label}-${index}`} className="flex justify-center">
                    {value ? <Check className="text-[#2465f6]" /> : <X className="text-slate-300" />}
                  </span>
                ))}
              </div>
            ))}
          </div>
          <CTAButtons />
        </div>
      </section>

      <section className="bg-white px-6 py-24 md:py-30">
        <div className="mx-auto max-w-[1120px] text-center">
          <Badge>#1 on TikTok Shop App Store</Badge>
          <h2 className="mx-auto mt-7 max-w-[720px] text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-slate-950 md:text-[56px]">#1 on TikTok Shop App Store</h2>

          <div className="mt-12 grid gap-7 text-left">
            <div className="grid gap-7 md:grid-cols-[0.42fr_1fr]">
              <div className="relative min-h-[240px] overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#fff_0%,#fff8f9_56%,#fff0f3_100%)] p-7 ring-1 ring-slate-200">
                <Image src="https://framerusercontent.com/images/unhYvdOItR0nQ16lhap6Lbdhk.webp?scale-down-to=512&width=738&height=200" alt="FastMoss" width={144} height={39} className="h-auto w-36" />
                <h3 className="mt-7 text-[26px] font-medium leading-tight tracking-[-0.03em] text-black">Official Partner</h3>
                <p className="mt-3 max-w-[230px] text-[16px] leading-[1.25] text-black/70">Use code <strong className="font-semibold text-black">RE8008</strong> for <strong className="font-semibold text-black">10%</strong> off your monthly FastMoss subscription!</p>
                <Link href="https://www.fastmoss.com/dashboard?refCode=RE8008" className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-[19px] font-semibold text-slate-950 shadow-sm ring-1 ring-slate-200">Get 10% off</Link>
                <Image src="https://framerusercontent.com/images/2tXEgWOJoqdR06aUFp3ivG7Sk.png?width=500&height=500" alt="" width={210} height={210} className="absolute -bottom-11 right-0 w-[190px] rotate-[15deg] opacity-95" />
              </div>

              <div className="relative min-h-[240px] overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#fff_0%,#f7f8ff_48%,#edf1ff_100%)] p-7 ring-1 ring-slate-200">
                <div className="max-w-[455px]">
                  <h3 className="text-[28px] font-medium leading-tight tracking-[-0.03em] text-black md:text-[32px]">Official Partners With</h3>
                  <p className="mt-3 text-[16px] leading-[1.18] text-black/70">Reacher is an official <strong className="font-semibold text-black">TikTok Shop Partner</strong> and recognized <strong className="font-semibold text-black">TAP Agency</strong>, trusted by top brands and agencies.</p>
                  <Link href="https://seller-us.tiktok.com/appstore/us/7382298357580007211" className="mt-12 inline-flex rounded-full bg-white px-6 py-3 text-[19px] font-semibold text-slate-950 shadow-sm ring-1 ring-slate-200">#1 on TikTok Shop App Store</Link>
                </div>
                <TikTokBadge title="TikTok Shop" subtitle="Partner" className="absolute right-16 top-5 hidden w-[185px] md:flex" />
                <TikTokBadge title="Official TikTok" subtitle="App Developer" className="absolute bottom-5 right-14 hidden w-[205px] md:flex" />
              </div>
            </div>

            <div className="relative min-h-[260px] overflow-hidden rounded-[28px] bg-[linear-gradient(115deg,#fff_0%,#f8fbff_48%,#edf4ff_100%)] p-7 ring-1 ring-slate-200 md:p-8">
              <div className="relative z-10 max-w-[760px]">
                <h3 className="text-[28px] font-medium leading-tight tracking-[-0.03em] text-black md:text-[32px]">Globally Available in 10 Markets</h3>
                <div className="mt-8 flex max-w-[760px] flex-wrap gap-3">
                  {countries.map(([country, flag]) => (
                    <div key={country} className="flex h-[42px] items-center gap-2 rounded-full bg-white px-3.5 shadow-sm ring-1 ring-slate-200">
                      <Image src={flag} alt="" width={28} height={28} className="h-7 w-7 rounded-full" />
                      <span className="whitespace-nowrap text-[17px] font-medium text-black">{country}</span>
                    </div>
                  ))}
                </div>
              </div>
              <AnimatedGlobe />
            </div>
          </div>

          <div className="mt-9 flex justify-center">
            <Link href="https://portal.reacherapp.com/login" className="inline-flex h-[62px] items-center justify-center rounded-full bg-[#2465f6] px-10 text-[18px] font-semibold !text-white shadow-lg shadow-blue-600/25">Start your free trial</Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f7faff] px-6 py-24 md:py-28">
        <div className="mx-auto grid max-w-[1120px] items-center gap-16 md:grid-cols-[1.05fr_1fr]">
          <div className="text-left">
            <Badge>Creator Network</Badge>
            <h2 className="mt-7 max-w-[560px] text-[40px] font-semibold leading-[1.08] tracking-[-0.04em] text-black md:text-[46px]">
              Access the Largest TikTok Shop Creator Database
            </h2>
            <p className="mt-5 max-w-[560px] text-[23px] leading-[1.25] tracking-[-0.01em] text-black/80">
              Connect with top-performing creators who deliver real, measurable results.
            </p>
            <Link
              href="https://portal.reacherapp.com/login"
              className="mt-9 inline-flex h-[62px] items-center justify-center rounded-full bg-[#2465f6] px-10 text-[18px] font-semibold !text-white shadow-lg shadow-blue-600/25"
              style={{ color: "#fff" }}
            >
              Start your free trial
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              ["2.2M+", "creators"],
              ["$10K+", "earners"],
            ].map(([value, label]) => (
              <div key={value} className="flex min-h-[236px] flex-col items-center justify-center rounded-[28px] bg-white p-8 text-center shadow-xl shadow-blue-950/5 ring-1 ring-slate-200 md:min-h-[250px]">
                <strong className="block bg-[linear-gradient(90deg,#4c60f4_0%,#04c8f9_50%,#3559e9_100%)] bg-clip-text text-[64px] font-normal leading-none tracking-[-0.045em] text-transparent md:text-[76px]">
                  {value}
                </strong>
                <span className="mt-4 block text-[28px] font-medium leading-none tracking-[-0.02em] text-black">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 md:py-30">
        <div className="mx-auto max-w-[1060px]">
          <SectionHeading badge="FAQs" title="Got questions? We&apos;ve got answers!" copy="Everything you need to know about Reacher." />
          <div className="mt-14 grid gap-8 text-left md:grid-cols-[1fr_370px]">
            <div className="w-full space-y-3">
              {faq.map(([question, answer]) => (
                <details key={question} className="group w-full box-border overflow-hidden rounded-[18px] bg-[#f7f8fc] text-left">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-[18px] font-medium leading-snug tracking-[-0.015em] text-black outline-none md:px-8 md:text-[20px] [&::-webkit-details-marker]:hidden">
                    <span className="min-w-0 flex-1">{question}</span>
                    <span className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center text-[24px] font-medium leading-none text-[#3559e9]" aria-hidden="true">
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">−</span>
                    </span>
                  </summary>
                  <p className="px-6 pb-6 text-[16px] leading-[1.5] tracking-[-0.005em] text-black/60 md:px-8 md:pb-7 md:text-[18px]">
                    {answer}
                  </p>
                </details>
              ))}
            </div>
            <aside className="relative overflow-hidden rounded-[30px] bg-white p-8 text-center shadow-[0_20px_70px_rgba(15,23,42,0.12)] ring-1 ring-slate-200">
              <div className="absolute inset-0 opacity-[0.42] [background-image:radial-gradient(#cbd5e1_1px,transparent_1.2px)] [background-size:13px_13px]" />
              <div className="relative z-10 flex min-h-[248px] flex-col items-center justify-center py-2">
                <Image src="/reacher-assets/contact/call-avatar.png" alt="Support avatar" width={92} height={92} className="h-[92px] w-[92px] rounded-full object-cover" />
                <span className="-mt-9 ml-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#3559e9] !text-white shadow-lg" style={{ color: "#fff" }}>
                  <Phone size={18} fill="currentColor" />
                </span>
                <h3 className="mt-8 text-[27px] font-semibold leading-tight tracking-[-0.025em] text-black">
                  Have more questions?
                  <br />
                  Book a FREE call.
                </h3>
                <Link href="https://meetings.hubspot.com/yoji2/sales-team-meetings" className="mt-8 rounded-full bg-[#3559e9] px-8 py-4 text-[17px] font-semibold !text-white" style={{ color: "#fff" }}>
                  Book a FREE call
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 pb-24">
        <div className="relative mx-auto min-h-[575px] max-w-[1460px] overflow-hidden rounded-[18px] bg-black px-6 text-center text-white md:min-h-[585px]">
          <div className="reacher-final-cta-stars absolute inset-x-0 top-[70px] h-[356px] opacity-70" />
          <div className="reacher-final-cta-dome absolute left-1/2 top-[85px] h-[775px] w-[1512px] -translate-x-1/2 rounded-[50%]" />
          <div className="reacher-final-cta-dots absolute left-1/2 top-[90px] h-[362px] w-[1350px] -translate-x-1/2 opacity-55" />
          <Rocket className="reacher-final-cta-rocket absolute left-1/2 top-[88px] z-10 h-10 w-10 -translate-x-1/2 text-white/70" strokeWidth={1.25} />

          <div className="relative z-10 mx-auto flex min-h-[575px] max-w-[812px] flex-col items-center pt-[220px] pb-14 md:min-h-[585px] md:pb-0">
            <h2 className="text-[43px] font-semibold leading-[1.15] tracking-[-0.04em] text-white md:text-[50px]">
              Join hundreds of TikTok Shop brands growing with Reacher
            </h2>
            <p className="mx-auto mt-7 max-w-[762px] text-[19px] leading-8 text-white/78">
              Streamline your affiliate marketing, boost creator partnerships, and drive sales on TikTok Shop—all with one powerful platform.
            </p>
            <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="https://meetings.hubspot.com/yoji2/sales-team-meetings"
                className="inline-flex h-[59px] items-center justify-center rounded-full bg-white px-8 text-[20px] font-medium !text-black shadow-sm"
                style={{ color: "#000" }}
              >
                Book a call
              </Link>
              <Link
                href="https://portal.reacherapp.com/login"
                className="inline-flex h-[59px] items-center justify-center rounded-full bg-[#3559e9] px-8 text-[20px] font-medium !text-white shadow-[inset_0_2px_4px_rgba(255,255,255,0.22)]"
                style={{ color: "#fff" }}
              >
                Start your free trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#2547d0] px-6 pt-[52px] text-white">
        <div className="mx-auto grid max-w-[1150px] gap-12 pb-11 md:grid-cols-[2.05fr_0.65fr_0.65fr_0.75fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Image src="/reacher-assets/contact/nav-logo.png" alt="Reacher" width={31} height={31} className="h-[31px] w-[31px] rounded-[8px] object-contain shadow-[0_1px_3px_rgba(16,24,40,0.18)]" />
              <span className="text-[18px] font-semibold tracking-[-0.02em] text-white">Reacher</span>
            </div>
            <p className="mt-7 max-w-[250px] text-[14px] leading-6 text-[#c0d5ff]">Automate your creator outreach and boost engagement</p>
            <Link href="https://seller-us.tiktok.com/appstore/us/7382298357580007211" className="mt-7 block w-[142px]">
              <Image src={logo} alt="TikTok Shop Partner" width={168} height={47} className="h-auto w-[142px] brightness-0 invert" />
            </Link>
          </div>
          {footerColumns.map((column) => (
            <FooterColumn key={column.title} title={column.title} links={column.links} />
          ))}
        </div>
        <div className="mx-auto flex max-w-[1150px] flex-col gap-5 border-t border-white/10 py-9 text-[14px] text-[#c0d5ff] md:flex-row md:items-center md:justify-between">
          <span>© 2026 Reacher. All rights reserved.</span>
          <SocialIconLinks />
        </div>
      </footer>
    </main>
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
