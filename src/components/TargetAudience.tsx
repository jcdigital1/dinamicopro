import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Radio,
  Palette,
  Gift,
  Boxes,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { CHECKOUT_URL } from '../types.ts';

export const TargetAudience: React.FC = () => {
  const audiences = [
    {
      id: 'nfc',
      icon: Radio,
      title: 'Fabricantes de Plaquinhas NFC',
      tag: 'PRODUÇÃO TÉCNICA',
      description: 'Ideal para quem já produz ou quer produzir plaquinhas em acrílico, metal ou MDF com tecnologia de aproximação NFC e leitura QR Code.',
      benefits: [
        'Padronização rápida de artes em PDF A4',
        'Geração em lote para grandes pedidos',
        'Compatibilidade total com chips NFC'
      ],
      color: 'from-[#8B3DFF] to-[#6366F1]',
    },
    {
      id: 'custom',
      icon: Palette,
      title: 'Empreendedores de Personalizados',
      tag: 'PRODUTORES INDEPENDENTES',
      description: 'Perfeito para quem trabalha com sublimação, corte a laser, papelaria criativa e personalização sob demanda para estabelecimentos comerciais.',
      benefits: [
        'Economia de horas de edição manual',
        'Templates prontos para nichos populares',
        'Processo simples sem necessidade de design avançado'
      ],
      color: 'from-[#EC4899] to-[#8B3DFF]',
    },
    {
      id: 'visual',
      icon: Gift,
      title: 'Comunicação Visual e Brindes',
      tag: 'GRÁFICAS & AGÊNCIAS',
      description: 'Desenvolvido para gráficas rápidas, oficinas de sinalização e estúdios de brindes que atendem dezenas de comércios por semana.',
      benefits: [
        'Organização de lotes com numeração automática',
        'Entregas mais ágeis para clientes corporativos',
        'Diferencial de QR Code dinâmico editável'
      ],
      color: 'from-[#38BDF8] to-[#8B3DFF]',
    },
    {
      id: 'resellers',
      icon: Boxes,
      title: 'Revendedores e Distribuidores',
      tag: 'ORGANIZAÇÃO & ESCALA',
      description: 'Para quem comercializa produtos prontos e precisa gerenciar a produção com agilidade, sem gargalos manuais e sem retrabalho.',
      benefits: [
        'Agilidade para atender pedidos de 10 a 100 plaquinhas',
        'Garantia de que os links podem ser atualizados depois',
        'Fluxo de trabalho limpo e centralizado'
      ],
      color: 'from-[#A855F7] to-[#10B981]',
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#06040D] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-80 bg-[#8B3DFF]/10 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B3DFF]/15 border border-[#8B3DFF]/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            PÚBLICO-ALVO
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight font-display"
          >
            PARA QUEM É O DINÂMICO PRO?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-300"
          >
            A solução foi desenhada sob medida para quem precisa de produtividade, organização e tecnologia prática no dia a dia da confecção.
          </motion.p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {audiences.map((aud, index) => {
            const IconComp = aud.icon;
            return (
              <motion.div
                key={aud.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="relative rounded-3xl glass-card p-6 sm:p-8 border border-[#8B3DFF]/20 hover:border-[#8B3DFF]/50 transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${aud.color} p-0.5 shadow-[0_0_20px_rgba(139,61,255,0.4)]`}>
                      <div className="w-full h-full bg-[#0D091F] rounded-[14px] flex items-center justify-center">
                        <IconComp className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-purple-300">
                      {aud.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-display">
                    {aud.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {aud.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-white/5">
                    {aud.benefits.map((b, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-[#A855F7] shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 flex items-center justify-between text-xs text-purple-300/80">
                  <span>Pronto para acelerar sua produção</span>
                  <ArrowRight className="w-4 h-4 text-[#8B3DFF]" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
