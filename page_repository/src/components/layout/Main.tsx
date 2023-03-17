import Description from '@/components/description/Description';
import Experience from '@/components/experience/Experience';
import Profile from '@/components/introduction/Profile';

export default function Main() {
  return (
    <div className={'mx-auto px-4 pt-28 sm:max-w-[36rem]'}>
      <Profile />
      <Description />
      <Experience />
    </div>
  );
}
