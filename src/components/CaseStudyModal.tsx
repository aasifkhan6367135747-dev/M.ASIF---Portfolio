import React, { useEffect } from 'react';
import { X, ExternalLink, ArrowRight, CheckCircle2, Laptop, Smartphone, Shield, Zap } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenInquiry: (initialData?: { industry?: string; websiteType?: string }) => void;
  onOpenLiveDemo?: (project: ProjectItem) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onOpenInquiry,
  onOpenLiveDemo,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#101216] border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#15171C] border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-zinc-300">{project.number}</span>
            <span className="text-zinc-600">/</span>
            <span className="text-xs font-semibold text-[#7C5CFF] uppercase tracking-wider">{project.category}</span>
            <span className="text-zinc-600">·</span>
            <span className="text-xs text-zinc-400">{project.industry}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-10 text-left">
          {/* Headline & Overview */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display mb-3">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-3xl">
              {project.shortDescription}
            </p>

            {/* Quick Actions */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  if (onOpenLiveDemo) {
                    onOpenLiveDemo(project);
                  } else if (project.demoUrl) {
                    window.open(project.demoUrl, '_blank');
                  } else {
                    onClose();
                    onOpenInquiry({ industry: project.industry, websiteType: project.category });
                  }
                }}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#7C5CFF] hover:bg-[#6846f6] transition-colors flex items-center gap-2"
              >
                <span>Launch Interactive Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenInquiry({ industry: project.industry, websiteType: project.category });
                }}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-zinc-200 hover:text-white bg-[#15171C] hover:bg-[#1f2229] border border-white/10 transition-colors flex items-center gap-1.5"
              >
                <span>Build a Website Like This</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Interactive Browser Frame Representation */}
          <div className="rounded-xl border border-white/10 bg-[#15171C] overflow-hidden p-6 relative">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-zinc-300">preview://{project.id}.demo</span>
              </div>
              <span className="text-xs text-zinc-400">Desktop & Mobile Viewport Certified</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-4">
                <div className="p-4 rounded-lg bg-black/40 border border-white/5">
                  <h4 className="text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-2">The Objective</h4>
                  <p className="text-sm text-zinc-300 leading-relaxed">{project.objective}</p>
                </div>
                <div className="p-4 rounded-lg bg-black/40 border border-white/5">
                  <h4 className="text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-2">What Was Built</h4>
                  <p className="text-sm text-zinc-300 leading-relaxed">{project.whatWasBuilt}</p>
                </div>
              </div>

              {/* Technologies & Services */}
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-[#101216] border border-white/5">
                  <h4 className="text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((t) => (
                      <span key={t} className="px-2 py-1 rounded bg-white/5 text-[11px] text-zinc-300 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-[#101216] border border-white/5">
                  <h4 className="text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-3">Services</h4>
                  <div className="space-y-1.5">
                    {project.services.map((s) => (
                      <div key={s} className="text-xs text-zinc-300 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#35D07F]" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Conversion Strategy & Deliverables */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 font-display">Conversion Strategy & Deliverables</h3>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-zinc-300 leading-relaxed mb-4">
              <p>{project.conversionStrategy}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.deliverables.map((deliv, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                  <span className="text-xs font-mono font-bold text-[#7C5CFF] mt-0.5">0{i + 1}</span>
                  <span className="text-xs text-zinc-300 leading-normal">{deliv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features Implemented */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 font-display">Core Features Implemented</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {project.features.map((feat) => (
                <div key={feat} className="p-3 rounded-lg bg-[#15171C] border border-white/5 text-xs text-zinc-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C5CFF]" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Performance & Responsive Standards */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 font-display">Performance & Responsive Standards</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-gradient-to-b from-[#15171C] to-[#101216] border border-white/10">
                <div className="text-xs font-semibold text-cyan-400 mb-1">Responsive Architecture</div>
                <div className="text-xs text-zinc-300 leading-relaxed">{project.responsiveApproach}</div>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-b from-[#15171C] to-[#101216] border border-white/10">
                <div className="text-xs font-semibold text-[#7C5CFF] mb-1">Speed Optimization</div>
                <div className="text-xs text-zinc-300 leading-relaxed">{project.performanceConsiderations}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bar */}
        <div className="px-6 py-4 bg-[#15171C] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <p className="text-xs text-zinc-400 text-center sm:text-left">
            Have a project in mind for <span className="text-white font-semibold">{project.industry}</span>?
          </p>
          <button
            onClick={() => {
              onClose();
              onOpenInquiry({ industry: project.industry, websiteType: project.category });
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#7C5CFF] hover:bg-[#6846f6] transition-colors flex items-center justify-center gap-2"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
