import ThemeToggle from '@/components/tools/ThemeToggle';

export default function Header() {
  return (
    <header
      className={'fixed top-0 flex w-full items-center justify-between p-4'}
    >
      <a
        href={'#main'}
        aria-label={`nickname: Luke2327, scroll to top`}
        aria-live="polite"
      >
        Luke2327
      </a>
      <ThemeToggle />
    </header>
  );
}
