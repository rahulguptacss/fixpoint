"use client";
import React, { useEffect, useRef, useState } from 'react';
import * as LucideIcons from 'lucide-react';
import { StatsData } from '../../types';

function AnimatedCounter({ valueStr }: { valueStr: string }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Extract number and suffix (e.g. "15,000+" -> 15000, "+")
  const targetNumber = parseInt(valueStr.replace(/[^0-9]/g, ''), 10) || 0;
  const suffix = valueStr.replace(/[0-9,]/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTimestamp: number | null = null;
    const duration = 2500; // 2.5 seconds
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function (easeOutExpo)
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * targetNumber));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [isVisible, targetNumber]);

  return (
    <span ref={nodeRef}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Stats({ data }: { data: StatsData }) {
  return (
    <section 
      className="relative py-12 md:py-16 bg-[#021731] overflow-hidden"
      style={{ fontFamily: 'var(--font-inter), sans-serif' }}
    >
      {/* Background Image Overlay with deep navy tint */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url('/hero/herocover.png')` }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {data.items.map((stat, index) => {
            const IconComponent = (LucideIcons as any)[stat.icon] || LucideIcons.Activity;
            
            // Dynamic border classes for 2x2 mobile grid and 4x1 desktop grid
            let borderClasses = "border-[#1877F2]/30 ";
            if (index === 0) borderClasses += "border-r border-b md:border-b-0";
            else if (index === 1) borderClasses += "border-b md:border-b-0 md:border-r";
            else if (index === 2) borderClasses += "border-r";
            else borderClasses = "";
              
            return (
              <div 
                key={stat.id} 
                className={`flex flex-col items-center justify-center text-center py-10 px-2 md:py-4 md:px-4 ${borderClasses}`}
              >
                <div className="text-[#1877F2] mb-5 md:mb-6 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                  <IconComponent className="w-10 h-10 md:w-11 md:h-11" strokeWidth={1.5} />
                </div>
                <h3 className="text-white text-[32px] md:text-[42px] lg:text-[46px] font-bold leading-tight mb-2 tracking-tight">
                  <AnimatedCounter valueStr={stat.value} />
                </h3>
                <p className="text-white font-medium tracking-wide text-[14px] md:text-[16px]">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
