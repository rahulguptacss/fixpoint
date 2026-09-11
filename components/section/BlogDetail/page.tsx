"use client";

import React from "react";
import Link from "next/link";
import { User, Phone, Mail, ChevronRight, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { BlogDetailData, BlogDetailPost } from "../../types";

export default function BlogDetail({
  data,
  post,
}: {
  data: BlogDetailData;
  post: BlogDetailPost;
}) {
  const ease = [0.22, 1, 0.36, 1] as const;
  const { sidebar } = data;

  const recent =
    sidebar.recentPosts && sidebar.recentPosts.length
      ? sidebar.recentPosts
      : data.posts
          .filter((item) => item.slug !== post.slug)
          .slice(0, 5)
          .map((item) => ({
            title: item.title,
            date: item.date,
            image: item.heroImage,
            href: `/blog/${item.slug}`,
          }));

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
  };

  return (
    <section
      className="w-full bg-white"
      style={{ fontFamily: "var(--font-inter), sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 sm:pt-7 pb-12 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px] gap-8 lg:gap-10 items-start">
          <motion.article
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="min-w-0"
          >
            <span className="inline-flex items-center bg-[#F5B400] text-white text-[11px] sm:text-[12px] font-bold tracking-[0.08em] uppercase px-3 py-[5px] rounded-md">
              {post.category}
            </span>
            <h1 className="mt-5 sm:mt-6 text-[28px] sm:text-[40px] lg:text-[44px] font-extrabold text-[#0B1B4D] leading-[1.18] tracking-[-0.6px]">
              {post.title}
            </h1>
            <p className="mt-4 sm:mt-5 text-[#8A94A6] text-[15px] sm:text-[17px] font-normal leading-[1.65] max-w-[640px]">
              {post.excerpt}
            </p>
            <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-2 text-[13px] sm:text-[14px] font-medium text-[#3D4A5C]">
              <span className="inline-flex items-center gap-1.5 font-semibold text-[#2B3A52]">
                <User className="w-[15px] h-[15px] text-[#5A6A80]" strokeWidth={2} />
                {post.author}
              </span>
              <span className="w-[5px] h-[5px] rounded-full bg-[#F5B400] shrink-0" />
              <span>{post.date}</span>
              <span className="w-[5px] h-[5px] rounded-full bg-[#F5B400] shrink-0" />
              <span>{post.readTime}</span>
            </div>

            <div className="mt-6 rounded-[16px] overflow-hidden">
              <img src={post.heroImage} alt={post.title} className="w-full h-[220px] sm:h-[340px] object-cover" />
            </div>

            <p className="mt-6 text-[#5A6478] text-[14px] sm:text-[16px] leading-[1.8]">
              {post.intro}
            </p>

            <div className="mt-8 sm:mt-10">
              {post.signs.map((sign, index) => (
                <motion.div
                  key={sign.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05, ease }}
                  className={`py-7 sm:py-8 ${index < post.signs.length - 1 ? "border-b border-[#E8EEF5]" : ""}`}
                >
                  <h2 className="text-[18px] sm:text-[22px] font-bold text-[#0B1B4D] leading-tight mb-4">
                    {sign.title}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-[180px_minmax(0,1fr)] gap-4 sm:gap-5 items-start">
                    <img
                      src={sign.image}
                      alt={sign.title}
                      className="w-full sm:w-[180px] h-[140px] sm:h-[132px] rounded-[12px] object-cover"
                    />
                    <div>
                      <p className="text-[#7A8494] text-[14px] sm:text-[15.5px] font-normal leading-[1.7]">
                        {sign.text}
                      </p>
                      <div className="mt-4 flex items-start gap-3 bg-[#FFF8E8] rounded-[12px] px-4 py-3.5">
                        <Lightbulb className="w-[18px] h-[18px] text-[#F5B400] shrink-0 mt-0.5" strokeWidth={2} />
                        <p className="text-[#6B5E3A] text-[13px] sm:text-[14px] font-medium leading-[1.55]">
                          {sign.bullet}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.article>

          <aside className="w-full self-start lg:sticky lg:top-[90px]">
            <motion.div
              className="space-y-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.1, ease }}
            >
            <div className="bg-white rounded-[16px] p-5 sm:p-[22px] border border-[#E8EEF4] shadow-[0_8px_24px_rgba(15,40,80,0.04)]">
              <h3 className="text-[#0B1B4D] font-bold text-[20px] leading-tight mb-3">{sidebar.aboutTitle}</h3>
              <p className="text-[#7A8494] text-[14px] font-normal leading-[1.7]">{sidebar.aboutText}</p>
              <Link
                href={sidebar.aboutButtonLink}
                className="mt-5 inline-flex items-center justify-center bg-[#0B1B4D] hover:bg-[#15285A] text-white font-semibold text-[14px] px-6 py-2.5 rounded-md transition-colors"
              >
                {sidebar.aboutButtonLabel}
              </Link>
            </div>

            <div className="bg-white rounded-[16px] p-5 sm:p-[22px] border border-[#E8EEF4] shadow-[0_8px_24px_rgba(15,40,80,0.04)]">
              <h3 className="text-[#0B1B4D] font-bold text-[20px] leading-tight mb-5">{sidebar.recentTitle}</h3>
              <div className="space-y-5">
                {recent.map((item) => (
                  <Link key={item.title} href={item.href} className="flex gap-3.5 group items-start">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-[72px] h-[72px] rounded-[10px] object-cover shrink-0"
                    />
                    <div className="min-w-0 pt-0.5">
                      <p className="text-[#0B1B4D] font-bold text-[14px] leading-[1.35] group-hover:text-[#1877F2] transition-colors">
                        {item.title}
                      </p>
                      <p className="text-[#8A94A6] text-[12px] font-normal mt-1.5">{item.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-[16px] p-5 sm:p-[22px] border border-[#E8EEF4] shadow-[0_8px_24px_rgba(15,40,80,0.04)]">
              <h3 className="text-[#0B1B4D] font-bold text-[20px] leading-tight mb-2">{sidebar.categoriesTitle}</h3>
              <div className="divide-y divide-[#E8EEF4]">
                {sidebar.categories.map((cat) => (
                  <Link
                    key={cat.label}
                    href={cat.href}
                    className="flex items-center justify-between py-3.5 text-[14px] font-medium text-[#3D4A5C] hover:text-[#1877F2] transition-colors"
                  >
                    {cat.label}
                    <ChevronRight className="w-4 h-4 text-[#8A94A6]" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-[16px] p-5 sm:p-[22px] border border-[#E8EEF4] shadow-[0_8px_24px_rgba(15,40,80,0.04)]">
              <h3 className="text-[#0B1B4D] font-bold text-[20px] leading-tight mb-3">{sidebar.helpTitle}</h3>
              <p className="text-[#7A8494] text-[14px] font-normal leading-[1.7]">{sidebar.helpText}</p>
              <div className="mt-4 space-y-2.5 text-[14px] font-medium text-[#3D4A5C]">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#0B1B4D]" />
                  {sidebar.helpPhone}
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#0B1B4D]" />
                  {sidebar.helpEmail}
                </p>
              </div>
              <Link
                href={sidebar.helpButtonLink}
                className="mt-5 inline-flex items-center justify-center bg-[#0B1B4D] hover:bg-[#15285A] text-white font-semibold text-[14px] px-6 py-2.5 rounded-md transition-colors"
              >
                {sidebar.helpButtonLabel}
              </Link>
            </div>
            </motion.div>
          </aside>
        </div>
      </div>
    </section>
  );
}
