import React, { useState } from 'react';
import { PhotoProvider } from './context/PhotoContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectInquiryModal } from './components/ProjectInquiryModal';
import { LegalModal } from './components/LegalModal';
import { NotFoundView } from './components/NotFoundView';
import { ProjectItem } from './types/portfolio';

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ProjectItem | null>(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryInitialData, setInquiryInitialData] = useState<{ industry?: string; websiteType?: string }>({});
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [show404Preview, setShow404Preview] = useState(false);

  const handleOpenInquiry = (initialData?: { industry?: string; websiteType?: string }) => {
    if (initialData) {
      setInquiryInitialData(initialData);
    }
    const el = document.getElementById('inquiry-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setInquiryModalOpen(true);
    }
  };

  const handleExploreWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  if (show404Preview) {
    return <NotFoundView onBackToHome={() => setShow404Preview(false)} />;
  }

  return (
    <PhotoProvider>
      <div className="min-h-screen bg-[#08090B] text-[#F5F5F5] selection:bg-[#7C5CFF]/30 selection:text-white font-sans">
        {/* Sticky Minimal Liquid Glass Navbar */}
        <Navbar onOpenInquiry={handleOpenInquiry} />

        <main>
          {/* 1. Hero Section (Short Headline + Real Workspace Photo) */}
          <Hero
            onOpenInquiry={handleOpenInquiry}
            onExploreWork={handleExploreWork}
          />

          {/* 2. Selected Work (Compact, scannable cards) */}
          <SelectedWork
            onOpenCaseStudy={(proj) => setSelectedCaseStudy(proj)}
          />

          {/* 3. Services (Compact cards + Progressive disclosure detail modal) */}
          <ServicesSection onOpenInquiry={handleOpenInquiry} />

          {/* 4. Process — What Happens After You Confirm (5 client roadmap stages) */}
          <ProcessSection />

          {/* 5. About M.ASIF (Sticky workspace photograph + verified specs) */}
          <AboutSection onOpenInquiry={() => handleOpenInquiry()} />

          {/* 6. FAQ */}
          <FaqSection onOpenInquiry={() => handleOpenInquiry()} />

          {/* 7. Direct Project Inquiry Form (Package selection, Location, Requirements) */}
          <ContactSection initialData={inquiryInitialData} />
        </main>

        {/* Footer */}
        <Footer
          onOpenPrivacy={() => setLegalModalType('privacy')}
          onOpenTerms={() => setLegalModalType('terms')}
        />

        {/* Modals & Dialogs */}
        <CaseStudyModal
          project={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
          onOpenInquiry={handleOpenInquiry}
        />

        <ProjectInquiryModal
          isOpen={inquiryModalOpen}
          onClose={() => setInquiryModalOpen(false)}
          initialData={inquiryInitialData}
        />

        <LegalModal
          type={legalModalType}
          onClose={() => setLegalModalType(null)}
        />
      </div>
    </PhotoProvider>
  );
}
