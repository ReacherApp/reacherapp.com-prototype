import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { customers } from "@/lib/customers";
import CaseStudySlides from "@/components/CaseStudySlides";

export function generateStaticParams() {
  return customers.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const customer = customers.find((c) => c.slug === slug);
  if (!customer) return {};
  return { title: `${customer.brand} — Slides | Reacher`, description: customer.story.subtitle };
}

export default async function SlidesPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const customer = customers.find((c) => c.slug === slug);
  if (!customer) notFound();
  return <CaseStudySlides customer={customer} />;
}
