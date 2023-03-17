import styled from 'styled-components';

import ExperienceHistory from '@/components/experience/ExperienceHistory';
import { expHistory } from '@/constants/experienctHistory';

export default function Experience() {
  return (
    <ExperienceWrapper>
      <ExperienceHeading className={'experience-heading'}>
        Work Experience
      </ExperienceHeading>
      {expHistory.map((history, idx) => (
        <ExperienceHistory key={idx} {...history} />
      ))}
    </ExperienceWrapper>
  );
}

const ExperienceWrapper = styled.div``;

const ExperienceHeading = styled.h2`
  font-family: var(--luke2327-fonts-heading);
  font-weight: 400;
  font-size: var(--luke2327-fontSizes-md);
  line-height: 1.2;
  margin-bottom: var(--luke2327-space-10);
`;
