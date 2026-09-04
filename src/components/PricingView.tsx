import React, { useState } from 'react';
import { Check, Shield, Zap, HelpCircle, Phone, ArrowRight, Calculator } from 'lucide-react';
import { PageTab, PricingPlan } from '../types';
import { PRICING_PLANS, BUSINESS_INFO } from '../data/pestControlData';

interface PricingViewProps {
  setActiveTab: (tab: PageTab) => void;
  onSelectPlan?: (plan: PricingPlan) => void;
}

export const PricingView: React.FC<PricingViewProps> = ({ setActiveTab, onSelectPlan }) => {
  // Interactive Calculator State
  const [propertySqFt, setPropertySqFt] = useState<number>(2000);
  const [selectedPests, setSelectedPests] = useState<string[]>(['Roaches', 'Ants']);
  const [includeYard, setIncludeYard] = useState<boolean>(false);

  const handleChoosePlan = (plan: PricingPlan) => {
    if (onSelectPlan) {
      onSelectPlan(plan);
    }
    setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const calculateEstimate = () => {
    let base = 120; // Default bimonthly base
    if (propertySqFt > 3000) base += 30;
    if (includeYard) base += 40;
    if (selectedPests.includes('Rodents')) base += 100;
    if (selectedPests.includes('Termites')) return 'Structural Assessment Required ($1000+)';
    return `$${base} / Bimonthly`;
  };

  return (
    <section className="w-full bg-[#081C15] py-14 px-4 sm:px-8 border-b border-[#2D6A4F]/30 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            CLEAR, HONEST RATES. NO HIDDEN FEES.
          </h1>
          <p className="text-gray-300 text-sm sm:text-base mt-3">
            Directly from our verified price sheet. Whether you need standard perimeter maintenance or comprehensive termite structural protection, our rates are 100% upfront.
          </p>
        </div>

        {/* 5 Core Pricing Plans from User Sheet */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`bg-[#05130E] rounded-2xl border p-6 flex flex-col justify-between relative transition-all ${
                plan.highlight
                  ? 'border-[#40916C] shadow-2xl shadow-[#40916C]/20 bg-[#1B4332]/20 ring-1 ring-[#40916C]'
                  : 'border-[#2D6A4F]/40 hover:border-[#2D6A4F]'
              }`}
            >
              {plan.popularBadge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#40916C] text-white text-[10px] font-mono font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow">
                  {plan.popularBadge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white">{plan.title}</h3>
                  <span className="text-[10px] font-mono text-[#52B788] bg-[#1B4332]/50 px-2 py-0.5 rounded">
                    {plan.cadence}
                  </span>
                </div>

                <div className="my-4">
                  <div className="text-4xl font-black text-white font-mono flex items-baseline">
                    <span className="text-[#10E836]">{plan.price}</span>
                  </div>
                  <p className="text-[11px] font-mono text-gray-400 mt-1">
                    {plan.billingText}
                  </p>
                </div>

                <p className="text-xs text-gray-300 mb-6 leading-relaxed">
                  {plan.description}
                </p>

                <div className="space-y-2.5 mb-6">
                  <span className="text-[10px] font-mono text-gray-400 uppercase font-bold block">
                    INCLUDED IN THIS PLAN:
                  </span>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start text-xs text-gray-200">
                      <Check className="w-3.5 h-3.5 text-[#10E836] mr-2 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#2D6A4F]/30">
                <button
                  onClick={() => handleChoosePlan(plan)}
                  className={`w-full py-3 rounded-xl font-bold text-xs tracking-wider transition-all cursor-pointer ${
                    plan.highlight
                      ? 'bg-[#40916C] hover:bg-[#52B788] text-white shadow-lg'
                      : 'bg-[#1B4332]/40 hover:bg-[#1B4332]/70 text-[#D8F3DC] border border-[#2D6A4F]/60'
                  }`}
                >
                  SELECT {plan.title.toUpperCase()}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Instant Price Estimator Calculator */}
        <div className="bg-[#05130E] border border-[#2D6A4F]/50 rounded-2xl p-6 sm:p-10 mb-14">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#1B4332] flex items-center justify-center text-[#10E836]">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                Interactive Houston Pest Control Estimator
              </h3>
              <p className="text-xs text-gray-400">
                Tailor an instant quote based on your home size and pest threat profile.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Square footage slider */}
            <div className="space-y-2 bg-[#081C15] p-4 rounded-xl border border-[#2D6A4F]/30">
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Home Square Footage:</span>
                <span className="font-mono text-[#10E836] font-bold">{propertySqFt} sq ft</span>
              </div>
              <input
                type="range"
                min="1000"
                max="5000"
                step="250"
                value={propertySqFt}
                onChange={(e) => setPropertySqFt(Number(e.target.value))}
                className="w-full accent-[#40916C] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-gray-500">
                <span>1,000 sq ft</span>
                <span>3,000 sq ft</span>
                <span>5,000+ sq ft</span>
              </div>
            </div>

            {/* Yard addition toggle */}
            <div className="bg-[#081C15] p-4 rounded-xl border border-[#2D6A4F]/30 space-y-3">
              <span className="text-xs text-gray-400 block font-bold">Property Add-ons:</span>
              <label className="flex items-center space-x-2 text-xs text-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeYard}
                  onChange={(e) => setIncludeYard(e.target.checked)}
                  className="rounded accent-[#40916C]"
                />
                <span>Include Yard Granule & Lawn Mosquito Barrier</span>
              </label>
              <label className="flex items-center space-x-2 text-xs text-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedPests.includes('Rodents')}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedPests([...selectedPests, 'Rodents']);
                    } else {
                      setSelectedPests(selectedPests.filter((p) => p !== 'Rodents'));
                    }
                  }}
                  className="rounded accent-[#40916C]"
                />
                <span>Include Attic Rodent Exclusion Audit</span>
              </label>
            </div>

            {/* Calculated Estimate Box */}
            <div className="bg-[#1B4332]/30 p-5 rounded-xl border border-[#40916C] text-center">
              <div className="text-2xl font-black text-white font-mono mb-2">
                {calculateEstimate()}
              </div>
              <button
                onClick={() => setActiveTab('contact')}
                className="w-full py-2.5 bg-[#40916C] hover:bg-[#52B788] text-white font-bold text-xs rounded-lg transition-all"
              >
                LOCK IN THIS RATE
              </button>
            </div>
          </div>
        </div>

        {/* Verification Footer Note */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-6 bg-[#05130E] rounded-xl border border-[#2D6A4F]/30 text-xs text-gray-400 gap-4">
          <div className="flex items-center space-x-3">
            <Shield className="w-5 h-5 text-[#40916C] shrink-0" />
            <span>
              All plans include the <strong>Venez Re-Spray Guarantee</strong>. If pests return between treatments, technician John Rincon returns at no cost.
            </span>
          </div>
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="shrink-0 font-mono text-white hover:text-[#52B788] flex items-center space-x-1"
          >
            <Phone className="w-4 h-4 text-[#40916C]" />
            <span>713-298-4210</span>
          </a>
        </div>
      </div>
    </section>
  );
};
