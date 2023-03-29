import {
  HsAnchor,
  HsArrowLink,
  HsCard,
  HsDescription,
  HsGrid,
  HsPeriod,
  HsSkillStack,
} from '@/components/history/Historys';
import type { History } from '@/constants/experienctHistory';

export default function ExperienceHistory(props: History) {
  return (
    <HsGrid role={'row'}>
      <HsPeriod
        aria-label={`period: ${props.period}`}
        className={'history-period'}
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
              src={'/images/arrow-link.svg'}
            />
          )}
        </HsAnchor>
        <HsDescription aria-label={`description: ${props.description.en}`}>
          {props.description.en}
        </HsDescription>
        <HsSkillStack
          aria-label={`skill-stack: ${props.skill.join()}`}
          className={'history-skill-stack'}
        >
          {props.skill.join(' • ')}
        </HsSkillStack>
      </HsCard>
    </HsGrid>
  );
}
