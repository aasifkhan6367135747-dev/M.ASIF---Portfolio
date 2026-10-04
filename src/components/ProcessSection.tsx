import React from 'react';
import { Search, Compass, Palette, Code2, Send, CheckCircle2 } from 'lucide-react';
import { WORKFLOW_STAGES } from '../data/portfolioData';

export const ProcessSection: React.FC = () => {
  const getStageIcon = (iconName: string) => {
    switch (iconName) {
      case 'requirements':
        return <Search className="w-5 h-5 text-cyan-400" />;
      case 'planning':
        return <Compass className="w-5 h-5 text-[#7C5CFF]" />;
      case 'design':
        return <Palette className="w-5 h-5 text-cyan-400" />;
      case 'development':
        return <Code2 className="w-5 h-5 text-[#7C5CFF]" />;
      case 'delivery':
        return <Send className="w-5 h-5 text-emerald-400" />;
      default:
        return <Search className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="process" className="py-24 md:py-32 bg-[#08090B] relative border-t border-white/10">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2.5">
            <span>Five-Stage Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            How Projects Move From Idea to Launch
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 leading-relaxed">
            A structured, collaborative roadmap designed for clarity at every milestone.
          </p>
        </div>

        {/* Vertical Timeline / Structured 5-Step Layout */}
        <div className="relative border-l border-white/10 pl-6 sm:pl-10 space-y-10 sm:space-y-12 ml-2 sm:ml-4">
          {WORKFLOW_STAGES.map((stage, idx) => (
            <div key={stage.number} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#121418] border border-cyan-400/50 flex items-center justify-center text-[10px] font-mono font-bold text-cyan-400 shadow-md shadow-cyan-500/20 group-hover:scale-110 transition-transform">
                {stage.step}
              </div>

              {/* Stage Card with Liquid Glass */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#121418]/90 border border-white/10 hover:border-cyan-400/40 backdrop-blur-2xl shadow-xl transition-all duration-300 hover:-translate-y-1 text-left relative overflow-hidden">
                {/* Subtle Liquid Glass Top Highlight */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent pointer-events-none" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 mb-4 gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10 text-cyan-400">
                      {getStageIcon(stage.icon)}
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-cyan-400 block">
                        STAGE {stage.number}
                      </span>
                      <h3 className="text-xl font-bold text-white font-display">
                        {stage.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                  {stage.shortDescription}
                </p>

                {/* What Client Provides & Deliverables Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                  {/* Client Provides */}
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                    <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold block">
                      What You Provide
                    </span>
                    <ul className="space-y-1.5">
                      {stage.clientProvides.map((item, i) => (
                        <li key={i} className="text-xs text-zinc-300 flex items-start gap-2 leading-relaxed">
                          <span className="text-cyan-400 font-mono">·</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                    <span className="text-[11px] uppercase tracking-wider text-cyan-400 font-semibold block">
                      Phase Deliverables
                    </span>
                    <ul className="space-y-1.5">
                      {stage.deliverables.map((item, i) => (
                        <li key={i} className="text-xs text-zinc-300 flex items-start gap-2 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
