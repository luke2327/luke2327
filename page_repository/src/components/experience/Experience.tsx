import styled from 'styled-components';

import ExperienceHistory from '@/components/experience/ExperienceHistory';
import type { ExpHistory } from '@/constants/experienctHistory';

type INodeProps = {
  head: string;
  history: ExpHistory[];
};

export default function Experience(props: INodeProps) {
  return (
    <ExperienceWrapper role={'row-group'} aria-label={'Experience'}>
      <ExperienceHeading
        role={'heading'}
        aria-level={3}
        aria-label={`heading: ${props.head}`}
        className={'experience-heading'}
      >
        {props.head}
      </ExperienceHeading>
      {props.history.map((history, idx) => (
        <ExperienceHistory aria-rowindex={idx} key={idx} {...history} />
      ))}
    </ExperienceWrapper>
  );
}

const ExperienceWrapper = styled.div``;

const ExperienceHeading = styled.h2`
  font-size: var(--luke2327-fontSizes-md);
  font-family: var(--luke2327-fonts-heading);
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: var(--luke2327-space-10);
`;
