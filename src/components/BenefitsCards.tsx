import React from 'react';
import { motion } from 'motion/react';
import { Layers, RefreshCw, FileText, CheckCircle2, Sparkles } from 'lucide-react';

export const BenefitsCards: React.FC = () => {
  const cards = [
    {
      id: 'batch',
      tag: 'ESCALABILIDADE TOTAL',
      title: 'GERAÇÃO EM LOTE',
      description: 'Gere 10, 30, 50 ou 100 plaquinhas de uma só vez.',
      subtext: 'Basta escolher a quantidade e o sistema gera automaticamente todos os códigos sequenciais e organizados.',
      icon: Layers,
      highlight: '10 a 100 unidades por clique',
      stats: '10x Mais Rápido',
      accentColor: 'from-[#8B3DFF] to-[#6366F1]',
      badgeColor: 'bg-[#8B3DFF]/20 text-[#D8B4FE] border-[#8B3DFF]/40',
      icon3D: (
        <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
          {/* 3D Stack of Cards visual */}
          <div className="absolute inset-0 bg-[#8B3DFF]/20 rounded-2xl blur-xl" />
          
          {/* Card layer 3 */}
          <div className="absolute w-14 h-14 rounded-xl bg-[#2E1065] border border-[#8B3DFF]/40 -translate-y-3 translate-x-3 rotate-6 shadow-md" />
          {/* Card layer 2 */}
          <div className="absolute w-14 h-14 rounded-xl bg-[#4C1D95] border border-[#A855F7]/50 -translate-y-1.5 translate-x-1.5 rotate-3 shadow-lg" />
          {/* Card layer 1 (Top) */}
          <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-[#8B3DFF] to-[#581C87] border border-[#C084FC] flex items-center justify-center shadow-xl">
            <Layers className="w-7 h-7 text-white" />
          </div>
        </div>
      ),
    },
    {
      id: 'dynamic',
      tag: 'TECNOLOGIA INTELIGENTE',
      title: 'QR CODE DINÂMICO',
      description: 'Atualize o destino do QR Code sem precisar imprimir uma nova plaquinha.',
      subtext: 'Seu cliente mudou de número de WhatsApp, trocou o Instagram ou criou uma nova promoção? Mude o link no painel em segundos.',
      icon: RefreshCw,
      highlight: 'Link 100% Flexível',
      stats: 'Sem Reimpressão',
      accentColor: 'from-[#A855F7] to-[#EC4899]',
      badgeColor: 'bg-[#A855F7]/20 text-[#F0ABFC] border-[#A855F7]/40',
      icon3D: (
        <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
          {/* 3D Dynamic Orb & Scan visual */}
          <div className="absolute inset-0 bg-[#A855F7]/25 rounded-full blur-xl" />
          
          <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#1E1138] to-[#3B1768] border border-[#C084FC]/60 flex items-center justify-center shadow-2xl overflow-hidden group-hover:scale-105 transition-transform">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#A855F7]/20 to-transparent animate-pulse" />
            
            {/* Rotating sync arrows with QR center */}
            <RefreshCw className="w-8 h-8 text-[#E9D5FF] animate-spin" style={{ animationDuration: '12s' }} />
            <div className="absolute w-4 h-4 rounded bg-[#8B3DFF] flex items-center justify-center">
              <Sparkles className="w-2.5 h-2.5 text-white" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'pdf',
      tag: 'PRONTO PARA IMPRIMIR',
      title: 'PDF PRONTO',
      description: 'Baixe suas artes organizadas em PDF A4 com 4 plaquinhas por página.',
      subtext: 'Diagramação profissional com linhas de corte perfeitas, sem precisar ajustar tamanho no Corel Draw, Canva ou Photoshop.',
      icon: FileText,
      highlight: 'Formato A4 Otimizado',
      stats: 'Economia de Papel',
      accentColor: 'from-[#6366F1] to-[#8B3DFF]',
      badgeColor: 'bg-[#6366F1]/20 text-[#C7D2FE] border-[#6366F1]/40',
      icon3D: (
        <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
          {/* 3D Sheet & Grid visual */}
          <div className="absolute inset-0 bg-[#6366F1]/20 rounded-2xl blur-xl" />
          
          <div className="relative w-14 h-16 rounded-xl bg-gradient-to-br from-[#1E1B4B] to-[#312E81] border border-[#818CF8]/60 p-2 shadow-2xl flex flex-col justify-between">
            {/* 4 Mini Plaquinhas on A4 Sheet */}
            <div className="grid grid-cols-2 gap-1 w-full h-full">
              <div className="bg-[#8B3DFF]/40 border border-[#A855F7]/40 rounded-sm flex items-center justify-center text-[7px] text-white">#1</div>
              <div className="bg-[#8B3DFF]/40 border border-[#A855F7]/40 rounded-sm flex items-center justify-center text-[7px] text-white">#2</div>
              <div className="bg-[#8B3DFF]/40 border border-[#A855F7]/40 rounded-sm flex items-center justify-center text-[7px] text-white">#3</div>
              <div className="bg-[#8B3DFF]/40 border border-[#A855F7]/40 rounded-sm flex items-center justify-center text-[7px] text-white">#4</div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="recursos" className="relative py-24 sm:py-32 bg-[#06040D] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-[#8B3DFF]/10 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B3DFF]/15 border border-[#8B3DFF]/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            PRODUZA MAIS, COM MENOS TRABALHO
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight font-display"
          >
            CHEGA DE CRIAR UMA PLAQUINHA POR VEZ.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed"
          >
            Com o Dinâmico Pro, você automatiza a criação de plaquinhas, organiza sua produção e economiza tempo.
          </motion.p>
        </div>

        {/* 3D Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="relative group rounded-3xl p-8 glass-card border border-[#8B3DFF]/20 hover:border-[#8B3DFF]/50 transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col justify-between"
            >
              {/* Internal top gradient sheen */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent rounded-3xl pointer-events-none" />

              <div>
                {/* 3D Icon Presentation */}
                {card.icon3D}

                {/* Badge Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${card.badgeColor}`}>
                    {card.tag}
                  </span>
                  <span className="text-[11px] font-mono text-purple-300/80">
                    {card.stats}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3 font-display">
                  {card.title}
                </h3>

                {/* Primary Description */}
                <p className="text-slate-200 font-medium text-base leading-snug mb-3">
                  “{card.description}”
                </p>

                {/* Additional explanatory detail */}
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {card.subtext}
                </p>
              </div>

              {/* Card Footer Feature Highlight */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-medium text-purple-200">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#A855F7]" />
                  {card.highlight}
                </span>
                <span className="text-[11px] text-slate-500">Incluso no Pro</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
