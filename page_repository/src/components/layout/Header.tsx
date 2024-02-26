import clsx from "clsx";
import { useRouter } from "next/router";
import Link from "next/link";
import LanguageSelect from "../tools/LanguageSelect";
import useCurrentLanguage from "@/lib/useCurrentLanguage";

const location = [
  {
    label: '/',
    path: {
      en: '/',
      ko: '/ko',
      ja: '/ja'
    },
    asPath: ''
  }, {
    label: 'Employment History',
    path: {
      en: '/employment-history',
      ko: '/ko/employment-history',
      ja: '/ja/employment-history'
    },
    asPath: 'employment-history'
  }, {
    label: 'Eikoline',
    path: {
      en: '/employment-history/e/eikoline',
      ko: '/ko/employment-history/e/eikoline',
      ja: '/ja/employment-history/e/eikoline'
    },
    asPath: 'eikoline',
    default: 'hidden'
  }, {
    label: 'Linger',
    path: {
      en: '/employment-history/e/linger',
      ko: '/ko/employment-history/e/linger',
      ja: '/ja/employment-history/e/linger'
    },
    asPath: 'linger',
    default: 'hidden'
  }, {
    label: 'Playauto',
    path: {
      en: '/employment-history/e/playauto',
      ko: '/ko/employment-history/e/playauto',
      ja: '/ja/employment-history/e/playauto'
    },
    asPath: 'playauto',
    default: 'hidden'
  }, {
    label: 'Side projects',
    path: {
      en: '/side-projects',
      ko: '/ko/side-projects',
      ja: '/ja/side-projects'
    },
    asPath: 'employment-history'
  }
]

const RootDomain = ['/', '/ko', '/ja'];

export default function Header() {
  const { pathname, asPath } = useRouter();
  const copiedAsPath = asPath;
  const routes = copiedAsPath.split('/').map(item => {
    const found = location.find(loc => loc.asPath === item);

    return found;
  }).filter(Boolean);
  const currentLanguage = useCurrentLanguage();

  return (
    <header
      className={
        clsx(
          'flex items-center justify-between',
          'fixed top-0 z-10',
          'w-full p-4',
          'md:bg-opacity-0 backdrop-blur md:backdrop-blur-0'
        )
      }
    >
      <nav className={
        clsx(
          'flex flex-row md:flex-col slg:flex-row justify-center slg:items-center',
          'gap-4')}
        >
        {
          RootDomain.includes(pathname) ? (
            <>
              {
                location.filter(loc => loc.default !== 'hidden').map((item, idx) => (
                  <Link key={idx} href={item.path[currentLanguage]} className={clsx(asPath === item.path[currentLanguage] ? 'text-[#fff]' : '', 'px-2')}>
                    {item.label}
                  </Link>
                ))
              }
            </>
          ) : (
            <>
              {
                routes.map((item, idx) => (
                  <Link key={idx} href={item.path[currentLanguage]} className={clsx(asPath === item.path[currentLanguage] ? 'text-[#fff]' : '', 'px-2')}>
                    {item.label}
                  </Link>
                ))
              }
            </>
          )
        }
      </nav>
      <div className={'flex items-center justify-between gap-4 self-start'}>
        <LanguageSelect />
        {/* <ThemeToggle /> */}
      </div>
    </header>
  );
}
