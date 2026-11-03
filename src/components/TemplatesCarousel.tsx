import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Wifi,
  Instagram,
  MessageCircle,
  Star,
  QrCode,
  Radio
} from 'lucide-react';

interface TemplateCard {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  badge: string;
  colorScheme: string;
  gradient: string;
  accent: string;
  icon: React.ReactNode;
  specs: string[];
}

export const TemplatesCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const templates: TemplateCard[] = [
    {
      id: 'google',
      category: 'Avaliações Google',
      title: 'Plaquinha Google 5 Estrelas',
      subtitle: 'Conquiste mais avaliações positivas para clientes locais e comércios no Google Meu Negócio.',
      badge: 'MAIS VENDIDO',
      colorScheme: 'from-[#1A237E]/40 to-[#0D47A1]/20',
      gradient: 'from-[#4285F4] to-[#34A853]',
      accent: '#4285F4',
      icon: <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />,
      specs: ['Avaliação direta em 1 toque', 'Compatível com NFC e QR', 'Aumenta relevância no Maps'],
    },
    {
      id: 'instagram',
      category: 'Instagram',
      title: 'Plaquinha Instagram Conecte',
      subtitle: 'Direcione seguidores para o feed, Reels ou catálogo no Instagram instantaneamente no balcão.',
      badge: 'ALTA PROCURA',
      colorScheme: 'from-[#833AB4]/30 via-[#FD1D1D]/20 to-[#FCB045]/20',
      gradient: 'from-[#833AB4] via-[#FD1D1D] to-[#FCB045]',
      accent: '#E1306C',
      icon: <Instagram className="w-6 h-6 text-pink-400" />,
      specs: ['Abre o app do Instagram direto', 'Sem digitar @ do perfil', 'Ideal para bares e lojas'],
    },
    {
      id: 'whatsapp',
      category: 'WhatsApp',
      title: 'Plaquinha WhatsApp Pedidos',
      subtitle: 'Abra conversas diretas no WhatsApp com mensagem personalizada pré-programada no QR Code.',
      badge: 'INDISPENSÁVEL',
      colorScheme: 'from-[#075E54]/40 to-[#128C7E]/20',
      gradient: 'from-[#25D366] to-[#128C7E]',
      accent: '#25D366',
      icon: <MessageCircle className="w-6 h-6 text-emerald-400" />,
      specs: ['Chama no Zap com 1 clique', 'Mensagem inicial automática', 'Suporte e fechamento rápido'],
    },
    {
      id: 'pix',
      category: 'Pix',
      title: 'Plaquinha Pix Pagamento Fácil',
      subtitle: 'Elimine erros na digitação de chave. O cliente escaneia e já abre o pagamento no app do banco.',
      badge: 'COMERCIAL',
      colorScheme: 'from-[#32BCAD]/30 to-[#0A4D4A]/30',
      gradient: 'from-[#32BCAD] to-[#00A896]',
      accent: '#32BCAD',
      icon: <QrCode className="w-6 h-6 text-[#32BCAD]" />,
      specs: ['Chave Pix ou link dinâmico', 'Agiliza a fila do caixa', 'Design minimalista e seguro'],
    },
    {
      id: 'wifi',
      category: 'Wi-Fi',
      title: 'Plaquinha Wi-Fi Conexão Direta',
      subtitle: 'Clientes se conectam à rede sem precisar perguntar a senha ao garçom ou atendente.',
      badge: 'PRATICIDADE',
      colorScheme: 'from-[#8B3DFF]/30 to-[#4F46E5]/20',
      gradient: 'from-[#8B3DFF] to-[#6366F1]',
      accent: '#8B3DFF',
      icon: <Wifi className="w-6 h-6 text-purple-400" />,
      specs: ['Conecta direto no Wi-Fi', 'Sem digitação de senhas longas', 'Perfeito para hotéis e cafés'],
    },
  ];

  // Auto-play carousel
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % templates.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, templates.length]);

  const handlePrev = () => {
    setIsPaused(true);
    setActiveIndex((prev) => (prev - 1 + templates.length) % templates.length);
  };

  const handleNext = () => {
    setIsPaused(true);
    setActiveIndex((prev) => (prev + 1) % templates.length);
  };

  return (
    <section id="modelos" className="relative py-24 sm:py-32 bg-[#06040D] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-[#8B3DFF]/10 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B3DFF]/15 border border-[#8B3DFF]/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            CATÁLOGO INTELIGENTE
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight font-display">
            MODELOS PRONTOS. PRODUÇÃO INTELIGENTE.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Escolha entre modelos de plaquinhas para diferentes aplicações e personalize seus QR Codes de maneira prática.
          </p>
        </div>

        {/* Carousel Navigation Buttons & Category Pills */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            {templates.map((tpl, idx) => (
              <button
                key={tpl.id}
                onClick={() => {
                  setActiveIndex(idx);
                  setIsPaused(true);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeIndex === idx
                    ? 'bg-[#8B3DFF] text-white shadow-[0_0_15px_rgba(139,61,255,0.6)]'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {tpl.category}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors cursor-pointer"
              aria-label="Modelo anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors cursor-pointer"
              aria-label="Próximo modelo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Presentation Container */}
        <div
          ref={containerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative min-h-[440px] flex items-center justify-center"
        >
          {/* Active Template Spotlight Card */}
          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center rounded-3xl glass-card border border-[#8B3DFF]/30 p-6 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
            
            {/* Left: Realistic Physical Plaque Mockup (Art Ilustrativa) */}
            <div className="md:col-span-5 flex flex-col items-center justify-center">
              <div className="relative group perspective-1000">
                {/* Desk stand reflection and shadow */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-6 bg-black/80 blur-lg rounded-full" />
                
                {/* Physical Acrylic Plaque Representation */}
                <div className="relative w-56 sm:w-64 h-80 sm:h-92 rounded-2xl bg-gradient-to-b from-[#1E1638] via-[#120B24] to-[#0A0614] border-2 border-white/20 p-5 shadow-2xl flex flex-col justify-between overflow-hidden">
                  {/* Glossy Reflection Streak */}
                  <div className="absolute -top-24 -left-24 w-72 h-72 bg-gradient-to-tr from-white/15 to-transparent rotate-45 pointer-events-none" />

                  {/* Plaque Header: NFC Icon + Brand */}
                  <div className="flex items-center justify-between z-10">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-white/10 text-white">
                        {templates[activeIndex].icon}
                      </div>
                      <span className="text-xs font-bold text-white tracking-wide">
                        {templates[activeIndex].category}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-slate-400 text-[10px] font-mono">
                      <Radio className="w-3.5 h-3.5 text-[#C084FC] animate-pulse" />
                      <span>NFC</span>
                    </div>
                  </div>

                  {/* Plaque Center: High-Definition Stylized QR Code */}
                  <div className="my-auto flex flex-col items-center justify-center z-10">
                    <div className="p-3 bg-white rounded-xl shadow-xl relative">
                      <svg className="w-24 h-24 sm:w-28 sm:h-28 text-[#0C0819]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm10 0h2v2h-2v-2zm4 0h4v2h-4v-2zm-4 4h2v4h-2v-4zm4 2h4v2h-4v-2zm2-4h2v2h-2v-2zm-6 2h2v2h-2v-2z" />
                      </svg>
                      {/* Central Badge */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className="w-6 h-6 rounded-md flex items-center justify-center shadow"
                          style={{ backgroundColor: templates[activeIndex].accent }}
                        >
                          <Sparkles className="w-3.5 h-3.5 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Instruction text on plaque */}
                    <p className="mt-3 text-[10px] sm:text-xs font-bold tracking-wider uppercase text-purple-200">
                      APROXIME OU ESCANEIE
                    </p>
                  </div>

                  {/* Plaque Base: Acrylic Stand Mount */}
                  <div className="z-10 text-center border-t border-white/10 pt-2">
                    <span className="text-[9px] font-mono text-slate-400">
                      DINÂMICO PRO • #{String(activeIndex + 1).padStart(3, '0')}
                    </span>
                  </div>
                </div>

                {/* Base Stand Mount */}
                <div className="w-40 h-3 mx-auto mt-1 rounded-b-lg bg-[#2E204E] border border-white/10 shadow-md" />
              </div>

              <span className="text-[10px] text-slate-500 mt-4 text-center">
                *Representação ilustrativa de modelo compatível
              </span>
            </div>

            {/* Right: Template Description & Specifications */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#8B3DFF]/20 text-[#D8B4FE] border border-[#8B3DFF]/40">
                    {templates[activeIndex].badge}
                  </span>
                  <span className="text-xs text-slate-400">
                    Categoria: {templates[activeIndex].category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                  {templates[activeIndex].title}
                </h3>

                <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                  {templates[activeIndex].subtitle}
                </p>
              </div>

              {/* Feature bullets */}
              <div className="space-y-2.5 pt-2">
                {templates[activeIndex].specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-[#8B3DFF]/20 flex items-center justify-center text-[#C084FC]">
                      ✓
                    </div>
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              {/* Clarification Notice */}
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400 leading-relaxed">
                <span className="text-purple-300 font-semibold">Produção Inteligente:</span> Você pode alternar entre modelos com 1 clique e exportar arquivos padronizados prontos para recorte e acabamento acrílico, MDF ou metal.
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {templates.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveIndex(idx);
                setIsPaused(true);
              }}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === idx ? 'w-8 bg-[#8B3DFF]' : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Ir para modelo ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
