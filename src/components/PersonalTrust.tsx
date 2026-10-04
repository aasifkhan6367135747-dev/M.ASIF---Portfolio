import React from 'react';
import { ShieldCheck, HeartHandshake, Eye, Sparkles, UserCheck, MessageSquare } from 'lucide-react';
import { EditorialPhotoFrame } from './EditorialPhotoFrame';

export const PersonalTrust: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#08090B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#15171C] via-[#101216] to-[#0d0e12] border border-white/10 p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Working Photo (PHOTO 2) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <EditorialPhotoFrame
                  type="working"
                  aspectRatio="landscape"
                  showUploadTrigger={true}
                  className="rounded-2xl shadow-xl"
                />
                <div className="mt-3 text-left">
                  <span className="text-[11px] font-mono text-zinc-300">
                    Active Workspace · In-House Engineering & Quality Control
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Personal Trust Narrative */}
            <div className="lg:col-span-7 order-1 lg:order-2 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300 mb-4">
                <HeartHandshake className="w-3.5 h-3.5 text-[#7C5CFF]" />
                <span>There is a real person behind every project.</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-display mb-4">
                Built by M.ASIF. Designed around your business.
              </h2>

              <p className="text-base text-zinc-300 leading-relaxed mb-6">
                I work closely with businesses to turn ideas into modern, responsive, and professional digital experiences. You don't get handed off to an anonymous junior intern or an overseas support queue.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 shrink-0 text-[#35D07F]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Genuine Accountability</h4>
                    <p className="text-[11px] text-zinc-400 mt-0.5 leading-snug">
                      Clear deliverables, agreed timelines, and direct updates on every milestone.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 shrink-0 text-[#7C5CFF]">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Direct Communication</h4>
                    <p className="text-[11px] text-zinc-400 mt-0.5 leading-snug">
                      Fast responses via email or WhatsApp without bureaucratic agency red tape.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
