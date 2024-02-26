import { SupportedLanguage } from "@/constants/AppConfig";
import { useRouter } from "next/router";

export default function useCurrentLanguage(): SupportedLanguage {
  const router = useRouter();

  if (router.pathname.startsWith('/ko')) return 'ko';
  else if (router.pathname.startsWith('/ja')) return 'ja';
  else return 'en';
};