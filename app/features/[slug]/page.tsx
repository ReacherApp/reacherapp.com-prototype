import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { ReacherFooter, ReacherHeader } from "@/components/ReacherChrome";
import { localizedAlternates } from "@/lib/seo";
import { features, featureSteps, getFeature, groupLabelForSlug, relatedFeatures } from "@/lib/features";

type Params = { params: Promise<{ slug: string }> };

/** spread the feature's capabilities across its steps, in order */
function distribute<T>(arr: T[], n: number): T[][] {
  const out: T[][] = Array.from({ length: n }, () => []);
  const base = Math.floor(arr.length / n);
  const rem = arr.length % n;
  let idx = 0;
  for (let s = 0; s < n; s++) {
    const count = base + (s < rem ? 1 : 0);
    for (let k = 0; k < count; k++) out[s].push(arr[idx++]);
  }
  return out;
}

export function generateStaticParams() {
  return features.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const feature = getFeature(slug);
  if (!feature) return {};
  return {
    title: `${feature.positioning} | Reacher`,
    description: feature.oneLiner,
    alternates: localizedAlternates(`/features/${feature.slug}`),
  };
}

export default async function FeaturePage({ params }: Params) {
  const { slug } = await params;
  const feature = getFeature(slug);
  if (!feature) notFound();

  const Icon = feature.Icon;
  const groupLabel = groupLabelForSlug(slug) ?? "Product";
  const related = relatedFeatures(slug);
  const steps = featureSteps[slug];
  const autoPoints = steps ? distribute(feature.capabilities, steps.length) : [];
  const stepPoints = steps ? steps.map((s, i) => s.points ?? autoPoints[i] ?? []) : [];
  const faqs = [
    { q: `What is ${feature.name}?`, a: feature.value },
    { q: `Who is ${feature.name} for?`, a: feature.whoFor },
    {
      q: "Is Reacher safe for my TikTok Shop?",
      a: "Yes. Reacher is an official TikTok Shop Partner and complies with TikTok Shop's terms — all outreach is auto-throttled to platform limits.",
    },
    {
      q: "How quickly can I get started?",
      a: "Most teams are up and running the same day. Book a demo or start a 14-day free trial to see it on your own shop.",
    },
  ];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main className="min-h-screen overflow-hidden bg-white text-black">
      <ReacherHeader active="" />

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#d8e6ff_0%,#e9f1ff_46%,#ffffff_92%)] px-6 pb-20 pt-[150px] text-center">
        <div className="mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#cdddff] bg-white/70 px-4 py-1.5 text-[13px] font-semibold text-[#3559e9]">
            <Icon size={15} strokeWidth={2.2} /> {groupLabel}
          </span>
          <h1 className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-slate-950 md:text-[46px]">
            {feature.positioning}
          </h1>
          <p className="mx-auto mt-5 max-w-[92vw] text-pretty text-lg leading-8 text-slate-600 md:max-w-none md:whitespace-nowrap">{feature.oneLiner}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="https://portal.reacherapp.com/login"
              className="inline-flex h-12 items-center justify-center rounded-full border border-[#d4d9e5] bg-white px-7 text-[15px] font-semibold !text-slate-900 transition hover:bg-slate-50"
            >
              Get 14 day free trial
            </Link>
            <Link
              href="https://meetings.hubspot.com/yoji2/sales-team-meetings"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#3559e9] px-7 text-[15px] font-semibold !text-white shadow-[0_12px_28px_rgba(53,89,233,0.24)] transition hover:bg-blue-600"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 pb-10">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-[24px] border border-slate-200/70 bg-gradient-to-b from-[#eef5ff] to-white p-2.5 shadow-[0_34px_90px_-26px_rgba(16,24,40,0.28)] ring-1 ring-black/[0.03] md:p-3">
            {feature.image ? (
              <Image
                src={feature.image}
                alt={`${feature.name} in Reacher`}
                width={2160}
                height={1200}
                className="h-auto w-full rounded-[16px]"
                priority
              />
            ) : (
              <div className="flex aspect-[16/9] items-center justify-center rounded-[16px] bg-[radial-gradient(120%_120%_at_50%_0%,#dbe7ff_0%,#eef4ff_45%,#ffffff_100%)]">
                <div className="flex flex-col items-center gap-3 text-[#9bb0e6]">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/70 ring-1 ring-[#d7e2fb]">
                    <Icon size={26} strokeWidth={1.6} />
                  </span>
                  <span className="text-sm font-medium tracking-wide">Product preview</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {steps ? (
        <section className="bg-[#f7faff] px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <p className="text-center text-[13px] font-semibold uppercase tracking-[0.12em] text-[#3559e9]">How it works</p>
            <h2 className="mx-auto mt-3 max-w-2xl text-balance text-center text-3xl font-bold tracking-[-0.03em] text-slate-950 md:text-4xl">
              From setup to results in 3 steps
            </h2>
            <div className="mt-16 flex flex-col gap-16 md:mt-20 md:gap-24">
              {steps.map((step, i) => (
                <div
                  key={step.title}
                  className={`flex flex-col items-center gap-8 md:flex-row md:gap-14 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="w-full md:w-[42%]">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#3559e9]">Step {i + 1}</span>
                    <h3 className="mt-4 text-2xl font-bold tracking-[-0.02em] text-slate-950 md:text-[28px]">{step.title}</h3>
                    <p className="mt-4 text-[16px] leading-7 text-slate-600">
                      {[step.desc, ...(stepPoints[i] ?? []).map((p) => (/[.!?]$/.test(p) ? p : `${p}.`))].join(" ")}
                    </p>
                  </div>
                  <div className="w-full md:w-[58%]">
                    <div className="overflow-hidden rounded-[20px] border border-slate-200/70 bg-gradient-to-b from-[#eef5ff] to-white p-2 shadow-[0_24px_60px_-22px_rgba(16,24,40,0.22)] ring-1 ring-black/[0.03]">
                      {step.image ? (
                        <Image src={step.image} alt={`${step.title} — ${feature.name}`} width={1600} height={1000} className="h-auto w-full rounded-[14px]" />
                      ) : (
                        <div className="flex aspect-[16/10] items-center justify-center rounded-[14px] bg-[radial-gradient(120%_120%_at_50%_0%,#dbe7ff_0%,#eef4ff_45%,#ffffff_100%)]">
                          <div className="flex flex-col items-center gap-2 text-[#9bb0e6]">
                            <Icon size={26} strokeWidth={1.6} />
                            <span className="text-xs font-medium tracking-wide">Step {i + 1} preview</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-balance text-2xl font-medium leading-9 tracking-[-0.01em] text-slate-800 md:text-[26px] md:leading-10">
            {feature.value}
          </p>
          <p className="mt-9 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#3559e9]">Who it&apos;s for</p>
          <p className="mx-auto mt-2 max-w-xl text-lg text-slate-600">{feature.whoFor}</p>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-bold tracking-[-0.02em] text-slate-950">More in {groupLabel}</h2>
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => {
                const RIcon = r.Icon;
                return (
                  <Link
                    key={r.slug}
                    href={`/features/${r.slug}`}
                    className="group rounded-2xl border border-slate-100 bg-white p-6 ring-1 ring-black/[0.02] transition hover:border-[#cdddff] hover:shadow-[0_14px_34px_rgba(16,24,40,0.08)]"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#eef3ff] text-[#3559e9] ring-1 ring-[#dbe5ff]">
                      <RIcon size={19} strokeWidth={2} />
                    </span>
                    <h3 className="mt-4 text-[17px] font-semibold text-slate-950">{r.name}</h3>
                    <p className="mt-1.5 text-[14px] leading-6 text-slate-500">{r.navBlurb}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-[#3559e9]">
                      Learn more <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-[#f7faff] px-6 py-20 md:py-24">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold tracking-[-0.03em] text-slate-950 md:text-4xl">Everything you need to know</h2>
          <div className="mt-10 divide-y divide-slate-200/70 overflow-hidden rounded-2xl border border-slate-200/70 bg-white ring-1 ring-black/[0.02]">
            {faqs.map((f) => (
              <details key={f.q} className="group px-6 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-semibold text-slate-950 [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <ChevronDown size={18} className="shrink-0 text-slate-400 transition group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-[15px] leading-7 text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0b55f4] via-[#3559e9] to-[#335CFF] px-6 py-16 text-center text-white">
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-bold tracking-[-0.03em] md:text-5xl">
            Grow TikTok Shop revenue on autopilot
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-white/85">
            Join 1000+ brands using Reacher to manage every creator relationship.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="https://portal.reacherapp.com/login"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/40 px-7 text-[15px] font-semibold !text-white transition hover:bg-white/10"
            >
              Get 14 day free trial
            </Link>
            <Link
              href="https://meetings.hubspot.com/yoji2/sales-team-meetings"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-[15px] font-semibold !text-[#1d2b4f] shadow-[0_2px_10px_rgba(0,0,0,0.18)] transition hover:bg-white/90"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </section>

      <ReacherFooter />
    </main>
  );
}
