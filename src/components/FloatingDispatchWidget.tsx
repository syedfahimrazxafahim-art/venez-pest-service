import React, { useState } from 'react';
import { Phone, MessageCircle, ChevronUp, ChevronDown, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/pestControlData';

export const FloatingDispatchWidget: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end space-y-2 font-mono">
      {!collapsed ? (
        <div className="bg-[#05130E] border border-[#2D6A4F] rounded-2xl p-3.5 shadow-2xl backdrop-blur-md flex flex-col space-y-2.5 w-64 animate-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-[#2D6A4F]/40 text-[10px]">
            <span className="flex items-center text-[#10E836] font-bold">
              <span className="w-2 h-2 rounded-full bg-[#10E836] animate-ping mr-1.5"></span>
              HOUSTON DISPATCH READY
            </span>
            <button
              onClick={() => setCollapsed(true)}
              className="text-gray-400 hover:text-white p-0.5 rounded cursor-pointer"
              title="Minimize Widget"
            >
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-[11px] font-sans text-gray-300 leading-tight">
            Need urgent pest or rodent service? Connect directly with John Rincon.
          </p>

          <div className="flex space-x-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex-1 py-2 bg-[#40916C] hover:bg-[#52B788] text-white text-center rounded-lg text-xs font-bold font-sans flex items-center justify-center space-x-1 transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>CALL NOW</span>
            </a>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 bg-[#25D366] hover:bg-[#1EBE5D] text-black text-center rounded-lg text-xs font-bold font-sans flex items-center justify-center space-x-1 transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WHATSAPP</span>
            </a>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setCollapsed(false)}
          className="flex items-center space-x-2 bg-[#05130E] hover:bg-[#1B4332] text-white border border-[#2D6A4F] px-4 py-2.5 rounded-full shadow-2xl transition-all cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-[#10E836] animate-pulse"></span>
          <span className="text-xs font-bold">DISPATCH 713-298-4210</span>
          <ChevronUp className="w-3.5 h-3.5 text-[#40916C]" />
        </button>
      )}
    </div>
  );
};
