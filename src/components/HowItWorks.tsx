import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, LayoutTemplate, Sliders, Edit3, Download, ArrowRight } from 'lucide-react';
import { CHECKOUT_URL } from '../types.ts';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'ESCOLHA',
      subtitle: 'Selecione um modelo de plaquinha.',
      detail: 'Escolha o design ideal para o nicho do seu cliente: Google, Instagram, WhatsApp, Wi-Fi ou Pix.',
      icon: LayoutTemplate,
      accent: 'from-[#8B3DFF] to-[#6D28D9]',
    },
    {
      num: '02',
      title: 'DEFINA',
      subtitle: 'Escolha quantas unidades deseja gerar.',
      detail: 'Gere lotes de 10, 30, 50 ou 100 unidades com numeração sequencial automática e organizada.',
      icon: Sliders,
      accent: 'from-[#A855F7] to-[#7C3AED]',
    },
    {
      num: '03',
      title: 'PERSONALIZE',
      subtitle: 'Configure e edite os destinos dos QR Codes.',
      detail: 'Cadastre o link de destino de cada plaquinha. E lembre-se: você poderá alterar esses links a qualquer momento!',
      icon: Edit3,
      accent: 'from-[#C084FC] to-[#8B3DFF]',
    },
    {
      num: '04',
      title: 'BAIXE',
      subtitle: 'Exporte o PDF pronto para imprimir.',
      detail: 'Baixe um arquivo PDF em folha A4 com 4 plaquinhas por página, marcas de corte e máxima qualidade gráfica.',
      icon: Download,
      accent: 'from-[#38BDF8] to-[#8B3DFF]',
    },
  ];

  return (
    <section id="como-funciona" className="relative py-24 sm:py-32 bg-[#06040D] overflow-hidden">
      {/* Background glow lines */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#8B3DFF]/15 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#A855F7]/15 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B3DFF]/15 border border-[#8B3DFF]/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            FLUXO SIMPLES E ÁGIL
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight font-display"
          >
            DO MODELO AO PDF EM 4 PASSOS.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-300"
          >
            Sem softwares pesados, sem fórmulas complicadas e sem perda de tempo. Um processo 100% linear e automático.
          </motion.p>
        </div>

        {/* Steps Grid with Connected Glowing Line */}
        <div className="relative">
          {/* Glowing connecting horizontal bar on Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-0.5 bg-gradient-to-r from-[#8B3DFF]/20 via-[#C084FC]/60 to-[#8B3DFF]/20 -translate-y-12 z-0">
            {/* Animated Light Pulse travelling across */}
            <div className="w-24 h-full bg-white shadow-[0_0_15px_#fff] animate-pulse-slow" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative group rounded-3xl glass-card p-6 sm:p-7 border border-[#8B3DFF]/20 hover:border-[#8B3DFF]/60 transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between"
                >
                  <div>
                    {/* Step Number & Icon Header */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-display font-black text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-br from-purple-300 to-purple-600 opacity-80">
                        {step.num}
                      </span>

                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.accent} p-0.5 shadow-[0_0_20px_rgba(139,61,255,0.4)] group-hover:scale-110 transition-transform duration-300`}>
                        <div className="w-full h-full bg-[#0D091F] rounded-[14px] flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-purple-200" />
                        </div>
                      </div>
                    </div>

                    {/* Step Title */}
                    <div className="mb-3">
                      <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-purple-300">
                        PASSO {step.num}
                      </span>
                      <h3 className="text-xl font-extrabold text-white font-display mt-0.5">
                        {step.title}
                      </h3>
                    </div>

                    {/* Subtitle */}
                    <p className="text-sm font-semibold text-purple-200 leading-snug mb-3">
                      {step.subtitle}
                    </p>

                    {/* Detail text */}
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>

                  {/* Bottom indicator */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-500">
                    <span>Etapa {index + 1} de 4</span>
                    <span className="w-2 h-2 rounded-full bg-[#8B3DFF]" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Action Callout beneath steps */}
        <div className="mt-16 text-center">
          <a
            href={CHECKOUT_URL}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-purple-500/30 hover:border-purple-500/60 text-white font-semibold text-sm transition-all shadow-[0_0_20px_rgba(139,61,255,0.2)]"
          >
            <span>Experimente o fluxo completo no Dinâmico Pro</span>
            <ArrowRight className="w-4 h-4 text-[#C084FC]" />
          </a>
        </div>
      </div>
    </section>
  );
};
