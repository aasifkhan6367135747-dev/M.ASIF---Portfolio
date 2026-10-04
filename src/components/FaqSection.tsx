import React, { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { FAQ_LIST, PERSONAL_INFO } from '../data/portfolioData';

interface FaqSectionProps {
  onOpenInquiry: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenInquiry }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#08090B] relative border-t border-white/10">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2.5">
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Clear Answers to Common Questions
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 leading-relaxed">
            Everything you need to know about working with M.ASIF, from revisions to custom e-commerce and ongoing support.
          </p>
        </div>

        {/* Accordion List with Liquid Glass */}
        <div className="space-y-3.5">
          {FAQ_LIST.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#121418] border-cyan-400/40 shadow-xl shadow-cyan-500/5'
                    : 'bg-[#121418]/60 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-white tracking-tight font-display">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-lg border border-white/10 text-zinc-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-cyan-500/20 text-cyan-400 border-cyan-400/40' : 'bg-white/5'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-zinc-300 leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                    <div className="mt-4 flex items-center justify-between text-[11px] text-zinc-400 pt-3 border-t border-white/5">
                      <span>Category: {faq.category}</span>
                      <a
                        href="#contact"
                        className="text-cyan-400 hover:underline font-medium"
                      >
                        Ask another question →
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact Box */}
        <div className="mt-12 p-6 rounded-3xl bg-[#121418]/80 border border-white/10 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 text-cyan-400">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Have a specific question about your project?</h4>
              <p className="text-xs text-zinc-400 mt-0.5">Reach out directly via WhatsApp or inquiry form for a direct answer.</p>
            </div>
          </div>
          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors whitespace-nowrap text-center"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
