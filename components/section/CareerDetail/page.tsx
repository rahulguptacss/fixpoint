"use client";

import React, { useState } from "react";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Calendar,
  Check,
  CircleCheck,
  Users,
  Shield,
  Send,
  Lock,
  ChevronDown,
  Upload,
  ArrowRight,
  TrendingUp,
  Wrench,
} from "lucide-react";
import { CareerDetailData, CareerDetailJob } from "../../types";

function MoneyBag({ className, strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M8 8.5c0-2 1.8-3.5 4-3.5s4 1.5 4 3.5c0 .6-.2 1.1-.5 1.6" />
      <path d="M9.2 6.8 8 4.2h8L14.8 6.8" />
      <path d="M7.2 10.2C5.6 11.5 4.5 13.6 4.5 16c0 3.3 3.4 5.5 7.5 5.5s7.5-2.2 7.5-5.5c0-2.4-1.1-4.5-2.7-5.8" />
      <path d="M12 13.2v.3c1.2.3 2 1 2 2.1 0 1.3-1.1 2.2-2.5 2.2h-.2c-1.3 0-2.3-.8-2.3-1.9" />
    </svg>
  );
}

function CareerCtaArt() {
  return (
    <svg viewBox="0 0 200 140" className="w-full h-auto" fill="none" aria-hidden>
      <path d="M18 128h42v-16H18v16Zm42 0h28V96H60v32Zm28 0h28V80H88v48Zm28 0h28V64h-28v64Zm28 0h28V48h-28v80Z" fill="#F5B400" />
      <path d="M18 128h154" stroke="#E2C56A" strokeWidth="2" />
      <rect x="164" y="22" width="5" height="42" rx="1.5" fill="#F5B400" />
      <path d="M169 22h28l-6 8 6 8H169V22Z" fill="#F5B400" />
      <circle cx="166.5" cy="64" r="4" fill="#0B1B4D" />
      <g fill="#0B1B4D">
        <circle cx="78" cy="68" r="7" />
        <path d="M70 78c0-4 4-7 8-7s8 3 8 7v18h-5l-2 14h-6l-2-14h-5V78Z" />
        <path d="M73 96h10l6 16h-6l-5-12-5 12h-6l6-16Z" />
        <rect x="84" y="80" width="14" height="4" rx="2" fill="#F5B400" />
      </g>
      <g fill="#0B1B4D">
        <circle cx="118" cy="44" r="7" />
        <path d="M110 54c0-4 4-7 8-7s8 3 8 7v16h-5l-1 12h-6l-2-12h-5V54Z" />
        <path d="M113 70h10l5 14h-6l-4-10-4 10h-6l5-14Z" />
        <rect x="124" y="56" width="14" height="4" rx="2" fill="#F5B400" />
      </g>
    </svg>
  );
}

function CrossedWrench({ className, strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) {
  return (
    <span className={`relative mx-auto inline-block ${className || ""}`}>
      <Wrench className="absolute inset-0 -rotate-[38deg]" strokeWidth={strokeWidth} />
      <Wrench className="absolute inset-0 rotate-[48deg]" strokeWidth={strokeWidth} />
    </span>
  );
}

export default function CareerDetail({
  data,
  job,
}: {
  data: CareerDetailData;
  job: CareerDetailJob;
}) {
  const ease = [0.22, 1, 0.36, 1] as const;
  const Icon = (name: string) =>
    (LucideIcons as any)[name] || LucideIcons.Briefcase;

  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    location: "",
    cover: "",
  });

  const update = (key: string, value: string) =>
    setValues((prev) => ({ ...prev, [key]: value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const fieldClass =
    "w-full h-[48px] rounded-[10px] bg-white text-[#0B1B4D] text-[14px] placeholder:text-[#9AA3B2] pl-10 pr-4 outline-none border border-[#E4EAF1] focus:border-[#F5B400]";

  const labelClass = "block text-[#0B1B4D] font-semibold text-[13px] mb-1.5";

  const renderLabel = (text: string) => {
    if (text.includes("(Optional)")) {
      const [before] = text.split("(Optional)");
      return (
        <>
          {before}
          <span className="text-[#F5B400]">(Optional)</span>
        </>
      );
    }
    if (text.includes("*")) {
      return (
        <>
          {text.replace(/\s*\*$/, "")} <span className="text-[#F5B400]">*</span>
        </>
      );
    }
    return text;
  };

  return (
    <section
      className="w-full bg-white"
      style={{ fontFamily: "var(--font-inter), sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_380px] gap-8 lg:gap-10 items-start">
          <div>
            <p className="relative inline-block text-[#F5B400] font-bold text-[12px] sm:text-[13px] tracking-[0.16em] uppercase pb-2">
              {job.subtitle}
              <span className="absolute left-0 bottom-0 w-9 h-[3px] rounded-full bg-[#F5B400]" />
            </p>
            <h1 className="mt-4 text-[#0B1B4D] font-extrabold text-[32px] sm:text-[40px] lg:text-[44px] leading-[1.12] tracking-[-0.6px]">
              {job.title}
            </h1>
            <p className="mt-4 text-[#8A94A6] text-[15px] sm:text-[16px] lg:text-[17px] font-normal leading-[1.7] max-w-[620px]">
              {job.intro}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-y-2 text-[#0B1B4D] text-[14px] sm:text-[15px] font-medium">
              <span className="inline-flex items-center gap-2 pr-4 sm:pr-5">
                <MapPin className="w-[18px] h-[18px] text-[#F5B400]" strokeWidth={1.8} />
                {job.location}
              </span>
              <span className="hidden sm:inline-block w-px h-4 bg-[#D5DCE6] mr-4 sm:mr-5" />
              <span className="inline-flex items-center gap-2 pr-4 sm:pr-5">
                <Briefcase className="w-[18px] h-[18px] text-[#F5B400]" strokeWidth={1.8} />
                {job.type}
              </span>
              <span className="hidden sm:inline-block w-px h-4 bg-[#D5DCE6] mr-4 sm:mr-5" />
              <span className="inline-flex items-center gap-2">
                <Calendar className="w-[18px] h-[18px] text-[#F5B400]" strokeWidth={1.8} />
                {job.posted}
              </span>
            </div>

            <div className="mt-7 rounded-[20px] bg-[#F8FAFC] border border-[#E8EEF4] py-7 sm:py-9 px-2 sm:px-3">
              <div className="grid grid-cols-2 lg:grid-cols-4">
                {job.facts.map((fact, index) => {
                  const FactIcon = fact.icon === "Wrench" ? CrossedWrench : Icon(fact.icon);
                  return (
                    <div
                      key={fact.label}
                      className={`relative text-center px-3 sm:px-5 py-4 lg:py-0 ${
                        index % 2 === 1 ? "max-lg:border-l max-lg:border-[#E8EEF4]" : ""
                      } ${index > 1 ? "max-lg:border-t max-lg:border-[#E8EEF4]" : ""}`}
                    >
                      {index > 0 && (
                        <span className="hidden lg:block absolute left-0 top-1 bottom-1 w-px bg-[#E8EEF4]" />
                      )}
                      <FactIcon className="mx-auto w-9 h-9 sm:w-10 sm:h-10 text-[#F5B400]" strokeWidth={1.5} />
                      <p className="mt-3.5 text-[#0B1B4D] font-bold text-[14px] sm:text-[15px] leading-tight">
                        {fact.label}
                      </p>
                      <p className="mt-1.5 text-[#8A94A6] text-[13px] sm:text-[14px] font-normal leading-[1.45] whitespace-pre-line">
                        {fact.value}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-10">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full border-2 border-[#F5B400] text-[#F5B400] inline-flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" strokeWidth={2} />
                </span>
                <div>
                  <h2 className="text-[#0B1B4D] font-extrabold text-[22px] sm:text-[24px] leading-tight tracking-[-0.3px]">
                    {job.overviewTitle}
                  </h2>
                  <span className="mt-1.5 block w-10 h-[3px] rounded-full bg-[#F5B400]" />
                </div>
              </div>
              <p className="mt-5 text-[#5B6577] text-[15px] sm:text-[16px] font-normal leading-[1.8]">
                {job.overview}
              </p>
            </div>

            <div className="mt-10">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full border-2 border-[#F5B400] text-[#F5B400] inline-flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" strokeWidth={2} />
                </span>
                <div>
                  <h2 className="text-[#0B1B4D] font-extrabold text-[22px] sm:text-[24px] leading-tight tracking-[-0.3px]">
                    {job.responsibilitiesTitle}
                  </h2>
                  <span className="mt-1.5 block w-10 h-[3px] rounded-full bg-[#F5B400]" />
                </div>
              </div>
              <ul className="mt-5 space-y-3">
                {job.responsibilities.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[#4A5568] text-[14px] sm:text-[15px] leading-[1.7]">
                    <CircleCheck className="mt-0.5 w-[18px] h-[18px] text-[#F5B400] shrink-0" strokeWidth={2} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full border-2 border-[#F5B400] text-[#F5B400] inline-flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" strokeWidth={2} />
                </span>
                <div>
                  <h2 className="text-[#0B1B4D] font-extrabold text-[22px] sm:text-[24px] leading-tight tracking-[-0.3px]">
                    {job.requirementsTitle}
                  </h2>
                  <span className="mt-1.5 block w-10 h-[3px] rounded-full bg-[#F5B400]" />
                </div>
              </div>
              <ul className="mt-5 space-y-3">
                {job.requirements.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[#4A5568] text-[14px] sm:text-[15px] leading-[1.7]">
                    <CircleCheck className="mt-0.5 w-[18px] h-[18px] text-[#F5B400] shrink-0" strokeWidth={2} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full border-2 border-[#F5B400] text-[#F5B400] inline-flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5" strokeWidth={2} />
                </span>
                <h2 className="text-[#0B1B4D] font-extrabold text-[22px] sm:text-[24px] leading-tight tracking-[-0.3px]">
                  {job.offerTitle}
                </h2>
              </div>
              <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {job.offer.map((item) => {
                  const OfferIcon =
                    item.icon === "Wallet" || item.icon === "MoneyBag" ? MoneyBag : Icon(item.icon);
                  return (
                    <div
                      key={item.title}
                      className="bg-white rounded-[14px] border border-[#E6ECF3] px-3 py-6 sm:px-4 sm:py-7 text-center"
                    >
                      <OfferIcon className="mx-auto w-9 h-9 sm:w-10 sm:h-10 text-[#0B1B4D]" strokeWidth={1.5} />
                      <p className="mt-3.5 text-[#0B1B4D] font-bold text-[13px] sm:text-[14px] leading-[1.35]">
                        {item.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative mt-8 overflow-hidden rounded-[18px] bg-[#FFF8E8] border border-[#F3E4B8] px-5 py-6 sm:px-7 sm:py-8">
              <span className="pointer-events-none absolute left-4 top-5 grid grid-cols-3 gap-1.5 opacity-40">
                {Array.from({ length: 9 }).map((_, i) => (
                  <span key={`d1-${i}`} className="w-1 h-1 rounded-full bg-[#F5B400]" />
                ))}
              </span>
              <span className="pointer-events-none absolute right-6 bottom-6 grid grid-cols-4 gap-1.5 opacity-35">
                {Array.from({ length: 12 }).map((_, i) => (
                  <span key={`d2-${i}`} className="w-1 h-1 rounded-full bg-[#F5B400]" />
                ))}
              </span>

              <div className="relative flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
                <div className="shrink-0 w-[160px] sm:w-[180px] mx-auto sm:mx-0">
                  <CareerCtaArt />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[#0B1B4D] font-extrabold text-[20px] sm:text-[22px] lg:text-[24px] leading-tight tracking-[-0.3px]">
                    {job.cta.title.split(/Fixpoint/i).map((part, i, arr) => (
                      <React.Fragment key={i}>
                        {part}
                        {i < arr.length - 1 && <span className="text-[#F5B400]">Fixpoint</span>}
                      </React.Fragment>
                    ))}
                  </p>
                  <p className="mt-2 text-[#6B7688] text-[14px] sm:text-[15px] leading-[1.7] max-w-[420px]">
                    {job.cta.description}
                  </p>
                  <Link
                    href={job.cta.buttonLink}
                    className="mt-4 inline-flex items-center justify-center gap-2 bg-[#F5B400] hover:bg-[#e0a500] text-[#0B1B4D] font-bold text-[13px] sm:text-[14px] px-5 py-2.5 rounded-[8px] whitespace-nowrap"
                  >
                    {job.cta.buttonLabel}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-[90px] space-y-5">
            <div className="bg-white rounded-[18px] border border-[#E8EEF4] shadow-[0_8px_24px_rgba(15,40,80,0.06)] p-5 sm:p-6">
              <h3 className="text-[#0B1B4D] font-extrabold text-[22px] sm:text-[24px] leading-tight tracking-[-0.3px]">
                {data.form.title}
              </h3>
              {submitted ? (
                <p className="mt-6 text-[#0B1B4D] text-[14px] leading-[1.7]">
                  Thanks! Your application has been submitted. We will contact you soon.
                </p>
              ) : (
                <form onSubmit={onSubmit} className="mt-5 space-y-3.5">
                  <label className="block">
                    <span className={labelClass}>{renderLabel(data.form.fullName)}</span>
                    <span className="relative block">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B0B8C6]" />
                      <input
                        required
                        value={values.fullName}
                        onChange={(e) => update("fullName", e.target.value)}
                        placeholder="Enter your full name"
                        className={fieldClass}
                      />
                    </span>
                  </label>
                  <label className="block">
                    <span className={labelClass}>{renderLabel(data.form.email)}</span>
                    <span className="relative block">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B0B8C6]" />
                      <input
                        required
                        type="email"
                        value={values.email}
                        onChange={(e) => update("email", e.target.value)}
                        placeholder="Enter your email address"
                        className={fieldClass}
                      />
                    </span>
                  </label>
                  <label className="block">
                    <span className={labelClass}>{renderLabel(data.form.phone)}</span>
                    <span className="relative block">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B0B8C6]" />
                      <input
                        required
                        value={values.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        placeholder="Enter your phone number"
                        className={fieldClass}
                      />
                    </span>
                  </label>
                  <label className="block relative">
                    <span className={labelClass}>{renderLabel(data.form.experience)}</span>
                    <select
                      required
                      value={values.experience}
                      onChange={(e) => update("experience", e.target.value)}
                      className="w-full h-[48px] rounded-[10px] bg-white text-[#0B1B4D] text-[14px] placeholder:text-[#9AA3B2] px-4 outline-none border border-[#E4EAF1] focus:border-[#F5B400] appearance-none pr-10"
                    >
                      <option value="">{data.form.experiencePlaceholder}</option>
                      {data.form.experienceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 bottom-3.5 w-4 h-4 text-[#9AA3B2] pointer-events-none" />
                  </label>
                  <label className="block">
                    <span className={labelClass}>{renderLabel(data.form.location)}</span>
                    <span className="relative block">
                      <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B0B8C6]" />
                      <input
                        required
                        value={values.location}
                        onChange={(e) => update("location", e.target.value)}
                        placeholder="Enter your current location"
                        className={fieldClass}
                      />
                    </span>
                  </label>
                  <div>
                    <span className={labelClass}>{renderLabel(data.form.resume)}</span>
                    <label className="flex items-center gap-3 h-[48px] rounded-[10px] bg-white border border-[#E4EAF1] px-2.5 cursor-pointer">
                      <span className="inline-flex items-center bg-[#F4F6FA] text-[#5B6577] text-[12px] font-semibold px-3 py-1.5 rounded-[6px] shrink-0">
                        Choose File
                      </span>
                      <span className="text-[13px] text-[#9AA3B2] truncate">
                        {fileName || "No file chosen"}
                      </span>
                      <input
                        required
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                      />
                    </label>
                    <p className="mt-1.5 text-[12px] text-[#9AA3B2]">{data.form.resumeHint}</p>
                  </div>
                  <label className="block">
                    <span className={labelClass}>{renderLabel(data.form.coverLetter)}</span>
                    <textarea
                      value={values.cover}
                      onChange={(e) => update("cover", e.target.value)}
                      placeholder={data.form.coverPlaceholder}
                      className="w-full min-h-[110px] rounded-[10px] bg-white text-[#0B1B4D] text-[14px] placeholder:text-[#9AA3B2] px-4 py-3 outline-none border border-[#E4EAF1] focus:border-[#F5B400] resize-none"
                    />
                  </label>
                  <motion.button
                    type="submit"
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full h-[48px] rounded-[10px] bg-[#F5B400] hover:bg-[#e0a500] text-[#0B1B4D] font-bold text-[15px] inline-flex items-center justify-center gap-2"
                  >
                    {data.form.submitLabel}
                    <Send className="w-4 h-4" />
                  </motion.button>
                  <p className="flex items-center justify-center gap-1.5 text-[12px] text-[#9AA3B2]">
                    <Lock className="w-3 h-3" />
                    {data.form.privacyNote}
                  </p>
                </form>
              )}
            </div>

            <div className="rounded-[20px] bg-[#071433] p-5 sm:p-6 text-white overflow-hidden">
              <h3 className="text-[#F5B400] font-extrabold text-[20px] sm:text-[22px] leading-tight tracking-[-0.3px]">
                {data.whyJoin.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {data.whyJoin.items.map((item) => {
                  const ItemIcon = Icon(item.icon);
                  return (
                    <li key={item.text} className="flex items-center gap-3 text-[13px] sm:text-[14px] leading-[1.45] font-medium">
                      <ItemIcon className="w-[18px] h-[18px] text-[#F5B400] shrink-0" strokeWidth={2} />
                      {item.text}
                    </li>
                  );
                })}
              </ul>
              <div className="mt-5 rounded-[14px] overflow-hidden h-[160px] sm:h-[180px]">
                <img
                  src={data.whyJoin.image}
                  alt="Fixpoint workshop"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
