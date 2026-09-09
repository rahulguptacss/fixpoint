import React from 'react';
import * as LucideIcons from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { TeamData } from '../../types';
import Link from 'next/link';

export default function Team({ data }: { data: TeamData }) {
  return (
    <section className="pt-8 pb-12 bg-white">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.members.map((member) => (
            <div key={member.id} className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group relative">
              <div className="h-64 overflow-hidden">
                <Link href={`/team/${member.id}`}>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer" 
                  />
                </Link>
              </div>
              
              <div className="pt-6 px-6 pb-8 text-center bg-white rounded-b-xl">
                {/* Social links */}
                <div className="flex justify-center space-x-3 mb-3">
                  {member.socials.map((social, idx) => {
                    let IconComponent: any = LucideIcons.Link;
                    let isLucide = true;
                    if (social.platform === 'facebook') { IconComponent = FaFacebookF; isLucide = false; }
                    if (social.platform === 'instagram') { IconComponent = FaInstagram; isLucide = false; }
                    if (social.platform === 'linkedin') { IconComponent = FaLinkedinIn; isLucide = false; }
                    if (social.platform === 'twitter') { IconComponent = FaTwitter; isLucide = false; }
                    
                    return (
                      <a 
                        key={idx} 
                        href={social.url} 
                        className="bg-[#1877F2] text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300"
                      >
                        <IconComponent className="w-4 h-4" {...(isLucide ? { strokeWidth: 2 } : {})} />
                      </a>
                    );
                  })}
                </div>
                
                <Link href={`/team/${member.id}`}>
                  <h3 className="text-[22px] font-bold text-[#021731] mb-1 hover:text-[#1877F2] transition-colors cursor-pointer">{member.name}</h3>
                </Link>
                <p className="text-[#1877F2] text-[15px] font-medium">{member.role}</p>
                <div className="w-10 h-[2px] bg-[#1877F2] mx-auto mt-2 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
