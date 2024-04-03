import { SupportedLanguage } from '@/constants/AppConfig';
import { useRouter } from 'next/router';

export default function useCurrentLanguage(): SupportedLanguage {
  const router = useRouter();

  if (router.pathname.startsWith('/en')) return 'en';
  else if (router.pathname.startsWith('/ja')) return 'ja';
  else return 'ko';
}
