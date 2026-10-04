import React, { useState, useEffect } from 'react';
import { X, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { WebsiteType, PackageTier, InquiryFormData } from '../types/portfolio';
import { LOCATION_DATA } from '../data/locationData';

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    industry?: string;
    websiteType?: string;
  };
}

export const ProjectInquiryModal: React.FC<ProjectInquiryModalProps> = ({
  isOpen,
  onClose,
  initialData,
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    discussFirst: false,
    name: '',
    email: '',
    businessType: (initialData?.websiteType as WebsiteType) || 'Business Website',
    customBusinessType: '',
    targetIndustry: initialData?.industry || 'Healthcare',
    packageTier: 'Standard',
    country: 'India',
    stateProvince: 'Maharashtra',
    districtCity: 'Mumbai',
    projectRequirements: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialData?.websiteType) {
      setFormData((prev) => ({ ...prev, businessType: initialData.websiteType as WebsiteType }));
    }
    if (initialData?.industry) {
      setFormData((prev) => ({ ...prev, targetIndustry: initialData.industry! }));
    }
  }, [initialData]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentCountry = LOCATION_DATA.find((c) => c.name === formData.country) || LOCATION_DATA[0];
  const currentState = currentCountry.states.find((s) => s.name === formData.stateProvince) || currentCountry.states[0];
  const cities = currentState?.cities || ['Capital City'];

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email.';
    }
    if (formData.businessType === 'Other' && !formData.customBusinessType?.trim()) {
      errs.customBusinessType = 'Please specify your business type.';
    }
    if (!formData.projectRequirements.trim() || formData.projectRequirements.trim().length < 15) {
      errs.projectRequirements = 'Please share your project goals (at least 15 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
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

  const businessTypes: WebsiteType[] = [
    'Business Website',
    'WooCommerce Store',
    'Landing Page',
    'Website Redesign',
    'Speed Optimization',
    'Other',
  ];

  const packageOptions: { tier: PackageTier; label: string; desc: string }[] = [
    { tier: 'Basic', label: 'Basic', desc: '1–3 pages, responsive, contact form' },
    { tier: 'Standard', label: 'Standard', desc: '5–8 pages, WhatsApp, booking, full speed' },
    { tier: 'Premium', label: 'Premium', desc: 'Full custom store, advanced features' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#121418] border border-white/15 rounded-3xl shadow-2xl p-6 sm:p-8 text-left max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#7C5CFF] font-semibold">Direct Collaboration</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display mt-0.5">
              Let's Build Your Next Website
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#35D07F]/20 text-[#35D07F] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-white font-display">Inquiry Sent Successfully</h4>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-white font-semibold">{formData.name}</span>. Your project inquiry has been received. I'll review your requirements and get back to you shortly at <span className="text-white font-mono">{formData.email}</span>.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#7C5CFF] hover:bg-[#6846f6] transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Discuss option */}
            <label className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/10 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.discussFirst}
                onChange={(e) => setFormData({ ...formData, discussFirst: e.target.checked })}
                className="mt-0.5 w-4 h-4 rounded text-[#7C5CFF] bg-[#101216] border-white/20"
              />
              <span className="text-xs text-zinc-300">
                I'd like to discuss the portfolio / work before starting.
              </span>
            </label>

            {/* Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                  Your Name <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Asif Khan"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0c0d10] border border-white/10 text-white placeholder:text-zinc-600 text-xs focus:outline-none focus:border-[#7C5CFF]"
                />
                {errors.name && <p className="text-[10px] text-rose-400 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                  Email Address <span className="text-rose-400">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. client@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0c0d10] border border-white/10 text-white placeholder:text-zinc-600 text-xs focus:outline-none focus:border-[#7C5CFF]"
                />
                {errors.email && <p className="text-[10px] text-rose-400 mt-1">{errors.email}</p>}
              </div>
            </div>

            {/* Business Type & Target Industry */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                  Business Type
                </label>
                <select
                  value={formData.businessType}
                  onChange={(e) => {
                    const val = e.target.value as WebsiteType;
                    setFormData((prev) => ({
                      ...prev,
                      businessType: val,
                      customBusinessType: val === 'Other' ? prev.customBusinessType : '',
                    }));
                    if (val !== 'Other' && errors.customBusinessType) {
                      setErrors((prev) => ({ ...prev, customBusinessType: '' }));
                    }
                  }}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0c0d10] border border-white/10 text-white text-xs focus:outline-none focus:border-[#7C5CFF]"
                >
                  {businessTypes.map((type) => (
                    <option key={type} value={type} className="bg-[#121418] text-white">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                  Target Industry
                </label>
                <input
                  type="text"
                  value={formData.targetIndustry}
                  onChange={(e) => setFormData({ ...formData, targetIndustry: e.target.value })}
                  placeholder="e.g. Dental Clinic, Real Estate"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0c0d10] border border-white/10 text-white text-xs focus:outline-none focus:border-[#7C5CFF]"
                />
              </div>
            </div>

            {/* If Business Type is "Other", reveal custom business type input */}
            {formData.businessType === 'Other' && (
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-[#7C5CFF]/40 animate-in fade-in duration-200">
                <label className="block text-xs font-semibold text-[#7C5CFF] mb-1">
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
                  className={`w-full px-3.5 py-2 rounded-xl bg-[#0c0d10] border text-white placeholder:text-zinc-600 text-xs focus:outline-none focus:border-[#7C5CFF] ${
                    errors.customBusinessType ? 'border-rose-500' : 'border-white/10'
                  }`}
                />
                {errors.customBusinessType && <p className="text-[10px] text-rose-400 mt-1">{errors.customBusinessType}</p>}
              </div>
            )}

            {/* Package Tier */}
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                Package Selection
              </label>
              <div className="grid grid-cols-3 gap-2">
                {packageOptions.map((pkg) => (
                  <button
                    type="button"
                    key={pkg.tier}
                    onClick={() => setFormData({ ...formData, packageTier: pkg.tier })}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      formData.packageTier === pkg.tier
                        ? 'bg-[#7C5CFF]/20 border-[#7C5CFF] text-white'
                        : 'bg-[#0c0d10] border-white/10 text-zinc-400 hover:border-white/20'
                    }`}
                  >
                    <div className="text-xs font-bold text-white">{pkg.label}</div>
                    <div className="text-[10px] text-zinc-400 mt-0.5 line-clamp-1">{pkg.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="block text-[10px] text-zinc-400 mb-1">Country</label>
                <select
                  value={formData.country}
                  onChange={(e) => {
                    const c = LOCATION_DATA.find((x) => x.name === e.target.value);
                    setFormData({
                      ...formData,
                      country: e.target.value,
                      stateProvince: c?.states[0]?.name || '',
                      districtCity: c?.states[0]?.cities[0] || '',
                    });
                  }}
                  className="w-full p-2 rounded-lg bg-[#0c0d10] border border-white/10 text-white text-xs"
                >
                  {LOCATION_DATA.map((c) => (
                    <option key={c.name} value={c.name} className="bg-[#121418] text-white">{c.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[10px] text-zinc-400 mb-1">State / Province</label>
                <select
                  value={formData.stateProvince}
                  onChange={(e) => {
                    const s = currentCountry.states.find((x) => x.name === e.target.value);
                    setFormData({
                      ...formData,
                      stateProvince: e.target.value,
                      districtCity: s?.cities[0] || '',
                    });
                  }}
                  className="w-full p-2 rounded-lg bg-[#0c0d10] border border-white/10 text-white text-xs"
                >
                  {currentCountry.states.map((s) => (
                    <option key={s.name} value={s.name} className="bg-[#121418] text-white">{s.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[10px] text-zinc-400 mb-1">District / City</label>
                <select
                  value={formData.districtCity}
                  onChange={(e) => setFormData({ ...formData, districtCity: e.target.value })}
                  className="w-full p-2 rounded-lg bg-[#0c0d10] border border-white/10 text-white text-xs"
                >
                  {cities.map((city) => (
                    <option key={city} value={city} className="bg-[#121418] text-white">{city}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Requirements */}
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                Project Goals & Requirements <span className="text-rose-400">*</span>
              </label>
              <textarea
                rows={3}
                value={formData.projectRequirements}
                onChange={(e) => setFormData({ ...formData, projectRequirements: e.target.value })}
                placeholder="Tell me what you want to build, what your business does, the pages or features you need, your preferred timeline, and any reference websites you like."
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#0c0d10] border border-white/10 text-white placeholder:text-zinc-600 text-xs focus:outline-none focus:border-[#7C5CFF] resize-none"
              />
              {errors.projectRequirements && (
                <p className="text-[10px] text-rose-400 mt-1">{errors.projectRequirements}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#7C5CFF] hover:bg-[#6846f6] shadow-lg shadow-[#7C5CFF]/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 transition-all"
            >
              {isSubmitting ? (
                <span>Submitting...</span>
              ) : (
                <>
                  <span>Send Project Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
