"use client";

import React, { useState } from "react";
import * as LucideIcons from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { FaqData } from "../../types";

export default function Faq({ data }: { data: FaqData }) {
  const ease = [0.22, 1, 0.36, 1] as const;
  const [openMap, setOpenMap] = useState<Record<string, number>>(() =>
    Object.fromEntries(data.groups.map((group) => [group.id, 0]))
  );

  const fadeUp = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  };

  const groupVar = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
  };

  const toggle = (groupId: string, index: number) => {
    setOpenMap((prev) => ({
      ...prev,
      [groupId]: prev[groupId] === index ? -1 : index,
    }));
  };

  return (
    <section
      className="w-full bg-white overflow-x-hidden"
      style={{ fontFamily: "var(--font-inter), sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 md:pt-12 pb-12 md:pb-16">
        <motion.div
          className="text-center mb-8 sm:mb-10 md:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
        >
          <motion.p
            variants={fadeUp}
            className="text-[#F5B400] font-bold text-[11px] sm:text-[13px] tracking-[0.22em] uppercase"
          >
            {data.subtitle}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-2 text-[26px] sm:text-[38px] lg:text-[48px] font-extrabold leading-[1.15] tracking-[-0.6px]"
          >
            <span className="text-[#06194B]">{data.titlePart1} </span>
            <span className="text-[#F5B400]">{data.titleHighlight}</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-3 max-w-[680px] mx-auto text-[#6B7688] text-[13px] sm:text-[16px] leading-relaxed px-1"
          >
            {data.description}
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-8 sm:space-y-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={stagger}
        >
          {data.groups.map((group) => {
            const Icon = (LucideIcons as any)[group.icon] || LucideIcons.HelpCircle;

            return (
              <motion.div key={group.id} variants={groupVar}>
                <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                  <Icon className="w-[18px] h-[18px] sm:w-5 sm:h-5 text-[#F5B400] shrink-0" strokeWidth={2.2} />
                  <h3 className="text-[#0B1B4D] font-bold text-[16px] sm:text-[20px] leading-tight">
                    {group.title}
                  </h3>
                </div>

                <div className="bg-[#F4F7FB] rounded-[16px] sm:rounded-[20px] px-3.5 sm:px-6 py-2 sm:py-3">
                  {group.items.map((item, index) => {
                    const isOpen = openMap[group.id] === index;
                    return (
                      <div
                        key={item.question}
                        className={index < group.items.length - 1 ? "border-b border-[#E4EAF3]" : ""}
                      >
                        <button
                          type="button"
                          onClick={() => toggle(group.id, index)}
                          className="w-full flex items-start gap-3 sm:gap-3.5 py-3.5 sm:py-4 text-left"
                        >
                          <motion.span
                            className="mt-0.5 w-[22px] h-[22px] sm:w-6 sm:h-6 rounded-full bg-[#F5B400] text-white flex items-center justify-center shrink-0"
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.28, ease }}
                          >
                            {isOpen ? (
                              <Minus className="w-3.5 h-3.5" strokeWidth={3} />
                            ) : (
                              <Plus className="w-3.5 h-3.5" strokeWidth={3} />
                            )}
                          </motion.span>
                          <span className="text-[#0B1B4D] font-semibold sm:font-bold text-[14px] sm:text-[16px] leading-snug pt-[1px]">
                            {item.question}
                          </span>
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              key="answer"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.32, ease }}
                              className="overflow-hidden"
                            >
                              <p className="pl-[34px] sm:pl-[38px] pb-3.5 sm:pb-4 text-[#6B7688] text-[13px] sm:text-[15px] leading-[1.7] max-w-[920px]">
                                {item.answer}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
