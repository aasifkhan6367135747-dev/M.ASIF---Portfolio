import React from 'react';
import { MessageSquare, Route, Smartphone, CheckCheck } from 'lucide-react';
import { WORK_WITH_ME_PILLARS } from '../data/portfolioData';

export const WorkWithMe: React.FC = () => {
  const icons = [
    <MessageSquare key="msg" className="w-5 h-5 text-[#7C5CFF]" />,
    <Route key="route" className="w-5 h-5 text-[#4DA3FF]" />,
    <Smartphone key="phone" className="w-5 h-5 text-[#35D07F]" />,
    <CheckCheck key="check" className="w-5 h-5 text-[#7C5CFF]" />,
  ];

  return (
    <section className="py-20 md:py-28 bg-[#101216] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 text-left">
          <div className="text-xs font-semibold text-[#7C5CFF] uppercase tracking-wider mb-3">
            <span>Client Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            What It’s Like to Work With Me
          </h2>
          <p className="text-base text-zinc-400 mt-3 leading-relaxed">
            Hiring a freelance web developer should make your life easier, not more complicated. Here is the standard of collaboration I bring to every engagement.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORK_WITH_ME_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="p-6 rounded-2xl bg-[#15171C] border border-white/10 hover:border-[#7C5CFF]/40 transition-all duration-300 text-left flex flex-col justify-between"
            >
              <div>
                <div className="p-3 rounded-xl bg-[#101216] border border-white/10 w-fit mb-5">
                  {icons[idx % icons.length]}
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight font-display mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-[#35D07F] flex items-center gap-1.5">
                <span>Standard Protocol</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
