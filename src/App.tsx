/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { BenefitsCards } from './components/BenefitsCards.tsx';
import { SystemMockupDemo } from './components/SystemMockupDemo.tsx';
import { TemplatesCarousel } from './components/TemplatesCarousel.tsx';
import { HowItWorks } from './components/HowItWorks.tsx';
import { DynamicQrHighlight } from './components/DynamicQrHighlight.tsx';
import { TargetAudience } from './components/TargetAudience.tsx';
import { FinalCta } from './components/FinalCta.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingMobileCta } from './components/FloatingMobileCta.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#06040D] text-slate-100 flex flex-col selection:bg-[#8B3DFF]/40 selection:text-white">
      {/* Fixed Sticky Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero / 1ª Dobra */}
        <Hero />

        {/* 2. Produza Mais, Com Menos Trabalho (3 3D Cards) */}
        <BenefitsCards />

        {/* 3. Demonstração Visual do Sistema (Interactive Mockup) */}
        <SystemMockupDemo />

        {/* 4. Modelos Prontos para Personalizar (Carousel) */}
        <TemplatesCarousel />

        {/* 5. Como Funciona (Do Modelo ao PDF em 4 Passos) */}
        <HowItWorks />

        {/* 6. Destaque Principal — QR Dinâmico */}
        <DynamicQrHighlight />

        {/* 7. Para Quem É o Dinâmico Pro? */}
        <TargetAudience />

        {/* 8. Chamada Para Ação (High Conversion) */}
        <FinalCta />

        {/* 9. Perguntas Frequentes (FAQ) */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Action Button */}
      <FloatingMobileCta />
    </div>
  );
}
