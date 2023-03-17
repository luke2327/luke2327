import styled from 'styled-components';

export default function ProfileBadge() {
  return (
    <ProfileWrapper>
      <ProfileWrapperButton>
        <Profile className={'flex items-center justify-center'}>
          <ProfileImg
            className={'rounded-xl'}
            // src={'https://luke2327.lol/profile.png'}
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
  border: 1px solid white;
`;
