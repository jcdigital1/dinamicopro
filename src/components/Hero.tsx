import React from 'react';
import { CHECKOUT_URL } from '../types.ts';
import { VimeoPlayer } from './VimeoPlayer.tsx';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Download, Layers } from 'lucide-react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background radial lighting & grid */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] bg-gradient-to-b from-[#8B3DFF]/20 via-[#6D28D9]/10 to-transparent blur-[120px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      {/* Floating neon ambient orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-[#8B3DFF]/10 blur-[90px] pointer-events-none animate-pulse-slow -z-10" />
      <div className="absolute top-1/3 right-10 w-80 h-80 rounded-full bg-[#A855F7]/10 blur-[100px] pointer-events-none animate-pulse-slow -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Glowing badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#130B29]/90 border border-[#8B3DFF]/40 shadow-[0_0_20px_rgba(139,61,255,0.35)] backdrop-blur-md mb-8"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A855F7] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8B3DFF]" />
          </span>
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-purple-200">
            TECNOLOGIA PARA QUEM PRODUZ E VENDE
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#C084FC]" />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15] max-w-5xl mx-auto font-display"
        >
          CRIE PLAQUINHAS COM{' '}
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#C084FC] via-[#A855F7] to-[#8B3DFF] drop-shadow-[0_0_35px_rgba(139,61,255,0.7)]">
            QR CODE DINÂMICO
            <svg
              className="absolute -bottom-2 left-0 w-full h-3 text-[#8B3DFF] opacity-60"
              viewBox="0 0 100 12"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M0 6 C20 1 40 11 60 4 C80 -3 90 9 100 6"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>{' '}
          EM POUCOS CLIQUES.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed"
        >
          Escolha um modelo, gere suas plaquinhas em lote, personalize os links e baixe tudo em PDF pronto para impressão. Mais praticidade para produzir e vender.
        </motion.p>

        {/* Vimeo Video Component */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <VimeoPlayer />
        </motion.div>

        {/* Big Animated CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 flex flex-col items-center"
        >
          <a
            href={CHECKOUT_URL}
            className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-5 sm:py-6 rounded-2xl font-bold text-lg sm:text-2xl text-white overflow-hidden transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 shadow-[0_0_40px_rgba(139,61,255,0.6)] hover:shadow-[0_0_70px_rgba(139,61,255,0.9)] cursor-pointer"
          >
            {/* Animated Gradient Background */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#8B3DFF] via-[#A855F7] to-[#7C3AED] transition-all duration-500 group-hover:scale-105" />
            
            {/* Volumetric Internal Glow */}
            <span className="absolute inset-[2px] rounded-[14px] bg-gradient-to-b from-white/20 to-transparent pointer-events-none opacity-50 group-hover:opacity-80 transition-opacity" />

            {/* Shimmer sweep */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

            <span className="relative z-10 flex items-center gap-3 tracking-wide drop-shadow-md">
              <Zap className="w-6 h-6 text-yellow-300 fill-yellow-300 animate-bounce" />
              QUERO MEU DINÂMICO PRO
              <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1.5 transition-transform" />
            </span>
          </a>

          {/* Microphrase */}
          <p className="mt-4 text-sm sm:text-base text-purple-300/90 font-medium flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B3DFF]" />
            Comece a transformar sua produção de plaquinhas.
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B3DFF]" />
          </p>

          {/* Key Value Micro-Badges */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl w-full text-left">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
              <div className="p-2 rounded-lg bg-[#8B3DFF]/20 text-[#C084FC]">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-white">Geração em Lote</div>
                <div className="text-[11px] text-slate-400">Até 100 de 1 vez</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
              <div className="p-2 rounded-lg bg-[#8B3DFF]/20 text-[#C084FC]">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-white">Link Editável</div>
                <div className="text-[11px] text-slate-400">Mesmo após impresso</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
              <div className="p-2 rounded-lg bg-[#8B3DFF]/20 text-[#C084FC]">
                <Download className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-white">PDF Pronto A4</div>
                <div className="text-[11px] text-slate-400">4 plaquinhas por folha</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
              <div className="p-2 rounded-lg bg-[#8B3DFF]/20 text-[#C084FC]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-white">100% Online</div>
                <div className="text-[11px] text-slate-400">Sem instalar nada</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
