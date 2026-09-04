import React, { useState } from 'react';
import { Shield, Sparkles, Building2, TreePine, Wind, Rat, Compass, Building, Check, ArrowRight, Phone } from 'lucide-react';
import { PageTab, PestService } from '../types';
import { PEST_SERVICES, BUSINESS_INFO } from '../data/pestControlData';

interface ServicesViewProps {
  setActiveTab: (tab: PageTab) => void;
  onSelectService?: (service: PestService) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ setActiveTab, onSelectService }) => {
  const [selectedService, setSelectedService] = useState<PestService>(PEST_SERVICES[0]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield': return <Shield className="w-5 h-5 text-[#10E836]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#52B788]" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-[#40916C]" />;
      case 'TreePine': return <TreePine className="w-5 h-5 text-[#10E836]" />;
      case 'Wind': return <Wind className="w-5 h-5 text-[#52B788]" />;
      case 'Rat': return <Rat className="w-5 h-5 text-[#F59E0B]" />;
      case 'Compass': return <Compass className="w-5 h-5 text-[#40916C]" />;
      case 'Building': return <Building className="w-5 h-5 text-[#D8F3DC]" />;
      default: return <Shield className="w-5 h-5 text-[#10E836]" />;
    }
  };

  const handleBookService = (service: PestService) => {
    if (onSelectService) {
      onSelectService(service);
    }
    setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-[#081C15] py-14 px-4 sm:px-8 border-b border-[#2D6A4F]/30 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-[#2D6A4F]/30">
          <h1 className="text-3xl sm:text-5xl font-black text-white">
            PEST CONTROL SERVICES
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-3xl mt-2">
            Targeted residential and commercial pest defense for Greater Houston, TX. 
            All formulations are applied by certified technicians with zero risk to family pets and children.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PEST_SERVICES.map((service) => {
            const isSelected = selectedService.id === service.id;
            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`bg-[#05130E] rounded-2xl border p-6 flex flex-col justify-between cursor-pointer transition-all hover:border-[#40916C] relative ${
                  isSelected
                    ? 'border-[#40916C] shadow-xl shadow-[#40916C]/10 bg-[#1B4332]/20 ring-1 ring-[#40916C]'
                    : 'border-[#2D6A4F]/40'
                }`}
              >
                {service.popular && (
                  <span className="absolute -top-3 right-4 bg-[#40916C] text-white text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    POPULAR
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#1B4332]/50 border border-[#2D6A4F] flex items-center justify-center">
                      {getIcon(service.iconName)}
                    </div>
                    {service.startingPrice && (
                      <span className="font-mono text-xs font-bold text-[#10E836] bg-black/40 px-2.5 py-1 rounded-md border border-[#2D6A4F]/40">
                        {service.startingPrice}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">
                    {service.name}
                  </h3>
                  {service.spanishName && (
                    <p className="text-xs text-[#52B788] font-mono mb-2">
                      {service.spanishName}
                    </p>
                  )}

                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="space-y-1 mb-4">
                    <span className="text-[10px] font-mono text-gray-400 uppercase font-bold block">
                      TARGET PESTS:
                    </span>
                    <p className="text-xs text-gray-300 font-mono">
                      {service.targetPests.slice(0, 3).join(' • ')}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#2D6A4F]/20 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#52B788]">
                    {service.frequency || 'Full Warranty'}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBookService(service);
                    }}
                    className="text-xs font-bold text-[#40916C] hover:text-white flex items-center space-x-1 cursor-pointer"
                  >
                    <span>BOOK</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Service Detailed Inspection Card */}
        <div className="mt-12 bg-[#05130E] border border-[#2D6A4F]/50 rounded-2xl p-6 sm:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#2D6A4F]/30">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                {selectedService.name}
              </h2>
              <p className="text-sm text-gray-300 mt-1">
                {selectedService.tagline}
              </p>
            </div>

            <div className="flex items-center space-x-4">
              {selectedService.startingPrice && (
                <div className="text-right">
                  <span className="text-xs font-mono text-gray-400">Starting Price</span>
                  <div className="text-2xl font-black text-[#10E836] font-mono">
                    {selectedService.startingPrice}
                  </div>
                </div>
              )}
              <button
                onClick={() => handleBookService(selectedService)}
                className="px-6 py-3 bg-[#40916C] hover:bg-[#52B788] text-white font-bold text-xs rounded-xl transition-all shadow-lg cursor-pointer"
              >
                REQUEST DISPATCH FOR THIS SERVICE
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div>
              <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest font-bold mb-3">
                STEP-BY-STEP FIELD EXECUTION:
              </h4>
              <div className="space-y-3">
                {selectedService.treatmentSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start text-xs text-gray-200">
                    <span className="w-5 h-5 rounded-full bg-[#1B4332] text-[#10E836] font-mono font-bold flex items-center justify-center shrink-0 mr-3 text-[10px]">
                      0{idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 bg-[#081C15] p-5 rounded-xl border border-[#2D6A4F]/30">
              <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest font-bold">
                GUARANTEE & TECHNICIAN STANDARDS:
              </h4>
              <ul className="space-y-2 text-xs text-gray-300">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-[#10E836] mr-2 shrink-0" />
                  <span>Licensed by Texas Department of Agriculture (SPCB)</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-[#10E836] mr-2 shrink-0" />
                  <span>Fast response across Houston, Katy, Sugar Land, Heights & Pasadena</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-[#10E836] mr-2 shrink-0" />
                  <span>Zero-cost re-spray if target pests appear between maintenance cycles</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-[#10E836] mr-2 shrink-0" />
                  <span>Pet, family, and garden safe botanical formulations</span>
                </li>
              </ul>

              <div className="pt-3 border-t border-[#2D6A4F]/20 flex items-center justify-between text-xs">
                <span className="text-gray-400">Direct Question?</span>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="font-mono text-[#52B788] hover:underline flex items-center space-x-1"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Talk with John Rincon</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
