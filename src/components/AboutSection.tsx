import React, { useState } from 'react';
import { MapPin, User, Camera } from 'lucide-react';
import { PERSONAL_INFO, ABOUT_SPECIALIZATIONS } from '../data/portfolioData';
import { usePhotos } from '../context/PhotoContext';

interface AboutSectionProps {
  onOpenInquiry?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenInquiry }) => {
  const { profilePhoto, setPhoto } = usePhotos();
  const [loadError, setLoadError] = useState(false);
  const [isPhotoHovered, setIsPhotoHovered] = useState(false);
  const [hoveredSpec, setHoveredSpec] = useState<number | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setPhoto('profile', event.target.result as string);
          setLoadError(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-[#08090B] relative border-t border-white/10">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Main Grid: Info on Left, Portrait on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Personal Introduction & Specializations */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2.5">
                <span>The Independent Specialist</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
                Meet M.ASIF
              </h2>
            </div>

            <p className="text-lg sm:text-xl text-zinc-200 font-medium leading-relaxed">
              "I build modern, responsive, and business-focused websites designed to turn casual visitors into paying clients."
            </p>

            <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
              <p>
                I am an independent web developer and UI/UX designer based in India, collaborating directly with startups, medical practices, agencies, and e-commerce brands worldwide.
              </p>
              <p>
                Every project is crafted around real business objectives: authoritative typography, sub-second load times on mobile cellular networks, and frictionless lead conversion flows. When we work together, you partner 1-on-1 with the actual engineer who designs and codes your platform.
              </p>
            </div>

            {/* What I Build & Specialize In — Liquid Glass Module */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#121418]/90 border border-white/10 backdrop-blur-2xl shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs uppercase tracking-wider text-cyan-400 font-semibold font-display">
                  What I Build & Specialize In
                </span>
                <span className="text-[11px] font-mono text-zinc-400">10 Core Pillars</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ABOUT_SPECIALIZATIONS.map((spec, idx) => (
                  <div
                    key={spec.label}
                    onMouseEnter={() => setHoveredSpec(idx)}
                    onMouseLeave={() => setHoveredSpec(null)}
                    className={`p-3.5 rounded-2xl border transition-all duration-300 cursor-default ${
                      hoveredSpec === idx
                        ? 'bg-cyan-500/10 border-cyan-400/50 -translate-y-0.5 shadow-lg shadow-cyan-500/10'
                        : 'bg-white/[0.02] border-white/5 hover:border-white/15'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${hoveredSpec === idx ? 'bg-cyan-400' : 'bg-[#7C5CFF]'}`} />
                      <h4 className="text-xs font-bold text-white tracking-tight">{spec.label}</h4>
                    </div>
                    <p className="text-[11px] text-zinc-400 mt-1 leading-snug">{spec.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#121418]/80 border border-white/10">
                <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold block mb-1">Role</span>
                <span className="text-sm font-semibold text-white">{PERSONAL_INFO.role}</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#121418]/80 border border-white/10">
                <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold block mb-1">Location</span>
                <span className="text-sm font-semibold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{PERSONAL_INFO.location}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Portrait of M. Asif on the Right Side */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div
              className="relative mx-auto max-w-sm lg:max-w-none group"
              onMouseEnter={() => setIsPhotoHovered(true)}
              onMouseLeave={() => setIsPhotoHovered(false)}
            >
              {/* Liquid Glass ambient glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-500/25 via-[#7C5CFF]/20 to-transparent blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 rounded-3xl overflow-hidden border border-white/15 bg-[#121418] shadow-2xl backdrop-blur-2xl aspect-[3/4]">
                {/* Subtle Liquid Glass Top Highlight */}
                <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none z-10" />

                {profilePhoto && !loadError ? (
                  <div className="w-full h-full relative">
                    <img
                      src={profilePhoto}
                      alt="M. Asif - Web Developer & UI/UX Designer Portrait"
                      referrerPolicy="no-referrer"
                      onError={() => setLoadError(true)}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />
                    {/* Natural subtle vignette scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08090B]/85 via-transparent to-transparent opacity-60 pointer-events-none" />
                  </div>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-[#181a20] to-[#0c0d10]">
                    <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 mb-4">
                      <User className="w-8 h-8" />
                    </div>
                    <p className="text-sm font-semibold text-white uppercase font-display">M.ASIF</p>
                    <p className="text-xs text-zinc-400 mt-1">Web Developer & UI/UX Designer</p>
                  </div>
                )}

                {/* Bottom Plaque inside Portrait Frame */}
                <div className="absolute bottom-4 left-4 right-4 z-20 p-3.5 rounded-2xl bg-[#08090B]/90 border border-white/15 backdrop-blur-xl flex items-center justify-between text-xs">
                  <div>
                    <h4 className="font-bold text-white font-display">M.ASIF</h4>
                    <p className="text-[11px] text-zinc-400">Direct 1-on-1 Partnership</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-cyan-400 font-mono text-[11px]">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span>Active Hire</span>
                  </div>
                </div>

                {/* Upload Trigger */}
                <label
                  htmlFor="portrait-upload"
                  className={`absolute top-4 right-4 z-20 cursor-pointer flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#08090B]/90 backdrop-blur-xl border border-white/20 text-xs font-semibold text-white shadow-xl transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/20 ${
                    isPhotoHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}
                  title="Update Portrait Photo"
                >
                  <Camera className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Update Portrait</span>
                  <input
                    id="portrait-upload"
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
      </div>
    </section>
  );
};
