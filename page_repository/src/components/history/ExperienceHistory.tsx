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
import { cn } from '@/lib/utils';

export default function ExperienceHistory(props: History) {
  return (
    <HsGrid role={'row'}>
      <HsPeriod
        aria-label={`period: ${props.period}`}
        className={props.present ? 'history-period !text-gray-light': 'history-period'}
      >
        {props.period}
      </HsPeriod>
      <HsCard>
        <HsAnchor
          aria-label={`title: ${props.title.en}`}
          className={'history-anchor'}
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
        </HsAnchor>
        <HsDescription aria-label={`description: ${props.description.en}`}>
          {props.description.en}
        </HsDescription>
        <HsSkillStack
          aria-label={`skill-stack: ${props.skill.join()}`}
          className={'history-skill-stack flex'}
        >
          {props.skill.join(' • ')}
        </HsSkillStack>
      </HsCard>
    </HsGrid>
  );
}
