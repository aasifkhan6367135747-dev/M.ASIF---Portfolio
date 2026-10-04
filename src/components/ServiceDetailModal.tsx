import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Cpu, Layers, Sparkles, UserCheck } from 'lucide-react';
import { ServiceDetail } from '../types/portfolio';

interface ServiceDetailModalProps {
  service: ServiceDetail | null;
  onClose: () => void;
  onOpenInquiry: (initialData?: { websiteType?: string }) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenInquiry,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#121418] border border-white/15 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col text-left">
        {/* Header Bar with Liquid Glass */}
        <div className="px-6 py-5 bg-[#15171C]/90 border-b border-white/10 backdrop-blur-xl flex items-center justify-between shrink-0">
          <div>
            <div className="text-xs font-semibold text-[#7C5CFF] uppercase tracking-wider mb-1">
              <span>{service.categoryLabel}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
              {service.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close Service Details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          {/* Value Prop Banner */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-[#181a20] to-[#121418] border border-white/10">
            <span className="text-xs uppercase tracking-wider text-zinc-300 font-semibold block mb-1">Value Proposition</span>
            <p className="text-base text-zinc-200 font-medium leading-relaxed">
              {service.valueProp}
            </p>
          </div>

          {/* What This Service Includes & Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#15171C] border border-white/10 space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-display mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#35D07F]" />
                <span>What It Includes</span>
              </h3>
              {service.whatItIncludes.map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C5CFF] mt-1.5 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-[#15171C] border border-white/10 space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-display mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#4DA3FF]" />
                <span>Key Features</span>
              </h3>
              {service.features.map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4DA3FF] mt-1.5 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables & What Client Receives */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#15171C] border border-white/10 space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-display mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#35D07F]" />
                <span>Concrete Deliverables</span>
              </h3>
              {service.deliverables.map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#35D07F] mt-1.5 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-[#15171C] border border-white/10 space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-display mb-2 flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-[#7C5CFF]" />
                <span>What The Client Receives</span>
              </h3>
              {service.whatClientReceives.map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C5CFF] mt-1.5 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Client Responsibilities & Relevant Workflow */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2.5">
              <h3 className="text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-2">
                Client Responsibilities
              </h3>
              {service.clientResponsibilities.map((resp) => (
                <div key={resp} className="text-xs text-zinc-300 flex items-start gap-2">
                  <span className="text-zinc-600 font-mono">·</span>
                  <span className="leading-relaxed">{resp}</span>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2.5">
              <h3 className="text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-2">
                Relevant Workflow Stages
              </h3>
              {service.workflow.map((wf, idx) => (
                <div key={wf} className="text-xs text-zinc-300 flex items-center gap-2">
                  <span className="text-[10px] font-mono text-[#7C5CFF] font-bold">0{idx + 1}</span>
                  <span className="leading-relaxed">{wf}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies & Add-ons */}
          <div className="p-6 rounded-2xl bg-[#101216] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-zinc-300 font-semibold block mb-2">
                Core Technologies
              </span>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="sm:text-right">
              <span className="text-xs uppercase tracking-wider text-zinc-300 font-semibold block mb-1">
                Ideal For
              </span>
              <p className="text-xs text-zinc-300 max-w-xs">{service.idealFor}</p>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="px-6 py-4 bg-[#15171C]/90 border-t border-white/10 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <p className="text-xs text-zinc-400">
            Ready to get started with <span className="text-white font-semibold">{service.title}</span>?
          </p>
          <button
            onClick={() => {
              onClose();
              onOpenInquiry({ websiteType: service.title });
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#7C5CFF] hover:bg-[#6846f6] shadow-lg shadow-[#7C5CFF]/25 flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] cursor-pointer"
          >
            <span>Inquire About This Service</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
