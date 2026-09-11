"use client";
import React, { useEffect, useState } from 'react';
import { WhyChooseUsData } from '../../types';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyChooseUs({ data }: { data: WhyChooseUsData }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <section className="pt-8 pb-16 md:pt-12 md:pb-24 bg-white overflow-hidden" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Images and Overlays */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInLeft}
          >
            <div className="relative rounded-2xl overflow-hidden z-0 shadow-lg group">
              <motion.img 
                src={data.image} 
                alt="Mobile Repair Technician" 
                className="w-full h-auto object-cover md:h-[600px] transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Dark Card Overlay */}
            <motion.div 
              className="absolute -bottom-10 right-4 md:-right-10 bg-[#021124] text-white p-8 rounded-2xl z-20 w-[300px] shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-[#1877F2] text-[15px] font-medium mb-3">
                {data.overlayCard.subtitle}
              </p>
              <h3 className="text-[26px] font-bold mb-3 leading-tight">
                {data.overlayCard.title}
              </h3>
              <p className="text-gray-400 text-[15px] leading-relaxed">
                {data.overlayCard.description}
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            className="w-full lg:w-1/2 mt-16 lg:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInRight}
          >
            {/* Subtitle with accent line/dot */}
            <div className="flex flex-col items-start mb-4">
              <h4 className="text-[#1877F2] font-semibold text-[16px] uppercase tracking-wider mb-2">
                {data.subtitle}
              </h4>
              <div className="flex items-center gap-1">
                <motion.div 
                  className="h-[2px] bg-[#1877F2]" 
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                ></motion.div>
                <motion.div 
                  className="w-2 h-2 rounded-full bg-[#1877F2] opacity-50"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 1 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
            </div>
            
            <h2 className="text-[#021731] text-[36px] md:text-[44px] font-bold leading-[1.15] mb-8 tracking-tight">
              {data.title}
            </h2>

            {/* Features List */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 mb-10"
              variants={staggerContainer}
            >
              {data.features.map((feature, idx) => (
                <motion.div key={idx} className="flex items-center" variants={fadeInUp}>
                  <div className="w-6 h-6 rounded-full bg-[#1877F2] flex items-center justify-center mr-3 shrink-0">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-[#4A5568] font-medium text-[16px]">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Progress Bars */}
            <motion.div 
              className="space-y-6"
              variants={staggerContainer}
            >
              {data.progressBars.map((bar, idx) => (
                <motion.div key={idx} className="flex flex-col" variants={fadeInUp}>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-[#021731] font-semibold text-[16px]">{bar.label}</span>
                    <span className="text-[#64748B] text-[15px] font-medium">{bar.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-[4px] rounded-full overflow-hidden flex">
                    <motion.div 
                      className="bg-[#1877F2] h-full rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${bar.percentage}%` }}
                      transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
