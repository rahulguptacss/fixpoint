import Link from "next/link";
import Image from "next/image";
import { Settings, Smartphone, Battery, Cpu, Wrench } from "lucide-react";
import { ServicesData } from "../../types";

const serviceIcons: Record<string, React.ElementType> = {
  Smartphone,
  Battery,
  Cpu,
  Settings,
  Wrench,
};

export default function Services({ data }: { data: ServicesData }) {
  return (
    <section className="pt-10 pb-12 bg-[#F8FBFF] overflow-hidden" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-block relative mb-2">
            <p className="text-[#021731] font-bold text-[14px] uppercase tracking-widest pb-1">{data.subtitle}</p>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[40px] h-[2px] bg-[#FFB800]" />
          </div>
          <h2 className="text-[#021731] text-[36px] md:text-[50px] font-extrabold leading-[1.1] md:leading-[1.05] tracking-tight mt-3">
            {data.titlePart1}
            <span className="text-[#1877F2]">{data.titleHighlight}</span>
            <br className="hidden md:block" />
            {data.titlePart2}
            {data.titleHighlight2 && <span className="text-[#1877F2]">{data.titleHighlight2}</span>}
            {data.titlePart3}
          </h2>
          <div className="mt-5 flex items-center justify-center space-x-3">
            <div className="w-12 md:w-16 h-[2px] bg-[#021731]" />
            <div className="relative flex items-center justify-center">
              <Settings className="w-7 h-7 md:w-8 md:h-8 text-[#1558C0] fill-[#1558C0]" aria-hidden />
            </div>
            <div className="w-12 md:w-16 h-[2px] bg-[#FFB800]" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-5 lg:gap-6">
          {data.items.map((item) => {
            const IconComponent = serviceIcons[item.icon] || Wrench;
            const isYellow = item.id === 2 || item.id === 4;
            const borderColor = isYellow ? "border-[#FFB800]" : "border-[#0056D2]";
            const bgColor = isYellow ? "bg-[#FFB800]" : "bg-[#0056D2]";

            return (
              <Link
                href={`/services/${item.slug || "screen-repair"}`}
                key={item.id}
                className="block bg-white rounded-[32px] overflow-visible shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgb(0,0,0,0.14)] transition-shadow group"
              >
                <div className="p-3 pb-0">
                  <div className={`relative h-[240px] md:h-[220px] rounded-[26px] border-[3px] ${borderColor}`}>
                    <div className="relative w-full h-full rounded-[22px] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <div
                      className={`absolute -bottom-10 left-1/2 -translate-x-1/2 ${bgColor} text-white p-4 rounded-full border-[8px] border-white shadow-md z-10`}
                    >
                      <IconComponent className="w-8 h-8" strokeWidth={2} aria-hidden />
                    </div>
                  </div>
                </div>
                <div className="pt-12 px-6 lg:px-8 pb-6 text-center">
                  <h3 className="text-[20px] lg:text-[22px] font-bold text-[#021731] group-hover:text-[#1877F2]">
                    {item.title}
                  </h3>
                  <div className={`w-8 h-[3px] mx-auto mt-1.5 mb-2 rounded-full ${bgColor}`} />
                  <p className="text-[#4A5568] text-[14px] lg:text-[15px] leading-relaxed">{item.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
