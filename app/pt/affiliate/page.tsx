import type { Metadata } from "next";
import { AffiliateStepCard, CommissionBanner } from "@/components/AffiliateFramerArt";
import { localizedAlternates } from "@/lib/seo";
import { PtBadge, PtHero, PtPrimaryCta, PtShell } from "../_components";

export const metadata: Metadata = {
  title: "Programa de Afiliados | Reacher",
  description: "Participe do programa de afiliados do Reacher e ganhe 20% de comissão mensal por clientes indicados.",
  alternates: localizedAlternates("/affiliate", "pt"),
};

export default function AffiliatePtPage() {
  return (
    <PtShell active="Afiliados">
      <div className="affiliate-reveal">
        <PtHero badge="Programa de Afiliados" title={<>Ganhe por indicar o Reacher</>} copy="Dê um desconto para sua audiência e gere renda recorrente indicando uma plataforma feita para escalar afiliados no TikTok Shop.">
          <div className="mt-8"><PtPrimaryCta href="https://reacher.trackdesk.com/sign-up">Começar a ganhar hoje</PtPrimaryCta></div>
        </PtHero>
      </div>
      <CommissionBanner locale="pt" />
      <section className="bg-white px-6 pb-[72px] pt-[56px] text-center">
        <div className="mx-auto max-w-[1120px]">
          <PtBadge>Como se tornar afiliado</PtBadge>
          <h2 className="mx-auto mt-6 max-w-[720px] text-[40px] font-semibold leading-[1.08] tracking-[-0.052em] text-[#05070d] md:text-[56px]">Comece sua jornada como afiliado Reacher</h2>
          <p className="mt-5 text-[21px] font-medium text-black/52">Fácil de entrar. Fácil de acompanhar. Fácil de ganhar.</p>
          <div className="mt-10 grid gap-7 md:grid-cols-3">
            <AffiliateStepCard step="Passo 1" title="Cadastre-se" copy={<>Entre no programa em <br /><span className="font-medium text-[#3559e9]">reacher.trackdesk.com/sign-up</span></>} type="signup" delay="0.05s" />
            <AffiliateStepCard step="Passo 2" title="Compartilhe" copy="Acesse seu portal e use seu link exclusivo para indicar marcas interessadas no Reacher." type="link" delay="0.17s" />
            <AffiliateStepCard step="Passo 3" title="Receba" copy="Ganhe 20% de comissão mensal por cada cliente que contratar usando sua indicação." type="done" delay="0.29s" />
          </div>
          <div className="mx-auto mt-9 max-w-[1000px] space-y-3 text-center text-[16px] italic leading-7 text-black/58">
            <p>*A pessoa indicada precisa se cadastrar usando seu link exclusivo para que a indicação seja atribuída.</p>
            <p>*Pagamentos por autoindicação não são elegíveis; o programa é para indicar outras marcas.</p>
          </div>
        </div>
      </section>
    </PtShell>
  );
}
