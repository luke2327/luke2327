import clsx from "clsx";
import { useRouter } from "next/router";
import Link from "next/link";

const location = [
  {
    label: '/',
    path: '/',
    asPath: ''
  }, {
    label: 'Employment History',
    path: '/employment-history',
    asPath: 'employment-history'
  }, {
    label: 'Eikoline',
    path: '/employment-history/e/eikoline',
    asPath: 'eikoline',
    default: 'hidden'
  }, {
    label: 'Linger',
    path: '/employment-history/e/linger',
    asPath: 'linger',
    default: 'hidden'
  }, {
    label: 'Side projects',
    path: '/employment-history',
    asPath: 'employment-history'
  }
]

export default function Header() {
  const { pathname, asPath } = useRouter();
  const copiedAsPath = asPath;
  const routes = copiedAsPath.split('/').map(item => {
    const found = location.find(loc => loc.asPath === item);

    return found;
  }).filter(Boolean);

  return (
    <header
      className={
        clsx(
          'flex items-center justify-between',
          'fixed top-0 z-10',
          'w-full p-4',
          'md:bg-opacity-0 bg-[#000]'
        )
      }
    >
      <nav className={
        clsx(
          'flex flex-row md:flex-col slg:flex-row justify-center slg:items-center',
          'gap-4')}
        >
        {
          pathname === '/' ? (
            <>
              {
                location.filter(loc => loc.default !== 'hidden').map((item, idx) => (
                  <Link locale="en" key={idx} href={item.path} className={clsx(asPath === item.path ? 'text-[#fff]' : '', 'px-2')}>
                    {item.label}
                  </Link>
                ))
              }
            </>
          ) : (
            <>
              {
                routes.map((item, idx) => (
                  <Link key={idx} href={item.path} className={clsx(asPath === item.path ? 'text-[#fff]' : '', 'px-2')}>
                    {item.label}
                  </Link>
                ))
              }
            </>
          )
        }
      </nav>
      <div className={'flex items-center justify-between gap-4'}>
        {/* <Languages strokeWidth={1.5} /> */}
        {/* <LanguageSelect />
        <ThemeToggle /> */}
      </div>
    </header>
  );
}
