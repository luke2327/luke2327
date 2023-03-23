import styled from 'styled-components';

import type { ExpHistory } from '@/constants/experienctHistory';

export default function ExperienceHistory(props: ExpHistory) {
  return (
    <ExpGrid role={'row'}>
      <ExpPeriod
        aria-label={`period: ${props.period}`}
        className={'experience-period'}
      >
        {props.period}
      </ExpPeriod>
      <ExpCard>
        <ExpAnchor
          aria-label={`title: ${props.title.en}`}
          className={'experience-anchor'}
          href={props.link}
        >
          {props.title.en}
          {props.link && (
            <ExpArrowLink
              alt={`link: ${props.title.en}`}
              width={14}
              height={14}
              src={'/images/arrow-link.svg'}
            />
          )}
        </ExpAnchor>
        <ExpDescription aria-label={`description: ${props.description.en}`}>
          {props.description.en}
        </ExpDescription>
        <ExpSkillStack
          aria-label={`skill-stack: ${props.skill.join()}`}
          className={'experience-skill-stack'}
        >
          {props.skill.join(' • ')}
        </ExpSkillStack>
      </ExpCard>
    </ExpGrid>
  );
}

const ExpGrid = styled.div`
  display: grid;
  grid-gap: clamp(4px, calc(-5.09px + 2.42vw), 24px);
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  max-width: 1920px;
  padding-inline-start: 0px;
  padding-inline-end: 0px;
  margin-inline-start: auto;
  margin-inline-end: auto;
  margin-bottom: var(--luke2327-space-10);
`;

const ExpPeriod = styled.p`
  grid-column: span 4 / span 4;

  @media screen and (min-width: 480px) {
    grid-column: span 1 / span 1;
  }
`;

const ExpCard = styled.div`
  grid-column: span 4 / span 4;

  @media screen and (min-width: 480px) {
    grid-column: span 3 / span 3;
  }
`;

const ExpAnchor = styled.a`
  font-family: var(--luke2327-fonts-heading);
  font-weight: 400;
  font-size: var(--luke2327-fontSizes-md);
  line-height: 1.2;
  display: flex;
  align-items: center;
`;

const ExpArrowLink = styled.img`
  margin-left: var(--luke2327-space-2);
  transform: translateY(1px);
`;

const ExpDescription = styled.p`
  margin-top: var(--luke2327-space-2);
  margin-bottom: var(--luke2327-space-2);
`;

const ExpSkillStack = styled.p``;
