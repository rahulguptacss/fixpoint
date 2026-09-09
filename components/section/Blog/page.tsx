import React from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight, LayoutGrid } from 'lucide-react';
import { BlogData } from '../../types';

export default function Blog({ data }: { data: BlogData }) {
  return (
    <section className="pt-12 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <div className="inline-block relative mb-4">
            <h4 className="text-[#1877F2] font-bold text-[16px] md:text-[18px] uppercase tracking-widest pb-1">
              {data.subtitle}
            </h4>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-10 h-[2px] bg-[#1877F2]"></div>
          </div>
          
          <h2 className="text-[#021731] text-[36px] md:text-[50px] font-bold leading-[1.1] md:leading-[1.15] tracking-tight max-w-3xl mx-auto mb-4">
            {data.title}
          </h2>
          {data.description && (
            <p className="text-[#4A5568] text-[16px] md:text-[18px] max-w-3xl mx-auto leading-relaxed mt-2">
              {data.description}
            </p>
          )}
        </div>
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {data.items.map((post) => (
            <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group relative flex flex-col">
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-[#1877F2] text-white p-3 rounded-xl flex flex-col items-center justify-center shadow-md border border-white/20 min-w-[76px]">
                  <Calendar className="w-5 h-5 mb-1.5" strokeWidth={2} />
                  <div className="text-center">
                    <span className="block text-[14px] font-bold leading-tight">{post.date.split(' ')[0]}</span>
                    <span className="block text-[12px] font-semibold leading-tight mt-0.5">{post.date.split(' ').slice(1).join(' ')}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-7 flex flex-col flex-grow">
                <h3 className="text-[22px] font-bold text-[#021731] mb-3 hover:text-[#1877F2] transition-colors leading-[1.3]">
                  <Link href={post.link}>{post.title}</Link>
                </h3>
                <p className="text-[#4A5568] text-[16px] mb-6 leading-relaxed">
                  {post.description}
                </p>
                <div className="mt-auto">
                  <Link 
                    href={post.link}
                    className="inline-flex items-center text-[#1877F2] font-bold text-[16px] hover:text-blue-800 transition-colors"
                  >
                    {data.readMoreText || "Read More"} <ArrowRight className="w-5 h-5 ml-1.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="mt-8 text-center">
          <Link 
            href="/blog" 
            className="inline-flex items-center justify-center bg-[#1877F2] text-white px-8 py-3.5 rounded-lg font-bold text-[16px] hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300 shadow-md"
          >
            <LayoutGrid className="w-5 h-5 mr-2" strokeWidth={2.5} />
            {data.viewAllButtonText || "View All Blogs"}
          </Link>
        </div>
        
      </div>
    </section>
  );
}
