"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { TestimonialsData } from "../../types";

export default function Testimonials({ data }: { data: TestimonialsData }) {
  const ease = [0.22, 1, 0.36, 1] as const;

  const fadeUp = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
  };

  const card = {
    hidden: { opacity: 0, y: 28, scale: 0.97 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease } },
  };

  return (
    <section
      className="w-full bg-white overflow-x-hidden"
      style={{ fontFamily: "var(--font-inter), sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 md:pt-14 pb-12 md:pb-16">
        <motion.div
          className="text-center mb-7 sm:mb-8 md:mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
        >
          <motion.p
            variants={fadeUp}
            className="text-[#F5B400] font-bold text-[11px] sm:text-[13px] tracking-[0.2em] uppercase"
          >
            {data.subtitle}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-2 text-[26px] sm:text-[36px] lg:text-[48px] font-extrabold leading-[1.15] tracking-[-0.6px] px-1"
          >
            <span className="text-[#06194B]">{data.titlePart1} </span>
            <span className="text-[#F5B400]">{data.titleHighlight}</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-3 max-w-[640px] mx-auto text-[#6B7688] text-[13px] sm:text-[16px] leading-relaxed whitespace-pre-line px-1"
          >
            {data.description}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={stagger}
        >
          {data.items.map((item) => (
            <motion.article
              key={item.name}
              variants={card}
              whileHover={{ y: -8, boxShadow: "0 18px 40px rgba(15,40,80,0.12)" }}
              transition={{ duration: 0.28, ease }}
              className="relative bg-[#F6F8FB] rounded-[18px] sm:rounded-[20px] p-5 sm:p-6 md:p-7 shadow-[0_6px_24px_rgba(15,40,80,0.05)] h-full flex flex-col"
            >
              <motion.span
                aria-hidden
                className="absolute top-3 right-4 sm:top-4 sm:right-6 text-[40px] sm:text-[48px] leading-none text-[#C5D7EC] font-serif select-none pointer-events-none"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.15, ease }}
              >
                ”
              </motion.span>

              <div className="flex flex-col min-[480px]:flex-row gap-4">
                <motion.img
                  src={item.avatar}
                  alt={item.name}
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.25 }}
                  className="w-[72px] h-[72px] sm:w-[84px] sm:h-[84px] rounded-full object-cover shrink-0 ring-4 ring-white shadow-sm"
                />
                <div className="min-w-0 sm:pr-7">
                  <div className="flex gap-[3px] mb-2">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 6, scale: 0.6 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.28, delay: 0.12 + i * 0.05, ease }}
                      >
                        <Star className="w-[14px] h-[14px] sm:w-[15px] sm:h-[15px] text-[#F5B400]" fill="#F5B400" />
                      </motion.span>
                    ))}
                  </div>
                  <h3 className="text-[#0B1B4D] font-bold text-[16px] sm:text-[18px] leading-tight mb-2 pr-6">
                    {item.title}
                  </h3>
                  <p className="text-[#5A6478] text-[12px] sm:text-[13px] leading-[1.65]">
                    {item.quote}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 mt-auto pt-5">
                <div className="min-w-0">
                  <p className="text-[#0B1B4D] font-bold text-[15px] sm:text-[16px] leading-tight truncate">
                    {item.name}
                  </p>
                  <p className="text-[#8A94A6] text-[12px] sm:text-[13px] mt-0.5 truncate">{item.city}</p>
                </div>
                <p className="flex items-center gap-1.5 text-[#1877F2] text-[11px] sm:text-[13px] font-medium shrink-0">
                  <motion.span
                    className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] rounded-full bg-[#1877F2] text-white flex items-center justify-center text-[9px] sm:text-[10px] font-bold leading-none"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 420, damping: 16, delay: 0.2 }}
                  >
                    ✓
                  </motion.span>
                  <span className="hidden min-[380px]:inline">{data.verifiedLabel}</span>
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
