import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, CreditCard, MessageCircle, MousePointer2, Search, Settings2, Sparkles, Users } from "lucide-react";
import { localizedAlternates } from "@/lib/seo";
import { PtFaq, PtPrimaryCta, PtShell } from "../_components";

export const metadata: Metadata = {
  title: "Comunidade de Criadores | Reacher",
  description: "Acesso direto a criadores pré-vetados, analytics de crescimento e gestão de pagamentos ponta a ponta.",
  alternates: localizedAlternates("/community", "pt"),
};

const features = [
  [Search, "Descubra criadores de alta performance", "Encontre e avalie criadores por métricas, fit de audiência, categoria e potencial de conversão."],
  [Settings2, "Gerencie campanhas com facilidade", "Lance, acompanhe e otimize campanhas com entregáveis, lembretes automáticos e performance em um só lugar."],
  [CreditCard, "Automatize pagamentos", "Gerencie fee fixo, comissão, bônus por performance e histórico completo de pagamentos."],
  [BarChart3, "Acompanhe conteúdo e GMV", "Veja visualizações, engajamento, conversão e GMV para comparar criadores e reinvestir melhor."],
  [Users, "Modelos flexíveis de parceria", "Suporte de campanhas pontuais a embaixadores, com termos customizados por criador."],
  [MessageCircle, "Gere insights acionáveis", "Transforme dados de criadores em decisões claras e relatórios para stakeholders."],
] as const;

const faqs = [
  { question: "Como a Comunidade de Criadores integra com meu TikTok Shop?", answer: "Ela se conecta ao fluxo existente para centralizar criadores, campanhas, conteúdo, pagamentos e performance sem substituir o que sua equipe já usa." },
  { question: "Quais modelos de pagamento são suportados?", answer: "Você pode gerenciar retainers, fees pontuais, comissões, bônus por performance e acordos híbridos." },
  { question: "Como medir ROI das parcerias?", answer: "O painel acompanha output, engajamento, sinais de conversão e impacto em GMV para comparar criadores e priorizar investimento." },
  { question: "Posso usar para encontrar novos criadores?", answer: "Sim. O Reacher ajuda a encontrar criadores pré-vetados e filtrá-los por categoria, audiência, performance e potencial." },
] as const;

function FeatureGrid() {
  return (
    <section className="bg-white px-6 py-[72px]">
      <div className="mx-auto max-w-[1180px] text-center">
        <p className="text-[15px] font-semibold text-[#3559e9]/85">Recursos</p>
        <h2 className="mx-auto mt-4 max-w-[820px] text-[40px] font-semibold leading-[1.1] tracking-[-0.045em] text-[#05070d] md:text-[58px]">Uma plataforma para gerenciar todo o ecossistema de criadores</h2>
        <p className="mx-auto mt-5 max-w-[760px] text-[18px] leading-8 text-black/52">Reduza tarefas manuais e foque em parcerias que geram resultado real.</p>
        <div className="mt-14 grid gap-x-9 gap-y-12 text-left md:grid-cols-3">
          {features.map(([Icon, title, copy]) => (
            <article key={title}><div className="flex h-11 w-11 items-center justify-center rounded-[13px] bg-[#f0f4ff] text-[#3559e9]/75"><Icon size={24} strokeWidth={1.9} /></div><h3 className="mt-6 text-[20px] font-semibold tracking-[-0.02em] text-[#111827]">{title}</h3><p className="mt-3 text-[15.5px] leading-7 text-black/52">{copy}</p></article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function CommunityPtPage() {
  return (
    <PtShell>
      <section className="relative overflow-hidden bg-[#eef4ff] px-6 pb-[58px] pt-[124px] text-center md:pt-[142px]">
        <div className="absolute left-1/2 top-[-150px] h-[660px] w-[94%] max-w-[1180px] -translate-x-1/2 rounded-[100%] bg-[#335CFF]/20 blur-[112px]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(219,229,255,0.72)_0%,rgba(239,244,255,0.88)_52%,#ffffff_100%)]" />
        <div className="relative z-10 mx-auto max-w-[1180px]">
          <Link href="https://www.loom.com/share/bd9e1bea0adb42848b46287d091a8c97" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[14px] font-medium text-[#344054] shadow-sm ring-1 ring-slate-200"><span className="inline-flex items-center gap-1 rounded-full bg-[#eef3ff] px-2.5 py-1 text-[#3559e9]"><Sparkles size={14} /> Novo recurso</span><span>Conheça o Assistente de Chat com IA</span><ArrowRight size={14} /></Link>
          <h1 className="mx-auto mt-7 max-w-[900px] text-[60px] font-semibold leading-[1.03] tracking-[-0.06em] text-[#05070d] md:text-[88px]">Comunidade de Criadores</h1>
          <p className="mx-auto mt-7 max-w-[880px] text-[20px] leading-[1.5] text-black/58">Acesso a criadores pré-vetados e de alta performance, com analytics de crescimento e gestão de pagamentos ponta a ponta.</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-5 sm:flex-row"><Link href="https://calendly.com/bora-reacherapp/15min?month=2025-03" className="inline-flex h-[56px] items-center gap-2 rounded-full bg-white px-8 text-[17px] font-semibold text-black shadow-sm ring-1 ring-slate-200"><MousePointer2 size={18} /> Agendar demo</Link><PtPrimaryCta>Cadastrar</PtPrimaryCta></div>
          <div className="mx-auto mt-14 max-w-[1320px] overflow-hidden rounded-[28px] bg-transparent shadow-[0_22px_60px_rgba(15,23,42,0.14)]"><Image src="/reacher-assets/community/dashboard.png" alt="Painel da Comunidade de Criadores" width={1280} height={636} priority className="h-auto w-full rounded-[24px]" /></div>
        </div>
      </section>
      <section className="bg-white px-6 py-14 text-center"><h2 className="text-[20px] font-semibold tracking-[-0.02em] text-[#141a24]/85">Junte-se a 100+ empresas que já estão crescendo</h2></section>
      <FeatureGrid />
      <section className="bg-[#f7f9fd] px-6 py-[92px] text-center"><div className="mx-auto max-w-[1080px]"><p className="inline-flex items-center gap-2 text-[25px] font-semibold tracking-[-0.04em] text-[#3559e9]/85"><span className="text-[30px]">✦</span> Wildcrafted</p><blockquote className="mx-auto mt-8 max-w-[1020px] text-[32px] font-semibold leading-[1.24] tracking-[-0.04em] text-[#111827] md:text-[46px]">O Reacher mudou o jogo. As automações economizaram dias de trabalho manual e nos ajudaram a atingir nosso marco de $1M em GMV.</blockquote><Image src="/reacher-assets/community/amelie.png" alt="Amélie Laurent" width={68} height={68} className="mx-auto mt-8 h-[68px] w-[68px] rounded-full object-cover" /><p className="mt-5 text-[18px] font-semibold text-[#111827]">Amélie Laurent</p><p className="mt-1 text-[16px] text-black/52">Product Manager, Wildcrafted</p></div></section>
      <PtFaq items={faqs} />
    </PtShell>
  );
}
