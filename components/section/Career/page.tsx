"use client";

import React from "react";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { motion } from "framer-motion";
import { MapPin, Briefcase, ArrowRight } from "lucide-react";
import { CareerData } from "../../types";

export default function Career({ data }: { data: CareerData }) {
  const ease = [0.22, 1, 0.36, 1] as const;
  const { whyJoin, openings } = data;

  const Icon = (name: string) =>
    (LucideIcons as any)[name] || LucideIcons.Briefcase;

  return (
    <>
      <section
        className="w-full bg-white"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 lg:pt-12 pb-8 md:pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(200px,0.7fr)_1.3fr] gap-6 lg:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
            >
              <p className="text-[#0B1B4D] font-bold text-[12px] sm:text-[13px] tracking-[0.14em] uppercase">
                {whyJoin.subtitle}
              </p>
              <h2 className="mt-2 text-[26px] sm:text-[34px] lg:text-[38px] font-extrabold leading-[1.2] tracking-[-0.5px]">
                <span className="text-[#0B1B4D]">{whyJoin.titlePart1} </span>
                <span className="text-[#F5B400]">{whyJoin.titleHighlight}</span>
              </h2>
              <p className="mt-3 text-[#7A8494] text-[14px] sm:text-[15px] leading-[1.7] max-w-[380px]">
                {whyJoin.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
              {whyJoin.cards.map((card, index) => {
                const CardIcon = Icon(card.icon);
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.06, ease }}
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-[16px] sm:rounded-[18px] px-3 py-4 sm:px-5 sm:py-8 min-h-0 sm:min-h-[210px] lg:min-h-[230px] text-center border border-[#E8EEF4] shadow-[0_8px_24px_rgba(15,40,80,0.05)]"
                  >
                    <span className="mx-auto w-[44px] h-[44px] sm:w-[64px] sm:h-[64px] rounded-full bg-[#EEF3FF] text-[#3B5BDB] flex items-center justify-center">
                      <CardIcon className="w-5 h-5 sm:w-7 sm:h-7" strokeWidth={2} />
                    </span>
                    <h3 className="mt-3 sm:mt-4 text-[#0B1B4D] font-bold text-[14px] sm:text-[16px] leading-tight">
                      {card.title}
                    </h3>
                    <p className="mt-1.5 sm:mt-2 text-[#8A94A6] text-[12px] sm:text-[14px] leading-[1.45] sm:leading-[1.55]">
                      {card.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section
        id="openings"
        className="w-full bg-[#F7F9FC]"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="grid grid-cols-1 xl:grid-cols-[minmax(240px,320px)_minmax(0,1fr)] gap-8 xl:gap-12 items-start xl:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
            >
              <p className="relative inline-block text-[#0B1B4D] font-bold text-[12px] sm:text-[13px] tracking-[0.14em] uppercase pb-2">
                {openings.subtitle}
                <span className="absolute left-0 bottom-0 w-10 h-[3px] rounded-full bg-[#F5B400]" />
              </p>
              <h2 className="mt-4 text-[26px] sm:text-[36px] lg:text-[40px] font-extrabold leading-[1.15] tracking-[-0.5px]">
                <span className="block text-[#0B1B4D]">{openings.titlePart1}</span>
                <span className="block text-[#F5B400]">{openings.titleHighlight}</span>
              </h2>
              <p className="mt-3 text-[#7A8494] text-[14px] sm:text-[16px] leading-[1.7] max-w-[420px] xl:max-w-[340px]">
                {openings.description}
              </p>
            </motion.div>

            <div className="flex flex-col gap-4 xl:gap-0 xl:bg-white xl:rounded-[22px] xl:px-5 xl:py-3 xl:shadow-[0_12px_32px_rgba(15,40,80,0.06)]">
              {openings.jobs.map((job, index) => {
                const JobIcon = Icon(job.icon);
                return (
                  <motion.div
                    key={job.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.05, ease }}
                    className={`bg-white rounded-[18px] p-4 shadow-[0_8px_24px_rgba(15,40,80,0.06)] border border-[#EEF2F7] xl:border-0 xl:shadow-none xl:rounded-none xl:p-0 xl:flex xl:flex-row xl:items-center xl:gap-5 xl:py-5 ${
                      index < openings.jobs.length - 1 ? "xl:border-b xl:border-[#EEF2F7]" : ""
                    }`}
                  >
                    <div className="flex items-start gap-3 min-w-0 flex-1">
                      <span className="w-12 h-12 rounded-[10px] bg-[#F5B400] text-white flex items-center justify-center shrink-0">
                        <JobIcon className="w-5 h-5" strokeWidth={2.2} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-[#0B1B4D] font-bold text-[16px] leading-tight">
                          {job.title}
                        </p>
                        <p className="text-[#8A94A6] text-[13px] mt-1 leading-[1.5]">
                          {job.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 xl:mt-0 flex flex-col items-start xl:flex-row xl:items-center xl:justify-end gap-3">
                      <div className="flex items-center gap-5 xl:flex-col xl:items-start xl:gap-1.5 xl:min-w-[120px] text-[#6B7688] text-[13px] shrink-0">
                        <p className="inline-flex items-center gap-1.5 whitespace-nowrap">
                          <MapPin className="w-3.5 h-3.5 shrink-0" />
                          {job.location}
                        </p>
                        <p className="inline-flex items-center gap-1.5 whitespace-nowrap">
                          <Briefcase className="w-3.5 h-3.5 shrink-0" />
                          {job.type}
                        </p>
                      </div>
                      <Link
                        href={job.applyLink}
                        className="inline-flex items-center justify-center gap-1.5 shrink-0 bg-white border-[1.5px] border-[#0B1B4D] text-[#0B1B4D] hover:bg-[#0B1B4D] hover:text-white text-[13px] xl:text-[14px] font-semibold px-4 py-[7px] xl:px-5 xl:py-[10px] rounded-[6px] xl:rounded-[8px] transition-colors w-auto self-start xl:self-auto whitespace-nowrap"
                      >
                        {openings.applyLabel}
                        <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
