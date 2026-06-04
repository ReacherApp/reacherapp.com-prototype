import type { Metadata } from "next";
import { ReacherFooter, ReacherHeader } from "@/components/ReacherChrome";
import { localizedAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "TikTok Shop Masterclass | Reacher",
  description:
    "Learn how to get your TikTok Shop brand from 0 to 50K and beyond with Reacher’s TikTok Shop masterclass.",
  alternates: localizedAlternates("/masterclass"),
};

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[15px] font-medium text-[#6b7280]">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="h-[44px] w-full rounded-[9px] border border-white/80 bg-white/88 px-4 text-[15px] text-black shadow-[inset_0_1px_1px_rgba(15,23,42,0.03)] outline-none placeholder:text-[#a9afb9] focus:border-[#3559e9]"
      />
    </label>
  );
}

function EarlyAccessCard() {
  return (
    <aside className="relative mx-auto w-full max-w-[470px] rounded-[25px] border border-white/70 bg-[linear-gradient(145deg,rgba(255,255,255,0.74),rgba(230,238,255,0.5))] p-7 shadow-[0_18px_54px_rgba(53,89,233,0.1)] backdrop-blur md:p-10">
      <h2 className="text-center text-[26px] font-semibold tracking-[-0.025em] text-black md:text-[28px]">
        Get early access
      </h2>
      <form className="mt-8 space-y-4">
        <Field label="Name" placeholder="Jack Reacher" />
        <Field label="Email" placeholder="jack@reacher.com" type="email" />
        <Field label="Phone" placeholder="(555)555-5555" type="tel" />
        <button
          type="button"
          className="mt-2 flex h-[46px] w-full items-center justify-center rounded-[10px] bg-[#3559e9] text-[16px] font-semibold text-white shadow-[0_8px_20px_rgba(53,89,233,0.18),inset_0_2px_4px_rgba(255,255,255,0.22)] transition hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </aside>
  );
}

export default function MasterclassPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-black">
      <ReacherHeader active="Masterclass" />

      <section className="relative overflow-hidden bg-[#eef4ff] px-6 pb-[48px] pt-[94px] md:pt-[96px]">
        <div className="absolute left-1/2 top-[-190px] h-[620px] w-[88%] max-w-[1080px] -translate-x-1/2 rounded-[100%] bg-[#335CFF]/14 blur-[112px]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(219,229,255,0.72)_0%,rgba(239,244,255,0.86)_46%,#ffffff_100%)]" />
        <div className="relative z-10 mx-auto max-w-[1280px]">
          <div className="grid items-center gap-10 md:grid-cols-[1fr_470px] lg:gap-[82px]">
            <div className="max-w-[620px] text-center md:text-left">
              <span className="inline-flex rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#3559e9] shadow-[0_12px_28px_rgba(53,89,233,0.10)] ring-1 ring-white/70">
                Masterclass
              </span>
              <h1 className="mt-7 text-[50px] font-semibold leading-[1.02] tracking-[-0.055em] text-[#05070d] md:text-[68px]">
                TikTok Shop
                <br />
                Masterclass
              </h1>
              <p className="mt-7 max-w-[575px] text-[18px] leading-[1.55] text-[#252b35]/84 md:text-[20px] md:leading-[1.5]">
                In this class you’ll learn absolutely everything you need to know to get your TikTok shop brand off the ground from 0 to 50K and more. We&apos;ll discuss everything from how to find affiliates, activating them, driving virality and ultimately achieving insane sales numbers. Get your pen and paper out and take some notes because this class will change your brand and life forever.
              </p>
            </div>
            <EarlyAccessCard />
          </div>

          <div className="mx-auto mt-[34px] max-w-[630px] overflow-hidden bg-black shadow-[0_8px_28px_rgba(15,23,42,0.08)]">
            <div className="aspect-[16/9] w-full">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/lDVdoURbUi4?rel=0"
                title="TikTok Shop Brand Success Webinar"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <ReacherFooter />
    </main>
  );
}
