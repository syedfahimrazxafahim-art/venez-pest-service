import React, { useState } from 'react';
import { Shield, CheckCircle, Zap, ArrowRight, Phone, MessageCircle, AlertTriangle, Crosshair, Sparkles } from 'lucide-react';
import { PageTab } from '../types';
import { BUSINESS_INFO } from '../data/pestControlData';

interface Hero3DProps {
  setActiveTab: (tab: PageTab) => void;
}

export const Hero3DExperience: React.FC<Hero3DProps> = ({ setActiveTab }) => {
  const [activeScanZone, setActiveScanZone] = useState<'perimeter' | 'indoor' | 'attic' | 'foundation'>('perimeter');
  const [radarActive, setRadarActive] = useState(true);

  const scanData = {
    perimeter: {
      title: 'Perimeter Barrier Shield',
      threat: 'Roaches & Fire Ants Repelled',
      efficiency: '99.4% Barrier Strength',
      status: 'Active Defense',
    },
    indoor: {
      title: 'Indoor Baseboard Seal',
      threat: 'Bed Bugs & Silverfish Blocked',
      efficiency: '100% Pet-Safe Formula',
      status: 'Micro-encapsulated',
    },
    attic: {
      title: 'Attic & Roof Exclusion',
      threat: 'Roof Rats & Mice Exclusion',
      efficiency: 'Wire Mesh Barrier',
      status: 'Secured Envelope',
    },
    foundation: {
      title: 'Slab Termite Trench',
      threat: 'Subterranean Termites Terminated',
      efficiency: 'Multi-Year Soil Barrier',
      status: 'Active Zone',
    },
  };

  return (
    <section className="relative w-full bg-[#081C15] text-white overflow-hidden border-b border-[#2D6A4F]/30">
      {/* High Density Radial Glows */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-[#40916C] blur-[130px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#1B4332] blur-[150px] opacity-30 pointer-events-none"></div>

      {/* Main High Density 12-Column Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[620px]">
        {/* Left Column: Hero Typography & Core Pitch */}
        <div className="lg:col-span-7 p-6 sm:p-10 md:p-12 flex flex-col justify-center relative z-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[0.92] tracking-tight mb-6">
            HOUSTON'S <br />
            PREMIER <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#40916C] via-[#52B788] to-[#D8F3DC]">
              ELIMINATORS.
            </span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
            Professional grade pest control for Greater Houston homes and businesses. 
            Safe, eco-friendly chemical barriers, rodent exclusion, and subterranean termite eradication led by field technician <strong className="text-white font-bold">John Rincon</strong>.
          </p>

          {/* Quick Action Badges / CTAs */}
          <div className="flex flex-wrap gap-3 mb-10">
            <button
              onClick={() => setActiveTab('contact')}
              className="px-7 py-3.5 bg-[#40916C] hover:bg-[#52B788] text-white font-black text-sm rounded-xl transition-all shadow-lg hover:shadow-[#40916C]/40 flex items-center space-x-2 cursor-pointer"
            >
              <span>GET FREE INSPECTION</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setActiveTab('pricing')}
              className="px-6 py-3.5 bg-[#1B4332]/40 hover:bg-[#1B4332]/70 text-[#D8F3DC] border border-[#2D6A4F]/60 font-bold text-sm rounded-xl transition-all flex items-center space-x-2 cursor-pointer"
            >
              <span>VIEW $120 SPECIAL</span>
              <span className="text-xs bg-[#10E836]/20 text-[#10E836] px-2 py-0.5 rounded font-mono font-bold">
                $120
              </span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-5 py-3.5 bg-black/50 hover:bg-black text-white border border-[#2D6A4F]/40 font-mono text-sm rounded-xl transition-all flex items-center space-x-2"
            >
              <Phone className="w-4 h-4 text-[#40916C]" />
              <span>713-298-4210</span>
            </a>
          </div>

          {/* High Density Triple Metric Blocks */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            <div className="bg-[#1B4332]/30 p-3.5 sm:p-4 rounded-xl border border-[#2D6A4F]/40 backdrop-blur-sm">
              <div className="text-xl sm:text-2xl font-black text-white mb-0.5 font-mono">
                $120<span className="text-xs text-[#52B788] font-normal">/mo</span>
              </div>
              <div className="text-xs font-bold text-[#D8F3DC]">Residential</div>
              <p className="text-[11px] text-gray-400 mt-0.5 hidden sm:block">Perimeter + indoor baseboards</p>
            </div>

            <div className="bg-[#1B4332]/30 p-3.5 sm:p-4 rounded-xl border border-[#2D6A4F]/40 backdrop-blur-sm">
              <div className="text-xl sm:text-2xl font-black text-white mb-0.5 font-mono">
                100%
              </div>
              <div className="text-xs font-bold text-[#D8F3DC]">Commercial</div>
              <p className="text-[11px] text-gray-400 mt-0.5 hidden sm:block">Health inspection compliance</p>
            </div>

            <div className="bg-[#1B4332]/30 p-3.5 sm:p-4 rounded-xl border border-[#2D6A4F]/40 backdrop-blur-sm">
              <div className="text-xl sm:text-2xl font-black text-[#10E836] mb-0.5 font-mono flex items-center">
                24/7
              </div>
              <div className="text-xs font-bold text-[#D8F3DC]">Emergency</div>
              <p className="text-[11px] text-gray-400 mt-0.5 hidden sm:block">Fast Houston Harris dispatch</p>
            </div>
          </div>
        </div>

        {/* Right Column: High Density Work & Interactive 3D Defense Scanner */}
        <div className="lg:col-span-5 bg-[#1B4332]/20 border-t lg:border-t-0 lg:border-l border-[#2D6A4F]/30 p-6 sm:p-8 flex flex-col justify-between relative">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-bold text-white flex items-center">
                <Shield className="w-4 h-4 mr-2 text-[#52B788]" />
                OUR PEST CONTROL WORK & FIELD PHASES
              </h2>
              <button
                onClick={() => setActiveTab('work')}
                className="text-[11px] font-mono text-gray-400 hover:text-white flex items-center space-x-1 cursor-pointer"
              >
                <span>VIEW ALL (6)</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {/* 4 Interactive Treatment Phase Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {/* Phase 01 */}
              <div
                onClick={() => setActiveScanZone('perimeter')}
                className={`group relative h-28 sm:h-32 bg-[#081C15] rounded-xl border p-3 cursor-pointer overflow-hidden transition-all ${
                  activeScanZone === 'perimeter'
                    ? 'border-[#40916C] shadow-lg shadow-[#40916C]/20 bg-[#1B4332]/30'
                    : 'border-[#2D6A4F]/40 hover:border-[#2D6A4F]'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#40916C]/20 to-transparent"></div>
                <div className="flex items-center justify-between relative z-10">
                  <span className="text-[10px] font-mono text-[#52B788] font-bold">01</span>
                  <Crosshair className="w-3.5 h-3.5 text-[#40916C]" />
                </div>
                <div className="absolute bottom-2 left-3 right-3 z-10">
                  <p className="text-xs font-bold text-white leading-tight">Perimeter Barrier</p>
                  <p className="text-[10px] uppercase font-mono text-gray-400">$120 Outdoor Spray</p>
                </div>
              </div>

              {/* Phase 02 */}
              <div
                onClick={() => setActiveScanZone('indoor')}
                className={`group relative h-28 sm:h-32 bg-[#081C15] rounded-xl border p-3 cursor-pointer overflow-hidden transition-all ${
                  activeScanZone === 'indoor'
                    ? 'border-[#40916C] shadow-lg shadow-[#40916C]/20 bg-[#1B4332]/30'
                    : 'border-[#2D6A4F]/40 hover:border-[#2D6A4F]'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#40916C]/30 to-transparent"></div>
                <div className="flex items-center justify-between relative z-10">
                  <span className="text-[10px] font-mono text-[#52B788] font-bold">02</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#40916C]" />
                </div>
                <div className="absolute bottom-2 left-3 right-3 z-10">
                  <p className="text-xs font-bold text-white leading-tight">Baseboard Barrier</p>
                  <p className="text-[10px] uppercase font-mono text-gray-400">Indoor Pet-Safe</p>
                </div>
              </div>

              {/* Phase 03 */}
              <div
                onClick={() => setActiveScanZone('attic')}
                className={`group relative h-28 sm:h-32 bg-[#081C15] rounded-xl border p-3 cursor-pointer overflow-hidden transition-all ${
                  activeScanZone === 'attic'
                    ? 'border-[#40916C] shadow-lg shadow-[#40916C]/20 bg-[#1B4332]/30'
                    : 'border-[#2D6A4F]/40 hover:border-[#2D6A4F]'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#40916C]/10 to-transparent"></div>
                <div className="flex items-center justify-between relative z-10">
                  <span className="text-[10px] font-mono text-[#52B788] font-bold">03</span>
                  <AlertTriangle className="w-3.5 h-3.5 text-[#F59E0B]" />
                </div>
                <div className="absolute bottom-2 left-3 right-3 z-10">
                  <p className="text-xs font-bold text-white leading-tight">Rodent Exclusion</p>
                  <p className="text-[10px] uppercase font-mono text-gray-400">$400 Attic Sealing</p>
                </div>
              </div>

              {/* Phase 04 */}
              <div
                onClick={() => setActiveScanZone('foundation')}
                className={`group relative h-28 sm:h-32 bg-[#081C15] rounded-xl border p-3 cursor-pointer overflow-hidden transition-all ${
                  activeScanZone === 'foundation'
                    ? 'border-[#40916C] shadow-lg shadow-[#40916C]/20 bg-[#1B4332]/30'
                    : 'border-[#2D6A4F]/40 hover:border-[#2D6A4F]'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#40916C]/40 to-transparent"></div>
                <div className="flex items-center justify-between relative z-10">
                  <span className="text-[10px] font-mono text-[#52B788] font-bold">04</span>
                  <Zap className="w-3.5 h-3.5 text-[#10E836]" />
                </div>
                <div className="absolute bottom-2 left-3 right-3 z-10">
                  <p className="text-xs font-bold text-white leading-tight">Termite Trench</p>
                  <p className="text-[10px] uppercase font-mono text-gray-400">$1000+ Foundation</p>
                </div>
              </div>
            </div>

            {/* Active Scanner Zone Telemetry readout */}
            <div className="p-3.5 bg-[#05130E] rounded-xl border border-[#2D6A4F]/30 mb-5 font-mono text-xs">
              <div className="flex items-center justify-between text-[#52B788] mb-1 font-bold">
                <span>[SCAN ZONE: {scanData[activeScanZone].title.toUpperCase()}]</span>
                <span className="text-[#10E836]">● {scanData[activeScanZone].status}</span>
              </div>
              <div className="text-gray-300 text-[11px] flex justify-between">
                <span>Target: {scanData[activeScanZone].threat}</span>
                <span className="text-white font-bold">{scanData[activeScanZone].efficiency}</span>
              </div>
            </div>
          </div>

          {/* High Density Houston Office Contact Box */}
          <div className="bg-[#081C15] p-5 rounded-2xl border border-[#2D6A4F]/50 shadow-2xl">
            <h3 className="text-sm font-bold mb-3 flex items-center text-white">
              <span className="w-2 h-2 bg-[#40916C] rounded-full mr-2 animate-ping"></span>
              HOUSTON CENTRAL DISPATCH
            </h3>
            
            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center py-1 border-b border-[#2D6A4F]/20">
                <span className="text-gray-400">WhatsApp Instant</span>
                <a href={BUSINESS_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-mono text-[#25D366] font-bold hover:underline">
                  713-298-4210
                </a>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-[#2D6A4F]/20">
                <span className="text-gray-400">Houston Area</span>
                <span className="text-white">Harris County, TX</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-[#2D6A4F]/20">
                <span className="text-gray-400">Field Lead</span>
                <span className="text-white font-semibold">John Rincon</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-gray-400">Current Status</span>
                <span className="text-[#10E836] font-bold font-mono">AVAILABLE NOW</span>
              </div>
            </div>

            <div className="mt-4 flex space-x-2">
              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 bg-[#40916C] hover:bg-[#52B788] text-white text-center rounded-lg font-bold text-xs transition-colors"
              >
                FACEBOOK
              </a>
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 border border-[#40916C] hover:bg-[#1B4332]/40 text-white text-center rounded-lg font-bold text-xs transition-colors"
              >
                INSTAGRAM
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
