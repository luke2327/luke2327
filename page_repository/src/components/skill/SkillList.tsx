import styled from 'styled-components';

import { defaultThemeColor } from '@/constants/AppConfig';
import skills from '@/constants/skillList';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function SkillList() {
  return (
    <div className={'flex flex-wrap gap-3'}>
      {skills.map((skill) => (
        <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <SkillIcon
              key={skill}
              alt={skill}
              src={`images/${defaultThemeColor}/${skill}.svg`}
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>{skill}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      ))}
    </div>
  );
}

const SkillIcon = styled.img`
  width: 24px;
  height: 24px;
`;
