"use client";
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import { ServicesData } from '../../types';

export default function Services({ data }: { data: ServicesData }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="pt-10 pb-12 bg-[#F8FBFF] overflow-hidden" 
      style={{ fontFamily: 'var(--font-inter), sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-10 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="inline-block relative mb-2">
            <h4 className="text-[#021731] font-bold text-[14px] uppercase tracking-widest pb-1">
              {data.subtitle}
            </h4>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[40px] h-[2px] bg-[#FFB800]"></div>
          </div>
          
          <h2 className="text-[#021731] text-[36px] md:text-[50px] font-extrabold leading-[1.1] md:leading-[1.05] tracking-tight mt-3">
            {data.titlePart1}
            <span className="text-[#1877F2]">{data.titleHighlight}</span>
            <br className="hidden md:block" />
            {data.titlePart2}
            {data.titleHighlight2 && <span className="text-[#1877F2]">{data.titleHighlight2}</span>}
            {data.titlePart3}
          </h2>
          
          <div className="mt-5 flex items-center justify-center space-x-3">
            <div className="w-12 md:w-16 h-[2px] bg-[#021731]"></div>
            <div className="relative flex items-center justify-center animate-[spin_10s_linear_infinite]">
               <LucideIcons.Settings className="w-7 h-7 md:w-8 md:h-8 text-[#1877F2] fill-[#1877F2]" />
               <div className="absolute w-2.5 h-2.5 md:w-3 md:h-3 bg-white rounded-full flex items-center justify-center">
                 <div className="w-1 h-1 bg-[#1877F2] rounded-full"></div>
               </div>
            </div>
            <div className="w-12 md:w-16 h-[2px] bg-[#FFB800]"></div>
          </div>
        </div>
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-5 lg:gap-6">
          {data.items.map((item, index) => {
            const IconComponent = (LucideIcons as any)[item.icon] || LucideIcons.Wrench;
            const isYellow = item.id === 2 || item.id === 4;
            const borderColor = isYellow ? 'border-[#FFB800]' : 'border-[#0056D2]';
            const bgColor = isYellow ? 'bg-[#FFB800]' : 'bg-[#0056D2]';
            
            return (
              <Link
                href={`/services/${item.slug || "screen-repair"}`}
                key={item.id}
                className={`block cursor-pointer bg-white rounded-[32px] overflow-visible shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgb(0,0,0,0.14)] transition-all duration-500 group transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Image Section */}
                <div className="p-3 pb-0">
                  <div className={`relative h-[240px] md:h-[220px] rounded-[26px] border-[3px] ${borderColor} overflow-visible`}>
                    <div className="w-full h-full rounded-[22px] overflow-hidden">
                       <img 
                         src={item.image} 
                         alt={item.title} 
                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                       />
                    </div>
                    {/* Icon Badge */}
                    <div className={`absolute -bottom-10 left-1/2 -translate-x-1/2 ${bgColor} text-white p-4 rounded-full border-[8px] border-white shadow-md z-10 transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:rotate-12`}>
                      <IconComponent className="w-8 h-8 md:w-7 md:h-7 lg:w-8 lg:h-8" strokeWidth={2} />
                    </div>
                  </div>
                </div>
                
                {/* Text Content */}
                <div className="pt-12 px-6 lg:px-8 pb-6 text-center">
                  <h3 className="text-[20px] lg:text-[22px] font-bold text-[#021731] transition-colors duration-300 group-hover:text-[#1877F2]">
                    {item.title}
                  </h3>
                  <div className={`w-8 h-[3px] mx-auto mt-1.5 mb-2 rounded-full ${bgColor} transition-all duration-300 group-hover:w-16`}></div>
                  <p className="text-[#4A5568] text-[14px] lg:text-[15px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
