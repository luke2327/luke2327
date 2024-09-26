import {
  HsAnchor,
  HsArrowLink,
  HsCard,
  HsDescription,
  HsGrid,
  HsPeriod,
  HsSkillStack,
} from '@/components/history/Historys';
import { defaultThemeColor } from '@/constants/AppConfig';
import type { History } from '@/constants/experienctHistory';
import useCurrentLanguage from '@/lib/useCurrentLanguage';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import Image from 'next/image'

export default function ExperienceHistory(props: History) {
  const currentLanguage = useCurrentLanguage();
  const router = useRouter();
  const link = () => {
    if (props.nav) {
      router.push(props.nav[currentLanguage]);
    }
  }

  return (
    <HsGrid role={'row'}
      className={clsx(
        props.hide ? '!hidden' : 'block',
      )}
      onClick={link}
    >
      <HsPeriod
        aria-label={`period: ${props.period}`}
        className={props.present ? 'history-period !text-gray-light': 'history-period'}
      >
        {props.period[currentLanguage]}
      </HsPeriod>
      <HsCard>
        <HsAnchor
          aria-label={`title: ${props.title[currentLanguage]}`}
          className={'history-anchor group flex !items-end'}
          href={props.link}
          target='_blank'
        >
          {props.ico && <Image src={props.ico} width={28} height={28} alt="icon" className={clsx("pr-0.5", props.icoClass ? props.icoClass : '')} />}
          {props.title[currentLanguage]}
          {props.link && (
            <HsArrowLink
              alt={`link: ${props.title[currentLanguage]}`}
              width={14}
              height={14}
              src={`/images/${defaultThemeColor}/arrow-link.svg`}
            />
          )}
          <p className={
            clsx(
              'absolute mt-12 group-hover:opacity-100 opacity-0 transition-opacity',
              'bg-[#3a3837] px-2 py-0.5 rounded-md'
            )
          }>
            {props.link}
          </p>
          {props.isJp && <div className="text-sm bg-[#fff] text-[#000] px-1.5 rounded-md ml-1">JP</div>}
        </HsAnchor>
        <div className='cursor-pointer'>
          <HsDescription className="hover:text-[#fff]" aria-label={`description: ${props.description[currentLanguage]}`}>
            <div className="flex flex-col gap-4 group items-end">
              <p className="self-start">{props.description[currentLanguage]}</p>
              {props.nav && !props.noDetail && <span className={clsx("text-right w-[84px]", props.readMoreClass)}>Read more...</span>}
            </div>
          </HsDescription>
          <HsSkillStack
            aria-label={`skill-stack: ${props.skill.join()}`}
            className={'history-skill-stack flex mt-4'}
          >
            {props.skill.join(' • ')}
          </HsSkillStack>
        </div>
      </HsCard>
    </HsGrid>
  );
}
