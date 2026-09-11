"use client";

import React from "react";
import { PolicyPageData } from "../../types";

export default function Policy({ data }: { data: PolicyPageData }) {
  return (
    <section
      className="w-full bg-white"
      style={{ fontFamily: "var(--font-inter), sans-serif" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="font-extrabold text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.15] tracking-[-0.7px]">
            <span className="text-[#0A1B4B]">{data.titlePart1} </span>
            <span className="text-[#2563EB]">{data.titleHighlight}</span>
          </h1>
          <div className="mt-3.5 flex items-center justify-center gap-2">
            <span className="w-9 h-[2px] bg-[#2563EB]" />
            <span className="w-[7px] h-[7px] rounded-full bg-[#2563EB]" />
            <span className="w-9 h-[2px] bg-[#2563EB]" />
          </div>
          <p className="mt-7 text-[#1E2B45] text-[16px] sm:text-[18px] font-normal leading-[1.85]">
            {data.intro}
          </p>
        </div>

        <div className="mt-10 sm:mt-12">
          {data.sections.map((section, index) => (
            <div
              key={section.title}
              className={`py-7 sm:py-8 ${
                index < data.sections.length - 1 ? "border-b border-[#E6EAF0]" : ""
              } ${index === 0 ? "border-t border-[#E6EAF0]" : ""}`}
            >
              <h2 className="text-[#0A1B4B] font-extrabold text-[24px] sm:text-[28px] leading-tight">
                {section.title}
              </h2>
              <span className="mt-2.5 mb-4 block w-12 h-[3px] bg-[#2563EB]" />
              <p className="text-[#1E2B45] text-[16px] sm:text-[18px] leading-[1.85]">
                {section.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
