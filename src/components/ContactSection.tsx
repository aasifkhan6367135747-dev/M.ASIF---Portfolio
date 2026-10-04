import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, Phone, ExternalLink, CheckCircle2, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO, TARGET_INDUSTRIES } from '../data/portfolioData';
import { InquiryFormData } from '../types/portfolio';

interface ContactSectionProps {
  initialData?: { industry?: string; websiteType?: string };
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialData }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    discussFirst: false,
    name: '',
    email: '',
    businessType: initialData?.websiteType || 'Business Website',
    customBusinessType: '',
    targetIndustry: initialData?.industry || 'Healthcare & Medical',
    customIndustry: '',
    clientLocation: '',
    projectRequirements: '',
  });

  useEffect(() => {
    if (initialData?.websiteType) {
      setFormData((prev) => ({ ...prev, businessType: initialData.websiteType! }));
    }
    if (initialData?.industry) {
      setFormData((prev) => ({ ...prev, targetIndustry: initialData.industry! }));
    }
  }, [initialData]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const businessTypes = [
    'Business Website',
    'E-commerce & WooCommerce',
    'Landing Page',
    'Website Redesign',
    'Performance Optimization',
    'Other',
  ];

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email format (e.g. name@company.com).';
    }

    if (!formData.businessType.trim()) {
      newErrors.businessType = 'Please select your business type.';
    } else if (formData.businessType === 'Other' && !formData.customBusinessType?.trim()) {
      newErrors.customBusinessType = 'Please specify your business type.';
    }

    if (!formData.targetIndustry.trim()) {
      newErrors.targetIndustry = 'Please select your target industry.';
    }

    if (formData.targetIndustry === 'Other' && !formData.customIndustry?.trim()) {
      newErrors.customIndustry = 'Please specify your industry.';
    }

    if (!formData.clientLocation?.trim()) {
      newErrors.clientLocation = 'Please enter your location (City, Country).';
    }

    if (!formData.projectRequirements.trim()) {
      newErrors.projectRequirements = 'Please share a brief summary of your project goals & requirements.';
    } else if (formData.projectRequirements.trim().length < 15) {
      newErrors.projectRequirements = 'Please provide at least 15 characters describing what you want to build.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#08090B] relative border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Header: "Let's Build Something That Moves Your Business Forward." */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2.5">
            <span>Start a Project</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Let's Build Something That Moves Your Business Forward.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 leading-relaxed">
            Tell me about your business goals and requirements. I personally review every inquiry and provide a direct, tailored proposal with zero hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Direct Communication Channels & Trust */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-3xl bg-[#121418]/90 border border-white/10 backdrop-blur-2xl shadow-2xl space-y-5">
              <h3 className="text-base font-bold text-white font-display">
                Direct Communication Channels
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Prefer to chat immediately? Reach out directly via WhatsApp or email for rapid initial discussion.
              </p>

              <div className="space-y-3 pt-2">
                {/* Official WhatsApp with Real Number */}
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-[#181a20] border border-white/10 hover:border-emerald-400/50 flex items-center justify-between text-xs text-zinc-200 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-emerald-500/15 text-emerald-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-semibold block text-white">Chat on WhatsApp</span>
                      <span className="text-[11px] text-zinc-400 font-mono">{PERSONAL_INFO.whatsappNumber}</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                </a>

                {/* Email Channel */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-4 rounded-2xl bg-[#181a20] border border-white/10 hover:border-cyan-400/50 flex items-center justify-between text-xs text-zinc-200 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-cyan-500/15 text-cyan-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-semibold block text-white">Email Address</span>
                      <span className="text-[11px] text-zinc-400 font-mono truncate max-w-[200px] block">
                        {PERSONAL_INFO.email}
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-cyan-400 transition-colors" />
                </a>
              </div>

              {/* Status Note */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-400">
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>{PERSONAL_INFO.availability}</span>
                </span>
                <span>Direct 1-on-1 Contact</span>
              </div>
            </div>

            {/* Client Standards */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 text-xs text-zinc-400">
              <span className="font-semibold text-zinc-300 block mb-1">What to Expect:</span>
              <p className="leading-relaxed">
                Submit details → Personal review by M.ASIF → Tailored scope & proposal → Milestone agreement → Clean development → 100% Client handover.
              </p>
            </div>
          </div>

          {/* Right Column: Clean Project Submission Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#121418]/95 border border-white/15 backdrop-blur-2xl p-6 sm:p-10 shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white font-display">Inquiry Received</h4>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                    Thank you. Your project inquiry has been received. I'll review your requirements and get back to you shortly at <span className="text-white font-mono">{formData.email}</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} id="inquiry-form" className="space-y-6">
                  {/* Portfolio Discussion Option Checkbox */}
                  <label className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 cursor-pointer hover:border-cyan-400/40 transition-colors">
                    <input
                      type="checkbox"
                      checked={formData.discussFirst}
                      onChange={(e) => setFormData({ ...formData, discussFirst: e.target.checked })}
                      className="mt-1 w-4 h-4 rounded text-cyan-400 focus:ring-cyan-400 bg-[#101216] border-white/20 cursor-pointer"
                    />
                    <div>
                      <span className="text-xs font-semibold text-white block">
                        I'd like to discuss the portfolio / work before starting.
                      </span>
                      <span className="text-[11px] text-zinc-400">
                        Check this if you want to explore design directions or ask initial project questions first.
                      </span>
                    </div>
                  </label>

                  {/* 1. Name & 2. Email Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-2">
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        placeholder="e.g. Asif Khan"
                        className={`w-full px-4 py-3 rounded-xl bg-[#0c0d10] border text-white placeholder:text-zinc-600 text-sm focus:outline-none transition-all ${
                          errors.name
                            ? 'border-rose-500 focus:border-rose-500'
                            : 'border-white/10 focus:border-cyan-400'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-400 mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-2">
                        Email Address <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="e.g. client@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-[#0c0d10] border text-white placeholder:text-zinc-600 text-sm focus:outline-none transition-all ${
                          errors.email
                            ? 'border-rose-500 focus:border-rose-500'
                            : 'border-white/10 focus:border-cyan-400'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* 3. Business Type & 4. Target Industry */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-2">
                        Business Type <span className="text-rose-400">*</span>
                      </label>
                      <select
                        value={formData.businessType}
                        onChange={(e) => {
                          const val = e.target.value;
                          setFormData((prev) => ({
                            ...prev,
                            businessType: val,
                            customBusinessType: val === 'Other' ? prev.customBusinessType : '',
                          }));
                          if (errors.businessType) setErrors((prev) => ({ ...prev, businessType: '' }));
                          if (val !== 'Other' && errors.customBusinessType) {
                            setErrors((prev) => ({ ...prev, customBusinessType: '' }));
                          }
                        }}
                        className="w-full px-4 py-3 rounded-xl bg-[#0c0d10] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                      >
                        {businessTypes.map((type) => (
                          <option key={type} value={type} className="bg-[#101216] text-white">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-2">
                        Target Industry <span className="text-rose-400">*</span>
                      </label>
                      <select
                        value={formData.targetIndustry}
                        onChange={(e) => {
                          setFormData({ ...formData, targetIndustry: e.target.value });
                          if (errors.targetIndustry) setErrors({ ...errors, targetIndustry: '' });
                        }}
                        className="w-full px-4 py-3 rounded-xl bg-[#0c0d10] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                      >
                        {TARGET_INDUSTRIES.map((ind) => (
                          <option key={ind} value={ind} className="bg-[#101216] text-white">
                            {ind}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* If Business Type is "Other", reveal custom business type input */}
                  {formData.businessType === 'Other' && (
                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-cyan-400/30 animate-in fade-in duration-200">
                      <label className="block text-xs font-semibold text-cyan-400 mb-1.5">
                        Please specify your business type <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.customBusinessType || ''}
                        onChange={(e) => {
                          setFormData({ ...formData, customBusinessType: e.target.value });
                          if (errors.customBusinessType) setErrors({ ...errors, customBusinessType: '' });
                        }}
                        placeholder="Enter your business type"
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#0c0d10] border text-white placeholder:text-zinc-600 text-xs focus:outline-none focus:border-cyan-400 ${
                          errors.customBusinessType ? 'border-rose-500' : 'border-white/10'
                        }`}
                      />
                      {errors.customBusinessType && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.customBusinessType}</span>
                        </p>
                      )}
                    </div>
                  )}

                  {/* If "Other" is chosen, reveal empty text input */}
                  {formData.targetIndustry === 'Other' && (
                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-cyan-400/30 animate-in fade-in duration-200">
                      <label className="block text-xs font-semibold text-cyan-400 mb-1.5">
                        Please specify your industry <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.customIndustry || ''}
                        onChange={(e) => {
                          setFormData({ ...formData, customIndustry: e.target.value });
                          if (errors.customIndustry) setErrors({ ...errors, customIndustry: '' });
                        }}
                        placeholder="e.g. Luxury Yacht Brokerage, Marine Engineering..."
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0c0d10] border border-white/10 text-white placeholder:text-zinc-600 text-xs focus:outline-none focus:border-cyan-400"
                      />
                      {errors.customIndustry && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.customIndustry}</span>
                        </p>
                      )}
                    </div>
                  )}

                  {/* 5. Client Location (Flexible Text Input: "City, Country") */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-2">
                      Client Location <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.clientLocation}
                      onChange={(e) => {
                        setFormData({ ...formData, clientLocation: e.target.value });
                        if (errors.clientLocation) setErrors({ ...errors, clientLocation: '' });
                      }}
                      placeholder="City, Country (e.g. Mumbai, India or London, United Kingdom)"
                      className={`w-full px-4 py-3 rounded-xl bg-[#0c0d10] border text-white placeholder:text-zinc-600 text-sm focus:outline-none transition-all ${
                        errors.clientLocation
                          ? 'border-rose-500 focus:border-rose-500'
                          : 'border-white/10 focus:border-cyan-400'
                      }`}
                    />
                    {errors.clientLocation && (
                      <p className="text-[11px] text-rose-400 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.clientLocation}</span>
                      </p>
                    )}
                  </div>

                  {/* 6. Project Goals & Requirements */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-2">
                      Project Goals & Requirements <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.projectRequirements}
                      onChange={(e) => {
                        setFormData({ ...formData, projectRequirements: e.target.value });
                        if (errors.projectRequirements) setErrors({ ...errors, projectRequirements: '' });
                      }}
                      placeholder="Tell me what you want to build, what your business does, the pages or features you need, your preferred timeline, and any reference websites you like."
                      className={`w-full px-4 py-3 rounded-xl bg-[#0c0d10] border text-white placeholder:text-zinc-600 text-sm focus:outline-none transition-all resize-none ${
                        errors.projectRequirements
                          ? 'border-rose-500 focus:border-rose-500'
                          : 'border-white/10 focus:border-cyan-400'
                      }`}
                    />
                    {errors.projectRequirements && (
                      <p className="text-[11px] text-rose-400 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.projectRequirements}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-[#7C5CFF] hover:from-cyan-400 hover:to-[#6846f6] shadow-xl shadow-cyan-500/25 active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-zinc-500">
                    🔒 Direct inquiry to M.ASIF. Your details and intellectual property are handled with strict professional confidentiality.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
