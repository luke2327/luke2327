import { useTheme } from 'next-themes';
import styled from 'styled-components';

import skills from '@/constants/skillList';

export default function SkillList() {
  const { theme } = useTheme();
  return (
    <div className={'flex flex-wrap gap-3'}>
      {skills.map((skill) => (
        <SkillIcon
          key={skill}
          alt={skill}
          src={`images/${theme}/${skill}.svg`}
        />
      ))}
    </div>
  );
}

const SkillIcon = styled.img`
  width: 24px;
  height: 24px;
`;
