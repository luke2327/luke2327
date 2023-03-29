import Description from '@/components/description/Description';
import Experience from '@/components/history/Experience';
import Profile from '@/components/introduction/Profile';
import Link from '@/components/link/Link';
// constants
import { expHistory } from '@/constants/experienctHistory';
import { spHistory } from '@/constants/sideProjectsHistory';

export default function Main() {
  return (
    <div id={'main'} className={'mx-auto px-4 py-28 sm:max-w-[36rem]'}>
      <Profile aria-level={2} />
      <Description aria-level={2} />
      <Experience
        aria-level={2}
        head={'Work Experience'}
        history={expHistory}
      />
      <Experience aria-level={2} head={'Side Projects'} history={spHistory} />
      <Link aria-level={2} />
    </div>
  );
}
