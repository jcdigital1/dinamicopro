import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Link2,
  RefreshCw,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Shield,
  Smartphone,
  Check
} from 'lucide-react';
import { CHECKOUT_URL } from '../types.ts';

export const DynamicQrHighlight: React.FC = () => {
  // Destination states that cycle or can be switched
  const destinations = [
    {
      id: 'promo',
      label: '1º Mês: Campanha de Lançamento',
      url: 'https://instagram.com/promocao-especial',
      description: 'Leva direto para o carrossel promocional do mês.',
      badge: 'Instagram Promo',
      badgeColor: 'bg-pink-500/20 text-pink-300 border-pink-500/40',
      activeDate: 'Em Janeiro',
    },
    {
      id: 'whatsapp',
      label: '2º Mês: Novo WhatsApp do Atendimento',
      url: 'https://wa.me/5511999998888?text=QueroFazerPedido',
      description: 'O número mudou, mas a plaquinha física continuou funcionando 100%!',
      badge: 'WhatsApp Direto',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      activeDate: 'Em Março (Número Atualizado)',
    },
    {
      id: 'cardapio',
      label: '3º Mês: Cardápio Digital / Link de Avaliação',
      url: 'https://g.page/r/avaliar-negocio-5estrelas',
      description: 'Agora a mesma plaquinha coleta avaliações no Google Meu Negócio.',
      badge: 'Google Reviews',
      badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
      activeDate: 'Em Junho (Novo Objetivo)',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isUpdating, setIsUpdating] = useState(false);
  const [scannerActive, setScannerActive] = useState(true);

  // Auto cycle to show the magic
  useEffect(() => {
    const timer = setInterval(() => {
      setIsUpdating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % destinations.length);
        setIsUpdating(false);
      }, 500);
    }, 4500);

    return () => clearInterval(timer);
  }, [destinations.length]);

  const activeDestination = destinations[currentIndex];

  const handleManualSelect = (index: number) => {
    if (index === currentIndex) return;
    setIsUpdating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsUpdating(false);
    }, 350);
  };

  return (
    <section className="relative py-24 sm:py-36 bg-[#05030B] overflow-hidden border-t border-[#8B3DFF]/20">
      {/* Volumetric Purple Glow & Center Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-[#8B3DFF]/20 via-[#6D28D9]/15 to-[#3B0764]/20 blur-[160px] pointer-events-none -z-10" />

      {/* Floating Particle Stars */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8B3DFF]/20 border border-[#8B3DFF]/50 text-purple-200 text-xs font-bold uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(139,61,255,0.4)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C084FC]" />
            O MAIOR DIFERENCIAL COMPETITIVO
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight font-display"
          >
            IMPRIMIU? VOCÊ AINDA PODE{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C084FC] via-[#A855F7] to-[#8B3DFF] underline decoration-[#8B3DFF]/50">
              ALTERAR O LINK.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto"
          >
            Com o QR Code dinâmico, você pode modificar o destino do código posteriormente, sem precisar substituir a arte impressa.
          </motion.p>
        </div>

        {/* Cinematographic Demonstration Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Left Column: 3D Plaque that REMAINS IDENTICAL (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group">
              {/* Soft purple halo behind the plaque */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#8B3DFF]/40 to-[#C084FC]/20 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition duration-700" />

              {/* 3D Plaque Physical Render Container */}
              <div className="relative w-64 sm:w-72 h-96 rounded-2xl bg-gradient-to-b from-[#180F33] via-[#0E091E] to-[#070410] border-2 border-[#8B3DFF]/40 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.9)] flex flex-col justify-between overflow-hidden">
                {/* Gloss streak */}
                <div className="absolute -top-32 -left-32 w-80 h-80 bg-gradient-to-br from-white/20 via-transparent to-transparent rotate-45 pointer-events-none" />

                {/* Laser scan line simulating scanning */}
                <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#C084FC] to-transparent shadow-[0_0_15px_#C084FC] animate-bounce pointer-events-none opacity-80" />

                {/* Plaque Top */}
                <div className="flex items-center justify-between text-xs text-white">
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/10 text-purple-200">
                    PLAQUINHA FÍSICA IMPRESSA
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                </div>

                {/* Static QR Code in Center (NEVER CHANGES) */}
                <div className="my-auto flex flex-col items-center">
                  <div className="p-4 bg-white rounded-2xl shadow-2xl relative border-2 border-white">
                    {/* Realistic Crisp SVG QR Code */}
                    <svg className="w-32 h-32 sm:w-36 sm:h-36 text-black" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm10 0h2v2h-2v-2zm4 0h4v2h-4v-2zm-4 4h2v4h-2v-4zm4 2h4v2h-4v-2zm2-4h2v2h-2v-2zm-6 2h2v2h-2v-2z" />
                    </svg>

                    {/* Central Dinâmico Pro Emblem */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-lg bg-[#8B3DFF] flex items-center justify-center shadow-lg border-2 border-white">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 px-3 py-1 rounded-full bg-black/60 border border-white/10 text-[10px] text-purple-200 font-mono">
                    ID Fixo: <span className="text-white font-bold">#DP-8842</span> (Arte Intacta)
                  </div>
                </div>

                {/* Plaque Bottom Status */}
                <div className="text-center border-t border-white/10 pt-2 text-[10px] text-slate-400">
                  <span className="text-emerald-400 font-bold">100% Imutável na impressão</span>
                  <p className="text-[9px] text-slate-500">Nunca precisa jogar a placa fora</p>
                </div>
              </div>

              {/* Physical Acrylic Stand Base */}
              <div className="w-48 h-4 mx-auto rounded-b-xl bg-[#20153D] border border-white/10 shadow-xl" />
            </div>

            <div className="mt-4 text-center">
              <span className="text-xs font-mono text-purple-300 bg-purple-950/60 px-3 py-1 rounded-full border border-purple-500/30">
                A placa física impressa NUNCA é trocada
              </span>
            </div>
          </div>

          {/* Right Column: Live Link Switch Demonstration (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl glass-card border border-[#8B3DFF]/30 shadow-2xl relative">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-[#8B3DFF]/20 text-[#C084FC]">
                    <RefreshCw className={`w-5 h-5 ${isUpdating ? 'animate-spin' : ''}`} />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-purple-300">
                      PAINEL NA NUVEM DINÂMICO PRO
                    </span>
                    <h4 className="text-white font-bold text-lg">
                      Destino do Link em Tempo Real
                    </h4>
                  </div>
                </div>

                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  Redirecionamento Instantâneo
                </span>
              </div>

              {/* Simulated Live URL Field */}
              <div className="p-4 rounded-2xl bg-[#090614] border border-[#8B3DFF]/40 relative overflow-hidden my-4">
                <div className="text-[11px] font-mono text-slate-400 mb-1 flex items-center justify-between">
                  <span>URL DE DESTINO ATUAL:</span>
                  <span className="text-purple-300">{activeDestination.activeDate}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Link2 className="w-5 h-5 text-[#8B3DFF] shrink-0" />
                  <div className="font-mono text-xs sm:text-sm text-purple-100 font-semibold truncate bg-black/40 px-3 py-2 rounded-xl border border-white/5 w-full">
                    {activeDestination.url}
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${activeDestination.badgeColor}`}>
                    {activeDestination.badge}
                  </span>
                  <span className="text-xs text-slate-400">
                    {activeDestination.description}
                  </span>
                </div>
              </div>

              {/* Manual Destination Switch Buttons */}
              <div className="space-y-2 mt-5">
                <div className="text-xs font-semibold text-slate-300 mb-2">
                  Simule uma alteração clicando em qualquer cenário abaixo:
                </div>
                {destinations.map((dest, idx) => {
                  const isCurrent = currentIndex === idx;
                  return (
                    <button
                      key={dest.id}
                      onClick={() => handleManualSelect(idx)}
                      className={`w-full p-3 rounded-xl text-left text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                        isCurrent
                          ? 'bg-[#1D1238] border border-[#8B3DFF] text-white shadow-[0_0_15px_rgba(139,61,255,0.4)]'
                          : 'bg-white/[0.02] border border-white/5 text-slate-400 hover:bg-white/[0.05] hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={`w-2 h-2 rounded-full ${isCurrent ? 'bg-[#8B3DFF]' : 'bg-slate-600'}`} />
                        <span>{dest.label}</span>
                      </div>
                      {isCurrent ? (
                        <span className="flex items-center gap-1 text-emerald-400 text-[11px]">
                          <Check className="w-3.5 h-3.5" />
                          Ativo Agora
                        </span>
                      ) : (
                        <span className="text-slate-500 text-[11px]">Clique p/ mudar</span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Benefits list */}
              <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Custo zero de reimpressão</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Atualização instantânea global</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Clientes 100% satisfeitos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Mais valor percebido no produto</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cinematic Tagline Callout */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <div className="p-6 rounded-3xl bg-gradient-to-r from-[#170E33] via-[#24134E] to-[#170E33] border border-[#8B3DFF]/40 shadow-[0_0_40px_rgba(139,61,255,0.3)]">
            <h3 className="text-xl sm:text-3xl font-black text-white font-display tracking-wider">
              “O MESMO QR CODE. UM NOVO DESTINO.”
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-purple-200">
              Essa é a segurança e versatilidade que você entrega para cada cliente ao produzir com Dinâmico Pro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
