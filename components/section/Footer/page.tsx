import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, MapPin, Phone, Mail, Clock, Send, Check, ShieldCheck, UserCog, Award, Zap, Smartphone, Battery, Droplet, Settings, Plug } from 'lucide-react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FooterData } from '../../types';
import MobileAccordion from '../../shared/MobileAccordion';

const footerIcons: Record<string, React.ElementType> = {
  ChevronRight, MapPin, Phone, Mail, Clock, Send, Check, ShieldCheck, UserCog, Award, Zap, Smartphone, Battery, Droplet, Settings, Plug,
};

export default function Footer({ data }: { data: FooterData }) {
  return (
    <footer className="bg-[#020D1A] text-[#D5DCE6] pt-10 border-t-0 relative">
      {/* Background overlay for faint map pattern if needed */}
      <div className="absolute inset-0 bg-[url('/img/footerbg.jpg')] bg-cover bg-center opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-0 md:gap-y-8 gap-x-8 lg:gap-12 mb-8">

          {/* About Column */}
          <div className="lg:col-span-1 mb-8 md:mb-0">
            <Link href="/" className="mb-3 block">
              <Image src="/logo/ftr.png" alt="FixPoint" width={160} height={80} className="h-16 md:h-20 w-auto object-contain" />
            </Link>
            <p className="text-[#C9D2DE] mb-4 leading-relaxed whitespace-pre-line">
              {data.description}
            </p>
            <div className="flex space-x-3">
              {data.socialLinks.map((social, idx) => {
                let IconComponent: React.ElementType = FaFacebook;
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
                    className="border border-[#1e3450] text-white p-2.5 min-w-11 min-h-11 rounded-full hover:bg-[#1558C0] hover:border-[#1558C0] transition-all duration-300 inline-flex items-center justify-center"
                    aria-label={social.platform}
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
                    <Link href={link.href} className="text-[#C9D2DE] text-[15px] hover:text-[#1877F2] transition-colors flex items-center">
                      <ChevronRight className="w-3.5 h-3.5 mr-3 text-[#1877F2]" />
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
                    <Link href={link.href} className="text-[#C9D2DE] hover:text-[#1877F2] transition-colors flex items-center">
                      <ChevronRight className="w-4 h-4 mr-3 text-[#1877F2]" />
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
                  const IconComponent = footerIcons[(link as any).icon || "ChevronRight"] || ChevronRight;
                  return (
                    <li key={idx}>
                      <Link href={link.href} className="text-[#C9D2DE] text-[15px] hover:text-[#1877F2] transition-colors flex items-center">
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
                  const IconComponent = footerIcons[(link as any).icon || "ChevronRight"] || ChevronRight;
                  return (
                    <li key={idx}>
                      <Link href={link.href} className="text-[#C9D2DE] hover:text-[#1877F2] transition-colors flex items-center">
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
                  <MapPin className="w-5 h-5 mr-3 text-[#1877F2] flex-shrink-0 mt-0.5" />
                  <span className="text-[#C9D2DE] text-[15px] whitespace-pre-line">{data.contact.address}</span>
                </li>
                <li className="flex items-start">
                  <Phone className="w-5 h-5 mr-3 text-[#1877F2] flex-shrink-0 mt-0.5" />
                  <span className="text-[#C9D2DE] text-[15px]">{data.contact.phone}</span>
                </li>
                <li className="flex items-start">
                  <Mail className="w-5 h-5 mr-3 text-[#1877F2] flex-shrink-0 mt-0.5" />
                  <span className="text-[#C9D2DE] text-[15px]">{data.contact.email}</span>
                </li>
                <li className="flex items-start">
                  <Clock className="w-5 h-5 mr-3 text-[#1877F2] flex-shrink-0 mt-0.5" />
                  <span className="text-[#C9D2DE] text-[15px]">{data.contact.workingHours}</span>
                </li>
              </ul>
            </MobileAccordion>
            {/* Desktop */}
            <div className="hidden md:block">
              <h3 className="text-white text-[18px] font-bold mb-6">{data.labels.contactUs}</h3>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-[#1877F2] flex-shrink-0 mt-0.5" />
                  <span className="text-[#C9D2DE] whitespace-pre-line">{data.contact.address}</span>
                </li>
                <li className="flex items-start">
                  <Phone className="w-5 h-5 mr-3 text-[#1877F2] flex-shrink-0 mt-0.5" />
                  <span className="text-[#C9D2DE]">{data.contact.phone}</span>
                </li>
                <li className="flex items-start">
                  <Mail className="w-5 h-5 mr-3 text-[#1877F2] flex-shrink-0 mt-0.5" />
                  <span className="text-[#C9D2DE]">{data.contact.email}</span>
                </li>
                <li className="flex items-start">
                  <Clock className="w-5 h-5 mr-3 text-[#1877F2] flex-shrink-0 mt-0.5" />
                  <span className="text-[#C9D2DE]">{data.contact.workingHours}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-[18px] font-bold mb-6">{data.labels.newsletter}</h3>
            <p className="text-[#C9D2DE] mb-6 whitespace-pre-line">
              {data.newsletter.description}
            </p>
            <form className="flex" action="#" method="post">
              <label htmlFor="newsletter-email" className="sr-only">
                {data.labels.newsletterPlaceholder}
              </label>
              <input
                id="newsletter-email"
                type="email"
                autoComplete="email"
                placeholder={data.labels.newsletterPlaceholder}
                className="bg-[#0A1A2F] border border-[#1e3450] border-r-0 text-white px-4 py-3 rounded-l-lg w-full focus:outline-none focus:border-[#4DA3FF] transition-colors text-sm"
              />
              <button type="submit" className="bg-[#1558C0] hover:bg-blue-700 text-white px-5 py-3 rounded-r-lg transition-colors flex items-center justify-center min-w-11 min-h-11" aria-label="Subscribe to newsletter">
                <Send className="w-4 h-4" aria-hidden />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Features Box */}
        <div className="border border-[#1e3450] bg-transparent rounded-2xl py-4 px-2 lg:px-6 md:py-4 md:px-8 mb-8">
          <div className="grid grid-cols-4 lg:flex lg:flex-row justify-between items-start lg:items-center divide-x divide-[#1e3450]">
            {data.bottomFeatures.map((feature, idx) => {
              const IconComponent = footerIcons[feature.icon] || Check;
              return (
                <div key={idx} className={`flex flex-col lg:flex-row items-center justify-start lg:justify-start lg:space-x-4 w-full px-1 lg:px-6 first:pl-0 last:pr-0`}>
                  <div className="text-[#1877F2] lg:border lg:border-[#1877F2] lg:bg-[#0A1A2F]/50 lg:p-3.5 rounded-full mb-2 lg:mb-0">
                    <IconComponent className="w-5 h-5 md:w-5 md:h-5" />
                  </div>
                  <div className="text-center lg:text-left">
                    <p className="text-white font-bold text-[12px] md:text-[15px] leading-tight mb-1">{feature.title}</p>
                    <p className="text-[#C9D2DE] text-[11px] md:text-[13px] leading-tight line-clamp-2 md:line-clamp-none">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="py-3 border-t border-[#1e3450] text-center md:flex md:justify-between md:text-left">
          <p className="text-[#C9D2DE] text-[14px]">{data.copyright}</p>
          <div className="mt-4 md:mt-0 text-[14px] text-[#C9D2DE] flex flex-wrap justify-center md:justify-end gap-x-5 gap-y-2">
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
