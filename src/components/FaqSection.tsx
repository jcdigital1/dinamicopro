import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { CHECKOUT_URL } from '../types.ts';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const faqs: FaqItem[] = [
    {
      id: 1,
      question: 'O que é o Dinâmico Pro?',
      answer:
        'O Dinâmico Pro é uma plataforma criada para automatizar a produção de plaquinhas com QR Code dinâmico. Com ele, você escolhe um modelo, gera suas plaquinhas em lote, personaliza os destinos e exporta tudo em PDF pronto para impressão.',
    },
    {
      id: 2,
      question: 'Posso gerar várias plaquinhas de uma vez?',
      answer:
        'Sim! O sistema possui a função de geração em lote, permitindo gerar 10, 30, 50 ou até 100 plaquinhas de uma só vez, com numeração sequencial e códigos organizados automaticamente.',
    },
    {
      id: 3,
      question: 'Posso alterar o link do QR Code depois?',
      answer:
        'Sim, essa é a principal vantagem do QR Code dinâmico. Você pode atualizar o link de destino no painel a qualquer momento, sem precisar imprimir uma nova plaquinha e sem substituir a arte física já entregue ao cliente.',
    },
    {
      id: 4,
      question: 'O sistema já possui modelos?',
      answer:
        'Sim, o Dinâmico Pro conta com modelos prontos para diferentes aplicações comerciais, como Avaliações no Google, Instagram, WhatsApp, Wi-Fi e Pix, prontos para você personalizar.',
    },
    {
      id: 5,
      question: 'Posso baixar as artes em PDF?',
      answer:
        'Sim. Você pode baixar suas artes organizadas diretamente em arquivo PDF no formato folha A4 com 4 plaquinhas por página, com diagramação ideal para impressão e corte.',
    },
    {
      id: 6,
      question: 'Preciso saber programar para usar?',
      answer:
        'Não, de forma alguma. A plataforma é 100% visual, simples e intuitiva. Todo o processo é feito em 4 passos guiados (escolha o modelo, defina a quantidade, configure os links e baixe o PDF).',
    },
  ];

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-[#06040D] overflow-hidden border-t border-white/5">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 bg-[#8B3DFF]/10 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B3DFF]/15 border border-[#8B3DFF]/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            TIRE SUAS DÚVIDAS
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight font-display">
            PERGUNTAS FREQUENTES
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Respostas diretas e transparentes sobre o funcionamento do Dinâmico Pro.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-300 overflow-hidden border ${
                  isOpen
                    ? 'bg-[#120B24] border-[#8B3DFF]/50 shadow-[0_10px_30px_rgba(139,61,255,0.2)]'
                    : 'bg-[#0B0818]/60 border-white/5 hover:border-white/15'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B3DFF]"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-base sm:text-lg text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#8B3DFF] text-white rotate-180 shadow-[0_0_15px_rgba(139,61,255,0.5)]'
                        : 'bg-white/5 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Small reassurance box */}
        <div className="mt-12 text-center p-6 rounded-2xl glass-panel border border-[#8B3DFF]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="p-2.5 rounded-xl bg-[#8B3DFF]/20 text-[#C084FC]">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">Pronto para começar?</div>
              <div className="text-xs text-slate-400">Garanta seu acesso e comece a gerar hoje mesmo.</div>
            </div>
          </div>

          <a
            href={CHECKOUT_URL}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#8B3DFF] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#6D28D9] text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(139,61,255,0.4)] transition-all cursor-pointer"
          >
            Acessar Dinâmico Pro
          </a>
        </div>
      </div>
    </section>
  );
};
