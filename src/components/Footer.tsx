import React from 'react';
import { ArrowUp, Mail, Phone, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090B] border-t border-white/10 pt-16 pb-12 text-left relative">
      {/* Subtle Liquid Glass Top Reflection Line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="text-2xl font-bold tracking-tight text-white font-display">
              {PERSONAL_INFO.brandName}
            </a>
            <p className="text-xs text-zinc-300 font-medium">
              {PERSONAL_INFO.supportingPhrase}
            </p>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Independent web developer and UI/UX designer crafting high-converting business websites, custom WooCommerce storefronts, and performance redesigns.
            </p>
            <div className="pt-2 text-xs text-[#35D07F] font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#35D07F]" />
              <span>{PERSONAL_INFO.availability}</span>
            </div>
          </div>

          {/* Navigation - Exact requested order: About, Services, Work, Demos, Process, FAQ */}
          <div>
            <p className="text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-4">Navigation</p>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li><a href="#about" className="hover:text-white transition-colors">About M.ASIF</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Selected Work</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Client Roadmap</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-4">Capabilities</p>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li><a href="#services" className="hover:text-white transition-colors">Business Websites</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">WooCommerce & E-Commerce</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Landing Page Design</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Website Redesign</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Speed Optimization</a></li>
            </ul>
          </div>

          {/* Connect - Only Real Verified Channels: WhatsApp and Email (Section 13) */}
          <div>
            <p className="text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-4">Direct Contact</p>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <Phone className="w-3.5 h-3.5 text-[#35D07F]" />
                  <span>WhatsApp: {PERSONAL_INFO.whatsappNumber}</span>
                  <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <Mail className="w-3.5 h-3.5 text-[#7C5CFF]" />
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                  <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© 2026 M.ASIF. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenTerms}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 text-zinc-400 hover:text-white transition-all flex items-center gap-1"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px]">Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
