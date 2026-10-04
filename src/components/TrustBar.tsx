import React from 'react';
import { Layout, Smartphone, Zap, CheckCircle2, UserCheck, Shield } from 'lucide-react';
import { CREDIBILITY_PILLARS } from '../data/portfolioData';

export const TrustBar: React.FC = () => {
  const icons = [
    <Layout key="layout" className="w-4 h-4 text-[#7C5CFF]" />,
    <Smartphone key="phone" className="w-4 h-4 text-[#4DA3FF]" />,
    <Zap key="zap" className="w-4 h-4 text-[#35D07F]" />,
    <Shield key="shield" className="w-4 h-4 text-[#7C5CFF]" />,
    <UserCheck key="user" className="w-4 h-4 text-[#4DA3FF]" />,
  ];

  return (
    <section className="relative py-10 bg-[#101216]/60 border-y border-white/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-center">
          {CREDIBILITY_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.label}
              className="group flex flex-col sm:flex-row items-start sm:items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-white/[0.03]"
            >
              <div className="p-2.5 rounded-lg bg-[#15171C] border border-white/10 group-hover:border-[#7C5CFF]/40 group-hover:scale-105 transition-all duration-300 shrink-0">
                {icons[idx % icons.length]}
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-white tracking-tight group-hover:text-white transition-colors">
                  {pillar.label}
                </h4>
                <p className="text-[11px] text-zinc-400 mt-0.5 line-clamp-1 group-hover:text-zinc-300 transition-colors">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
