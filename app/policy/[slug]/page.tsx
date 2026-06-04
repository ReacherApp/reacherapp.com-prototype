import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ReacherFooter, ReacherHeader } from "@/components/ReacherChrome";
import { localizedAlternates } from "@/lib/seo";

const policies = {
  "privacy-policy": {
    title: "Privacy Policy",
    description: "Reacher privacy policy.",
  },
  "terms-of-service-agreement": {
    title: "Terms of Service Agreement",
    description: "Reacher terms of service agreement.",
  },
} as const;

type PolicySlug = keyof typeof policies;

export function generateStaticParams() {
  return Object.keys(policies).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const policy = policies[slug as PolicySlug];
  if (!policy) return {};
  return {
    title: `${policy.title} | Reacher`,
    description: policy.description,
    alternates: localizedAlternates(`/policy/${slug}`),
  };
}

function readPolicy(slug: PolicySlug) {
  return fs.readFileSync(path.join(process.cwd(), "content", "reacher-policies", `${slug}.md`), "utf8");
}

function renderInline(text: string) {
  const nodes: React.ReactNode[] = [];
  const regex = /(\*\*([^*]+)\*\*)|\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  for (const match of text.matchAll(regex)) {
    if (match.index! > last) nodes.push(text.slice(last, match.index));
    if (match[2]) nodes.push(<strong key={match.index} className="font-semibold text-[#111827]">{match[2]}</strong>);
    if (match[3] && match[4]) nodes.push(<Link key={match.index} href={match[4]} className="text-[#3559e9] underline decoration-[#3559e9]/25 underline-offset-2">{match[3]}</Link>);
    last = match.index! + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

function MarkdownPolicy({ markdown }: { markdown: string }) {
  const lines = markdown.split("\n").slice(5);
  const blocks: React.ReactNode[] = [];
  let list: string[] = [];

  const flushList = () => {
    if (!list.length) return;
    blocks.push(
      <ul key={`ul-${blocks.length}`} className="my-4 list-disc space-y-2.5 pl-6 text-[15px] leading-7 text-black/68">
        {list.map((item, index) => <li key={index}>{renderInline(item)}</li>)}
      </ul>
    );
    list = [];
  };

  lines.forEach((raw, index) => {
    const line = raw.trim();
    if (!line) { flushList(); return; }
    if (line.startsWith("- ")) { list.push(line.slice(2)); return; }
    flushList();

    if (line.startsWith("# ")) {
      return;
    } else if (line.startsWith("###### ")) {
      blocks.push(<h4 key={index} className="mt-8 text-[18px] font-semibold tracking-[-0.02em] text-[#111827]">{renderInline(line.slice(7))}</h4>);
    } else if (line.startsWith("### ")) {
      blocks.push(<h2 key={index} className="mt-10 text-[24px] font-semibold leading-tight tracking-[-0.035em] text-[#111827]">{renderInline(line.slice(4).replace(/\\\./g, "."))}</h2>);
    } else if (line.startsWith("## ")) {
      blocks.push(<h2 key={index} className="mt-8 text-[22px] font-semibold tracking-[-0.03em] text-[#111827]">{renderInline(line.slice(3))}</h2>);
    } else if (/^\*\*.+\*\*$/.test(line)) {
      blocks.push(<h3 key={index} className="mt-8 text-[19px] font-semibold tracking-[-0.025em] text-[#111827]">{renderInline(line)}</h3>);
    } else {
      blocks.push(<p key={index} className="my-4 text-[15px] leading-7 text-black/68">{renderInline(line.replace(/_\*\*/g, "**").replace(/\*\*_/g, "**"))}</p>);
    }
  });
  flushList();
  return <>{blocks}</>;
}

export default async function PolicyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const policy = policies[slug as PolicySlug];
  if (!policy) notFound();
  const markdown = readPolicy(slug as PolicySlug);
  const lines = markdown.split("\n");
  const title = lines[0].replace(/^#\s*/, "");
  const updated = lines[4] || "April 30, 2026";

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8faff] text-black">
      <ReacherHeader active="" />
      <section className="relative px-6 pb-[90px] pt-[134px]">
        <div className="absolute inset-x-0 top-0 h-[620px] bg-[radial-gradient(circle_at_50%_0%,rgba(72,99,255,0.22),rgba(168,181,255,0.12)_34%,rgba(248,250,255,0)_72%)]" />
        <article className="relative z-10 mx-auto max-w-[860px] px-1 md:px-0">
          <header className="mb-12 text-center">
            <h1 className="text-[46px] font-semibold leading-[1.07] tracking-[-0.055em] text-[#111827] md:text-[66px]">{title}</h1>
            <div className="mt-8 text-[18px] font-semibold text-[#111827]">Last Updated:</div>
            <div className="mt-3 text-[16px] leading-7 text-black/68">{updated}</div>
          </header>
          <div className="mx-auto max-w-[800px]">
            <MarkdownPolicy markdown={markdown} />
          </div>
        </article>
      </section>
      <ReacherFooter />
    </main>
  );
}
