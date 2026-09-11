import React from 'react';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import { BrandsWeRepairData } from '../../types';

export default function BrandsWeRepair({ data }: { data: BrandsWeRepairData }) {
  const { sidebar, mainContent } = data;

  return (
    <section
      className="py-6 sm:py-8 md:py-12 lg:py-14 bg-white"
      style={{ fontFamily: 'var(--font-inter), sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          <div className="flex-1 min-w-0 order-1 lg:order-2 space-y-6 sm:space-y-8">
            <div className="relative overflow-hidden rounded-2xl md:rounded-[28px] bg-[#0A1F5C]">
              <img
                src={mainContent.hero.image}
                alt="Brands we repair"
                className="w-full h-[220px] sm:h-[300px] md:h-[340px] lg:h-[360px] object-cover object-[70%_center] sm:object-right"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#07143A]/80 via-[#07143A]/35 to-transparent sm:from-[#07143A]/50 sm:via-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="px-5 sm:px-8 md:px-12 py-6 max-w-[92%] sm:max-w-[58%] lg:max-w-[48%]">
                  <h2 className="text-white text-[26px] sm:text-[34px] md:text-[42px] lg:text-[46px] font-extrabold leading-[1.15] mb-2 sm:mb-3">
                    {mainContent.hero.titlePart1}
                    <br />
                    <span className="text-[#FFC107]">{mainContent.hero.titleHighlight}</span>
                  </h2>
                  <div className="w-12 sm:w-16 h-[3px] bg-[#FFC107] rounded-full mb-3 sm:mb-5" />
                  <p className="text-white/95 text-[13px] sm:text-[15px] md:text-[17px] leading-relaxed font-medium">
                    {mainContent.hero.description}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-[#1B2A6B] text-[22px] sm:text-[26px] md:text-[32px] font-extrabold leading-tight mb-2">
                {mainContent.brandsSection.title}
              </h2>
              <div className="w-12 h-[3px] bg-[#FFC107] rounded-full mb-3 sm:mb-4" />
              <p className="text-[#64748B] text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed mb-5 sm:mb-8 max-w-2xl">
                {mainContent.brandsSection.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4">
                {mainContent.brandsSection.brands.map((brand) => (
                  <div
                    key={brand.name}
                    className="bg-white border border-[#E6EAF0] rounded-xl sm:rounded-[18px] py-4 sm:py-7 px-2 sm:px-3 flex flex-col items-center justify-center min-h-[108px] sm:min-h-[128px] min-w-0 overflow-hidden"
                  >
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="h-9 sm:h-11 md:h-12 w-auto max-w-[85%] object-contain mb-2 sm:mb-3"
                    />
                    <span className="text-[#334155] text-[12px] sm:text-[13px] md:text-[14px] font-medium text-center leading-tight">
                      {brand.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl md:rounded-[28px] bg-[#F8F3E8]">
              <div className="flex flex-col md:relative">
                <img
                  src={mainContent.moreThanPhones.image}
                  alt="More than phones"
                  className="w-full h-[180px] sm:h-[220px] md:h-auto md:min-h-[280px] lg:min-h-[300px] object-cover object-left"
                />
                <div className="md:absolute md:inset-0 md:flex md:items-center md:justify-end">
                  <div className="w-full md:w-[54%] px-5 py-6 sm:px-8 md:pr-10 lg:pr-12">
                    <h3 className="text-[#1B2A6B] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-extrabold leading-tight mb-2 sm:mb-3">
                      {mainContent.moreThanPhones.title}
                    </h3>
                    <div className="w-12 h-[3px] bg-[#FFC107] rounded-full mb-3 sm:mb-4" />
                    <p className="text-[#4A5568] text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed mb-5 sm:mb-8 max-w-md">
                      {mainContent.moreThanPhones.description}
                    </p>
                    <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-sm">
                      {mainContent.moreThanPhones.devices.map((device) => {
                        const Icon = (LucideIcons as any)[device.icon] || LucideIcons.Smartphone;
                        return (
                          <div key={device.name} className="flex flex-col items-center text-center min-w-0">
                            <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#021731]" strokeWidth={1.5} />
                            <span className="text-[#021731] text-[10px] sm:text-[12px] md:text-[13px] font-medium mt-1.5 sm:mt-2 leading-tight">
                              {device.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1140D0] rounded-2xl md:rounded-[24px] px-5 sm:px-6 md:px-10 py-6 md:py-7 flex flex-col sm:flex-row items-center text-center sm:text-left justify-between gap-5">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                  {(() => {
                    const CtaIcon = (LucideIcons as any)[mainContent.cta.icon] || LucideIcons.Headphones;
                    return <CtaIcon className="w-6 h-7 sm:w-7 sm:h-7 text-white" />;
                  })()}
                </div>
                <div>
                  <h3 className="text-white text-[18px] sm:text-[22px] md:text-[24px] font-bold mb-1">
                    {mainContent.cta.title}
                  </h3>
                  <p className="text-white/80 text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed max-w-xl">
                    {mainContent.cta.description}
                  </p>
                </div>
              </div>
              <Link
                href={mainContent.cta.buttonLink}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#FFC107] hover:bg-[#e6ad00] text-[#021731] font-bold text-[14px] sm:text-[15px] px-6 py-3.5 rounded-lg whitespace-nowrap transition-colors shrink-0"
              >
                {mainContent.cta.buttonText}
                <LucideIcons.ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <aside className="w-full lg:w-[300px] xl:w-[320px] shrink-0 order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5 lg:sticky lg:top-[90px]">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgba(2,23,49,0.06)] p-5 sm:p-6">
                <h3 className="text-[#021731] font-bold text-[18px] sm:text-[20px] mb-3">{sidebar.getInTouch.title}</h3>
                <p className="text-[#4A5568] text-[13px] sm:text-[14px] leading-relaxed mb-5">
                  {sidebar.getInTouch.description}
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <LucideIcons.Phone className="w-5 h-5 text-[#1877F2] mt-0.5 shrink-0" />
                    <span className="text-[#021731] text-[13px] sm:text-[14px] font-medium break-all">{sidebar.getInTouch.phone}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <LucideIcons.Mail className="w-5 h-5 text-[#1877F2] mt-0.5 shrink-0" />
                    <span className="text-[#021731] text-[13px] sm:text-[14px] font-medium break-all">{sidebar.getInTouch.email}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <LucideIcons.MapPin className="w-5 h-5 text-[#1877F2] mt-0.5 shrink-0" />
                    <span className="text-[#021731] text-[13px] sm:text-[14px] leading-relaxed">{sidebar.getInTouch.address}</span>
                  </li>
                </ul>
                <Link
                  href={sidebar.getInTouch.buttonLink}
                  className="block w-full text-center bg-[#FFC107] hover:bg-[#e6ad00] text-[#021731] font-bold text-[15px] py-3 rounded-lg transition-colors"
                >
                  {sidebar.getInTouch.buttonText}
                </Link>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgba(2,23,49,0.06)] p-5 sm:p-6">
                <h3 className="text-[#021731] font-bold text-[18px] sm:text-[20px] mb-4">{sidebar.whyChoose.title}</h3>
                <ul className="space-y-3">
                  {sidebar.whyChoose.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <LucideIcons.CheckCircle2 className="w-5 h-5 text-[#1877F2] shrink-0 mt-0.5" />
                      <span className="text-[#4A5568] text-[13px] sm:text-[14px]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgba(2,23,49,0.06)] p-4 sm:p-5">
                <h3 className="text-[#021731] font-bold text-[18px] sm:text-[20px] mb-4">{sidebar.downloads.title}</h3>
                <ul className="space-y-2.5">
                  {sidebar.downloads.items.map((item) => {
                    const Icon = (LucideIcons as any)[item.icon] || LucideIcons.FileText;
                    return (
                      <li key={item.title}>
                        <a
                          href={item.link}
                          download
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between rounded-xl bg-[#F4F7FC] hover:bg-[#E8EEF8] px-3 sm:px-4 py-3 sm:py-3.5 transition-colors"
                        >
                          <span className="flex items-center gap-3 text-[#021731] font-medium text-[14px] sm:text-[15px] min-w-0">
                            <Icon className="w-5 h-5 text-[#1877F2] shrink-0" />
                            <span className="min-w-0">
                              {item.title}
                              <span className="block text-[12px] font-normal text-[#64748B]">Download</span>
                            </span>
                          </span>
                          <LucideIcons.Download className="w-4 h-4 text-[#1877F2] shrink-0" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
