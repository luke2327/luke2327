import styled from 'styled-components';

export default function Profile() {
  return (
    <ProfileArea className={'mx-auto grid w-full gap-1 p-0'}>
      Luke2327
    </ProfileArea>
  );
}

const ProfileArea = styled.div`
  display: grid;
  grid-gap: clamp(4px, calc(-5.09px + 2.42vw), 24px);
  grid-template-columns: repeat(4, 1fr);
  max-width: 1920px;
  width: 100%;
  -webkit-margin-start: auto;
  margin-inline-start: auto;
  -webkit-margin-end: auto;
  margin-inline-end: auto;
  margin-bottom: 2.5rem;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;
