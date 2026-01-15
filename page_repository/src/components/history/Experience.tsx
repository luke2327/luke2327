import ExperienceHistory from '@/components/history/ExperienceHistory';
import { HistoryWrapper, HsHeading } from '@/components/history/Historys';
import type { History } from '@/constants/experienctHistory';
import clsx from 'clsx';
import AnimateItems from '../animate/AnimateItems';

type INodeProps = {
  head: string;
  history: History[];
  id: string;
  hideTitle?: boolean;
  isAnimate?: boolean;
};

export default function Experience(props: INodeProps) {
  const getHistorys = () => {
    return props.history.map((history, idx) => (
      <ExperienceHistory
        key={idx}
        aria-rowindex={idx}
        aria-rowspan={props.history.length}
        {...history}
      />
    ));
  };

  return (
    <HistoryWrapper id={props.id} role={'row-group'} aria-label={'Experience'}>
      <HsHeading
        role={'heading'}
        aria-level={3}
        aria-label={`heading: ${props.head}`}
        className={clsx(
          'history-heading text-xl xs:text-lg',
          props.hideTitle ? 'hidden' : 'block'
        )}
      >
        {props.head}
      </HsHeading>
      {props.isAnimate ? (
        <AnimateItems items={getHistorys()} />
      ) : (
        <>{getHistorys()}</>
      )}
    </HistoryWrapper>
  );
}
