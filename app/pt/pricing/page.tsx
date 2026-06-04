import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Check, PackageOpen, Rocket, X } from "lucide-react";
import { localizedAlternates } from "@/lib/seo";
import { PtFaq, PtNewsletter, PtShell } from "../_components";

export const metadata: Metadata = {
  title: "Preços | Reacher",
  description: "Planos flexíveis do Reacher para marcas que estão começando ou escalando afiliados no TikTok Shop.",
  alternates: localizedAlternates("/pricing", "pt"),
};

const plans = [
  ["Starter", "$199", "$133", "Ideal para marcas que estão começando no TikTok Shop e querem organizar outreach de afiliados com rapidez.", "Começar teste grátis", "https://portal.reacherapp.com/login", false],
  ["Pro", "$599", "$419", "Para marcas em crescimento que querem escalar outreach, CRM, automações e GMV com recursos avançados.", "Começar teste grátis", "https://portal.reacherapp.com/login", false],
  ["Enterprise", "", "Sob medida", "Para marcas estabelecidas com grandes redes de afiliados, múltiplas campanhas e necessidades complexas.", "Agendar demo", "https://meetings.hubspot.com/sohun-sanka/enterprise-demo", true],
] as const;

const groups = [
  ["Descoberta de criadores", [["Outreach diário", "1.000", "7.500", "Máximo"], ["Velocidade de outreach", "Normal", "Rápida", "Prioritária"], ["Banco de criadores", "3M+", "3M+", "3M+"], ["Busca de criadores com IA", false, true, true]]],
  ["Automações de outreach", [["Automações simultâneas", "3", "10", "30"], ["TikTok Shop Affiliate Center TC + DM", true, true, true], ["Automação por e-mail", true, true, true], ["Follow-ups automáticos", false, true, true], ["Limpeza de Target Collaboration", false, true, true]]],
  ["CRM de criadores", [["Mensagens diárias no CRM", "1.000", "Ilimitado", "Ilimitado"], ["Automação de reviews", false, true, true], ["Revisão de pedidos de amostra com IA", false, true, true], ["Campanhas de criadores", false, true, true], ["Comunidade com branding customizado", false, true, true]]],
  ["Analytics e IA", [["Analytics básico", true, true, true], ["Insights avançados de conteúdo, produto e criadores", false, true, true], ["Atribuição da jornada completa", false, true, true], ["Inteligência Social", false, true, true], ["Creative Strategist com IA", false, true, true], ["Reacher AI Agent", false, true, true]]],
  ["Suporte e equipe", [["Suporte", "Chat", "Slack dedicado", "Slack prioritário"], ["Contas de membros da equipe", true, true, true], ["Chamadas 1:1 de estratégia", false, true, true]]],
] as const;

const faq = [
  { question: "Como o Reacher funciona?", answer: "O Reacher ajuda marcas do TikTok Shop a descobrir criadores, automatizar outreach e follow-ups, gerenciar relacionamentos, acompanhar performance e escalar vendas por afiliados em um único painel." },
  { question: "Posso trocar de plano depois?", answer: "Sim. Você pode fazer upgrade conforme seu programa cresce ou falar com o time para escolher o plano certo se volume, CRM ou equipe mudarem." },
  { question: "O Reacher é seguro para minha conta?", answer: "O produto foi desenhado para apoiar outreach responsável e fluxos compatíveis com TikTok Shop. Recomendamos volumes sensatos e mensagens aprovadas pela sua marca." },
  { question: "Meu pagamento fica seguro?", answer: "Sim. Pagamentos são processados por infraestrutura segura de terceiros; o Reacher não expõe seus dados completos de cartão dentro do produto." },
] as const;

type ValueType = string | boolean;
function Value({ value }: { value: ValueType }) {
  if (value === true) return <Check className="mx-auto h-5 w-5 text-[#3559e9]" />;
  if (value === false) return <X className="mx-auto h-5 w-5 text-slate-300" />;
  return <span className="text-[15px] font-semibold text-[#111827]">{value}</span>;
}

function PricingCard({ plan }: { plan: (typeof plans)[number] }) {
  const [name, oldPrice, price, copy, cta, href, highlighted] = plan;
  const Icon = name === "Starter" ? PackageOpen : name === "Pro" ? Rocket : Building2;
  return (
    <article className={`relative flex h-full min-h-[444px] flex-col rounded-[28px] p-8 text-left shadow-[0_8px_24px_rgba(16,24,40,0.055)] ring-1 ${highlighted ? "bg-[#f4f7ff] ring-[#b8c8ff]" : "bg-white ring-slate-200"}`}>
      <div className="mb-6 grid min-h-11 grid-cols-[44px_1fr] items-center gap-4">
        <div className={`flex h-10 w-10 items-center justify-center rounded-[12px] border bg-white ${highlighted ? "border-[#dbe4ff] text-[#3559e9]/70" : "border-slate-200 text-[#3559e9]/55"}`}>
          <Icon size={17} strokeWidth={1.7} />
        </div>
        {highlighted ? (
          <span className="ml-auto inline-flex h-8 items-center gap-1.5 rounded-full border border-[#cfdcff] bg-white px-3.5 text-[13px] font-semibold text-[#3559e9] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3559e9]/70" />Mais valor
          </span>
        ) : null}
      </div>
      <h2 className="text-[25px] font-semibold tracking-[-0.03em] text-[#111827]">{name}</h2>
      <div className="mt-7 flex min-h-[68px] items-end gap-2">{oldPrice ? <span className="pb-2 text-[24px] font-semibold text-slate-400 line-through">{oldPrice}</span> : null}<span className="text-[58px] font-semibold leading-none tracking-[-0.06em] text-[#111827]">{price}</span>{name !== "Enterprise" ? <span className="pb-2 text-[20px] font-medium text-black/55">/mês</span> : null}</div>
      <p className="mt-6 text-[15.5px] leading-7 text-black/58">{copy}</p>
      <div className="mt-auto pt-8"><Link href={href} className={`flex h-[50px] w-full items-center justify-center rounded-full text-[16px] font-semibold ${highlighted ? "bg-[#3559e9] !text-white shadow-[0_8px_20px_rgba(53,89,233,0.18)]" : "bg-white text-[#111827] shadow-sm ring-1 ring-slate-300"}`}>{cta}</Link></div>
    </article>
  );
}

export default function PricingPtPage() {
  return (
    <PtShell active="Preços">
      <section className="relative overflow-hidden bg-[#fbfcff] px-6 pb-[64px] pt-[136px] text-center">
        <div className="absolute left-1/2 top-[-170px] h-[560px] w-[90%] max-w-[1100px] -translate-x-1/2 rounded-[100%] bg-[#335CFF]/7 blur-[110px]" />
        <div className="relative z-10 mx-auto max-w-[1360px]">
          <p className="text-[17px] font-semibold text-[#3559e9]">Preços</p>
          <h1 className="mx-auto mt-7 max-w-[900px] text-[52px] font-semibold leading-[1.06] tracking-[-0.055em] md:text-[72px]">Pronto para acelerar seu TikTok Shop?</h1>
          <p className="mx-auto mt-6 max-w-[780px] text-[20px] leading-8 text-black/60">Esteja você começando ou escalando, o Reacher tem planos para acompanhar suas metas.</p>
          <div className="mx-auto mt-10 grid w-full max-w-[430px] grid-cols-2 gap-1 rounded-[28px] bg-white p-2 shadow-sm ring-1 ring-slate-200 sm:flex sm:max-w-[460px] sm:rounded-full">{["Mensal", "3 meses", "6 meses", "Anual"].map((x, i) => <span key={x} className={`flex min-h-[44px] flex-1 items-center justify-center rounded-full px-4 py-3 text-center text-[15px] font-semibold ${i === 3 ? "bg-[#111827] text-white" : "text-black/60"}`}>{x}</span>)}</div>
          <div className="mt-11 grid gap-5 md:grid-cols-3">{plans.map((plan) => <PricingCard key={plan[0]} plan={plan} />)}</div>
        </div>
      </section>

      <section className="bg-white px-6 py-[72px]">
        <div className="mx-auto max-w-[1360px] overflow-x-auto rounded-[24px] bg-white shadow-[0_8px_26px_rgba(16,24,40,0.045)] ring-1 ring-slate-200">
          <div className="grid min-w-[860px] grid-cols-[1.35fr_1fr_1fr_1fr] items-end border-b border-slate-200 text-center md:min-w-0"><div className="p-7 text-left text-[28px] font-semibold tracking-[-0.035em]">Recursos</div>{["Starter", "Pro", "Enterprise"].map((name) => <div key={name} className="p-7"><h3 className="text-[22px] font-semibold tracking-[-0.03em]">{name}</h3></div>)}</div>
          {groups.map(([group, rows]) => <div key={group}><div className="min-w-[860px] bg-[#f4f6fb] px-7 py-5 text-[17px] font-semibold text-[#111827] md:min-w-0">{group}</div>{rows.map(([label, starter, pro, ent]) => <div key={label} className="grid min-w-[860px] grid-cols-[1.35fr_1fr_1fr_1fr] items-center border-t border-slate-100 text-center md:min-w-0"><div className="px-7 py-5 text-left text-[15.5px] font-medium text-black/72">{label}</div><div className="border-l border-slate-100 px-4 py-5"><Value value={starter as ValueType} /></div><div className="border-l border-slate-100 px-4 py-5"><Value value={pro as ValueType} /></div><div className="border-l border-slate-100 bg-[#f7faff] px-4 py-5"><Value value={ent as ValueType} /></div></div>)}</div>)}
        </div>
      </section>
      <PtFaq items={faq} />
      <PtNewsletter />
    </PtShell>
  );
}
