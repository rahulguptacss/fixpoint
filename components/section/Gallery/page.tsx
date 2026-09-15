"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { GalleryData } from "../../types";

type GalleryPhoto = GalleryData["photos"][number];
type GalleryVideo = GalleryData["videos"][number];
type GalleryItem = GalleryPhoto | GalleryVideo;

function uniqueBySrc<T extends { src: string }>(list: T[]): T[] {
  const seen = new Set<string>();
  return list.filter((item) => {
    if (seen.has(item.src)) return false;
    seen.add(item.src);
    return true;
  });
}

function isGalleryVideo(item: GalleryItem): item is GalleryVideo {
  return "videoUrl" in item && typeof item.videoUrl === "string";
}

export default function Gallery({ data }: { data: GalleryData }) {
  const [tab, setTab] = useState<"photo" | "video">("photo");
  const [filter, setFilter] = useState("all");
  const [activePhoto, setActivePhoto] = useState<{ src: string; alt: string } | null>(null);
  const [activeVideo, setActiveVideo] = useState<{ src: string; alt: string } | null>(null);

  const lightboxOpen = Boolean(activePhoto || activeVideo);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActivePhoto(null);
        setActiveVideo(null);
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxOpen]);

  const ease = [0.22, 1, 0.36, 1] as const;

  const fadeUp = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07 } },
  };

  const fadeItem = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease } },
  };

  const items = useMemo((): GalleryItem[] => {
    const list: GalleryItem[] = tab === "photo" ? data.photos : data.videos;
    const filtered = filter === "all" ? list : list.filter((item) => item.category === filter);
    return uniqueBySrc(filtered);
  }, [tab, filter, data.photos, data.videos]);

  return (
    <section
      className="w-full bg-white overflow-x-hidden"
      style={{ fontFamily: "var(--font-inter), sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-7 sm:pt-10 md:pt-12 pb-10 md:pb-16">
        <motion.div
          className="text-center mb-6 sm:mb-7 md:mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.h2
            variants={fadeUp}
            className="text-[28px] sm:text-[42px] lg:text-[56px] font-extrabold leading-[1.15] tracking-[-0.8px] px-1"
          >
            <span className="text-[#06194B]">{data.titlePart1} </span>
            <span className="text-[#F5B400]">{data.titleHighlight}</span>
          </motion.h2>
          <motion.p
            variants={fadeItem}
            className="mt-2.5 sm:mt-4 max-w-[620px] mx-auto text-[#6B7688] text-[13px] sm:text-[16px] lg:text-[18px] font-medium leading-[1.55] whitespace-pre-line"
          >
            {data.description}
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col xs:flex-row sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-4 mb-5 sm:mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {data.tabs.map((item) => {
            const Icon = (LucideIcons as any)[item.icon] || LucideIcons.Image;
            const active = tab === item.id;
            return (
              <motion.button
                key={item.id}
                type="button"
                variants={fadeItem}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  setTab(item.id);
                  setFilter("all");
                }}
                className={`
                  inline-flex items-center justify-center gap-2 sm:gap-3 rounded-[12px] sm:rounded-[14px]
                  px-4 sm:px-8 py-3 sm:py-[18px]
                  text-[14px] sm:text-[18px] font-bold transition-colors w-full sm:w-auto
                  ${
                    active
                      ? "bg-[#06194B] text-white shadow-md"
                      : "bg-white text-[#06194B] border-2 border-[#06194B] hover:bg-[#F8FAFC]"
                  }
                `}
              >
                <Icon
                  className={`w-5 h-5 sm:w-7 sm:h-7 ${active ? "text-[#FFC107]" : "text-[#06194B]"}`}
                  strokeWidth={2}
                />
                {item.label}
              </motion.button>
            );
          })}
        </motion.div>

        <motion.div
          className="flex flex-nowrap sm:flex-wrap items-center justify-start sm:justify-center gap-2 sm:gap-2.5 mb-6 sm:mb-8 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {data.filters.map((item) => {
            const active = filter === item.id;
            return (
              <motion.button
                key={item.id}
                type="button"
                variants={fadeItem}
                whileTap={{ scale: 0.96 }}
                onClick={() => setFilter(item.id)}
                className={`
                  shrink-0 rounded-[12px] px-5 sm:px-8 py-2.5 sm:py-3.5
                  text-[13px] sm:text-[16px] font-semibold leading-none
                  transition-colors
                  ${
                    active
                      ? "bg-[#FFC107] text-[#06194B] border border-[#FFC107]"
                      : "bg-white text-[#06194B] border border-[#E3E9F2] hover:border-[#C9D3E0]"
                  }
                `}
              >
                {item.label}
              </motion.button>
            );
          })}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${tab}-${filter}`}
            className="columns-1 sm:columns-2 lg:columns-3 gap-3 sm:gap-4 mb-8 md:mb-12"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.35, ease }}
          >
            {items.map((item, index) => (
              <motion.div
                key={`${item.src}-${index}`}
                className={`relative mb-3 sm:mb-4 break-inside-avoid overflow-hidden rounded-[12px] sm:rounded-[14px] group ${tab === "photo" ? "cursor-pointer" : ""}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.05, ease }}
                whileHover={{ y: -4 }}
                onClick={() => {
                  if (tab === "photo") setActivePhoto({ src: item.src, alt: item.alt });
                }}
                role={tab === "photo" ? "button" : undefined}
                tabIndex={tab === "photo" ? 0 : undefined}
                onKeyDown={(e) => {
                  if (tab === "photo" && (e.key === "Enter" || e.key === " ")) {
                    e.preventDefault();
                    setActivePhoto({ src: item.src, alt: item.alt });
                  }
                }}
              >
                <motion.img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.45 }}
                />
                {tab === "video" && isGalleryVideo(item) && (
                  <button
                    type="button"
                    onClick={() => setActiveVideo({ src: item.videoUrl, alt: item.alt })}
                    className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/35 transition-colors"
                    aria-label={`Play ${item.alt}`}
                  >
                    <motion.span
                      className="w-12 h-12 sm:w-[62px] sm:h-[62px] rounded-full bg-white text-[#1877F2] flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.94 }}
                    >
                      <LucideIcons.Play className="w-5 h-5 sm:w-6 sm:h-6 ml-0.5" fill="currentColor" />
                    </motion.span>
                  </button>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {items.length === 0 && (
          <p className="text-center text-[#7A8799] mb-8 text-[14px] sm:text-[15px]">
            No items in this category.
          </p>
        )}

        <motion.div
          className="rounded-[16px] sm:rounded-[18px] bg-[#06194B] px-4 sm:px-8 lg:px-10 py-5 sm:py-7 flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease }}
        >
          <div className="flex items-center gap-3 sm:gap-5 flex-1 w-full">
            <motion.div
              className="w-[50px] h-[50px] sm:w-[68px] sm:h-[68px] rounded-[12px] sm:rounded-[14px] border-2 border-[#FFC107] text-[#FFC107] flex items-center justify-center shrink-0"
              whileHover={{ rotate: 6, scale: 1.05 }}
            >
              <LucideIcons.Smartphone className="w-6 h-6 sm:w-9 sm:h-9" strokeWidth={1.8} />
            </motion.div>
            <div className="min-w-0">
              <h3 className="text-white text-[20px] sm:text-[28px] font-extrabold leading-tight">
                {data.cta.title}
              </h3>
              <p className="text-white/70 text-[12px] sm:text-[16px] mt-1 leading-[1.45] whitespace-pre-line">
                {data.cta.description}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-4 w-full lg:w-auto shrink-0">
            <motion.a
              href={`tel:${data.cta.phone.replace(/\s/g, "")}`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2.5 sm:gap-3 text-white font-bold text-[15px] sm:text-[19px] rounded-[12px] sm:rounded-[14px] border border-white/25 px-5 sm:px-8 py-3.5 sm:py-[18px] w-full sm:w-auto justify-center"
            >
              <LucideIcons.Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFC107]" strokeWidth={2} />
              {data.cta.phone}
            </motion.a>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Link
                href={data.cta.buttonLink}
                className="inline-flex items-center justify-center gap-2 sm:gap-2.5 bg-[#FFC107] hover:bg-[#F5B400] text-[#06194B] font-bold text-[15px] sm:text-[18px] rounded-[12px] sm:rounded-[14px] px-6 sm:px-9 py-3.5 sm:py-[18px] w-full transition-colors"
              >
                {data.cta.buttonLabel}
                <LucideIcons.ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.4} />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {activePhoto && (
          <motion.div
            className="fixed inset-0 z-[80] bg-black/80 backdrop-blur-[2px] flex items-center justify-center p-3 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhoto(null)}
          >
            <motion.div
              className="relative max-w-[92vw] max-h-[88vh]"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.28, ease }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActivePhoto(null)}
                className="absolute -top-3 -right-3 sm:top-2.5 sm:right-2.5 z-10 w-9 h-9 rounded-full bg-white text-[#06194B] flex items-center justify-center shadow-lg"
                aria-label="Close photo"
              >
                <LucideIcons.X className="w-5 h-5" />
              </button>
              <img
                src={activePhoto.src}
                alt={activePhoto.alt}
                className="max-w-[92vw] max-h-[88vh] w-auto h-auto object-contain rounded-xl sm:rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-[2px] flex items-center justify-center p-3 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              className="relative w-full max-w-[860px] bg-black rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.28, ease }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="absolute top-2.5 right-2.5 z-10 w-9 h-9 rounded-full bg-white/90 text-[#06194B] flex items-center justify-center"
                aria-label="Close video"
              >
                <LucideIcons.X className="w-5 h-5" />
              </button>
              <video
                src={activeVideo.src}
                title={activeVideo.alt}
                className="w-full max-h-[70vh] sm:max-h-[80vh] bg-black"
                controls
                autoPlay
                playsInline
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
