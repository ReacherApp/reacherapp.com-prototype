import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import { ReacherFooter, ReacherHeader } from "@/components/ReacherChrome";

export function PtShell({ active = "", children }: { active?: string; children: React.ReactNode }) {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-black">
      <ReacherHeader active={active} locale="pt" />
      {children}
      <ReacherFooter locale="pt" />
    </main>
  );
}

export function PtBadge({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex rounded-full bg-[#eef1fb] px-7 py-3 text-sm font-semibold text-[#3559e9]">{children}</span>;
}

export function PtHero({ badge, title, copy, children }: { badge: string; title: React.ReactNode; copy: string; children?: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-[#eef4ff] px-6 pb-[70px] pt-[132px] text-center">
      <div className="absolute left-1/2 top-[-170px] h-[560px] w-[90%] max-w-[1100px] -translate-x-1/2 rounded-[100%] bg-[#335CFF]/14 blur-[110px]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(219,229,255,0.72)_0%,rgba(239,244,255,0.9)_52%,#ffffff_100%)]" />
      <div className="relative z-10 mx-auto max-w-[980px]">
        <PtBadge>{badge}</PtBadge>
        <h1 className="mx-auto mt-7 max-w-[900px] text-[50px] font-semibold leading-[1.06] tracking-[-0.055em] text-[#05070d] md:text-[72px]">{title}</h1>
        <p className="mx-auto mt-6 max-w-[760px] text-[19px] leading-8 text-black/60">{copy}</p>
        {children}
      </div>
    </section>
  );
}

export function PtPrimaryCta({ href = "https://portal.reacherapp.com/login", children = "Começar teste grátis" }: { href?: string; children?: React.ReactNode }) {
  return <Link href={href} className="inline-flex h-[54px] items-center justify-center rounded-full bg-[#3559e9] px-8 text-[17px] font-semibold !text-white shadow-[0_10px_25px_rgba(53,89,233,0.22),inset_0_2px_4px_rgba(255,255,255,0.22)] transition hover:bg-blue-700">{children}</Link>;
}

export function PtFaq({ items }: { items: readonly { question: string; answer: string }[] }) {
  return (
    <section className="bg-white px-6 py-[88px]">
      <div className="mx-auto max-w-[940px] text-center">
        <PtBadge>Perguntas frequentes</PtBadge>
        <h2 className="mt-7 text-[42px] font-semibold leading-[1.08] tracking-[-0.045em] md:text-[60px]">Dúvidas? Nós respondemos.</h2>
        <div className="mt-12 divide-y divide-slate-200 text-left">
          {items.map(({ question, answer }) => (
            <details key={question} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-[19px] font-semibold text-[#111827] [&::-webkit-details-marker]:hidden">
                <span>{question}</span><Plus className="shrink-0 text-[#3559e9] transition group-open:rotate-45" />
              </summary>
              <p className="mt-3 max-w-[780px] text-[15.5px] leading-7 text-black/58">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PtNewsletter() {
  return (
    <section className="bg-[#f8f9fc] px-6 py-[96px] text-center">
      <PtBadge>Receba novidades</PtBadge>
      <h2 className="mt-7 text-[42px] font-semibold tracking-[-0.045em] md:text-[60px]">Comece a usar o Reacher hoje.</h2>
      <p className="mx-auto mt-5 max-w-[700px] text-[19px] leading-8 text-black/58">Gerencie campanhas de afiliados, acompanhe analytics, envie amostras e gere GMV com mais velocidade.</p>
      <div className="mx-auto mt-10 flex max-w-[850px] flex-col gap-4 sm:flex-row">
        <input placeholder="nome@email.com" className="h-[60px] flex-1 rounded-[14px] border border-slate-200 bg-white px-5 text-[17px]" />
        <button className="h-[60px] rounded-[14px] bg-[#3559e9] px-7 text-[17px] font-semibold text-white">Assinar newsletter</button>
      </div>
    </section>
  );
}

export function AvatarCta({ title = "Ainda tem perguntas?", copy = "Fale com o time do Reacher e veja qual fluxo combina com sua marca." }: { title?: string; copy?: string }) {
  return (
    <aside className="relative overflow-hidden rounded-[30px] bg-white p-8 text-center shadow-[0_20px_70px_rgba(15,23,42,0.12)] ring-1 ring-slate-200">
      <Image src="/reacher-assets/contact/call-avatar.png" alt="Especialista Reacher" width={92} height={92} className="mx-auto h-[92px] w-[92px] rounded-full object-cover" />
      <h3 className="mt-8 text-[27px] font-semibold leading-tight tracking-[-0.025em]">{title}</h3>
      <p className="mt-3 text-[15.5px] leading-7 text-black/58">{copy}</p>
      <PtPrimaryCta href="https://meetings.hubspot.com/sohun-sanka/meeting-with-sohun?uuid=dc6cf176-e1fc-4cef-b2d9-7df812c01f39">Agendar chamada grátis</PtPrimaryCta>
    </aside>
  );
}
