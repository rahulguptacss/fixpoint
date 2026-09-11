"use client";

import React, { useState } from "react";
import * as LucideIcons from "lucide-react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, User, ChevronDown, Send, Lock, Pencil } from "lucide-react";
import { ContactData } from "../../types";

const iconMap: Record<string, LucideIcons.LucideIcon> = {
  Phone,
  Mail,
  MapPin,
};

export default function Contact({ data }: { data: ContactData }) {
  const ease = [0.22, 1, 0.36, 1] as const;
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const update = (key: string, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const fieldClass =
    "w-full h-[56px] sm:h-[58px] rounded-[12px] bg-white text-[#0B1B4D] text-[14px] sm:text-[15px] placeholder:text-[#8A94A6] pl-11 pr-4 outline-none border border-transparent focus:border-[#F5B400]";
  const areaClass =
    "w-full min-h-[160px] sm:min-h-[180px] rounded-[12px] bg-white text-[#0B1B4D] text-[14px] sm:text-[15px] placeholder:text-[#8A94A6] pl-11 pr-4 pt-4 outline-none border border-transparent focus:border-[#F5B400] resize-none";
  const titleWords = data.form.title.trim().split(" ");
  const titleLast = titleWords.pop() || "";
  const titleRest = titleWords.join(" ");

  return (
    <section
      className="w-full bg-white"
      style={{ fontFamily: "var(--font-inter), sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 lg:pt-12 pb-10 md:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
          >
            <p className="relative inline-block text-[#F5B400] font-bold text-[13px] sm:text-[14px] tracking-[0.14em] uppercase pb-2">
              {data.subtitle}
              <span className="absolute left-0 bottom-0 w-9 h-[3px] rounded-full bg-[#F5B400]" />
            </p>
            <h1 className="mt-4 sm:mt-5 font-extrabold leading-[1.12] tracking-[-0.7px]">
              <span className="block text-[#0B1B4D] text-[34px] sm:text-[44px] lg:text-[52px]">
                {data.titlePart1}
              </span>
              <span className="relative inline-block text-[#F5B400] text-[34px] sm:text-[44px] lg:text-[52px] pb-1.5">
                {data.titleHighlight}
                <span className="absolute left-0 bottom-0 w-full h-[3px] rounded-full bg-[#F5B400]" />
              </span>
            </h1>
            <p className="mt-3 sm:mt-4 text-[#8A94A6] text-[15px] sm:text-[16px] lg:text-[17px] font-normal leading-[1.7] max-w-[430px]">
              {data.description}
            </p>

            <div className="mt-4 sm:mt-5">
              {data.info.map((item, index) => {
                const Icon = iconMap[item.icon] || Phone;
                const isLocation = item.icon === "MapPin";
                return (
                  <motion.div
                    key={item.title}
                    className={`flex items-start gap-4 sm:gap-5 py-3.5 ${
                      index < data.info.length - 1 ? "border-b border-[#E8EEF4]" : ""
                    }`}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.08 * index, ease }}
                  >
                    <span className="w-[52px] h-[52px] sm:w-[56px] sm:h-[56px] rounded-full bg-[#0B1B4D] text-[#F5B400] flex items-center justify-center shrink-0">
                      <Icon className="w-[22px] h-[22px] sm:w-6 sm:h-6" strokeWidth={2} />
                    </span>
                    <div className="min-w-0 pt-0.5">
                      <p className="text-[#0B1B4D] font-bold text-[16px] sm:text-[17px] leading-tight">
                        {item.title}
                      </p>
                      {item.lines.map((line, i) => (
                        <p
                          key={line}
                          className={
                            isLocation
                              ? "text-[#3D4A5C] text-[14px] sm:text-[15px] font-normal leading-[1.55] mt-0.5"
                              : i === 0
                                ? "text-[#0B1B4D] font-bold text-[15px] sm:text-[16px] leading-snug mt-1"
                                : "text-[#8A94A6] text-[13px] sm:text-[14px] font-normal mt-0.5"
                          }
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="bg-[#06153A] rounded-[22px] p-5 sm:p-8 lg:p-9 shadow-[0_20px_50px_rgba(6,21,58,0.22)]"
          >
            <h2 className="text-white text-center text-[26px] sm:text-[30px] font-extrabold mb-7">
              {titleRest ? `${titleRest} ` : ""}
              <span className="relative inline-block pb-1.5">
                {titleLast}
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[42px] h-[3px] rounded-full bg-[#F5B400]" />
              </span>
            </h2>

            {submitted ? (
              <p className="text-center text-white/90 py-10 text-[16px]">
                Thanks! Your message has been sent. We will get back to you soon.
              </p>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="relative block">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A94A6]" />
                    <input
                      required
                      value={values.firstName}
                      onChange={(e) => update("firstName", e.target.value)}
                      placeholder={data.form.firstName}
                      className={fieldClass}
                    />
                  </label>
                  <label className="relative block">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A94A6]" />
                    <input
                      required
                      value={values.lastName}
                      onChange={(e) => update("lastName", e.target.value)}
                      placeholder={data.form.lastName}
                      className={fieldClass}
                    />
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="relative block">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A94A6]" />
                    <input
                      required
                      type="email"
                      value={values.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder={data.form.email}
                      className={fieldClass}
                    />
                  </label>
                  <label className="relative block">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A94A6]" />
                    <input
                      required
                      value={values.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder={data.form.phone}
                      className={fieldClass}
                    />
                  </label>
                </div>

                <label className="relative block">
                  <Pencil className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A94A6] pointer-events-none" />
                  <select
                    required
                    value={values.service}
                    onChange={(e) => update("service", e.target.value)}
                    className={`${fieldClass} appearance-none pr-10`}
                  >
                    <option value="">{data.form.servicePlaceholder}</option>
                    {data.form.services.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A94A6] pointer-events-none" />
                </label>

                <label className="relative block">
                  <Pencil className="absolute left-3.5 top-4 w-4 h-4 text-[#8A94A6]" />
                  <textarea
                    required
                    value={values.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder={data.form.message}
                    className={areaClass}
                  />
                </label>

                <motion.button
                  type="submit"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full h-[56px] sm:h-[58px] rounded-[12px] bg-[#F5B400] hover:bg-[#e0a500] text-[#0B1B4D] font-bold text-[15px] sm:text-[16px] inline-flex items-center justify-center gap-2 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  {data.form.submitLabel}
                </motion.button>

                <p className="flex items-center justify-center gap-1.5 text-white/70 text-[12px] sm:text-[13px] pt-1">
                  <Lock className="w-3.5 h-3.5" />
                  {data.form.privacyNote}
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 md:pb-14">
        <motion.div
          className="relative w-full h-[240px] sm:h-[300px] lg:h-[340px] rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(15,40,80,0.08)]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease }}
        >
          <iframe
            title="Location map"
            src={data.map.embedUrl}
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-full pointer-events-none drop-shadow-md">
            <svg width="36" height="48" viewBox="0 0 36 48" fill="none">
              <path
                d="M18 46C18 46 32 29 32 18C32 9.16 25.73 2 18 2S4 9.16 4 18C4 29 18 46 18 46Z"
                fill="#0B1B4D"
              />
              <circle cx="18" cy="18" r="8" fill="#F5B400" />
            </svg>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12, ease }}
            className="absolute top-4 left-4 sm:top-6 sm:left-6 w-[min(100%-32px,280px)] bg-white rounded-[16px] px-4 py-3.5 shadow-[0_10px_28px_rgba(15,40,80,0.14)]"
          >
            <div className="flex items-start gap-2.5">
              <MapPin className="w-5 h-5 text-[#F5B400] shrink-0 mt-0.5" strokeWidth={2.4} />
              <div className="min-w-0">
                <p className="text-[#0B1B4D] font-bold text-[14px] sm:text-[15px] leading-tight">
                  {data.map.cardTitle}
                </p>
                <p className="text-[#6B7688] text-[12px] sm:text-[13px] leading-[1.55] mt-1 whitespace-pre-line">
                  {data.map.cardAddress}
                </p>
                <a
                  href={data.map.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-1.5 text-[#1877F2] text-[12px] sm:text-[13px] font-semibold hover:underline"
                >
                  {data.map.mapsLabel}
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
