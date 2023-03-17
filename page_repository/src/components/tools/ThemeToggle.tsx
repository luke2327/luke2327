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

  return (
    <button suppressHydrationWarning={true} onClick={toggle}>
      {theme}
    </button>
  );
}
