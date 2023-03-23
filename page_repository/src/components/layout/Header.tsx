import ThemeToggle from '@/components/tools/ThemeToggle';

export default function Header() {
  return (
    <header
      className={'fixed top-0 flex w-full items-center justify-between p-4'}
    >
      <p aria-label={`nickname: Luke2327`}>Luke2327</p>
      <ThemeToggle />
    </header>
  );
}
