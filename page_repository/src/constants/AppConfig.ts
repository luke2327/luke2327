export const AppConfig = {
  site_name: 'Chocolat',
  title: 'Chocolat',
  description: '大切な相手に手紙を書こう:)',
};

export type SupportedLanguage = 'ja' | 'ko' | 'en';

export const languages: Array<SupportedLanguage> = ['ja', 'ko', 'en'];
export const defaultLanguage = 'ja';
