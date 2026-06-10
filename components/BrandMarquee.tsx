import Image from "next/image";
import { brandLogos, ycIcon } from "@/lib/brandLogos";

/** Animated "Trusted by 1000+ brands" two-row logo marquee (reused on homepage + /customers). */
export default function BrandMarquee() {
  const half = Math.ceil(brandLogos.length / 2);
  const rows = [brandLogos.slice(0, half), brandLogos.slice(half)];
  return (
    <div className="px-6 py-14">
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[14px] text-[#5e6573] md:text-[15.4px]">
        <span>
          Trusted by over <strong className="font-bold text-[#222633]">1000+</strong> brands
        </span>
        <Image src={ycIcon} alt="Y Combinator" width={20} height={20} className="h-5 w-5" />
        <span>
          Backed by <strong className="font-bold text-[#222633]">Y Combinator</strong>
        </span>
      </div>
      <div className="mt-9 w-full [mask-image:linear-gradient(to_right,transparent,#000_7%,#000_93%,transparent)]">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-6 md:gap-8">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="group flex overflow-hidden">
              <div
                className={`flex w-max shrink-0 items-center ${rowIndex === 0 ? "animate-marquee-left" : "animate-marquee-right"} group-hover:[animation-play-state:paused]`}
              >
                {[...row, ...row].map((src, index) => (
                  <span key={`${src}-${index}`} className="flex w-[112px] shrink-0 items-center justify-center px-4 md:w-[172px] md:px-7">
                    <Image
                      src={src}
                      alt=""
                      width={240}
                      height={144}
                      sizes="172px"
                      quality={100}
                      className="h-auto max-h-[26px] w-auto max-w-full object-contain opacity-70 [filter:grayscale(1)_sepia(1)_hue-rotate(188deg)_saturate(1.8)_brightness(0.92)] md:max-h-[38px]"
                    />
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
