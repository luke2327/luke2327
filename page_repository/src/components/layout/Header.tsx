import { Languages } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import ThemeToggle from '@/components/tools/ThemeToggle';

export default function Header() {
  const { i18n } = useTranslation();
  console.log(i18n);
  return (
    <header
      className={'fixed top-0 flex w-full items-center justify-between p-4'}
    >
      <div className={'flex items-center'}>
        <a
          href={'#main'}
          aria-label={`nickname: Luke2327, scroll to top`}
          aria-live="polite"
        >
          Luke2327
        </a>
      </div>
      <div className={'flex items-center justify-between gap-4'}>
        <Languages strokeWidth={1.5} />
        <ThemeToggle />
      </div>
    </header>
  );
}
