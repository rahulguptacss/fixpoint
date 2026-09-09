import React from 'react';
import { TeamDetailData } from '../../types';
import { User, Wrench, Award } from 'lucide-react';
import { FaInstagram, FaCheckCircle, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

export default function TeamDetail({ data }: { data: TeamDetailData }) {
  return (
    <section className="py-10 md:py-12 bg-white" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row: Image & Info */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-16">
          
          {/* Left Column: Image & Stats */}
          <div className="w-full lg:w-6/12">
            <div className="relative rounded-t-2xl overflow-hidden shadow-sm">
              {/* Image */}
              <img 
                src={data.image} 
                alt={data.name} 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Stats Strip */}
            <div className="bg-[#1140D0] text-white py-4 sm:py-7 px-4 sm:px-2 md:px-4 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/20 rounded-b-2xl shadow-lg relative z-10">
                <div className="flex items-center justify-start sm:justify-center gap-4 sm:gap-3 md:gap-5 px-4 sm:px-1 md:px-2 py-4 sm:py-0">
                  <div className="shrink-0">
                    <User className="w-10 h-10 sm:w-9 sm:h-9 md:w-11 md:h-11" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[12px] sm:text-[10px] md:text-[12px] font-normal mb-0.5 md:mb-1 opacity-90 tracking-wide">Experience</span>
                    <span className="font-semibold text-[15px] sm:text-[13px] md:text-[15px]">{data.stats.experience}</span>
                  </div>
                </div>
                <div className="flex items-center justify-start sm:justify-center gap-4 sm:gap-3 md:gap-5 px-4 sm:px-1 md:px-2 py-4 sm:py-0">
                  <div className="shrink-0">
                    <Wrench className="w-10 h-10 sm:w-9 sm:h-9 md:w-11 md:h-11" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[12px] sm:text-[10px] md:text-[12px] font-normal mb-0.5 md:mb-1 opacity-90 tracking-wide">Specialization</span>
                    <span className="font-semibold text-[15px] sm:text-[13px] md:text-[14px] lg:text-[15px]">{data.stats.specialization}</span>
                  </div>
                </div>
                <div className="flex items-center justify-start sm:justify-center gap-4 sm:gap-3 md:gap-5 px-4 sm:px-1 md:px-2 py-4 sm:py-0">
                  <div className="shrink-0">
                    <Award className="w-10 h-10 sm:w-9 sm:h-9 md:w-11 md:h-11" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[12px] sm:text-[10px] md:text-[12px] font-normal mb-0.5 md:mb-1 opacity-90 tracking-wide">Completed Repairs</span>
                    <span className="font-semibold text-[15px] sm:text-[13px] md:text-[15px]">{data.stats.completedRepairs}</span>
                  </div>
                </div>
              </div>
            </div>
          
          {/* Right Column: Details */}
          <div className="w-full lg:w-6/12 flex flex-col justify-center mt-6 lg:mt-0">
            <h4 className="text-[#1877F2] font-semibold text-[13px] uppercase tracking-widest mb-3">
              {data.role}
            </h4>
            <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-extrabold text-[#021731] leading-tight mb-4">
              {data.name}
            </h2>
            <div className="w-16 h-1.5 bg-[#1877F2] mb-8"></div>
            
            <p className="text-gray-600 text-[16px] leading-relaxed mb-10">
              {data.description}
            </p>
            
            {/* Contact Details */}
            <div className="space-y-6 mb-10">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#1140D0] flex items-center justify-center mr-5 shrink-0">
                  <FaPhoneAlt className="w-5 h-5 text-white" />
                </div>
                <span className="text-[#021731] font-semibold text-[18px]">{data.contact.phone}</span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#1140D0] flex items-center justify-center mr-5 shrink-0">
                  <FaEnvelope className="w-5 h-5 text-white" />
                </div>
                <span className="text-[#021731] font-semibold text-[18px]">{data.contact.email}</span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#1140D0] flex items-center justify-center mr-5 shrink-0">
                  <FaMapMarkerAlt className="w-5 h-5 text-white" />
                </div>
                <span className="text-[#021731] font-semibold text-[18px]">{data.contact.location}</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {data.socials.map((social, idx) => {
                let Icon = FaFacebookF;
                if (social.platform === 'instagram') Icon = FaInstagram;
                if (social.platform === 'linkedin') Icon = FaLinkedinIn;
                
                return (
                  <a 
                    key={idx} 
                    href={social.url} 
                    className="w-12 h-12 rounded-full bg-[#F4F6FB] hover:bg-[#1140D0] text-[#1140D0] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
                    aria-label={`Follow on ${social.platform}`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Bottom Row: About & Education */}
        {/* Bottom Row: About & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mt-12 md:mt-0">
          
          {/* About Column */}
          <div className="bg-[#F8FAFC] rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10">
            <h3 className="text-[20px] md:text-[22px] font-bold text-[#021731] mb-3">About {data.name.split(' ')[0]}</h3>
            <div className="w-10 h-[2px] bg-[#1140D0] mb-6 md:mb-8"></div>
            
            <div className="space-y-4 mb-6 md:mb-8 text-[#4F5B73] text-[14px] md:text-[15px] leading-relaxed">
              {data.about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
            
            <div className="space-y-3">
              {data.about.features.map((feature, idx) => (
                <div key={idx} className="flex items-center">
                  <FaCheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#1140D0] mr-3 shrink-0" />
                  <span className="text-[#4F5B73] font-medium text-[14px] md:text-[15px]">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education Column */}
          <div className="bg-[#F8FAFC] rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10">
            <h3 className="text-[20px] md:text-[22px] font-bold text-[#021731] mb-3">Education & Certification</h3>
            <div className="w-10 h-[2px] bg-[#1140D0] mb-6 md:mb-8"></div>
            
            <div className="bg-white border border-gray-100 rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8">
              <div className="border-l-2 border-[#E5E7EB] pl-6 md:pl-8 space-y-6 md:space-y-8 py-1 ml-1">
                {data.education.map((edu, idx) => (
                  <div key={idx} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute -left-[29px] md:-left-[37px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#1140D0]"></div>
                    
                    <h4 className="text-[14px] md:text-[15px] font-bold text-[#021731] mb-1">{edu.title}</h4>
                    <p className="text-[13px] md:text-[14px] text-[#4F5B73] mb-1">{edu.institute}</p>
                    <p className="text-[13px] md:text-[14px] text-[#4F5B73]">{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
