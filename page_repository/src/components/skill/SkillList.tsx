import styled from 'styled-components';

import { defaultThemeColor } from '@/constants/AppConfig';
import skills from '@/constants/skillList';

export default function SkillList() {
  return (
    <div className={'flex flex-wrap gap-3'}>
      {skills.map((skill) => (
        <SkillIcon
          key={skill}
          alt={skill}
          src={`images/${defaultThemeColor}/${skill}.svg`}
        />
      ))}
    </div>
  );
}

const SkillIcon = styled.img`
  width: 24px;
  height: 24px;
`;
