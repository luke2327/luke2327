import Description from '@/components/description/Description';
import AssociateCompany from '@/components/history/AssociateCompany';
import Experience from '@/components/history/Experience';
import Profile from '@/components/introduction/Profile';
import Link from '@/components/link/Link';
import Skill from '@/components/skill/Skill';
// constants
import { expHistory } from '@/constants/experienctHistory';
import { spHistory } from '@/constants/sideProjectsHistory';

export default function Main() {
  return (
    <div id={'main'} className={'mx-auto px-4 pb-28 pt-24 sm:max-w-[36rem]'}>
      <Profile aria-level={2} />
      <Description aria-level={2} />
      <Skill aria-level={2} />
      <Experience
        aria-level={2}
        head={'Work Experience'}
        history={expHistory}
      />
      <Experience aria-level={2} head={'Side Projects'} history={spHistory} />
      <AssociateCompany />
      <Link aria-level={2} />
    </div>
  );
}
