import styled from 'styled-components';

import SkillList from '@/components/skill/SkillList';

export default function Skill() {
  return (
    <SkillListWrapper role={'skill'}>
      <SkillListHeading role={'heading'} className={'skill-heading'}>
        Skill
      </SkillListHeading>
      <SkillList />
    </SkillListWrapper>
  );
}

const SkillListWrapper = styled.div`
  margin-bottom: var(--luke2327-space-10);
`;

const SkillListHeading = styled.h2`
  font-family: var(--luke2327-fonts-heading);
  font-weight: 400;
  font-size: var(--luke2327-fontSizes-md);
  line-height: 1.2;
  margin-top: var(--luke2327-space-14);
  margin-bottom: var(--luke2327-space-4);
`;
