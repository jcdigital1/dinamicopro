import React, { useState, useEffect } from 'react';
import { CHECKOUT_URL } from '../types.ts';
import { ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#06040D]/85 backdrop-blur-xl border-b border-[#8B3DFF]/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo & 3D QR Code Icon */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B3DFF] rounded-lg">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#8B3DFF] via-[#7022EA] to-[#3B0764] p-[1.5px] shadow-[0_0_20px_rgba(139,61,255,0.5)] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-[#0B0817] rounded-[10px] flex items-center justify-center relative overflow-hidden">
              {/* Subtle glass reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
              
              {/* 3D Stylized QR Symbol */}
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-[#C084FC] transition-transform duration-300 group-hover:rotate-6"
                fill="currentColor"
              >
                {/* Top Left Finder */}
                <rect x="2" y="2" width="8" height="8" rx="2" fill="#8B3DFF" />
                <rect x="4" y="4" width="4" height="4" rx="1" fill="#0B0817" />
                <rect x="5" y="5" width="2" height="2" rx="0.5" fill="#E9D5FF" />
                
                {/* Top Right Finder */}
                <rect x="14" y="2" width="8" height="8" rx="2" fill="#A855F7" />
                <rect x="16" y="4" width="4" height="4" rx="1" fill="#0B0817" />
                <rect x="17" y="5" width="2" height="2" rx="0.5" fill="#E9D5FF" />
                
                {/* Bottom Left Finder */}
                <rect x="2" y="14" width="8" height="8" rx="2" fill="#A855F7" />
                <rect x="4" y="16" width="4" height="4" rx="1" fill="#0B0817" />
                <rect x="5" y="17" width="2" height="2" rx="0.5" fill="#E9D5FF" />
                
                {/* Dynamic Data Points */}
                <rect x="14" y="14" width="3" height="3" rx="1" fill="#C084FC" />
                <rect x="19" y="14" width="3" height="3" rx="1" fill="#8B3DFF" />
                <rect x="14" y="19" width="3" height="3" rx="1" fill="#8B3DFF" />
                <rect x="19" y="19" width="3" height="3" rx="1" fill="#F3E8FF" />
              </svg>
            </div>
          </div>
          
          <div className="flex flex-col">
            <span className="font-display font-extrabold tracking-wider text-white text-lg sm:text-xl flex items-center gap-1.5">
              DINÂMICO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C084FC] to-[#8B3DFF]">PRO</span>
            </span>
            <span className="text-[10px] tracking-widest uppercase text-slate-400 font-medium -mt-1 hidden sm:block">
              QR Code Inteligente
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#recursos"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200"
          >
            Recursos
          </a>
          <a
            href="#demonstracao"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200"
          >
            Demonstração
          </a>
          <a
            href="#modelos"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200"
          >
            Modelos
          </a>
          <a
            href="#como-funciona"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200"
          >
            Como Funciona
          </a>
          <a
            href="#faq"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200"
          >
            Dúvidas
          </a>
        </nav>

        {/* Right CTA Button */}
        <div className="flex items-center gap-3">
          <a
            href={CHECKOUT_URL}
            className="relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white overflow-hidden transition-all duration-300 transform active:scale-95 shadow-[0_0_20px_rgba(139,61,255,0.4)] hover:shadow-[0_0_30px_rgba(139,61,255,0.7)]"
          >
            {/* Ambient Animated Border Gradient */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#8B3DFF] via-[#B266FF] to-[#8B3DFF] rounded-xl p-[1px]">
              <span className="w-full h-full block bg-[#100926] rounded-[11px] group-hover:bg-opacity-80 transition-all duration-300" />
            </span>
            
            {/* Shimmer sweep */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />

            <span className="relative z-10 font-bold tracking-wide flex items-center gap-1.5 text-white">
              <Sparkles className="w-3.5 h-3.5 text-[#C084FC] animate-pulse" />
              QUERO COMEÇAR
              <ArrowUpRight className="w-4 h-4 text-purple-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0716]/95 backdrop-blur-2xl border-b border-[#8B3DFF]/20 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <a
            href="#recursos"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-white py-2 text-base font-medium border-b border-white/5"
          >
            Recursos
          </a>
          <a
            href="#demonstracao"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-white py-2 text-base font-medium border-b border-white/5"
          >
            Demonstração
          </a>
          <a
            href="#modelos"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-white py-2 text-base font-medium border-b border-white/5"
          >
            Modelos
          </a>
          <a
            href="#como-funciona"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-white py-2 text-base font-medium border-b border-white/5"
          >
            Como Funciona
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-white py-2 text-base font-medium border-b border-white/5"
          >
            Dúvidas Frequentes
          </a>
          <div className="pt-2">
            <a
              href={CHECKOUT_URL}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#8B3DFF] to-[#6D28D9] text-white font-bold text-sm shadow-[0_0_20px_rgba(139,61,255,0.4)]"
            >
              QUERO COMEÇAR AGORA
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
