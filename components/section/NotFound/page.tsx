"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { NotFoundData } from "../../types";

export default function NotFoundSection({ data }: { data: NotFoundData }) {
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      className="w-full bg-white overflow-hidden"
      style={{ fontFamily: "var(--font-inter), sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          <div className="text-center lg:text-left">
            <div className="flex justify-center lg:justify-start items-end gap-1 sm:gap-2 leading-none select-none">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease }}
                className="text-[72px] sm:text-[110px] lg:text-[160px] font-black text-[#0B1B4D] tracking-tight"
              >
                4
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.55, delay: 0.08, ease }}
                className="relative text-[72px] sm:text-[110px] lg:text-[160px] font-black text-[#1877F2] tracking-tight"
              >
                0
                <svg
                  className="absolute left-[18%] top-[8%] w-[68%] h-[84%] pointer-events-none"
                  viewBox="0 0 80 100"
                  fill="none"
                >
                  <path
                    d="M38 4 L28 28 L42 36 L22 62 L40 70 L26 96"
                    stroke="white"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M38 4 L28 28 L42 36 L22 62 L40 70 L26 96"
                    stroke="#0B1B4D"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.14, ease }}
                className="text-[72px] sm:text-[110px] lg:text-[160px] font-black text-[#0B1B4D] tracking-tight"
              >
                4
              </motion.span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2, ease }}
              className="mt-2 sm:mt-3 text-[26px] sm:text-[36px] lg:text-[48px] font-extrabold leading-tight"
            >
              <span className="text-[#1877F2]">{data.titlePart1} </span>
              <span className="text-[#0B1B4D]">{data.titlePart2}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.28, ease }}
              className="mt-3 sm:mt-4 max-w-[460px] lg:max-w-[520px] mx-auto lg:mx-0 text-[#7A8494] text-[15px] sm:text-[17px] lg:text-[19px] leading-relaxed"
            >
              {data.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.36, ease }}
              className="mt-7 lg:mt-9 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 sm:gap-4"
            >
              <Link
                href={data.homeLink}
                className="inline-flex items-center justify-center gap-2 bg-[#1877F2] hover:bg-blue-600 text-white font-semibold text-[15px] lg:text-[17px] px-6 py-3 lg:px-8 lg:py-[14px] rounded-lg lg:rounded-xl shadow-sm transition-colors w-full sm:w-auto"
              >
                <ArrowLeft className="w-4 h-4 lg:w-5 lg:h-5" />
                {data.homeLabel}
              </Link>
              <Link
                href={data.bookLink}
                className="inline-flex items-center justify-center gap-2 border-2 border-[#1877F2] text-[#1877F2] hover:bg-blue-50 font-semibold text-[15px] lg:text-[17px] px-6 py-3 lg:px-8 lg:py-[14px] rounded-lg lg:rounded-xl transition-colors w-full sm:w-auto"
              >
                <Wrench className="w-4 h-4 lg:w-5 lg:h-5" />
                {data.bookLabel}
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="relative mx-auto w-full max-w-[520px] min-h-[280px] sm:min-h-[380px]"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.15, ease }}
          >
            <motion.svg
              className="absolute right-2 top-4 w-16 h-16 text-[#D7E6FA]"
              viewBox="0 0 24 24"
              fill="currentColor"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            >
              <path d="M12 8.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5Zm7.4 2.1-1.1-.2a6.9 6.9 0 0 0-.6-1.4l.7-.9a.8.8 0 0 0-.1-1.1l-1.5-1.5a.8.8 0 0 0-1.1-.1l-.9.7c-.45-.25-.93-.45-1.4-.6l-.2-1.1A.8.8 0 0 0 12.4 3h-2.1a.8.8 0 0 0-.8.7l-.2 1.1c-.47.15-.95.35-1.4.6l-.9-.7a.8.8 0 0 0-1.1.1L4.2 6.1a.8.8 0 0 0-.1 1.1l.7.9c-.25.45-.45.93-.6 1.4l-1.1.2A.8.8 0 0 0 2.4 11v2.1a.8.8 0 0 0 .7.8l1.1.2c.15.47.35.95.6 1.4l-.7.9a.8.8 0 0 0 .1 1.1l1.5 1.5a.8.8 0 0 0 1.1.1l.9-.7c.45.25.93.45 1.4.6l.2 1.1a.8.8 0 0 0 .8.7h2.1a.8.8 0 0 0 .8-.7l.2-1.1c.47-.15.95-.35 1.4-.6l.9.7a.8.8 0 0 0 1.1-.1l1.5-1.5a.8.8 0 0 0 .1-1.1l-.7-.9c.25-.45.45-.93.6-1.4l1.1-.2a.8.8 0 0 0 .7-.8V11.8a.8.8 0 0 0-.7-.8Z" />
            </motion.svg>
            <motion.svg
              className="absolute left-6 bottom-8 w-12 h-12 text-[#E7EEF8]"
              viewBox="0 0 24 24"
              fill="currentColor"
              animate={{ rotate: -360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            >
              <path d="M12 8.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5Zm7.4 2.1-1.1-.2a6.9 6.9 0 0 0-.6-1.4l.7-.9a.8.8 0 0 0-.1-1.1l-1.5-1.5a.8.8 0 0 0-1.1-.1l-.9.7c-.45-.25-.93-.45-1.4-.6l-.2-1.1A.8.8 0 0 0 12.4 3h-2.1a.8.8 0 0 0-.8.7l-.2 1.1c-.47.15-.95.35-1.4.6l-.9-.7a.8.8 0 0 0-1.1.1L4.2 6.1a.8.8 0 0 0-.1 1.1l.7.9c-.25.45-.45.93-.6 1.4l-1.1.2A.8.8 0 0 0 2.4 11v2.1a.8.8 0 0 0 .7.8l1.1.2c.15.47.35.95.6 1.4l-.7.9a.8.8 0 0 0 .1 1.1l1.5 1.5a.8.8 0 0 0 1.1.1l.9-.7c.45.25.93.45 1.4.6l.2 1.1a.8.8 0 0 0 .8.7h2.1a.8.8 0 0 0 .8-.7l.2-1.1c.47-.15.95-.35 1.4-.6l.9.7a.8.8 0 0 0 1.1-.1l1.5-1.5a.8.8 0 0 0 .1-1.1l-.7-.9c.25-.45.45-.93.6-1.4l1.1-.2a.8.8 0 0 0 .7-.8V11.8a.8.8 0 0 0-.7-.8Z" />
            </motion.svg>

            <motion.div
              className="relative mx-auto w-[210px] sm:w-[260px]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="rounded-[32px] border-[10px] border-[#1B2A44] bg-[#0B1B4D] shadow-[0_24px_50px_rgba(15,40,80,0.18)] overflow-hidden">
                <div className="relative h-[280px] sm:h-[340px]">
                  <img src={data.image} alt="" className="w-full h-full object-cover opacity-80" />
                  <div className="absolute inset-0 bg-[#0B1B4D]/25" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <div className="flex gap-5 text-[28px] sm:text-[34px] font-black leading-none">
                      <span>✕</span>
                      <span>✕</span>
                    </div>
                    <div className="mt-2 w-16 h-8 border-b-[5px] border-white rounded-b-full" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute left-[12%] bottom-[18%] w-[72px] h-[72px] sm:w-[84px] sm:h-[84px]"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg viewBox="0 0 80 80" className="w-full h-full drop-shadow-lg">
                <polygon points="40,8 76,72 4,72" fill="#1877F2" />
                <rect x="36" y="30" width="8" height="22" rx="2" fill="white" />
                <circle cx="40" cy="60" r="4" fill="white" />
              </svg>
            </motion.div>

            <motion.div
              className="absolute right-[6%] bottom-[12%] w-[120px] sm:w-[140px]"
              animate={{ rotate: [12, 18, 12] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg viewBox="0 0 140 40" className="w-full h-auto drop-shadow-md">
                <rect x="2" y="14" width="78" height="12" rx="3" fill="#1877F2" />
                <rect x="78" y="10" width="18" height="20" rx="2" fill="#0B5ED7" />
                <rect x="96" y="16" width="40" height="8" rx="2" fill="#9AA6B8" />
              </svg>
            </motion.div>

            <span className="absolute left-[8%] top-[38%] w-2.5 h-2.5 rounded-full bg-[#8A94A6]" />
            <span className="absolute left-[18%] bottom-[8%] w-2 h-2 rounded-full bg-[#6B7688]" />
            <span className="absolute right-[22%] top-[22%] w-2 h-2 rounded-full bg-[#8A94A6]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
