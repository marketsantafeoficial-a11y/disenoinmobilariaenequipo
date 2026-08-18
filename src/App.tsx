import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { StatsBar } from './components/StatsBar';
import { PainPointsSection } from './components/PainPointsSection';
import { KeyFeaturesSection } from './components/KeyFeaturesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { InteractiveSimulators } from './components/InteractiveSimulators';
import { InteractiveExplorer } from './components/InteractiveExplorer';
import { ComparisonTable } from './components/ComparisonTable';
import { PricingSection } from './components/PricingSection';
import { CtaBanner } from './components/CtaBanner';
import { ContactFormSection } from './components/ContactFormSection';
import { Footer } from './components/Footer';
import { TrialModal } from './components/TrialModal';
import { DemoTourModal } from './components/DemoTourModal';
import { WhatsAppPreviewModal } from './components/WhatsAppPreviewModal';
import { MobileBottomNav } from './components/MobileBottomNav';

export default function App() {
  const [isTrialOpen, setIsTrialOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [whatsAppSearchId, setWhatsAppSearchId] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'matching', 'radar', 'ronda', 'funcionalidades', 'precios', 'contacto'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white flex flex-col">
      
      {/* Header & Navbar */}
      <Header 
        onOpenTrial={() => setIsTrialOpen(true)}
        onOpenDemo={() => setIsDemoOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection 
          onOpenTrial={() => setIsTrialOpen(true)}
          onOpenDemo={() => setIsDemoOpen(true)}
          onOpenWhatsAppPreview={(id) => setWhatsAppSearchId(id)}
        />

        {/* 2. Stats Bar & Badges */}
        <StatsBar />

        {/* 3. Pain Points & Solution Connector */}
        <PainPointsSection />

        {/* 4. Core Modules & Key Features */}
        <KeyFeaturesSection 
          onOpenTrial={() => setIsTrialOpen(true)}
          onOpenWhatsAppPreview={(id) => setWhatsAppSearchId(id)}
        />

        {/* 5. Step-by-Step Workflow */}
        <HowItWorksSection 
          onOpenTrial={() => setIsTrialOpen(true)}
        />

        {/* 6. Live Interactive Simulators (Matching, Radar, Ronda & Chat) */}
        <InteractiveSimulators 
          onOpenTrial={() => setIsTrialOpen(true)}
          onOpenWhatsAppPreview={(id) => setWhatsAppSearchId(id)}
        />

        {/* 7. Interface Explorer & High-Res Screenshots Showcase */}
        <InteractiveExplorer 
          onOpenTrial={() => setIsTrialOpen(true)}
        />

        {/* 8. Comprehensive Comparison Table */}
        <ComparisonTable 
          onOpenTrial={() => setIsTrialOpen(true)}
        />

        {/* 9. Transparent Pricing Section */}
        <PricingSection 
          onOpenTrial={() => setIsTrialOpen(true)}
        />

        {/* 10. High-Conversion CTA Banner */}
        <CtaBanner 
          onOpenTrial={() => setIsTrialOpen(true)}
        />

        {/* 11. Contact & VIP Demo Request Form */}
        <ContactFormSection />
      </main>

      {/* Footer */}
      <Footer 
        onOpenTrial={() => setIsTrialOpen(true)}
      />

      {/* Mobile Sticky Navigation */}
      <MobileBottomNav 
        onOpenTrial={() => setIsTrialOpen(true)}
        activeSection={activeSection}
      />

      {/* Modals & Dialogs */}
      <TrialModal 
        isOpen={isTrialOpen}
        onClose={() => setIsTrialOpen(false)}
      />

      <DemoTourModal 
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        onOpenTrial={() => {
          setIsDemoOpen(false);
          setIsTrialOpen(true);
        }}
      />

      <WhatsAppPreviewModal 
        searchId={whatsAppSearchId}
        onClose={() => setWhatsAppSearchId(null)}
      />

    </div>
  );
}
