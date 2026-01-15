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
import Image from 'next/image';

export default function ExperienceHistory(props: History) {
  const currentLanguage = useCurrentLanguage();
  const router = useRouter();
  const link = () => {
    if (props.nav) {
      router.push(props.nav[currentLanguage]);
    }
  };

  return (
    <HsGrid
      role={'row'}
      className={clsx(props.hide ? '!hidden' : 'block')}
      onClick={link}
    >
      <HsPeriod
        aria-label={`period: ${props.period}`}
        className={
          props.present ? 'history-period !text-gray-light' : 'history-period'
        }
      >
        {props.period[currentLanguage]}
      </HsPeriod>
      <HsCard>
        <HsAnchor
          aria-label={`title: ${props.title[currentLanguage]}`}
          className={'history-anchor nowrap group flex items-center gap-2'}
          href={props.link}
          target="_blank"
        >
          {props.ico && (
            <Image
              src={props.ico}
              width={28}
              height={28}
              alt="icon"
              className={clsx('pr-0.5', props.icoClass ? props.icoClass : '')}
            />
          )}
          {props.title[currentLanguage]}
          {props.isJp && (
            <div className="ml-1 self-end rounded-md bg-[#fff] px-1.5 text-sm text-[#000]">
              JP
            </div>
          )}
          {props.link && (
            <HsArrowLink
              alt={`link: ${props.title[currentLanguage]}`}
              width={14}
              height={14}
              src={`/images/${defaultThemeColor}/arrow-link.svg`}
              className={'self-end'}
            />
          )}
          <p
            className={clsx(
              'absolute mt-12 opacity-0 transition-opacity group-hover:opacity-100',
              'rounded-md bg-[#3a3837] px-2 py-0.5'
            )}
          >
            {props.link}
          </p>
        </HsAnchor>
        <div className="cursor-pointer">
          <HsDescription
            className="hover:text-[#fff]"
            aria-label={`description: ${props.description[currentLanguage]}`}
          >
            <div className="group flex flex-col items-end gap-4">
              <p className="self-start">{props.description[currentLanguage]}</p>
              {props.nav && !props.noDetail && (
                <span
                  className={clsx('w-[84px] text-right', props.readMoreClass)}
                >
                  Read more...
                </span>
              )}
            </div>
          </HsDescription>
          <HsSkillStack
            aria-label={`skill-stack: ${props.skill.join()}`}
            className={'history-skill-stack mt-4 flex'}
          >
            {props.skill.join(' • ')}
          </HsSkillStack>
        </div>
      </HsCard>
    </HsGrid>
  );
}
