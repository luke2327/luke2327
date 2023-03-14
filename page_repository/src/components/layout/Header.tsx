import ThemeToggle from '@/components/tools/ThemeToggle';

export default function Header() {
  return (
    <header
      className={'fixed top-0 flex w-full items-center justify-between p-4'}
    >
      <p>Luke2327</p>
      <ThemeToggle />
    </header>
  );
}
