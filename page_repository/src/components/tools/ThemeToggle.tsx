import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggle = () => {
    if (theme !== 'dark') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const moonProps: Pick<HTMLImageElement, 'width' | 'height' | 'src'> = {
    width: 28,
    height: 28,
    src: '/images/sun.svg',
  };

  const sunProps: Pick<HTMLImageElement, 'width' | 'height' | 'src'> = {
    width: 28,
    height: 28,
    src: '/images/moon.svg',
  };

  return (
    <button
      suppressHydrationWarning={true}
      onClick={toggle}
      title="Toggles light & dark"
      aria-label="auto"
      aria-live="polite"
      className={'theme-toggle'}
    >
      {theme === 'dark' ? (
        <img {...moonProps} alt={'change light'} />
      ) : theme === 'light' ? (
        <img {...sunProps} alt={'change dark'} />
      ) : (
        <img {...moonProps} alt={'change light'} />
      )}
    </button>
  );
}
