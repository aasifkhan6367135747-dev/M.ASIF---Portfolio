import React, { useEffect } from 'react';
import { X, Shield } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (type) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#121418] border border-white/15 rounded-2xl shadow-2xl p-6 sm:p-8 text-left max-h-[85vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#7C5CFF]" />
            <h3 className="text-xl font-bold text-white font-display">
              {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
          {isPrivacy ? (
            <>
              <p>
                <strong>Effective Date:</strong> January 2026
              </p>
              <p>
                This Privacy Policy outlines how M.ASIF ("I", "me", or "my") handles personal information gathered through project inquiry forms, direct email correspondence, and related freelance web design services.
              </p>
              <h4 className="text-white font-semibold pt-2 text-sm">1. Information Collected</h4>
              <p>
                When submitting a project inquiry, you may be asked to provide your name, business email address, company name, and project scope requirements. This information is solely used to communicate with you and prepare project proposals.
              </p>
              <h4 className="text-white font-semibold pt-2 text-sm">2. Confidentiality & Data Security</h4>
              <p>
                Your intellectual property, project briefs, and business details are treated with strict professional confidentiality. I never sell, rent, or trade your contact information to third parties or marketing networks.
              </p>
              <h4 className="text-white font-semibold pt-2 text-sm">3. Inquiries & Contact</h4>
              <p>
                If you have any questions regarding your data or wish to have your details updated or removed from records, please contact <span className="text-white font-mono">aasifkhan6367135747@gmail.com</span>.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>Effective Date:</strong> January 2026
              </p>
              <p>
                These Terms and Conditions govern the freelance web design and development consulting services provided by M.ASIF to business clients.
              </p>
              <h4 className="text-white font-semibold pt-2 text-sm">1. Project Proposals & Scope</h4>
              <p>
                Every client engagement begins with an agreed written scope of work specifying deliverables, milestones, and timelines. Any additional features outside the initial agreement will be quoted separately before implementation.
              </p>
              <h4 className="text-white font-semibold pt-2 text-sm">2. Intellectual Property & Code Ownership</h4>
              <p>
                Upon final invoice settlement, full intellectual property and ownership rights of the custom website design, styling, and uploaded client assets are permanently transferred to the client.
              </p>
              <h4 className="text-white font-semibold pt-2 text-sm">3. Support & Warranty</h4>
              <p>
                All launched websites include a 30-day post-launch warranty covering any technical bugs or display errors directly related to the delivered scope of work.
              </p>
            </>
          )}
        </div>

        <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/20 transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
