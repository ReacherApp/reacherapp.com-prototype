import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, FileText, Mail, Phone } from "lucide-react";
import { PageBadge, ReacherFooter, ReacherHeader } from "@/components/ReacherChrome";
import { localizedAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Us | Reacher",
  description:
    "Book an intro call with Reacher or send the team a message. We’ll get back to you within 12 hours.",
  alternates: localizedAlternates("/contact"),
};

const faq = [
  {
    question: "How does Reacher work?",
    answer:
      "Reacher connects to your TikTok Shop workflow, helps you discover relevant creators, automates compliant outreach and follow-ups, tracks sample/product activity, and gives your team a CRM-style view of creator relationships and GMV impact.",
  },
  {
    question: "How is my information stored? Is it safe?",
    answer:
      "Yes. Reacher stores account and campaign data securely, uses encrypted connections, and only accesses the platform data needed to power the features you enable. Connected accounts can be disconnected and deletion can be requested at any time.",
  },
  {
    question: "Will my TikTok account get banned?",
    answer:
      "Reacher is designed around safe, human-like outreach limits and TikTok Shop workflows. It includes guardrails for message quality, placeholders, and banned terms, but every brand should still use approved messaging and avoid spammy campaigns.",
  },
  {
    question: "Can I change my plan after purchasing one?",
    answer:
      "Yes. You can upgrade as your creator program grows, and larger or more complex teams can move to a custom Enterprise setup. If you are unsure which plan fits, book a call and the team will help you choose the right tier.",
  },
  {
    question: "Is my payment information secure?",
    answer:
      "Yes. Payment processing is handled through secure third-party billing infrastructure. Reacher does not expose your card details in the product, and subscription changes are managed through the billing flow or support team.",
  },
];

function HelpCard({
  icon,
  title,
  copy,
  button,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  copy: string;
  button: string;
  href: string;
}) {
  return (
    <article className="w-full min-w-0 rounded-[24px] bg-[#eef4ff] p-7 text-left shadow-[0_18px_50px_rgba(55,91,233,0.1)] ring-1 ring-[#d8e3fb] md:p-8">
      <div className="flex h-[47px] w-[47px] items-center justify-center rounded-[14px] bg-white text-[#3559e9] shadow-sm ring-1 ring-slate-200">
        {icon}
      </div>
      <h2 className="mt-9 text-[23px] font-semibold leading-tight tracking-[-0.02em] text-black md:whitespace-nowrap md:text-[24px]">
        {title}
      </h2>
      <p className="mt-4 max-w-[310px] text-[17px] leading-[1.55] text-black/62">{copy}</p>
      <Link
        href={href}
        className="mt-8 inline-flex h-[52px] w-full min-w-0 items-center justify-center rounded-full bg-white px-6 text-center text-[16px] font-semibold text-black shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50"
      >
        {button}
      </Link>
    </article>
  );
}

function ContactForm() {
  return (
    <section className="w-full min-w-0 rounded-[24px] bg-[#eef4ff] p-7 text-left shadow-[0_18px_50px_rgba(55,91,233,0.1)] ring-1 ring-[#d8e3fb] md:p-8">
      <div className="flex h-[47px] w-[47px] items-center justify-center rounded-[14px] bg-white text-[#3559e9] shadow-sm ring-1 ring-slate-200">
        <Mail size={24} strokeWidth={1.9} />
      </div>
      <h2 className="mt-9 text-[25px] font-semibold leading-tight tracking-[-0.02em] text-black md:text-[29px]">
        Tell us how we can help
      </h2>
      <form className="mt-7 space-y-4">
        <input
          aria-label="Name"
          placeholder="Name"
          className="h-[55px] w-full rounded-[14px] border border-slate-200 bg-white px-5 text-[16px] text-black outline-none transition placeholder:text-slate-400 focus:border-[#3559e9]"
        />
        <input
          aria-label="Email"
          placeholder="Email"
          type="email"
          className="h-[55px] w-full rounded-[14px] border border-slate-200 bg-white px-5 text-[16px] text-black outline-none transition placeholder:text-slate-400 focus:border-[#3559e9]"
        />
        <textarea
          aria-label="Message"
          placeholder="Message"
          rows={7}
          className="min-h-[152px] w-full resize-y rounded-[14px] border border-slate-200 bg-white px-5 py-4 text-[16px] text-black outline-none transition placeholder:text-slate-400 focus:border-[#3559e9]"
        />
        <button
          type="button"
          className="flex h-[54px] w-full items-center justify-center rounded-[14px] bg-[#3559e9] text-[17px] font-semibold text-white shadow-[0_12px_28px_rgba(53,89,233,0.24),inset_0_2px_4px_rgba(255,255,255,0.22)] transition hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="bg-[#f1f5ff] px-6 py-20 md:py-[92px]">
      <div className="mx-auto max-w-[1180px] text-center">
        <PageBadge>FAQs</PageBadge>
        <h2 className="mx-auto mt-7 max-w-[720px] text-[42px] font-semibold leading-[1.07] tracking-[-0.045em] text-black md:text-[60px]">
          Got questions?
          <br />
          We&apos;ve got answers!
        </h2>
        <p className="mt-6 text-[18px] leading-8 text-black/55 md:text-[20px]">
          Everything you need to know about Reacher.
        </p>

        <div className="mt-12 grid gap-8 text-left md:grid-cols-[1fr_390px] md:items-start">
          <div className="space-y-4">
            {faq.map(({ question, answer }) => (
              <details key={question} className="group rounded-[18px] bg-[#f7f8fc] ring-1 ring-slate-100">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 text-[19px] font-semibold leading-tight tracking-[-0.015em] text-black outline-none md:px-7 md:text-[21px] [&::-webkit-details-marker]:hidden">
                  <span className="min-w-0 flex-1">{question}</span>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center text-[24px] font-medium leading-none text-[#3559e9]" aria-hidden="true">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">−</span>
                  </span>
                </summary>
                <p className="max-w-[760px] px-6 pb-5 text-[15.5px] leading-7 text-black/58 md:px-7 md:pb-6 md:text-[16px]">{answer}</p>
              </details>
            ))}
          </div>

          <aside className="relative overflow-hidden rounded-[30px] bg-white p-8 text-center shadow-[0_14px_42px_rgba(15,23,42,0.08)] ring-2 ring-slate-200">
            <div className="absolute inset-0 opacity-[0.45] [background-image:radial-gradient(#cbd5e1_1px,transparent_1.2px)] [background-size:13px_13px]" />
            <div className="relative z-10 flex flex-col items-center py-2">
              <div className="relative">
                <Image src="/reacher-assets/contact/call-avatar.png" alt="Support avatar" width={104} height={104} className="h-[104px] w-[104px] rounded-full object-cover" />
                <span className="absolute -right-2 bottom-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#3559e9] !text-white shadow-lg" style={{ color: "#fff" }}>
                  <Phone size={19} fill="currentColor" strokeWidth={1.8} />
                </span>
              </div>
              <h3 className="mt-9 text-[27px] font-semibold leading-tight tracking-[-0.025em] text-black">
                Have more questions?
                <br />
                Book a FREE call.
              </h3>
              <Link
                href="https://meetings.hubspot.com/yoji2/sales-team-meetings"
                className="mt-8 inline-flex h-[52px] w-full items-center justify-center rounded-full bg-[#3559e9] px-8 text-[17px] font-semibold !text-white shadow-[0_12px_28px_rgba(53,89,233,0.24),inset_0_2px_4px_rgba(255,255,255,0.22)]"
                style={{ color: "#fff" }}
              >
                Book a FREE call
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function NewsletterCta() {
  return (
    <section className="bg-[#f1f5ff] px-6 py-24 text-center md:py-[112px]">
      <div className="mx-auto max-w-[920px]">
        <PageBadge>Subscribe to our newsletter</PageBadge>
        <h2 className="mt-7 text-[42px] font-semibold leading-[1.08] tracking-[-0.045em] text-black md:text-[60px]">
          Start using Reacher today.
        </h2>
        <p className="mx-auto mt-6 max-w-[690px] text-[18px] leading-8 text-black/58 md:text-[20px]">
          Manage influencer marketing campaigns, see shop analytics, send samples, and start making money today!
        </p>
        <form className="mx-auto mt-10 flex max-w-[820px] flex-col gap-4 sm:flex-row">
          <input
            aria-label="Email address"
            type="email"
            placeholder="name@email.com"
            className="h-[60px] min-w-0 flex-1 rounded-[14px] border border-slate-200 bg-white px-5 text-[17px] text-black shadow-sm outline-none placeholder:text-slate-400 focus:border-[#3559e9]"
          />
          <button type="button" className="h-[60px] rounded-[14px] bg-[#3559e9] px-7 text-[17px] font-semibold text-white shadow-[0_12px_28px_rgba(53,89,233,0.24),inset_0_2px_4px_rgba(255,255,255,0.22)]">
            Sign up for Reacher Newsletter
          </button>
        </form>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f1f5ff] text-black">
      <ReacherHeader active="Contact" />

      <section className="relative overflow-hidden px-6 pb-20 pt-[126px] text-center md:pb-[96px] md:pt-[138px]">
        <div className="absolute inset-x-0 top-0 h-[820px] bg-[radial-gradient(circle_at_44%_7%,rgba(69,94,255,0.34),rgba(151,168,255,0.2)_36%,rgba(247,249,255,0)_72%)]" />
        <div className="relative z-10 mx-auto max-w-[1040px]">
          <PageBadge>Contact Us</PageBadge>
          <h1 className="mx-auto mt-7 max-w-[900px] text-[45px] font-semibold leading-[1.08] tracking-[-0.05em] text-[#05070d] md:text-[66px]">
            We’d love to hear from you
          </h1>
          <p className="mx-auto mt-7 max-w-[1000px] text-[18px] leading-[1.65] text-[#343947]/84 md:text-[21px]">
            Not sure if Reacher is for you? Book an intro call today or leave us a message below. We’ll get back to you within 12 hours - make sure to include as much detail as you can.
          </p>

          <div className="mx-auto mt-12 grid w-full min-w-0 max-w-[1010px] gap-7 md:grid-cols-[0.88fr_1.12fr]">
            <div className="grid min-w-0 gap-7">
              <HelpCard
                icon={<CalendarDays size={24} strokeWidth={1.9} />}
                title="Prefer some face-to-face?"
                copy="Book an introductory call with our team to explore what Reacher has to offer."
                button="Schedule an intro call"
                href="https://meetings.hubspot.com/yoji2/sales-team-meetings"
              />
              <HelpCard
                icon={<FileText size={24} strokeWidth={1.9} />}
                title="Not sure how to use Reacher?"
                copy="Check out our How it Works page to access our Get Started Guide."
                button="See our getting started guide"
                href="https://drive.google.com/file/d/1PmA7VogLuqz78Iz_c_3JNHVkNUEYKZHb/view?usp=sharing"
              />
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <FaqSection />
      <NewsletterCta />
      <ReacherFooter />
    </main>
  );
}
