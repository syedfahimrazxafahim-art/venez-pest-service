import React from 'react';
import { Phone, MessageCircle, MapPin, Instagram, Facebook, Shield, CheckCircle } from 'lucide-react';
import { PageTab } from '../types';
import { BUSINESS_INFO, CLOUDINARY_IMAGES } from '../data/pestControlData';

interface FooterProps {
  setActiveTab: (tab: PageTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const handleTab = (tab: PageTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#05130E] border-t border-[#2D6A4F]/40 text-gray-400">
      {/* Upper Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-black rounded-xl border border-[#2D6A4F] p-1 flex items-center justify-center">
              <img
                src={CLOUDINARY_IMAGES.logo}
                alt="Venez Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.endsWith('/LOGO1236748.jpg')) {
                    target.src = '/LOGO1236748.jpg';
                  }
                }}
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white">
                VENEZ <span className="text-[#40916C]">PEST CONTROL</span>
              </span>
              <p className="text-[10px] font-mono tracking-widest text-[#52B788]">
                PROTECTION • SAFETY • ECO-FRIENDLY
              </p>
            </div>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            Houston's trusted pest elimination team. Providing hospital-grade and residential barrier treatments for roaches, bed bugs, rodents, termites, and Texas wildlife.
          </p>
          <div className="flex items-center space-x-2 text-xs text-[#D8F3DC]">
            <CheckCircle className="w-4 h-4 text-[#40916C]" />
            <span>Certified Lead: John Rincon</span>
          </div>
        </div>

        {/* Navigation Column */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono tracking-widest text-[#40916C] uppercase font-bold">
            SITEMAP NAVIGATION
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <button onClick={() => handleTab('home')} className="hover:text-white transition-colors cursor-pointer">
                Home Overview
              </button>
            </li>
            <li>
              <button onClick={() => handleTab('services')} className="hover:text-white transition-colors cursor-pointer">
                Pest Control Services
              </button>
            </li>
            <li>
              <button onClick={() => handleTab('pricing')} className="hover:text-white transition-colors cursor-pointer">
                Pricing & Maintenance Plans
              </button>
            </li>
            <li>
              <button onClick={() => handleTab('work')} className="hover:text-white transition-colors cursor-pointer">
                Our Pest Control Work (Gallery)
              </button>
            </li>
            <li>
              <button onClick={() => handleTab('about')} className="hover:text-white transition-colors cursor-pointer">
                About John Rincon & Venez
              </button>
            </li>
            <li>
              <button onClick={() => handleTab('contact')} className="hover:text-white transition-colors cursor-pointer">
                Book Free Inspection
              </button>
            </li>
          </ul>
        </div>

        {/* Services Highlight */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono tracking-widest text-[#40916C] uppercase font-bold">
            CORE TREATMENTS
          </h4>
          <ul className="space-y-1.5 text-xs text-gray-300">
            <li className="flex justify-between border-b border-[#2D6A4F]/20 pb-1">
              <span>Bimonthly Perimeter Barrier</span>
              <span className="text-[#10E836] font-mono font-bold">$120</span>
            </li>
            <li className="flex justify-between border-b border-[#2D6A4F]/20 pb-1">
              <span>Quarterly Comprehensive</span>
              <span className="text-[#10E836] font-mono font-bold">$190</span>
            </li>
            <li className="flex justify-between border-b border-[#2D6A4F]/20 pb-1">
              <span>Rodent Trapping & Exclusion</span>
              <span className="text-[#10E836] font-mono font-bold">$400</span>
            </li>
            <li className="flex justify-between border-b border-[#2D6A4F]/20 pb-1">
              <span>Termite Foundation Barrier</span>
              <span className="text-[#10E836] font-mono font-bold">$1000+</span>
            </li>
            <li className="flex justify-between border-b border-[#2D6A4F]/20 pb-1">
              <span>Wildlife Removal (Snakes, Raccoons)</span>
              <span className="text-gray-400">Custom</span>
            </li>
          </ul>
        </div>

        {/* Direct Contact */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono tracking-widest text-[#40916C] uppercase font-bold">
            HOUSTON OFFICE CONTACT
          </h4>
          <div className="space-y-2 text-xs">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-[#40916C] shrink-0" />
              <span>Houston, Texas & Surrounding Harris County</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-[#40916C] shrink-0" />
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-mono text-white hover:text-[#52B788]">
                {BUSINESS_INFO.phone}
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
              <a href={BUSINESS_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-mono text-[#25D366] hover:underline">
                WhatsApp: 713-298-4210
              </a>
            </div>
          </div>

          <div className="pt-2 flex items-center space-x-2">
            <a
              href={BUSINESS_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-[#1B4332]/40 hover:bg-[#1B4332] text-white rounded border border-[#2D6A4F]/40 text-xs font-bold flex items-center space-x-1.5 transition-colors"
            >
              <Facebook className="w-3.5 h-3.5 text-[#1877F2]" />
              <span>Facebook</span>
            </a>
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-[#1B4332]/40 hover:bg-[#1B4332] text-white rounded border border-[#2D6A4F]/40 text-xs font-bold flex items-center space-x-1.5 transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-[#E1306C]" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>

      {/* High Density Terminal Bottom Bar */}
      <div className="h-16 bg-[#081C15] border-t border-[#2D6A4F]/30 flex flex-col sm:flex-row items-center justify-between px-6 sm:px-10 text-[10px] text-gray-500">
        <div className="tracking-[0.2em] uppercase font-mono">
          VENEZ PEST CONTROL © {new Date().getFullYear()} • TEXAS LICENSED & INSURED
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-ping"></div>
            <span className="text-[10px] font-bold text-white tracking-wider">ACTIVE DISPATCH</span>
          </div>
          <span className="text-gray-600">|</span>
          <span className="hover:text-gray-300 transition-colors">HOUSTON, TX</span>
          <span className="hover:text-gray-300 transition-colors font-mono">{BUSINESS_INFO.website}</span>
        </div>
      </div>
    </footer>
  );
};
