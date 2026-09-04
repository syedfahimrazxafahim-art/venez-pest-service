import React from 'react';
import { Shield, Award, CheckCircle, MapPin, Clock, Leaf, Star, Phone, MessageCircle } from 'lucide-react';
import { PageTab } from '../types';
import { BUSINESS_INFO, CORE_PILLARS, REVIEWS } from '../data/pestControlData';

interface AboutProps {
  setActiveTab: (tab: PageTab) => void;
}

export const AboutView: React.FC<AboutProps> = ({ setActiveTab }) => {
  return (
    <section className="w-full bg-[#081C15] py-14 px-4 sm:px-8 border-b border-[#2D6A4F]/30 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-12 pb-6 border-b border-[#2D6A4F]/30">
          <h1 className="text-3xl sm:text-5xl font-black text-white">
            PROTECTING GREATER HOUSTON HOMES
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-3xl mt-2">
            Founded with a commitment to integrity, safety, and rapid response. 
            Under the field leadership of John Rincon, we deliver long-lasting barrier eradication without compromising family or pet wellness.
          </p>
        </div>

        {/* 2-Column Company Story and Founder Highlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 bg-[#05130E] rounded-2xl border border-[#2D6A4F]/40">
              <h2 className="text-xl font-bold text-white mb-3 flex items-center">
                <Award className="w-5 h-5 text-[#40916C] mr-2" />
                <span>Field Leadership: John Rincon</span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans mb-4">
                In Houston's humid subtropical climate, pest pressure is constant—from subterranean termites attacking slab foundations to aggressive German cockroach infestations in kitchens and roof rats nesting in attics.
              </p>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                Venez Pest Control was engineered to provide honest, local service at transparent prices ($120 bimonthly, $190 quarterly, $400 rodent exclusion). We do not send sales reps on commission; every job is inspected and treated with dedicated care.
              </p>
            </div>

            {/* Houston Coverage Area Grid */}
            <div className="p-6 bg-[#05130E] rounded-2xl border border-[#2D6A4F]/40">
              <h3 className="text-xs font-mono text-[#52B788] uppercase tracking-widest font-bold mb-3 flex items-center">
                <MapPin className="w-4 h-4 mr-1.5 text-[#10E836]" />
                COMMUNITIES WE SERVE IN GREATER HOUSTON
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono text-xs text-gray-300">
                <span className="p-2 bg-[#081C15] rounded border border-[#2D6A4F]/30">• Houston Heights</span>
                <span className="p-2 bg-[#081C15] rounded border border-[#2D6A4F]/30">• Memorial & Spring Branch</span>
                <span className="p-2 bg-[#081C15] rounded border border-[#2D6A4F]/30">• Katy & West Houston</span>
                <span className="p-2 bg-[#081C15] rounded border border-[#2D6A4F]/30">• Sugar Land & Richmond</span>
                <span className="p-2 bg-[#081C15] rounded border border-[#2D6A4F]/30">• Pasadena & Baytown</span>
                <span className="p-2 bg-[#081C15] rounded border border-[#2D6A4F]/30">• Cypress & Spring</span>
              </div>
            </div>
          </div>

          {/* Right: Certified Badges Column */}
          <div className="lg:col-span-5 bg-[#05130E] p-6 sm:p-8 rounded-2xl border border-[#2D6A4F]/50 shadow-2xl space-y-6">
            <h3 className="text-xs font-mono text-[#40916C] uppercase tracking-widest font-bold">
              THE 4 VENEZ PILLARS OF PROTECTION
            </h3>

            <div className="space-y-4">
              {CORE_PILLARS.map((pillar, i) => (
                <div key={i} className="flex items-start space-x-3 p-3 rounded-xl bg-[#081C15] border border-[#2D6A4F]/30">
                  <CheckCircle className="w-5 h-5 text-[#10E836] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">{pillar.title}</h4>
                    <p className="text-xs text-gray-400 mt-0.5">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#2D6A4F]/30">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#40916C] hover:bg-[#52B788] text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center space-x-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>DIRECT CHAT WITH JOHN RINCON</span>
              </a>
            </div>
          </div>
        </div>

        {/* Customer Reviews & Testimonials Grid */}
        <div>
          <div className="flex items-center space-x-2 text-[#40916C] font-mono text-xs tracking-[0.2em] uppercase font-bold mb-2">
            <Star className="w-4 h-4 text-[#F59E0B]" />
            <span>VERIFIED HOUSTON CUSTOMER TESTIMONIALS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">
            WHAT HOMEOWNERS SAY ABOUT VENEZ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS.map((rev, idx) => (
              <div
                key={idx}
                className="bg-[#05130E] p-6 rounded-2xl border border-[#2D6A4F]/40 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono text-[#52B788] bg-[#1B4332]/40 px-2 py-0.5 rounded">
                      {rev.service}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed italic mb-4">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-[#2D6A4F]/20 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-white">{rev.name}</h4>
                    <p className="text-[10px] font-mono text-gray-400">{rev.neighborhood}</p>
                  </div>
                  <span className="text-[10px] font-mono text-gray-500">
                    {rev.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
