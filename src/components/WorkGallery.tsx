import React, { useState } from 'react';
import { Maximize2, Shield, Check, Info, ZoomIn, Calendar, Phone, ArrowRight, ExternalLink } from 'lucide-react';
import { GalleryItem, PageTab } from '../types';
import { GALLERY_ITEMS, BUSINESS_INFO } from '../data/pestControlData';

interface WorkGalleryProps {
  setActiveTab?: (tab: PageTab) => void;
  onSelectImage?: (item: GalleryItem) => void;
}

export const WorkGallery: React.FC<WorkGalleryProps> = ({ setActiveTab, onSelectImage }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Treatments', 'Field Work', 'Pricing', 'Promotions', 'Branding'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const handleOpenModal = (item: GalleryItem) => {
    setActiveModalItem(item);
    if (onSelectImage) {
      onSelectImage(item);
    }
  };

  return (
    <section className="w-full bg-[#081C15] py-14 px-4 sm:px-8 border-b border-[#2D6A4F]/30 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with High Density styling */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-[#2D6A4F]/30">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              OUR PEST CONTROL WORK
            </h2>
            <p className="text-gray-400 text-sm max-w-2xl mt-2">
              Official photographic documentation, verified price schedules, field operations led by John Rincon, and certified protection standards for Greater Houston.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 mt-4 md:mt-0 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#40916C] text-white shadow-md'
                    : 'bg-[#1B4332]/30 text-gray-400 hover:text-white hover:bg-[#1B4332]/60 border border-[#2D6A4F]/30'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* High Density Gallery Grid - Displaying EVERY Uploaded Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-[#05130E] rounded-2xl border border-[#2D6A4F]/40 overflow-hidden shadow-xl hover:border-[#40916C] transition-all flex flex-col justify-between"
            >
              {/* Image Preview Container with Proportional Aspect */}
              <div
                className="relative bg-black cursor-pointer overflow-hidden flex items-center justify-center min-h-[280px] p-3"
                onClick={() => handleOpenModal(item)}
              >
                <img
                  src={item.imageUrl || `/${item.fileName}`}
                  alt={item.title}
                  className="w-full h-auto max-h-[360px] object-contain group-hover:scale-[1.02] transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src !== `/${item.fileName}`) {
                      target.src = `/${item.fileName}`;
                    } else if (item.svgFallback && !target.src.endsWith('.svg')) {
                      target.src = `/${item.svgFallback}`;
                    }
                  }}
                  referrerPolicy="no-referrer"
                />

                {/* Overlay Badge */}
                <div className="absolute top-3 left-3 bg-[#081C15]/90 border border-[#2D6A4F]/60 px-2.5 py-1 rounded-md text-[10px] font-mono text-[#52B788] font-bold">
                  {item.category.toUpperCase()}
                </div>

                {/* Zoom Trigger Icon */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenModal(item);
                  }}
                  className="absolute bottom-3 right-3 p-2 rounded-lg bg-[#1B4332]/80 hover:bg-[#40916C] text-white border border-[#2D6A4F] transition-all shadow-lg"
                  title="Inspect High Resolution"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Information & Highlights Card Footer */}
              <div className="p-5 flex-1 flex flex-col justify-between border-t border-[#2D6A4F]/30 bg-[#081C15]">
                <div>
                  <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-[#52B788] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 mb-3 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1 mb-4">
                    {item.highlights.slice(0, 2).map((hl, i) => (
                      <div key={i} className="flex items-start text-[11px] text-gray-300">
                        <Check className="w-3.5 h-3.5 text-[#10E836] mr-1.5 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#2D6A4F]/20 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-gray-500">
                    ASSET ID: {item.id.toUpperCase()}
                  </span>
                  <button
                    onClick={() => handleOpenModal(item)}
                    className="text-xs font-bold text-[#40916C] hover:text-[#52B788] flex items-center space-x-1 cursor-pointer"
                  >
                    <span>INSPECT FULL</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Field Treatment Telemetry Showcase Banner */}
        <div className="mt-12 bg-[#05130E] border border-[#2D6A4F]/50 rounded-2xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white">
              John Rincon Operational Standards
            </h3>
            <p className="text-xs text-gray-400">
              Each residential visit includes full 10-foot perimeter foundation soaking, crawlspace probe, and baseboard protection.
            </p>
          </div>

          <div className="space-y-2 text-xs font-mono text-gray-300 bg-[#081C15] p-4 rounded-xl border border-[#2D6A4F]/30">
            <div className="flex justify-between text-[#52B788]">
              <span>OUTDOOR LIQUID BARRIER:</span>
              <span className="font-bold">ACTIVE</span>
            </div>
            <div className="flex justify-between">
              <span>INDOOR BASEBOARD DRIFT:</span>
              <span className="text-white">ZERO DRIFT (PET-SAFE)</span>
            </div>
            <div className="flex justify-between">
              <span>HARRIS COUNTY RESPONSE:</span>
              <span className="text-[#10E836] font-bold">SAME DAY / 24HR</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="py-3 px-4 bg-[#40916C] hover:bg-[#52B788] text-white text-center font-bold text-xs rounded-xl transition-all flex items-center justify-center space-x-2 shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>BOOK FIELD INSPECTION</span>
            </a>
            {setActiveTab && (
              <button
                onClick={() => setActiveTab('pricing')}
                className="py-2.5 px-4 bg-[#1B4332]/30 hover:bg-[#1B4332]/60 text-[#D8F3DC] border border-[#2D6A4F]/50 text-center font-bold text-xs rounded-xl transition-all cursor-pointer"
              >
                COMPARE $120 / $190 / $400 PLANS
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Detailed Inspection */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-150"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="bg-[#081C15] border border-[#2D6A4F] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto flex flex-col md:flex-row shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Preview */}
            <div className="md:w-3/5 bg-black p-4 flex items-center justify-center border-b md:border-b-0 md:border-r border-[#2D6A4F]/40">
              <img
                src={activeModalItem.imageUrl || `/${activeModalItem.fileName}`}
                alt={activeModalItem.title}
                className="max-h-[70vh] w-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src !== `/${activeModalItem.fileName}`) {
                    target.src = `/${activeModalItem.fileName}`;
                  } else if (activeModalItem.svgFallback && !target.src.endsWith('.svg')) {
                    target.src = `/${activeModalItem.svgFallback}`;
                  }
                }}
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Meta and Details */}
            <div className="md:w-2/5 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 bg-[#1B4332] text-[#52B788] text-[10px] font-mono font-bold rounded">
                    {activeModalItem.category.toUpperCase()}
                  </span>
                  <button
                    onClick={() => setActiveModalItem(null)}
                    className="text-gray-400 hover:text-white text-xs font-mono px-2 py-1 bg-black/40 rounded border border-gray-700 cursor-pointer"
                  >
                    CLOSE [ESC]
                  </button>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {activeModalItem.title}
                </h3>
                <p className="text-xs text-[#52B788] font-mono mb-4">
                  {activeModalItem.caption}
                </p>

                <p className="text-xs text-gray-300 leading-relaxed mb-6">
                  {activeModalItem.description}
                </p>

                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-mono text-gray-400 uppercase font-bold">
                    Key Highlights:
                  </span>
                  {activeModalItem.highlights.map((hl, i) => (
                    <div key={i} className="flex items-center text-xs text-white">
                      <Check className="w-3.5 h-3.5 text-[#10E836] mr-2 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t border-[#2D6A4F]/40">
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#40916C] hover:bg-[#52B788] text-white text-center font-bold text-xs rounded-xl transition-all flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>INQUIRE ABOUT THIS SERVICE</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
