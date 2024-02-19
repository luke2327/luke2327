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
import clsx from 'clsx';
import { useRouter } from 'next/router';

export default function ExperienceHistory(props: History) {
  const router = useRouter();
  const link = () => {
    if (props.nav) {
      router.push(props.nav);
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
        {props.period}
      </HsPeriod>
      <HsCard>
        <HsAnchor
          aria-label={`title: ${props.title.en}`}
          className={'history-anchor group'}
          href={props.link}
        >
          {props.title.en}
          {props.link && (
            <HsArrowLink
              alt={`link: ${props.title.en}`}
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
        <div className='hover:text-[#fff] cursor-pointer'>
          <HsDescription aria-label={`description: ${props.description.en}`}>
            <div className="flex flex-col gap-4">
              <p>{props.description.en}</p>
              <p className="text-right">Read more...</p>
            </div>
          </HsDescription>
          <HsSkillStack
            aria-label={`skill-stack: ${props.skill.join()}`}
            className={'history-skill-stack flex'}
          >
            {props.skill.join(' • ')}
          </HsSkillStack>
        </div>
      </HsCard>
    </HsGrid>
  );
}
