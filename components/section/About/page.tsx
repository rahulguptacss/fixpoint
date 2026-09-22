import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { AboutData } from "../../types";

export default function About({ data }: { data: AboutData }) {
  return (
    <section className="py-16 bg-white" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-[45%]">
            <p className="text-[#1558C0] font-bold text-[14px] uppercase tracking-widest mb-2 md:mb-4">
              {data.subtitle}
            </p>
            <h2 className="text-[#021731] text-[36px] md:text-[42px] font-bold leading-[1.15] mb-4 md:mb-6 tracking-tight">
              {data.title}
            </h2>
            <p className="text-[#4A5568] text-[17px] leading-[1.8] mb-6 md:mb-8">{data.description}</p>
            <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10">
              {data.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-[#021731] font-medium text-[17px]">
                  <CheckCircle2 className="w-6 h-6 text-[#1877F2] mr-3 shrink-0" strokeWidth={2} aria-hidden />
                  {feature.text}
                </li>
              ))}
            </ul>
            <Link
              href={data.buttonLink}
              className="inline-block bg-[#1558C0] hover:bg-blue-700 text-white font-semibold text-[16.5px] py-[14px] px-[36px] rounded-md"
            >
              {data.buttonText}
            </Link>
          </div>

          <div className="w-full lg:w-[55%] relative mt-12 lg:mt-0">
            <div className="flex items-center">
              <div className="w-[70%] relative z-0">
                <Image
                  src={data.images[0]}
                  alt="Repair technician working on a device"
                  width={780}
                  height={550}
                  loading="lazy"
                  sizes="(max-width: 1024px) 70vw, 40vw"
                  className="w-full h-[320px] sm:h-[550px] object-cover rounded-[24px] shadow-md"
                />
              </div>
              <div className="w-[40%] flex flex-col gap-6 -ml-[10%] relative z-10">
                <Image
                  src={data.images[1]}
                  alt="Repair store interior"
                  width={420}
                  height={240}
                  loading="lazy"
                  sizes="(max-width: 1024px) 40vw, 22vw"
                  className="w-full h-[140px] sm:h-[240px] object-cover rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.15)] border-[8px] border-white bg-white"
                />
                <Image
                  src={data.images[2]}
                  alt="Close-up of a phone repair"
                  width={420}
                  height={240}
                  loading="lazy"
                  sizes="(max-width: 1024px) 40vw, 22vw"
                  className="w-full h-[140px] sm:h-[240px] object-cover rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.15)] border-[8px] border-white bg-white"
                />
              </div>
            </div>

            <div className="absolute -bottom-6 -left-2 sm:-bottom-10 sm:-left-10 bg-gradient-to-b from-[#1877F2] to-[#0A4B9F] rounded-2xl p-6 flex flex-col items-center justify-center text-center z-20 w-[140px] h-[150px] sm:w-[170px] sm:h-[180px] shadow-2xl">
              <span className="text-white text-[40px] sm:text-[52px] font-bold leading-none mb-3">
                {data.experienceYears}
              </span>
              <span className="text-white/90 text-[14px] sm:text-[16px] font-normal leading-relaxed whitespace-pre-line">
                {data.experienceText.replace(" ", "\n")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
