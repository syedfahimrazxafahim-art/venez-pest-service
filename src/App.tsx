/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Shield, ChevronDown, ChevronUp, Check, Phone, MessageCircle, ArrowRight, Zap, Award, Sparkles } from 'lucide-react';
import { PageTab, PestService, PricingPlan } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero3DExperience } from './components/Hero3DExperience';
import { HouseDefenseSimulator } from './components/HouseDefenseSimulator';
import { WorkGallery } from './components/WorkGallery';
import { ServicesView } from './components/ServicesView';
import { PricingView } from './components/PricingView';
import { AboutView } from './components/AboutView';
import { BookingView } from './components/BookingView';
import { FloatingDispatchWidget } from './components/FloatingDispatchWidget';
import { BUSINESS_INFO, PRICING_PLANS, FAQ_ITEMS, CLOUDINARY_IMAGES } from './data/pestControlData';

export default function App() {
  const [activeTab, setActiveTab] = useState<PageTab>('home');
  const [selectedService, setSelectedService] = useState<PestService | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSelectService = (service: PestService) => {
    setSelectedService(service);
  };

  const handleSelectPlan = (plan: PricingPlan) => {
    setSelectedPlan(plan);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#081C15] text-white selection:bg-[#40916C] selection:text-white font-sans antialiased">
      {/* High Density Header */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area Based on Active Tab */}
      <main className="flex-1 w-full">
        {activeTab === 'home' && (
          <div className="w-full">
            {/* 1. 3D Hero Experience with High Density Layout */}
            <Hero3DExperience setActiveTab={setActiveTab} />

            {/* 2. Official Certified Protection Master Showcase (Featuring gpt567.png) */}
            <section className="w-full bg-[#05130E] py-12 px-4 sm:px-8 border-b border-[#2D6A4F]/30">
              <div className="max-w-7xl mx-auto">
                <div className="bg-[#081C15] rounded-2xl border border-[#2D6A4F]/50 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-center">
                  <div className="lg:col-span-7 p-6 sm:p-10 space-y-4">
                    <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                      PROTECTING WHAT MATTERS.
                    </h2>

                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      Reliable, safe, and effective pest control solutions for your home and business in Houston, Texas. Combining high-pressure perimeter liquid barriers, micro-encapsulated baseboard formulations, and tamper-proof rodent exclusion.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                      <div className="p-2.5 bg-[#05130E] rounded-lg border border-[#2D6A4F]/40 text-center">
                        <span className="text-[10px] font-mono text-gray-400 block">TIER 01</span>
                        <span className="text-xs font-bold text-white">General Pest</span>
                      </div>
                      <div className="p-2.5 bg-[#05130E] rounded-lg border border-[#2D6A4F]/40 text-center">
                        <span className="text-[10px] font-mono text-gray-400 block">TIER 02</span>
                        <span className="text-xs font-bold text-white">Rodent Control</span>
                      </div>
                      <div className="p-2.5 bg-[#05130E] rounded-lg border border-[#2D6A4F]/40 text-center">
                        <span className="text-[10px] font-mono text-gray-400 block">TIER 03</span>
                        <span className="text-xs font-bold text-white">Termites</span>
                      </div>
                      <div className="p-2.5 bg-[#05130E] rounded-lg border border-[#2D6A4F]/40 text-center">
                        <span className="text-[10px] font-mono text-gray-400 block">TIER 04</span>
                        <span className="text-xs font-bold text-white">Commercial</span>
                      </div>
                    </div>

                    <div className="pt-4 flex flex-wrap gap-3">
                      <button
                        onClick={() => setActiveTab('contact')}
                        className="px-6 py-2.5 bg-[#40916C] hover:bg-[#52B788] text-white font-bold text-xs rounded-xl transition-all shadow-md cursor-pointer"
                      >
                        BOOK INSPECTION NOW
                      </button>
                      <button
                        onClick={() => setActiveTab('work')}
                        className="px-5 py-2.5 bg-[#1B4332]/40 hover:bg-[#1B4332]/80 text-[#D8F3DC] border border-[#2D6A4F]/60 font-mono text-xs rounded-xl transition-all cursor-pointer"
                      >
                        INSPECT OFFICIAL ASSETS (6)
                      </button>
                    </div>
                  </div>

                  {/* Customer Image Feature Container */}
                  <div className="lg:col-span-5 bg-black p-4 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-[#2D6A4F]/40 min-h-[300px]">
                    <img
                      src={CLOUDINARY_IMAGES.banner}
                      alt="Venez Certified Protection Master Showcase"
                      className="w-full h-auto max-h-[360px] object-contain rounded-lg"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (!target.src.endsWith('/gpt567.png')) {
                          target.src = '/gpt567.png';
                        }
                      }}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Interactive House Defense Simulator */}
            <HouseDefenseSimulator setActiveTab={setActiveTab} />

            {/* 4. Dedicated "Our Pest Control Work" Section (Strict Image Requirement) */}
            <WorkGallery setActiveTab={setActiveTab} />

            {/* 5. Quick Pricing Schedule Snapshot */}
            <section className="w-full bg-[#05130E] py-14 px-4 sm:px-8 border-b border-[#2D6A4F]/30">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 pb-6 border-b border-[#2D6A4F]/30">
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-black text-white">
                      PROVEN PEST PROTECTION PLANS
                    </h2>
                  </div>
                  <button
                    onClick={() => setActiveTab('pricing')}
                    className="mt-3 sm:mt-0 text-xs font-bold text-[#52B788] hover:text-white flex items-center space-x-1 font-mono cursor-pointer"
                  >
                    <span>VIEW FULL DETAILS & CALCULATOR</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  {PRICING_PLANS.map((plan) => (
                    <div
                      key={plan.id}
                      className={`p-5 rounded-2xl border flex flex-col justify-between transition-all ${
                        plan.highlight
                          ? 'bg-[#1B4332]/30 border-[#40916C] shadow-lg shadow-[#40916C]/10'
                          : 'bg-[#081C15] border-[#2D6A4F]/40 hover:border-[#2D6A4F]'
                      }`}
                    >
                      <div>
                        {plan.popularBadge && (
                          <span className="inline-block mb-2 text-[9px] font-mono font-bold text-[#10E836] bg-[#10E836]/10 px-2 py-0.5 rounded">
                            {plan.popularBadge}
                          </span>
                        )}
                        <h3 className="text-sm font-bold text-white mb-1">
                          {plan.title}
                        </h3>
                        <div className="text-2xl font-black text-white font-mono my-2">
                          <span className="text-[#10E836]">{plan.price}</span>
                        </div>
                        <p className="text-[11px] text-gray-400 mb-4 leading-tight">
                          {plan.cadence}
                        </p>
                      </div>

                      <button
                        onClick={() => {
                          setSelectedPlan(plan);
                          setActiveTab('contact');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={`w-full py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          plan.highlight
                            ? 'bg-[#40916C] hover:bg-[#52B788] text-white'
                            : 'bg-[#05130E] hover:bg-[#1B4332] text-[#D8F3DC] border border-[#2D6A4F]/40'
                        }`}
                      >
                        CHOOSE PLAN
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 6. FAQ High Density Section */}
            <section className="w-full bg-[#081C15] py-14 px-4 sm:px-8 border-b border-[#2D6A4F]/30">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="text-2xl sm:text-3xl font-black text-white">
                    HOUSTON PEST DEFENSE INTEL
                  </h2>
                </div>

                <div className="space-y-3">
                  {FAQ_ITEMS.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div
                        key={idx}
                        className="bg-[#05130E] rounded-xl border border-[#2D6A4F]/40 overflow-hidden transition-all"
                      >
                        <button
                          onClick={() => toggleFaq(idx)}
                          className="w-full p-4 text-left flex items-center justify-between font-bold text-sm text-white hover:text-[#52B788] cursor-pointer"
                        >
                          <span>{faq.q}</span>
                          {isOpen ? (
                            <ChevronUp className="w-4 h-4 text-[#40916C] shrink-0 ml-2" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-gray-500 shrink-0 ml-2" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-4 text-xs sm:text-sm text-gray-300 font-sans leading-relaxed border-t border-[#2D6A4F]/20 pt-3">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'services' && (
          <ServicesView
            setActiveTab={setActiveTab}
            onSelectService={handleSelectService}
          />
        )}

        {activeTab === 'pricing' && (
          <PricingView
            setActiveTab={setActiveTab}
            onSelectPlan={handleSelectPlan}
          />
        )}

        {activeTab === 'work' && (
          <WorkGallery setActiveTab={setActiveTab} />
        )}

        {activeTab === 'about' && (
          <AboutView setActiveTab={setActiveTab} />
        )}

        {activeTab === 'contact' && (
          <BookingView
            initialService={selectedService}
            initialPlan={selectedPlan}
          />
        )}
      </main>

      {/* High Density Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Floating Fast Dispatch Widget */}
      <FloatingDispatchWidget />
    </div>
  );
}
