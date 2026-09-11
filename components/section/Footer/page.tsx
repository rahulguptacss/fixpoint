import React from 'react';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FooterData } from '../../types';
import MobileAccordion from '../../shared/MobileAccordion';

export default function Footer({ data }: { data: FooterData }) {
  return (
    <footer className="bg-[#020D1A] text-gray-300 pt-10 border-t-0 relative">
      {/* Background overlay for faint map pattern if needed */}
      <div className="absolute inset-0 bg-[url('/img/footerbg.png')] bg-cover bg-center opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-0 md:gap-y-8 gap-x-8 lg:gap-12 mb-8">

          {/* About Column */}
          <div className="lg:col-span-1 mb-8 md:mb-0">
            <Link href="/" className="mb-3 block">
              <img src="/logo/ftr.png" alt="FixPoint" className="h-16 md:h-20 object-contain" />
            </Link>
            <p className="text-[#A0AABF] mb-4 leading-relaxed whitespace-pre-line">
              {data.description}
            </p>
            <div className="flex space-x-3">
              {data.socialLinks.map((social, idx) => {
                let IconComponent: React.ElementType = LucideIcons.Link;
                if (social.platform === 'facebook') IconComponent = FaFacebook;
                if (social.platform === 'twitter') IconComponent = FaXTwitter;
                if (social.platform === 'instagram') IconComponent = FaInstagram;
                if (social.platform === 'youtube') IconComponent = FaYoutube;

                return (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#1e3450] text-white p-2.5 rounded-full hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300"
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:ml-8">
            {/* Mobile Accordion */}
            <MobileAccordion title={data.labels.quickLinks}>
              <ul className="space-y-3 pl-1">
                {data.quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="text-[#A0AABF] text-[15px] hover:text-[#1877F2] transition-colors flex items-center">
                      <LucideIcons.ChevronRight className="w-3.5 h-3.5 mr-3 text-[#1877F2]" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </MobileAccordion>
            {/* Desktop */}
            <div className="hidden md:block">
              <h3 className="text-white text-[18px] font-bold mb-6">{data.labels.quickLinks}</h3>
              <ul className="space-y-4">
                {data.quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="text-[#A0AABF] hover:text-[#1877F2] transition-colors flex items-center">
                      <LucideIcons.ChevronRight className="w-4 h-4 mr-3 text-[#1877F2]" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Services Links */}
          <div>
            {/* Mobile Accordion */}
            <MobileAccordion title={data.labels.ourServices}>
              <ul className="space-y-3 pl-1">
                {data.servicesLinks.map((link, idx) => {
                  const IconComponent = (LucideIcons as any)[(link as any).icon || "ChevronRight"] || LucideIcons.ChevronRight;
                  return (
                    <li key={idx}>
                      <Link href={link.href} className="text-[#A0AABF] text-[15px] hover:text-[#1877F2] transition-colors flex items-center">
                        <IconComponent className="w-3.5 h-3.5 mr-3 text-[#1877F2]" />
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </MobileAccordion>
            {/* Desktop */}
            <div className="hidden md:block">
              <h3 className="text-white text-[18px] font-bold mb-6">{data.labels.ourServices}</h3>
              <ul className="space-y-4">
                {data.servicesLinks.map((link, idx) => {
                  const IconComponent = (LucideIcons as any)[(link as any).icon || "ChevronRight"] || LucideIcons.ChevronRight;
                  return (
                    <li key={idx}>
                      <Link href={link.href} className="text-[#A0AABF] hover:text-[#1877F2] transition-colors flex items-center">
                        <IconComponent className="w-4 h-4 mr-3 text-[#1877F2]" />
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            {/* Mobile Accordion */}
            <MobileAccordion title={data.labels.contactUs} isLast={true}>
              <ul className="space-y-4 pl-1">
                <li className="flex items-start">
                  <LucideIcons.MapPin className="w-5 h-5 mr-3 text-[#1877F2] flex-shrink-0 mt-0.5" />
                  <span className="text-[#A0AABF] text-[15px] whitespace-pre-line">{data.contact.address}</span>
                </li>
                <li className="flex items-start">
                  <LucideIcons.Phone className="w-5 h-5 mr-3 text-[#1877F2] flex-shrink-0 mt-0.5" />
                  <span className="text-[#A0AABF] text-[15px]">{data.contact.phone}</span>
                </li>
                <li className="flex items-start">
                  <LucideIcons.Mail className="w-5 h-5 mr-3 text-[#1877F2] flex-shrink-0 mt-0.5" />
                  <span className="text-[#A0AABF] text-[15px]">{data.contact.email}</span>
                </li>
                <li className="flex items-start">
                  <LucideIcons.Clock className="w-5 h-5 mr-3 text-[#1877F2] flex-shrink-0 mt-0.5" />
                  <span className="text-[#A0AABF] text-[15px]">{data.contact.workingHours}</span>
                </li>
              </ul>
            </MobileAccordion>
            {/* Desktop */}
            <div className="hidden md:block">
              <h3 className="text-white text-[18px] font-bold mb-6">{data.labels.contactUs}</h3>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <LucideIcons.MapPin className="w-5 h-5 mr-3 text-[#1877F2] flex-shrink-0 mt-0.5" />
                  <span className="text-[#A0AABF] whitespace-pre-line">{data.contact.address}</span>
                </li>
                <li className="flex items-start">
                  <LucideIcons.Phone className="w-5 h-5 mr-3 text-[#1877F2] flex-shrink-0 mt-0.5" />
                  <span className="text-[#A0AABF]">{data.contact.phone}</span>
                </li>
                <li className="flex items-start">
                  <LucideIcons.Mail className="w-5 h-5 mr-3 text-[#1877F2] flex-shrink-0 mt-0.5" />
                  <span className="text-[#A0AABF]">{data.contact.email}</span>
                </li>
                <li className="flex items-start">
                  <LucideIcons.Clock className="w-5 h-5 mr-3 text-[#1877F2] flex-shrink-0 mt-0.5" />
                  <span className="text-[#A0AABF]">{data.contact.workingHours}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-[18px] font-bold mb-6">{data.labels.newsletter}</h3>
            <p className="text-[#A0AABF] mb-6 whitespace-pre-line">
              {data.newsletter.description}
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder={data.labels.newsletterPlaceholder}
                className="bg-[#0A1A2F] border border-[#1e3450] border-r-0 text-white px-4 py-3 rounded-l-lg w-full focus:outline-none focus:border-[#1877F2] transition-colors text-sm"
              />
              <button className="bg-[#1877F2] hover:bg-blue-600 text-white px-5 py-3 rounded-r-lg transition-colors flex items-center justify-center">
                <LucideIcons.Send className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Features Box */}
        <div className="border border-[#1e3450] bg-transparent rounded-2xl py-4 px-2 lg:px-6 md:py-4 md:px-8 mb-8">
          <div className="grid grid-cols-4 lg:flex lg:flex-row justify-between items-start lg:items-center divide-x divide-[#1e3450]">
            {data.bottomFeatures.map((feature, idx) => {
              const IconComponent = (LucideIcons as any)[feature.icon] || LucideIcons.Check;
              return (
                <div key={idx} className={`flex flex-col lg:flex-row items-center justify-start lg:justify-start lg:space-x-4 w-full px-1 lg:px-6 first:pl-0 last:pr-0`}>
                  <div className="text-[#1877F2] lg:border lg:border-[#1877F2] lg:bg-[#0A1A2F]/50 lg:p-3.5 rounded-full mb-2 lg:mb-0">
                    <IconComponent className="w-5 h-5 md:w-5 md:h-5" />
                  </div>
                  <div className="text-center lg:text-left">
                    <h4 className="text-white font-bold text-[9px] md:text-[15px] leading-tight mb-1">{feature.title}</h4>
                    <p className="text-[#A0AABF] text-[7px] md:text-[13px] leading-tight line-clamp-2 md:line-clamp-none">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="py-3 border-t border-[#1e3450] text-center md:flex md:justify-between md:text-left">
          <p className="text-[#A0AABF] text-[14px]">{data.copyright}</p>
          <div className="mt-4 md:mt-0 text-[14px] text-[#A0AABF] flex flex-wrap justify-center md:justify-end gap-x-5 gap-y-2">
            <Link href="/warranty-policy" className="hover:text-white transition-colors">Warranty Policy</Link>
            <Link href="/refund-policy" className="hover:text-white transition-colors">Cancellation / Refund Policy</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
