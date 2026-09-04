import React, { useState } from 'react';
import { Shield, Phone, MessageCircle, Send, CheckCircle2, Calendar, MapPin, Clock, AlertCircle } from 'lucide-react';
import { BookingFormData, PestService, PricingPlan } from '../types';
import { BUSINESS_INFO, PEST_SERVICES, PRICING_PLANS } from '../data/pestControlData';

interface BookingProps {
  initialService?: PestService | null;
  initialPlan?: PricingPlan | null;
}

export const BookingView: React.FC<BookingProps> = ({ initialService, initialPlan }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    zipCode: '',
    propertyType: 'residential',
    serviceType: initialService?.name || 'Regular Pest Control ($120)',
    planSelection: initialPlan?.title || 'Bimonthly Pest Control ($120)',
    preferredDate: '',
    preferredTime: 'Morning (8:00 AM - 12:00 PM)',
    pestNotes: '',
    emergencyDispatch: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hello Venez Pest Control / John Rincon,\n\n` +
      `I would like to request an inspection/service in Houston:\n` +
      `• Name: ${formData.fullName || 'Customer'}\n` +
      `• Phone: ${formData.phone || 'Provided via WhatsApp'}\n` +
      `• Address: ${formData.address || 'Houston area'} (Zip: ${formData.zipCode || 'N/A'})\n` +
      `• Property: ${formData.propertyType.toUpperCase()}\n` +
      `• Service: ${formData.serviceType}\n` +
      `• Plan: ${formData.planSelection}\n` +
      `• Emergency Dispatch: ${formData.emergencyDispatch ? 'YES (URGENT)' : 'Standard'}\n` +
      `• Notes: ${formData.pestNotes || 'Standard treatment requested'}`
    );
    window.open(`https://wa.me/17132984210?text=${text}`, '_blank');
  };

  return (
    <section className="w-full bg-[#081C15] py-14 px-4 sm:px-8 border-b border-[#2D6A4F]/30 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 pb-6 border-b border-[#2D6A4F]/30">
          <h1 className="text-3xl sm:text-5xl font-black text-white">
            BOOK INSPECTION & PEST TREATMENT
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mt-2">
            Submit your property details for same-day dispatch or instant confirmation. 
            You can also connect directly with technician John Rincon via WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form Column */}
          <div className="lg:col-span-7 bg-[#05130E] p-6 sm:p-10 rounded-2xl border border-[#2D6A4F]/50 shadow-2xl">
            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 bg-[#1B4332] text-[#10E836] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Inspection Request Received!
                </h3>
                <p className="text-sm text-gray-300 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{formData.fullName}</strong>. John Rincon has been notified of your request for {formData.serviceType} in {formData.address || 'Houston'}.
                </p>
                <div className="p-4 bg-[#081C15] rounded-xl border border-[#2D6A4F]/30 max-w-md mx-auto text-xs font-mono text-gray-300 text-left space-y-1">
                  <div>DISPATCH STATUS: <span className="text-[#10E836]">QUEUED</span></div>
                  <div>PHONE: <span className="text-white">{formData.phone}</span></div>
                  <div>PLAN: <span className="text-white">{formData.planSelection}</span></div>
                </div>
                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                  <button
                    onClick={handleWhatsAppSend}
                    className="px-6 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-black font-bold text-xs rounded-xl transition-all flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>SEND DETAILS VIA WHATSAPP TOO</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 bg-[#1B4332]/40 text-gray-300 hover:text-white border border-[#2D6A4F]/40 font-bold text-xs rounded-xl transition-all"
                  >
                    SUBMIT ANOTHER REQUEST
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-[#2D6A4F]/30">
                  <span className="text-xs font-mono text-[#52B788] uppercase font-bold">
                    STEP 1: PROPERTY & CONTACT DETAILS
                  </span>
                  <span className="text-[10px] font-mono text-gray-400">
                    * ALL FIELDS PROCESSED CONFIDENTIALLY
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1.5 font-bold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maria Gonzalez"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#081C15] border border-[#2D6A4F]/50 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#40916C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1.5 font-bold">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(713) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#081C15] border border-[#2D6A4F]/50 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#40916C]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-mono text-gray-300 mb-1.5 font-bold">
                      Houston Street Address *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 1234 Westheimer Rd"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full bg-[#081C15] border border-[#2D6A4F]/50 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#40916C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1.5 font-bold">
                      Zip Code
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 77007"
                      value={formData.zipCode}
                      onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                      className="w-full bg-[#081C15] border border-[#2D6A4F]/50 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#40916C]"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1.5 font-bold">
                      Service Type
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full bg-[#081C15] border border-[#2D6A4F]/50 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#40916C]"
                    >
                      {PEST_SERVICES.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name} ({s.startingPrice})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1.5 font-bold">
                      Preferred Plan Cadence
                    </label>
                    <select
                      value={formData.planSelection}
                      onChange={(e) => setFormData({ ...formData, planSelection: e.target.value })}
                      className="w-full bg-[#081C15] border border-[#2D6A4F]/50 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#40916C]"
                    >
                      {PRICING_PLANS.map((p) => (
                        <option key={p.id} value={p.title}>
                          {p.title} ({p.price})
                        </option>
                      ))}
                      <option value="One-Time Inspection">One-Time Treatment</option>
                    </select>
                  </div>
                </div>

                {/* Emergency dispatch checkbox */}
                <div className="p-3.5 bg-[#081C15] rounded-xl border border-[#2D6A4F]/40 flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="emergency"
                    checked={formData.emergencyDispatch}
                    onChange={(e) => setFormData({ ...formData, emergencyDispatch: e.target.checked })}
                    className="w-4 h-4 rounded accent-[#10E836]"
                  />
                  <label htmlFor="emergency" className="text-xs text-gray-200 cursor-pointer">
                    <strong className="text-[#10E836]">Emergency Dispatch:</strong> Check if you have an active severe infestation (e.g. wasps, snake in yard, active rodent scratching) requiring same-day visit.
                  </label>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1.5 font-bold">
                    Pest Infestation Notes / Details
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe pests seen, locations (kitchen, attic, patio), pet considerations, or gate codes..."
                    value={formData.pestNotes}
                    onChange={(e) => setFormData({ ...formData, pestNotes: e.target.value })}
                    className="w-full bg-[#081C15] border border-[#2D6A4F]/50 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#40916C]"
                  ></textarea>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 py-3.5 bg-[#40916C] hover:bg-[#52B788] text-white font-bold text-xs rounded-xl transition-all shadow-lg flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>CONFIRM INSPECTION REQUEST</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="py-3.5 px-6 bg-[#1B4332]/60 hover:bg-[#1B4332] text-[#D8F3DC] border border-[#2D6A4F] font-bold text-xs rounded-xl transition-all flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>SEND VIA WHATSAPP</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#05130E] p-6 rounded-2xl border border-[#2D6A4F]/40 space-y-4">
              <h3 className="text-xs font-mono text-[#40916C] uppercase tracking-widest font-bold">
                DIRECT CONTACT CHANNELS
              </h3>

              <div className="space-y-3 text-xs">
                <div className="flex items-start space-x-3 p-3 bg-[#081C15] rounded-xl border border-[#2D6A4F]/20">
                  <Phone className="w-4 h-4 text-[#40916C] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-400 block">Direct Telephone</span>
                    <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-sm font-bold text-white font-mono hover:text-[#52B788]">
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-[#081C15] rounded-xl border border-[#2D6A4F]/20">
                  <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-400 block">WhatsApp Priority Dispatch</span>
                    <a href={BUSINESS_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-[#25D366] font-mono hover:underline">
                      +1 (713) 298-4210
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-[#081C15] rounded-xl border border-[#2D6A4F]/20">
                  <Clock className="w-4 h-4 text-[#40916C] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-400 block">Operating Hours</span>
                    <p className="text-xs text-white">Mon - Sat: 7:00 AM - 8:00 PM</p>
                    <p className="text-[11px] text-[#10E836] font-mono">24/7 Emergency Dispatch Available</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-[#081C15] rounded-xl border border-[#2D6A4F]/20">
                  <MapPin className="w-4 h-4 text-[#40916C] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-400 block">Houston Headquarters</span>
                    <p className="text-xs text-white">Serving Houston & All Harris County Communities</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Re-Spray Guarantee Box */}
            <div className="p-6 bg-[#1B4332]/20 border border-[#2D6A4F]/50 rounded-2xl space-y-2">
              <span className="text-[10px] font-mono text-[#10E836] uppercase tracking-widest font-bold block">
                100% PEACE OF MIND
              </span>
              <h4 className="text-base font-bold text-white">
                Zero-Risk Treatment Guarantee
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                If covered pests re-appear between scheduled maintenance cycles, Venez Pest Control provides complimentary follow-up spot applications until the infestation is completely eliminated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
