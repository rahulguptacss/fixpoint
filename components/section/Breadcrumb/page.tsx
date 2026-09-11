import React from 'react';
import Link from 'next/link';
import { BreadcrumbData } from '../../types';

export default function Breadcrumb({ data }: { data: BreadcrumbData }) {
  return (
    <section 
      className="relative bg-[#021731] py-10 md:py-14 overflow-hidden"
      style={{ fontFamily: 'var(--font-inter), sans-serif' }}
    >
      {/* Background Image / Pattern */}
      {data.bgImage && (
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={data.bgImage} alt="Background" className="w-full h-full object-cover" />
        </div>
      )}
      
      {/* Faint wavy graphic overlay (using gradient if no image) */}
      {!data.bgImage && (
        <div className="absolute top-0 right-0 bottom-0 w-1/2 bg-gradient-to-l from-white/5 to-transparent z-0 transform translate-x-20 rotate-12 rounded-full blur-3xl"></div>
      )}
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-center">
          {/* Breadcrumb Links */}
          <div className="flex flex-wrap items-center text-[13px] sm:text-[15px] font-medium mb-3 sm:mb-4">
            <span className="w-6 h-[2px] bg-[#FF8A00] mr-3"></span>
            {data.paths.map((path, index) => {
              const isLast = index === data.paths.length - 1;
              return (
                <React.Fragment key={index}>
                  {isLast ? (
                    <span className="text-[#FF8A00]">{path.label}</span>
                  ) : (
                    <>
                      <Link href={path.url} className="text-white hover:text-[#1877F2] transition-colors">
                        {path.label}
                      </Link>
                      <span className="text-white mx-2">{'>'}</span>
                    </>
                  )}
                </React.Fragment>
              );
            })}
          </div>
          
          {/* Title */}
          <h1 className="text-white text-[28px] sm:text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight">
            {data.title}
          </h1>
        </div>
      </div>
    </section>
  );
}
