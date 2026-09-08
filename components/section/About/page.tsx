"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { AboutData } from '../../types';

export default function About({ data }: { data: AboutData }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const target = parseInt(data.experienceYears) || 10;
    let start = 0;
    const duration = 2000; // 2 seconds animation
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [data.experienceYears]);

  return (
    <section className="py-16 bg-white" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Content (Text) */}
          <div className="w-full lg:w-[45%]">
            <h4 className="text-[#1877F2] font-bold text-[14px] uppercase tracking-widest mb-2 md:mb-4">
              {data.subtitle}
            </h4>
            <h2 className="text-[#021731] text-[36px] md:text-[42px] font-bold leading-[1.15] mb-4 md:mb-6 tracking-tight">
              {data.title}
            </h2>
            <p className="text-[#4A5568] text-[17px] leading-[1.8] mb-6 md:mb-8">
              {data.description}
            </p>
            
            <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10">
              {data.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-[#021731] font-medium text-[17px]">
                  <CheckCircle2 className="w-6 h-6 text-[#1877F2] mr-3 shrink-0" strokeWidth={2} />
                  {feature.text}
                </li>
              ))}
            </ul>
            
            <Link 
              href={data.buttonLink}
              className="inline-block bg-[#1877F2] hover:bg-blue-600 text-white font-semibold text-[16.5px] py-[14px] px-[36px] rounded-md transition-all duration-300 shadow-[0_4px_14px_0_rgba(24,119,242,0.39)] hover:shadow-[0_6px_20px_rgba(24,119,242,0.23)] hover:-translate-y-0.5"
            >
              {data.buttonText}
            </Link>
          </div>
          
          {/* Right Content (Images) */}
          <div className="w-full lg:w-[55%] relative mt-12 lg:mt-0">
            <div className="flex items-center">
              
              {/* Large Image (Left) */}
              <div className="w-[70%] relative z-0">
                <img 
                  src={data.images[0]} 
                  alt="Repair Technician" 
                  className="w-full h-[550px] object-cover rounded-[24px] shadow-md"
                />
              </div>

              {/* Stacked Images (Right) */}
              <div className="w-[40%] flex flex-col gap-6 -ml-[10%] relative z-10">
                <img 
                  src={data.images[1]} 
                  alt="Repair Store" 
                  className="w-full h-[240px] object-cover rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.15)] border-[8px] border-white bg-white"
                />
                <img 
                  src={data.images[2]} 
                  alt="Phone Repair Close up" 
                  className="w-full h-[240px] object-cover rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.15)] border-[8px] border-white bg-white"
                />
              </div>

            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-10 -left-10 bg-gradient-to-b from-[#1877F2] to-[#0A4B9F] rounded-2xl p-6 flex flex-col items-center justify-center text-center z-20 w-[170px] h-[180px] shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <span className="text-white text-[52px] font-bold leading-none mb-3">
                {count}{data.experienceYears.includes('+') ? '+' : ''}
              </span>
              <span className="text-white/90 text-[16px] font-normal leading-relaxed">
                Years of<br/>Experience
              </span>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
