"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import { HeroData } from '../../types';

export default function Hero({ data }: { data: HeroData }) {
  const [isMounted, setIsMounted] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative w-full bg-black text-white overflow-hidden" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
      
      {/* Custom Styles for Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseRing {
          0% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.3); opacity: 0; }
          100% { transform: scale(1); opacity: 0; }
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .pulse-ring::before {
          content: '';
          position: absolute;
          inset: -20px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          animation: pulseRing 2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        .pulse-ring::after {
          content: '';
          position: absolute;
          inset: -40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          animation: pulseRing 2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
          animation-delay: 0.5s;
        }
      `}} />

      {/* Background Image Overlay */}
      <div 
        className={`absolute inset-0 bg-cover bg-[position:80%_center] md:bg-center bg-no-repeat transition-opacity duration-1000 ${isMounted ? 'opacity-100' : 'opacity-0'}`}
        style={{ 
          backgroundImage: `url('/hero/herocover.png')`,
          filter: 'brightness(0.8)'
        }}
      />
      
      {/* Dark Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Content */}
        <div className="w-full md:w-[60%] lg:w-[50%]">
          {/* Badge */}
          <div className="animate-fade-in-up inline-block bg-[#1877F2] text-white text-[13px] font-semibold px-4 py-1.5 rounded-md mb-6 shadow-sm">
            {data.badge}
          </div>
          
          {/* Title */}
          <h1 className="animate-fade-in-up delay-100 text-[56px] md:text-[64px] font-bold leading-[1.1] mb-6 tracking-tight">
            {data.titlePart1}<span className="text-[#1877F2]">.</span><br />
            {data.titleHighlight}<span className="text-[#1877F2]">.</span>
          </h1>
          
          {/* Description */}
          <p className="animate-fade-in-up delay-200 text-[18px] text-gray-300 mb-10 leading-relaxed max-w-lg">
            {data.description}
          </p>
          
          {/* Buttons */}
          <div className="animate-fade-in-up delay-300 flex flex-col md:flex-row gap-6 md:gap-4 items-start md:items-center">
            <Link 
              href={data.buttonPrimary.href}
              className="inline-flex w-fit bg-[#1877F2] hover:bg-blue-600 text-white font-semibold text-[16px] py-[14px] px-[32px] rounded-md items-center transition-all duration-300 shadow-[0_4px_14px_0_rgba(24,119,242,0.39)] hover:shadow-[0_6px_20px_rgba(24,119,242,0.23)] hover:-translate-y-0.5"
            >
              {data.buttonPrimary.label}
              <LucideIcons.ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            
            <button 
              onClick={(e) => { e.preventDefault(); setIsVideoOpen(true); }}
              className="flex items-center gap-4 text-white font-semibold text-[16px] transition-all duration-300 hover:opacity-80 group"
            >
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110">
                <LucideIcons.Play className="w-5 h-5 ml-1 text-[#1877F2] fill-[#1877F2]" />
              </div>
              {data.buttonSecondary.label}
            </button>
          </div>
        </div>

        {/* Right Content - Play Button */}
        <div className="hidden md:flex w-[40%] lg:w-[50%] justify-center animate-fade-in-up delay-400">
          <div className="relative cursor-pointer group" onClick={() => setIsVideoOpen(true)}>
            <div className="pulse-ring absolute inset-0 rounded-full"></div>
            <div className="relative bg-white w-24 h-24 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(0,0,0,0.3)] transition-transform duration-300 group-hover:scale-110 z-10">
              <LucideIcons.Play className="w-10 h-10 text-[#1877F2] ml-1 fill-[#1877F2]" />
            </div>
          </div>
        </div>
        
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" style={{ animation: 'fadeIn 0.3s ease-out' }}>
          <style dangerouslySetInnerHTML={{__html: `@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`}} />
          <div className="relative w-full max-w-4xl bg-black rounded-lg shadow-2xl overflow-hidden aspect-video transform transition-all">
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 p-2 rounded-full transition-all"
            >
              <LucideIcons.X className="w-6 h-6" />
            </button>
            <iframe 
              className="w-full h-full"
              src={data.videoUrl || "https://www.youtube.com/embed/R2_4e1a0m6U?autoplay=1"}  
              title="Repair Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

    </section>
  );
}
