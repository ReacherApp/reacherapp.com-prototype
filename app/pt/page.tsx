import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, Rocket, X } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import CaseStudyCarousel from "@/components/CaseStudyCarousel";
import { ReacherFooter } from "@/components/ReacherChrome";
import { localizedAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Reacher | Faça a receita da TikTok Shop crescer no piloto automático",
  description:
    "Automatize descoberta de criadores, contato, CRM e campanhas de afiliados do TikTok Shop com o Reacher.",
  alternates: localizedAlternates("/", "pt"),
};

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
    title: "Descoberta de Criadores de IA",
    saved: "10+ horas economizadas",
    copy: "Descreva o seu criador ideal. A IA faz combinações com base no conteúdo real dos vídeos, no estilo e nos dados demográficos.",
    image:
      "https://framerusercontent.com/images/9pQSPFM0J5002wQ6OnzgRUQH6kk.png?scale-down-to=1024&width=2152&height=1000",
  },
  {
    title: "Contato automatizado",
    saved: "40+ horas economizadas",
    copy: "Alcance milhares de criadores todos os dias por meio de DMs, convites para colaborações, e-mail e solicitações de amostras.",
    image:
      "https://framerusercontent.com/images/DjNceYh6EbhjcYDzwatq0bfVZE.png?scale-down-to=1024&width=2152&height=1000",
  },
];

const intelligence = [
  {
    title: "Inteligência social",
    saved: "Insights sobre a concorrência",
    copy: "Acompanhe as marcas, produtos e vídeos com melhor desempenho no TikTok Shop. Monitore os criadores da concorrência e entre em contato com eles com um clique.",
    image:
      "https://framerusercontent.com/images/LKcKJp3qqCMdKiDJUytPQHw4ao4.png?scale-down-to=1024&width=2960&height=1344",
  },
  {
    title: "Agente Criativo",
    saved: "10+ horas economizadas",
    copy: "A IA analisa seus vídeos com melhor desempenho e gera briefings criativos prontos para compartilhar em minutos.",
    image:
      "https://framerusercontent.com/images/dMNrWj0mId2OG6lq90eHu39nEA.png?scale-down-to=1024&width=2960&height=1344",
  },
];

const scale = [
  {
    title: "CRM",
    saved: "10+ horas economizadas",
    copy: "Acompanhe o status, as mensagens, as amostras e o GMV de cada criador em um só lugar. Agrupe e segmente os criadores para executar automações direcionadas.",
    image:
      "https://framerusercontent.com/images/CTXSsOa8J35dNanOUYDsi3uRqs.png?scale-down-to=1024&width=2960&height=1344",
  },
  {
    title: "Campanhas",
    saved: "20+ horas economizadas",
    copy: "Execute contratos de retenção, desafios e concursos para manter os criadores publicando. Defina estruturas de recompensa, acompanhe o GMV por campanha e compartilhe via Automações ou Discord.",
    image:
      "https://framerusercontent.com/images/WcPyLmo4jxmfPIzvFUJl7mLko.png?scale-down-to=1024&width=2960&height=1344",
  },
];

const testimonials = [
  {
    brand: "Goli Nutrition",
    quote:
      "O Reacher impulsionou nossa campanha sprint de 24 horas, alcançando mais de 20.000 criadores com quase 50 mensagens por minuto. A execução foi impecável.",
    stats: ["300 mil+ vídeos", "100 milhões+ visualizações", "30 mil+ afiliados"],
    name: "Davy Sanchez",
    role: "Content Strategist",
    image:
      "https://framerusercontent.com/images/0P3F4FlF4dPiZlvHHv6uciDv6ac.jpg?scale-down-to=512&width=2560&height=2560",
  },
  {
    brand: "Flywheel Digital",
    quote:
      "Com o Reacher, trouxemos nosso fluxo de afiliados do TikTok Shop para dentro de casa e conseguimos escalar com eficiência para uma base crescente de clientes.",
    stats: ["+200% vídeos", "+340% views", "+120% afiliados"],
    name: "Molly O'Bryen",
    role: "Senior Director",
    image:
      "https://framerusercontent.com/images/jjDew1lvN2vR8K2ah7l8eoS6p0.jpeg?scale-down-to=512&width=2048&height=2048",
  },
  {
    brand: "Social Commerce Club",
    quote:
      "Jerry e Bora são fundadores de primeira classe. Eles avançam rápido, ouvem o mercado e constroem exatamente o que é necessário em alto nível.",
    stats: ["+45% vídeos", "+60% views", "+120% afiliados"],
    name: "Jordan West",
    role: "CEO",
    image:
      "https://framerusercontent.com/images/CKLvUKswOu4xwI2SCDELOFvkPI.jpeg?width=1040&height=1322",
  },
];

const comparisonRows = [
  ["Outreach automatizado para criadores", true, false, false],
  ["Jornada completa do criador com atribuição", true, false, false],
  ["Inteligência Social e Creative Agent", true, true, false],
  ["Outreach Agent", true, false, false],
  ["Resposta a criadores com chatbot de IA", true, false, false],
  ["Campanhas de comunidade com sua marca", true, false, false],
] as const;

const countries = [
  ["Estados Unidos", "https://framerusercontent.com/images/3VuLRJrAZjwcpki3s9D1OBt2IxM.png?width=64&height=64"],
  ["Espanha", "https://framerusercontent.com/images/U9RueZznq48gLkg8tlkP1XnVmM.png?width=64&height=64"],
  ["Irlanda", "https://framerusercontent.com/images/zVl2qzPUhsA7vqRGIVthWoJf9o.png?width=64&height=64"],
  ["Reino Unido", "https://framerusercontent.com/images/u8oNBoGXdHxLPBIaXXEg7XNcuZk.png?width=64&height=64"],
  ["México", "https://framerusercontent.com/images/qW05kthRsXZtd0Jk7t3Ix2KkxY.png?width=64&height=64"],
  ["Alemanha", "https://framerusercontent.com/images/yJ9WHmzcO64tz6xPW5HKyt6ia0U.png?width=64&height=64"],
  ["França", "https://framerusercontent.com/images/M9N4WdGRDc4SM4DtiAQXn1sBc.png?width=64&height=64"],
  ["Brasil", "https://framerusercontent.com/images/W2LC5mWPBOHhsclKvyWd36mncrM.png?width=64&height=64"],
  ["Vendedores globais", "https://framerusercontent.com/images/2DZf4lArE4ROB1ZKm1E3wROEHiw.png?width=64&height=64"],
] as const;

const faq = [
  [
    "Como o Reacher funciona?",
    "O Reacher é uma ferramenta de automação que atua como seu gerente de afiliados com IA para automatizar e escalar a gestão de afiliados. Enviamos mensagens, e-mails e convites direcionados para criadores em seu nome.",
  ],
  [
    "Como minhas informações são armazenadas? É seguro?",
    "Suas informações pessoais não são armazenadas. O Reacher é 100% seguro e 100% privado.",
  ],
  [
    "Minha conta do TikTok pode ser banida?",
    "Não. O Reacher é parceiro oficial do TikTok Shop e cumpre os Termos e Condições do TikTok Shop.",
  ],
  [
    "Posso alterar meu plano depois de comprar?",
    "Claro. Nossa equipe pode ajudar você a fazer upgrade ou downgrade do seu plano a qualquer momento.",
  ],
] as const;

function CTAButtons({ secondaryLabel = "Ver preços", secondaryHref = "/pt/pricing" }: { secondaryLabel?: string; secondaryHref?: string }) {
  return (
    <div className="mt-9 flex flex-col items-center justify-center gap-5 sm:flex-row">
      <Link
        href={secondaryHref}
        className="inline-flex h-[62px] w-[312px] items-center justify-center rounded-full bg-white px-10 text-[18px] font-semibold !text-[#0f172a] shadow-sm ring-1 ring-black/10 sm:w-auto"
        style={{ color: "#0f172a" }}
      >
        {secondaryLabel}
      </Link>
      <Link
        href="https://portal.reacherapp.com/login"
        className="inline-flex h-[62px] w-[312px] items-center justify-center rounded-full bg-[#2465f6] px-10 text-[18px] font-semibold !text-white shadow-lg shadow-blue-600/25 sm:w-auto"
        style={{ color: "#fff" }}
      >
        Comece seu teste gratuito
      </Link>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex rounded-full bg-[#eef1fb] px-7 py-3 text-sm font-semibold text-[#3559e9]">{children}</span>;
}

function SectionHeading({ badge, title, copy }: { badge: string; title: string; copy: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Badge>{badge}</Badge>
      <h2 className="mt-7 text-4xl font-bold tracking-[-0.045em] text-slate-950 md:text-6xl">{title}</h2>
      <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">{copy}</p>
    </div>
  );
}

function ImageCard({ item, compact = false }: { item: typeof features[number]; compact?: boolean }) {
  return (
    <article className="overflow-hidden rounded-[2rem] bg-white p-6 text-slate-950 shadow-2xl shadow-blue-950/10 ring-1 ring-black/5 md:p-8">
      <div className={compact ? "grid items-center gap-8 md:grid-cols-[0.7fr_1.3fr]" : ""}>
        <div>
          <p className="text-sm font-semibold text-[#2465f6]">{item.saved}</p>
          <h3 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">{item.title}</h3>
          <p className="mt-4 text-base leading-7 text-slate-600">{item.copy}</p>
        </div>
        <div className="mt-8 overflow-hidden rounded-3xl bg-[#f3f7ff] ring-1 ring-slate-200 md:mt-0">
          <Image src={item.image} alt="" width={900} height={420} className="h-auto w-full" />
        </div>
      </div>
    </article>
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

export default function PortugueseHomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
      <HeroSection logo={logo} ycIcon={ycIcon} heroShots={heroShots} brandLogos={brandLogos} locale="pt" />

      <section className="bg-gradient-to-br from-[#0b55f4] via-[#4b8cff] to-[#bcd7ff] px-6 py-24 text-white md:py-30">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold ring-1 ring-white/30">Mais de 150 horas economizadas por semana</span>
            <h2 className="mx-auto mt-7 max-w-3xl text-4xl font-bold tracking-[-0.045em] md:text-6xl">Encontre e ative os criadores certos</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/85">Descreva quem você quer, deixe a IA encontrá-las e automatize o contato com milhares de pessoas.</p>
            <div className="mx-auto mt-10 flex max-w-md justify-center overflow-hidden rounded-3xl bg-white/15 p-2 ring-1 ring-white/25 backdrop-blur">
              <div className="flex-1 rounded-2xl bg-white px-6 py-5 text-slate-950">
                <strong className="block text-3xl">50+ horas</strong>
                <span className="text-sm text-slate-500">Tempo economizado</span>
              </div>
              <div className="flex-1 px-6 py-5">
                <strong className="block text-3xl">3,4 mi+</strong>
                <span className="text-sm text-white/75">Criadores</span>
              </div>
            </div>
          </div>
          <div className="mt-14 grid gap-7 md:grid-cols-2">{features.map((item) => <ImageCard key={item.title} item={item} />)}</div>
          <CTAButtons />
        </div>
      </section>

      <section className="bg-[#f7faff] px-6 py-24 md:py-30">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            badge="Transforme dados em ação"
            title="Saiba qual conteúdo realmente gera vendas"
            copy="Veja o que está funcionando no TikTok Shop, acompanhe as principais marcas, vídeos e criadores e, depois, transforme insights em briefings."
          />
          <div className="mt-16 space-y-7">{intelligence.map((item) => <ImageCard key={item.title} item={item} compact />)}</div>
          <CTAButtons />
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#0b55f4] via-[#4b8cff] to-[#bcd7ff] px-6 py-24 text-white md:py-30">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold ring-1 ring-white/30">Tudo o que você precisa para escalar</span>
            <h2 className="mt-7 text-4xl font-bold tracking-[-0.045em] md:text-6xl">Gerencie e expanda sua rede de criadores</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/85">Execute campanhas, acompanhe cada relacionamento com criadores e construa uma comunidade que continue publicando e impulsionando o GMV.</p>
          </div>
          <div className="mt-16 space-y-7">{scale.map((item) => <ImageCard key={item.title} item={item} compact />)}</div>
          <CTAButtons />
        </div>
      </section>

      <section className="bg-[#f7faff] px-6 py-24 text-center">
        <Image src="https://framerusercontent.com/images/jnD00x1iNTy8GlbUSZ3sDa0qFJE.jpeg?width=200&height=200" alt="" width={60} height={60} className="mx-auto rounded-full" />
        <blockquote className="mx-auto mt-7 max-w-4xl text-3xl font-bold leading-tight tracking-[-0.035em] md:text-5xl">
          “A plataforma tem recursos e ferramentas que eu não tinha visto em nenhum outro lugar, o que tem sido uma grande vantagem para nós.”
        </blockquote>
        <p className="mt-6 text-sm font-medium text-slate-500">CEO da Social Commerce Collective — Alex Linebaugh</p>
      </section>

      <section id="testimonials-new" className="bg-gradient-to-br from-[#0b55f4] via-[#4b8cff] to-[#bed8ff] px-6 py-24 text-white md:py-30">
        <div className="mx-auto max-w-6xl text-center">
          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold ring-1 ring-white/30">Estudos de caso e depoimento</span>
          <h2 className="mx-auto mt-7 max-w-3xl text-4xl font-bold tracking-[-0.045em] md:text-6xl">Adorado por marcas líderes em todo o mundo</h2>
          <p className="mt-5 text-lg text-white/80">Resultados reais de clientes reais que transformaram seus programas para criadores</p>
          <CaseStudyCarousel testimonials={testimonials} />
        </div>
      </section>

      <section className="bg-[#f7faff] px-6 py-24 md:py-30">
        <div className="mx-auto max-w-6xl text-center">
          <SectionHeading
            badge="A última ferramenta que sua marca precisa"
            title="Por que o Reacher é a escolha óbvia"
            copy="Tudo que sua equipe precisa para substituir planilhas manuais, ferramentas fragmentadas e contato lento com criadores."
          />
          <div className="mt-14 overflow-hidden rounded-[2rem] bg-white text-left shadow-xl ring-1 ring-slate-200">
            <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] bg-slate-950 px-6 py-5 text-sm font-semibold text-white md:px-9"><span>Recursos</span><span className="text-center">Reacher</span><span className="text-center">Outras ferramentas</span><span className="text-center">Manual</span></div>
            {comparisonRows.map(([label, reacher, tools, manual]) => (
              <div key={label} className="grid grid-cols-[1.5fr_1fr_1fr_1fr] items-center border-t border-slate-100 px-6 py-5 text-sm md:px-9">
                <span className="font-medium text-slate-700">{label}</span>
                {[reacher, tools, manual].map((value, index) => <span key={`${label}-${index}`} className="flex justify-center">{value ? <Check className="text-[#2465f6]" /> : <X className="text-slate-300" />}</span>)}
              </div>
            ))}
          </div>
          <CTAButtons />
        </div>
      </section>

      <section className="bg-white px-6 py-24 md:py-30">
        <div className="mx-auto max-w-[1120px] text-center">
          <Badge>#1 na App Store do TikTok Shop</Badge>
          <h2 className="mx-auto mt-7 max-w-[720px] text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-slate-950 md:text-[56px]">#1 na App Store do TikTok Shop</h2>
          <div className="mt-12 grid gap-7 text-left">
            <div className="grid gap-7 md:grid-cols-[0.42fr_1fr]">
              <div className="relative min-h-[240px] overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#fff_0%,#fff8f9_56%,#fff0f3_100%)] p-7 ring-1 ring-slate-200">
                <Image src="https://framerusercontent.com/images/unhYvdOItR0nQ16lhap6Lbdhk.webp?scale-down-to=512&width=738&height=200" alt="FastMoss" width={144} height={39} className="h-auto w-36" />
                <h3 className="mt-7 text-[26px] font-medium leading-tight tracking-[-0.03em] text-black">Parceiro oficial</h3>
                <p className="mt-3 max-w-[230px] text-[16px] leading-[1.25] text-black/70">Use o código <strong className="font-semibold text-black">RE8008</strong> para <strong className="font-semibold text-black">10%</strong> de desconto na sua assinatura mensal FastMoss.</p>
                <Link href="https://www.fastmoss.com/dashboard?refCode=RE8008" className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-[19px] font-semibold text-slate-950 shadow-sm ring-1 ring-slate-200">Ganhe 10% off</Link>
                <Image src="https://framerusercontent.com/images/2tXEgWOJoqdR06aUFp3ivG7Sk.png?width=500&height=500" alt="" width={210} height={210} className="absolute -bottom-11 right-0 w-[190px] rotate-[15deg] opacity-95" />
              </div>
              <div className="relative min-h-[240px] overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#fff_0%,#f7f8ff_48%,#edf1ff_100%)] p-7 ring-1 ring-slate-200">
                <div className="max-w-[455px]">
                  <h3 className="text-[28px] font-medium leading-tight tracking-[-0.03em] text-black md:text-[32px]">Parceiros oficiais de</h3>
                  <p className="mt-3 text-[16px] leading-[1.18] text-black/70">O Reacher é um <strong className="font-semibold text-black">Parceiro oficial do TikTok Shop</strong> e uma <strong className="font-semibold text-black">agência TAP</strong> reconhecida, confiada por grandes marcas e agências.</p>
                  <Link href="https://seller-us.tiktok.com/appstore/us/7382298357580007211" className="mt-12 inline-flex rounded-full bg-white px-6 py-3 text-[19px] font-semibold text-slate-950 shadow-sm ring-1 ring-slate-200">#1 na App Store do TikTok Shop</Link>
                </div>
                <TikTokBadge title="TikTok Shop" subtitle="Partner" className="absolute right-16 top-5 hidden w-[185px] md:flex" />
                <TikTokBadge title="Official TikTok" subtitle="App Developer" className="absolute bottom-5 right-14 hidden w-[205px] md:flex" />
              </div>
            </div>
            <div className="relative min-h-[260px] overflow-hidden rounded-[28px] bg-[linear-gradient(115deg,#fff_0%,#f8fbff_48%,#edf4ff_100%)] p-7 ring-1 ring-slate-200 md:p-8">
              <div className="relative z-10 max-w-[760px]">
                <h3 className="text-[28px] font-medium leading-tight tracking-[-0.03em] text-black md:text-[32px]">Disponível globalmente em 10 mercados</h3>
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
          <div className="mt-9 flex justify-center"><Link href="https://portal.reacherapp.com/login" className="inline-flex h-[62px] items-center justify-center rounded-full bg-[#2465f6] px-10 text-[18px] font-semibold !text-white shadow-lg shadow-blue-600/25">Comece seu teste gratuito</Link></div>
        </div>
      </section>

      <section className="bg-[#f7faff] px-6 py-24 md:py-28">
        <div className="mx-auto grid max-w-[1120px] items-center gap-16 md:grid-cols-[1.05fr_1fr]">
          <div className="text-left">
            <Badge>Rede de criadores</Badge>
            <h2 className="mt-7 max-w-[560px] text-[40px] font-semibold leading-[1.08] tracking-[-0.04em] text-black md:text-[46px]">Acesse o maior banco de dados de criadores da TikTok Shop</h2>
            <p className="mt-5 max-w-[560px] text-[23px] leading-[1.25] tracking-[-0.01em] text-black/80">Conecte-se com criadores de alto desempenho que entregam resultados reais e mensuráveis.</p>
            <Link href="https://portal.reacherapp.com/login" className="mt-9 inline-flex h-[50px] items-center justify-center rounded-full bg-[#3559e9] px-7 text-[20px] font-medium !text-white shadow-[inset_0_0_0_1px_rgba(16,24,40,0.18),inset_0_-2px_0_rgba(16,24,40,0.05),0_1px_2px_rgba(16,24,40,0.05)]" style={{ color: "#fff" }}>Comece seu teste gratuito</Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {[["2,2 mi+", "criadores"], ["US$10 mil+", "ganhadores"]].map(([value, label]) => (
              <div key={value} className="flex min-h-[236px] flex-col items-center justify-center rounded-[28px] bg-white p-8 text-center shadow-xl shadow-blue-950/5 ring-1 ring-slate-200 md:min-h-[250px]">
                <strong className="block bg-[linear-gradient(90deg,#4c60f4_0%,#04c8f9_50%,#3559e9_100%)] bg-clip-text text-[64px] font-normal leading-none tracking-[-0.045em] text-transparent md:text-[76px]">{value}</strong>
                <span className="mt-4 block text-[28px] font-medium leading-none tracking-[-0.02em] text-black">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 md:py-30">
        <div className="mx-auto max-w-[1060px]">
          <SectionHeading badge="FAQs" title="Tem dúvidas? Temos respostas!" copy="Tudo que você precisa saber sobre o Reacher." />
          <div className="mt-14 space-y-5">
            {faq.map(([question, answer]) => (
              <article key={question} className="rounded-[18px] bg-[#f7f8fc] px-6 py-7 text-left md:px-8 md:py-8">
                <div className="flex items-start justify-between gap-8"><h3 className="text-[26px] font-medium leading-tight tracking-[-0.02em] text-black md:text-[32px]">{question}</h3><span className="mt-1 text-[32px] font-medium leading-none text-[#3559e9]" aria-hidden="true">−</span></div>
                <p className="mt-7 max-w-[930px] text-[22px] leading-[1.45] tracking-[-0.01em] text-black/60 md:text-[26px]">{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 pb-24">
        <div className="relative mx-auto min-h-[575px] max-w-[1460px] overflow-hidden rounded-[18px] bg-black px-6 text-center text-white md:min-h-[585px]">
          <div className="reacher-final-cta-stars absolute inset-x-0 top-[70px] h-[356px] opacity-70" />
          <div className="reacher-final-cta-dome absolute left-1/2 top-[85px] h-[775px] w-[1512px] -translate-x-1/2 rounded-[50%]" />
          <div className="reacher-final-cta-dots absolute left-1/2 top-[90px] h-[362px] w-[1350px] -translate-x-1/2 opacity-55" />
          <Rocket className="reacher-final-cta-rocket absolute left-1/2 top-[88px] z-10 h-10 w-10 -translate-x-1/2 text-white/70" strokeWidth={1.25} />
          <div className="relative z-10 mx-auto flex min-h-[575px] max-w-[812px] flex-col items-center pt-[220px] md:min-h-[585px]">
            <h2 className="text-[43px] font-semibold leading-[1.15] tracking-[-0.04em] text-white md:text-[50px]">Junte-se a centenas de marcas que crescem com o Reacher</h2>
            <p className="mx-auto mt-7 max-w-[762px] text-[19px] leading-8 text-white/78">Simplifique afiliados, fortaleça parcerias com criadores e gere vendas no TikTok Shop com uma plataforma completa.</p>
            <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="https://meetings.hubspot.com/sohun-sanka?uuid=02dc12d8-8ea6-4d23-b9e4-a3160609e431" className="inline-flex h-[59px] items-center justify-center rounded-full bg-white px-8 text-[20px] font-medium !text-black shadow-sm" style={{ color: "#000" }}>Agende uma chamada</Link>
              <Link href="https://portal.reacherapp.com/login" className="inline-flex h-[59px] items-center justify-center rounded-full bg-[#3559e9] px-8 text-[20px] font-medium !text-white shadow-[inset_0_2px_4px_rgba(255,255,255,0.22)]" style={{ color: "#fff" }}>Comece seu teste gratuito</Link>
            </div>
          </div>
        </div>
      </section>
      <ReacherFooter locale="pt" />
    </main>
  );
}
