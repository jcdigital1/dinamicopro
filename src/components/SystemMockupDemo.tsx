import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Layers,
  FileDown,
  QrCode,
  Check,
  ChevronRight,
  Settings2,
  Printer,
  Eye,
  CheckCircle2,
  Smartphone,
  Play
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const SystemMockupDemo: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<'google' | 'instagram' | 'pix' | 'whatsapp' | 'wifi'>('google');
  const [quantity, setQuantity] = useState<number>(30);
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [generationProgress, setGenerationProgress] = useState<number>(0);
  const [isGenerated, setIsGenerated] = useState<boolean>(false);
  const [autoLoop, setAutoLoop] = useState<boolean>(true);

  // Model details for UI preview
  const modelsMap = {
    google: {
      name: 'Avaliação Google 5 Estrelas',
      color: 'from-[#4285F4] via-[#EA4335] to-[#FBBC05]',
      badge: 'Google Reviews',
      accent: '#4285F4',
      nfcText: 'Aproxime para Avaliar',
    },
    instagram: {
      name: 'Instagram Seguir & Conectar',
      color: 'from-[#F58529] via-[#DD2A7B] to-[#8134AF]',
      badge: '@seuperfil',
      accent: '#E1306C',
      nfcText: 'Aproxime para Seguir',
    },
    pix: {
      name: 'Pix Pagamento Instantâneo',
      color: 'from-[#32BCAD] via-[#00B4D8] to-[#0077B6]',
      badge: 'Chave Pix',
      accent: '#32BCAD',
      nfcText: 'Aproxime para Pagar',
    },
    whatsapp: {
      name: 'WhatsApp Atendimento & Pedidos',
      color: 'from-[#25D366] via-[#128C7E] to-[#075E54]',
      badge: 'Conversar Agora',
      accent: '#25D366',
      nfcText: 'Aproxime para Conversar',
    },
    wifi: {
      name: 'Wi-Fi Conexão Rápida',
      color: 'from-[#8B3DFF] via-[#7C3AED] to-[#4F46E5]',
      badge: 'Senha Wi-Fi',
      accent: '#8B3DFF',
      nfcText: 'Conecte-se Automaticamente',
    },
  };

  // Simulated auto-walkthrough loop
  useEffect(() => {
    if (!autoLoop || isGenerating) return;

    const timer = setInterval(() => {
      setActiveStep((prev) => {
        if (prev === 1) return 2;
        if (prev === 2) {
          triggerGenerateBatch();
          return 3;
        }
        if (prev === 3) return 4;
        return 1;
      });
    }, 4500);

    return () => clearInterval(timer);
  }, [autoLoop, isGenerating]);

  const triggerGenerateBatch = () => {
    setIsGenerating(true);
    setGenerationProgress(0);
    setIsGenerated(false);

    let current = 0;
    const interval = setInterval(() => {
      current += 20;
      setGenerationProgress(current);
      if (current >= 100) {
        clearInterval(interval);
        setIsGenerating(false);
        setIsGenerated(true);
        setActiveStep(4);
      }
    }, 200);
  };

  const handleManualStepClick = (stepNum: number) => {
    setAutoLoop(false);
    setActiveStep(stepNum);
    if (stepNum === 3) {
      triggerGenerateBatch();
    }
  };

  const handleDownloadSimulation = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#8B3DFF', '#C084FC', '#FFFFFF'],
      });
    } catch {
      // Fallback
    }
  };

  return (
    <section id="demonstracao" className="relative py-20 sm:py-28 bg-[#070511] overflow-hidden border-y border-[#8B3DFF]/15">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#8B3DFF]/15 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#C084FC]/10 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B3DFF]/15 border border-[#8B3DFF]/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            INTERFACE DO SOFTWARE
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight font-display">
            DEMONSTRAÇÃO VISUAL DO SISTEMA
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Veja como é simples e intuitivo transformar a sua produção de plaquinhas em apenas 4 etapas automáticas.
          </p>
        </div>

        {/* Step Sequence Tabs Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-8">
          {[
            { num: 1, label: '1. Escolher modelo' },
            { num: 2, label: '2. Selecionar quantidade' },
            { num: 3, label: '3. Gerar lote' },
            { num: 4, label: '4. Baixar PDF' },
          ].map((step) => {
            const isActive = activeStep === step.num;
            return (
              <button
                key={step.num}
                onClick={() => handleManualStepClick(step.num)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#8B3DFF] to-[#7C3AED] text-white shadow-[0_0_20px_rgba(139,61,255,0.6)] scale-105 border border-[#C084FC]/40'
                    : 'bg-[#100B24] text-slate-400 hover:text-white border border-white/5 hover:border-white/20'
                }`}
              >
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold ${
                    isActive ? 'bg-white text-[#8B3DFF]' : 'bg-white/10 text-slate-300'
                  }`}
                >
                  {step.num}
                </span>
                <span>{step.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Software Dashboard Mockup */}
        <div className="relative rounded-3xl glass-card border border-[#8B3DFF]/30 shadow-[0_30px_90px_rgba(0,0,0,0.8)] overflow-hidden">
          {/* Top macOS/App Window Header */}
          <div className="bg-[#0D091F] px-4 py-3.5 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>
              <div className="h-4 w-px bg-white/10 mx-1" />
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <span className="px-2 py-0.5 rounded bg-[#8B3DFF]/20 text-purple-300 font-mono text-[11px]">
                  DINÂMICO PRO v2.4
                </span>
                <span className="text-slate-500 hidden sm:inline">•</span>
                <span className="text-slate-400 text-[11px] hidden sm:inline">
                  Painel de Geração em Lote
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs">
              <span className="hidden sm:inline-flex items-center gap-1.5 text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Sistema Pronto
              </span>
              <button
                onClick={() => setAutoLoop(!autoLoop)}
                className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                title="Pausar / Retomar loop demonstrativo"
              >
                <Play className="w-3 h-3" />
                {autoLoop ? 'Auto: Ligado' : 'Auto: Pausado'}
              </button>
            </div>
          </div>

          {/* Main Dashboard Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
            {/* Left Controls Column (4 cols) */}
            <div className="lg:col-span-4 p-5 sm:p-6 bg-[#0B071C] border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                {/* 1. Escolha do Modelo */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-purple-300 flex items-center gap-1.5 mb-2.5">
                    <Settings2 className="w-3.5 h-3.5" />
                    1. Escolher Modelo
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    {(Object.keys(modelsMap) as Array<keyof typeof modelsMap>).map((key) => {
                      const item = modelsMap[key];
                      const isSelected = selectedModel === key;
                      return (
                        <button
                          key={key}
                          onClick={() => {
                            setSelectedModel(key);
                            setAutoLoop(false);
                            setActiveStep(1);
                          }}
                          className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#1F1538] border border-[#8B3DFF] text-white shadow-[0_0_15px_rgba(139,61,255,0.3)]'
                              : 'bg-white/[0.02] border border-white/5 text-slate-300 hover:bg-white/[0.05]'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span
                              className="w-2.5 h-2.5 rounded-full"
                              style={{ backgroundColor: item.accent }}
                            />
                            <span>{item.name}</span>
                          </div>
                          {isSelected && <Check className="w-4 h-4 text-[#C084FC]" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Seleção de Quantidade */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-purple-300 flex items-center gap-1.5 mb-2.5">
                    <Layers className="w-3.5 h-3.5" />
                    2. Selecionar Quantidade
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[10, 30, 50, 100].map((q) => (
                      <button
                        key={q}
                        onClick={() => {
                          setQuantity(q);
                          setAutoLoop(false);
                          setActiveStep(2);
                        }}
                        className={`py-2 px-1 rounded-xl text-xs font-bold text-center transition-all cursor-pointer ${
                          quantity === q
                            ? 'bg-gradient-to-br from-[#8B3DFF] to-[#6D28D9] text-white border border-[#C084FC]/50 shadow-[0_0_15px_rgba(139,61,255,0.4)]'
                            : 'bg-white/[0.03] text-slate-300 border border-white/5 hover:border-white/20'
                        }`}
                      >
                        {q} un
                      </button>
                    ))}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-2">
                    Total de folhas A4 necessárias: <span className="text-purple-300 font-bold">{Math.ceil(quantity / 4)} folhas</span> (4 por página).
                  </p>
                </div>
              </div>

              {/* 3. Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    setAutoLoop(false);
                    triggerGenerateBatch();
                  }}
                  disabled={isGenerating}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#8B3DFF] to-[#A855F7] hover:from-[#7C3AED] hover:to-[#9333EA] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(139,61,255,0.5)] transition-all transform active:scale-95 cursor-pointer disabled:opacity-50"
                >
                  <QrCode className="w-4 h-4" />
                  {isGenerating ? `GERANDO LOTE (${generationProgress}%)...` : 'GERAR LOTE AGORA'}
                </button>

                {/* Progress bar */}
                {isGenerating && (
                  <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-[#C084FC] h-full transition-all duration-200"
                      style={{ width: `${generationProgress}%` }}
                    />
                  </div>
                )}

                <button
                  onClick={handleDownloadSimulation}
                  className={`w-full py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                    isGenerated
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 hover:bg-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                      : 'bg-white/[0.02] text-slate-400 border-white/10 hover:border-white/20'
                  }`}
                >
                  <FileDown className="w-4 h-4" />
                  {isGenerated ? 'BAIXAR PDF PRONTO (A4)' : 'INDICADOR DE EXPORTAÇÃO PDF'}
                </button>
              </div>
            </div>

            {/* Right Live Preview Column (8 cols) */}
            <div className="lg:col-span-8 p-5 sm:p-8 bg-[#0E0A22] flex flex-col justify-between">
              {/* Preview Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-purple-300">
                    PRÉVIA DA FOLHA DE IMPRESSÃO (A4)
                  </span>
                  <h4 className="text-white font-bold text-base sm:text-lg flex items-center gap-2">
                    Lote Atual: <span className="text-[#C084FC]">{quantity} Plaquinhas Dinâmicas</span>
                  </h4>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-slate-400 bg-black/40 px-3 py-1 rounded-full border border-white/5 flex items-center gap-1.5">
                    <Printer className="w-3.5 h-3.5 text-purple-400" />
                    Página 1 de {Math.ceil(quantity / 4)}
                  </span>
                </div>
              </div>

              {/* Simulated A4 Sheet with 4 Plaques */}
              <div className="relative bg-[#070513] rounded-2xl p-4 sm:p-6 border border-white/10 shadow-inner">
                {/* Simulated Sheet Cutlines & Background */}
                <div className="absolute inset-0 border border-dashed border-purple-500/20 rounded-2xl pointer-events-none" />

                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((index) => {
                    const plaqueNum = String(index).padStart(3, '0');
                    return (
                      <div
                        key={index}
                        className="relative rounded-xl p-3 sm:p-4 bg-gradient-to-br from-[#170F2D] to-[#0D091A] border border-[#8B3DFF]/30 shadow-lg flex flex-col justify-between overflow-hidden group hover:border-[#8B3DFF] transition-all"
                      >
                        {/* Acrylic/Gloss Sheen */}
                        <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-bl-3xl pointer-events-none" />

                        {/* Top plaque details */}
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-purple-200 font-bold">
                              #{plaqueNum}
                            </span>
                            <span className="text-[10px] text-slate-400 truncate max-w-[80px] sm:max-w-[120px]">
                              {modelsMap[selectedModel].badge}
                            </span>
                          </div>
                          <span className="text-[9px] font-semibold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                            Ativo
                          </span>
                        </div>

                        {/* Middle: 3D QR Code Display */}
                        <div className="my-2 flex items-center justify-center">
                          <div className="p-2 sm:p-2.5 rounded-lg bg-white shadow-md relative">
                            {/* Realistic stylized QR SVG */}
                            <svg className="w-12 h-12 sm:w-16 sm:h-16 text-black" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm10 0h2v2h-2v-2zm4 0h4v2h-4v-2zm-4 4h2v4h-2v-4zm4 2h4v2h-4v-2zm2-4h2v2h-2v-2zm-6 2h2v2h-2v-2z" />
                            </svg>
                            {/* Center dynamic chip */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-3.5 h-3.5 rounded bg-[#8B3DFF] flex items-center justify-center shadow">
                                <Sparkles className="w-2 h-2 text-white" />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Bottom Tagline & NFC info */}
                        <div className="mt-2 text-center border-t border-white/5 pt-2">
                          <p className="text-[9px] sm:text-[10px] font-bold text-white uppercase tracking-wider truncate">
                            {modelsMap[selectedModel].nfcText}
                          </p>
                          <p className="text-[8px] font-mono text-purple-300/70 truncate mt-0.5">
                            dinamico.pro/{plaqueNum}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Status info bar */}
              <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Numeração automática e links dinâmicos configurados no lote.</span>
                </div>
                <span className="font-mono text-purple-300 text-[11px]">
                  Padrão A4 • 300 DPI • CMYK Ready
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
