import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import { PageBadge, ReacherFooter, ReacherHeader } from "@/components/ReacherChrome";
import { localizedAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Novidades | Reacher",
  description: "Veja os recursos, melhorias e atualizações mais recentes do Reacher para crescimento no TikTok Shop.",
  alternates: localizedAlternates("/changelog", "pt"),
};

const releases = [
  {
    label: "Novo recurso · Halo Effect Tracker",
    title: "Seu TikTok está gerando vendas na Amazon. Agora você consegue provar.",
    body: "Marcas nos disseram por meses: \"Eu sei que o TikTok impulsiona meus números na Amazon, mas não consigo provar.\" Agora você consegue! O Halo Effect Tracker conecta visualizações do TikTok a picos de busca na Amazon e vendas Shopify, filtra por SKU e calcula ROAS cross-channel.",
    note: "Nosso app da Amazon já está na App Store. O app Shopify está em aprovação final.",
    image: "/reacher-assets/changelog/halo.png",
    cta: "Testar Halo Effect Tracker",
    href: "https://portal.reacherapp.com/analytics/halo",
  },
  {
    label: "Novo recurso · Automações de amostras",
    title: "Pare de desperdiçar orçamento em amostras que nunca convertem.",
    body: "Defina limites semanais globais ou por produto para aprovações automáticas de amostras. A aprovação automática pausa ao atingir seu número e reinicia todo domingo à meia-noite PST.",
    note: "Os dados de amostras agora sincronizam de hora em hora em vez de a cada 2 horas.",
    image: "/reacher-assets/changelog/samples.png",
    cta: "Testar automações de amostras",
    href: "https://portal.reacherapp.com/automations/re-engage?stage=Sample+Requested",
  },
  {
    label: "Novo recurso · Benchmarks de Social Intelligence",
    title: "Sua conversão de afiliados está abaixo do mercado sem você saber?",
    body: "Compare sua loja com todas as outras lojas no Reacher em 7 métricas em cada etapa do funil de afiliados. Filtre por segmento de GMV para comparar com marcas do seu tamanho.",
    note: "Disponível nos EUA, Reino Unido, Global, Itália e Brasil.",
    image: "/reacher-assets/changelog/benchmarks.png",
    cta: "Ver benchmarks",
    href: "https://portal.reacherapp.com/social-intelligence/insights",
  },
];

const shipped = [
  ["Detalhes de automação reconstruídos", "Chega de alternar entre abas para saber se uma campanha de outreach está funcionando. Veja status por criador, GMV, seguidores, taxa de postagem e sua sequência completa de mensagens em uma página."],
  ["Segurança de mensagens", "Uma automação enviada com \"[Inserir nome do produto]\" para 500 criadores derruba sua taxa de resposta. O Reacher agora bloqueia placeholders não preenchidos e detecta palavras proibidas pelo TikTok (Amazon, WhatsApp etc.) antes de qualquer envio."],
  ["Novo onboarding", "Do cadastro à primeira automação em minutos. Envie uma lista ou use busca de criadores com IA, passe pelo Social Intelligence, configure seu primeiro Target Collab e agende um onboarding, tudo em um fluxo."],
  ["Social Intelligence: marcas, produtos e vídeos em alta", "Veja quais criadores estão gerando GMV para concorrentes por categoria, salve-os em listas e lance automações para conquistá-los. Agora com filtros de subcategoria L2 (ex.: suplementos, vitaminas) nos EUA, Reino Unido, Global, Itália e Brasil."],
  ["Analytics de LIVEs", "Página dedicada para desempenho de lives. Veja quais sessões ao vivo realmente estão gerando GMV. Disponível para planos Pro e acima nos EUA, Reino Unido, Global, Brasil e México."],
] as const;

function ScreenshotFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mt-8 overflow-hidden rounded-[24px] shadow-[0_24px_60px_rgba(45,78,198,0.16)]">
      <Image src={src} alt={alt} width={1104} height={720} className="h-auto w-full object-cover" />
    </div>
  );
}

function ReleaseCard({ release }: { release: (typeof releases)[number] }) {
  return (
    <article className="pt-9">
      <p className="text-[15px] font-semibold text-[#3559e9]">{release.label}</p>
      <h2 className="mt-4 text-[33px] font-semibold leading-[1.15] tracking-[-0.045em] text-[#111827]">{release.title}</h2>
      <p className="mt-5 text-[17.5px] leading-8 text-black/70">{release.body}</p>
      <p className="mt-5 flex items-start gap-2.5 text-[15px] font-medium leading-7 text-black/60"><span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e8eeff] text-[#3559e9]"><Info size={13} /></span>{release.note}</p>
      <ScreenshotFrame src={release.image} alt={release.title} />
      <Link
        href={release.href}
        className="mt-7 flex w-fit items-center gap-2.5 rounded-[320px] bg-[#3559e9] px-[14px] py-[7.25px] text-[14px] font-semibold leading-[22.5px] !text-white shadow-[inset_0_0_0_1px_rgba(16,24,40,0.18),inset_0_-2px_0_rgba(16,24,40,0.05),0_1px_2px_rgba(16,24,40,0.05)]"
      >
        {release.cta}
        <span className="flex h-5 w-5 items-center justify-center text-white">
          <ArrowRight size={16} strokeWidth={2} />
        </span>
      </Link>
    </article>
  );
}

export default function ChangelogPtPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f1f5ff] text-black">
      <ReacherHeader active="Novidades" locale="pt" />
      <section className="relative px-6 pb-[72px] pt-[132px]">
        <div className="absolute inset-x-0 top-0 h-[820px] bg-[radial-gradient(circle_at_44%_7%,rgba(69,94,255,0.34),rgba(151,168,255,0.2)_36%,rgba(247,249,255,0)_72%)]" />
        <div className="relative z-10 mx-auto max-w-[880px] text-center">
          <PageBadge>Novidades</PageBadge>
          <h1 className="mt-7 text-[52px] font-semibold leading-[1.02] tracking-[-0.06em] md:text-[78px]">O que há de novo no Reacher</h1>
          <p className="mx-auto mt-6 max-w-[650px] text-[20px] leading-8 text-black/58">Veja os recursos, melhorias e atualizações mais recentes que lançamos para ajudar você a crescer no TikTok Shop.</p>
        </div>

        <div className="relative z-10 mx-auto mt-[72px] grid max-w-[930px] gap-8 md:grid-cols-[142px_1fr]">
          <div className="pt-9 md:sticky md:top-24 md:h-fit">
            <span className="inline-block text-[15px] font-semibold leading-[23px] text-[#3559e9]">6 de abril</span>
          </div>
          <div className="px-0 pb-8 md:px-2">
            {releases.map((release, index) => (
              <div key={release.title} className={index > 0 ? "mt-12 pt-8" : ""}>
                <ReleaseCard release={release} />
              </div>
            ))}

            <section className="mt-[72px]">
              <h2 className="text-[36px] font-semibold tracking-[-0.045em] text-[#111827]">Também lançado</h2>
              <div className="mt-8 space-y-7">
                {shipped.map(([title, copy], index) => (
                  <article key={title} className="grid grid-cols-[44px_1fr] gap-5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3559e9] text-[16px] font-bold text-white">{index + 1}</span>
                    <div>
                      <h3 className="text-[23px] font-semibold tracking-[-0.035em] text-[#111827]">{title}</h3>
                      <p className="mt-3 text-[16.5px] leading-7 text-black/66">{copy}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
      <ReacherFooter locale="pt" />
    </main>
  );
}
