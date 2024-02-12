import Image from 'next/image';
import styled from 'styled-components';
import { ProfileAnchor, ProfileHeading, ProfileParagraph } from './ProfileDescription';
import { extUrls } from '@/constants/externalLinks';

export default function ProfileBadge() {
  return (
    <ProfileWrapper className="flex gap-4">
      <ProfileWrapperButton>
        <Profile className={'flex items-center justify-center'}>
          <Image
            className={'rounded-xl border border-gray-light border-solid grayscale-[0.5]'}
            alt={'luke2327 profile image'}
            width={85}
            height={85}
            src={`/images/4963BF28-9DA0-4DAA-9DF1-22194881E47A.jpeg`}
          />
        </Profile>
      </ProfileWrapperButton>
      <div className="block xs:hidden">
        <ProfileHeading
          role={'heading'}
          aria-label={'name'}
          className={'profile-heading block xs:hidden'}
        >
          Liam
        </ProfileHeading>
        <ProfileParagraph aria-label={'jobs'} className="text-xs">
          Product-focused Fullstack Developer
        </ProfileParagraph>
        <ProfileAnchor
          aria-label={`link: ${extUrls.github}`}
          href={extUrls.github}
          className="text-xs"
        >
          luke2327
        </ProfileAnchor>
      </div>
    </ProfileWrapper>
  );
}

const ProfileWrapper = styled.div`
  grid-column: span 4 / span 4;

  @media screen and (min-width: 360px) {
    grid-column: span 1 / span 1;
  }
`;

const ProfileWrapperButton = styled.button`
  cursor: default;
  transition: all 0.25s cubic-bezier(0.68, -0.6, 0.32, 1.6) 0s;
  background: transparent;
`;

const Profile = styled.div`
  position: relative;
`;

const ProfileImg = styled.img`
  width: 80%;
  height: auto;
  max-width: 100%;
  filter: grayscale(0.5);
`;
