import React, { useState } from 'react';
import { ArrowRight, Sparkles, User, Camera } from 'lucide-react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import { usePhotos } from '../context/PhotoContext';

interface HeroProps {
  onOpenInquiry?: () => void;
  onExploreWork?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry, onExploreWork }) => {
  const { deskPhoto, setPhoto } = usePhotos();
  const [loadError, setLoadError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setPhoto('desk', event.target.result as string);
          setLoadError(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden flex items-center bg-[#08090B]">
      {/* Background Atmosphere: Cyan/Blue ambient light + Deep Dark Canvas */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[350px] bg-gradient-to-tr from-cyan-500/12 via-[#7C5CFF]/10 to-transparent blur-[140px] rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-[450px] h-[350px] bg-cyan-400/10 blur-[130px] rounded-full" />
        {/* Subtle fine technical grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Short, Powerful Headline & Conversion CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-cyan-400/20 text-xs text-zinc-300 mb-6 backdrop-blur-xl shadow-lg shadow-cyan-500/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              <span className="font-semibold text-white">M.ASIF</span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-300">Web Developer & UI/UX Designer</span>
            </div>

            {/* Short, Powerful Headline with Entrance Animation */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] text-balance font-display mb-5"
            >
              Modern websites built for <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">growing businesses.</span>
            </motion.h1>

            {/* Short, Sharp Supporting Statement */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-lg mb-8">
              Fast, responsive websites designed to turn attention into growth. WordPress, WooCommerce, and high-performance modern UI/UX.
            </p>

            {/* Two Clear Actions with Entrance Animation */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto"
            >
              <a
                href="#work"
                onClick={(e) => {
                  if (onExploreWork) {
                    e.preventDefault();
                    onExploreWork();
                  }
                }}
                className="group px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-[#7C5CFF] hover:from-cyan-400 hover:to-[#6846f6] shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/35 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  if (onOpenInquiry) {
                    e.preventDefault();
                    onOpenInquiry();
                  }
                }}
                className="group px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-zinc-200 hover:text-white bg-[#121418]/80 hover:bg-[#181a20] border border-white/10 hover:border-cyan-400/40 backdrop-blur-xl active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
              </a>
            </motion.div>

            {/* Clean Unboxed Focus Tags */}
            <div className="pt-6 border-t border-white/10 w-full">
              <div className="flex flex-wrap items-center gap-x-3.5 gap-y-1.5 text-xs text-zinc-400 font-medium">
                <span className="text-zinc-300">Modern Business Sites</span>
                <span className="text-zinc-600" aria-hidden="true">·</span>
                <span className="text-zinc-300">WooCommerce Stores</span>
                <span className="text-zinc-600" aria-hidden="true">·</span>
                <span className="text-zinc-300">Conversion Landing Pages</span>
                <span className="text-zinc-600" aria-hidden="true">·</span>
                <span className="text-zinc-300">Speed Optimization</span>
              </div>
            </div>
          </div>

          {/* Right Column: Real Professional Desk/Workspace Image Integrated With Liquid Glass */}
          <div
            className="lg:col-span-6 relative w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-[#121418] shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:border-cyan-400/40 group aspect-[16/10] sm:aspect-[16/10]">
              {/* Subtle Liquid Glass Top Highlight */}
              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none z-10" />

              {/* Real Desk Setup Photograph */}
              {deskPhoto && !loadError ? (
                <div className="w-full h-full relative">
                  <img
                    src={deskPhoto}
                    alt="M. Asif Professional Workspace Setup"
                    referrerPolicy="no-referrer"
                    onError={() => setLoadError(true)}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                  {/* Atmospheric gradient overlay so the desk setup remains visible and cinematic */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090B]/85 via-[#08090B]/20 to-transparent pointer-events-none" />
                </div>
              ) : (
                /* Fallback frame that honors the real workspace setup */
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-[#181a20] via-[#121418] to-[#0a0b0d] relative">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-3 shadow-lg">
                    <User className="w-8 h-8" />
                  </div>
                  <h4 className="text-base font-bold text-white font-display">M.ASIF Professional Workspace</h4>
                  <p className="text-xs text-zinc-400 mt-1 max-w-xs">
                    MacBook Pro setup with live coding & design environment.
                  </p>
                </div>
              )}

              {/* Bottom Integrated Status Ribbon */}
              <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between p-3.5 rounded-2xl bg-[#08090B]/85 border border-white/15 backdrop-blur-xl">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <div>
                    <p className="text-xs font-bold text-white font-display">Active Engineering Desk</p>
                    <p className="text-[10px] text-zinc-400">Direct 1-on-1 Freelance Development</p>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-cyan-400 font-medium">100% Genuine</span>
              </div>

              {/* Upload Trigger for M. Asif */}
              <label
                htmlFor="hero-desk-upload"
                className={`absolute top-4 right-4 z-20 cursor-pointer flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#08090B]/90 backdrop-blur-xl border border-white/20 text-xs font-semibold text-white shadow-xl transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/20 ${
                  isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}
                title="Update Desk Photo"
              >
                <Camera className="w-3.5 h-3.5 text-cyan-400" />
                <span>Upload Desk Photo</span>
                <input
                  id="hero-desk-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
