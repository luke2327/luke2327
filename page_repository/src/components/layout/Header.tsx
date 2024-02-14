import clsx from "clsx";
import { useRouter } from "next/router";
import Link from "next/link";

const location = [
  {
    label: '/',
    path: '/'
  }, {
    label: 'Portfolio',
    path: '/portfolio'
  }
]

export default function Header() {
  const { pathname } = useRouter();
  console.log(pathname)
  return (
    <header
      className={'fixed top-0 flex w-full items-center justify-between p-4'}
    >
      <nav className={'flex items-center gap-4'}>
        {
          location.map((item, idx) => (
            <Link key={idx} href={item.path} className={clsx(pathname === item.path ? 'text-[#fff]' : '', 'px-2')}>
              {item.label}
            </Link>
          ))
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
