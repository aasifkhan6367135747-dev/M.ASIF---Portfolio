import React, { useState } from 'react';
import { ArrowRight, Globe, ShoppingCart, Rocket, RefreshCw, Zap, Wrench } from 'lucide-react';
import { CORE_SERVICES } from '../data/portfolioData';
import { ServiceDetail } from '../types/portfolio';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesSectionProps {
  onOpenInquiry: (initialData?: { websiteType?: string }) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenInquiry }) => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  const getServiceIcon = (title: string) => {
    switch (title) {
      case 'Business Website Development':
        return <Globe className="w-5 h-5 text-[#7C5CFF]" />;
      case 'WooCommerce & E-Commerce':
        return <ShoppingCart className="w-5 h-5 text-[#4DA3FF]" />;
      case 'Landing Page Design':
        return <Rocket className="w-5 h-5 text-[#35D07F]" />;
      case 'Website Redesign':
        return <RefreshCw className="w-5 h-5 text-[#7C5CFF]" />;
      case 'Performance & Speed Optimization':
        return <Zap className="w-5 h-5 text-[#F59E0B]" />;
      case 'Maintenance & Support':
        return <Wrench className="w-5 h-5 text-[#38BDF8]" />;
      default:
        return <Globe className="w-5 h-5 text-[#7C5CFF]" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#08090B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-[#7C5CFF] uppercase tracking-wider mb-2.5">
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Services Designed to Grow Your Business
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 leading-relaxed">
            Focused, business-driven digital capabilities tailored to your operational requirements. Click any service to view complete inclusions, deliverables, and workflow.
          </p>
        </div>

        {/* 6 Compact, Scannable Service Cards (3-column on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_SERVICES.map((service) => (
            <div
              key={service.number}
              onClick={() => setSelectedService(service)}
              className="group cursor-pointer rounded-2xl bg-[#121418]/90 border border-white/10 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-[#7C5CFF]/40 hover:shadow-xl hover:shadow-[#7C5CFF]/10 backdrop-blur-sm relative overflow-hidden"
            >
              <div>
                {/* Header row with icon, category label & editorial index */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-[#181a20] border border-white/10 group-hover:scale-105 transition-transform">
                    {getServiceIcon(service.title)}
                  </div>
                  <span className="text-xs font-mono font-bold text-zinc-300">
                    {service.number}
                  </span>
                </div>

                {/* Category label */}
                <span className="text-[11px] font-medium text-[#7C5CFF] block mb-1">
                  {service.categoryLabel}
                </span>

                {/* Service Title */}
                <h3 className="text-lg font-bold text-white tracking-tight font-display group-hover:text-white transition-colors">
                  {service.title}
                </h3>

                {/* Value Proposition */}
                <p className="text-xs font-semibold text-zinc-300 mt-1 mb-2.5 line-clamp-1">
                  {service.valueProp}
                </p>

                {/* Short Description */}
                <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                  {service.shortDescription}
                </p>
              </div>

              {/* View Details CTA */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="font-semibold text-white group-hover:text-[#7C5CFF] transition-colors flex items-center gap-1.5">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
                <span className="text-[11px] font-mono text-zinc-300">Scope & Specs</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progressive Disclosure Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenInquiry={onOpenInquiry}
      />
    </section>
  );
};
