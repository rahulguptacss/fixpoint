import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroData } from "../../types";
import HeroVideoButton from "./HeroVideoButton";

export default function Hero({ data }: { data: HeroData }) {
  return (
    <section
      className="relative w-full min-h-[520px] md:min-h-[560px] bg-black text-white overflow-hidden"
      style={{ fontFamily: "var(--font-inter), sans-serif" }}
    >
      <picture>
        <source media="(max-width: 768px)" srcSet="/hero/herocover-mobile.jpg" type="image/jpeg" />
        <img
          src="/hero/herocover.jpg"
          alt="Technician repairing a smartphone"
          width={1400}
          height={689}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-[80%_center] md:object-center brightness-[0.8]"
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-[60%] lg:w-[50%]">
          <p className="inline-block bg-[#1558C0] text-white text-[13px] font-semibold px-4 py-1.5 rounded-md mb-6">
            {data.badge}
          </p>
          <h1 className="text-[40px] sm:text-[56px] md:text-[64px] font-bold leading-[1.1] mb-6 tracking-tight">
            {data.titlePart1}
            <span className="text-[#4DA3FF]">.</span>
            <br />
            {data.titleHighlight}
            <span className="text-[#4DA3FF]">.</span>
          </h1>
          <p className="text-[18px] text-gray-200 mb-10 leading-relaxed max-w-lg">{data.description}</p>
          <div className="flex flex-col md:flex-row gap-6 md:gap-4 items-start md:items-center">
            <Link
              href={data.buttonPrimary.href}
              className="inline-flex w-fit bg-[#1558C0] hover:bg-blue-700 text-white font-semibold text-[16px] py-[14px] px-[32px] rounded-md items-center"
            >
              {data.buttonPrimary.label}
              <ArrowRight className="w-5 h-5 ml-2" aria-hidden />
            </Link>
            <HeroVideoButton label={data.buttonSecondary.label} videoUrl={data.videoUrl} />
          </div>
        </div>
      </div>
    </section>
  );
}
