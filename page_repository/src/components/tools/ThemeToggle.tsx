import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { setTheme: changeTheme } = useTheme();
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const toggle = () => {
    if (theme !== 'dark') {
      setTheme('dark');
      changeTheme('dark');
    } else {
      setTheme('light');
      changeTheme('light');
    }
  };

  useEffect(() => {
    // @ts-ignore
    const [tag] = document.getElementsByTagName('html');

    setTheme(tag.className);
  }, []);

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
