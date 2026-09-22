import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { TeamData } from '../../types';
import Link from 'next/link';

export default function Team({ data }: { data: TeamData }) {
  return (
    <section className="pt-8 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <div className="inline-block relative mb-4">
            <p className="text-[#1558C0] font-bold text-[16px] md:text-[18px] uppercase tracking-widest pb-1">
              {data.subtitle}
            </p>
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
              <div className="relative h-64 overflow-hidden">
                <Link href={`/team/${member.id}`} aria-label={`View profile of ${member.name}`}>
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </Link>
              </div>
              
              <div className="pt-6 px-6 pb-8 text-center bg-white rounded-b-xl">
                {/* Social links */}
                <div className="flex justify-center space-x-3 mb-3">
                  {member.socials.map((social, idx) => {
                    let IconComponent: any = FaFacebookF;
                    if (social.platform === 'facebook') IconComponent = FaFacebookF;
                    if (social.platform === 'instagram') IconComponent = FaInstagram;
                    if (social.platform === 'linkedin') IconComponent = FaLinkedinIn;
                    if (social.platform === 'twitter') IconComponent = FaXTwitter;
                    
                    return (
                      <a 
                        key={idx} 
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on ${social.platform}`}
                        className="bg-[#1558C0] text-white w-11 h-11 rounded-full flex items-center justify-center hover:bg-blue-800 transition-all duration-300"
                      >
                        <IconComponent className="w-4 h-4" aria-hidden />
                      </a>
                    );
                  })}
                </div>
                
                <Link href={`/team/${member.id}`}>
                  <h3 className="text-[22px] font-bold text-[#021731] mb-1 hover:text-[#1877F2] transition-colors cursor-pointer">{member.name}</h3>
                </Link>
                <p className="text-[#1558C0] text-[15px] font-medium">{member.role}</p>
                <div className="w-10 h-[2px] bg-[#1877F2] mx-auto mt-2 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
