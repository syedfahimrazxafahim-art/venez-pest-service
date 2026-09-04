import React, { useState } from 'react';
import { Shield, Check, AlertTriangle, Crosshair, ChevronRight, Sparkles, Building, Layers } from 'lucide-react';
import { HouseZone, PageTab } from '../types';
import { HOUSE_ZONES, BUSINESS_INFO } from '../data/pestControlData';

interface SimulatorProps {
  setActiveTab: (tab: PageTab) => void;
}

export const HouseDefenseSimulator: React.FC<SimulatorProps> = ({ setActiveTab }) => {
  const [selectedZone, setSelectedZone] = useState<HouseZone>(HOUSE_ZONES[0]);

  return (
    <section className="w-full bg-[#05130E] py-14 px-4 sm:px-8 border-b border-[#2D6A4F]/30 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#2D6A4F]/30">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              3D STRUCTURAL ZONE INSPECTOR
            </h2>
            <p className="text-gray-400 text-sm max-w-xl mt-2">
              Explore how Venez Pest Control builds an impenetrable barrier around Houston foundations, baseboards, kitchens, attics, and lawns.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center space-x-3 text-xs font-mono text-gray-400">
            <span className="flex items-center">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10E836] mr-1.5"></span>
              PROTECTED
            </span>
            <span className="flex items-center">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] mr-1.5"></span>
              AT RISK ZONE
            </span>
          </div>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Zone Selector Buttons */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs font-mono text-gray-400 uppercase tracking-widest font-bold mb-2">
              SELECT RESIDENTIAL ZONE:
            </h3>

            {HOUSE_ZONES.map((zone) => {
              const isSelected = selectedZone.id === zone.id;
              return (
                <button
                  key={zone.id}
                  onClick={() => setSelectedZone(zone)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#1B4332]/50 border-[#40916C] shadow-lg shadow-[#40916C]/10 translate-x-1'
                      : 'bg-[#081C15] border-[#2D6A4F]/30 hover:border-[#2D6A4F] hover:bg-[#1B4332]/20'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        zone.status === 'Protected'
                          ? 'bg-[#10E836]'
                          : zone.status === 'Treated'
                          ? 'bg-[#40916C]'
                          : 'bg-[#F59E0B] animate-pulse'
                      }`}
                    ></div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{zone.name}</h4>
                      <p className="text-[11px] font-mono text-gray-400">
                        Pests: {zone.pests.slice(0, 2).join(', ')}...
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-black/40 text-[#52B788]">
                      {zone.riskLevel} Risk
                    </span>
                    <ChevronRight className={`w-4 h-4 text-gray-400 ${isSelected ? 'text-[#10E836]' : ''}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Interactive Telemetry & Protection Breakdown */}
          <div className="lg:col-span-7 bg-[#081C15] border border-[#2D6A4F]/50 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            {/* Visual Header */}
            <div className="flex items-center justify-between pb-6 border-b border-[#2D6A4F]/30 mb-6">
              <div>
                <div className="text-[10px] font-mono text-[#52B788] uppercase tracking-widest">
                  ZONE TELEMETRY: {selectedZone.id.toUpperCase()}
                </div>
                <h3 className="text-2xl font-black text-white mt-1">
                  {selectedZone.name}
                </h3>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-[#10E836] animate-ping"></span>
                <span className="text-xs font-mono font-bold text-[#10E836]">
                  {selectedZone.status.toUpperCase()}
                </span>
              </div>
            </div>

            {/* Target Pests in this Zone */}
            <div className="mb-6">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest font-bold block mb-2">
                TARGET PESTS IN THIS AREA:
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedZone.pests.map((pest, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[#1B4332]/40 text-[#D8F3DC] border border-[#2D6A4F]/60 rounded-lg text-xs font-bold font-mono"
                  >
                    ⚠ {pest}
                  </span>
                ))}
              </div>
            </div>

            {/* Treatment Protocol */}
            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-xl bg-[#05130E] border border-[#2D6A4F]/30">
                <span className="text-[10px] font-mono text-[#40916C] uppercase tracking-widest font-bold block mb-1">
                  VENEZ DEPLOYMENT PROTOCOL
                </span>
                <p className="text-sm text-gray-200 leading-relaxed font-sans">
                  {selectedZone.treatment}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 bg-[#05130E] rounded-xl border border-[#2D6A4F]/20">
                  <span className="text-[10px] font-mono text-gray-400 uppercase block mb-0.5">
                    FIELD EQUIPMENT
                  </span>
                  <p className="text-xs font-bold text-white font-mono">
                    {selectedZone.equipment}
                  </p>
                </div>
                <div className="p-3 bg-[#05130E] rounded-xl border border-[#2D6A4F]/20">
                  <span className="text-[10px] font-mono text-gray-400 uppercase block mb-0.5">
                    FREQUENCY RECOMMENDATION
                  </span>
                  <p className="text-xs font-bold text-[#10E836] font-mono">
                    {selectedZone.frequency}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#2D6A4F]/30">
              <div className="text-xs text-gray-400">
                Houston Service Area • Direct Field Dispatch
              </div>
              <button
                onClick={() => setActiveTab('contact')}
                className="w-full sm:w-auto px-6 py-3 bg-[#40916C] hover:bg-[#52B788] text-white font-bold text-xs rounded-xl transition-all shadow-lg cursor-pointer"
              >
                REQUEST INSPECTION FOR THIS ZONE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
