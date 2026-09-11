"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { HeaderData, MenuItem } from '../../types';

export default function Header({ data }: { data: HeaderData }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const hasActive = (item: MenuItem): boolean => {
    if (isActive(item.href)) return true;
    return item.subItems?.some((sub) => hasActive(sub)) ?? false;
  };

  const closeMobile = () => {
    setIsMobileMenuOpen(false);
    setOpenGroup(null);
  };

  const Chevron = ({ className = "" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
    </svg>
  );

  const ChevronRight = ({ className = "" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
    </svg>
  );

  const dropdownEase = [0.22, 1, 0.36, 1] as const;

  const DesktopSubmenu = ({ items }: { items: MenuItem[] }) => (
    <div className="bg-white border border-gray-100 rounded-lg shadow-xl py-2 min-w-[220px]">
      {items.map((sub, sIdx) =>
        sub.subItems && sub.subItems.length > 0 ? (
          <DesktopNestedItem key={sIdx} item={sub} />
        ) : (
          <Link
            key={sIdx}
            href={sub.href}
            className={`block px-5 py-2.5 text-[15px] font-medium transition-colors ${
              isActive(sub.href)
                ? 'bg-blue-50 text-[#1877F2]'
                : 'text-gray-700 hover:bg-gray-50 hover:text-[#1877F2]'
            }`}
          >
            {sub.label}
          </Link>
        )
      )}
    </div>
  );

  const DesktopNestedItem = ({ item }: { item: MenuItem }) => {
    const [open, setOpen] = useState(false);
    const timer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

    const show = () => {
      if (timer.current) clearTimeout(timer.current);
      setOpen(true);
    };
    const hide = () => {
      timer.current = setTimeout(() => setOpen(false), 80);
    };

    return (
      <div className="relative" onMouseEnter={show} onMouseLeave={hide}>
        <div
          className={`flex items-center justify-between px-5 py-2.5 text-[15px] font-medium cursor-pointer ${
            hasActive(item) || open
              ? 'bg-blue-50 text-[#1877F2]'
              : 'text-gray-700 hover:bg-gray-50 hover:text-[#1877F2]'
          }`}
        >
          <span>{item.label}</span>
          <ChevronRight className={`w-3.5 h-3.5 ml-3 shrink-0 transition-transform duration-200 ${open ? 'translate-x-0.5' : ''}`} />
        </div>
        <AnimatePresence>
          {open && item.subItems && (
            <motion.div
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              transition={{ duration: 0.22, ease: dropdownEase }}
              className="absolute left-full top-0 pl-1.5 z-[60]"
            >
              <DesktopSubmenu items={item.subItems} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const DesktopNavItem = ({ item }: { item: MenuItem }) => {
    const [open, setOpen] = useState(false);
    const timer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

    const show = () => {
      if (timer.current) clearTimeout(timer.current);
      setOpen(true);
    };
    const hide = () => {
      timer.current = setTimeout(() => setOpen(false), 80);
    };

    return (
      <div className="relative" onMouseEnter={show} onMouseLeave={hide}>
        <button
          className={`flex items-center text-[18px] font-semibold transition-colors ${
            hasActive(item) || open ? 'text-[#1877F2]' : 'text-[#021731] hover:text-[#1877F2]'
          }`}
        >
          {item.label}
          <Chevron className={`w-4 h-4 ml-1 mt-0.5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
        </button>
        <AnimatePresence>
          {open && item.subItems && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.28, ease: dropdownEase }}
              className="absolute left-0 top-full pt-3 z-50"
            >
              <DesktopSubmenu items={item.subItems} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const MobileItems = ({ items, parentKey, depth = 0 }: { items: MenuItem[]; parentKey: string; depth?: number }) => (
    <div className={depth === 0 ? "pl-4 pr-2 pb-2 space-y-1" : "pl-3 space-y-1"}>
      {items.map((sub, sIdx) => {
        const key = `${parentKey}-${sub.label}`;
        if (sub.subItems && sub.subItems.length > 0) {
          const isOpen = openGroup === key;
          return (
            <div key={sIdx}>
              <button
                type="button"
                onClick={() => setOpenGroup(isOpen ? parentKey : key)}
                className={`w-full px-4 py-2.5 rounded-md text-[15px] font-medium flex items-center justify-between ${
                  hasActive(sub) ? 'text-[#1877F2] bg-blue-50' : 'text-gray-600 hover:text-[#1877F2] hover:bg-gray-50'
                }`}
              >
                {sub.label}
                <Chevron className={`w-3.5 h-3.5 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial="hidden"
                      animate="show"
                      variants={{
                        hidden: {},
                        show: { transition: { staggerChildren: 0.07, delayChildren: 0.12 } },
                      }}
                    >
                      <MobileItems items={sub.subItems} parentKey={key} depth={depth + 1} />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        }
        return (
          <motion.div
            key={sIdx}
            variants={{
              hidden: { opacity: 0, y: -6 },
              show: { opacity: 1, y: 0, transition: { duration: 0.28 } },
            }}
          >
          <Link
            href={sub.href}
            className={`block px-4 py-2.5 rounded-md text-[15px] font-medium transition-colors ${
              isActive(sub.href)
                ? 'text-[#1877F2] bg-blue-50'
                : 'text-gray-600 hover:text-[#1877F2] hover:bg-gray-50'
            }`}
            onClick={closeMobile}
          >
            {sub.label}
          </Link>
          </motion.div>
        );
      })}
    </div>
  );

  return (
    <header className={`w-full sticky top-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div 
        className={`w-full bg-white transition-all duration-300 ease-in-out ${isScrolled ? 'bg-white/95 backdrop-blur-md' : 'bg-white'}`}
        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-300 ease-in-out ${isScrolled ? 'h-[70px]' : 'h-[85px]'}`}>
            
            <div className="flex-shrink-0 flex items-center h-full">
              <Link href="/">
                <img 
                  src="/logo/logo.png" 
                  alt="FixPoint Logo" 
                  className={`w-auto object-contain transition-all duration-300 ease-in-out ${isScrolled ? 'h-[65px]' : 'h-[85px]'}`} 
                />
              </Link>
            </div>
            
            <nav className="hidden md:flex space-x-10 items-center">
              {data.menu.map((item, idx) => (
                item.subItems && item.subItems.length > 0 ? (
                  <DesktopNavItem key={idx} item={item} />
                ) : (
                  <Link 
                    key={idx} 
                    href={item.href}
                    className={`text-[18px] font-semibold transition-colors ${
                        isActive(item.href)
                          ? 'text-[#1877F2]'
                          : 'text-[#021731] hover:text-[#1877F2]'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </nav>
            
            <div className="hidden md:flex items-center">
              <Link 
                href="/book"
                className={`bg-[#1877F2] hover:bg-blue-600 text-white font-semibold text-[16.5px] rounded-md transition-all duration-300 shadow-sm hover:shadow-md ${isScrolled ? 'py-[10px] px-[28px]' : 'py-[14px] px-[32px]'}`}
              >
                {data.button.label}
              </Link>
            </div>
            
            <div className="flex items-center md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-900 hover:text-[#1877F2] focus:outline-none p-2 transition-colors"
                aria-label="Toggle mobile menu"
              >
                <svg className="w-8 h-8 transition-transform duration-300 ease-in-out" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {isMobileMenuOpen ? (
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  ) : (
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  )}
                </svg>
              </button>
            </div>
            
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden bg-white absolute left-0 w-full z-50 border-b border-gray-200 shadow-lg"
            >
              <div className="px-4 pt-2 pb-6 space-y-1 max-w-7xl mx-auto max-h-[calc(100vh-70px)] overflow-y-auto">
            {data.menu.map((item, idx) => (
              item.subItems && item.subItems.length > 0 ? (
                <div key={idx} className="rounded-md">
                  <button
                    type="button"
                    onClick={() => setOpenGroup(openGroup === item.label ? null : item.label)}
                    className="w-full px-4 py-3 text-base font-semibold text-[#021731] flex items-center justify-between"
                  >
                    {item.label}
                    <Chevron className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${openGroup === item.label || openGroup?.startsWith(`${item.label}-`) ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {(openGroup === item.label || openGroup?.startsWith(`${item.label}-`)) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <MobileItems items={item.subItems} parentKey={item.label} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link 
                  key={idx} 
                  href={item.href}
                  className={`block px-4 py-3 rounded-md text-base font-semibold transition-colors ${
                    isActive(item.href)
                      ? 'text-[#1877F2] bg-blue-50'
                      : 'text-[#021731] hover:text-[#1877F2] hover:bg-gray-50'
                  }`}
                  onClick={closeMobile}
                >
                  {item.label}
                </Link>
              )
            ))}
            <div className="pt-3 pb-2 px-2">
              <Link 
                href="/book"
                className="block w-full text-center bg-[#1877F2] hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-md transition-colors shadow-md"
                onClick={closeMobile}
              >
                {data.button.label}
              </Link>
            </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
