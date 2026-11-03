import React, { useState, useEffect } from 'react';
import { CHECKOUT_URL } from '../types.ts';
import { Zap, ArrowRight } from 'lucide-react';

export const FloatingMobileCta: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 400px, hide near footer
      const scrollPos = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(scrollPos > 400 && scrollPos < docHeight - 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 inset-x-4 z-40 sm:hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
      <a
        href={CHECKOUT_URL}
        className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-[#8B3DFF] via-[#A855F7] to-[#7C3AED] text-white font-extrabold text-sm flex items-center justify-between shadow-[0_0_30px_rgba(139,61,255,0.7)] border border-white/20 active:scale-95 transition-transform"
      >
        <span className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-yellow-300 fill-yellow-300 animate-bounce" />
          <span>QUERO MEU DINÂMICO PRO</span>
        </span>
        <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
          <ArrowRight className="w-4 h-4 text-white" />
        </div>
      </a>
    </div>
  );
};
