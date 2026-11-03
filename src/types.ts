export interface TemplateItem {
  id: string;
  title: string;
  category: 'google' | 'instagram' | 'whatsapp' | 'wifi' | 'pix';
  description: string;
  color: string;
  accent: string;
  tag: string;
  iconName: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const CHECKOUT_URL = 'https://go.pepperpay.com.br/llplm';
