import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, FileText, Mail, Phone } from "lucide-react";
import { localizedAlternates } from "@/lib/seo";
import { PtFaq, PtHero, PtPrimaryCta, PtShell } from "../_components";

export const metadata: Metadata = {
  title: "Contato | Reacher",
  description: "Agende uma chamada com o Reacher ou envie uma mensagem. O time retorna em até 12 horas.",
  alternates: localizedAlternates("/contact", "pt"),
};

const faq = [
  { question: "Como o Reacher funciona?", answer: "O Reacher conecta ao seu fluxo de TikTok Shop, ajuda a descobrir criadores relevantes, automatiza outreach e follow-ups, acompanha amostras e entrega uma visão de CRM sobre relacionamento e GMV." },
  { question: "Minhas informações ficam seguras?", answer: "Sim. Dados de conta e campanha são protegidos, acessados apenas para operar os recursos habilitados e podem ser desconectados quando necessário." },
  { question: "Posso falar com alguém antes de contratar?", answer: "Sim. Agende uma chamada para avaliarmos seu volume, sua operação de afiliados e o plano mais adequado." },
  { question: "O Reacher atende marcas fora dos EUA?", answer: "Sim. O produto acompanha mercados do TikTok Shop e pode apoiar marcas globais ou sellers que vendem em múltiplos países." },
] as const;

function HelpCard({ icon, title, copy, button, href }: { icon: React.ReactNode; title: string; copy: string; button: string; href: string }) {
  return (
    <article className="rounded-[24px] bg-[#eef4ff] p-7 text-left shadow-[0_18px_50px_rgba(55,91,233,0.1)] ring-1 ring-[#d8e3fb] md:p-8">
      <div className="flex h-[47px] w-[47px] items-center justify-center rounded-[14px] bg-white text-[#3559e9] shadow-sm ring-1 ring-slate-200">{icon}</div>
      <h2 className="mt-9 text-[23px] font-semibold leading-tight tracking-[-0.02em] text-black md:text-[24px]">{title}</h2>
      <p className="mt-4 max-w-[320px] text-[17px] leading-[1.55] text-black/62">{copy}</p>
      <Link href={href} className="mt-8 inline-flex h-[52px] w-full items-center justify-center rounded-full bg-white px-6 text-[16px] font-semibold text-black shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50">{button}</Link>
    </article>
  );
}

function ContactForm() {
  return (
    <section className="rounded-[24px] bg-[#eef4ff] p-7 text-left shadow-[0_18px_50px_rgba(55,91,233,0.1)] ring-1 ring-[#d8e3fb] md:p-8">
      <div className="flex h-[47px] w-[47px] items-center justify-center rounded-[14px] bg-white text-[#3559e9] shadow-sm ring-1 ring-slate-200"><Mail size={24} strokeWidth={1.9} /></div>
      <h2 className="mt-9 text-[25px] font-semibold leading-tight tracking-[-0.02em] text-black md:text-[29px]">Conte como podemos ajudar</h2>
      <p className="mt-4 text-[17px] leading-[1.55] text-black/62">Envie alguns detalhes e vamos indicar o melhor próximo passo.</p>
      <form className="mt-7 grid gap-4">
        {["Nome", "E-mail comercial", "Empresa", "URL do TikTok Shop"].map((label) => <input key={label} placeholder={label} className="h-[52px] rounded-[14px] border border-slate-200 bg-white px-4 text-[15px] outline-none focus:border-[#3559e9]" />)}
        <textarea placeholder="O que você quer melhorar no seu programa de criadores?" className="min-h-[130px] rounded-[14px] border border-slate-200 bg-white px-4 py-4 text-[15px] outline-none focus:border-[#3559e9]" />
        <button type="button" className="h-[54px] rounded-full bg-[#3559e9] text-[17px] font-semibold text-white shadow-[0_10px_25px_rgba(53,89,233,0.22)]">Enviar mensagem</button>
      </form>
    </section>
  );
}

export default function ContactPtPage() {
  return (
    <PtShell active="Contato">
      <PtHero badge="Contato" title="Fale com o time do Reacher" copy="Agende uma chamada, tire dúvidas sobre o produto ou conte o que precisa para escalar criadores no TikTok Shop.">
        <div className="mt-8"><PtPrimaryCta href="https://meetings.hubspot.com/reacher">Agendar uma chamada</PtPrimaryCta></div>
      </PtHero>
      <section className="bg-white px-6 py-[72px]">
        <div className="mx-auto grid max-w-[1160px] gap-7 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-7">
            <HelpCard icon={<CalendarDays size={24} />} title="Agendar uma intro" copy="Veja como o Reacher pode encaixar no seu fluxo de afiliados e creator ops." button="Escolher horário" href="https://meetings.hubspot.com/reacher" />
            <HelpCard icon={<Phone size={24} />} title="Falar com vendas" copy="Para planos Pro, Enterprise ou operações com múltiplos mercados." button="Agendar demo" href="https://meetings.hubspot.com/sohun-sanka/enterprise-demo" />
            <HelpCard icon={<FileText size={24} />} title="Precisa de onboarding?" copy="Acesse o guia de primeiros passos e organize sua implementação." button="Ver guia" href="https://drive.google.com/file/d/1PmA7VogLuqz78Iz_c_3JNHVkNUEYKZHb/view?usp=sharing" />
          </div>
          <ContactForm />
        </div>
      </section>
      <PtFaq items={faq} />
    </PtShell>
  );
}
