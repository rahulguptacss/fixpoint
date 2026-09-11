import React from 'react';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import { ServiceDetailData, ServiceDetailItem } from '../../types';

export default function ServiceDetail({
  data,
  currentSlug,
}: {
  data: ServiceDetailData;
  currentSlug: string;
}) {
  const { sidebar } = data;
  const item: ServiceDetailItem = data.items.find((s) => s.slug === currentSlug) || data.items[0];
  if (!item) return null;

  return (
    <section
      className="py-6 sm:py-8 md:py-12 lg:py-14 bg-white"
      style={{ fontFamily: 'var(--font-inter), sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          <div className="flex-1 min-w-0 order-1 lg:order-2 space-y-6 sm:space-y-8">
            <div className="overflow-hidden rounded-2xl md:rounded-[24px]">
              <img
                src={item.heroImage}
                alt={item.title}
                className="w-full h-[220px] sm:h-[300px] md:h-[380px] object-cover"
              />
            </div>

            <div>
              <h2 className="text-[#021731] text-[26px] sm:text-[32px] md:text-[36px] font-extrabold mb-4">
                {item.title}
              </h2>
              <p className="text-[#4A5568] text-[15px] sm:text-[16px] leading-relaxed mb-4">
                {item.description}
              </p>
              <p className="text-[#4A5568] text-[15px] sm:text-[16px] leading-relaxed mb-6">
                {item.body}
              </p>
              <ul className="space-y-3">
                {item.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-[#021731] text-[15px]">
                    <LucideIcons.ArrowRight className="w-5 h-5 text-[#1877F2] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {item.gallery.map((src, idx) => (
                <div key={src + idx} className="overflow-hidden rounded-2xl">
                  <img src={src} alt={`${item.title} ${idx + 1}`} className="w-full h-[180px] sm:h-[210px] object-cover" />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {item.highlights.map((highlight) => {
                const Icon = (LucideIcons as any)[highlight.icon] || LucideIcons.CheckCircle2;
                return (
                  <div key={highlight.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#EEF4FF] flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-[#1877F2]" />
                    </div>
                    <div>
                      <h4 className="text-[#021731] font-bold text-[16px] sm:text-[17px] mb-1">{highlight.title}</h4>
                      <p className="text-[#4A5568] text-[13px] sm:text-[14px] leading-relaxed">{highlight.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <aside className="w-full lg:w-[300px] xl:w-[320px] shrink-0 order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5 lg:sticky lg:top-[90px]">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgba(2,23,49,0.06)] p-4 sm:p-5">
                <h3 className="text-[#021731] font-bold text-[18px] sm:text-[20px] mb-4">{sidebar.services.title}</h3>
                <ul className="space-y-2.5">
                  {sidebar.services.items.map((navItem) => {
                    const Icon = (LucideIcons as any)[navItem.icon] || LucideIcons.Wrench;
                    const isActive = navItem.link.endsWith(`/${item.slug}`);
                    return (
                      <li key={navItem.title}>
                        <Link
                          href={navItem.link}
                          className={`flex items-center justify-between rounded-xl px-3 sm:px-4 py-3 sm:py-3.5 transition-all ${
                            isActive
                              ? 'bg-[#1877F2] text-white shadow-md'
                              : 'bg-[#F4F7FC] text-[#021731] hover:bg-[#E8EEF8]'
                          }`}
                        >
                          <span className="flex items-center gap-2.5 font-medium text-[14px] sm:text-[15px] min-w-0">
                            <Icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-white' : 'text-[#1877F2]'}`} strokeWidth={2} />
                            <span className="truncate">{navItem.title}</span>
                          </span>
                          <LucideIcons.ArrowRight className="w-4 h-4 shrink-0 ml-2" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgba(2,23,49,0.06)] p-5 sm:p-6">
                <h3 className="text-[#021731] font-bold text-[18px] sm:text-[20px] mb-3">{sidebar.getStarted.title}</h3>
                <p className="text-[#4A5568] text-[13px] sm:text-[14px] leading-relaxed mb-5">
                  {sidebar.getStarted.description}
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <LucideIcons.Phone className="w-5 h-5 text-[#1877F2] mt-0.5 shrink-0" />
                    <span className="text-[#021731] text-[13px] sm:text-[14px] font-medium break-all">{sidebar.getStarted.phone}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <LucideIcons.Mail className="w-5 h-5 text-[#1877F2] mt-0.5 shrink-0" />
                    <span className="text-[#021731] text-[13px] sm:text-[14px] font-medium break-all">{sidebar.getStarted.email}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <LucideIcons.MapPin className="w-5 h-5 text-[#1877F2] mt-0.5 shrink-0" />
                    <span className="text-[#021731] text-[13px] sm:text-[14px] leading-relaxed">{sidebar.getStarted.address}</span>
                  </li>
                </ul>
                <Link
                  href={sidebar.getStarted.buttonLink}
                  className="block w-full text-center bg-[#1877F2] hover:bg-blue-600 text-white font-bold text-[15px] py-3 rounded-xl transition-colors"
                >
                  {sidebar.getStarted.buttonText}
                </Link>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgba(2,23,49,0.06)] p-4 sm:p-5">
                <h3 className="text-[#021731] font-bold text-[18px] sm:text-[20px] mb-4">{sidebar.downloads.title}</h3>
                <ul className="space-y-2.5">
                  {sidebar.downloads.items.map((download) => {
                    const Icon = (LucideIcons as any)[download.icon] || LucideIcons.FileText;
                    return (
                      <li key={download.title}>
                        <a
                          href={download.link}
                          download
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between rounded-xl bg-[#F4F7FC] hover:bg-[#E8EEF8] px-3 sm:px-4 py-3 sm:py-3.5 transition-colors"
                        >
                          <span className="flex items-center gap-3 text-[#021731] font-medium text-[14px] sm:text-[15px] min-w-0">
                            <Icon className="w-5 h-5 text-[#1877F2] shrink-0" />
                            <span className="min-w-0">
                              {download.title}
                              <span className="block text-[12px] font-normal text-[#64748B]">Download</span>
                            </span>
                          </span>
                          <LucideIcons.CloudDownload className="w-5 h-5 text-[#1877F2] shrink-0" />
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
