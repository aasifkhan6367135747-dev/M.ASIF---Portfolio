import React from 'react';
import { ArrowLeft, Compass, Home } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NotFoundViewProps {
  onBackToHome: () => void;
}

export const NotFoundView: React.FC<NotFoundViewProps> = ({ onBackToHome }) => {
  return (
    <div className="min-h-screen bg-[#08090B] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#7C5CFF]/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-md mx-auto space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#15171C] border border-white/10 text-[#7C5CFF]">
          <Compass className="w-8 h-8 animate-pulse" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono text-zinc-300 font-bold uppercase tracking-widest">
            Error 404 · Page Not Found
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Looks like this page took a wrong turn.
          </h1>
          <p className="text-sm text-zinc-400 leading-relaxed">
            The link you clicked doesn’t exist or might have been relocated. Let’s get you back to the portfolio showroom.
          </p>
        </div>

        <div className="pt-4 flex items-center justify-center gap-4">
          <button
            onClick={onBackToHome}
            className="px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#7C5CFF] hover:bg-[#6846f6] shadow-xl shadow-[#7C5CFF]/20 flex items-center gap-2 transition-all cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
        </div>

        <div className="pt-8 border-t border-white/10 text-xs text-zinc-400">
          <span>{PERSONAL_INFO.brandName} · {PERSONAL_INFO.role}</span>
        </div>
      </div>
    </div>
  );
};
