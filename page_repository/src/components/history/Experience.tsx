import ExperienceHistory from '@/components/history/ExperienceHistory';
import { HistoryWrapper, HsHeading } from '@/components/history/Historys';
import type { History } from '@/constants/experienctHistory';

type INodeProps = {
  head: string;
  history: History[];
  id: string;
};

export default function Experience(props: INodeProps) {
  return (
    <HistoryWrapper id={props.id} role={'row-group'} aria-label={'Experience'}>
      <HsHeading
        role={'heading'}
        aria-level={3}
        aria-label={`heading: ${props.head}`}
        className={'history-heading text-xl xs:text-lg'}
      >
        {props.head}
      </HsHeading>
      {props.history.map((history, idx) => (
        <ExperienceHistory aria-rowindex={idx} key={idx} {...history} />
      ))}
    </HistoryWrapper>
  );
}
