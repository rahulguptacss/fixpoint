"use client";

import React from "react";
import * as LucideIcons from "lucide-react";
import { motion } from "framer-motion";
import { PricingData } from "../../types";

export default function Pricing({ data }: { data: PricingData }) {
  const ease = [0.22, 1, 0.36, 1] as const;

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const fadeItem = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
  };

  return (
    <section
      className="w-full bg-white overflow-x-hidden"
      style={{ fontFamily: "var(--font-inter), sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-7 sm:pt-8 md:pt-10 pb-10 md:pb-12">
        <motion.div
          className="text-center mb-5 md:mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.p
            variants={fadeItem}
            className="text-[#F5B400] font-bold text-[11px] sm:text-[13px] lg:text-[14px] tracking-[0.2em] uppercase"
          >
            {data.subtitle}
          </motion.p>
          <motion.div
            variants={fadeItem}
            className="w-[36px] sm:w-[42px] h-[3px] bg-[#F5B400] mx-auto mt-1.5 mb-2 sm:mb-2.5"
          />
          <motion.h2
            variants={fadeUp}
            className="text-[#06194B] text-[28px] sm:text-[40px] md:text-[48px] lg:text-[60px] font-extrabold leading-[1.12] tracking-[-0.6px] px-1"
          >
            {data.titlePart1}{" "}
            <span className="text-[#F5B400]">{data.titleHighlight}</span>
          </motion.h2>
          <motion.p
            variants={fadeItem}
            className="mt-2 sm:mt-2.5 text-[#6B7688] text-[12px] sm:text-[14px] lg:text-[16px] leading-[1.5] font-medium whitespace-pre-line max-w-[640px] mx-auto"
          >
            {data.description}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-4 sm:gap-y-5 lg:gap-0 mb-7 md:mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          {data.highlights.map((item, index) => {
            const Icon = (LucideIcons as any)[item.icon] || LucideIcons.Check;
            return (
              <motion.div
                key={item.title}
                variants={fadeItem}
                whileHover={{ y: -3 }}
                className={`
                  flex items-center gap-2 sm:gap-3
                  lg:px-4 xl:px-5
                  ${index < data.highlights.length - 1 ? "lg:border-r lg:border-[#E6EAF0]" : ""}
                `}
              >
                <motion.div
                  className="w-[38px] h-[38px] sm:w-[50px] sm:h-[50px] rounded-full bg-[#FFF4D6] text-[#06194B] flex items-center justify-center shrink-0"
                  whileHover={{ scale: 1.08, rotate: 6 }}
                  transition={{ type: "spring", stiffness: 320, damping: 18 }}
                >
                  <Icon className="w-[16px] h-[16px] sm:w-[22px] sm:h-[22px]" strokeWidth={1.7} />
                </motion.div>
                <div className="min-w-0">
                  <p className="text-[#06194B] font-bold text-[12px] sm:text-[16px] leading-tight">
                    {item.title}
                  </p>
                  <p className="text-[#7A8799] text-[10px] sm:text-[14px] mt-0.5 leading-snug">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="rounded-[14px] sm:rounded-[16px] overflow-hidden border border-[#E6EAF0] shadow-[0_8px_30px_rgba(6,25,75,0.06)] mb-5 md:mb-8"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.55, ease }}
        >
          <div className="hidden md:grid grid-cols-[1.15fr_1.45fr_0.7fr] bg-[#06194B] text-[#FFC107] text-[12px] lg:text-[15px] font-bold tracking-[0.1em] px-5 lg:px-7 py-3.5 lg:py-4">
            <span>{data.table.headers.service}</span>
            <span>{data.table.headers.description}</span>
            <span>{data.table.headers.price}</span>
          </div>

          {data.table.rows.map((row, index) => {
            const Icon = (LucideIcons as any)[row.icon] || LucideIcons.Circle;
            return (
              <motion.div
                key={row.title}
                className={`
                  grid grid-cols-1 md:grid-cols-[1.15fr_1.45fr_0.7fr]
                  items-start md:items-center gap-2 md:gap-4
                  px-4 sm:px-5 lg:px-7 py-3.5 sm:py-4
                  bg-white
                  ${index < data.table.rows.length - 1 ? "border-b border-[#EEF1F5]" : ""}
                `}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05, ease }}
                whileHover={{ backgroundColor: "#F8FAFC" }}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <motion.div
                      className="w-[42px] h-[42px] sm:w-[48px] sm:h-[48px] rounded-[12px] flex items-center justify-center shrink-0"
                      style={{ backgroundColor: row.iconBg, color: row.iconColor }}
                      whileHover={{ scale: 1.08 }}
                    >
                      <Icon className="w-5 h-5 sm:w-[22px] sm:h-[22px]" strokeWidth={1.8} />
                    </motion.div>
                    <p className="text-[#06194B] font-semibold text-[15px] sm:text-[17px] lg:text-[18px] leading-tight tracking-[-0.2px]">
                      {row.title}
                    </p>
                  </div>
                  <div className="md:hidden text-right shrink-0">
                    <p className="text-[#6B7688] text-[11px] font-medium leading-none">
                      Starting at
                    </p>
                    <p className="text-[#06194B] font-extrabold text-[20px] leading-tight mt-0.5">
                      {row.price}
                    </p>
                  </div>
                </div>

                <p className="text-[#6B7688] text-[13px] sm:text-[14px] leading-[1.55] whitespace-pre-line md:pr-8 pl-[54px] sm:pl-0">
                  {row.description}
                </p>

                <div className="hidden md:block">
                  <p className="text-[#6B7688] text-[14px] font-medium leading-none">
                    Starting at
                  </p>
                  <p className="text-[#06194B] font-extrabold text-[24px] lg:text-[28px] leading-[1.15] mt-1">
                    {row.price}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="mb-5 sm:mb-7"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease }}
        >
          <h3 className="text-[#06194B] text-[22px] sm:text-[26px] lg:text-[30px] font-extrabold leading-tight">
            {data.popular.title}
          </h3>
          <motion.div
            className="h-[3px] bg-[#FFC107] mt-2 origin-left"
            initial={{ scaleX: 0, width: 42 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease }}
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4">
          {data.popular.items.map((item, index) => {
            const Icon = (LucideIcons as any)[item.icon] || LucideIcons.Wrench;
            return (
              <motion.div
                key={item.title}
                className="bg-white rounded-[16px] border border-[#EEF1F5] overflow-hidden shadow-[0_8px_24px_rgba(6,25,75,0.06)]"
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.06, ease }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 16px 32px rgba(6,25,75,0.12)",
                }}
              >
                <div className="relative">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[160px] sm:h-[148px] object-cover"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.4 }}
                  />
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 -bottom-5 w-11 h-11 rounded-full bg-[#FFC107] text-[#06194B] flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.12)]"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 280,
                      damping: 16,
                      delay: 0.15 + index * 0.06,
                    }}
                    whileHover={{ rotate: 12, scale: 1.1 }}
                  >
                    <Icon className="w-[20px] h-[20px]" strokeWidth={2} />
                  </motion.div>
                </div>
                <div className="px-4 pt-8 pb-5 text-center">
                  <p className="text-[#06194B] font-bold text-[16px] leading-tight mb-2">
                    {item.title}
                  </p>
                  <p className="text-[#8A94A6] text-[13px] font-medium">
                    Starting at
                  </p>
                  <p className="text-[#06194B] font-extrabold text-[24px] sm:text-[26px] leading-none mt-1 mb-3">
                    {item.price}
                  </p>
                  <p className="flex items-center justify-center gap-1.5 text-[#8A94A6] text-[12px]">
                    <LucideIcons.Clock className="w-3.5 h-3.5" />
                    {item.duration}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
