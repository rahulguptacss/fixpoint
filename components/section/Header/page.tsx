"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { HeaderData } from '../../types';

export default function Header({ data }: { data: HeaderData }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full sticky top-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div 
        className={`w-full bg-white transition-all duration-300 ease-in-out ${isScrolled ? 'bg-white/95 backdrop-blur-md' : 'bg-white'}`}
        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-300 ease-in-out ${isScrolled ? 'h-[70px]' : 'h-[85px]'}`}>
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center h-full">
              <Link href="/">
                <img 
                  src="/logo/logo.png" 
                  alt="FixPoint Logo" 
                  className={`w-auto object-contain transition-all duration-300 ease-in-out ${isScrolled ? 'h-[65px]' : 'h-[85px]'}`} 
                />
              </Link>
            </div>
            
            {/* Nav Links */}
            <nav className="hidden md:flex space-x-10 items-center">
              {data.menu.map((item, idx) => (
                <Link 
                  key={idx} 
                  href={item.href}
                  className={`text-[18px] font-semibold transition-colors ${
                    item.label === 'Home' 
                      ? 'text-[#1877F2]' 
                      : 'text-[#021731] hover:text-[#1877F2]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            
            {/* Action Button */}
            <div className="hidden md:flex items-center">
              <Link 
                href={data.button.href}
                className={`bg-[#1877F2] hover:bg-blue-600 text-white font-semibold text-[16.5px] rounded-md transition-all duration-300 shadow-sm hover:shadow-md ${isScrolled ? 'py-[10px] px-[28px]' : 'py-[14px] px-[32px]'}`}
              >
                {data.button.label}
              </Link>
            </div>
            
            {/* Mobile menu button */}
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

        {/* Mobile Navigation Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white absolute w-full ${
            isMobileMenuOpen ? 'max-h-[500px] border-b border-gray-200 shadow-lg opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="px-4 pt-2 pb-6 space-y-2 max-w-7xl mx-auto">
            {data.menu.map((item, idx) => (
              <Link 
                key={idx} 
                href={item.href}
                className={`block px-4 py-3 rounded-md text-base font-semibold transition-colors ${
                  item.label === 'Home' 
                    ? 'text-[#1877F2] bg-blue-50' 
                    : 'text-[#021731] hover:text-[#1877F2] hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 pb-2 px-2">
              <Link 
                href={data.button.href}
                className="block w-full text-center bg-[#1877F2] hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-md transition-colors shadow-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {data.button.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
