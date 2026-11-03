import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Lock, Check } from 'lucide-react';
import { CHECKOUT_URL } from '../types.ts';

export const FinalCta: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 bg-[#06040D] overflow-hidden">
      {/* Massive Volumetric Purple Glowing Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[500px] bg-gradient-to-tr from-[#8B3DFF]/30 via-[#A855F7]/25 to-[#6D28D9]/20 blur-[150px] pointer-events-none -z-10" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Glow Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8B3DFF]/20 border border-[#8B3DFF]/40 text-purple-200 text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 shadow-[0_0_25px_rgba(139,61,255,0.4)]"
        >
          <Sparkles className="w-4 h-4 text-[#C084FC]" />
          ACESSO AO DINÂMICO PRO
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight font-display max-w-4xl mx-auto"
        >
          SUA PRODUÇÃO MERECE{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D8B4FE] via-[#A855F7] to-[#8B3DFF] drop-shadow-[0_0_35px_rgba(139,61,255,0.7)]">
            EVOLUIR.
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
        >
          Tenha em mãos uma ferramenta criada para facilitar a produção de plaquinhas com QR Code dinâmico.
        </motion.p>

        {/* Highlights summary pill box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mt-10 mb-8 inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 p-4 rounded-2xl bg-[#120B26]/80 border border-[#8B3DFF]/30 text-xs sm:text-sm text-purple-200"
        >
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#C084FC]" />
            <span>Geração de 10 a 100 plaquinhas por lote</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#C084FC]" />
            <span>Links dinâmicos alteráveis a qualquer momento</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#C084FC]" />
            <span>Exportação imediata em PDF A4 pronto</span>
          </div>
        </motion.div>

        {/* Main CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center"
        >
          <a
            href={CHECKOUT_URL}
            className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-14 py-5 sm:py-6 rounded-2xl font-black text-lg sm:text-2xl text-white overflow-hidden transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 shadow-[0_0_50px_rgba(139,61,255,0.7)] hover:shadow-[0_0_80px_rgba(139,61,255,1)] cursor-pointer"
          >
            {/* Animated Gradient Background */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#8B3DFF] via-[#A855F7] to-[#7C3AED] transition-all duration-500 group-hover:scale-105" />

            {/* Glowing inner border */}
            <span className="absolute inset-[2px] rounded-[14px] bg-gradient-to-b from-white/20 to-transparent pointer-events-none opacity-50 group-hover:opacity-80 transition-opacity" />

            {/* Shimmer sweep */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

            <span className="relative z-10 flex items-center gap-3 tracking-wide drop-shadow-md">
              <Zap className="w-6 h-6 text-yellow-300 fill-yellow-300 animate-bounce" />
              SIM, QUERO ACESSAR O DINÂMICO PRO
              <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1.5 transition-transform" />
            </span>
          </a>

          {/* Secure purchase assurances */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-purple-400" />
              Ambiente 100% Criptografado & Seguro
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-yellow-400" />
              Liberação Imediata via E-mail
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Processamento Oficial Pepper
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
