import styled from 'styled-components';

import { defaultThemeColor } from '@/constants/AppConfig';
import skills from '@/constants/skillList';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import AnimateItems from '../animate/AnimateItems';

export default function SkillList() {
  return (
    <div className={'flex flex-wrap gap-3'}>
      <AnimateItems
        className={'flex flex-wrap gap-3 transition-all'}
        duration={0.7}
        staggerDelay={0.1}
        distanceOffset={0}
        staggerOnFirstLoadOnly
        items={skills.map((skill, idx) => (
          <TooltipProvider key={idx}>
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
      />
    </div>
  );
}

const SkillIcon = styled.img`
  width: 24px;
  height: 24px;
`;
