import styled from 'styled-components';

import ProfileBadge from '@/components/introduction/ProfileBadge';
import ProfileDescription from '@/components/introduction/ProfileDescription';

export default function Profile() {
  return (
    <ProfileArea
      aria-label={'profile'}
      className={'mx-auto grid w-full gap-1 p-0'}
    >
      <ProfileBadge aria-label={'profile badge'} />
      <ProfileDescription
        aria-label={'profile description'}
        className={'pt-7'}
      />
    </ProfileArea>
  );
}

const ProfileArea = styled.div`
  display: grid;
  grid-gap: clamp(4px, calc(-5.09px + 2.42vw), 24px);
  grid-template-columns: repeat(4, 1fr);
  max-width: 1920px;
  width: 100%;
  margin-inline-start: auto;
  margin-inline-end: auto;
  margin-bottom: var(--luke2327-space-10);
  align-items: center;
`;
