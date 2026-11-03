import React, { useState } from 'react';
import { CHECKOUT_URL } from '../types.ts';
import { LegalModal } from './LegalModals.tsx';
import { ArrowUpRight, Sparkles, Shield, Lock, FileText, Headphones } from 'lucide-react';

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | 'support' | null>(null);

  return (
    <footer className="relative bg-[#040208] border-t border-[#8B3DFF]/20 pt-16 pb-12 overflow-hidden text-slate-400">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-40 bg-[#8B3DFF]/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#8B3DFF] to-[#4C1D95] p-0.5 shadow-[0_0_15px_rgba(139,61,255,0.4)]">
                <div className="w-full h-full bg-[#0A0717] rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#C084FC]" />
                </div>
              </div>
              <span className="font-display font-extrabold text-xl text-white tracking-wider">
                DINÂMICO <span className="text-[#8B3DFF]">PRO</span>
              </span>
            </div>

            <p className="text-slate-300 text-sm max-w-md leading-relaxed">
              “Produção inteligente de plaquinhas com QR Code dinâmico.”
            </p>

            <p className="text-xs text-slate-500 max-w-sm">
              Automatize a geração de plaquinhas em lote, altere os links a qualquer momento e exporte arquivos organizados em PDF para impressão.
            </p>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Navegação</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#recursos" className="hover:text-purple-300 transition-colors">
                  Recursos em Lote
                </a>
              </li>
              <li>
                <a href="#demonstracao" className="hover:text-purple-300 transition-colors">
                  Demonstração do Sistema
                </a>
              </li>
              <li>
                <a href="#modelos" className="hover:text-purple-300 transition-colors">
                  Modelos Prontos
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-purple-300 transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-purple-300 transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Checkout & Legal (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Acesso & Termos</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={CHECKOUT_URL}
                  className="text-purple-300 hover:text-white flex items-center gap-1 font-semibold transition-colors"
                >
                  Acessar Dinâmico Pro
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <button
                  onClick={() => setActiveModal('privacy')}
                  className="hover:text-purple-300 transition-colors cursor-pointer"
                >
                  Políticas de Privacidade
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveModal('terms')}
                  className="hover:text-purple-300 transition-colors cursor-pointer"
                >
                  Termos de Uso
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveModal('support')}
                  className="hover:text-purple-300 transition-colors cursor-pointer"
                >
                  Suporte ao Usuário
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Security */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} DINÂMICO PRO. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1">
              <Lock className="w-3 h-3 text-purple-400" />
              Pagamento Processado com Segurança
            </span>
            <span>•</span>
            <span>Ambiente Criptografado SSL</span>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      <LegalModal
        isOpen={activeModal === 'privacy'}
        onClose={() => setActiveModal(null)}
        title="Políticas de Privacidade"
      >
        <p>
          O Dinâmico Pro valoriza e respeita a privacidade de todos os seus usuários. As informações coletadas durante o acesso e utilização de nossos serviços são tratadas em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
        </p>
        <h4 className="font-bold text-white text-sm mt-3">1. Coleta e Uso de Informações</h4>
        <p>
          Os dados informados durante o cadastro e checkout são utilizados exclusivamente para liberação do acesso, autenticação e gerenciamento de seus lotes de plaquinhas e links de redirecionamento.
        </p>
        <h4 className="font-bold text-white text-sm mt-3">2. Segurança dos Dados</h4>
        <p>
          Adotamos protocolos rígidos de segurança, criptografia SSL e servidores protegidos para garantir a integridade dos dados gerados no sistema.
        </p>
        <h4 className="font-bold text-white text-sm mt-3">3. Seus Direitos</h4>
        <p>
          O usuário possui direito a solicitar a qualquer momento a confirmação da existência de tratamento, acesso aos dados e retificação de seus dados cadastrais.
        </p>
      </LegalModal>

      {/* Terms of Use Modal */}
      <LegalModal
        isOpen={activeModal === 'terms'}
        onClose={() => setActiveModal(null)}
        title="Termos de Uso"
      >
        <p>
          Ao adquirir e utilizar a plataforma Dinâmico Pro, você concorda expressamente com os seguintes termos e condições gerais de utilização.
        </p>
        <h4 className="font-bold text-white text-sm mt-3">1. Licença de Uso</h4>
        <p>
          O Dinâmico Pro concede uma licença de acesso ao software para criação, personalização de links e geração de arquivos PDF de plaquinhas para uso próprio e comercial na confecção e revenda de materiais físicos.
        </p>
        <h4 className="font-bold text-white text-sm mt-3">2. Conteúdo e Links</h4>
        <p>
          O usuário é o único responsável pelo conteúdo das páginas de destino configuradas nos links dinâmicos, sendo expressamente vedada a utilização para fins ilegais, difamatórios ou fraudulentos.
        </p>
        <h4 className="font-bold text-white text-sm mt-3">3. Disponibilidade do Sistema</h4>
        <p>
          Nos dedicamos para assegurar a máxima disponibilidade operacional dos redirecionamentos dos códigos QR e da plataforma na nuvem.
        </p>
      </LegalModal>

      {/* Support Modal */}
      <LegalModal
        isOpen={activeModal === 'support'}
        onClose={() => setActiveModal(null)}
        title="Suporte ao Usuário"
      >
        <p>
          Nosso suporte técnico é dedicado a orientar os usuários quanto ao uso das ferramentas do Dinâmico Pro, configurações de links dinâmicos e exportação de lotes em PDF.
        </p>
        <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/30 my-4 space-y-2">
          <div className="text-white font-semibold flex items-center gap-2">
            <Headphones className="w-4 h-4 text-[#8B3DFF]" />
            Canais de Atendimento
          </div>
          <p className="text-xs text-slate-300">
            O canal de suporte é disponibilizado diretamente na área de membros e no e-mail de confirmação de compra enviado após a aprovação do pedido.
          </p>
        </div>
        <p>
          Horário de atendimento: Segunda a sexta-feira, em horário comercial.
        </p>
      </LegalModal>
    </footer>
  );
};
