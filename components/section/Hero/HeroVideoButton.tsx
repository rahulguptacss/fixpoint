"use client";

import React, { useState } from "react";
import { Play, X } from "lucide-react";

export default function HeroVideoButton({
  label,
  videoUrl,
}: {
  label: string;
  videoUrl?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex items-center gap-4 text-white font-semibold text-[16px] transition-opacity hover:opacity-80 min-h-11"
        aria-label={label}
      >
        <span className="bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-md" aria-hidden>
          <Play className="w-5 h-5 ml-1 text-[#1558C0] fill-[#1558C0]" />
        </span>
        {label}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Repair video"
          onClick={() => setOpen(false)}
        >
          <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden aspect-video" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 z-10 text-white bg-black/80 p-2 rounded-full min-w-11 min-h-11 flex items-center justify-center"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>
            <iframe
              className="w-full h-full"
              src={videoUrl || "https://www.youtube.com/embed/R2_4e1a0m6U?autoplay=1"}
              title="Repair Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
