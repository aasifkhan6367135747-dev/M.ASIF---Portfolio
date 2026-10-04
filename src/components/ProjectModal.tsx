import React, { useState, useEffect } from 'react';
import { X, ExternalLink, ArrowRight, Share2, Check, Laptop, Tablet, Smartphone, CheckCircle2, ShieldCheck, Sparkles, Layers } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  initialTab?: 'details' | 'demo';
  onClose: () => void;
  onOpenInquiry: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  initialTab = 'details',
  onClose,
  onOpenInquiry,
}) => {
  const [activeTab, setActiveTab] = useState<'details' | 'demo'>(initialTab);
  const [demoViewport, setDemoViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

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

  const handleShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: `${project.title} — M.ASIF Portfolio`,
          text: project.shortDescription,
          url: window.location.href,
        });
      } catch {
        // Fallback to clipboard
        if (navigator.clipboard?.writeText) {
          navigator.clipboard.writeText(window.location.href).catch(() => {});
        }
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } else {
      if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(window.location.href).catch(() => {});
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl h-[92vh] bg-[#0c0d10] border border-white/15 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-left">
        {/* Header Bar with Liquid Glass */}
        <div className="px-6 py-4 bg-[#15171C]/90 border-b border-white/10 backdrop-blur-xl flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-cyan-400">{project.number}</span>
            <span className="text-zinc-600">/</span>
            <span className="text-xs font-semibold text-white uppercase tracking-wider font-display">{project.category}</span>
            <span className="text-zinc-600 hidden sm:inline">·</span>
            <span className="text-xs text-zinc-400 hidden sm:inline">{project.industry}</span>
          </div>

          {/* Mode Switcher: Project Details vs Live Demo */}
          <div className="flex items-center gap-1.5 p-1 bg-[#101216] border border-white/10 rounded-xl">
            <button
              onClick={() => setActiveTab('details')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'details'
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/40 shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Project Details
            </button>
            <button
              onClick={() => setActiveTab('demo')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                activeTab === 'demo'
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/40 shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>

          {/* Actions: Share & Close */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 transition-colors relative"
              title="Share Project"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab 1: Comprehensive Project Details */}
        {activeTab === 'details' ? (
          <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display mb-3">
                {project.title}
              </h2>
              <p className="text-base text-zinc-300 leading-relaxed max-w-3xl">
                {project.shortDescription}
              </p>

              {/* Quick Actions */}
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setActiveTab('demo')}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-[#7C5CFF] shadow-lg shadow-cyan-500/20 flex items-center gap-2"
                >
                  <span>Launch Interactive Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={handleShare}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white bg-white/5 border border-white/10 hover:border-white/25 flex items-center gap-2"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{copied ? 'Link Copied!' : 'Share Project'}</span>
                </button>
              </div>
            </div>

            {/* Objective & What Was Built */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-[#15171C] border border-white/10 space-y-2">
                <h3 className="text-xs uppercase tracking-wider text-cyan-400 font-semibold font-display">
                  Project Objective
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">{project.objective}</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#15171C] border border-white/10 space-y-2">
                <h3 className="text-xs uppercase tracking-wider text-[#7C5CFF] font-semibold font-display">
                  What Was Built
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">{project.whatWasBuilt}</p>
              </div>
            </div>

            {/* Core Features */}
            <div className="p-6 rounded-2xl bg-[#15171C] border border-white/10 space-y-3">
              <h3 className="text-xs uppercase tracking-wider text-zinc-300 font-semibold font-display mb-2">
                Engineered Features & Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feat) => (
                  <div key={feat} className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Strategy Matrix (Responsive, Speed, SEO, Conversion) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1.5">
                <h4 className="text-xs font-bold text-white">Responsive Execution</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{project.responsiveApproach}</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1.5">
                <h4 className="text-xs font-bold text-white">Performance Tuning</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{project.performanceConsiderations}</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1.5">
                <h4 className="text-xs font-bold text-white">On-Page SEO Structure</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{project.seoConsiderations}</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1.5">
                <h4 className="text-xs font-bold text-white">Conversion Strategy</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{project.conversionStrategy}</p>
              </div>
            </div>

            {/* Technologies & Deliverables */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
              <div>
                <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold block mb-2">Technologies Used</span>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold block mb-2">Project Deliverables</span>
                <div className="flex flex-wrap gap-2">
                  {project.deliverables.map((d) => (
                    <span key={d} className="px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-400/20 text-xs text-cyan-300">
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Tab 2: Integrated Interactive Live Demo Canvas */
          <div className="flex-1 bg-[#08090B] p-4 sm:p-6 overflow-y-auto flex flex-col items-center justify-start">
            {/* Viewport Control Bar */}
            <div className="flex items-center gap-2 p-1 bg-[#121418] border border-white/10 rounded-xl mb-4">
              <button
                onClick={() => setDemoViewport('desktop')}
                className={`p-1.5 rounded-lg text-xs flex items-center gap-1.5 ${
                  demoViewport === 'desktop' ? 'bg-cyan-500/20 text-cyan-400' : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Laptop className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Desktop</span>
              </button>
              <button
                onClick={() => setDemoViewport('tablet')}
                className={`p-1.5 rounded-lg text-xs flex items-center gap-1.5 ${
                  demoViewport === 'tablet' ? 'bg-cyan-500/20 text-cyan-400' : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Tablet className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Tablet</span>
              </button>
              <button
                onClick={() => setDemoViewport('mobile')}
                className={`p-1.5 rounded-lg text-xs flex items-center gap-1.5 ${
                  demoViewport === 'mobile' ? 'bg-cyan-500/20 text-cyan-400' : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Mobile</span>
              </button>
            </div>

            {/* Interactive Browser Frame */}
            <div
              className={`transition-all duration-300 bg-[#121418] border border-white/10 rounded-2xl overflow-hidden shadow-2xl ${
                demoViewport === 'desktop'
                  ? 'w-full max-w-4xl'
                  : demoViewport === 'tablet'
                  ? 'w-[768px] max-w-full'
                  : 'w-[390px] max-w-full'
              }`}
            >
              {/* Browser Address Bar */}
              <div className="px-4 py-2.5 bg-[#15171C] border-b border-white/10 flex items-center justify-between text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="px-3 py-0.5 rounded bg-[#08090B] border border-white/5 font-mono text-[11px] text-zinc-400 flex items-center gap-2 truncate max-w-[260px]">
                  <span className="text-emerald-400">🔒</span>
                  <span>https://demo.{project.id}.masif.dev</span>
                </div>
                <span className="text-[10px] text-zinc-400">Interactive Concept</span>
              </div>

              {/* Demo Content */}
              <div className="p-6 sm:p-8 space-y-6 bg-gradient-to-b from-[#14161c] to-[#0c0d10] text-left">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="font-bold text-white tracking-wider uppercase font-display">{project.title.split('—')[0]}</span>
                  <div className="flex items-center gap-3 text-xs text-zinc-400">
                    <span>Overview</span>
                    <span>Features</span>
                    <span className="text-cyan-400 font-semibold">Live Preview</span>
                  </div>
                </div>

                <div className="py-6 max-w-xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-xs text-cyan-300 mb-3">
                    <Sparkles className="w-3 h-3" />
                    <span>Live Showcase Concept</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display mb-3">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                    {project.whatWasBuilt}
                  </p>
                  <button
                    onClick={() => {
                      onClose();
                      onOpenInquiry();
                    }}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-[#7C5CFF] shadow-lg shadow-cyan-500/25"
                  >
                    Build A Website Like This →
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Bar: Action to Start Project */}
        <div className="px-6 py-4 bg-[#15171C]/90 border-t border-white/10 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <p className="text-xs text-zinc-400">
            Like this design style? Let's build a customized version for your business.
          </p>
          <button
            onClick={() => {
              onClose();
              onOpenInquiry();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-[#7C5CFF] hover:from-cyan-400 hover:to-[#6846f6] shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] cursor-pointer"
          >
            <span>Start a Project With This Design</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
