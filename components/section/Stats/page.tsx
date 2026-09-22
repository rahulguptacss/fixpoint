import { Activity, Smartphone, Users, Trophy, Smile } from "lucide-react";
import { StatsData } from "../../types";

const statIcons: Record<string, React.ElementType> = {
  Smartphone,
  Users,
  Trophy,
  Smile,
  Activity,
};

export default function Stats({ data }: { data: StatsData }) {
  return (
    <section
      className="relative py-12 md:py-16 bg-[#021731] overflow-hidden"
      style={{ fontFamily: "var(--font-inter), sans-serif" }}
    >
      <div
        className="absolute inset-0 hidden md:block bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url('/hero/herocover.jpg')" }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {data.items.map((stat, index) => {
            const IconComponent = statIcons[stat.icon] || Activity;
            let borderClasses = "border-[#1877F2]/30 ";
            if (index === 0) borderClasses += "border-r border-b md:border-b-0";
            else if (index === 1) borderClasses += "border-b md:border-b-0 md:border-r";
            else if (index === 2) borderClasses += "border-r";
            else borderClasses = "";

            return (
              <div
                key={stat.id}
                className={`flex flex-col items-center justify-center text-center py-10 px-2 md:py-4 md:px-4 ${borderClasses}`}
              >
                <div className="text-[#1877F2] mb-5 md:mb-6">
                  <IconComponent className="w-10 h-10 md:w-11 md:h-11" strokeWidth={1.5} aria-hidden />
                </div>
                <h3 className="text-white text-[32px] md:text-[42px] lg:text-[46px] font-bold leading-tight mb-2 tracking-tight">
                  {stat.value}
                </h3>
                <p className="text-white font-medium tracking-wide text-[14px] md:text-[16px]">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
