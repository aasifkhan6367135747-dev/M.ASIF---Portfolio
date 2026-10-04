import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('About');

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'FAQ', href: '#faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'services', 'work', 'process', 'faq'];
      const scrollPos = window.scrollY + 250;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            const found = navLinks.find(
              (l) => l.href.toLowerCase() === `#${section}`
            );
            if (found) setActiveSection(found.label);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          isScrolled
            ? 'bg-[#08090B]/80 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-black/70 py-3.5'
            : 'bg-[#08090B]/40 backdrop-blur-md border-b border-white/5 py-5'
        }`}
      >
        {/* Subtle Liquid Glass Top Highlight */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo on Left: M.ASIF */}
          <a
            href="#"
            className="text-xl sm:text-2xl font-bold tracking-tight text-white hover:text-cyan-400 transition-colors font-display"
          >
            {PERSONAL_INFO.brandName}
          </a>

          {/* Clean Navigation Links with Framer Motion Gliding Pill & Cyan Glow */}
          <nav
            onMouseLeave={() => setHoveredLink(null)}
            className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium text-zinc-300 p-1 rounded-full bg-white/[0.03] border border-white/5 backdrop-blur-xl"
          >
            {navLinks.map((link) => {
              const isSelected = hoveredLink ? hoveredLink === link.label : activeSection === link.label;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.label)}
                  onClick={() => setActiveSection(link.label)}
                  className={`relative px-4 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    isSelected ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="navbar-pill-indicator"
                      className="absolute inset-0 rounded-full bg-cyan-400/10 border border-cyan-400/30 shadow-[0_0_16px_rgba(34,211,238,0.22)] -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Top Right Action: "Start a Project" with Liquid Glass */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-500/20 to-[#7C5CFF]/20 hover:from-cyan-500/30 hover:to-[#7C5CFF]/30 border border-cyan-400/30 hover:border-cyan-400/60 backdrop-blur-xl shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/25 transition-all duration-200 active:scale-[0.98] cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-zinc-300 hover:text-white hover:bg-white/5 border border-white/10 transition-colors"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-down Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#08090B]/95 backdrop-blur-2xl md:hidden pt-24 px-6 pb-8 flex flex-col justify-between border-b border-white/10 animate-in fade-in duration-200">
          <div className="flex flex-col gap-4 text-left">
            <p className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold mb-2">Navigation</p>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-semibold text-zinc-200 hover:text-cyan-400 transition-colors py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-[#7C5CFF] shadow-lg shadow-cyan-500/25"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-[11px] text-center text-zinc-400">
              ● {PERSONAL_INFO.availability}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
