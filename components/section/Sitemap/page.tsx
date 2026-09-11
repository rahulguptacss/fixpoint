"use client";

import React from "react";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { ChevronRight } from "lucide-react";
import { SitemapData, SitemapGroup } from "../../types";

function GroupCard({ group }: { group: SitemapGroup }) {
  const Icon = (LucideIcons as any)[group.icon] || LucideIcons.Circle;

  return (
    <div className="relative bg-white rounded-[14px] border border-[#EEF2F7] shadow-[0_8px_22px_rgba(15,40,80,0.06)] overflow-visible">
      <span className="absolute -top-5 left-1/2 -translate-x-1/2 z-10 w-10 h-10 rounded-full bg-[#F5B400] text-[#0B1B4D] flex items-center justify-center shadow-sm">
        <Icon className="w-[18px] h-[18px]" strokeWidth={2.2} />
      </span>
      <div className="bg-[#0B1B4D] text-white text-center font-bold text-[13px] sm:text-[14px] pt-7 pb-3 rounded-t-[14px]">
        {group.number}. {group.title}
      </div>
      <div className="px-3 py-1">
        {group.links.map((link) => (
          <Link
            key={`${group.title}-${link.label}`}
            href={link.href}
            className="flex items-center justify-between gap-2 py-2.5 text-[13px] sm:text-[14px] text-[#0B1B4D] hover:text-[#2563EB] border-b border-[#F1F4F8] last:border-b-0"
          >
            <span className="truncate">{link.label}</span>
            <ChevronRight className="w-4 h-4 text-[#0B1B4D] shrink-0" />
          </Link>
        ))}
      </div>
    </div>
  );
}

function Branch({ count }: { count: number }) {
  return (
    <div className="hidden lg:block relative h-[58px] mb-1">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-[16px] bg-[#0B1B4D]" />
      <div className="absolute left-1/2 top-[10px] -translate-x-1/2 w-[22px] h-[14px] border-t-[2px] border-x-[2px] border-[#0B1B4D] rounded-t-[8px] bg-white z-[1]" />
      <div
        className="absolute top-[22px] h-[2px] bg-[#0B1B4D]"
        style={{ left: `${100 / count / 2}%`, right: `${100 / count / 2}%` }}
      />
      <div
        className="grid h-full"
        style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}
      >
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="relative">
            <div className="absolute left-1/2 top-[22px] -translate-x-1/2 w-[2px] h-[28px] bg-[#0B1B4D]" />
            <div className="absolute left-1/2 top-[48px] -translate-x-1/2 w-[8px] h-[8px] rounded-full bg-[#0B1B4D]" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Sitemap({ data }: { data: SitemapData }) {
  const top = data.groups.slice(0, 5);
  const mid = data.groups.slice(5, 10);

  return (
    <section
      className="w-full bg-white"
      style={{ fontFamily: "var(--font-inter), sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="flex flex-col items-center">
          <img src={data.logo} alt="FixPoint" className="h-16 sm:h-20 object-contain" />
          <p className="mt-1 text-[11px] sm:text-[12px] tracking-[0.22em] font-semibold text-[#0B1B4D]">
            {data.tagline}
          </p>
          <div className="mt-2 flex items-center gap-2">
            <span className="w-14 h-[3px] rounded-full bg-[#F5B400]" />
            <span className="w-14 h-[3px] rounded-full bg-[#F5B400]" />
          </div>
        </div>

        <div className="mt-2">
          <Branch count={5} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {top.map((group) => (
              <GroupCard key={group.title} group={group} />
            ))}
          </div>
        </div>

        <div className="mt-10">
          <Branch count={5} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {mid.map((group) => (
              <GroupCard key={group.title} group={group} />
            ))}
          </div>
        </div>

        <div className="mt-10 max-w-[440px] mx-auto w-full">
          <Branch count={2} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-4">
            {data.others.map((group) => (
              <GroupCard key={group.title} group={group} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
