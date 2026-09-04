import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { PageTab } from '../types';
import { CLOUDINARY_IMAGES } from '../data/pestControlData';

interface HeaderProps {
  activeTab: PageTab;
  setActiveTab: (tab: PageTab) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'work', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (tab: PageTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#081C15]/95 border-b border-[#2D6A4F]/30 shadow-xl backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 py-3">
        {/* Brand Logo inside designed frame + Company Name */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center space-x-3.5 text-left focus:outline-none group cursor-pointer"
        >
          {/* Properly designed frame for larger logo */}
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-[#030D09] rounded-xl border border-[#2D6A4F] shadow-lg p-1.5 flex items-center justify-center overflow-hidden shrink-0 group-hover:border-[#40916C] group-hover:ring-1 group-hover:ring-[#40916C]/40 transition-all">
            <img
              src={CLOUDINARY_IMAGES.logo}
              alt="Venez Pest Control Logo"
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

          {/* Company Name */}
          <div className="flex items-center space-x-1.5">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-white">
              VENEZ
            </span>
            <span className="text-xl sm:text-2xl font-black tracking-tight text-[#40916C]">
              PEST CONTROL
            </span>
          </div>
        </button>

        {/* Navigation: Home, Services, Gallery, Contact */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold tracking-wide">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-all py-1 cursor-pointer ${
                  isActive
                    ? 'text-[#40916C] border-b-2 border-[#40916C] font-bold'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Call to Action Button for Contact */}
        <div className="hidden sm:flex items-center">
          <button
            onClick={() => handleNavClick('contact')}
            className="flex items-center space-x-2 bg-[#40916C] hover:bg-[#52B788] text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-md hover:shadow-[#40916C]/30 cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            <span>Contact Us</span>
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="flex sm:hidden items-center space-x-2">
          <button
            onClick={() => handleNavClick('contact')}
            className="p-2.5 bg-[#40916C] text-white rounded-lg cursor-pointer"
            aria-label="Contact Us"
          >
            <Phone className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg bg-[#1B4332]/40 text-gray-300 hover:text-white border border-[#2D6A4F]/40 cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-[#40916C]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="sm:hidden flex flex-col bg-[#05130E] border-b border-[#2D6A4F]/40 px-6 py-4 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between text-left py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#1B4332]/50 text-[#40916C] font-bold border-l-4 border-[#40916C]'
                      : 'text-gray-300 hover:bg-[#1B4332]/20 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="text-xs text-[#10E836]">●</span>}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-[#2D6A4F]/30">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full flex items-center justify-center space-x-2 bg-[#40916C] hover:bg-[#52B788] py-2.5 rounded-xl font-semibold text-sm text-white transition-all cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Contact Us</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
