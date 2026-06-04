import type { Metadata } from "next";
import Link from "next/link";
import { AffiliateStepCard, CommissionBanner } from "@/components/AffiliateFramerArt";
import { PageBadge, ReacherFooter, ReacherHeader } from "@/components/ReacherChrome";
import { localizedAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Affiliate Program | Reacher",
  description: "Join the Reacher affiliate program and earn 20% monthly commission for referred clients.",
  alternates: localizedAlternates("/affiliate"),
};

export default function AffiliatePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-black">
      <ReacherHeader active="Affiliate" />

      <section className="affiliate-reveal relative overflow-hidden bg-white px-6 pb-[24px] pt-[112px] text-center md:pt-[124px]">
        <div className="absolute inset-x-0 bottom-0 h-[330px] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#edf4ff_62%,#edf4ff_100%)]" />
        <div className="relative z-10 mx-auto max-w-[920px]">
          <p className="text-[18px] font-semibold text-[#3559e9]">Affiliate Program</p>
          <h1 className="mx-auto mt-5 max-w-[760px] text-[50px] font-semibold leading-[1.06] tracking-[-0.055em] text-[#05070d] md:text-[68px]">
            Get paid for sharing
            <br />
            Reacher with others
          </h1>
          <p className="mx-auto mt-6 max-w-[620px] text-[19px] leading-[1.55] text-black/66">
            With our affiliate program, you can give your friends a discount and earn extra passive income just by letting your friends know about Reacher.
          </p>
          <Link
            href="https://reacher.trackdesk.com/sign-up"
            className="mt-8 inline-flex h-[52px] items-center justify-center rounded-full bg-[#3559e9] px-8 text-[17px] font-semibold !text-white shadow-[0_10px_25px_rgba(53,89,233,0.22),inset_0_2px_4px_rgba(255,255,255,0.22)] transition hover:bg-blue-700"
            style={{ color: "#fff" }}
          >
            Start Earning Today
          </Link>
        </div>
      </section>

      <CommissionBanner />

      <section className="bg-white px-6 pb-[72px] pt-[56px] text-center">
        <div className="mx-auto max-w-[1120px]">
          <PageBadge>How to become an affiliate</PageBadge>
          <h2 className="mx-auto mt-6 max-w-[720px] text-[40px] font-semibold leading-[1.08] tracking-[-0.052em] text-[#05070d] md:text-[56px]">
            Start your Reacher
            <br />
            affiliate journey today
          </h2>
          <p className="mt-5 text-[21px] font-medium text-black/52">Easy to join, easy to earn.</p>

          <div className="mt-10 grid gap-7 md:grid-cols-3">
            <AffiliateStepCard
              step="Step 1"
              title="Sign Up"
              copy={<>Join Reacher&apos;s Affiliate Referral Program at <br /><span className="font-medium text-[#3559e9]">reacher.trackdesk.com/sign-up</span></>}
              type="signup"
              delay="0.05s"
            />
            <AffiliateStepCard
              step="Step 2"
              title="Link"
              copy={<>Access your affiliate portal and set up your unique 20% commission link for referrals to enter in checkout.</>}
              type="link"
              delay="0.17s"
            />
            <AffiliateStepCard
              step="Step 3"
              title="Done"
              copy={<>Earn a 20% monthly commission for every purchase made with your discount code.</>}
              type="done"
              delay="0.29s"
            />
          </div>

          <div className="mx-auto mt-9 max-w-[1000px] space-y-3 text-center text-[16px] italic leading-7 text-black/58">
            <p>*The person you refer must sign up using your unique link in order to count your referral. Upon plan purchasing, you can see conversions on the portal.</p>
            <p>*Self referral payments will not be awarded, this program is to let other people know about Reacher who will be paying for their own subscription with your link.</p>
          </div>
        </div>
      </section>

      <ReacherFooter />
    </main>
  );
}
