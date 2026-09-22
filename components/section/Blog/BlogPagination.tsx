"use client";

import React, { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BlogPagination({ totalPages }: { totalPages: number }) {
  const [page, setPage] = useState(1);
  const currentPage = Math.min(page, totalPages);

  const goToPage = (next: number) => {
    const clamped = Math.min(Math.max(next, 1), totalPages);
    setPage(clamped);
    document.getElementById("blog-list")?.scrollIntoView({ behavior: "smooth", block: "start" });
    document.querySelectorAll<HTMLElement>("[data-blog-page]").forEach((el) => {
      el.hidden = Number(el.dataset.blogPage) !== clamped;
    });
  };

  const nums = useMemo(() => Array.from({ length: totalPages }, (_, i) => i + 1), [totalPages]);
  if (totalPages <= 1) return null;

  return (
    <nav className="mt-10 flex items-center justify-center gap-2 sm:gap-2.5" aria-label="Blog pagination">
      <button
        type="button"
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-10 h-10 sm:w-11 sm:h-11 rounded-[10px] border border-[#E3E9F2] bg-white text-[#06194B] flex items-center justify-center disabled:opacity-35"
        aria-label="Previous page"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      {nums.map((num) => (
        <button
          key={num}
          type="button"
          onClick={() => goToPage(num)}
          className={`min-w-10 h-10 sm:min-w-11 sm:h-11 px-3 rounded-[10px] text-[14px] font-bold ${
            num === currentPage
              ? "bg-[#06194B] text-white"
              : "bg-white border border-[#E3E9F2] text-[#06194B]"
          }`}
          aria-current={num === currentPage ? "page" : undefined}
        >
          {num}
        </button>
      ))}
      <button
        type="button"
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-10 h-10 sm:w-11 sm:h-11 rounded-[10px] border border-[#E3E9F2] bg-white text-[#06194B] flex items-center justify-center disabled:opacity-35"
        aria-label="Next page"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </nav>
  );
}
