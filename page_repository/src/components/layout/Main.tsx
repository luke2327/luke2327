import Description from '@/components/description/Description';
import Experience from '@/components/experience/Experience';
import Profile from '@/components/introduction/Profile';
import Link from '@/components/link/Link';
// constants
import { expHistory } from '@/constants/experienctHistory';

export default function Main() {
  return (
    <div className={'mx-auto px-4 py-28 sm:max-w-[36rem]'}>
      <Profile aria-level={2} />
      <Description aria-level={2} />
      <Experience
        aria-level={2}
        head={'Work Experience'}
        history={expHistory}
      />
      {/* <Experience head={'Side Projects'} history={expHistory} /> */}
      <Link aria-level={2} />
    </div>
  );
}
