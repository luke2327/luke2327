import styled from 'styled-components';

export default function ProfileBadge() {
  return (
    <ProfileWrapper>
      <ProfileWrapperButton>
        <Profile className={'flex items-center justify-center'}>
          <ProfileImg
            className={'profile-img rounded-xl'}
            alt={'luke2327 profile image'}
            width={85}
            height={85}
            src={`/images/4963BF28-9DA0-4DAA-9DF1-22194881E47A.jpeg`}
          />
        </Profile>
      </ProfileWrapperButton>
    </ProfileWrapper>
  );
}

const ProfileWrapper = styled.div`
  grid-column: span 1 / span 1;
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
