'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function MobileAccordion({ 
  title, 
  children,
  isLast = false
}: { 
  title: string;
  children: React.ReactNode;
  isLast?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`md:hidden border-t border-[#1e3450] ${isLast ? 'border-b mb-6' : ''}`}>
      <button 
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full flex justify-between items-center py-4 font-bold text-white text-[16px] min-h-11"
      >
        {title}
        <ChevronDown className={`w-5 h-5 text-[#A0AABF] transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#1877F2]' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-4 pt-1">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
