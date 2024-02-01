export default function Header() {
  return (
    <header
      className={'fixed top-0 flex w-full items-center justify-between p-4'}
    >
      <div className={'flex items-center'}>
        <a
          href={'#main'}
          aria-label={`nickname: Liam, scroll to top`}
          aria-live="polite"
        >
          Liam
        </a>
      </div>
      <div className={'flex items-center justify-between gap-4'}>
        {/* <Languages strokeWidth={1.5} /> */}
        {/* <LanguageSelect />
        <ThemeToggle /> */}
      </div>
    </header>
  );
}
